import React from 'react';
import { EDGE_TYPE_STYLES, DEFAULT_EDGE_STYLE } from './graphStyles';

const NODE_STYLES: Record<string, { label: string; variant: 'circle' | 'square'; fill: string; stroke?: string }> = {
    concept: {
        label: 'Concept',
        variant: 'circle',
        fill: '#476ee3',
    },
    misconception: {
        label: 'Misconception',
        variant: 'square',
        fill: '#1e1b4b',
        stroke: '#f43f5e',
    },
    root: {
        label: 'Root',
        variant: 'circle',
        fill: '#476ee3',
        stroke: '#9cb5f8',
    },
};

interface GraphLegendProps {
    nodeTypes?: string[];
    edgeTypes?: string[];
    showMastery?: boolean;
    compact?: boolean;
    className?: string;
}

const GraphLegend: React.FC<GraphLegendProps> = ({
    nodeTypes = ['concept', 'misconception'],
    edgeTypes = [],
    showMastery = false,
    compact = false,
    className = '',
}) => {
    const textSize = compact ? 'text-[10px]' : 'text-xs';
    const gapX = compact ? 'gap-x-4' : 'gap-x-6';
    const gapY = compact ? 'gap-y-1.5' : 'gap-y-2';

    return (
        <div className={`flex flex-wrap ${gapX} ${gapY} ${textSize} text-zinc-500 font-mono ${className}`}>
            {nodeTypes.map((type) => {
                const style = NODE_STYLES[type];
                if (!style) return null;
                const shapeClasses = style.variant === 'circle' ? 'rounded-full' : '';
                return (
                    <div key={type} className="flex items-center gap-2">
                        <div
                            className={`w-3 h-3 ${shapeClasses}`}
                            style={{
                                backgroundColor: style.fill,
                                border: style.stroke ? `1px solid ${style.stroke}` : undefined,
                                boxShadow: style.stroke ? `0 0 6px ${style.stroke}` : undefined,
                            }}
                        />
                        <span>{style.label}</span>
                    </div>
                );
            })}

            {edgeTypes.map((edgeType) => {
                const style = EDGE_TYPE_STYLES[edgeType] || DEFAULT_EDGE_STYLE;
                const borderStyle =
                    style.lineStyle === 'dashed' ? 'dashed' : style.lineStyle === 'dotted' ? 'dotted' : 'solid';
                return (
                    <div key={edgeType} className="flex items-center gap-2">
                        <div
                            className="w-6 h-0.5"
                            style={{
                                borderTopWidth: '2px',
                                borderTopStyle: borderStyle,
                                borderTopColor: style.color,
                                backgroundColor: borderStyle === 'solid' ? style.color : 'transparent',
                            }}
                        />
                        <span>{style.label}</span>
                    </div>
                );
            })}

            {showMastery && (
                <>
                    <div className="w-px h-4 bg-zinc-800 mx-1" />
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#059669] ring-2 ring-[#34d399]/30" style={{ boxShadow: '0 0 5px #34d399' }} />
                        <span>High Mastery</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#d97706] ring-2 ring-[#fbbf24]/30" style={{ boxShadow: '0 0 5px #fbbf24' }} />
                        <span>Medium</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#be123c] ring-2 ring-[#f43f5e]/30" style={{ boxShadow: '0 0 5px #f43f5e' }} />
                        <span>Low</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default GraphLegend;
