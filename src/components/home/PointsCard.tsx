import { Coins, Gift, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PointsCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 border border-primary/20 p-6 sm:p-8">
      {/* 背景装饰 */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative flex flex-col sm:flex-row items-center gap-6">
        {/* 图标 */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg shadow-primary/30">
          <Coins className="w-10 h-10 text-white" />
        </div>

        {/* 内容 */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white mb-2">
            Log in to get <span className="text-primary">50 points</span> = 0.5 USD
          </h3>
          <p className="text-text-secondary text-sm mb-4">
            新用户注册即可获得积分奖励，消费可兑换折扣券
          </p>
          <Button className="gap-2">
            <Gift className="w-4 h-4" />
            Log in to Claim
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* 积分信息 */}
        <div className="hidden lg:block text-right">
          <div className="text-4xl font-bold text-white mb-1">50</div>
          <div className="text-sm text-primary font-medium">POINTS</div>
        </div>
      </div>
    </div>
  )
}

