import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colorData, ColorType } from '../data/colorData';
import '../App.css';

const ColorItem = ({ color }: { color: ColorType }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link 
      to={`/color/${color.id}`} 
      className="group relative block w-full h-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      style={{ backgroundColor: color.hex }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center ${isHovering ? 'bg-opacity-40' : ''}`}>
        <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold mb-1">{color.name}</p>
          <p className="text-gray-200 font-mono text-sm">{color.hex}</p>
        </div>
      </div>
    </Link>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Color Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of colors. Hover to preview, click to explore detailed implementations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {colorData.map(color => (
            <ColorItem key={color.id} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 