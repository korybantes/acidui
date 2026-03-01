/**
 * StudioBlocks.tsx
 * ─ Real live previews for every AcidUI component
 * ─ Component-specific prop configs for the right panel
 */
import React from 'react';
import { AcidBadge } from '../components/AcidBadge';
import { AcidAvatar } from '../components/AcidAvatar';
import { AcidProgress } from '../components/AcidProgress';
import { AcidSkeleton } from '../components/AcidSkeleton';
import { AcidInput } from '../components/AcidInput';
import { AcidTabs } from '../components/AcidTabs';
import { AcidAuroraText } from '../components/AcidAuroraText';
import { AcidShinyText } from '../components/AcidShinyText';
import { AcidTypingText } from '../components/AcidTypingText';
import { AcidRigidHeader } from '../components/AcidRigidHeader';
import { AcidTextMarquee } from '../components/AcidTextMarquee';
import { AcidVideoText } from '../components/AcidVideoText';
import { AcidLCDDisplay } from '../components/AcidLCDDisplay';
import { AcidMeter } from '../components/AcidMeter';
// AcidCountUp is used via CountUpBlock case
import { AcidCountUp } from '../components/AcidCountUp';
import { AcidTimeline } from '../components/AcidTimeline';
import { AcidTerminalCard } from '../components/AcidTerminalCard';
import { AcidTerminalLogs } from '../components/AcidTerminalLogs';
import { AcidBentoGrid, AcidBentoItem } from '../components/AcidBentoGrid';
import { AcidMasonry } from '../components/AcidMasonry';
import { AcidCubeGrid } from '../components/AcidCubeGrid';
import { AcidStackList } from '../components/AcidStackList';
import { AcidMagicBento } from '../components/AcidMagicBento';
import { AcidKnob } from '../components/AcidKnob';
import { AcidSlider } from '../components/AcidSlider';
import { AcidKeypad } from '../components/AcidKeypad';
import { AcidStepper, AcidStep } from '../components/AcidStepper';
import { AcidInputOtp } from '../components/AcidInputOtp';
import { AcidRadioGroup } from '../components/AcidRadioGroup';
import { AcidSwitch } from '../components/AcidSwitch';
import { AcidProgressMatrix } from '../components/AcidProgressMatrix';
import { AcidPrintStreamScroll } from '../components/AcidPrintStreamScroll';
import { AcidCarousel } from '../components/AcidCarousel';
import { AcidDialog } from '../components/AcidDialog';
import { AcidDrawer } from '../components/AcidDrawer';
import { AcidDropdown } from '../components/AcidDropdown';
import { AcidSheet } from '../components/AcidSheet';
import { AcidTooltip } from '../components/AcidTooltip';
import { AcidCodeBlock } from '../components/AcidCodeBlock';
import {
    Zap, Shield, Activity, Box, AlertTriangle,
    User, BarChart2, Terminal, Clock, Star,
    ToggleLeft, Grid, ChevronDown, CheckSquare, Minus, Image, Type, Scroll, MessageSquare, List, Circle, Code, Monitor, Square,
    Layout, LayoutGrid, Layers
} from 'lucide-react';

export interface Block {
    id: string;
    type: string;
    category: string;
    props: Record<string, string | boolean | number>;
    parentId?: string;
    slot?: string;
}

/* ─────────────────────────────────────────────
   PROP CONFIGS — per block type for right panel
───────────────────────────────────────────── */
export type PropDef = {
    key: string;
    label: string;
    type: 'text' | 'select' | 'toggle' | 'number' | 'color';
    options?: string[];
    placeholder?: string;
};

