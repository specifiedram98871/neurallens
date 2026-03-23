'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Brain } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
            {/* Animated grid background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundSize: '60px 60px',
                    backgroundImage:
                        'linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)',
                }}
            />

            {/* Purple glow blob */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)',
                }}
            />

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex items-center gap-2 rounded-full border border-violet-500/30
                   bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300"
            >
                <Brain className="h-3.5 w-3.5" />
                15-Day Build Challenge · Next.js + AI/ML
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 max-w-4xl text-5xl font-bold tracking-tight text-zinc-100 lg:text-6xl"
            >
                See machine learning{' '}
                <span className="gradient-text">come alive</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10 max-w-xl text-base leading-relaxed text-zinc-400"
            >
                NeuralLens turns abstract ML algorithms into interactive visualizations.
                Train models, tweak parameters, and watch data transform — all in your browser.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3"
            >
                <Link
                    href="/dashboard"
                    className="group flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3
                     text-sm font-medium text-white transition-all hover:bg-violet-500
                     hover:shadow-lg hover:shadow-violet-500/25"
                >
                    Open Dashboard
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                    href="https://github.com"
                    className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-medium
                     text-zinc-300 transition-all hover:border-zinc-600 hover:bg-zinc-800/60"
                >
                    View on GitHub
                </a>
            </motion.div>
        </section>
    )
}