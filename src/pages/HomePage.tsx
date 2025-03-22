import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colorData, ColorType } from '../data/colorData';

const ColorItem = ({ color }: { color: ColorType }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [liked, setLiked] = useState(false);
  const [collected, setCollected] = useState(false);

  // Prevent the link from being triggered when clicking action buttons
  const handleActionClick = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    action();
  };

  return (
    <div 
      className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl
                transform transition-all duration-300 hover:scale-105"
      style={{ backgroundColor: color.hex }}
    >
      {/* Gradient overlay using Tailwind classes */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 
                  opacity-50"
      />
      
      <div className="absolute inset-0 p-6 flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{color.name}</h3>
          <p className="text-sm font-mono text-white/70">{color.hex}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-white/60 font-medium">Click to explore</span>
          
          <div className="flex gap-2">
            <button 
              className={`p-2 rounded-full ${liked ? 'bg-pink-500' : 'bg-white/10'} backdrop-blur-sm transition-colors`}
              onClick={(e) => handleActionClick(e, () => setLiked(!liked))}
            >
              <svg 
                className="w-4 h-4" 
                fill={liked ? "currentColor" : "none"} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
            </button>
            
            <button 
              className={`p-2 rounded-full ${collected ? 'bg-blue-500' : 'bg-white/10'} backdrop-blur-sm transition-colors`}
              onClick={(e) => handleActionClick(e, () => setCollected(!collected))}
            >
              <svg 
                className="w-4 h-4" 
                fill={collected ? "currentColor" : "none"} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <Link 
        to={`/color/${color.id}`} 
        className="absolute inset-0 z-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <span className="sr-only">View {color.name} details</span>
      </Link>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Color Gallery</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Click any color to view implementation details across frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {colorData.map(color => (
            <ColorItem key={color.id} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 