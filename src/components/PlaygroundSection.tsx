import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ColorType, generateRandomColor } from '../data/ColorTypes';
import Navigation from './Navigation';

// Playground color component
const PlaygroundColor = ({ 
  color, 
  onRemove 
}: { 
  color: ColorType; 
  onRemove: () => void;
}) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div 
        className="h-32 w-full transition-transform group-hover:scale-105"
        style={{ backgroundColor: color.hex }}
      />
      <div className="p-4 bg-white dark:bg-gray-800 flex justify-between items-center">
        <div>
          <p className="font-mono text-sm font-medium text-gray-700 dark:text-gray-200">
            {color.hex}
          </p>
        </div>
        <button
          onClick={onRemove}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Playground Section component
const PlaygroundSection = () => {
  const [playgroundColors, setPlaygroundColors] = useState<ColorType[]>([]);
  const [colorGradient, setColorGradient] = useState<string>('transparent');
  
  // Generate gradient when colors change
  useEffect(() => {
    if (playgroundColors.length > 0) {
      const gradient = `linear-gradient(90deg, ${playgroundColors.map(c => c.hex).join(', ')})`;
      setColorGradient(gradient);
    } else {
      setColorGradient('transparent');
    }
  }, [playgroundColors]);

  // Handler for adding a random color to the playground
  const handleAddRandomColor = () => {
    if (playgroundColors.length < 5) {
      setPlaygroundColors([...playgroundColors, generateRandomColor()]);
    }
  };

  // Handler for removing a color from the playground
  const handleRemoveColor = (index: number) => {
    setPlaygroundColors(playgroundColors.filter((_, i) => i !== index));
  };

  // Variable to disable the dice button when maximum colors reached
  const isMaxColors = playgroundColors.length >= 5;

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation activeSection="playground" />
      <section className="pt-20 pb-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden w-full">
        <div className="container mx-auto px-4 max-w-[2000px] w-full">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Color Laboratory
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Experiment with color combinations and create custom gradients
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

          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/10 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    Your Color Palette
                  </h3>
                  <button
                    onClick={handleAddRandomColor}
                    disabled={isMaxColors}
                    className={`p-4 rounded-full shadow-lg transition-all ${
                      isMaxColors 
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white hover:shadow-xl'
                    }`}
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h14V5H5zm9.5 7c-.83 0-1.5-.67-1.5-1.5S13.67 9 14.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-5 0C8.67 12 8 11.33 8 10.5S8.67 9 9.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                  </button>
                </div>

                {playgroundColors.length === 0 ? (
                  <div className="bg-gray-100/50 dark:bg-gray-700/50 rounded-2xl p-8 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-600">
                    <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Click the dice to add random colors
                      <br />
                      (Maximum 5 colors)
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {playgroundColors.map((color, index) => (
                      <PlaygroundColor
                        key={`${color.id}-${index}`}
                        color={color}
                        onRemove={() => handleRemoveColor(index)}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  Gradient Preview
                </h3>
                <div 
                  className="h-96 rounded-2xl shadow-inner flex items-center justify-center relative overflow-hidden"
                  style={{ 
                    background: colorGradient === 'transparent' 
                      ? 'repeating-conic-gradient(#80808010 0% 25%, transparent 0% 50%) 50% / 20px 20px' 
                      : colorGradient
                  }}
                >
                  {playgroundColors.length === 0 && (
                    <p className="text-gray-500 dark:text-gray-400">Add colors to generate gradient</p>
                  )}
                </div>

                {playgroundColors.length > 0 && (
                  <div className="bg-gray-100/50 dark:bg-gray-700/50 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        CSS Gradient Code
                      </h4>
                      <button
                        onClick={() => navigator.clipboard.writeText(`background: ${colorGradient};`)}
                        className="px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full shadow-md hover:shadow-lg transition-all"
                      >
                        Copy Code
                      </button>
                    </div>
                    <code className="block p-4 bg-white dark:bg-gray-800 rounded-xl text-sm font-mono text-gray-800 dark:text-gray-200 break-all">
                      background: {colorGradient};
                    </code>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaygroundSection;