import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';
import GraphLegend from './GraphLegend';
import { getEdgeStyle, getLegendEdgeTypes, getLegendNodeTypes, normalizeEdgeType } from './graphStyles';

export interface GraphNode extends d3.SimulationNodeDatum {
    id: string;
    label: string;
    type?: string; // prerequisite, concept, etc
    group?: string; // fallback for type
    mastery?: number;
    weight?: number;
    [key: string]: any;
}

export interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
    source: string | GraphNode;
    target: string | GraphNode;
    type: string;
    [key: string]: any;
}

export interface GraphConfig {
    readonly?: boolean;
    showMastery?: boolean;
    enableZoom?: boolean;
    enableDrag?: boolean;
    showLegend?: boolean;
    legendPosition?: 'bottom' | 'overlay';
}

interface D3GraphProps {
    nodes: GraphNode[];
    links: GraphLink[];
    config?: GraphConfig;
    className?: string;
    onNodeClick?: (node: GraphNode, event: MouseEvent) => void;
    onBackgroundClick?: () => void;
    children?: React.ReactNode;
}

export const D3Graph: React.FC<D3GraphProps> = ({
    nodes: propNodes,
    links: propLinks,
    config = {},
    className = "",
    onNodeClick,
    onBackgroundClick,
    children
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const legendNodeTypes = useMemo(() => getLegendNodeTypes(propNodes), [propNodes]);
    const legendEdgeTypes = useMemo(() => getLegendEdgeTypes(propLinks), [propLinks]);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current) return;
        if (!propNodes.length) {
            d3.select(svgRef.current).selectAll("*").remove();
            return;
        }

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        d3.select(svgRef.current).selectAll("*").remove();

        const svg = d3.select(svgRef.current)
            .attr("viewBox", [0, 0, width, height])
            .style("overflow", "visible")
            .style("cursor", config.readonly ? "default" : "grab");

        const container = svg.append("g");

        const defs = svg.append("defs");

        const filter = defs.append("filter").attr("id", "glow");
        filter.append("feGaussianBlur").attr("stdDeviation", "2.5").attr("result", "coloredBlur");
        const feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode").attr("in", "coloredBlur");
        feMerge.append("feMergeNode").attr("in", "SourceGraphic");

        const createMarker = (id: string, color: string) => {
            defs.append("marker")
                .attr("id", id)
                .attr("viewBox", "0 -5 10 10")
                .attr("refX", 24)
                .attr("refY", 0)
                .attr("markerWidth", 6)
                .attr("markerHeight", 6)
                .attr("orient", "auto")
                .append("path")
                .attr("fill", color)
                .attr("d", "M0,-5L10,0L0,5");
        };

        createMarker("arrow-indigo", "#476ee3");
        createMarker("arrow-rose", "#f43f5e");
        createMarker("arrow-cyan", "#22d3ee");
        createMarker("arrow-emerald", "#34d399");
        createMarker("arrow-amber", "#fbbf24");
        createMarker("arrow-violet", "#a855f7");
        createMarker("arrow-orange", "#f97316");

        const nodes = propNodes.map(n => ({ ...n }));
        const links = propLinks.map(l => ({ ...l }));

        const simulation = d3.forceSimulation(nodes as any)
            .force("link", d3.forceLink(links).id((d: any) => d.id).distance(90))
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide().radius(30));

        const getMarker = (type: string) => {
            const style = getEdgeStyle(type);
            return style.markerId ? `url(#${style.markerId})` : null;
        };

        const link = container.append("g")
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke-width", (d: any) => normalizeEdgeType(d.type) === 'is_prerequisite_for' ? 2 : 1.5)
            .attr("stroke", (d: any) => getEdgeStyle(d.type).color)
            .attr("stroke-dasharray", (d: any) => getEdgeStyle(d.type).dasharray)
            .attr("marker-end", (d: any) => getMarker(d.type))
            .style("stroke-opacity", 0.8);

        const drag = (simulation: d3.Simulation<any, undefined>) => {
            function dragstarted(event: any) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
                d3.select(containerRef.current).style("cursor", "grabbing");
            }

            function dragged(event: any) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event: any) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
                d3.select(containerRef.current).style("cursor", "grab");
            }

            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        };

        const node = container.append("g")
            .selectAll("g")
            .data(nodes)
            .join("g")
            .attr("cursor", config.readonly ? "default" : "grab");

        if (!config.readonly && config.enableDrag !== false) {
            node.call(drag(simulation) as any);
        }

        node.each(function (d: any) {
            const el = d3.select(this);
            el.append("circle")
                .attr("r", 20)
                .attr("fill", "transparent");

            const isMisconception = (d.type === 'misconception' || d.group === 'misconception');
            const isRoot = d.type === 'root';

            let fillColor = isRoot ? "#476ee3" : "#1e1b4b";
            let strokeColor = isRoot ? "#9cb5f8" : "#476ee3";

            if (config.showMastery && typeof d.mastery === 'number') {
                if (d.mastery >= 0.7) {
                    fillColor = "#059669";
                    strokeColor = "#34d399";
                } else if (d.mastery >= 0.4) {
                    fillColor = "#d97706";
                    strokeColor = "#fbbf24";
                } else {
                    fillColor = "#be123c";
                    strokeColor = "#f43f5e";
                }
            }

            if (isMisconception) {
                el.append("rect")
                    .attr("width", 20).attr("height", 20).attr("x", -10).attr("y", -10)
                    .attr("fill", "#1e1b4b")
                    .attr("stroke", "#f43f5e")
                    .attr("stroke-width", 2)
                    .style("filter", "url(#glow)");
            } else {
                el.append("circle")
                    .attr("r", isRoot ? 14 : (8 + Math.sqrt(d.weight || 1) * 2))
                    .attr("fill", fillColor)
                    .attr("stroke", strokeColor)
                    .attr("stroke-width", 2)
                    .style("filter", "url(#glow)");
            }
        });

        node.append("text")
            .text((d: any) => d.label)
            .attr("x", 14)
            .attr("y", 4)
            .attr("font-family", "monospace")
            .attr("font-size", "10px")
            .attr("fill", "#a1a1aa")
            .style("pointer-events", "none")
            .style("user-select", "none");

        const handleNodeClick = (event: any, d: GraphNode) => {
            event.stopPropagation();
            if (onNodeClick) onNodeClick(d, event as any);

            const connectedIds = new Set<string>();
            connectedIds.add(d.id);
            links.forEach((l: any) => {
                const sourceId = typeof l.source === 'string' ? l.source : l.source.id;
                const targetId = typeof l.target === 'string' ? l.target : l.target.id;
                if (sourceId === d.id) connectedIds.add(targetId);
                if (targetId === d.id) connectedIds.add(sourceId);
            });

            node.transition().duration(200).style("opacity", (n: any) => {
                return connectedIds.has(n.id) ? 1 : 0.2;
            });

            link.transition().duration(200).style("opacity", (l: any) => {
                const sourceId = typeof l.source === 'string' ? l.source : l.source.id;
                const targetId = typeof l.target === 'string' ? l.target : l.target.id;
                return (sourceId === d.id || targetId === d.id) ? 0.8 : 0.05;
            });
        };

        const resetFocus = () => {
            node.transition().duration(200).style("opacity", 1);
            link.transition().duration(200).style("opacity", 0.8);
            if (onBackgroundClick) onBackgroundClick();
        };

        node.on("click", handleNodeClick);

        node.on("mouseenter", (event, d) => {
            setHoveredNode(d as GraphNode);
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setTooltipPosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                });
            }
        }).on("mouseleave", () => {
            setHoveredNode(null);
        });

        svg.on("click", resetFocus);

        if (config.enableZoom !== false) {
            const zoom = d3.zoom<SVGSVGElement, unknown>()
                .scaleExtent([0.1, 4])
                .on("zoom", (event) => container.attr("transform", event.transform));

            svg.call(zoom).on("dblclick.zoom", null);
        }

        simulation.on("tick", () => {
            link
                .attr("x1", (d: any) => (d.source as any).x)
                .attr("y1", (d: any) => (d.source as any).y)
                .attr("x2", (d: any) => (d.target as any).x)
                .attr("y2", (d: any) => (d.target as any).y);

            node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
        });

        return () => {
            simulation.stop();
        };

    }, [propNodes, propLinks, config]);

    return (
        <div className={`space-y-3 ${className}`}>
            <div ref={containerRef} className="relative w-full h-full min-h-[400px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm group shadow-inner">
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                />

                {children}

                {hoveredNode && (
                    <div
                        ref={tooltipRef}
                        className="absolute z-50 bg-zinc-950/95 backdrop-blur-sm border border-zinc-800 rounded-lg p-3 pointer-events-none"
                        style={{
                            left: `${tooltipPosition.x + 10}px`,
                            top: `${tooltipPosition.y - 10}px`,
                            transform: 'translateY(-100%)',
                        }}
                    >
                        <div className="text-sm font-semibold text-zinc-100 mb-1">
                            {hoveredNode.label}
                        </div>
                        <div className="text-xs text-zinc-400 mb-2 capitalize">
                            {hoveredNode.group || hoveredNode.type}
                        </div>
                        {config.showMastery && typeof hoveredNode.mastery === 'number' && (
                            <div className="text-xs text-zinc-300">
                                Mastery: <span className={`font-semibold ${hoveredNode.mastery >= 0.7 ? 'text-emerald-400' : hoveredNode.mastery >= 0.4 ? 'text-amber-400' : 'text-rose-400'}`}>
                                    {Math.round(hoveredNode.mastery * 100)}%
                                </span>
                            </div>
                        )}
                    </div>
                )}

                <svg ref={svgRef} className="w-full h-full relative z-0 active:cursor-grabbing" onClick={onBackgroundClick} />
            </div>

            {config.showLegend !== false && (
                config.legendPosition === 'overlay' ? (
                    <GraphLegend
                        nodeTypes={legendNodeTypes}
                        edgeTypes={legendEdgeTypes}
                        showMastery={config.showMastery}
                        compact
                        className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-2 pointer-events-none"
                    />
                ) : (
                    <GraphLegend
                        nodeTypes={legendNodeTypes}
                        edgeTypes={legendEdgeTypes}
                        showMastery={config.showMastery}
                        className="border-t border-zinc-800 pt-3"
                    />
                )
            )}
        </div>
    );
};
