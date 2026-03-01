import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Reorder, useDragControls } from 'framer-motion';
import {
    Sun, Moon, Monitor, Tablet, Smartphone, Undo2, Redo2,
    MousePointer, Layers, Plus, Trash2, Copy, ChevronUp, ChevronDown,
    Zap, Shield, Type, Image, LayoutGrid, Square, Minus,
    Activity, Terminal, Box, X, Code2, Download,
    Navigation, ToggleLeft, Maximize2, Clock, Star, BarChart2,
    Grid, Settings2, Scroll, Check, User, MessageSquare, Code, Circle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AcidBadge } from '../components/AcidBadge';
import {
    renderBlock, PROP_CONFIGS, BLOCK_DEFAULTS, getWizardSteps,
    type Block, type PropDef
} from './StudioBlocks';
import './Studio.css';

/* ─────────── TYPES ─────────── */
type Viewport = 'desktop' | 'tablet' | 'mobile';
type PanelTab = 'components' | 'layers' | 'settings';
type RightTab = 'props' | 'style';

interface CtxMenuState { blockId: string; x: number; y: number }

/* ─────────── CATALOG ─────────── */
interface CatalogItem { id: string; label: string; icon: React.ReactNode; isNew?: boolean; color?: string }
interface CatalogCategory { category: string; items: CatalogItem[] }

const CATALOG: CatalogCategory[] = [
    {
        category: 'LAYOUT_ENGINES', items: [
            { id: 'section', label: 'GRID SECTION', icon: <Grid size={16} />, color: '#f44336' },
            { id: 'bento', label: 'BENTO GRID', icon: <Grid size={16} />, color: '#00f0ff' },
            { id: 'masonry', label: 'MASONRY', icon: <LayoutGrid size={16} />, color: '#ffbd2e' },
            { id: 'stack-list', label: 'STACK LIST', icon: <Layers size={16} />, color: '#27c93f' },
            { id: 'cube-grid', label: 'CUBE GRID', icon: <Grid size={16} />, color: '#00f0ff' },
            { id: 'magic-bento', label: 'MAGIC BENTO', icon: <Zap size={16} />, isNew: true, color: '#f44336' },
        ]
    },
    {
        category: 'CORE_CONTENT', items: [
            { id: 'hero', label: 'HERO', icon: <Star size={16} />, color: '#f44336' },
            { id: 'features', label: 'FEATURES', icon: <Box size={16} />, color: '#00f0ff' },
            { id: 'cta', label: 'CTA', icon: <Zap size={16} />, color: '#ffbd2e' },
            { id: 'text', label: 'TEXT', icon: <Type size={16} />, color: '#27c93f' },
            { id: 'navbar', label: 'NAVBAR', icon: <Navigation size={16} />, color: '#7c3aed' },
            { id: 'divider', label: 'DIVIDER', icon: <Minus size={16} />, color: '#f44336' },
            { id: 'image', label: 'IMAGE', icon: <Image size={16} />, color: '#00f0ff' },
        ]
    },
    {
        category: 'INTERACTIVE_MODS', items: [
            { id: 'accordion', label: 'ACCORDION', icon: <ChevronDown size={16} />, color: '#7c3aed' },
            { id: 'alert', label: 'ALERT', icon: <Shield size={16} />, color: '#f44336' },
            { id: 'carousel', label: 'CAROUSEL', icon: <Image size={16} />, color: '#00f0ff' },
            { id: 'dialog', label: 'DIALOG', icon: <Maximize2 size={16} />, color: '#ffbd2e' },
            { id: 'drawer', label: 'DRAWER', icon: <Scroll size={16} />, color: '#27c93f' },
            { id: 'dropdown', label: 'DROPDOWN', icon: <ChevronDown size={16} />, color: '#7c3aed' },
            { id: 'sheet', label: 'SHEET', icon: <Square size={16} />, color: '#f44336' },
            { id: 'tabs', label: 'TABS', icon: <Layers size={16} />, color: '#ffbd2e' },
        ]
    },
    {
        category: 'UI_ELEMENTS', items: [
            { id: 'avatar', label: 'AVATAR', icon: <User size={16} />, color: '#f44336' },
            { id: 'badge', label: 'BADGE', icon: <Zap size={16} />, color: '#00f0ff' },
            { id: 'button', label: 'BUTTON', icon: <Box size={16} />, color: '#ffbd2e' },
            { id: 'progress', label: 'PROGRESS', icon: <Activity size={16} />, color: '#27c93f' },
            { id: 'skeleton', label: 'SKELETON', icon: <Square size={16} />, color: '#f44336' },
            { id: 'tooltip', label: 'TOOLTIP', icon: <MessageSquare size={16} />, color: '#00f0ff' },
        ]
    },
    {
        category: 'TERMINAL_SUITE', items: [
            { id: 'terminal-card', label: 'TERM CARD', icon: <Terminal size={16} />, color: '#27c93f' },
            { id: 'terminal-logs', label: 'TERM LOGS', icon: <Terminal size={16} />, color: '#ffbd2e' },
            { id: 'code-block', label: 'CODE BLOCK', icon: <Code size={16} />, color: '#00f0ff' },
        ]
    },
    {
        category: 'INPUT_COMPONENTS', items: [
            { id: 'knob', label: 'KNOB', icon: <Circle size={16} />, isNew: true, color: '#00f0ff' },
            { id: 'slider', label: 'SLIDER', icon: <Minus size={16} />, color: '#ffbd2e' },
            { id: 'switch', label: 'SWITCH', icon: <ToggleLeft size={16} />, color: '#27c93f' },
            { id: 'keypad', label: 'KEYPAD', icon: <Grid size={16} />, isNew: true, color: '#7c3aed' },
            { id: 'input-otp', label: 'OTP INPUT', icon: <Type size={16} />, color: '#00f0ff' },
            { id: 'stepper', label: 'STEPPER', icon: <Activity size={16} />, color: '#f44336' },
            { id: 'input', label: 'INPUT', icon: <Type size={16} />, color: '#00f0ff' },
            { id: 'radio-group', label: 'RADIO', icon: <Circle size={16} />, color: '#ffbd2e' },
        ]
    },
    {
        category: 'DATA_VISUALS', items: [
            { id: 'chart', label: 'CHART', icon: <BarChart2 size={16} />, color: '#00f0ff' },
            { id: 'meter', label: 'METER', icon: <Activity size={16} />, color: '#27c93f' },
            { id: 'lcd-display', label: 'LCD VIEW', icon: <Monitor size={16} />, isNew: true, color: '#ffbd2e' },
            { id: 'progress-matrix', label: 'MATRIX', icon: <Grid size={16} />, isNew: true, color: '#7c3aed' },
            { id: 'timeline', label: 'TIMELINE', icon: <Clock size={16} />, color: '#f44336' },
            { id: 'count-up', label: 'COUNT UP', icon: <ChevronUp size={16} />, color: '#00f0ff' },
        ]
    },
    {
        category: 'SPECIAL_EFFECTS', items: [
            { id: 'aurora-text', label: 'AURORA', icon: <Star size={16} />, color: '#f44336' },
            { id: 'video-text', label: 'VIDEO TEXT', icon: <Image size={16} />, color: '#7c3aed' },
            { id: 'shiny-text', label: 'SHINY', icon: <Star size={16} />, color: '#00f0ff' },
            { id: 'typing-text', label: 'TYPING', icon: <Type size={16} />, color: '#ffbd2e' },
            { id: 'rigid-header', label: 'RIGID HDR', icon: <Type size={16} />, color: '#27c93f' },
            { id: 'text-marquee', label: 'MARQUEE', icon: <Minus size={16} />, color: '#f44336' },
            { id: 'printstream', label: 'PRINTSTRM', icon: <Scroll size={16} />, color: '#7c3aed' },
        ]
    },
];

