import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  ShoppingCart,
  Globe,
  Coins,
  Gamepad2,
  Newspaper,
  Gift,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/', icon: <Gamepad2 className="w-4 h-4" /> },
  { label: 'Game Code', href: '/redeem-code', icon: <Gift className="w-4 h-4" /> },
  { label: 'Game News', href: '/blog', icon: <Newspaper className="w-4 h-4" /> },
  { label: 'Game Events', href: '/events', icon: <Calendar className="w-4 h-4" /> },
]

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
]

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0])
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 顶部公告栏 */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-primary py-2.5 px-4 text-center">
        {/* 动态背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-[shimmer_3s_infinite]" 
             style={{ backgroundSize: '200% 100%' }} />
        <p className="relative text-sm text-white font-medium">
          🎮 React 练手 Demo 项目 | <span className="font-bold text-yellow-300 px-1.5">仅供学习使用</span> 欢迎交流 →
        </p>
      </div>

      {/* 主导航栏 */}
      <nav className="backdrop-blur-xl bg-dark-900/80 border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                <Gamepad2 className="w-6 h-6 text-white" />
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <span className="text-xl font-bold text-white hidden sm:block group-hover:text-primary transition-colors">
                BUFF-<span className="text-gradient">DEMO</span>
              </span>
            </Link>

            {/* 桌面导航 */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>

            {/* 搜索框 */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
                <Input
                  type="search"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-dark-800/50 border-white/10 focus:border-primary/50 focus:bg-dark-800 transition-all"
                />
              </div>
            </div>

            {/* 右侧操作区 */}
            <div className="flex items-center gap-2">
              {/* 语言选择 */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => {
                    setIsLangOpen(!isLangOpen)
                    setIsCurrencyOpen(false)
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden xl:inline">{selectedLang.name}</span>
                  <ChevronDown className={cn('w-3 h-3 transition-transform', isLangOpen && 'rotate-180')} />
                </button>

                {isLangOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                    <div className="absolute top-full right-0 mt-2 w-48 py-2 rounded-xl backdrop-blur-xl bg-dark-800/95 border border-white/10 shadow-2xl z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang)
                            setIsLangOpen(false)
                          }}
                          className={cn(
                            'w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors',
                            selectedLang.code === lang.code ? 'text-primary font-medium' : 'text-text-secondary'
                          )}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* 货币选择 */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => {
                    setIsCurrencyOpen(!isCurrencyOpen)
                    setIsLangOpen(false)
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Coins className="w-4 h-4" />
                  <span className="font-medium">{selectedCurrency.code}</span>
                  <ChevronDown className={cn('w-3 h-3 transition-transform', isCurrencyOpen && 'rotate-180')} />
                </button>

                {isCurrencyOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsCurrencyOpen(false)} />
                    <div className="absolute top-full right-0 mt-2 w-48 py-2 rounded-xl backdrop-blur-xl bg-dark-800/95 border border-white/10 shadow-2xl z-50">
                      {currencies.map((currency) => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setSelectedCurrency(currency)
                            setIsCurrencyOpen(false)
                          }}
                          className={cn(
                            'w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors',
                            selectedCurrency.code === currency.code ? 'text-primary font-medium' : 'text-text-secondary'
                          )}
                        >
                          <span className="font-mono text-lg">{currency.symbol}</span>
                          <span>{currency.name}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* 积分显示 */}
              <div className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                <Coins className="w-4 h-4" />
                <span>50 = 0.50 USD</span>
              </div>

              {/* 订单历史 */}
              <Link
                to="/orders"
                className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Orders</span>
              </Link>

              {/* 登录按钮 */}
              <Button size="sm" className="gap-2 shadow-lg hover:shadow-primary/30">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Log in</span>
              </Button>

              {/* 移动端菜单按钮 */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-all"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 backdrop-blur-xl bg-dark-900/90">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {/* 移动端搜索 */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <Input
                  type="search"
                  placeholder="Search games..."
                  className="pl-10 bg-dark-800/50 border-white/10"
                />
              </div>

              {/* 导航链接 */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-white/10 pt-4 mt-4">
                <Link
                  to="/orders"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order History
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

