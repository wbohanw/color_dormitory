import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-900 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl text-center space-y-8 px-4">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">
            Welcome to <span className="text-blue-400 dark:text-blue-300">ColorDorm</span>
          </h1>
          <p className="text-xl text-blue-100/90 dark:text-blue-200/80 leading-relaxed max-w-2xl mx-auto">
            Curated collection of modern colors and palettes for digital creators
          </p>
          <p className="text-lg text-blue-50/80 dark:text-blue-100/70 max-w-3xl mx-auto">
            Discover, explore, and implement perfect color schemes with seamless code integration across multiple frameworks.
          </p>
        </div>
        
        <Link 
          to="/home" 
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl 
                   transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl
                   text-base font-semibold"
        >
          <span>Explore Colors</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-90">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-blue-100 dark:text-blue-200">1k+ Color Variations</span>
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
  );
};

export default LandingPage; 