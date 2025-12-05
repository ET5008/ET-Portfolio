// Portfolio V1.0 - Preserved Version
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../../data/projects';
import ProjectCard from '../../../components/projects/ProjectCard';

/**
 * Work section component displaying project showcase - V1.0
 */
export default function WorkV1() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="work"
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
          My Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
