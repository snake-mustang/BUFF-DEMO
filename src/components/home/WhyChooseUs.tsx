import { Shield, Users, Percent, Zap, Clock, Headphones } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Fast & Secure Transactions',
    description: 'We offer instant game top-up services with a smooth and reliable process. Your payment and account information are fully protected with industry-standard encryption.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Trusted by Players Worldwide',
    description: 'Our platform has served players across different countries and regions with consistent, high-quality service. From popular games to niche titles.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Percent className="w-8 h-8" />,
    title: 'Competitive Prices with Special Offers',
    description: 'We provide competitive pricing for different games, so you can always get cost-effective services. Regular promotions and discounts available.',
    gradient: 'from-green-500 to-emerald-500',
  },
]

const stats = [
  { value: '2M+', label: 'Orders Completed' },
  { value: '150+', label: 'Games Supported' },
  { value: '99.9%', label: 'Success Rate' },
  { value: '24/7', label: 'Customer Support' },
]

const paymentLogos = [
  { name: 'Visa', icon: '💳' },
  { name: 'Mastercard', icon: '💳' },
  { name: 'PayPal', icon: '🅿️' },
  { name: 'Google Pay', icon: '🔵' },
  { name: 'Apple Pay', icon: '🍎' },
  { name: 'Alipay', icon: '🔷' },
  { name: 'Razergold', icon: '🎮' },
  { name: 'ShopeePay', icon: '🛒' },
  { name: 'PIX', icon: '💠' },
  { name: 'TPay', icon: '📱' },
]

export function WhyChooseUs() {
  return (
    <section className="py-12">
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Why Choose <span className="text-gradient">BUFF-DEMO</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          React 练手项目 - 使用现代化技术栈构建的游戏充值平台 UI 演示，展示前端开发最佳实践
        </p>
      </div>

      {/* 特性卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-dark-700/50 border border-white/5 card-hover overflow-hidden"
          >
            {/* 背景光效 */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* 统计数据 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-xl bg-dark-700/30 border border-white/5"
          >
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-text-secondary">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* 支付方式 */}
      <div className="text-center">
        <p className="text-sm text-text-muted mb-6">Secure Payment Methods</p>
        <div className="flex flex-wrap justify-center gap-3">
          {paymentLogos.map((payment) => (
            <div
              key={payment.name}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-700/50 border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="text-xl">{payment.icon}</span>
              <span className="text-sm text-text-secondary">{payment.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

