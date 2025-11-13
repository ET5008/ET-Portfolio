import clsx from 'clsx';

/**
 * Reusable Button component with multiple variants
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary' | 'secondary' | 'ghost'} props.variant - Button style variant
 * @param {'sm' | 'md' | 'lg'} props.size - Button size
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.href - If provided, renders as link
 * @param {Function} props.onClick - Click handler
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  href,
  onClick,
  ...rest
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primaryDark focus:ring-primary shadow-sm',
    secondary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-text bg-transparent hover:bg-secondary focus:ring-secondary'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabledStyles,
    className
  );

  // Render as link if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type="button"
      className={combinedClassName}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
