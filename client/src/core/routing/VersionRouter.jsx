import { useVersion } from '../context/VersionContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from '../../versions/v2';
import { HomeV1 } from '../../versions/v1';

/**
 * VersionRouter - Conditionally renders portfolio versions
 * Routes between V1 and V2 (current) based on context state
 */
export default function VersionRouter() {
  const { currentVersion } = useVersion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentVersion}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {currentVersion === 'v1.0' ? <HomeV1 /> : <Home />}
      </motion.div>
    </AnimatePresence>
  );
}
