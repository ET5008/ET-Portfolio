import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useVersion } from '@core';
import {Modal} from '@shared';
import {Button} from '@shared';

/**
 * VersionTimeline - Interactive timeline showing portfolio version history
 * Displays all versions in a vertical timeline with ability to preview and switch
 */
export default function VersionTimeline() {
  const {
    availableVersions,
    currentVersion,
    isTimelineOpen,
    closeTimeline,
    openPreview,
    setVersion
  } = useVersion();

  if (!isTimelineOpen) return null;

  return (
    <Modal
      isOpen={isTimelineOpen}
      onClose={closeTimeline}
      title="Portfolio Evolution"
      size="xl"
    >
      <p className="text-gray-600 text-center mb-12">
        Explore how this portfolio has grown over time
      </p>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />

        {/* Timeline items */}
        <div className="space-y-8">
          {availableVersions.map((version, index) => (
            <motion.div
              key={version.id}
              className={clsx(
                'relative pl-20',
                version.id === currentVersion && 'current-version'
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              {/* Timeline dot */}
              <div
                className={clsx(
                  'absolute left-6 w-5 h-5 rounded-full border-4 border-white',
                  version.id === currentVersion
                    ? 'bg-primary ring-4 ring-primary/20'
                    : 'bg-gray-400'
                )}
              />

              {/* Content card */}
              <div
                className={clsx(
                  'bg-white rounded-lg border-2 p-6 shadow-md hover:shadow-lg transition-all duration-200',
                  version.id === currentVersion
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200'
                )}
              >
                {/* Current version badge */}
                {version.id === currentVersion && (
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-3">
                    Current Version
                  </span>
                )}

                {/* Version info */}
                <h3 className="text-2xl font-bold text-text mb-1">
                  {version.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Version {version.version} · {version.date}
                </p>
                <p className="text-gray-700 mb-4">
                  {version.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {version.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => openPreview(version)}
                  >
                    View Details
                  </Button>
                  {version.id !== currentVersion && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        setVersion(version.id);
                        closeTimeline();
                      }}
                    >
                      Switch to This Version
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
