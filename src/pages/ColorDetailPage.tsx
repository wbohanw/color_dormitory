import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { colorData, getCodeSnippets, ColorType } from '../data/colorData';

const ColorDetailPage = () => {
  const { colorId } = useParams<{ colorId: string }>();
  const [selectedColor, setSelectedColor] = useState<ColorType | null>(null);
  const [activeTab, setActiveTab] = useState<'css' | 'react' | 'tailwind' | 'scss'>('css');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const color = colorData.find(c => c.id === parseInt(colorId || '0'));
    if (color) setSelectedColor(color);
  }, [colorId]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!selectedColor) {
    return <div className="text-red-500 dark:text-red-400 p-8 text-center">Color not found</div>;
  }

  const codeSnippets = getCodeSnippets(selectedColor);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/home" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Colors
          </Link>
        </div>

        <div className="mb-12 rounded-2xl shadow-xl overflow-hidden transition-shadow hover:shadow-2xl">
          <div 
            className="h-96 flex items-center justify-center p-8 transition-colors"
            style={{ backgroundColor: selectedColor.hex }}
          >
            <h1 className="text-4xl font-bold text-white bg-black/20 px-8 py-4 rounded-full backdrop-blur-sm">
              {selectedColor.name}
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Color Codes</h2>
            <div className="space-y-4">
              {['hex', 'rgb', 'hsl'].map((codeType) => (
                <div 
                  key={codeType}
                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                    {codeType}
                  </span>
                  <div className="flex items-center gap-4">
                    <code className="font-mono text-gray-800 dark:text-gray-200">
                      {selectedColor[codeType as keyof ColorType]}
                    </code>
                    <button
                      onClick={() => copyToClipboard(String(selectedColor[codeType as keyof ColorType]))}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-sm font-medium"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Implementation</h2>
            <div className="mb-6">
              <div className="inline-flex bg-gray-100 dark:bg-gray-700 p-1 rounded-xl">
                {(['css', 'react', 'tailwind', 'scss'] as const).map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-2 rounded-lg capitalize transition-colors ${
                      activeTab === tab 
                        ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <pre className="bg-gray-800 dark:bg-gray-900 p-6 rounded-xl overflow-x-auto text-gray-100 font-mono text-sm leading-relaxed">
                {codeSnippets[activeTab]}
              </pre>
              <button
                onClick={() => copyToClipboard(codeSnippets[activeTab])}
                className="absolute top-4 right-4 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-100 rounded-lg backdrop-blur-sm transition-colors text-sm font-medium flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorDetailPage; 