import { Link } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="max-w-4xl text-center px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Color Library</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your curated collection of beautiful colors and modern palettes. Explore, discover, and implement perfect hues for your next project.
        </p>
        
        <Link 
          to="/home" 
          className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform transition-all hover:scale-105 hover:shadow-lg shadow-md hover:shadow-blue-200"
        >
          Explore Colors →
        </Link>
        
        <div className="mt-12 flex justify-center space-x-6">
          <div className="p-1 bg-white rounded-full shadow-lg">
            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
          </div>
          <div className="p-1 bg-white rounded-full shadow-lg">
            <div className="w-4 h-4 rounded-full bg-purple-600"></div>
          </div>
          <div className="p-1 bg-white rounded-full shadow-lg">
            <div className="w-4 h-4 rounded-full bg-pink-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 