const HERO_PROPS: PropDef[] = [
    { key: 'tag', label: 'STATUS_TAG', type: 'text' },
    { key: 'title', label: 'HEADLINE', type: 'text' },
    { key: 'description', label: 'DESCRIPTION', type: 'text' },
    { key: 'primaryLabel', label: 'PRIMARY_BTN', type: 'text' },
    { key: 'secondaryLabel', label: 'SECONDARY_BTN', type: 'text' },
];
const AVATAR_PROPS: PropDef[] = [
    { key: 'src', label: 'IMAGE_URL', type: 'text', placeholder: 'https://...' },
    { key: 'fallback', label: 'FALLBACK_TEXT', type: 'text', placeholder: 'AO' },
    { key: 'size', label: 'SIZE', type: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    { key: 'shape', label: 'SHAPE', type: 'select', options: ['industrial', 'square', 'circle'] },
    { key: 'count', label: 'AVATAR_COUNT', type: 'select', options: ['1', '2', '3', '4', '5'] },
];
const BADGE_PROPS: PropDef[] = [
    { key: 'text', label: 'LABEL', type: 'text', placeholder: 'ONLINE' },
    { key: 'variant', label: 'VARIANT', type: 'select', options: ['solid', 'outline', 'subtle', 'brand'] },
    { key: 'size', label: 'SIZE', type: 'select', options: ['sm', 'md', 'lg'] },
    { key: 'count', label: 'BADGE_COUNT', type: 'select', options: ['1', '2', '3', '4', '5', '6'] },
];
const BUTTON_PROPS: PropDef[] = [
    { key: 'label', label: 'BUTTON_TEXT', type: 'text', placeholder: 'EXECUTE' },
    { key: 'variant', label: 'VARIANT', type: 'select', options: ['solid', 'outline', 'ghost', 'brand'] },
    { key: 'size', label: 'SIZE', type: 'select', options: ['sm', 'md', 'lg'] },
];
const PROGRESS_PROPS: PropDef[] = [
    { key: 'value', label: 'VALUE (0-100)', type: 'number' },
    { key: 'variant', label: 'VARIANT', type: 'select', options: ['default', 'brand', 'success', 'warning'] },
    { key: 'showLabel', label: 'SHOW_LABEL', type: 'toggle' },
];
const TABS_PROPS: PropDef[] = [
    { key: 'variant', label: 'VARIANT', type: 'select', options: ['industrial', 'outline', 'pills'] },
];
const INPUT_PROPS: PropDef[] = [
    { key: 'label', label: 'FIELD_LABEL', type: 'text', placeholder: 'EMAIL_ADDRESS' },
    { key: 'placeholder', label: 'PLACEHOLDER', type: 'text' },
    { key: 'variant', label: 'VARIANT', type: 'select', options: ['outline', 'filled', 'terminal'] },
];
const SKELETON_PROPS: PropDef[] = [
    { key: 'shape', label: 'SHAPE', type: 'select', options: ['rectangle', 'circle', 'industrial'] },
    { key: 'rows', label: 'ROWS', type: 'select', options: ['1', '2', '3', '4'] },
];
const ALERT_PROPS: PropDef[] = [
    { key: 'title', label: 'TITLE', type: 'text', placeholder: 'SYSTEM_ALERT' },
    { key: 'body', label: 'MESSAGE', type: 'text', placeholder: 'Subsystem failure detected.' },
    { key: 'variant', label: 'VARIANT', type: 'select', options: ['default', 'destructive', 'success', 'warning'] },
];
const TEXT_PROPS: PropDef[] = [
    { key: 'label', label: 'SECTION_TAG', type: 'text' },
    { key: 'title', label: 'HEADLINE', type: 'text' },
    { key: 'body', label: 'BODY_TEXT', type: 'text' },
];
const FEATURES_PROPS: PropDef[] = [
    { key: 'label', label: 'SECTION_TAG', type: 'text' },
    { key: 'title', label: 'HEADLINE', type: 'text' },
    { key: 'cols', label: 'COLUMNS', type: 'select', options: ['2', '3', '4'] },
];
const CTA_PROPS: PropDef[] = [
    { key: 'title', label: 'HEADLINE', type: 'text' },
    { key: 'buttonLabel', label: 'BTN_LABEL', type: 'text' },
];

const SECTION_PROPS: PropDef[] = [
    { key: 'layout', label: 'COLUMN_LAYOUT', type: 'select', options: ['1', '2', '3', '4', '25/75', '75/25', '33/67', '67/33', '50/50'] },
    { key: 'gap', label: 'GAP', type: 'select', options: ['none', 'sm', 'md', 'lg'] },
    { key: 'bg', label: 'BACKGROUND', type: 'select', options: ['transparent', 'surface', 'brand', 'dark'] },
    { key: 'padding', label: 'PADDING', type: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    { key: 'fullwidth', label: 'FULL_WIDTH', type: 'toggle' },
];
const DIVIDER_PROPS: PropDef[] = [
    { key: 'label', label: 'SECTION_LABEL', type: 'text', placeholder: 'BREAK_POINT' },
    { key: 'style', label: 'STYLE', type: 'select', options: ['solid', 'dashed', 'glitch', 'gradient'] },
];
const IMAGE_PROPS: PropDef[] = [
    { key: 'src', label: 'IMAGE_URL', type: 'text', placeholder: 'https://...' },
    { key: 'alt', label: 'ALT_TEXT', type: 'text', placeholder: 'Image description' },
    { key: 'fit', label: 'OBJECT_FIT', type: 'select', options: ['cover', 'contain', 'fill'] },
    { key: 'aspectRatio', label: 'ASPECT_RATIO', type: 'select', options: ['auto', '16/9', '4/3', '1/1', '3/1'] },
    { key: 'rounded', label: 'ROUNDED', type: 'toggle' },
];
const CARD_PROPS: PropDef[] = [
    { key: 'title', label: 'CARD_TITLE', type: 'text', placeholder: 'SYSTEM_MODULE' },
    { key: 'body', label: 'BODY_TEXT', type: 'text', placeholder: 'Module description...' },
    { key: 'badge', label: 'BADGE_TEXT', type: 'text', placeholder: 'ACTIVE' },
    { key: 'variant', label: 'VARIANT', type: 'select', options: ['default', 'brand', 'outline'] },
];
const NAVBAR_PROPS: PropDef[] = [
    { key: 'brand', label: 'BRAND_TEXT', type: 'text', placeholder: 'ACID_UI' },
    { key: 'links', label: 'LINKS (comma-sep)', type: 'text', placeholder: 'DOCS,LIBRARY,STUDIO' },
    { key: 'sticky', label: 'STICKY', type: 'toggle' },
    { key: 'showCta', label: 'SHOW_CTA', type: 'toggle' },
];
const CHART_PROPS: PropDef[] = [
    { key: 'type', label: 'CHART_TYPE', type: 'select', options: ['bar', 'line', 'area'] },
    { key: 'label', label: 'SERIES_LABEL', type: 'text', placeholder: 'PERFORMANCE' },
    { key: 'color', label: 'COLOR', type: 'select', options: ['brand', 'cyan', 'green', 'yellow'] },
];
const TERMINAL_PROPS: PropDef[] = [
    { key: 'title', label: 'TERMINAL_TITLE', type: 'text', placeholder: 'ACID_TERMINAL' },
    { key: 'output', label: 'OUTPUT_TEXT', type: 'text', placeholder: '> System ready' },
    { key: 'showCursor', label: 'SHOW_CURSOR', type: 'toggle' },
];

export const PROP_CONFIGS: Record<string, PropDef[]> = {
    hero: HERO_PROPS, features: FEATURES_PROPS, cta: CTA_PROPS, text: TEXT_PROPS,
    avatar: AVATAR_PROPS, badge: BADGE_PROPS, button: BUTTON_PROPS,
    progress: PROGRESS_PROPS, tabs: TABS_PROPS, input: INPUT_PROPS,
    textarea: INPUT_PROPS, skeleton: SKELETON_PROPS, alert: ALERT_PROPS,
    section: SECTION_PROPS, divider: DIVIDER_PROPS, image: IMAGE_PROPS,
    card: CARD_PROPS, navbar: NAVBAR_PROPS, chart: CHART_PROPS,
    'terminal-card': TERMINAL_PROPS, 'terminal-logs': TERMINAL_PROPS,
    'carousel': [{ key: 'autoplay', label: 'AUTOPLAY', type: 'toggle' }, { key: 'loop', label: 'LOOP', type: 'toggle' }],
    'accordion': [{ key: 'multiple', label: 'ALLOW_MULTIPLE', type: 'toggle' }],
    'bento': [{ key: 'layout', label: 'BENTO_TYPE', type: 'select', options: ['modern', 'classic', 'featured'] }],
    'timeline': [{ key: 'layout', label: 'ALIGNMENT', type: 'select', options: ['left', 'center', 'right'] }],
};

/* ─────────────────────────────────────────────
   DEFAULT PROPS — per block type
───────────────────────────────────────────── */
export const BLOCK_DEFAULTS: Record<string, Block['props']> = {
    section: { layout: '2', gap: 'md', padding: 'md', bg: 'transparent', fullwidth: false },
    hero: { tag: 'SYSTEM_READY // v1.0', title: 'Build Without Limits.', description: 'A structural page builder for high-density industrial interfaces.', primaryLabel: 'GET_STARTED', secondaryLabel: 'VIEW_SOURCE' },
    features: { label: 'PROTOCOL_BREAKDOWN', title: 'Core Architecture', cols: '3' },
    cta: { title: 'Deploy Your Interface.', buttonLabel: 'LAUNCH_NOW' },
    text: { label: 'MODULE_DETAIL', title: 'High-Density Information.', body: 'Precision-engineered layouts designed for maximum data throughput.' },
    avatar: { shape: 'industrial', size: 'lg', fallback: 'AO', count: '3', src: '' },
    badge: { text: 'ONLINE', variant: 'solid', size: 'md', count: '4' },
    button: { label: 'EXECUTE_PROTOCOL', variant: 'solid', size: 'md' },
    progress: { value: 72, variant: 'brand', showLabel: true },
    tabs: { items: 'DOCS,LIBRARY,API', variant: 'industrial' },
    input: { placeholder: 'SYSTEM_ENTRY...', label: 'USER_IDENTIFIER', variant: 'outline' },
    textarea: { label: 'NOTES', placeholder: 'Enter data stream...', variant: 'outline' },
    skeleton: { shape: 'rectangle', rows: '3' },
    alert: { title: 'SYSTEM_ALERT', body: 'Subsystem failure detected at node 04.', variant: 'destructive' },
    divider: { style: 'solid', label: 'SECTION_BREAK' },
    image: { aspectRatio: '16/9', fit: 'cover', src: '', alt: 'Image', rounded: false },
    card: { title: 'SYSTEM_MODULE', body: 'Module description goes here.', badge: 'ACTIVE', variant: 'default' },
    navbar: { brand: 'ACID_UI', links: 'DOCS,LIBRARY,STUDIO', sticky: false, showCta: true },
    chart: { type: 'bar', label: 'PERFORMANCE_METRICS', color: 'brand' },
    'terminal-card': { title: 'ACID_TERMINAL', output: '> System initialized', showCursor: true },
    'terminal-logs': { title: 'ACID_TERMINAL', output: '> System initialized', showCursor: true },
    'aurora-text': { label: 'AURORA_VISUAL_PROTOCOL' },
    'shiny-text': { label: 'SHINY_INDUSTRIAL_FINISH' },
    'typing-text': { text: 'INITIALIZING_STREAM_SEQUENCE_09...' },
    'rigid-header': { label: 'RIGID_ARCHITECTURE' },
    'text-marquee': { label: 'SYSTEM_BROADCAST_STATUS: OK' },
    'video-text': { label: 'DATA_V', videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-geometric-lines-and-particles-20092-large.mp4' },
    'printstream': { items: 'LOG_A: OK, LOG_B: ERROR, LOG_C: RECOVERED' },
    'bento': { layout: 'modern' },
    'masonry': { cols: '3' },
    'cube-grid': { size: 'lg' },
};

/* ─────────────────────────────────────────────
   CODE WIZARD STEPS — per block type
───────────────────────────────────────────── */
export interface WizardStep {
    title: string;
    subtitle: string;
    code?: string;
    propsTable?: { name: string; type: string; default: string; desc: string }[];
}

export const WIZARD_STEPS: Record<string, WizardStep[]> = {
    avatar: [
        { title: '01 // INSTALL', subtitle: 'Add AcidUI to your project via npm or bun.', code: `npm install acidui-core\n# or\nbun add acidui-core` },
        { title: '02 // IMPORT', subtitle: 'Import the AcidAvatar component and its styles.', code: `import { AcidAvatar } from 'acidui-core';\n// CSS is auto-imported via the package` },
        { title: '03 // BASIC USAGE', subtitle: 'Drop an avatar anywhere in your JSX.', code: `<AcidAvatar\n  fallback="AO"\n  size="lg"\n  shape="industrial"\n/>` },
        { title: '04 // PROPS', subtitle: 'All available props for AcidAvatar.', propsTable: [{ name: 'fallback', type: 'string', default: '"?"', desc: 'Text shown when no src is provided' }, { name: 'src', type: 'string', default: 'undefined', desc: 'Image URL' }, { name: 'size', type: 'sm|md|lg|xl', default: '"md"', desc: 'Avatar dimensions' }, { name: 'shape', type: 'square|circle|industrial', default: '"industrial"', desc: 'Clip shape' }] },
        { title: '05 // STACK EXAMPLE', subtitle: 'Multiple avatars grouped together.', code: `<div style={{ display: 'flex', gap: '8px' }}>\n  <AcidAvatar fallback="AO" size="md" />\n  <AcidAvatar fallback="JD" size="md" />\n  <AcidAvatar fallback="XK" size="md" />\n</div>` },
    ],
    badge: [
        { title: '01 // INSTALL', subtitle: 'Add AcidUI to your project.', code: `npm install acidui-core` },
        { title: '02 // IMPORT', subtitle: 'Import AcidBadge.', code: `import { AcidBadge } from 'acidui-core';` },
        { title: '03 // USAGE', subtitle: 'Inline status indicators.', code: `<AcidBadge variant="solid" size="md">ONLINE</AcidBadge>\n<AcidBadge variant="outline" size="sm">PENDING</AcidBadge>` },
        { title: '04 // PROPS', subtitle: 'Badge configuration options.', propsTable: [{ name: 'variant', type: 'solid|outline|ghost', default: '"solid"', desc: 'Visual style' }, { name: 'size', type: 'sm|md|lg', default: '"md"', desc: 'Size preset' }] },
    ],
    progress: [
        { title: '01 // INSTALL', subtitle: 'Install via npm.', code: `npm install acidui-core` },
        { title: '02 // IMPORT', subtitle: 'Import the progress component.', code: `import { AcidProgress } from 'acidui-core';` },
        { title: '03 // USAGE', subtitle: 'Animated industrial progress bar.', code: `<AcidProgress\n  value={75}\n  variant="brand"\n  showLabel\n/>` },
        { title: '04 // PROPS', subtitle: 'All progress options.', propsTable: [{ name: 'value', type: 'number', default: '0', desc: '0-100 percentage value' }, { name: 'variant', type: 'default|brand|success|warning', default: '"default"', desc: 'Color variant' }, { name: 'showLabel', type: 'boolean', default: 'false', desc: 'Show percentage label' }] },
    ],
    button: [
        { title: '01 // INSTALL', subtitle: 'Install AcidUI.', code: `npm install acidui-core` },
        { title: '02 // IMPORT', subtitle: 'Import AcidButton.', code: `import { AcidButton } from 'acidui-core';` },
        { title: '03 // USAGE', subtitle: 'Industrial-grade button.', code: `<AcidButton variant="solid" size="md">\n  EXECUTE_PROTOCOL\n</AcidButton>` },
        { title: '04 // PROPS', subtitle: 'Button options.', propsTable: [{ name: 'variant', type: 'solid|outline|ghost|brand', default: '"solid"', desc: 'Visual variant' }, { name: 'size', type: 'sm|md|lg', default: '"md"', desc: 'Size preset' }, { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disabled state' }] },
    ],
};

const DEFAULT_WIZARD: WizardStep[] = [
    { title: '01 // INSTALL', subtitle: 'Add AcidUI to your project via npm.', code: `npm install acidui-core` },
    { title: '02 // IMPORT', subtitle: 'Import the component from the package.', code: `import { AcidComponent } from 'acidui-core';` },
    { title: '03 // USAGE', subtitle: 'Add the component to your JSX.', code: `<AcidComponent />` },
];

export function getWizardSteps(type: string): WizardStep[] {
    return WIZARD_STEPS[type] ?? DEFAULT_WIZARD;
}

/* ─────────────────────────────────────────────
   LIVE BLOCK RENDERERS
───────────────────────────────────────────── */

// Inline style previews for components that don't need the full block frame
const previewWrap: React.CSSProperties = { padding: '2rem 2.5rem', background: 'var(--ac-bg)', borderBottom: '1px solid var(--ac-border-muted)', display: 'flex', flexDirection: 'column', gap: '1.25rem' };
const previewHeader = (name: string, color: string, icon: React.ReactNode) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ color, opacity: 0.7 }}>{icon}</span>
        <span style={{ fontSize: '0.52rem', letterSpacing: '0.12em', fontWeight: 700, color, fontFamily: 'var(--font-mono)' }}>{name}</span>
    </div>
);

function AvatarBlock({ props }: { props: Block['props'] }) {
    const count = Math.min(Number(props.count ?? 3), 8);
    const initials = ['AO', 'JD', 'XK', 'RM', 'PL', 'ZY', 'BN', 'TS'];
    const hasSrc = String(props.src ?? '').length > 4;
    return (
        <div style={previewWrap}>
            {previewHeader('AVATAR_GROUP', '#ffbd2e', <User size={16} />)}
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {Array.from({ length: count }).map((_, i) => (
                    <AcidAvatar
                        key={i}
                        src={hasSrc && i === 0 ? String(props.src) : undefined}
                        fallback={String(props.fallback ?? initials[i % initials.length])}
                        size={(props.size as 'sm' | 'md' | 'lg' | 'xl') ?? 'lg'}
                        shape={(props.shape as 'industrial' | 'square' | 'circle') ?? 'industrial'}
                    />
                ))}
            </div>
            <div style={{ fontSize: '0.52rem', color: 'var(--ac-text-muted)', letterSpacing: '0.06em' }}>
                SHAPE: {String(props.shape ?? 'INDUSTRIAL')} // SIZE: {String(props.size ?? 'LG')} // COUNT: {count}
                {hasSrc && <span style={{ color: 'var(--ac-brand)', marginLeft: '0.5rem' }}>// IMG_SRC: SET</span>}
            </div>
        </div>
    );
}

function BadgeBlock({ props }: { props: Block['props'] }) {
    const count = Math.min(Number(props.count ?? 4), 10);
    const labels = ['ONLINE', 'ACTIVE', 'BETA', 'NEW', 'ALPHA', 'STABLE', 'PROD', 'DEV', 'HOT', 'v2'];
    const vars = ['solid', 'outline', 'subtle', 'brand'] as const;
    return (
        <div style={previewWrap}>
            {previewHeader('BADGE_SYSTEM', '#27c93f', <Activity size={16} />)}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {Array.from({ length: count }).map((_, i) => (
                    <AcidBadge key={i} variant={vars[i % 3]} size={(props.size as 'sm' | 'md' | 'lg') ?? 'md'}>
                        {labels[i % labels.length]}
                    </AcidBadge>
                ))}
            </div>
        </div>
    );
}

function ButtonBlock({ props }: { props: Block['props'] }) {
    const label = String(props.label ?? 'EXECUTE_PROTOCOL');
    const variants: { v: string; label: string; style: React.CSSProperties }[] = [
        { v: 'solid', label, style: { background: 'var(--ac-text-primary)', color: 'var(--ac-bg)', border: 'none', padding: '8px 18px', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer' } },
        { v: 'outline', label, style: { background: 'transparent', color: 'var(--ac-text-primary)', border: '1px solid var(--ac-border-muted)', padding: '8px 18px', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer' } },
        { v: 'brand', label, style: { background: 'var(--ac-brand)', color: '#fff', border: 'none', padding: '8px 18px', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer' } },
    ];
    return (
        <div style={previewWrap}>
            {previewHeader('BUTTON_MODULE', '#7c3aed', <Box size={16} />)}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {variants.map(({ v, style }) => (
                    <button key={v} style={style}>{label}</button>
                ))}
            </div>
            <div style={{ fontSize: '0.52rem', color: 'var(--ac-text-muted)', letterSpacing: '0.06em' }}>VARIANTS: SOLID // OUTLINE // BRAND</div>
        </div>
    );
}

function ProgressBlock({ props }: { props: Block['props'] }) {
    return (
        <div style={previewWrap}>
            {previewHeader('PROGRESS_INDICATOR', '#00f0ff', <Activity size={16} />)}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {(['default', 'brand', 'success', 'warning'] as const).map(v => (
                    <AcidProgress key={v} value={v === (props.variant as string ?? 'brand') ? Number(props.value ?? 72) : [45, 72, 88, 60][['default', 'brand', 'success', 'warning'].indexOf(v)]} variant={v} showLabel={Boolean(props.showLabel)} />
                ))}
            </div>
        </div>
    );
}

function TabsBlock({ props }: { props: Block['props'] }) {
    return (
        <div style={{ ...previewWrap, paddingBottom: '0' }}>
            {previewHeader('TABS_SYSTEM', '#7c3aed', <Grid size={16} />)}
            <AcidTabs
                variant={(props.variant as 'industrial' | 'outline' | 'pills') ?? 'industrial'}
                tabs={[
                    { id: 'a', label: 'OVERVIEW', content: <div style={{ padding: '1rem', fontSize: '0.65rem', color: 'var(--ac-text-muted)' }}>Overview content goes here.</div> },
                    { id: 'b', label: 'SPECS', content: <div style={{ padding: '1rem', fontSize: '0.65rem', color: 'var(--ac-text-muted)' }}>Technical specifications.</div> },
                    { id: 'c', label: 'USAGE', content: <div style={{ padding: '1rem', fontSize: '0.65rem', color: 'var(--ac-text-muted)' }}>Usage examples and docs.</div> },
                ]}
            />
        </div>
    );
}

function InputBlock({ props }: { props: Block['props'] }) {
    return (
        <div style={previewWrap}>
            {previewHeader('INPUT_FIELD', '#00f0ff', <CheckSquare size={16} />)}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '420px' }}>
                <AcidInput label={String(props.label ?? 'USER_IDENTIFIER')} placeholder={String(props.placeholder ?? 'user@acid.io')} variant={(props.variant as 'outline' | 'filled' | 'terminal') ?? 'outline'} />
                <AcidInput label="TERMINAL_QUERY" placeholder="Enter command..." variant="terminal" />
            </div>
        </div>
    );
}

function SkeletonBlock({ props }: { props: Block['props'] }) {
    const rows = Math.min(Number(props.rows ?? 3), 6);
    return (
        <div style={previewWrap}>
            {previewHeader('SKELETON_LOADER', '#7c3aed', <Minus size={16} />)}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: '400px' }}>
                <AcidSkeleton height="40px" shape={(props.shape as 'rectangle' | 'circle' | 'industrial') ?? 'industrial'} />
                {Array.from({ length: rows }).map((_, i) => (
                    <AcidSkeleton key={i} height="14px" width={`${90 - i * 12}%`} />
                ))}
            </div>
        </div>
    );
}

function AlertBlock({ props }: { props: Block['props'] }) {
    const variantStyles: Record<string, { border: string; bg: string; icon: React.ReactNode; color: string }> = {
        destructive: { border: '#f44336', bg: 'rgba(244,67,54,0.07)', icon: <AlertTriangle size={16} />, color: '#f44336' },
        success: { border: '#27c93f', bg: 'rgba(39,201,63,0.07)', icon: <Activity size={16} />, color: '#27c93f' },
        warning: { border: '#ffbd2e', bg: 'rgba(255,189,46,0.07)', icon: <Zap size={16} />, color: '#ffbd2e' },
        default: { border: 'var(--ac-border-muted)', bg: 'var(--ac-surface)', icon: <Shield size={16} />, color: 'var(--ac-text-muted)' },
    };
    const v = String(props.variant ?? 'destructive');
    const s = variantStyles[v] ?? variantStyles.default;
    return (
        <div style={previewWrap}>
            {previewHeader('ALERT_COMPONENT', s.color, <Shield size={16} />)}
            <div style={{ border: `1px solid ${s.border}`, background: s.bg, padding: '1rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: s.color, flexShrink: 0, marginTop: '1px' }}>{s.icon}</span>
                <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', color: s.color, marginBottom: '0.3rem' }}>{String(props.title ?? 'SYSTEM_ALERT')}</div>
                    <div style={{ fontSize: '0.62rem', color: 'var(--ac-text-muted)', lineHeight: 1.6 }}>{String(props.body ?? 'Subsystem failure detected.')}</div>
                </div>
            </div>
        </div>
    );
}

/* ── Elementor-style Section with configurable columns ── */
const LAYOUT_TO_COLS: Record<string, string> = {
    '1': '1fr', '2': '1fr 1fr', '3': '1fr 1fr 1fr', '4': '1fr 1fr 1fr 1fr',
    '25/75': '1fr 3fr', '75/25': '3fr 1fr', '33/67': '1fr 2fr', '67/33': '2fr 1fr', '50/50': '1fr 1fr',
};
const GAP_MAP: Record<string, string> = { none: '0', sm: '0.5rem', md: '1.5rem', lg: '3rem' };
const PAD_MAP: Record<string, string> = { none: '0', sm: '1rem', md: '2rem', lg: '4rem', xl: '6rem' };
const BG_MAP: Record<string, string> = { transparent: 'transparent', surface: 'var(--ac-surface)', brand: 'var(--ac-brand)', dark: '#050505' };

function SectionBlock({ props, blockId, allBlocks, onDropIn, onSelect, onContextMenu }: {
    props: Block['props'];
    blockId: string;
    allBlocks: Block[];
    onDropIn?: (parentId: string, slot: string) => void;
    onSelect?: (id: string) => void;
    onContextMenu?: (id: string, x: number, y: number) => void
}) {
    const layout = String(props.layout ?? '2');
    const cols = LAYOUT_TO_COLS[layout] ?? '1fr 1fr';
    const numCols = layout.includes('/') ? 2 : Math.min(Number(layout) || 2, 4);
    const gap = GAP_MAP[String(props.gap ?? 'md')];
    const pad = PAD_MAP[String(props.padding ?? 'md')];
    const bg = BG_MAP[String(props.bg ?? 'transparent')];
    const isBrand = props.bg === 'brand';
    const [overSlot, setOverSlot] = React.useState<string | null>(null);

    return (
        <div style={{ padding: `${pad} 2.5rem`, background: bg, borderBottom: '1px solid var(--ac-border-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.42rem', color: isBrand ? 'rgba(255,255,255,0.7)' : 'var(--ac-brand)', letterSpacing: '0.12em', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>* SECTION // LAYOUT: {layout}</span>
                <div style={{ display: 'flex', gap: '3px' }}>
                    {Array.from({ length: numCols }).map((_, i) => (
                        <div key={i} style={{ height: '6px', flex: 1, background: isBrand ? 'rgba(255,255,255,0.3)' : 'var(--ac-border-bright)', minWidth: '12px' }} />
                    ))}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: cols, gap, minHeight: '100px' }}>
                {Array.from({ length: numCols }).map((_, i) => {
                    const slotId = `col-${i + 1}`;
                    const slotChildren = allBlocks.filter(b => b.parentId === blockId && b.slot === slotId);
                    const isOver = overSlot === slotId;

                    return (
                        <div
                            key={i}
                            className={`studio-section-slot ${isOver ? 'over' : ''}`}
                            onDragOver={e => { e.preventDefault(); e.stopPropagation(); setOverSlot(slotId); }}
                            onDragLeave={() => setOverSlot(null)}
                            onDrop={e => { e.preventDefault(); e.stopPropagation(); setOverSlot(null); onDropIn?.(blockId, slotId); }}
                            style={{
                                border: `1px dashed ${isOver ? 'var(--ac-brand)' : (isBrand ? 'rgba(255,255,255,0.3)' : 'var(--ac-border-muted)')}`,
                                padding: '1rem 0.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                minHeight: '100px',
                                background: isOver ? 'rgba(var(--ac-brand-rgb), 0.05)' : 'transparent',
                                transition: 'all 0.2s'
                            }}
                        >
                            {slotChildren.length > 0 ? (
                                slotChildren.map(child => (
                                    <div
                                        key={child.id}
                                        className="nested-preview-wrap"
                                        onClick={e => { e.stopPropagation(); onSelect?.(child.id); }}
                                        onContextMenu={e => { e.preventDefault(); e.stopPropagation(); onContextMenu?.(child.id, e.clientX, e.clientY); }}
                                        style={{ cursor: 'pointer', outline: 'none' }}
                                    >
                                        {renderBlock(child, allBlocks, onDropIn, onSelect, onContextMenu)}
                                    </div>
                                ))
                            ) : (
                                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: isOver ? 1 : 0.3 }}>
                                    <span style={{ fontSize: '0.45rem', color: isBrand ? '#fff' : 'var(--ac-text-muted)', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
                                        {isOver ? 'RELEASE_TO_DROP' : `DROP_ZONE_0${i + 1}`}
                                    </span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function DividerBlock({ props }: { props: Block['props'] }) {
    const divStyle = String(props.style ?? 'solid');
    const label = String(props.label ?? 'SECTION_BREAK');
    const isGradient = divStyle === 'gradient';
    const isGlitch = divStyle === 'glitch';
    return (
        <div style={{ padding: '1.5rem 2.5rem', borderBottom: '1px solid var(--ac-border-muted)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {isGradient ? <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, var(--ac-brand), transparent)' }} /> : isGlitch ? <div style={{ flex: 1, height: '2px', background: 'repeating-linear-gradient(90deg, var(--ac-brand) 0px, var(--ac-brand) 4px, transparent 4px, transparent 8px)', opacity: 0.7 }} /> : <div style={{ flex: 1, height: '1px', borderTop: `1px ${divStyle === 'dashed' ? 'dashed' : 'solid'} var(--ac-border-muted)` }} />}
            <span style={{ fontSize: '0.45rem', color: 'var(--ac-brand)', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)', fontWeight: 700, flexShrink: 0 }}>{label}</span>
            {isGradient ? <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--ac-brand), transparent)' }} /> : <div style={{ flex: 1, height: '1px', borderTop: `1px ${divStyle === 'dashed' ? 'dashed' : 'solid'} var(--ac-border-muted)` }} />}
        </div>
    );
}

function ImageBlock({ props }: { props: Block['props'] }) {
    const hasSrc = String(props.src ?? '').length > 4;
    const ratio = String(props.aspectRatio ?? '16/9');
    const padBot = ratio === '1/1' ? '100%' : ratio === '4/3' ? '75%' : ratio === '3/1' ? '33%' : '56.25%';
    return (
        <div style={{ padding: '2rem 2.5rem', borderBottom: '1px solid var(--ac-border-muted)' }}>
            <div style={{ fontSize: '0.42rem', color: 'var(--ac-brand)', letterSpacing: '0.12em', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>* IMAGE // RATIO: {ratio}</div>
            <div style={{ position: 'relative', paddingBottom: padBot, background: 'var(--ac-surface)', border: '1px dashed var(--ac-border-muted)', overflow: 'hidden' }}>
                {hasSrc ? <img src={String(props.src)} alt={String(props.alt ?? '')} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: (props.fit as 'cover' | 'contain' | 'fill') ?? 'cover' }} /> : <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}><span style={{ fontSize: '2rem', opacity: 0.2 }}>⬛</span><span style={{ fontSize: '0.5rem', color: 'var(--ac-text-muted)', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>ADD_IMAGE_URL</span></div>}
            </div>
        </div>
    );
}

function CardBlock({ props }: { props: Block['props'] }) {
    const isBrand = props.variant === 'brand';
    return (
        <div style={{ padding: '2rem 2.5rem', borderBottom: '1px solid var(--ac-border-muted)' }}>
            <div style={{ border: `1px solid ${isBrand ? 'var(--ac-brand)' : 'var(--ac-border-muted)'}`, padding: '1.5rem', background: 'var(--ac-surface)', maxWidth: '360px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em' }}>{String(props.title ?? 'SYSTEM_MODULE')}</span>
                    <AcidBadge variant={isBrand ? 'brand' : 'outline'} size="sm">{String(props.badge ?? 'ACTIVE')}</AcidBadge>
                </div>
                <p style={{ fontSize: '0.62rem', color: 'var(--ac-text-muted)', lineHeight: 1.7, margin: 0 }}>{String(props.body ?? 'Module description.')}</p>
            </div>
        </div>
    );
}

function NavbarBlock({ props }: { props: Block['props'] }) {
    const links = String(props.links ?? 'DOCS,LIBRARY,STUDIO').split(',').map(s => s.trim());
    return (
        <div style={{ padding: '0 2rem', background: 'var(--ac-bg)', borderBottom: '1px solid var(--ac-border-muted)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: '0.7rem' }}>* {String(props.brand ?? 'ACID_UI')}</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>{links.map(l => <span key={l} style={{ fontSize: '0.55rem', color: 'var(--ac-text-muted)', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>{l}</span>)}</div>
            {props.showCta && <button style={{ background: 'var(--ac-brand)', color: '#fff', border: 'none', padding: '5px 14px', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', fontWeight: 700, cursor: 'pointer' }}>GET_STARTED</button>}
        </div>
    );
}

function ChartBlock() {
    const bars = [65, 82, 45, 91, 73, 58, 88];
    return (
        <div style={previewWrap}>
            {previewHeader('DATA_CHART', '#f44336', <BarChart2 size={16} />)}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '80px', padding: '0 4px' }}>
                {bars.map((h, i) => (
                    <div key={i} style={{ flex: 1, background: i === 3 ? 'var(--ac-brand)' : 'var(--ac-border-muted)', height: `${h}%`, transition: 'height 0.4s', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '2px' }}>
                        <span style={{ fontSize: '0.35rem', color: i === 3 ? '#fff' : 'var(--ac-text-muted)' }}>{h}</span>
                    </div>
                ))}
            </div>
            <div style={{ fontSize: '0.5rem', color: 'var(--ac-text-muted)', letterSpacing: '0.06em' }}>SERIES: PERFORMANCE_METRICS // 7D</div>
        </div>
    );
}

function CountUpBlock() {
    return (
        <div style={previewWrap}>
            {previewHeader('COUNT_UP', '#ffbd2e', <Star size={16} />)}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--ac-border-muted)', border: '1px solid var(--ac-border-muted)' }}>
                <div style={{ padding: '1rem', background: 'var(--ac-bg)', textAlign: 'center' }}>
                    <AcidCountUp end={2847} label="ACTIVE_NODES" />
                </div>
                <div style={{ padding: '1rem', background: 'var(--ac-bg)', textAlign: 'center' }}>
                    <AcidCountUp end={99.8} suffix="%" label="DATA_PROCESSED" decimals={1} />
                </div>
                <div style={{ padding: '1rem', background: 'var(--ac-bg)', textAlign: 'center' }}>
                    <AcidCountUp end={2} prefix="< " suffix="ms" label="LATENCY" />
                </div>
                <div style={{ padding: '1rem', background: 'var(--ac-bg)', textAlign: 'center' }}>
                    <AcidCountUp end={99.99} suffix="%" label="UPTIME" decimals={2} />
                </div>
            </div>
        </div>
    );
}

function DrawerPreview() {
    const [open, setOpen] = React.useState(false);
    return (
        <div style={{ padding: '1rem' }}>
            <div
                onClick={() => setOpen(true)}
                style={{ border: '1px solid var(--ac-border-muted)', padding: '0.8rem', background: 'var(--ac-surface)', borderLeft: '3px solid var(--ac-brand)', cursor: 'pointer' }}
            >
                DRAWER_TRIGGER (CLICK)
            </div>
            <AcidDrawer isOpen={open} onClose={() => setOpen(false)} title="SYSTEM_DRAWER">
                <div style={{ padding: '1.5rem', fontSize: '0.65rem', color: 'var(--ac-text-muted)' }}>
                    Dynamic drawer content sequence initialized. All subsystems report nominal status for the current operation.
                </div>
            </AcidDrawer>
        </div>
    );
}

function SheetPreview() {
    const [open, setOpen] = React.useState(false);
    return (
        <div style={{ padding: '1rem' }}>
            <div
                onClick={() => setOpen(true)}
                style={{ border: '1px solid var(--ac-border-muted)', padding: '0.8rem', background: 'var(--ac-surface)', cursor: 'pointer' }}
            >
                SHEET_TRIGGER (CLICK)
            </div>
            <AcidSheet isOpen={open} onClose={() => setOpen(false)} title="SIDE_SHEET">
                <div style={{ padding: '1.5rem', fontSize: '0.65rem', color: 'var(--ac-text-muted)' }}>
                    Side panel diagnostics active. Monitoring thermal levels and power distribution across the primary architecture.
                </div>
            </AcidSheet>
        </div>
    );
}

function DropdownPreview() {
    return (
        <div style={{ padding: '1rem' }}>
            <AcidDropdown
                trigger={<div style={{ border: '1px solid var(--ac-border-muted)', padding: '0.5rem 1rem', background: 'var(--ac-surface)', cursor: 'pointer', fontSize: '0.6rem' }}>SELECT_ACTION ▾</div>}
                items={[
                    { id: '1', label: 'EXECUTE_ALPHA' },
                    { id: '2', label: 'TERMINATE_BETA', variant: 'danger' }
                ]}
            />
        </div>
    );
}

/* Main render function */
export function renderBlock(
    block: Block,
    allBlocks: Block[],
    onDropIn?: (parentId: string, slot: string) => void,
    onSelect?: (id: string) => void,
    onContextMenu?: (id: string, x: number, y: number) => void
): React.ReactNode {
    switch (block.type) {
        case 'avatar': return <AvatarBlock props={block.props} />;
        case 'badge': return <BadgeBlock props={block.props} />;
        case 'button': return <ButtonBlock props={block.props} />;
        case 'progress': return <ProgressBlock props={block.props} />;
        case 'tabs': return <TabsBlock props={block.props} />;
        case 'input': case 'textarea': return <InputBlock props={block.props} />;
        case 'input-otp': return <div style={previewWrap}>{previewHeader('OTP_INPUT', '#00f0ff', <Type size={14} />)}<div style={{ padding: '1rem', background: 'var(--ac-surface)' }}><AcidInputOtp length={6} /></div></div>;
        case 'skeleton': return <SkeletonBlock props={block.props} />;
        case 'alert': return <AlertBlock props={block.props} />;
        case 'accordion': case 'collapsible': return <div style={previewWrap}>{previewHeader('ACCORDION', '#7c3aed', <List size={14} />)}<div style={{ padding: '1rem', background: 'var(--ac-bg)' }}><div style={{ border: '1px solid var(--ac-border-muted)', padding: '0.8rem', fontSize: '0.62rem', color: 'var(--ac-text-muted)', display: 'flex', justifyContent: 'space-between' }}><span>MODULE_INFO</span><ChevronDown size={14} /></div></div></div>;
        case 'carousel': return <div style={previewWrap}>{previewHeader('CAROUSEL', '#00f0ff', <Layout size={14} />)}<div style={{ height: '160px' }}><AcidCarousel items={[
            { id: '1', title: 'MODULE_ALPHA', description: 'Core system synchronization active.', label: 'SYS_01' },
            { id: '2', title: 'MODULE_BETA', description: 'Secondary protocol verification.', label: 'SYS_02' }
        ]} /></div></div>;
        case 'dialog': case 'modal': return <div style={previewWrap}>{previewHeader('DIALOG', '#ffbd2e', <Square size={14} />)}<div style={{ padding: '1rem' }}><AcidDialog title="PREVIEW_MODAL" description="System dialog window mock." trigger={<div style={{ border: '1px solid var(--ac-border-muted)', padding: '1rem', background: 'var(--ac-surface)', width: '200px', cursor: 'pointer' }}>MODAL_TRIGGER (CLICK)</div>} /></div></div>;
        case 'drawer': return <div style={previewWrap}>{previewHeader('DRAWER', '#27c93f', <Scroll size={14} />)}<DrawerPreview /></div>;
        case 'dropdown': return <div style={previewWrap}>{previewHeader('DROPDOWN', '#7c3aed', <ChevronDown size={14} />)}<DropdownPreview /></div>;
        case 'sheet': return <div style={previewWrap}>{previewHeader('SHEET', '#f44336', <Square size={14} />)}<SheetPreview /></div>;
        case 'tooltip': return <div style={previewWrap}>{previewHeader('TOOLTIP', '#00f0ff', <MessageSquare size={14} />)}<div style={{ padding: '1.5rem', textAlign: 'center' }}><AcidTooltip content="SYSTEM_HINT_01" position="top"><span style={{ fontSize: '0.6rem', textDecoration: 'underline dotted var(--ac-brand)', cursor: 'help' }}>HOVER_OVER_ME</span></AcidTooltip></div></div>;

        case 'terminal-card': return <div style={previewWrap}>{previewHeader('TERM_CARD', '#27c93f', <Terminal size={14} />)}<AcidTerminalCard title={String(block.props.title ?? 'ACID_TERM')}><div style={{ fontSize: '0.52rem', opacity: 0.7 }}>{String(block.props.output ?? '> system_ready')}</div></AcidTerminalCard></div>;
        case 'terminal-logs': return <div style={previewWrap}>{previewHeader('TERM_LOGS', '#ffbd2e', <Terminal size={14} />)}<AcidTerminalLogs title={String(block.props.title ?? 'SYS_LOGS')} /></div>;
        case 'code-block': return <div style={previewWrap}>{previewHeader('CODE_BLOCK', '#00f0ff', <Code size={14} />)}<div style={{ padding: '0.5rem' }}><AcidCodeBlock code={String(block.props.code ?? 'npm i acidui-core')} /></div></div>;

        case 'timeline': return <div style={previewWrap}>{previewHeader('TIMELINE', '#f44336', <Clock size={14} />)}<div style={{ padding: '1.5rem' }}><AcidTimeline data={[{ title: 'SYSTEM_LAUNCH', content: 'Initial protocol deployment.' }, { title: 'CORE_OPTIMIZED', content: 'Performance metrics increased by 40%.' }]} /></div></div>;
        case 'switch': case 'toggle': return <div style={previewWrap}>{previewHeader('SWITCH', '#27c93f', <ToggleLeft size={14} />)}<div style={{ padding: '1rem', display: 'flex', gap: '1rem' }}><AcidSwitch checked={true} /> <AcidSwitch checked={false} /></div></div>;
        case 'chart': return <ChartBlock />;
        case 'count-up': return <CountUpBlock />;
        case 'meter': return <div style={previewWrap}>{previewHeader('METER', '#27c93f', <Activity size={14} />)}<div style={{ padding: '1.5rem' }}><AcidMeter value={72} /></div></div>;
        case 'lcd-display': return <div style={previewWrap}>{previewHeader('LCD_VIEW', '#ffbd2e', <Monitor size={14} />)}<div style={{ padding: '1rem' }}><AcidLCDDisplay value="ACID_OS" label="VERSION_0.3" /></div></div>;
        case 'progress-matrix': return <div style={previewWrap}>{previewHeader('MATRIX', '#7c3aed', <Grid size={14} />)}<div style={{ padding: '1rem' }}><AcidProgressMatrix /></div></div>;

        /* SPECIAL EFFECTS */
        case 'aurora-text': return <div style={previewWrap}>{previewHeader('AURORA', '#f44336', <Star size={14} />)}<div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.2rem' }}><AcidAuroraText>{String(block.props.label || block.props.text || 'AURORA_VISUAL')}</AcidAuroraText></div></div>;
        case 'shiny-text': return <div style={previewWrap}>{previewHeader('SHINY', '#00f0ff', <Star size={14} />)}<div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.2rem' }}><AcidShinyText>{String(block.props.label || block.props.text || 'SHINY_METAL')}</AcidShinyText></div></div>;
        case 'typing-text': return <div style={previewWrap}>{previewHeader('TYPING', '#ffbd2e', <Type size={14} />)}<div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}><AcidTypingText text={String(block.props.label || block.props.text || 'INITIALIZING_STREAM...')} /></div></div>;
        case 'rigid-header': return <div style={previewWrap}>{previewHeader('RIGID_HDR', '#27c93f', <Type size={14} />)}<div style={{ padding: '1.5rem' }}><AcidRigidHeader title={String(block.props.label || block.props.text || 'RIGID_STRUCTURE')} /></div></div>;
        case 'text-marquee': return <div style={previewWrap}>{previewHeader('MARQUEE', '#f44336', <Minus size={14} />)}<AcidTextMarquee text={String(block.props.label || block.props.text || 'ALERT_BROADCAST_SYSTEM_ONLINE')} /></div>;
        case 'video-text': return <div style={previewWrap}>{previewHeader('VIDEO_TEXT', '#7c3aed', <Image size={14} />)}<div style={{ padding: '2rem', textAlign: 'center' }}><AcidVideoText text={String(block.props.label || block.props.text || 'DATA_V')} videoSrc="https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-geometric-lines-and-particles-20092-large.mp4" /></div></div>;
        case 'printstream': return <div style={previewWrap}>{previewHeader('PRINTSTRM', '#7c3aed', <Scroll size={14} />)}<div style={{ height: '200px' }}><AcidPrintStreamScroll text={String(block.props.text || 'LOG_STREAM_ACTIVE')} /></div></div>;

        /* LAYOUTS */
        case 'bento': return <div style={previewWrap}>{previewHeader('BENTO_GRID', '#00f0ff', <Grid size={14} />)}<div style={{ padding: '1rem' }}><AcidBentoGrid><AcidBentoItem title="CORE" description="System sync." /><AcidBentoItem title="DATA" description="Stream active." /></AcidBentoGrid></div></div>;
        case 'masonry': return <div style={previewWrap}>{previewHeader('MASONRY', '#ffbd2e', <LayoutGrid size={14} />)}<div style={{ padding: '1rem' }}><AcidMasonry items={[{ id: '1', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&h=400&auto=format&fit=crop', height: 400 }, { id: '2', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&h=300&auto=format&fit=crop', height: 300 }]} /></div></div>;
        case 'cube-grid': return <div style={previewWrap}>{previewHeader('CUBE_GRID', '#00f0ff', <Grid size={14} />)}<div style={{ padding: '1rem' }}><AcidCubeGrid /></div></div>;
        case 'stack-list': return <div style={previewWrap}>{previewHeader('STACK_LIST', '#27c93f', <Layers size={14} />)}<div style={{ padding: '1rem' }}><AcidStackList items={[{ id: '1', label: 'CPU_LOAD', value: '45%' }, { id: '2', label: 'MEM_AVAIL', value: '12GB' }]} /></div></div>;
        case 'magic-bento': return <div style={previewWrap}>{previewHeader('MAGIC_BENTO', '#f44336', <Zap size={14} />)}<div style={{ padding: '1rem' }}><AcidMagicBento items={[{ id: '1', title: 'QUANTUM_CORE', description: 'Real-time processing.', label: 'CORE_01' }, { id: '2', title: 'SYNAPTIC_NODE', description: 'Network verification.', label: 'NODE_02' }]} /></div></div>;

        case 'knob': return <div style={previewWrap}>{previewHeader('KNOB', '#00f0ff', <Circle size={14} />)}<div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'center' }}><AcidKnob value={45} /></div></div>;
        case 'slider': return <div style={previewWrap}>{previewHeader('SLIDER', '#ffbd2e', <Minus size={14} />)}<div style={{ padding: '1.5rem' }}><AcidSlider value={60} label="FREQ_FILTER" /></div></div>;
        case 'keypad': return <div style={previewWrap}>{previewHeader('KEYPAD', '#7c3aed', <Grid size={14} />)}<div style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}><AcidKeypad /></div></div>;
        case 'stepper': return <div style={previewWrap}>{previewHeader('STEPPER', '#f44336', <Activity size={14} />)}<div style={{ padding: '1.5rem' }}><AcidStepper><AcidStep>AUTH</AcidStep><AcidStep>GRID</AcidStep><AcidStep>EXEC</AcidStep></AcidStepper></div></div>;
        case 'radio-group': return <div style={previewWrap}>{previewHeader('RADIO_GRP', '#ffbd2e', <Circle size={14} />)}<div style={{ padding: '1rem' }}><AcidRadioGroup options={[{ value: 'MODE_A', label: 'MODE_A' }, { value: 'MODE_B', label: 'MODE_B' }]} value="MODE_A" /></div></div>;

        case 'section': return <SectionBlock props={block.props} blockId={block.id} allBlocks={allBlocks} onDropIn={onDropIn} onSelect={onSelect} onContextMenu={onContextMenu} />;
        case 'divider': return <DividerBlock props={block.props} />;
        case 'image': return <ImageBlock props={block.props} />;
        case 'card': return <CardBlock props={block.props} />;
        case 'navbar': return <NavbarBlock props={block.props} />;
        case 'hero': return <HeroSection props={block.props} />;
        case 'features': return <FeaturesSection props={block.props} />;
        case 'cta': return <CTASection props={block.props} />;
        case 'text': return <TextSection props={block.props} />;
        default: return <GenericPreview block={block} />;
    }
}

/* Section block renderers */
function HeroSection({ props }: { props: Block['props'] }) {
    return (
        <div className="block-hero">
            <div className="block-hero-tag">{String(props.tag ?? 'SYSTEM_READY // v1.0')}</div>
            <h1 className="block-hero-title">{String(props.title ?? 'Build Without Limits.')}</h1>
            <p className="block-hero-desc">{String(props.description ?? '')}</p>
            <div className="block-hero-actions">
                <button className="block-hero-btn-primary">{String(props.primaryLabel ?? 'GET_STARTED')}</button>
                <button className="block-hero-btn-secondary">{String(props.secondaryLabel ?? 'VIEW_SOURCE')}</button>
            </div>
        </div>
    );
}
function FeaturesSection({ props }: { props: Block['props'] }) {
    const features = [{ icon: <Zap size={20} />, title: 'ZERO_LATENCY', desc: 'Sub-millisecond interaction feedback.' }, { icon: <Shield size={20} />, title: 'STRUCTURAL_INTEGRITY', desc: 'Holds under extreme data density.' }, { icon: <Activity size={20} />, title: 'KINETIC_FEEDBACK', desc: 'Precision-tuned motion system.' }];
    return (
        <div className="block-features">
            <span style={{ fontSize: '0.52rem', color: 'var(--ac-brand)', letterSpacing: '0.15em' }}>{String(props.label ?? 'PROTOCOL_BREAKDOWN')}</span>
            <div className="block-text-title" style={{ marginTop: '0.5rem' }}>{String(props.title ?? 'Core Architecture')}</div>
            <div className="block-features-grid">{features.map((f, i) => <div key={i} className="block-feature-item"><div className="block-feature-icon">{f.icon}</div><div className="block-feature-title">{f.title}</div><div className="block-feature-desc">{f.desc}</div></div>)}</div>
        </div>
    );
}
function CTASection({ props }: { props: Block['props'] }) {
    return <div className="block-cta"><h2 className="block-cta-title">{String(props.title ?? 'Deploy Your Interface.')}</h2><button className="block-cta-btn">{String(props.buttonLabel ?? 'LAUNCH_NOW')}</button></div>;
}
function TextSection({ props }: { props: Block['props'] }) {
    return <div className="block-text-section"><span className="block-text-label">{String(props.label ?? 'MODULE_DETAIL')}</span><h2 className="block-text-title">{String(props.title ?? 'High-Density Information.')}</h2><p className="block-text-body">{String(props.body ?? '')}</p></div>;
}
function GenericPreview({ block }: { block: Block }) {
    const BLOCK_COLORS: Record<string, string> = { hero: '#f44336', features: '#00f0ff', cta: '#ffbd2e', text: '#27c93f', accordion: '#7c3aed', alert: '#f44336', avatar: '#ffbd2e', badge: '#27c93f', button: '#7c3aed', chart: '#00f0ff', progress: '#00f0ff', skeleton: '#7c3aed', tabs: '#7c3aed', input: '#00f0ff', timeline: '#00f0ff', 'terminal-card': '#27c93f', switch: '#27c93f', 'count-up': '#ffbd2e' };
    const color = BLOCK_COLORS[block.type] ?? '#f44336';
    return (
        <div style={previewWrap}>
            {previewHeader(block.type.toUpperCase().replace(/-/g, '_'), color, <Star size={16} />)}
            <div style={{ padding: '2rem', border: `1px dashed ${color}33`, background: `${color}05`, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80px' }}>
                <span style={{ fontSize: '0.6rem', color, letterSpacing: '0.1em', opacity: 0.7 }}>* {block.type.toUpperCase().replace(/-/g, '_')} // PREVIEW_NODE</span>
            </div>
        </div>
    );
}
