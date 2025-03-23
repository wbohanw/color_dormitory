import { useState, useEffect } from 'react';
import { Link, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ColorType } from '../data/ColorTypes';

import MainColorsSection from '../components/MainColorsSection';
import FeaturedColorsSection from '../components/FeaturedColorsSection';
import PlaygroundSection from '../components/PlaygroundSection';
import Navigation from '../components/Navigation';

// Hero component with enhanced visual effects
const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/30 dark:from-black/40 dark:to-black/60" />
        <div className="absolute -top-1/2 left-0 w-[200%] h-[150%] animate-floating">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl dark:bg-purple-800/30" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl dark:bg-blue-800/30" />
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10 max-w-[2000px] w-full">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-200 animate-fade-in-up">
            Color Palette Helper
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/90 dark:text-blue-200/80 leading-relaxed max-w-2xl mx-auto">
            Discover, explore, and create beautiful color combinations for your design projects. 
            <span className="block mt-2 text-sm md:text-base opacity-90">Powered by advanced color science and design principles</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Enhanced Navigation Card with glassmorphism effect
const NavigationCard = ({ 
  title, 
  description, 
  path, 
  gradient, 
  icon 
}: { 
  title: string; 
  description: string; 
  path: string; 
  gradient: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link 
      to={path}
      className="block group relative rounded-2xl transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-2xl"
    >
      <div className={`absolute inset-0 ${gradient} opacity-90 dark:opacity-100 transition-opacity`} />
      <div className="p-12 text-center relative h-80 p-8 flex flex-col justify-between backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-white/10 dark:border-black/20">
        <div className="p-2 text-4xl mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-md">{title}</h3>
          <p className="text-white/80 dark:text-white/70 text-sm leading-relaxed">
            {description}
          </p>
          <div className="mt-4 inline-flex items-center text-sm font-medium bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full transition-all duration-300 group-hover:bg-white/20">
            <span className="mr-2">Explore Tool</span>
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-white/5 dark:border-black/10 rounded-2xl pointer-events-none" />
    </Link>
  );
};

// Main HomePage component with enhanced layout
const HomePage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('home');
  
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveSection('home');
    else if (path.includes('/colors')) setActiveSection('colors');
    else if (path.includes('/featured')) setActiveSection('featured');
    else if (path.includes('/playground')) setActiveSection('playground');
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
      <Navigation activeSection={activeSection} />
      
      <Routes>
        <Route path="/" element={
          <>
            <div className="relative overflow-hidden w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
              <div className="container mx-auto px-4 py-36 relative max-w-[2000px] w-full">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                    Color <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Dormitory</span>
                  </h1>
                  <p className="text-xl text-blue-100/90 dark:text-blue-200/80 leading-relaxed max-w-2xl mx-auto">
                    Discover the ultimate color experience with professional palettes and advanced tools
                  </p>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 py-24 max-w-[2000px] w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <NavigationCard 
                  title="Main Colors" 
                  description="Explore our curated collection of essential colors" 
                  path="/colors" 
                  gradient="from-blue-600/90 to-indigo-600/90 dark:from-blue-700 dark:to-indigo-700"
                  icon={
                    <svg className="w-10 h-10 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  }
                />
                
                <NavigationCard 
                  title="Featured Palettes" 
                  description="Discover professionally crafted color schemes and trending combinations with detailed analysis." 
                  path="/featured" 
                  gradient="bg-gradient-to-br from-purple-600/90 to-pink-600/90 dark:from-purple-700 dark:to-pink-700"
                  icon={
                    <svg className="w-10 h-10 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  }
                />
                
                <NavigationCard 
                  title="Color Lab" 
                  description="Advanced color mixing laboratory with real-time previews and export capabilities." 
                  path="/playground" 
                  gradient="bg-gradient-to-br from-emerald-600/90 to-teal-600/90 dark:from-emerald-700 dark:to-teal-700"
                  icon={
                    <svg className="w-10 h-10 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </>
        } />
        <Route path="/colors" element={<MainColorsSection />} />
        <Route path="/featured" element={<FeaturedColorsSection />} />
        <Route path="/playground" element={<PlaygroundSection />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default HomePage;