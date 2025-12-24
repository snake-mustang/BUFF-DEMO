import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from '@/components/layout'
import { HomePage } from '@/pages/HomePage'
import { GameDetailPage } from '@/pages/GameDetailPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 游戏详情页 */}
          <Route path="/top-up/:gameId" element={<GameDetailPage />} />
          {/* 占位路由 - 后续可添加更多页面 */}
          <Route path="/redeem-code" element={<PlaceholderPage title="Game Codes" />} />
          <Route path="/redeem-code/:gameId" element={<PlaceholderPage title="Redeem Codes" />} />
          <Route path="/blog" element={<PlaceholderPage title="Game News" />} />
          <Route path="/blog/:articleId" element={<PlaceholderPage title="Article" />} />
          <Route path="/events" element={<PlaceholderPage title="Game Events" />} />
          <Route path="/orders" element={<PlaceholderPage title="Order History" />} />
          <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

// 临时占位页面组件
function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-text-secondary">This page is under construction.</p>
      </div>
    </div>
  )
}

export default App

