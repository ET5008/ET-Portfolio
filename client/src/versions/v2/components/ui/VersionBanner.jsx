import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import useVersionHistory from '@core/hooks/useVersionHistory';
import Button from './Button';

/**
 * VersionBanner - Warning banner shown when viewing a non-current version
 * Displays at top of page with option to return to latest version
 */
export default function VersionBanner() {
  const { isLatest, currentVersion, goToLatest } = useVersionHistory();
  const [isDismissed, setIsDismissed] = useState(false);

  // Don't show banner if on latest version or if dismissed
  if (isLatest || isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-40 bg-amber-50 border-b-2 border-amber-200 shadow-sm"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Info section */}
            <div className="flex items-center gap-3 flex-1">
              <InfoIcon className="text-amber-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm md:text-base text-gray-800">
                  You are viewing{' '}
                  <span className="font-semibold">
                    Portfolio {currentVersion.name}
                  </span>{' '}
                  (v{currentVersion.version})
                </p>
                <p className="text-xs text-gray-600 hidden md:block">
                  This is a preserved historical version. Switch to the current version to see the latest updates.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={goToLatest}
                className="whitespace-nowrap"
              >
                Return to Current
              </Button>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1 text-gray-500 hover:text-gray-700 hover:bg-amber-100 rounded transition-colors"
                aria-label="Dismiss banner"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
