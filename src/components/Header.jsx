
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div className="bg-blue-500 py-4 px-8 flex items-center justify-between">
         <div className="text-white font-bold text-xl">URL Shortener</div>
         <div className="space-x-4">
            <Link to="/" className="text-white hover:text-blue-200">
               Entry Page
            </Link>
            <Link to="/edit-page" className="text-white hover:text-blue-200">
               Edit Page
            </Link>
            <Link to="/list-page" className="text-white hover:text-blue-200">
               List Page
            </Link>
         </div>
      </div>
   );
};

export default Header;
