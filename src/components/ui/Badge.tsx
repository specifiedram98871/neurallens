import { cn } from '@/lib/utils'

type BadgeVariant = 'purple' | 'cyan' | 'emerald' | 'amber' | 'zinc'

const variants: Record<BadgeVariant, string> = {
  purple: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  cyan:   'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  emerald:'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  amber:  'bg-amber-500/10 text-amber-400 border-amber-500/20',
  zinc:   'bg-zinc-800 text-zinc-400 border-zinc-700',
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({ variant = 'zinc', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}