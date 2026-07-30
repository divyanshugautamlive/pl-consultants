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
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform cursor-pointer active:scale-[0.98] text-center shadow-sm hover:-translate-y-0.5 hover:shadow-md";

  const variants = {
    primary:
      "bg-navy text-white hover:bg-navy-light hover:border-gold/50 border border-navy font-bold shadow-md hover:shadow-navy/30 focus:ring-4 focus:ring-navy/20",
    secondary:
      "border-2 border-teal text-teal hover:bg-teal hover:text-white focus:ring-4 focus:ring-teal/20",
    gold:
      "bg-gold text-navy-dark hover:bg-gold-light font-bold shadow-md hover:shadow-gold/30 focus:ring-4 focus:ring-gold/20 border border-gold/30",
    navy:
      "bg-navy-dark text-white hover:bg-navy border border-gold/30 font-bold shadow-md hover:shadow-gold/20 focus:ring-4 focus:ring-navy/30",
    white:
      "bg-white text-navy hover:bg-gray-100 hover:text-navy-dark focus:ring-4 focus:ring-white/20 border border-gray-200 shadow-sm",
    outline:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-4 focus:ring-navy/20",
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