const BLOCK_COLORS: Record<string, string> = {};
CATALOG.forEach(c => c.items.forEach(i => { BLOCK_COLORS[i.id] = i.color ?? '#f44336'; }));
const TOTAL = CATALOG.reduce((a, c) => a + c.items.length, 0);

/* ─────────── CATALOG ITEM (draggable) ─────────── */
function CatalogBtn({ item, onDragStart, onDragEnd, onClick }: { item: CatalogItem; onDragStart: (item: CatalogItem, x: number, y: number) => void; onDragEnd: () => void; onClick?: () => void }) {
    const [dragging, setDragging] = useState(false);

    const handleDragStart = (e: React.DragEvent<HTMLButtonElement>) => {
        setDragging(true);
        onDragStart(item, e.clientX, e.clientY);
        // Replace the default browser drag ghost with an invisible element
        const ghost = document.createElement('div');
        ghost.style.cssText = 'position:fixed;top:-999px;left:-999px;';
        document.body.appendChild(ghost);
        e.dataTransfer.setDragImage(ghost, 0, 0);
        setTimeout(() => document.body.removeChild(ghost), 0);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{ display: 'contents' }}
        >
            <button
                className={`studio-component-item ${dragging ? 'is-dragging' : ''}`}
                draggable
                onDragStart={handleDragStart}
                onDragEnd={() => { setDragging(false); onDragEnd(); }}
                onClick={onClick}
            >
                {item.isNew && <span className="studio-comp-new">NEW</span>}
                <span style={{ color: dragging ? item.color : undefined }}>{item.icon}</span>
                {item.label}
            </button>
        </motion.div>
    );
}

