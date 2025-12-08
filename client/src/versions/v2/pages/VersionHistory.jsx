import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'react-router';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import useVersionHistory from '@core/hooks/useVersionHistory';

/**
 * VersionHistory page - Dedicated page showcasing portfolio evolution
 * Displays timeline of all versions with detailed information
 */
export default function VersionHistory() {
  const { versions, currentVersion, switchVersion } = useVersionHistory();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
              Portfolio Evolution
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore how this portfolio has grown and improved over time. Each version represents a milestone in my development journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Timeline items */}
            <div className="space-y-12">
              {versions.map((version, index) => {
                const isActive = version.id === currentVersion.id;

                return (
                  <motion.div
                    key={version.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="relative pl-20 md:pl-28"
                  >
                    {/* Timeline dot */}
                    <div
                      className={clsx(
                        'absolute left-5 md:left-8 w-7 h-7 rounded-full border-4 border-background',
                        isActive
                          ? 'bg-primary ring-4 ring-primary/30 scale-110'
                          : 'bg-gray-400'
                      )}
                    />

                    {/* Content card */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className={clsx(
                        'bg-white rounded-xl border-2 p-6 md:p-8 shadow-lg transition-all duration-200',
                        isActive
                          ? 'border-primary shadow-primary/20'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                      )}
                    >
                      {/* Badge */}
                      {isActive && (
                        <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full mb-4">
                          Currently Viewing
                        </span>
                      )}

                      {/* Version header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-text">
                            {version.name}
                          </h2>
                          <p className="text-sm text-gray-500 mt-1">
                            Version {version.version} · {version.date}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-base md:text-lg mb-6">
                        {version.description}
                      </p>

                      {/* Features list */}
                      {version.features && version.features.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-text mb-3">
                            Key Features
                          </h3>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {version.features.slice(0, 6).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
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
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="text-sm text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech stack */}
                      {version.techStack && version.techStack.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold text-gray-500 mb-2">
                            TECH STACK
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {version.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action button */}
                      {!isActive && (
                        <div className="pt-4 border-t border-gray-200">
                          <Button
                            variant="primary"
                            size="md"
                            onClick={() => switchVersion(version.id)}
                          >
                            Switch to This Version
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
              Ready to explore the current portfolio?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Head back to the home page to see the latest version with all the newest features and projects.
            </p>
            <Link to="/">
              <Button variant="primary" size="lg">
                View Current Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
