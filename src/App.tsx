import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ColorDetailPage from './pages/ColorDetailPage'
import MainColorsSection from './components/MainColorsSection'
import FeaturedColorsSection from './components/FeaturedColorsSection'
import PlaygroundSection from './components/PlaygroundSection'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/colors" element={<MainColorsSection />} />
          <Route path="/featured" element={<FeaturedColorsSection />} />
          <Route path="/playground" element={<PlaygroundSection />} />
          <Route path="/color/:colorId" element={<ColorDetailPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
