import { Link } from 'react-router-dom'
import { 
  Gamepad2, 
  Mail, 
  MessageCircle,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Security', href: '/security' },
    { label: 'Careers', href: '/careers' },
  ],
  resources: [
    { label: 'Payment Methods', href: '/payment-methods' },
    { label: 'Help Center', href: '/help' },
    { label: 'FAQ', href: '/faq' },
  ],
  hotSelling: [
    { label: 'Genshin Impact Top Up', href: '/top-up/genshin-impact' },
    { label: 'PUBG Mobile UC', href: '/top-up/pubg-mobile' },
    { label: 'Honkai: Star Rail', href: '/top-up/honkai-star-rail' },
    { label: 'Zenless Zone Zero', href: '/top-up/zenless-zone-zero' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Copyright Policy', href: '/copyright' },
  ],
}

const socialLinks = [
  { name: 'Discord', icon: '💬', href: 'https://discord.gg/' },
  { name: 'Telegram', icon: '✈️', href: 'https://t.me/' },
  { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/' },
  { name: 'Facebook', icon: '📘', href: 'https://facebook.com/' },
  { name: 'Instagram', icon: '📷', href: 'https://instagram.com/' },
]

const paymentMethods = [
  { name: 'Visa', icon: '💳' },
  { name: 'Mastercard', icon: '💳' },
  { name: 'PayPal', icon: '🅿️' },
  { name: 'Google Pay', icon: '🔵' },
  { name: 'Apple Pay', icon: '🍎' },
  { name: 'Alipay', icon: '🔷' },
]

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      {/* 主要内容区 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & 订阅 */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                BUFF-<span className="text-primary">DEMO</span>
              </span>
            </Link>
            
            <p className="text-text-secondary text-sm mb-6 max-w-sm">
              React 19 + Vite + TailwindCSS 练手项目。这是一个游戏充值平台 UI 界面演示，仅供学习和技术交流使用。
            </p>

            {/* 订阅表单 */}
            <div className="mb-6">
              <p className="text-sm font-medium text-white mb-3">订阅获取最新优惠</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                </div>
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-text-muted mt-2">
                首次订阅可获得 95折 优惠券
              </p>
            </div>

            {/* 社交链接 */}
            <div>
              <p className="text-sm font-medium text-white mb-3">Follow Us</p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-dark-700 hover:bg-dark-600 flex items-center justify-center text-xl transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 公司 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 资源 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 热销游戏 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hot Selling</h4>
            <ul className="space-y-3">
              {footerLinks.hotSelling.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 支付方式 */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-sm font-medium text-white mb-4 text-center">Secure Payment Methods</p>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-700/50 text-text-secondary text-sm"
              >
                <span className="text-lg">{method.icon}</span>
                <span>{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部版权 */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted text-center md:text-left">
              © 2024 BUFF-DEMO. React 练手项目 - 仅供学习使用
            </p>
            
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <span key={link.href} className="flex items-center gap-6">
                  <Link
                    to={link.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-text-muted">|</span>
                  )}
                </span>
              ))}
            </div>

            {/* 客服 */}
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>24/7 Support</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

