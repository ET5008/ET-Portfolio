import Card from '../ui/Card';
import Button from '../ui/Button';

/**
 * ExtrasCard component to display individual extra fun projects
 * @param {Object} props
 * @param {Object} props.extra - Extra project data object from extra-fun-features.js
 */
export default function ExtrasCard({ extra }) {
  const {
    title,
    description,
    coverImage,
    technologies,
    link
  } = extra;

  return (
    <Card hoverable className="p-6 flex flex-col h-full">
      {/* Cover Image */}
      {coverImage && (
        <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
            }}
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

      {/* Technology Badges - Only if technologies exist */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm font-medium py-1 px-3 bg-accent text-text rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Project Description */}
      {description && (
        <p className="text-base md:text-lg text-text mb-4 flex-1">
          {description}
        </p>
      )}

      {/* Action Button */}
      <div className="mt-auto">
        {link && (
          <Button
            href={link}
            variant="primary"
            size="sm"
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it Out
          </Button>
        )}
      </div>
    </Card>
  );
}
