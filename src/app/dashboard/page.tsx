import { Topbar } from '@/components/layout/Topbar'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  TrendingUp, Brain, ScatterChart, GitBranch,
  BarChart3, Clock, Layers, ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const modules = [
  {
    title: 'Linear Regression',
    desc: 'Fit a line to data, visualize residuals, tune learning rate live.',
    icon: TrendingUp,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    day: 4,
    href: '/dashboard/linear',
  },
  {
    title: 'Classification',
    desc: 'Decision boundaries, confusion matrix, KNN visualization.',
    icon: GitBranch,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    day: 5,
    href: '/dashboard/classification',
  },
  {
    title: 'K-Means Clustering',
    desc: 'Watch centroids converge step by step. Adjust k interactively.',
    icon: ScatterChart,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    day: 6,
    href: '/dashboard/kmeans',
  },
  {
    title: 'Decision Tree',
    desc: 'Grow a tree, prune it, visualize splits on real features.',
    icon: Layers,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    day: 7,
    href: '/dashboard/decision-tree',
  },
  {
    title: 'Neural Network',
    desc: 'Build layers, animate forward pass, see weights light up.',
    icon: Brain,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    day: 8,
    href: '/dashboard/neural-net',
  },
  {
    title: 'Time Series',
    desc: 'Decompose trend/seasonality, run simple forecasts.',
    icon: Clock,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    day: 11,
    href: '/dashboard/timeseries',
  },
]

const stats = [
  { label: 'Algorithms', value: '10+' },
  { label: 'Interactive demos', value: '15' },
  { label: 'Datasets built-in', value: '8' },
  { label: 'Days to build', value: '15' },
]

export default function DashboardPage() {
  return (
    <div>
      <Topbar title="Dashboard" subtitle="Your ML visualization playground" />

      <div className="p-6">
        {/* Stats row */}
        <div className="mb-8 grid grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label} className="text-center">
              <p className="text-2xl font-bold text-zinc-100">{s.value}</p>
              <p className="mt-0.5 text-xs text-zinc-500">{s.label}</p>
            </Card>
          ))}
        </div>

        {/* Progress banner */}
        <Card className="mb-8 border-violet-500/20 bg-violet-500/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-violet-300">Day 1 complete — Foundation set up ✓</p>
              <p className="mt-1 text-xs text-zinc-500">
                Next up: Day 2 — Data Explorer. Upload a CSV and compute live statistics.
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-violet-400">7%</p>
              <p className="text-xs text-zinc-600">progress</p>
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full rounded-full bg-zinc-800">
            <div className="h-1.5 w-[7%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
          </div>
        </Card>

        {/* Module grid */}
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
          Algorithm Modules
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {modules.map((mod) => {
            const Icon = mod.icon
            const isReady = mod.day <= 1
            return (
              <Link
                key={mod.title}
                href={mod.href}
                className={`group relative block ${!isReady ? 'pointer-events-none' : ''}`}
              >
                <Card className="h-full transition-all duration-200 group-hover:border-zinc-700 group-hover:bg-zinc-800/60">
                  <div className="flex items-start justify-between">
                    <div className={`${mod.bg} rounded-lg p-2.5`}>
                      <Icon className={`h-4 w-4 ${mod.color}`} />
                    </div>
                    <Badge variant="zinc">Day {mod.day}</Badge>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-zinc-200">{mod.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{mod.desc}</p>
                  {!isReady && (
                    <div className="mt-3 flex items-center gap-1 text-xs text-zinc-600">
                      <span>Coming Day {mod.day}</span>
                    </div>
                  )}
                  {isReady && (
                    <div className={`mt-3 flex items-center gap-1 text-xs ${mod.color}`}>
                      <span>Open module</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  )}
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}