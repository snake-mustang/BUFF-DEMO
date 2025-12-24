import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { 
  Star, 
  Shield, 
  Zap, 
  Clock, 
  ChevronRight, 
  Check, 
  Info,
  CreditCard,
  Gift,
  ArrowLeft
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { getGameByUrl, bestsellerGames } from '@/data/games'
import { GameCard } from '@/components/home/GameCard'
import { cn, formatSold } from '@/lib/utils'

// 充值套餐选项
const topUpPackages = [
  { id: 1, amount: 60, bonus: 0, price: 0.99, popular: false },
  { id: 2, amount: 300, bonus: 25, price: 4.49, popular: false },
  { id: 3, amount: 600, bonus: 60, price: 8.99, popular: true },
  { id: 4, amount: 1500, bonus: 175, price: 21.99, popular: false },
  { id: 5, amount: 3000, bonus: 400, price: 42.99, popular: false },
  { id: 6, amount: 6000, bonus: 980, price: 84.99, popular: false },
]

// 支付方式
const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: '💳', discount: 0 },
  { id: 'paypal', name: 'PayPal', icon: '🅿️', discount: 0 },
  { id: 'alipay', name: 'Alipay', icon: '🔷', discount: 2 },
  { id: 'googlepay', name: 'Google Pay', icon: '🔵', discount: 0 },
  { id: 'applepay', name: 'Apple Pay', icon: '🍎', discount: 0 },
]

