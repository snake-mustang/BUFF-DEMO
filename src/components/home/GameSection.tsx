import { useState } from 'react'
import { ChevronRight, Flame, Sparkles, TrendingUp, Gift, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GameCard } from './GameCard'
import type { Game, GameCategory } from '@/types'
import { cn } from '@/lib/utils'

interface GameSectionProps {
  title: string
  category: GameCategory
  games: Game[]
  icon?: React.ReactNode
  showMore?: boolean
  className?: string
}

const categoryIcons: Record<GameCategory, React.ReactNode> = {
  'bestseller': <Flame className="w-5 h-5 text-orange-400" />,
  'special-offer': <Sparkles className="w-5 h-5 text-yellow-400" />,
  'hot-games': <TrendingUp className="w-5 h-5 text-red-400" />,
  'new-arrivals': <Star className="w-5 h-5 text-blue-400" />,
  'trending': <TrendingUp className="w-5 h-5 text-green-400" />,
  'gift-cards': <Gift className="w-5 h-5 text-purple-400" />,
  'live-streaming': <Sparkles className="w-5 h-5 text-pink-400" />,
}

export function GameSection({ 
  title, 
  category, 
  games, 
  icon,
  showMore = true,
  className 
}: GameSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayGames = isExpanded ? games : games.slice(0, 12)
  const sectionIcon = icon || categoryIcons[category]

  return (
    <section className={cn('py-8', className)}>
      {/* 标题栏 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {sectionIcon && (
            <div className="w-10 h-10 rounded-xl bg-dark-700/80 flex items-center justify-center">
              {sectionIcon}
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
        </div>

        {showMore && games.length > 12 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-1 text-text-secondary hover:text-white"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            <ChevronRight className={cn(
              'w-4 h-4 transition-transform',
              isExpanded && 'rotate-90'
            )} />
          </Button>
        )}
      </div>

      {/* 游戏网格 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {displayGames.map((game, index) => (
          <div
            key={game.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  )
}

