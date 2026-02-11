import React, { useState } from 'react';
import { D3Graph, GraphNode, GraphLink } from './D3Graph';
import physicsData from '../../../physics_demo_graph.json';

const KnowledgeDemo: React.FC = () => {
    const [nodes, setNodes] = useState<GraphNode[]>(physicsData.nodes);
    const [links] = useState<GraphLink[]>(physicsData.links as GraphLink[]);

    const handleMasteryToggle = (nodeId: string) => {
        setNodes(prev => prev.map(node => {
            if (node.id === nodeId) {
                // Cycle mastery: 0.95 -> 0.45 -> 0.1 -> 0.95
                const nextMastery = node.mastery === 0.95 ? 0.45 : node.mastery === 0.45 ? 0.1 : 0.95;
                return { ...node, mastery: nextMastery };
            }
            return node;
        }));
    };

    return (
        <div className="relative group">
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <div className="bg-zinc-950/80 px-3 py-1.5 rounded-full border border-zinc-800 text-[10px] font-mono text-cyan-400 flex items-center gap-2 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    LIVE MASTERY ENGINE
                </div>
            </div>

            <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-2 pointer-events-none">
                <div className="bg-zinc-950/90 p-4 rounded-xl border border-zinc-800 backdrop-blur-xl max-w-[240px] shadow-2xl transition-all duration-500 group-hover:border-royal-blue/30">
                    <p className="text-[10px] font-bold text-royal-blue uppercase tracking-widest mb-2">Socratic Insight</p>
                    <p className="text-xs text-zinc-300 leading-relaxed italic">
                        "I notice you're struggling with <span className="text-rose-400 font-bold">Vector Decomposition</span>. How would you resolve the gravity vector into components parallel and perpendicular to the incline?"
                    </p>
                </div>
            </div>

            <D3Graph
                nodes={nodes}
                links={links}
                config={{
                    showMastery: true,
                    enableZoom: true,
                    enableDrag: true,
                    showLegend: true,
                    legendPosition: 'overlay'
                }}
                onNodeClick={(node) => handleMasteryToggle(node.id)}
                className="h-[500px]"
            />

            <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">
                <span>Click nodes to toggle cognitive state</span>
                <span>Physics v1.02 • Mastery Service active</span>
            </div>
        </div>
    );
};

export default KnowledgeDemo;
