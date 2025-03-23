import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:to-gray-800">
      <Navigation activeSection="home" />
      
      <div className="h-screen w-full flex items-center justify-center p-4 relative">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down">
             Design <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">UI</span> in <span className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">Color Dorm</span>
            </h1>
            <p className="text-2xl text-blue-100/90 dark:text-blue-200/80 leading-relaxed">
              Curated color solutions for modern digital experiences
            </p>
          </div>
          
          <Link 
            to="/home" 
            className="inline-flex items-center px-8 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm text-white rounded-2xl 
                     transition-all duration-300 hover:bg-white/20 hover:scale-105 shadow-2xl hover:shadow-3xl
                     text-lg font-semibold group"
          >
            <span>Start Exploring</span>
            <svg className="w-6 h-6 ml-3 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-6 opacity-90">
            <div className="flex items-center space-x-3 px-6 py-3 bg-white/10 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/10">
              <div className="h-3 w-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-lg text-blue-100 dark:text-blue-200">2000+ Colors</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
              <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-blue-100 dark:text-blue-200">4 Framework Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 