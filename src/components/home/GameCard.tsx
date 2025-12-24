import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn, formatSold } from '@/lib/utils'
import type { Game } from '@/types'

interface GameCardProps {
  game: Game
  className?: string
}

export function GameCard({ game, className }: GameCardProps) {
  return (
    <Link
      to={game.url}
      className={cn(
        'group relative block rounded-xl overflow-hidden',
        'bg-dark-700/50 border border-white/5',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(99,102,241,0.35)]',
        'hover:border-primary/20',
        className
      )}
    >
      {/* 折扣标签 */}
      {game.discount > 0 && (
        <Badge 
          variant="discount" 
          className="absolute top-3 right-3 z-10 text-sm px-3 py-1 shadow-xl"
        >
          -{game.discount}%
        </Badge>
      )}

      {/* 游戏图片 */}
      <div className="relative aspect-square overflow-hidden bg-dark-800">
        <img
          src={game.image}
          alt={game.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* 悬浮渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* 游戏信息 */}
      <div className="p-4 space-y-2.5">
        {/* 游戏名称 */}
        <h3 className="font-semibold text-white text-base leading-snug line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
          {game.name}
        </h3>

        {/* 评分和销量 */}
        <div className="flex items-center justify-between pt-1">
          {/* 评分 */}
          {game.rating && (
            <div className="flex items-center gap-1.5 bg-yellow-500/10 px-2 py-1 rounded-md">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">{game.rating.toFixed(1)}</span>
            </div>
          )}

          {/* 销量 */}
          <span className="text-xs text-text-muted font-medium">
            {formatSold(game.sold)}
          </span>
        </div>
      </div>

      {/* 悬浮光圈 */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/40" />
      </div>
    </Link>
  )
}

// 骨架屏组件
export function GameCardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden bg-dark-700/50 border border-white/5 animate-pulse">
      <div className="aspect-square bg-dark-600" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-dark-600 rounded-md w-4/5" />
        <div className="h-5 bg-dark-600 rounded-md w-3/5" />
        <div className="flex justify-between pt-1">
          <div className="h-6 bg-dark-600 rounded-md w-14" />
          <div className="h-4 bg-dark-600 rounded-md w-20" />
        </div>
      </div>
    </div>
  )
}
