import clsx from 'clsx';

/**
 * Reusable Card component with hover effects
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hoverable - Enable hover lift effect
 * @param {Function} props.onClick - Click handler (makes card clickable)
 * @param {'default' | 'outlined' | 'elevated'} props.variant - Card style variant
 */
export default function Card({
  children,
  className = '',
  hoverable = false,
  onClick,
  variant = 'default',
  ...rest
}) {
  const baseStyles = 'rounded-lg transition-all duration-300 ease-in-out';

  const variantStyles = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-transparent border-2 border-primary',
    elevated: 'bg-white shadow-md'
  };

  const hoverStyles = hoverable || onClick
    ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'
    : '';

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    hoverStyles,
    clickableStyles,
    className
  );

  return (
    <div
      className={combinedClassName}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
