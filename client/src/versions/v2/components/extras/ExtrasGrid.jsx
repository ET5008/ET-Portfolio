import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { extraFunFeatures } from '../../../../data/extra-fun-features';
import ExtrasCard from './ExtrasCard';

/**
 * ExtrasGrid component displaying extra fun projects showcase
 */
export default function ExtrasGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center min-h-[75vh] justify-center px-4 py-16 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-text font-bold text-center mb-12">
          Extra Fun Stuff
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {extraFunFeatures.map((extra, index) => (
            <motion.div
              key={extra.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExtrasCard extra={extra} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
