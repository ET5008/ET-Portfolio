import { createContext, useContext, useState, useEffect } from 'react';
import { versions } from '../data/versions';

const VersionContext = createContext(null);

/**
 * VersionProvider - Manages portfolio version state
 * Handles version switching, persistence, and modal states
 */
export function VersionProvider({ children }) {
  // Core version state with localStorage persistence
  const [currentVersion, setCurrentVersionState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-version') || versions.find(version => version.newest)?.id;
    }
    return versions.find(version => version.newest)?.id;
  });

  // Modal state management
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [isLoadingVersion, setIsLoadingVersion] = useState(false);

  // Persist version selection to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-version', currentVersion);
    }
  }, [currentVersion]);

  /**
   * Switch to a different version with loading state and animation
   * @param {string} versionId - The version ID to switch to (e.g., 'v1.0', 'v2.0')
   */
  const setVersion = (versionId) => {
    if (versionId === currentVersion) return;

    setIsLoadingVersion(true);

    // Brief delay for smooth transition animation
    setTimeout(() => {
      setCurrentVersionState(versionId);
      setIsLoadingVersion(false);

      // Close all modals when switching versions
      setIsTimelineOpen(false);
      setIsPreviewOpen(false);

      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  // Get current version object from versions array
  const currentVersionObj = versions.find(v => v.id === currentVersion) || versions[0];

  // Context value object
  const value = {
    // Core version state
    currentVersion: currentVersion,
    currentVersionObj: currentVersionObj,
    availableVersions: versions,
    setVersion,
    isLoadingVersion,

    // Timeline modal state
    isTimelineOpen,
    openTimeline: () => setIsTimelineOpen(true),
    closeTimeline: () => setIsTimelineOpen(false),

    // Preview modal state
    isPreviewOpen,
    selectedVersion,
    openPreview: (version) => {
      setSelectedVersion(version);
      setIsPreviewOpen(true);
    },
    closePreview: () => {
      setIsPreviewOpen(false);
      setSelectedVersion(null);
    }
  };

  return (
    <VersionContext.Provider value={value}>
      {children}

      {/* Loading overlay during version switch */}
      {isLoadingVersion && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-700 font-medium">Switching version...</p>
          </div>
        </div>
      )}
    </VersionContext.Provider>
  );
}

/**
 * useVersion hook - Access version context in any component
 * @throws {Error} If used outside of VersionProvider
 * @returns {Object} Version context value
 */
export function useVersion() {
  const context = useContext(VersionContext);
  if (!context) {
    throw new Error('useVersion must be used within VersionProvider');
  }
  return context;
}

export default VersionContext;
