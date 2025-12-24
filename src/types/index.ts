/**
 * 游戏商品类型
 */
export interface Game {
  id: string
  name: string
  image: string
  discount: number
  rating?: number
  sold: number
  category: GameCategory
  url: string
}

/**
 * 游戏分类
 */
export type GameCategory = 
  | 'bestseller'
  | 'special-offer'
  | 'hot-games'
  | 'new-arrivals'
  | 'trending'
  | 'gift-cards'
  | 'live-streaming'

/**
 * 新闻文章类型
 */
export interface NewsArticle {
  id: string
  title: string
  date: string
  likes: number
  image?: string
  url: string
}

/**
 * 兑换码类型
 */
export interface RedeemCode {
  id: string
  gameName: string
  date: string
  codes: {
    code: string
    expiry: string
  }[]
  url: string
}

/**
 * 导航链接类型
 */
export interface NavLink {
  label: string
  href: string
  icon?: React.ReactNode
}

/**
 * 轮播图项目类型
 */
export interface BannerItem {
  id: string
  image: string
  title: string
  url: string
}

/**
 * 支付方式类型
 */
export interface PaymentMethod {
  id: string
  name: string
  icon: string
}

/**
 * 语言选项
 */
export interface Language {
  code: string
  name: string
  flag?: string
}

/**
 * 货币选项
 */
export interface Currency {
  code: string
  symbol: string
  name: string
}

