import { motion } from 'framer-motion';
import HistoryIcon from '@mui/icons-material/History';
import { useVersion } from '@core';

/**
 * VersionSwitcher - Floating action button for accessing version history
 * Fixed position in bottom-right corner, opens version timeline modal
 */
export default function VersionSwitcher() {
  const { currentVersionObj, openTimeline } = useVersion();

  return (
    <motion.button
      className="fixed bottom-6 right-6 bg-primary text-white rounded-full shadow-lg hover:shadow-xl z-50 flex items-center gap-2 px-4 py-3 group transition-all duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={openTimeline}
      aria-label="Open version history"
    >
      <HistoryIcon fontSize="medium" />

      {/* Version badge */}
      <span className="bg-white text-primary px-2 py-0.5 rounded-full text-xs font-semibold">
        v{currentVersionObj.version}
      </span>

      {/* Tooltip text - visible on hover */}
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Version History
      </span>
    </motion.button>
  );
}