/* ─────────── PROPS EDITOR ─────────── */
function PropsPanel({ block, onChange }: { block: Block; onChange: (id: string, k: string, v: string | boolean | number) => void }) {
    const configs: PropDef[] = PROP_CONFIGS[block.type] ?? [{ key: 'label', label: 'LABEL', type: 'text' }, { key: 'visible', label: 'VISIBLE', type: 'toggle' }];
    const color = BLOCK_COLORS[block.type] ?? 'var(--ac-brand)';
    return (
        <div>
            <div className="studio-prop-section">
                <span className="studio-prop-section-label" style={{ color }}>* {block.type.toUpperCase().replace(/-/g, '_')}</span>
                {configs.map(cfg => (
                    <div key={cfg.key} className="studio-prop-row">
                        <label className="studio-prop-label">{cfg.label}</label>
                        {cfg.type === 'text' && <input className="studio-prop-input" value={String(block.props[cfg.key] ?? '')} placeholder={cfg.placeholder} onChange={e => onChange(block.id, cfg.key, e.target.value)} />}
                        {cfg.type === 'number' && <input className="studio-prop-input" type="number" value={Number(block.props[cfg.key] ?? 50)} min={0} max={100} onChange={e => onChange(block.id, cfg.key, Number(e.target.value))} />}
                        {cfg.type === 'select' && <select className="studio-prop-select" value={String(block.props[cfg.key] ?? cfg.options?.[0])} onChange={e => onChange(block.id, cfg.key, e.target.value)}>{cfg.options?.map(o => <option key={o} value={o}>{o.toUpperCase()}</option>)}</select>}
                        {cfg.type === 'toggle' && (
                            <div className="studio-prop-toggle-row">
                                <span style={{ fontSize: '0.5rem', color: 'var(--ac-text-muted)' }}>{String(block.props[cfg.key]) === 'true' ? 'ENABLED' : 'DISABLED'}</span>
                                <button className={`studio-toggle-switch ${block.props[cfg.key] ? 'on' : ''}`} onClick={() => onChange(block.id, cfg.key, !block.props[cfg.key])} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="studio-prop-section">
                <span className="studio-prop-section-label">* NODE_INFO</span>
                <div style={{ padding: '8px', background: 'var(--ac-surface)', border: '1px solid var(--ac-border-muted)', fontSize: '0.5rem', lineHeight: 2, color: 'var(--ac-text-muted)' }}>
                    <div>TYPE <span style={{ color }}>// {block.type}</span></div>
                    <div>CAT <span style={{ color: 'var(--ac-text-primary)' }}>// {block.category}</span></div>
                    <div>ID <span style={{ color: 'var(--ac-text-primary)', fontSize: '0.42rem' }}>// {block.id}</span></div>
                </div>
            </div>
        </div>
    );
}

/* ─────────── CONTEXT MENU ─────────── */
function ContextMenu({ ctx, blocks, onAction, onClose }: { ctx: CtxMenuState; blocks: Block[]; onAction: (action: string) => void; onClose: () => void }) {
    const idx = blocks.findIndex(b => b.id === ctx.blockId);
    const block = blocks[idx];
    if (!block) return null;
    return (
        <>
            <div style={{ position: 'fixed', inset: 0, zIndex: 1999 }} onClick={onClose} />
            <motion.div
                className="studio-ctx-menu"
                initial={{ opacity: 0, scale: 0.94, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                style={{ left: ctx.x, top: ctx.y }}
            >
                <div className="studio-ctx-header">✦ {block.type.toUpperCase().replace(/-/g, '_')}</div>
                <button className="studio-ctx-item" onClick={() => { onAction('select'); onClose(); }}>
                    <MousePointer size={13} /> Select Block <span className="studio-ctx-shortcut">click</span>
                </button>
                <button className="studio-ctx-item" onClick={() => { onAction('duplicate'); onClose(); }}>
                    <Copy size={13} /> Duplicate <span className="studio-ctx-shortcut">⌃D</span>
                </button>
                <button className="studio-ctx-item" onClick={() => { onAction('code'); onClose(); }}>
                    <Code2 size={13} /> View Code Guide
                </button>
                <div className="studio-ctx-divider" />
                <button className={`studio-ctx-item ${idx === 0 ? 'disabled' : ''}`} onClick={() => { onAction('moveup'); onClose(); }}>
                    <ChevronUp size={13} /> Move Up <span className="studio-ctx-shortcut">⌃↑</span>
                </button>
                <button className={`studio-ctx-item ${idx === blocks.length - 1 ? 'disabled' : ''}`} onClick={() => { onAction('movedown'); onClose(); }}>
                    <ChevronDown size={13} /> Move Down <span className="studio-ctx-shortcut">⌃↓</span>
                </button>
                <div className="studio-ctx-divider" />
                <button className="studio-ctx-item danger" onClick={() => { onAction('delete'); onClose(); }}>
                    <Trash2 size={13} /> Delete Block <span className="studio-ctx-shortcut">⌫</span>
                </button>
            </motion.div>
        </>
    );
}

/* ─────────── CODE WIZARD ─────────── */
function CodeWizard({ block, onClose }: { block: Block; onClose: () => void }) {
    const steps = getWizardSteps(block.type);
    const [step, setStep] = useState(0);
    const [copied, setCopied] = useState(false);
    const current = steps[step];

    const copy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
    };

    return (
        <motion.div className="studio-wizard-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
            <motion.div
                className="studio-wizard"
                initial={{ scale: 0.94, y: 28 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 28 }}
                transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                onClick={e => e.stopPropagation()}
            >
                <div className="studio-wizard-header">
                    <span className="studio-wizard-title">* CODE_GUIDE // {block.type.toUpperCase().replace(/-/g, '_')}</span>
                    <button className="studio-wizard-close" onClick={onClose}><X size={16} /></button>
                </div>

                <div className="studio-wizard-body">
                    {/* Stepper sidebar */}
                    <div className="studio-wizard-steps">
                        {steps.map((s, i) => (
                            <div key={i} className={`studio-wizard-step-item ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`} onClick={() => setStep(i)}>
                                <div className="studio-wizard-step-num">
                                    {i < step ? <Check size={10} /> : i + 1}
                                </div>
                                <div className="studio-wizard-step-info">
                                    <span className="studio-wizard-step-label">{s.title}</span>
                                    <span className="studio-wizard-step-desc">{s.subtitle.slice(0, 32)}…</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Step content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            className="studio-wizard-content"
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.18 }}
                        >
                            <div className="studio-wizard-step-title">{current.title}</div>
                            <div className="studio-wizard-step-subtitle">{current.subtitle}</div>

                            {current.code && (
                                <div className="studio-wizard-code-block">
                                    <span className="studio-wizard-code-label">* CODE // {block.type.toUpperCase()}</span>
                                    <pre className="studio-wizard-code-text">{current.code}</pre>
                                    <button className="studio-wizard-copy-btn" onClick={() => copy(current.code!)}>
                                        {copied ? <><Check size={10} /> COPIED</> : 'COPY'}
                                    </button>
                                </div>
                            )}

                            {current.propsTable && (
                                <table className="studio-props-table">
                                    <thead>
                                        <tr>
                                            <th>PROP</th>
                                            <th>TYPE</th>
                                            <th>DEFAULT</th>
                                            <th>DESCRIPTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {current.propsTable.map(p => (
                                            <tr key={p.name}>
                                                <td><code className="prop-name">{p.name}</code></td>
                                                <td><code className="prop-type">{p.type}</code></td>
                                                <td><code className="prop-default">{p.default}</code></td>
                                                <td>{p.desc}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="studio-wizard-nav">
                    <span className="studio-wizard-nav-info">STEP {step + 1} / {steps.length}</span>
                    <div className="studio-wizard-nav-btns">
                        <button className="studio-wizard-nav-btn" onClick={() => setStep(s => s - 1)} disabled={step === 0}>← PREV</button>
                        {step < steps.length - 1
                            ? <button className="studio-wizard-nav-btn primary" onClick={() => setStep(s => s + 1)}>NEXT →</button>
                            : <button className="studio-wizard-nav-btn primary" onClick={onClose}>DONE ✓</button>
                        }
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─────────── REORDERABLE BLOCK ─────────── */
function StudioBlock({ block, idx, total, isSelected, onSelect, onDelete, onDuplicate, onMoveUp, onMoveDown, onContextMenu, children }: {
    block: Block; idx: number; total: number; isSelected: boolean;
    onSelect: () => void; onDelete: () => void; onDuplicate: () => void;
    onMoveUp: () => void; onMoveDown: () => void;
    onContextMenu: (e: React.MouseEvent) => void;
    children: React.ReactNode;
}) {
    const controls = useDragControls();
    const color = BLOCK_COLORS[block.type] ?? '#f44336';
    return (
        <Reorder.Item
            value={block} dragListener={false} dragControls={controls} as="div"
            style={{ position: 'relative' }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            whileDrag={{ scale: 1.01, boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 0 2px ${color}`, zIndex: 50 }}
            layout
        >
            <div
                className={`studio-block ${isSelected ? 'selected' : ''}`}
                onClick={e => { e.stopPropagation(); onSelect(); }}
                onContextMenu={e => { e.preventDefault(); onContextMenu(e); onSelect(); }}
            >
                {isSelected && <motion.div layoutId="sel-border" style={{ position: 'absolute', inset: 0, border: `2px solid ${color}`, pointerEvents: 'none', zIndex: 5 }} initial={false} transition={{ type: 'spring', stiffness: 400, damping: 35 }} />}
                <div className="studio-block-toolbar" style={{ background: color }}>
                    <span className="studio-block-label" onPointerDown={e => { e.preventDefault(); controls.start(e); }}>⠿ {block.type.toUpperCase().replace(/-/g, '_')}</span>
                    <button className="studio-block-action" onClick={e => { e.stopPropagation(); onMoveUp(); }} disabled={idx === 0}><ChevronUp size={11} /></button>
                    <button className="studio-block-action" onClick={e => { e.stopPropagation(); onMoveDown(); }} disabled={idx === total - 1}><ChevronDown size={11} /></button>
                    <button className="studio-block-action" onClick={e => { e.stopPropagation(); onDuplicate(); }}><Copy size={11} /></button>
                    <button className="studio-block-action" onClick={e => { e.stopPropagation(); onDelete(); }}><Trash2 size={11} /></button>
                </div>
                {children}
            </div>
        </Reorder.Item>
    );
}

function LayerItem({ block, allBlocks, depth, selectedId, onSelect, onContextMenu }: {
    block: Block; allBlocks: Block[]; depth: number; selectedId: string | null; onSelect: (id: string) => void;
    onContextMenu: (id: string, x: number, y: number) => void
}) {
    const [isOpen, setIsOpen] = useState(true);
    const children = allBlocks.filter(b => b.parentId === block.id);
    const hasChildren = children.length > 0;

    return (
        <div className="studio-layer-item-wrap">
            <div
                className={`studio-layer-item ${selectedId === block.id ? 'selected' : ''}`}
                style={{ paddingLeft: `${depth * 1 + 0.75}rem` }}
                onClick={() => onSelect(block.id)}
                onContextMenu={e => { e.preventDefault(); e.stopPropagation(); onContextMenu(block.id, e.clientX, e.clientY); }}
            >
                {hasChildren && (
                    <button className="studio-layer-expand" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }} style={{ background: 'transparent', border: 'none', color: 'inherit', padding: 0, display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight: '4px' }}>
                        <ChevronDown size={10} style={{ transform: isOpen ? 'rotate(0)' : 'rotate(-90deg)', transition: 'transform 0.2s' }} />
                    </button>
                )}
                {!hasChildren && <div style={{ width: 14 }} />}
                <div className="studio-layer-dot" style={{ background: BLOCK_COLORS[block.type] ?? '#f44336' }} />
                <span className="studio-layer-name" style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{block.type.toUpperCase().replace(/-/g, '_')}</span>
                {block.slot && <span className="studio-layer-slot" style={{ fontSize: '0.35rem', opacity: 0.5, marginLeft: '0.4rem', background: 'rgba(255,255,255,0.05)', padding: '1px 4px' }}>{block.slot.toUpperCase()}</span>}
            </div>
            {hasChildren && isOpen && (
                <div className="studio-layer-children">
                    {children.map(child => (
                        <LayerItem key={child.id} block={child} allBlocks={allBlocks} depth={depth + 1} selectedId={selectedId} onSelect={onSelect} onContextMenu={onContextMenu} />
                    ))}
                </div>
            )}
        </div>
    );
}

/* ─────────── MAIN STUDIO ─────────── */
export function Studio() {
    const [isDark, setIsDark] = useState(() => document.documentElement.getAttribute('data-theme') !== 'light');
    const [viewport, setViewport] = useState<Viewport>('desktop');
    const [panelTab, setPanelTab] = useState<PanelTab>('components');
    const [rightTab, setRightTab] = useState<RightTab>('props');
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [historyStack, setHistoryStack] = useState<Block[][]>([[]]);
    const [historyIdx, setHistoryIdx] = useState(0);
    const [ctxMenu, setCtxMenu] = useState<CtxMenuState | null>(null);
    const [wizardBlock, setWizardBlock] = useState<Block | null>(null);
    const [dragGhost, setDragGhost] = useState<{ label: string; color: string; x: number; y: number } | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [settings, setSettings] = useState({
        highContrast: false,
        reducedMotion: false,
        screenReader: true,
        showGrid: true,
        snapToGrid: false,
        framework: 'NEXT_JS',
        exportFormat: 'TSX_COMPONENT',
        accentColor: '#f44336',
        systemNamespace: 'ACID_PROJECT',
        debugMode: false
    });
    const dragItemRef = useRef<CatalogItem | null>(null);

    const selectedBlock = blocks.find(b => b.id === selectedId) ?? null;

    useEffect(() => {
        const obs = new MutationObserver(() => setIsDark(document.documentElement.getAttribute('data-theme') !== 'light'));
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        return () => obs.disconnect();
    }, []);

    // Ghost mouse tracking
    useEffect(() => {
        if (!dragGhost) return;
        const move = (e: MouseEvent) => setDragGhost(g => g ? { ...g, x: e.clientX, y: e.clientY } : null);
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [!!dragGhost]);

    // Keyboard shortcuts
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (!selectedId) return;
            if (e.key === 'Delete' || e.key === 'Backspace') { if ((e.target as HTMLElement).tagName !== 'INPUT' && (e.target as HTMLElement).tagName !== 'SELECT') deleteBlock(selectedId); }
            if (e.key === 'd' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); duplicateBlock(selectedId); }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [selectedId, blocks]);

    // History helpers
    useEffect(() => {
        const root = document.documentElement;
        if (settings.highContrast) {
            root.style.setProperty('--ac-bg', '#000');
            root.style.setProperty('--ac-surface', '#111');
            root.style.setProperty('--ac-border-muted', '#333');
        } else {
            root.style.removeProperty('--ac-bg');
            root.style.removeProperty('--ac-surface');
            root.style.removeProperty('--ac-border-muted');
        }

        root.style.setProperty('--ac-brand', settings.accentColor);

        if (settings.reducedMotion) root.classList.add('reduced-motion');
        else root.classList.remove('reduced-motion');
    }, [settings.highContrast, settings.reducedMotion, settings.accentColor]);

    const pushHistory = useCallback((nb: Block[]) => {
        setHistoryStack(prev => { const n = prev.slice(0, historyIdx + 1); n.push(nb); return n; });
        setHistoryIdx(i => i + 1);
        setBlocks(nb);
    }, [historyIdx]);

    const undo = () => { if (historyIdx === 0) return; const p = historyStack[historyIdx - 1]; setHistoryIdx(i => i - 1); setBlocks(p); setSelectedId(null); };
    const redo = () => { if (historyIdx >= historyStack.length - 1) return; const n = historyStack[historyIdx + 1]; setHistoryIdx(i => i + 1); setBlocks(n); };

    const addBlock = useCallback((item: CatalogItem, parentId?: string, slot?: string) => {
        const nb: Block = {
            id: `${item.id}-${Date.now()}`,
            type: item.id,
            category: CATALOG.find(c => c.items.some(i => i.id === item.id))?.category ?? 'UNKNOWN',
            props: { ...(BLOCK_DEFAULTS[item.id] ?? { label: item.label, visible: true }) },
            parentId,
            slot
        };
        pushHistory([...blocks, nb]); setSelectedId(nb.id);
    }, [blocks, pushHistory]);

    const deleteBlock = (id: string) => {
        const toDelete = new Set([id]);
        const collect = (pid: string) => {
            blocks.forEach(b => { if (b.parentId === pid) { toDelete.add(b.id); collect(b.id); } });
        };
        collect(id);
        pushHistory(blocks.filter(b => !toDelete.has(b.id)));
        if (selectedId && toDelete.has(selectedId)) setSelectedId(null);
    };
    const duplicateBlock = (id: string) => { const i = blocks.findIndex(b => b.id === id); if (i === -1) return; const c: Block = { ...blocks[i], id: `${blocks[i].type}-${Date.now()}`, props: { ...blocks[i].props } }; const u = [...blocks.slice(0, i + 1), c, ...blocks.slice(i + 1)]; pushHistory(u); setSelectedId(c.id); };
    const moveBlock = (id: string, dir: -1 | 1) => { const i = blocks.findIndex(b => b.id === id); const ni = i + dir; if (ni < 0 || ni >= blocks.length) return; const u = [...blocks];[u[i], u[ni]] = [u[ni], u[i]]; pushHistory(u); };
    const updateProp = (id: string, k: string, v: string | boolean | number) => { pushHistory(blocks.map(b => b.id === id ? { ...b, props: { ...b.props, [k]: v } } : b)); };

    const handleCtxAction = (action: string) => {
        if (!ctxMenu) return;
        if (action === 'delete') deleteBlock(ctxMenu.blockId);
        else if (action === 'duplicate') duplicateBlock(ctxMenu.blockId);
        else if (action === 'moveup') moveBlock(ctxMenu.blockId, -1);
        else if (action === 'movedown') moveBlock(ctxMenu.blockId, 1);
        else if (action === 'select') setSelectedId(ctxMenu.blockId);
        else if (action === 'code') { const b = blocks.find(x => x.id === ctxMenu.blockId); if (b) setWizardBlock(b); }
    };

    const filteredCatalog = CATALOG.map(cat => ({ ...cat, items: cat.items.filter(i => i.label.toLowerCase().includes(search.toLowerCase()) || i.id.includes(search.toLowerCase())) })).filter(c => c.items.length > 0);

    const toggleTheme = () => { const n = !isDark; setIsDark(n); document.documentElement.setAttribute('data-theme', n ? 'dark' : 'light'); };

    const generatePageCode = () => {
        const importList = new Set<string>();
        const typeMap: Record<string, string> = {
            'hero': 'AcidHero', 'features': 'AcidFeatures', 'cta': 'AcidCTA', 'text': 'AcidText',
            'avatar': 'AcidAvatar', 'badge': 'AcidBadge', 'button': 'AcidButton', 'progress': 'AcidProgress',
            'tabs': 'AcidTabs', 'input': 'AcidInput', 'textarea': 'AcidTextarea', 'skeleton': 'AcidSkeleton',
            'navbar': 'AcidNavbar', 'divider': 'AcidDivider', 'image': 'AcidImage', 'card': 'AcidCard',
            'chart': 'AcidChart', 'terminal-card': 'AcidTerminalCard', 'terminal-logs': 'AcidTerminalLogs',
            'code-block': 'AcidCodeBlock', 'timeline': 'AcidTimeline', 'switch': 'AcidSwitch',
            'knob': 'AcidKnob', 'slider': 'AcidSlider', 'keypad': 'AcidKeypad', 'stepper': 'AcidStepper',
            'input-otp': 'AcidInputOtp', 'radio-group': 'AcidRadioGroup',
            'aurora-text': 'AcidAuroraText', 'shiny-text': 'AcidShinyText', 'typing-text': 'AcidTypingText',
            'rigid-header': 'AcidRigidHeader', 'text-marquee': 'AcidTextMarquee', 'video-text': 'AcidVideoText',
            'printstream': 'AcidPrintStreamScroll', 'bento': 'AcidBentoGrid', 'masonry': 'AcidMasonry',
            'cube-grid': 'AcidCubeGrid', 'stack-list': 'AcidStackList', 'magic-bento': 'AcidMagicBento'
        };

        const getBlockJsx = (block: Block, depth: number): string => {
            const indent = '  '.repeat(depth + 3);
            const props = { ...block.props };
            const propStr = Object.entries(props)
                .map(([k, v]) => {
                    if (typeof v === 'string') return `${k}="${v}"`;
                    if (typeof v === 'number' || typeof v === 'boolean') return `${k}={${v}}`;
                    return `${k}={${JSON.stringify(v)}}`;
                })
                .join(' ');

            const compName = typeMap[block.type] || block.type.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
            const finalName = compName.startsWith('Acid') ? compName : `Acid${compName}`;
            if (typeMap[block.type]) importList.add(typeMap[block.type]);

            if (block.type === 'section') {
                const layout = String(block.props.layout ?? '2');
                const numCols = layout.includes('/') ? 2 : Math.min(Number(layout) || 2, 4);

                let sectionContent = '';
                for (let i = 1; i <= numCols; i++) {
                    const slotId = `col-${i}`;
                    const children = blocks.filter(b => b.parentId === block.id && b.slot === slotId);
                    sectionContent += `\n${indent}  <div className="acid-col-${i}">\n`;
                    sectionContent += children.map(c => getBlockJsx(c, depth + 2)).join('\n');
                    sectionContent += `\n${indent}  </div>`;
                }

                return `${indent}<Section ${propStr}>\n${sectionContent}\n${indent}</Section>`;
            }

            return `${indent}<${finalName} ${propStr} />`;
        };

        const rootBlocks = blocks.filter(b => !b.parentId);
        const blockCode = rootBlocks.map(b => getBlockJsx(b, 0)).join('\n\n');
        const importArray = Array.from(importList).filter(i => i !== 'React');

        return `/**
 * Generated by AcidUI Studio v0.3.0
 * ${new Date().toISOString()}
 */
import React from 'react';
import { 
  ${importArray.join(',\n  ')} 
} from 'acidui-core';
import 'acidui-core/dist/index.css';

/** 
 * Industrial Layout Engine 
 */
const Section = ({ layout = "2", gap = "md", padding = "md", bg = "transparent", children }: any) => {
  const layouts: any = { "1": "1fr", "2": "1fr 1fr", "3": "1fr 1fr 1fr", "4": "1fr 1fr 1fr 1fr", "1/2": "1fr 2fr", "2/1": "2fr 1fr" };
  const gaps: any = { none: "0", sm: "1rem", md: "2rem", lg: "4rem" };
  const pads: any = { none: "0", sm: "1rem 2rem", md: "2rem 4rem", lg: "4rem 6rem" };
  const bgs: any = { transparent: "transparent", surface: "#0a0a0a", brand: "var(--ac-brand, #f44336)", dark: "#000" };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: layouts[layout] || "1fr 1fr", 
      gap: gaps[gap] || "2rem", 
      padding: pads[padding] || "2rem 4rem",
      background: bgs[bg] || "transparent",
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      {children}
    </div>
  );
};

export default function AcidPage() {
  return (
    <div className="acid-page-container min-h-screen bg-black text-white selection:bg-red-500/30">
      {/* ── Generated Content ── */}
${blockCode}
      {/* ────────────────────── */}
    </div>
  );
}
`;
    };

    const handlePublish = () => {
        const code = generatePageCode();
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'AcidPage.tsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="studio-root">
            {/* DRAG GHOST */}
            <AnimatePresence>
                {dragGhost && (
                    <motion.div
                        className="studio-drag-ghost"
                        initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                        animate={{ opacity: 1, scale: 1, rotate: -2 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        style={{ position: 'fixed', left: dragGhost.x, top: dragGhost.y, transform: 'translate(-50%,-50%) rotate(-2deg)', background: dragGhost.color, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', fontWeight: 900, padding: '8px 16px', letterSpacing: '0.1em', boxShadow: `0 20px 50px ${dragGhost.color}66`, border: '1px solid rgba(255,255,255,0.25)', zIndex: 9999, pointerEvents: 'none' }}
                    >
                        {dragGhost.label}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CONTEXT MENU */}
            <AnimatePresence>
                {ctxMenu && <ContextMenu ctx={ctxMenu} blocks={blocks} onAction={handleCtxAction} onClose={() => setCtxMenu(null)} />}
            </AnimatePresence>

            {/* CODE WIZARD */}
            <AnimatePresence>
                {wizardBlock && <CodeWizard block={wizardBlock} onClose={() => setWizardBlock(null)} />}
            </AnimatePresence>

            {/* TOPBAR */}
            <header className="studio-topbar">
                <div className="studio-topbar-left">
                    <Link to="/" className="studio-logo"><span className="studio-logo-star">*</span>ACID_UI<span className="studio-logo-tag">STUDIO</span></Link>
                    <div className="studio-divider-v" />
                    <button className="studio-history-btn" onClick={undo} disabled={historyIdx === 0} title="Undo"><Undo2 size={14} /></button>
                    <button className="studio-history-btn" onClick={redo} disabled={historyIdx >= historyStack.length - 1} title="Redo"><Redo2 size={14} /></button>
                </div>
                <div className="studio-topbar-center">
                    <div className="studio-viewport-btns">
                        {(['desktop', 'tablet', 'mobile'] as Viewport[]).map(vp => (
                            <button key={vp} className={`studio-viewport-btn ${viewport === vp ? 'active' : ''}`} onClick={() => setViewport(vp)}>
                                {vp === 'desktop' && <Monitor size={11} />}{vp === 'tablet' && <Tablet size={11} />}{vp === 'mobile' && <Smartphone size={11} />}
                                {vp.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <span className="studio-zoom-display">100%</span>
                </div>
                <div className="studio-topbar-right">
                    <button className="studio-btn-ghost" onClick={() => selectedBlock ? setWizardBlock(selectedBlock) : undefined} title="Open code guide for selected block">
                        <Code2 size={11} /> CODE
                    </button>
                    <button className="studio-theme-btn" onClick={toggleTheme}>{isDark ? <Sun size={14} /> : <Moon size={14} />}</button>
                    <button className="studio-btn-brand" onClick={handlePublish}><Download size={11} /> PUBLISH</button>
                </div>
            </header>

            {/* LEFT PANEL */}
            <aside className="studio-left-panel">
                <div className="studio-panel-tabs">
                    <button className={`studio-panel-tab ${panelTab === 'components' ? 'active' : ''}`} onClick={() => setPanelTab('components')}><Plus size={13} />BLOCKS</button>
                    <button className={`studio-panel-tab ${panelTab === 'layers' ? 'active' : ''}`} onClick={() => setPanelTab('layers')}><Layers size={13} />LAYERS</button>
                    <button className={`studio-panel-tab ${panelTab === 'settings' ? 'active' : ''}`} onClick={() => setPanelTab('settings')}><Settings2 size={13} />SETTINGS</button>
                </div>
                {panelTab === 'components' && (
                    <>
                        <div className="studio-panel-search">
                            <input className="studio-search-input" placeholder="SEARCH_COMPONENTS..." value={search} onChange={e => setSearch(e.target.value)} />
                        </div>
                        <div className="studio-components-list">
                            {filteredCatalog.map(cat => (
                                <div key={cat.category} className="studio-component-category">
                                    <span className="studio-category-label">* {cat.category}</span>
                                    <div className="studio-component-grid">
                                        {cat.items.map(item => (
                                            <CatalogBtn
                                                key={item.id}
                                                item={item}
                                                onDragStart={(it, x, y) => {
                                                    dragItemRef.current = it;
                                                    setDragGhost({ label: it.label, color: it.color ?? '#f44336', x, y });
                                                }}
                                                onDragEnd={() => {
                                                    dragItemRef.current = null;
                                                    setDragGhost(null);
                                                }}
                                                onClick={() => addBlock(item)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                {panelTab === 'settings' && (
                    <div className="studio-components-list">
                        <div className="studio-prop-section">
                            <span className="studio-prop-section-label">* ACCESSIBILITY</span>
                            <div className="studio-prop-row">
                                <div className="studio-prop-toggle-row">
                                    <label className="studio-prop-label">SHOW_GRID</label>
                                    <button className={`studio-toggle-switch ${settings.showGrid ? 'on' : ''}`} onClick={() => setSettings(s => ({ ...s, showGrid: !s.showGrid }))} />
                                </div>
                            </div>
                            <div className="studio-prop-row">
                                <div className="studio-prop-toggle-row">
                                    <label className="studio-prop-label">SNAP_TO_GRID</label>
                                    <button className={`studio-toggle-switch ${settings.snapToGrid ? 'on' : ''}`} onClick={() => setSettings(s => ({ ...s, snapToGrid: !s.snapToGrid }))} />
                                </div>
                            </div>
                            <div className="studio-prop-row">
                                <div className="studio-prop-toggle-row">
                                    <label className="studio-prop-label">HIGH_CONTRAST</label>
                                    <button className={`studio-toggle-switch ${settings.highContrast ? 'on' : ''}`} onClick={() => setSettings(s => ({ ...s, highContrast: !s.highContrast }))} />
                                </div>
                            </div>
                            <div className="studio-prop-row">
                                <div className="studio-prop-toggle-row">
                                    <label className="studio-prop-label">REDUCED_MOTION</label>
                                    <button className={`studio-toggle-switch ${settings.reducedMotion ? 'on' : ''}`} onClick={() => setSettings(s => ({ ...s, reducedMotion: !s.reducedMotion }))} />
                                </div>
                            </div>
                            <div className="studio-prop-row">
                                <div className="studio-prop-toggle-row">
                                    <label className="studio-prop-label">SCREEN_READER</label>
                                    <button className={`studio-toggle-switch ${settings.screenReader ? 'on' : ''}`} onClick={() => setSettings(s => ({ ...s, screenReader: !s.screenReader }))} />
                                </div>
                            </div>
                        </div>
                        <div className="studio-prop-section">
                            <span className="studio-prop-section-label">* PROJECT_CONFIG</span>
                            <div className="studio-prop-row">
                                <label className="studio-prop-label">FRAMEWORK</label>
                                <select className="studio-prop-select" value={settings.framework} onChange={e => setSettings(s => ({ ...s, framework: e.target.value }))}><option value="NEXT_JS">NEXT_JS</option><option value="VITE_REACT">VITE_REACT</option></select>
                            </div>
                            <div className="studio-prop-row">
                                <label className="studio-prop-label">SYSTEM_NAMESPACE</label>
                                <input className="studio-prop-input" value={settings.systemNamespace} onChange={e => setSettings(s => ({ ...s, systemNamespace: e.target.value }))} />
                            </div>
                            <div className="studio-prop-row">
                                <label className="studio-prop-label">DEBUG_MODE</label>
                                <button className={`studio-toggle-switch ${settings.debugMode ? 'on' : ''}`} onClick={() => setSettings(s => ({ ...s, debugMode: !s.debugMode }))} />
                            </div>
                        </div>
                        <div className="studio-prop-section">
                            <span className="studio-prop-section-label">* THEME_ENGINE</span>
                            <div className="studio-prop-row">
                                <label className="studio-prop-label">ACCENT_COLOR</label>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    {['#f44336', '#00f0ff', '#27c93f', '#ffbd2e', '#7c3aed'].map(c => (
                                        <button key={c} onClick={() => setSettings(s => ({ ...s, accentColor: c }))} style={{ width: '20px', height: '20px', background: c, border: settings.accentColor === c ? '2px solid #fff' : 'none', cursor: 'pointer' }} />
                                    ))}
                                    <input type="color" value={settings.accentColor} onChange={e => setSettings(s => ({ ...s, accentColor: e.target.value }))} style={{ width: '20px', height: '20px', padding: 0, border: 'none', background: 'transparent', cursor: 'pointer' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {panelTab === 'layers' && (
                    <div className="studio-components-list">
                        {blocks.filter(b => !b.parentId).length === 0 && (
                            <div className="studio-no-selection">
                                <Layers size={22} style={{ color: 'var(--ac-brand)', opacity: 0.3 }} />
                                <span className="studio-no-selection-text">NO_LAYERS // Add blocks to see them here.</span>
                            </div>
                        )}
                        <div className="studio-layers-view">
                            {blocks.filter(b => !b.parentId).length > 0 ? (
                                blocks.filter(b => !b.parentId).map(block => (
                                    <LayerItem key={block.id} block={block} allBlocks={blocks} depth={0} selectedId={selectedId} onSelect={setSelectedId} onContextMenu={(id, x, y) => setCtxMenu({ blockId: id, x, y })} />
                                ))
                            ) : (
                                <div className="studio-empty-layers">NO_LAYERS_ACTIVE</div>
                            )}
                        </div>
                    </div>
                )}
            </aside>

            {/* CANVAS */}
            <main
                className="studio-canvas-area"
                onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={e => { e.preventDefault(); setIsDragOver(false); setDragGhost(null); if (dragItemRef.current) { addBlock(dragItemRef.current); dragItemRef.current = null; } }}
                onClick={e => { if (e.currentTarget === e.target) { setSelectedId(null); setCtxMenu(null); } }}
            >
                <div className="studio-canvas-bg" />
                <motion.div className={`studio-canvas-frame ${viewport !== 'desktop' ? viewport : ''}`} layout transition={{ type: 'spring', stiffness: 260, damping: 32 }}>
                    <div className={`studio-drop-zone ${isDragOver ? 'drag-over-canvas' : ''}`}>
                        <AnimatePresence>
                            {blocks.length === 0 && !isDragOver && (
                                <motion.div className="studio-canvas-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <motion.div className="studio-empty-icon" animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }}>*</motion.div>
                                    <div className="studio-empty-title">CANVAS_EMPTY</div>
                                    <div className="studio-empty-sub">DRAG_COMPONENTS // OR_CLICK_IN_SIDEBAR</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Reorder.Group axis="y" values={blocks.filter(b => !b.parentId)} onReorder={items => {
                            const others = blocks.filter(b => b.parentId);
                            setBlocks([...items, ...others]);
                        }} as="div" style={{ display: 'flex', flexDirection: 'column' }}>
                            <AnimatePresence>
                                {blocks.filter(b => !b.parentId).map((block, idx) => (
                                    <StudioBlock key={block.id} block={block} idx={idx} total={blocks.filter(b => !b.parentId).length}
                                        isSelected={selectedId === block.id}
                                        onSelect={() => setSelectedId(block.id)}
                                        onDelete={() => deleteBlock(block.id)}
                                        onDuplicate={() => duplicateBlock(block.id)}
                                        onMoveUp={() => moveBlock(block.id, -1)}
                                        onMoveDown={() => moveBlock(block.id, 1)}
                                        onContextMenu={e => setCtxMenu({ blockId: block.id, x: e.clientX, y: e.clientY })}
                                    >
                                        {renderBlock(block, blocks, (pid, slot) => addBlock(dragItemRef.current!, pid, slot), setSelectedId, (id, x, y) => setCtxMenu({ blockId: id, x, y }))}
                                    </StudioBlock>
                                ))}
                            </AnimatePresence>
                        </Reorder.Group>
                    </div>
                </motion.div>
            </main>

            {/* RIGHT PANEL */}
            <aside className="studio-right-panel">
                <div className="studio-right-header">
                    <span className="studio-right-title">* INSPECT</span>
                    {selectedBlock && <AcidBadge variant="outline" size="sm" style={{ fontSize: '0.42rem', borderColor: BLOCK_COLORS[selectedBlock.type], color: BLOCK_COLORS[selectedBlock.type] }}>{selectedBlock.type.toUpperCase()}</AcidBadge>}
                </div>
                <div className="studio-right-tabs">
                    <button className={`studio-right-tab ${rightTab === 'props' ? 'active' : ''}`} onClick={() => setRightTab('props')}>PROPERTIES</button>
                    <button className={`studio-right-tab ${rightTab === 'style' ? 'active' : ''}`} onClick={() => setRightTab('style')}>STYLE</button>
                </div>
                <div className="studio-right-content">
                    <AnimatePresence mode="wait">
                        {!selectedBlock ? (
                            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="studio-no-selection">
                                <MousePointer size={22} style={{ color: 'var(--ac-brand)', opacity: 0.35 }} />
                                <span className="studio-no-selection-text">SELECT_A_BLOCK<br />Click or right-click any block to inspect and edit.</span>
                            </motion.div>
                        ) : rightTab === 'props' ? (
                            <motion.div key={`p-${selectedBlock.id}`} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                                <PropsPanel block={selectedBlock} onChange={updateProp} />
                                <button onClick={() => setWizardBlock(selectedBlock)} style={{ width: '100%', background: 'transparent', border: `1px solid ${BLOCK_COLORS[selectedBlock.type] ?? 'var(--ac-border-muted)'}`, color: BLOCK_COLORS[selectedBlock.type] ?? 'var(--ac-brand)', fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.1em', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '1rem', transition: 'opacity 0.15s' }}>
                                    <Code2 size={12} /> VIEW_CODE_GUIDE
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div key={`s-${selectedBlock.id}`} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                                {[{ g: 'SPACING', fs: ['Padding', 'Margin', 'Gap'] }, { g: 'TYPOGRAPHY', fs: ['Font_Size', 'Font_Weight', 'Letter_Spacing'] }, { g: 'VISUAL', fs: ['BG_Color', 'Border_Color', 'Opacity'] }].map(({ g, fs }) => (
                                    <div key={g} className="studio-prop-section">
                                        <span className="studio-prop-section-label" style={{ color: BLOCK_COLORS[selectedBlock.type] }}>* {g}</span>
                                        {fs.map(f => <div key={f} className="studio-prop-row"><label className="studio-prop-label">{f}</label><input className="studio-prop-input" placeholder="inherit" defaultValue="" /></div>)}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </aside>

            {/* STATUS BAR */}
            <div className="studio-statusbar">
                <div className="studio-status-item"><div className="studio-status-dot" />SYS_READY</div>
                <div className="studio-status-item">BLOCKS: {blocks.length}</div>
                <div className="studio-status-item">VIEWPORT: {viewport.toUpperCase()}</div>
                <div className="studio-status-item">THEME: {isDark ? 'DARK' : 'LIGHT'}</div>
                <div className="studio-status-item">COMPONENTS: {TOTAL}</div>
                <div className="studio-status-item" style={{ marginLeft: 'auto' }}>v0.3.0-INCREDIBLE</div>
            </div>
        </div>
    );
}
