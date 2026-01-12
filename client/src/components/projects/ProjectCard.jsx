import Card from '../ui/Card';
import Button from '../ui/Button';

/**
 * ProjectCard component to display individual project information
 * @param {Object} props
 * @param {Object} props.project - Project data object from projects.js
 */
export default function ProjectCard({ project }) {
  const {
    title,
    shortDescription,
    technologies,
    status,
    links,
    thumbnail
  } = project;

  return (
    <Card hoverable className="p-6 flex flex-col h-full w-[35vw]">
      {/* Project Thumbnail */}
      {thumbnail && (
        <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
          <img
            src={thumbnail ? thumbnail : ""}
            alt={title}
            className={`w-full h-full object-cover z-9 ${thumbnail ? thumbnail : 'hidden'}`   }         
          />
          {/* Placeholder if no image */}
          <div className="absolute text-gray-400 text-sm">
            Project Preview
          </div>
        </div>
      )}

      {/* Project Title */}
      <h3 className="text-2xl md:text-3xl text-text font-semibold mb-3">
        {title}
      </h3>

      {/* Technology Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies && technologies.map((tech, index) => (
          <span
            key={index}
            className="text-sm font-medium py-1 px-3 bg-accent text-text rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Description */}
      {shortDescription && (
        <p className="text-base md:text-lg text-text mb-4 flex-1">
          {shortDescription}
        </p>
      )}

      {/* Status Badge */}
      {status && (
        <div className="mb-4">
          <span
            className={`inline-block text-xs font-semibold py-1 px-3 rounded-full ${
              status === 'Completed'
                ? 'bg-green-100 text-green-800'
                : status === 'In Progress'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {status}
          </span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        {links?.live && (
          <Button
            href={links.live}
            variant="primary"
            size="sm"
            className="flex-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </Button>
        )}
        {links?.github && (
          <Button
            href={links.github}
            variant="secondary"
            size="sm"
            className="flex-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </Button>
        )}
      </div>
    </Card>
  );
}
