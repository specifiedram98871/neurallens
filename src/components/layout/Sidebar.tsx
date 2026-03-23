'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard, TrendingUp, GitBranch, Cpu,
    BarChart3, ScatterChart, Brain, Clock, Layers,
    FlaskConical, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'

const navItems = [
    {
        section: 'Overview',
        items: [
            { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, badge: null, ready: true },
        ]
    },
    {
        section: 'Supervised Learning',
        items: [
            { label: 'Linear Regression', href: '/dashboard/linear', icon: TrendingUp, badge: 'Day 4', ready: false },
            { label: 'Classification', href: '/dashboard/classification', icon: GitBranch, badge: 'Day 5', ready: false },
            { label: 'Decision Tree', href: '/dashboard/decision-tree', icon: Layers, badge: 'Day 7', ready: false },
        ]
    },
    {
        section: 'Unsupervised',
        items: [
            { label: 'K-Means', href: '/dashboard/kmeans', icon: ScatterChart, badge: 'Day 6', ready: false },
            { label: 'PCA', href: '/dashboard/pca', icon: BarChart3, badge: 'Day 12', ready: false },
        ]
    },
    {
        section: 'Deep Learning',
        items: [
            { label: 'Neural Network', href: '/dashboard/neural-net', icon: Brain, badge: 'Day 8', ready: false },
            { label: 'Training Viz', href: '/dashboard/training', icon: Cpu, badge: 'Day 9', ready: false },
        ]
    },
    {
        section: 'Analysis',
        items: [
            { label: 'Data Explorer', href: '/dashboard/explorer', icon: FlaskConical, badge: 'Day 2', ready: false },
            { label: 'Time Series', href: '/dashboard/timeseries', icon: Clock, badge: 'Day 11', ready: false },
        ]
    },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside
            className="fixed left-0 top-0 z-30 flex h-screen w-[var(--sidebar-width)] flex-col
                 border-r border-zinc-800 bg-zinc-950"
        >
            {/* Logo */}
            <div className="flex items-center gap-2.5 border-b border-zinc-800 px-5 py-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600">
                    <Brain className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-semibold tracking-tight">NeuralLens</span>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
                {navItems.map((group) => (
                    <div key={group.section} className="mb-5">
                        <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                            {group.section}
                        </p>
                        {group.items.map((item) => {
                            const active = pathname === item.href
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'group flex items-center justify-between rounded-lg px-2 py-2 text-sm transition-all',
                                        active
                                            ? 'bg-violet-600/15 text-violet-300'
                                            : 'text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200',
                                        !item.ready && 'opacity-50 pointer-events-none'
                                    )}
                                >
                                    <span className="flex items-center gap-2.5">
                                        <Icon className="h-4 w-4 flex-shrink-0" />
                                        {item.label}
                                    </span>
                                    {item.badge && !active && (
                                        <span className="text-[10px] text-zinc-600">{item.badge}</span>
                                    )}
                                    {active && <ChevronRight className="h-3 w-3 text-violet-400" />}
                                </Link>
                            )
                        })}
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-zinc-800 px-4 py-3">
                <p className="text-[11px] text-zinc-600">15-day build challenge</p>
                <div className="mt-1.5 h-1 w-full rounded-full bg-zinc-800">
                    <div
                        className="h-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                        style={{ width: '7%' }}   /* Day 1 of 15 */
                    />
                </div>
                <p className="mt-1 text-[10px] text-zinc-600">Day 1 / 15</p>
            </div>
        </aside>
    )
}