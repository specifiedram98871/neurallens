'use client'
import { Bell, Search } from 'lucide-react'

interface TopbarProps { 
    // interface is used to define the type of the probs and in java it is used to define the type of the object
    title: string
    subtitle?: string
}

export function Topbar({ title, subtitle }: TopbarProps) {
    return (
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between
                       border-b border-zinc-800 bg-zinc-950/80 px-6 backdrop-blur-md">
            <div>
                <h1 className="text-sm font-semibold text-zinc-100">{title}</h1>
                {subtitle && <p className="text-xs text-zinc-500">{subtitle}</p>}
            </div>
            <div className="flex items-center gap-3">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg
                           border border-zinc-800 text-zinc-400 hover:text-zinc-200
                           hover:bg-zinc-800 transition-colors">
                    <Search className="h-3.5 w-3.5" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg
                           border border-zinc-800 text-zinc-400 hover:text-zinc-200
                           hover:bg-zinc-800 transition-colors">
                    <Bell className="h-3.5 w-3.5" />
                </button>
            </div>
        </header>
    )
}