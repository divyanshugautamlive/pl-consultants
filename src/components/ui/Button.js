import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform cursor-pointer active:scale-95 text-center";

  const variants = {
    primary:
      "bg-navy text-white hover:bg-navy-light focus:ring-4 focus:ring-navy/20",
    secondary:
      "border-2 border-teal text-teal hover:bg-teal hover:text-white focus:ring-4 focus:ring-teal/20",
    gold:
      "bg-gold text-navy hover:bg-gold-dark font-bold shadow-md hover:shadow-lg focus:ring-4 focus:ring-gold/20",
    white:
      "bg-white text-navy hover:bg-gray-100 focus:ring-4 focus:ring-white/20 border border-gray-200",
  };

  const selectedVariant = variants[variant] || variants.primary;
  const fullClassName = `${baseStyle} ${selectedVariant} ${className}`;

  if (href) {
    return (
      <Link href={href} className={fullClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={fullClassName}
      {...props}
    >
      {children}
    </button>
  );
}
