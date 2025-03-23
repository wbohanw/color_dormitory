import { Link } from 'react-router-dom';
import { BiSolidBed } from "react-icons/bi";
interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 w-full max-w-[2000px]">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 via-purple-400 to-purple-500 shadow-lg">
            <BiSolidBed />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              ColorDorm
            </span>
          </Link>
          
          <div className="flex space-x-6">
            {['home', 'colors', 'featured', 'playground'].map((section) => (
              <Link
                key={section}
                to={`/${section === 'home' ? '' : section}`}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  activeSection === section 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-underline" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 