import { useState, useEffect } from 'react'
import { X, Gift, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function NewUserCoupon() {
  const [isVisible, setIsVisible] = useState(false)
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 9, seconds: 55 })

  useEffect(() => {
    // 延迟显示弹窗
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isVisible])

  if (!isVisible) return null

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="relative w-80 rounded-2xl overflow-hidden bg-dark-800 border border-white/10 shadow-2xl">
        {/* 关闭按钮 */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 z-10 p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4 text-text-muted" />
        </button>

        {/* 头部装饰 */}
        <div className="relative h-24 bg-gradient-to-br from-primary via-purple-500 to-pink-500 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23fff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/80 text-xs mb-1">New User Exclusive</p>
              <div className="flex items-baseline gap-1 text-white">
                <span className="text-5xl font-bold">3%</span>
                <span className="text-xl font-semibold">OFF</span>
              </div>
              <p className="text-white/80 text-xs mt-1">(Up to $5)</p>
            </div>
          </div>

          {/* 礼物图标 */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <Gift className="absolute bottom-2 right-4 w-12 h-12 text-white/30" />
        </div>

        {/* 内容区 */}
        <div className="p-5">
          <h4 className="text-lg font-bold text-white mb-2">New User Perks</h4>
          <p className="text-sm text-text-secondary mb-4">
            Expires in <span className="text-primary font-semibold">7 days</span>
          </p>

          {/* 倒计时 */}
          <div className="flex items-center gap-2 mb-5">
            <Clock className="w-4 h-4 text-text-muted" />
            <span className="text-sm text-text-muted">Countdown:</span>
            <div className="flex items-center gap-1">
              <span className="px-2 py-1 rounded bg-dark-600 text-white font-mono text-sm">
                {formatNumber(countdown.hours)}
              </span>
              <span className="text-text-muted">:</span>
              <span className="px-2 py-1 rounded bg-dark-600 text-white font-mono text-sm">
                {formatNumber(countdown.minutes)}
              </span>
              <span className="text-text-muted">:</span>
              <span className="px-2 py-1 rounded bg-dark-600 text-white font-mono text-sm">
                {formatNumber(countdown.seconds)}
              </span>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Log In to Claim
          </Button>
        </div>
      </div>
    </div>
  )
}

