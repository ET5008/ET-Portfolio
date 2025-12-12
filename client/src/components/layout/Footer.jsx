import { Link } from 'react-router';
import { personalInfo } from '../../data/personal-info';

/**
 * Footer component with creator info and version indicator
 */
export default function Footer() {

  return (
    <footer className="bg-primary text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center text-sm opacity-75 md:text-left">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
          {/* Extras Tab */}
            <div className="text-center md:text-right flex flex-row text-sm space-x-3 opacity-90">
              <Link to="/extras" className='hover:underline'>Extras</Link>
            </div>

        </div>


      </div>
    </footer>
  );
}
