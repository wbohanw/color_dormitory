import { Link } from 'react-router-dom';
import featureColorData from '../data/feature_color.json';
import Navigation from './Navigation';

// Featured Color Card component
const FeaturedColorCard = ({ collection, id }: { collection: typeof featureColorData.feature1, id: string }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 shadow-2xl shadow-blue-100/20 dark:shadow-gray-900/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 dark:border-gray-700">
      <div className="relative overflow-hidden rounded-2xl aspect-square">
        {collection.color.map((hex, index) => {
          // Fix invalid hex codes (some have letters like 'O' instead of '0')
          const formattedHex = hex.startsWith('#') ? hex : `#${hex}`;
          const correctedHex = formattedHex.replace(/[O]/g, '0').replace(/[r]/g, 'f');
          
          return (
            <div 
              key={index} 
              className="absolute inset-0 transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              style={{ 
                backgroundColor: correctedHex,
                clipPath: `polygon(${index * 20}% 0, ${index * 20 + 20}% 0, 100% 100%, 0 100%)`
              }}
            >
              <div className="absolute inset-0 bg-black/10 dark:bg-white/5 transition-opacity group-hover:opacity-0" />
            </div>
          );
        })}
      </div>
      
      <div className="pt-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          {collection.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {collection.description}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {collection.color.length} Colors
          </span>
          <Link
            to={`/featured/${id}`}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-400/20 transition-all"
          >
            <span>Explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Featured Colors Section component
const FeaturedColorsSection = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation activeSection="featured" />
      <section className="pt-20 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#e0f2fe_40%,transparent_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#1e3a8a_40%,transparent_100%)]" />
        
        <div className="container mx-auto px-4 relative max-w-[2000px] w-full">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Collections
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Curated color palettes crafted by design professionals
              </p>
            </div>
            <Link
              to="/home"
              className="flex items-center space-x-2 group text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <span className="text-lg font-medium">View All Collections</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(featureColorData).map(([key, collection]) => (
              <FeaturedColorCard key={key} id={key} collection={collection} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedColorsSection; 