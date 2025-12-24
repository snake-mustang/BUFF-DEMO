import { Link } from 'react-router-dom'
import { Gift, ChevronRight, Copy, ExternalLink, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const hotGames = [
  'Roblox',
  'Free Fire',
  'Genshin Impact',
  'Honkai: Star Rail',
  'Brawl Stars',
  'PUBGM',
  'HOK',
  'NIKKE',
]

const redeemCodes = [
  {
    id: '1',
    gameName: 'Free Fire Redeem Codes in October 2025',
    date: '2025-11-17',
    codes: [
      { code: '590XATDKPVRG28N', expiry: '17/11/2025' },
      { code: 'X99TK56XDJ4X', expiry: '17/11/2025' },
    ],
    url: '/redeem-code/free-fire',
  },
  {
    id: '2',
    gameName: 'Roblox Redeem Codes 2025',
    date: '2025-11-07',
    codes: [
      { code: 'HalloweenEyes', expiry: '07/11/2026' },
      { code: 'HalloweenEyes2', expiry: '07/11/2025' },
    ],
    url: '/redeem-code/roblox',
  },
  {
    id: '3',
    gameName: 'Genshin Impact Redeem Codes',
    date: '2025-08-05',
    codes: [
      { code: 'GS61RD26W966', expiry: '29/10/2025' },
      { code: 'Nefer1022Ashru', expiry: '11/10/2025' },
    ],
    url: '/redeem-code/genshin-impact',
  },
  {
    id: '4',
    gameName: 'Honkai: Star Rail Redeem Codes 2025',
    date: '2025-08-01',
    codes: [
      { code: '3S3RGX2PGL7P', expiry: '29/09/2025' },
      { code: 'MADFORMARCH', expiry: '29/09/2025' },
    ],
    url: '/redeem-code/honkai-star-rail',
  },
]

export function RedeemCodeSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="py-8">
      {/* 标题栏 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-dark-700/80 flex items-center justify-center">
            <Gift className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Free Game Codes</h2>
            <p className="text-sm text-text-secondary">Unlock free game gift packages with exclusive in-game items</p>
          </div>
        </div>

        <Link to="/redeem-code">
          <Button variant="ghost" size="sm" className="gap-1 text-text-secondary hover:text-white">
            More Contents
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* 热门游戏标签 */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-medium shrink-0">
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

      {/* 兑换码卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {redeemCodes.map((item) => (
          <div
            key={item.id}
            className="rounded-xl bg-dark-700/50 border border-white/5 p-5 card-hover"
          >
            {/* 游戏名称和日期 */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-white">{item.gameName}</h3>
                <p className="text-xs text-text-muted mt-1">{item.date}</p>
              </div>
            </div>

            {/* 兑换码列表 */}
            <div className="space-y-2 mb-4">
              {item.codes.map((codeItem) => (
                <div
                  key={codeItem.code}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-dark-600/50"
                >
                  <div className="flex items-center gap-3">
                    <code className="text-sm font-mono text-primary">{codeItem.code}</code>
                    <span className="text-xs text-text-muted">—CODE—{codeItem.expiry}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      copyToClipboard(codeItem.code)
                    }}
                    className={cn(
                      'p-1.5 rounded-md transition-colors',
                      copiedCode === codeItem.code
                        ? 'bg-green-500/20 text-green-400'
                        : 'hover:bg-white/5 text-text-muted hover:text-white'
                    )}
                    title={copiedCode === codeItem.code ? 'Copied!' : 'Copy code'}
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* 获取更多链接 */}
            <Link
              to={item.url}
              className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Get More Free Codes
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

