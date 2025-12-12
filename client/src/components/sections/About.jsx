import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../../data/personal-info";

/**
 * About section component
 */
export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="flex flex-col items-center min-h-[75vh] justify-center px-4 py-16 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        {/* Profile Image Placeholder */}
        {personalInfo.image && (
  <div className="flex justify-center mb-8">
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
      <img
        src={'/src/assets/images/profile.jpg'}
        alt={personalInfo.name}
        className="w-[170%] h-[160%] -mt-[15%] object-cover object-top shadow-lg"
      />
    </div>
  </div>
)}

        <h2 className="text-3xl md:text-4xl lg:text-5xl text-text font-bold text-center mb-6">
          About Me
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl text-text text-center leading-relaxed max-w-3xl mx-auto">
          {personalInfo.bio}
        </p>

        {/* Location Badge */}
        {personalInfo.location && (
          <div className="flex justify-center mt-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-text font-medium">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {personalInfo.location}
            </span>
          </div>
        )}
      </motion.div>
    </section>
  );
}
