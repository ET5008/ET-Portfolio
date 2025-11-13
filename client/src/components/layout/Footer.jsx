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
          {/* Creator Info */}
          <div className="text-center md:text-left">
            <p className="text-lg">
              Created and designed by {personalInfo.name}
            </p>
          </div>

          {/* Version Info */}
          {currentVersion && (
            <div className="text-center md:text-right">
              <p className="text-sm opacity-90">
                Version {currentVersion.version} - {currentVersion.name}
              </p>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
