import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@data/personal-info';
import Card from '../ui/Card';
import emailIcon from '../../assets/icons/email.svg';
import githubIcon from '../../assets/icons/github.svg';
import linkedInIcon from '../../assets/icons/linkedIn.svg';

/**
 * Contact section component
 */
export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="flex items-center flex-col min-h-[70vh] justify-center px-4 py-16 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Card
          variant="elevated"
          className="bg-secondary p-8 md:p-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-text font-bold mb-4">
            Contacts
          </h2>

          <p className="text-base md:text-lg text-text mb-8">
            {personalInfo.contactMessage}
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 justify-center items-center">
            {/* Email */}
            <a
              href={personalInfo.social.email}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              aria-label="Email"
            >
              <img
                src={emailIcon}
                alt="Email"
                className="h-12 w-12 md:h-16 md:w-16"
              />
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              aria-label="GitHub"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="h-12 w-12 md:h-16 md:w-16"
              />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              aria-label="LinkedIn"
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn"
                className="h-12 w-12 md:h-16 md:w-16"
              />
            </a>
          </div>

          {/* Availability Status */}
          {personalInfo.availability && (
            <div className="mt-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {personalInfo.availability}
              </span>
            </div>
          )}
        </Card>
      </motion.div>
    </section>
  );
}