export function GameDetailPage() {
  const { gameId } = useParams<{ gameId: string }>()
  const game = getGameByUrl(`/top-up/${gameId}`)
  
  const [selectedPackage, setSelectedPackage] = useState<number | null>(3)
  const [selectedPayment, setSelectedPayment] = useState<string>('card')
  const [playerId, setPlayerId] = useState('')
  const [serverId, setServerId] = useState('')

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">游戏未找到</h1>
        <p className="text-text-secondary mb-8">抱歉，该游戏暂不支持充值</p>
        <Link to="/">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Button>
        </Link>
      </div>
    )
  }

  const selectedPkg = topUpPackages.find(pkg => pkg.id === selectedPackage)
  const paymentMethod = paymentMethods.find(p => p.id === selectedPayment)
  const finalPrice = selectedPkg 
    ? (selectedPkg.price * (1 - (game.discount / 100)) * (1 - (paymentMethod?.discount || 0) / 100)).toFixed(2)
    : '0.00'

  // 推荐游戏（排除当前游戏）
  const recommendedGames = bestsellerGames.filter(g => g.id !== game.id).slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* 背景效果 */}
      <div className="fixed inset-0 -z-10 bg-grid-pattern bg-radial-gradient pointer-events-none" />

      <div className="container mx-auto px-4 py-6">
        {/* 面包屑导航 */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/" className="hover:text-white transition-colors">Top Up</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{game.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧 - 游戏信息和充值选项 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 游戏头部信息 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                
                {/* 折扣标签 */}
                <Badge variant="discount" className="absolute top-4 right-4 text-lg px-3 py-1">
                  -{game.discount}% OFF
                </Badge>
              </div>
              
              <CardContent className="relative -mt-16 pt-0">
                <div className="flex items-end gap-4">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-24 h-24 rounded-xl border-4 border-dark-800 object-cover shadow-lg"
                  />
                  <div className="flex-1 pb-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{game.name}</h1>
                    <div className="flex items-center gap-4 text-sm">
                      {game.rating && (
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-semibold">{game.rating.toFixed(1)}</span>
                        </div>
                      )}
                      <span className="text-text-secondary">{formatSold(game.sold)}</span>
                    </div>
                  </div>
                </div>

                {/* 特性标签 */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-sm">
                    <Zap className="w-4 h-4" />
                    即时到账
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-sm">
                    <Shield className="w-4 h-4" />
                    100% 安全
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-400 text-sm">
                    <Clock className="w-4 h-4" />
                    24/7 客服
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 账号信息输入 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  输入账号信息
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">
                      玩家 ID <span className="text-red-400">*</span>
                    </label>
                    <Input
                      placeholder="请输入您的游戏 ID"
                      value={playerId}
                      onChange={(e) => setPlayerId(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">
                      服务器 ID（可选）
                    </label>
                    <Input
                      placeholder="请输入服务器 ID"
                      value={serverId}
                      onChange={(e) => setServerId(e.target.value)}
                    />
                  </div>
                </div>
                <p className="text-xs text-text-muted mt-3 flex items-start gap-1">
                  <Info className="w-3 h-3 mt-0.5 shrink-0" />
                  请确保输入正确的游戏 ID，充值后无法更改或退款
                </p>
              </CardContent>
            </Card>

            {/* 充值套餐选择 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  选择充值套餐
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {topUpPackages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={cn(
                        'relative p-4 rounded-xl border-2 text-left transition-all',
                        selectedPackage === pkg.id
                          ? 'border-primary bg-primary/10'
                          : 'border-white/10 bg-dark-700/50 hover:border-white/20'
                      )}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-purple-500 text-xs font-semibold text-white">
                          热门
                        </span>
                      )}
                      
                      <div className="text-2xl font-bold text-white mb-1">
                        {pkg.amount}
                        {pkg.bonus > 0 && (
                          <span className="text-sm text-green-400 ml-1">+{pkg.bonus}</span>
                        )}
                      </div>
                      
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-semibold text-primary">
                          ${(pkg.price * (1 - game.discount / 100)).toFixed(2)}
                        </span>
                        <span className="text-sm text-text-muted line-through">
                          ${pkg.price.toFixed(2)}
                        </span>
                      </div>

                      {selectedPackage === pkg.id && (
                        <div className="absolute top-2 left-2">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 支付方式选择 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  选择支付方式
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={cn(
                        'relative p-4 rounded-xl border-2 text-center transition-all',
                        selectedPayment === method.id
                          ? 'border-primary bg-primary/10'
                          : 'border-white/10 bg-dark-700/50 hover:border-white/20'
                      )}
                    >
                      <div className="text-2xl mb-2">{method.icon}</div>
                      <div className="text-xs text-text-secondary">{method.name}</div>
                      
                      {method.discount > 0 && (
                        <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-green-500 text-xs font-semibold text-white">
                          -{method.discount}%
                        </span>
                      )}

                      {selectedPayment === method.id && (
                        <div className="absolute top-2 left-2">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧 - 订单摘要 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-white mb-4">订单摘要</h2>
                  
                  <div className="space-y-4">
                    {/* 游戏信息 */}
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <img
                        src={game.image}
                        alt={game.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">{game.name}</div>
                        <div className="text-xs text-text-muted">游戏充值</div>
                      </div>
                    </div>

                    {/* 选择的套餐 */}
                    {selectedPkg && (
                      <div className="space-y-2 pb-4 border-b border-white/10">
                        <div className="flex justify-between text-sm">
                          <span className="text-text-secondary">充值金额</span>
                          <span className="text-white">{selectedPkg.amount} 钻石</span>
                        </div>
                        {selectedPkg.bonus > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">赠送金额</span>
                            <span className="text-green-400">+{selectedPkg.bonus} 钻石</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-text-secondary">原价</span>
                          <span className="text-text-muted line-through">${selectedPkg.price.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-text-secondary">折扣 ({game.discount}%)</span>
                          <span className="text-red-400">-${(selectedPkg.price * game.discount / 100).toFixed(2)}</span>
                        </div>
                        {paymentMethod?.discount && paymentMethod.discount > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">支付优惠 ({paymentMethod.discount}%)</span>
                            <span className="text-red-400">
                              -${(selectedPkg.price * (1 - game.discount / 100) * paymentMethod.discount / 100).toFixed(2)}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 总计 */}
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-white">应付金额</span>
                      <span className="text-2xl font-bold text-primary">${finalPrice}</span>
                    </div>

                    {/* 支付按钮 */}
                    <Button 
                      size="lg" 
                      className="w-full mt-4"
                      disabled={!playerId || !selectedPackage}
                    >
                      立即支付
                    </Button>

                    {/* 安全提示 */}
                    <div className="flex items-center justify-center gap-2 text-xs text-text-muted mt-4">
                      <Shield className="w-4 h-4" />
                      <span>安全支付，即时到账</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 客服提示 */}
              <Card className="mt-4">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">24/7 在线客服</div>
                      <div className="text-xs text-text-muted">遇到问题随时联系我们</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* 推荐游戏 */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">你可能还喜欢</h2>
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-1">
                查看更多
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recommendedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

