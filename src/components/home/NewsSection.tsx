import { Link } from 'react-router-dom'
import { Heart, ChevronRight, Newspaper, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const hotGames = [
  'Brawl Stars',
  'PUBGM',
  'Free Fire',
  'Roblox',
  'Genshin Impact',
  'Honkai: Star Rail',
]

const newsArticles = [
  {
    id: '1',
    title: 'Latest Mobile Legends Codes (Dec 2025) 💎Claim Free Diamonds & Skins!',
    date: '2025-12-22',
    likes: 6,
    image: 'https://picsum.photos/seed/news1/400/200',
    url: '/blog/mobile-legends-codes',
  },
  {
    id: '2',
    title: 'Honkai: Star Rail Codes (Dec 2025) 🚀 Latest Working Codes for Free Stellar Jade',
    date: '2025-12-22',
    likes: 3,
    image: 'https://picsum.photos/seed/news2/400/200',
    url: '/blog/honkai-star-rail-codes',
  },
  {
    id: '3',
    title: 'Honkai Star Rail Rerun Character Roadmap 3.8-4.2: New Limited Characters',
    date: '2025-12-19',
    likes: 0,
    image: 'https://picsum.photos/seed/news3/400/200',
    url: '/blog/hsr-rerun-roadmap',
  },
  {
    id: '4',
    title: 'Gear Up for Arena Breakout Season 11| Massive Discounts on BUFF-DEMO!',
    date: '2025-12-18',
    likes: 0,
    image: 'https://picsum.photos/seed/news4/400/200',
    url: '/blog/arena-breakout-discounts',
  },
  {
    id: '5',
    title: 'New PUBG Update: Everything You Should Know about PUBG Mobile 4.2 Update',
    date: '2025-12-17',
    likes: 0,
    image: 'https://picsum.photos/seed/news5/400/200',
    url: '/blog/pubg-update',
  },
  {
    id: '6',
    title: 'Genshin Impact Columbina Kit Leaked: Skills, Weapon & Constellations',
    date: '2025-12-16',
    likes: 1,
    image: 'https://picsum.photos/seed/news6/400/200',
    url: '/blog/genshin-columbina-leak',
  },
]

export function NewsSection() {
  return (
    <section className="py-8">
      {/* 标题栏 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-dark-700/80 flex items-center justify-center">
            <Newspaper className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Trending Game News & Events</h2>
            <p className="text-sm text-text-secondary">Explore the latest news, guides, and updates</p>
          </div>
        </div>

        <Link to="/blog">
          <Button variant="ghost" size="sm" className="gap-1 text-text-secondary hover:text-white">
            More Contents
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* 热门游戏标签 */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium shrink-0">
          <Flame className="w-4 h-4" />
          Hot Game
        </div>
        {hotGames.map((game) => (
          <button
            key={game}
            className="px-4 py-1.5 rounded-full bg-dark-700/80 text-text-secondary text-sm hover:bg-dark-600 hover:text-white transition-colors shrink-0"
          >
            {game}
          </button>
        ))}
      </div>

      {/* 新闻网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsArticles.map((article, index) => (
          <Link
            key={article.id}
            to={article.url}
            className={cn(
              'group relative rounded-xl overflow-hidden bg-dark-700/50 border border-white/5 card-hover',
              index === 0 && 'md:col-span-2 lg:col-span-1'
            )}
          >
            {/* 图片 */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent" />
            </div>

            {/* 内容 */}
            <div className="p-4">
              <h3 className="font-semibold text-white text-sm line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <div className="flex items-center justify-between mt-3 text-xs text-text-muted">
                <span>{article.date}</span>
                <div className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5" />
                  <span>{article.likes}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
