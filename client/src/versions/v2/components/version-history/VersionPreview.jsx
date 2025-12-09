import { motion } from 'framer-motion';
import { useVersion } from '@core';
import {Modal} from '@shared';
import {Button} from '@shared';

/**
 * VersionPreview - Detailed preview modal for a specific portfolio version
 * Shows screenshot, features, tech stack, and allows switching to that version
 */
export default function VersionPreview() {
  const {
    isPreviewOpen,
    selectedVersion,
    closePreview,
    setVersion,
    currentVersion
  } = useVersion();

  if (!isPreviewOpen || !selectedVersion) return null;

  const isCurrentVersion = selectedVersion.id === currentVersion;

  return (
    <Modal
      isOpen={isPreviewOpen}
      onClose={closePreview}
      size="xl"
      showCloseButton={true}
    >
      <div className="space-y-6">
        {/* Screenshot */}
        {selectedVersion.screenshot && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full rounded-lg overflow-hidden border-2 border-gray-200"
          >
            <img
              src={selectedVersion.screenshot}
              alt={`Portfolio ${selectedVersion.name} screenshot`}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=Screenshot+Coming+Soon';
              }}
            />
          </motion.div>
        )}

        {/* Version metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-text">
              {selectedVersion.name}
            </h2>
            {isCurrentVersion && (
              <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                Current
              </span>
            )}
          </div>

          <p className="text-gray-500 mb-2">
            Version {selectedVersion.version} · Launched {selectedVersion.date}
          </p>

          <p className="text-lg text-gray-700">
            {selectedVersion.description}
          </p>
        </motion.div>

        {/* Key Features */}
        {selectedVersion.features && selectedVersion.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-text mb-3">Key Features</h3>
            <ul className="space-y-2">
              {selectedVersion.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Tech Stack */}
        {selectedVersion.techStack && selectedVersion.techStack.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-text mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {selectedVersion.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex gap-4 pt-4 border-t border-gray-200"
        >
          {!isCurrentVersion && (
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setVersion(selectedVersion.id);
                closePreview();
              }}
              className="flex-1"
            >
              View This Version
            </Button>
          )}
          <Button
            variant="secondary"
            size="md"
            onClick={closePreview}
            className={isCurrentVersion ? 'flex-1' : ''}
          >
            Close
          </Button>
        </motion.div>
      </div>
    </Modal>
  );
}
