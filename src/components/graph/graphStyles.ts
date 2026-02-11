export type EdgeLineStyle = 'solid' | 'dashed' | 'dotted';

export type EdgeStyle = {
    label: string;
    color: string;
    lineStyle: EdgeLineStyle;
    dasharray: string;
    markerId: string;
};

export const normalizeEdgeType = (type?: string | null): string => {
    if (!type) return 'unknown';
    if (type === 'prerequisite') return 'is_prerequisite_for';
    if (type === 'is_related_to') return 'is_analogous_to';
    return type;
};

export const EDGE_TYPE_STYLES: Record<string, EdgeStyle> = {
    is_prerequisite_for: {
        label: 'Prerequisite',
        color: '#476ee3',
        lineStyle: 'solid',
        dasharray: '0',
        markerId: 'arrow-indigo',
    },
    is_component_of: {
        label: 'Component',
        color: '#34d399',
        lineStyle: 'dashed',
        dasharray: '4,2',
        markerId: 'arrow-emerald',
    },
    conflicts_with: {
        label: 'Conflict',
        color: '#f43f5e',
        lineStyle: 'solid',
        dasharray: '0',
        markerId: 'arrow-rose',
    },
    is_analogous_to: {
        label: 'Analogy',
        color: '#22d3ee',
        lineStyle: 'dotted',
        dasharray: '2,2',
        markerId: 'arrow-cyan',
    },
    is_specialization_of: {
        label: 'Specialization',
        color: '#fbbf24',
        lineStyle: 'dashed',
        dasharray: '6,2',
        markerId: 'arrow-amber',
    },
    is_application_of: {
        label: 'Application',
        color: '#a855f7',
        lineStyle: 'solid',
        dasharray: '0',
        markerId: 'arrow-violet',
    },
    assesses_concept: {
        label: 'Assessment',
        color: '#f97316',
        lineStyle: 'dotted',
        dasharray: '1,3',
        markerId: 'arrow-orange',
    },
};

export const DEFAULT_EDGE_STYLE: EdgeStyle = {
    label: 'Related',
    color: '#476ee3',
    lineStyle: 'solid',
    dasharray: '0',
    markerId: 'arrow-indigo',
};

export const KNOWN_EDGE_TYPES: string[] = [
    'is_prerequisite_for',
    'is_component_of',
    'conflicts_with',
    'is_analogous_to',
    'is_specialization_of',
    'is_application_of',
    'assesses_concept',
];

export const getEdgeStyle = (type?: string | null): EdgeStyle => {
    const normalized = normalizeEdgeType(type);
    return EDGE_TYPE_STYLES[normalized] || DEFAULT_EDGE_STYLE;
};

type NodeLike = { type?: string | null; group?: string | null };
type LinkLike = { type?: string | null };

export const getNodeLegendType = (node: NodeLike): string => {
    if (node.type === 'root') return 'root';
    if (node.type === 'misconception' || node.group === 'misconception') return 'misconception';
    return 'concept';
};

export const getLegendNodeTypes = (nodes: NodeLike[], includeAllIfEmpty = true): string[] => {
    const types = new Set<string>();
    nodes.forEach((node) => types.add(getNodeLegendType(node)));
    if (types.size === 0 && includeAllIfEmpty) {
        return ['concept', 'misconception'];
    }
    return Array.from(types);
};

export const getLegendEdgeTypes = (links: LinkLike[], includeAllIfEmpty = true): string[] => {
    const types = new Set<string>();
    links.forEach((link) => {
        const normalized = normalizeEdgeType(link.type);
        if (EDGE_TYPE_STYLES[normalized]) {
            types.add(normalized);
        }
    });
    if (types.size === 0 && includeAllIfEmpty) {
        return KNOWN_EDGE_TYPES.slice();
    }
    return Array.from(types);
};
