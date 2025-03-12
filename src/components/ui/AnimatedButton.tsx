
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  href?: string;
}

const AnimatedButton = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  href,
  ...props
}: AnimatedButtonProps) => {
  const baseStyles = cn(
    "relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 overflow-hidden group",
    fullWidth && "w-full",
    size === "sm" && "text-sm px-4 py-2",
    size === "md" && "px-6 py-3",
    size === "lg" && "text-lg px-8 py-4"
  );

  const variantStyles = {
    primary: "bg-electric-600 text-white hover:bg-electric-700 shadow-md hover:shadow-lg",
    outline: "border-2 border-electric-600 text-electric-600 hover:bg-electric-50",
    ghost: "bg-transparent text-electric-600 hover:bg-electric-50",
  };

  // Default icon
  const defaultIcon = <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={size === "sm" ? 16 : size === "lg" ? 20 : 18} />;

  // Use the provided icon or the default one
  const iconToUse = icon || (iconPosition === "right" ? defaultIcon : null);

  const content = (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {iconPosition === "left" && iconToUse && (
        <span className="mr-2">{iconToUse}</span>
      )}
      {children}
      {iconPosition === "right" && iconToUse && iconToUse}
    </button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

export default AnimatedButton;
