import { useMemo } from 'react';
import { useVersion } from '../context/VersionContext';

/**
 * useVersionHistory - Custom hook for version history management
 * Provides computed values and helpers for working with portfolio versions
 *
 * @returns {Object} Version history utilities and computed values
 */
export default function useVersionHistory() {
  const { currentVersion, currentVersionObj, availableVersions, setVersion } = useVersion();

  // Sort versions by date (newest first)
  const sortedVersions = useMemo(() => {
    return [...availableVersions].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }, [availableVersions]);

  // Find current version index in sorted array
  const currentIndex = useMemo(() => {
    return sortedVersions.findIndex(v => v.id === currentVersion);
  }, [sortedVersions, currentVersion]);

  // Get next version (newer - previous in timeline)
  const nextVersion = useMemo(() => {
    if (currentIndex > 0) {
      return sortedVersions[currentIndex - 1];
    }
    return null;
  }, [sortedVersions, currentIndex]);

  // Get previous version (older - next in timeline)
  const previousVersion = useMemo(() => {
    if (currentIndex < sortedVersions.length - 1) {
      return sortedVersions[currentIndex + 1];
    }
    return null;
  }, [sortedVersions, currentIndex]);

  // Check if current version is the latest
  const isLatest = useMemo(() => {
    return currentVersionObj?.isCurrent || false;
  }, [currentVersionObj]);

  /**
   * Switch to a specific version
   * @param {string} versionId - The version ID to switch to
   */
  const switchVersion = (versionId) => {
    setVersion(versionId);
  };

  /**
   * Go to the latest version
   */
  const goToLatest = () => {
    const latest = sortedVersions.find(v => v.isCurrent);
    if (latest) {
      setVersion(latest.id);
    }
  };

  /**
   * Go to next version (newer)
   */
  const goToNext = () => {
    if (nextVersion) {
      setVersion(nextVersion.id);
    }
  };

  /**
   * Go to previous version (older)
   */
  const goToPrevious = () => {
    if (previousVersion) {
      setVersion(previousVersion.id);
    }
  };

  return {
    // Current version info
    currentVersion: currentVersionObj,

    // All versions sorted by date
    versions: sortedVersions,

    // Navigation
    switchVersion,
    nextVersion,
    previousVersion,
    goToNext,
    goToPrevious,

    // Status flags
    isLatest,
    goToLatest,

    // Helpers
    hasNext: nextVersion !== null,
    hasPrevious: previousVersion !== null,
    totalVersions: sortedVersions.length
  };
}
