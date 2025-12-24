import { 
  HeroBanner, 
  GameSection, 
  NewsSection, 
  RedeemCodeSection, 
  WhyChooseUs, 
  PointsCard,
  NewUserCoupon 
} from '@/components/home'
import { bestsellerGames, specialOfferGames, hotGames } from '@/data/games'

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 背景效果 */}
      <div className="fixed inset-0 -z-10 bg-grid-pattern bg-radial-gradient pointer-events-none" />

      <div className="container mx-auto px-4 py-6 space-y-8">
        {/* Hero Banner 轮播 */}
        <HeroBanner />

        {/* 积分提示卡片 */}
        <PointsCard />

        {/* 热销游戏 */}
        <GameSection
          title="Bestsellers"
          category="bestseller"
          games={bestsellerGames}
        />

        {/* 特价优惠 */}
        <GameSection
          title="Special Offer"
          category="special-offer"
          games={specialOfferGames}
        />

        {/* 热门游戏 */}
        <GameSection
          title="Hot Games"
          category="hot-games"
          games={hotGames}
        />

        {/* 游戏新闻 */}
        <NewsSection />

        {/* 兑换码区域 */}
        <RedeemCodeSection />

        {/* Why Choose Us */}
        <WhyChooseUs />
      </div>

      {/* 新用户优惠弹窗 */}
      <NewUserCoupon />
    </div>
  )
}

