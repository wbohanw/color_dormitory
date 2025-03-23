import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ColorType, hexToRgb, getRandomUniqueElements, fixHexCode, createGradient } from '../data/ColorTypes';
import colorPaletteData from '../data/ui_color_palette.json';
import Navigation from '../components/Navigation';

// Function to get a color palette by ID
const getColorPaletteById = (colorId: string): ColorType | null => {
  const colorCategories = Object.keys(colorPaletteData);
  const categoryIndex = parseInt(colorId) - 1;
  
  if (categoryIndex >= 0 && categoryIndex < colorCategories.length) {
    const category = colorCategories[categoryIndex];
    const hexColors = colorPaletteData[category as keyof typeof colorPaletteData];
    const correctedHexColors = getRandomUniqueElements(hexColors, 5).map(hex => 
      fixHexCode(hex.startsWith('#') ? hex : `#${hex}`)
    );

    return {
      id: categoryIndex + 1,
      name: category.charAt(0).toUpperCase() + category.slice(1),
      hex: correctedHexColors[0],
      rgb: hexToRgb(correctedHexColors[0]),
      hsl: `hsl(0, 0%, 0%)`,
      description: `Premium ${category} color collection`,
      category,
      gradientColors: correctedHexColors
    };
  }
  return null;
};

// Generate code snippets for the color palette
const getCodeSnippets = (color: ColorType) => {
  const colorsArray = color.gradientColors || [color.hex];
  const colorVarNames = colorsArray.map((_, i) => 
    `${color.category?.toLowerCase() || 'color'}-${i + 1}`
  );
  
  return {
    css: `.${color.category?.toLowerCase()}-palette {\n${
      colorsArray.map((hex, i) => `  --${colorVarNames[i]}: ${hex};\n`).join('')
    }}\n\n/* Usage examples */\n.element-1 {\n  background-color: var(--${colorVarNames[0]});\n}\n.element-2 {\n  color: var(--${colorVarNames[1]});\n}\n`,
    
    react: `// React component with the ${color.name} palette\nimport React from 'react';\n\nconst ${color.name}Palette = {\n${
      colorsArray.map((hex, i) => `  ${colorVarNames[i]}: "${hex}",`).join('\n')
    }\n};\n\nconst PaletteDemo = () => (\n  <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>\n${
      colorsArray.map((hex, i) => `    <div style={{ width: 50, height: 50, backgroundColor: ${color.name}Palette["${colorVarNames[i]}"], borderRadius: '0.5rem' }} />`).join('\n')
    }\n  </div>\n);`,
    
    tailwind: `<!-- Tailwind CSS with custom colors -->\n<div class="flex gap-4 p-4">\n${
      colorsArray.map((hex, i) => `  <div class="w-12 h-12 rounded-lg bg-[${hex}]"></div>`).join('\n')
    }\n</div>\n\n<!-- Add these colors to your tailwind.config.js -->\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        '${color.category}': {\n${
      colorsArray.map((hex, i) => `          '${i + 1}00': '${hex}',`).join('\n')
    }\n        }\n      }\n    }\n  }\n}`,
    
    scss: `// SCSS variables for ${color.name} palette\n${
      colorsArray.map((hex, i) => `$${colorVarNames[i]}: ${hex};`).join('\n')
    }\n\n// Color Map\n$${color.category?.toLowerCase()}-colors: (\n${
      colorsArray.map((hex, i) => `  ${i + 1}: ${hex},`).join('\n')
    }\n);\n\n// Usage\n.element {\n  background-color: $${colorVarNames[0]};\n  color: $${colorVarNames[colorsArray.length - 1]};\n  \n  &:hover {\n    background-color: map-get($${color.category?.toLowerCase()}-colors, 2);\n  }\n}`
  };
};

// Individual color swatch component
const ColorSwatch = ({ hex, name, index }: { hex: string; name: string; index: number }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="color-swatch-container">
      <div 
        className="color-swatch-item"
        style={{ backgroundColor: hex }}
        onClick={() => {
          navigator.clipboard.writeText(hex);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      />
      <div className="color-swatch-info">
        <div className="color-swatch-name">{name} {index + 1}</div>
        <code className="color-swatch-hex">{hex}</code>
        {copied && <div className="color-copy-badge">✓</div>}
      </div>
    </div>
  );
};

const ColorDetailPage: React.FC = () => {
  const { colorId } = useParams<{ colorId: string }>();
  const [selectedColor, setSelectedColor] = useState<ColorType | null>(null);
  const [activeTab, setActiveTab] = useState<'css' | 'react' | 'tailwind' | 'scss'>('css');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (colorId) setSelectedColor(getColorPaletteById(colorId));
  }, [colorId]);

  if (!selectedColor) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-gray-50 to-blue-50/20 dark:from-gray-900 dark:to-blue-900/5 
                     flex items-center justify-center text-red-500 dark:text-red-400 text-xl">
        Color palette not found
      </div>
    );
  }

  const gradientStyle = selectedColor.gradientColors 
    ? { background: createGradient(selectedColor.gradientColors) }
    : { backgroundColor: selectedColor.hex };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-50 to-blue-50/20 dark:from-gray-900 dark:to-blue-900/10">
      <Navigation activeSection="colors" />
    
      <div className="container mx-auto px-4 py-24 max-w-[2000px] w-full">
        <div className="relative group bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/10 dark:border-gray-700">
          <div 
            className="h-64 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800 relative overflow-hidden"
            style={{ background: createGradient(selectedColor?.gradientColors || []) }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white drop-shadow-2xl">
              {selectedColor?.name} Spectrum
            </h1>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                Color Palette
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedColor?.gradientColors?.map((hex, index) => (
                  <div 
                    key={index}
                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: hex }}
                  >
                    <div className="absolute inset-0 bg-black/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <code className="font-mono text-sm text-white">{hex}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex space-x-2 border-b border-gray-200 dark:border-gray-700">
                {(['css', 'react', 'tailwind', 'scss'] as const).map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
                      activeTab === tab 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20' 
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-700/50'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
              
              <div className="relative rounded-xl bg-gray-50 dark:bg-gray-900/30 p-6">
                <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                  {getCodeSnippets(selectedColor!)[activeTab]}
                </pre>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(getCodeSnippets(selectedColor!)[activeTab]);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="absolute top-4 right-4 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link 
            to="/colors" 
            className="flex items-center space-x-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-gray-700 dark:text-gray-200 font-medium">Back to Colors</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ColorDetailPage;