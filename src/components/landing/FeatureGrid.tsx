'use client'
import { motion } from 'framer-motion'
import { TrendingUp, Brain, ScatterChart, GitBranch, Cpu, FlaskConical } from 'lucide-react'

const features = [
  { icon: TrendingUp, title: 'Regression',       desc: 'Tune learning rate, see gradient descent live on your data.',  color: 'text-violet-400', bg: 'bg-violet-400/10' },
  { icon: GitBranch,  title: 'Classification',   desc: 'Visualize decision boundaries as they form, step by step.',     color: 'text-cyan-400',   bg: 'bg-cyan-400/10'   },
  { icon: ScatterChart, title: 'Clustering',      desc: 'Watch K-Means centroids converge with full animation control.',  color: 'text-emerald-400',bg: 'bg-emerald-400/10'},
  { icon: Brain,      title: 'Neural Networks',   desc: 'Build your own network, watch weights light up during training.',color: 'text-pink-400',   bg: 'bg-pink-400/10'   },
  { icon: Cpu,        title: 'Training Dynamics', desc: 'Loss curves, accuracy plots, weight distributions — live.',     color: 'text-amber-400',  bg: 'bg-amber-400/10'  },
  { icon: FlaskConical,title: 'Data Explorer',   desc: 'Upload any CSV and get instant stats, histograms, correlation.',  color: 'text-orange-400', bg: 'bg-orange-400/10' },
]

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <h2 className="mb-3 text-center text-2xl font-bold text-zinc-100">
        Every algorithm, made visual
      </h2>
      <p className="mb-12 text-center text-sm text-zinc-500">
        Built over 15 days, one module at a time.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-colors
                         hover:border-zinc-700 hover:bg-zinc-800/60"
            >
              <div className={`mb-3 inline-flex rounded-lg p-2.5 ${f.bg}`}>
                <Icon className={`h-4 w-4 ${f.color}`} />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-zinc-200">{f.title}</h3>
              <p className="text-xs leading-relaxed text-zinc-500">{f.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}