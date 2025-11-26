import { personalInfo } from '../../data/personal-info';
import { versions } from '../../data/versions';

/**
 * Footer component with creator info and version indicator
 */
export default function Footer() {
  const currentVersion = versions.find(v => v.isCurrent);

  return (
    <footer className="bg-primary text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center text-sm opacity-75 md:text-left">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
          {/* Version Info */}
          {currentVersion && (
            <div className="text-center md:text-right flex flex-row text-sm space-x-3 opacity-90">
              <a href="" className='hover:underline'>Extras</a>
              <p className="text-sm opacity-90">
                Version {currentVersion.version}
              </p>
            </div>
          )}
        </div>
        
        
      </div>
    </footer>
  );
}
