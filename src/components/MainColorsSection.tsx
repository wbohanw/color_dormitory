import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ColorType, hexToRgb, fixHexCode } from '../data/ColorTypes';
import colorPaletteData from '../data/ui_color_palette.json';
import Navigation from './Navigation';

// Convert palette data to ColorType format with the most common color code
const convertPaletteToColorTypes = () => {
  const colorCategories: string[] = Object.keys(colorPaletteData);
  const mainColorsList: ColorType[] = [];
  
  colorCategories.forEach((category, catIndex) => {
    const hexColors = colorPaletteData[category as keyof typeof colorPaletteData];
    
    // Use the most common color code for this category
    const mostCommonHex = hexColors[12];
    const formattedHex = mostCommonHex.startsWith('#') ? mostCommonHex : `#${mostCommonHex}`;
    const correctedHex = fixHexCode(formattedHex);
    
    mainColorsList.push({
      id: catIndex + 1,
      name: category.charAt(0).toUpperCase() + category.slice(1),
      hex: correctedHex,
      rgb: hexToRgb(correctedHex),
      hsl: `hsl(0, 0%, 0%)`, // This would be calculated properly in a full implementation
      description: `A beautiful ${category} color palette`,
      category,
      gradientColors: [correctedHex]
    });
  });
  
  return mainColorsList;
};

// Main Color Card component - displays a gradient
const MainColorCard = ({ color }: { color: ColorType }) => {
  const [liked, setLiked] = useState(false);
  const [collected, setCollected] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-100/30 dark:shadow-gray-900/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:z-10">
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div 
        className="relative h-96 flex items-end p-8 transition-all duration-500 group-hover:scale-[1.02]"
        style={{ backgroundColor: color.hex }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="relative space-y-4 text-white">
          <h3 className="text-3xl font-bold drop-shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform">
            {color.name}
          </h3>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                liked ? 'bg-rose-500/90 hover:bg-rose-600' : 'bg-white/10 hover:bg-white/20'
              } transform hover:scale-110 active:scale-95`}
              onClick={() => setLiked(!liked)}
              aria-label={liked ? "Unsave color" : "Save color"}
            >
              ♥
            </button>
            <button
              className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                collected ? 'bg-blue-500/90 hover:bg-blue-600' : 'bg-white/10 hover:bg-white/20'
              } transform hover:scale-110 active:scale-95`}
              onClick={() => setCollected(!collected)}
              aria-label={collected ? "Remove from collection" : "Add to collection"}
            >
              {collected ? '✓' : '+'}
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white dark:bg-gray-800/90 backdrop-blur-sm border-t border-white/20 dark:border-gray-700/50">
        <div className="flex justify-between items-center">
          <Link 
            to={`/color/${color.id}`}
            className="px-5 py-2.5 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 font-medium"
          >
            Explore Palette
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="flex space-x-2">
            {color.gradientColors?.slice(0, 3).map((hex, index) => (
              <div 
                key={index}
                className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 shadow-sm transition-transform hover:scale-125"
                style={{ backgroundColor: hex }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Colors Section component
const MainColorsSection = () => {
  const [mainColors, setMainColors] = useState<ColorType[]>([]);
  
  // Load colors from the palette
  useEffect(() => {
    const colorsList = convertPaletteToColorTypes();
    setMainColors(colorsList);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-900 overflow-x-hidden">
      <Navigation activeSection="colors" />
      <section className="pt-24 pb-32 relative overflow-hidden w-full">
        <div className="container mx-auto px-4 max-w-[2000px] w-full">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white/95 tracking-tight">
                Curated Color Palettes
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300/80 leading-relaxed">
                Discover professionally crafted color schemes perfect for modern UI design
              </p>
            </div>
            <Link
              to="/home"
              className="flex items-center space-x-2 group text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <span className="text-lg font-medium">Back to Home</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {mainColors.map((color) => (
              <MainColorCard key={color.id} color={color} />
            ))}
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default MainColorsSection; 