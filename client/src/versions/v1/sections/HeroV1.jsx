// Portfolio V1.0 - Preserved Version
import { motion } from 'framer-motion';
import { personalInfo } from '../../../data/personal-info';
import Button from '../../../components/ui/Button';

/**
 * Hero section component - V1.0
 */
export default function HeroV1() {
  return (
    <section
      id="hero"
      className="h-[90vh] flex justify-center items-center flex-col px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-text font-bold mb-6">
          {personalInfo.tagline}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8"
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            href="#about"
            variant="primary"
            size="lg"
            className="inline-block"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
