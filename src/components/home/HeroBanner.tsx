import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const bannerItems = [
  {
    id: '1',
    image: 'https://picsum.photos/seed/banner1/1200/400',
    title: 'PUBG Mobile - 限时55%折扣',
    subtitle: '全球最火热的大逃杀游戏，UC充值超值优惠',
    gradient: 'from-orange-600 to-red-600',
    url: '/top-up/pubg-mobile',
  },
  {
    id: '2',
    image: 'https://picsum.photos/seed/banner2/1200/400',
    title: '原神 - 新版本活动',
    subtitle: '原石充值限时优惠，助你抽到心仪角色',
    gradient: 'from-blue-600 to-purple-600',
    url: '/top-up/genshin-impact',
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/banner3/1200/400',
    title: '崩坏：星穹铁道',
    subtitle: '开拓宇宙的冒险之旅，星琼限时特惠',
    gradient: 'from-purple-600 to-pink-600',
    url: '/top-up/honkai-star-rail',
  },
  {
    id: '4',
    image: 'https://picsum.photos/seed/banner4/1200/400',
    title: '绝区零 - 首发优惠',
    subtitle: '米哈游全新都市动作游戏，菲林限时折扣',
    gradient: 'from-cyan-600 to-blue-600',
    url: '/top-up/zenless-zone-zero',
  },
]

export function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {bannerItems.map((item) => (
            <div key={item.id} className="flex-[0_0_100%] min-w-0">
              <div className="relative h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden rounded-2xl">
                {/* 背景图 */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* 渐变遮罩 */}
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-r opacity-80',
                    item.gradient
                  )} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* 内容 */}
                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-12">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 drop-shadow-md">
                      {item.subtitle}
                    </p>
                    <Link 
                      to={item.url}
                      className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
                    >
                      立即充值
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 导航按钮 */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              selectedIndex === index
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/70'
            )}
          />
        ))}
      </div>
    </section>
  )
}
