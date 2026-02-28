import { useState, useMemo } from 'react';
import { sidebarData } from '../data/sidebar';
import { AcidBadge } from '../components/AcidBadge';
import { ChevronRight, Search, Terminal, Grid, List, Activity, Cpu, Box, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import './Library.css';

export function Library() {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const categories = useMemo(() => sidebarData.map(cat => cat.title), []);

    const allItems = useMemo(() => sidebarData.flatMap(cat => cat.items.map(item => ({
        ...item,
        category: cat.title
    }))), []);

    const filtered = useMemo(() => allItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    }), [search, selectedCategory, allItems]);

    const stats = {
        total: allItems.length,
        new: allItems.filter(i => i.isNew).length,
        categories: categories.length
    };

    return (
        <div className="library-container">
            <header className="library-premium-header">
                <div className="header-bg-glow" />

                <div className="library-header-top">
                    <motion.div
                        className="library-logo-premium"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        <div className="logo-icon-container">
                            <Cpu size={24} className="text-brand" />
                        </div>
                        <div className="logo-text-container">
                            <span className="logo-title">REGISTRY_OS</span>
                            <span className="logo-version">v2.4.0.STABLE</span>
                        </div>
                    </motion.div>

                    <div className="library-actions">
                        <div className="view-toggle">
                            <button
                                className={clsx('view-btn', viewMode === 'grid' && 'active')}
                                onClick={() => setViewMode('grid')}
                            >
                                <Grid size={16} />
                            </button>
                            <button
                                className={clsx('view-btn', viewMode === 'list' && 'active')}
                                onClick={() => setViewMode('list')}
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="library-hero-section">
                    <motion.h1
                        className="library-hero-title"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        COMPONENT_EXPLORER
                    </motion.h1>
                    <p className="library-hero-desc">Discover and integrate high-performance industrial modules into your architecture.</p>
                </div>

                <div className="library-stats-bar">
                    <div className="stat-item">
                        <Activity size={14} />
                        <span>TOTAL_UNITS: {stats.total}</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <Sparkles size={14} className="text-brand" />
                        <span>NEW_RELEASES: {stats.new}</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <Box size={14} />
                        <span>CLUSTER_ZONES: {stats.categories}</span>
                    </div>
                </div>

                <div className="library-controls-glass">
                    <div className="library-search-premium">
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            placeholder="SEARCH_FOR_COMPONENTS..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {search && (
                            <button className="clear-search" onClick={() => setSearch('')}>ESC</button>
                        )}
                    </div>

                    <div className="category-chips">
                        <button
                            className={clsx('category-chip', !selectedCategory && 'active')}
                            onClick={() => setSelectedCategory(null)}
                        >
                            ALL_PLUGINS
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={clsx('category-chip', selectedCategory === cat && 'active')}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat.replace('_', ' ')}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className={clsx('library-main-content', viewMode)}>
                <AnimatePresence mode="popLayout">
                    {filtered.length > 0 ? (
                        <div className={clsx('library-layout-wrapper', viewMode)}>
                            {filtered.map((item, idx) => (
                                <motion.a
                                    key={item.name}
                                    href={`/docs#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="library-card-premium"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2, delay: idx * 0.02 }}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                >
                                    <div className="card-scanner-line" />
                                    <div className="card-top-header">
                                        <span className="category-label">{item.category}</span>
                                        {item.isNew && <AcidBadge variant="brand" className="new-pulse">NEW_MOD</AcidBadge>}
                                    </div>

                                    <div className="card-main">
                                        <div className="icon-box">
                                            <Box size={24} className="module-icon" />
                                        </div>
                                        <div className="card-text">
                                            <h3 className="module-name">{item.name.toUpperCase()}</h3>
                                            <span className="module-id">ID: {Math.random().toString(16).substring(2, 8).toUpperCase()}</span>
                                        </div>
                                    </div>

                                    <div className="card-footer-premium">
                                        <div className="footer-status">
                                            <div className="status-dot online" />
                                            <span>READY</span>
                                        </div>
                                        <div className="explore-btn">
                                            <span>INIT</span>
                                            <ChevronRight size={14} />
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            className="no-results-state"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Terminal size={48} className="text-muted" />
                            <h3>NO_MODULES_FOUND_IN_REGISTRY</h3>
                            <p>Try adjusting your filter parameters or search query.</p>
                            <button className="ac-btn-brand" onClick={() => { setSearch(''); setSelectedCategory(null); }}>RESET_SEARCH</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
