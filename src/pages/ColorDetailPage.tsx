import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { colorData, getCodeSnippets, ColorType } from '../data/colorData';
import '../App.css';

const ColorDetailPage = () => {
  const { colorId } = useParams<{ colorId: string }>();
  const [selectedColor, setSelectedColor] = useState<ColorType | null>(null);
  const [activeTab, setActiveTab] = useState<'css' | 'react' | 'tailwind' | 'scss'>('css');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Find the color by ID
    const color = colorData.find(c => c.id === parseInt(colorId || '0'));
    if (color) {
      setSelectedColor(color);
    }
  }, [colorId]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!selectedColor) {
    return <div className="not-found">Color not found</div>;
  }

  const codeSnippets = getCodeSnippets(selectedColor);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/home" 
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Colors
          </Link>
        </div>
        
        <div className="mb-12 rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
          <div 
            className="h-64 flex items-center justify-center p-8"
            style={{ backgroundColor: selectedColor.hex }}
          >
            <h1 className="text-4xl font-bold text-white bg-black bg-opacity-30 px-6 py-3 rounded-full">
              {selectedColor.name}
            </h1>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Color Codes</h2>
            <div className="space-y-4">
              {['hex', 'rgb', 'hsl'].map((codeType) => (
                <div 
                  key={codeType}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-600 uppercase">{codeType}</span>
                  <div className="flex items-center gap-4">
                    <code className="font-mono text-gray-800">
                      {selectedColor[codeType as keyof ColorType]}
                    </code>
                    <button
                      onClick={() => copyToClipboard(selectedColor[codeType as keyof ColorType])}
                      className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors text-sm font-medium"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">How to Use This Color</h2>
            <div className="mb-6">
              <div className="flex gap-2 flex-wrap">
                {(['css', 'react', 'tailwind', 'scss'] as const).map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-md capitalize transition-colors ${
                      activeTab === tab 
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-800 p-6 rounded-lg overflow-x-auto text-gray-100 font-mono text-sm">
                {codeSnippets[activeTab]}
              </pre>
              <button
                onClick={() => copyToClipboard(codeSnippets[activeTab])}
                className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                {copied ? '✅ Copied!' : '📋 Copy Code'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorDetailPage; 