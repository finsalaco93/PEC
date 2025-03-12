
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
  color?: 'light' | 'dark';
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
  color = 'dark',
}: SectionHeaderProps) => {
  return (
    <div 
      className={cn(
        "max-w-3xl mb-12", 
        centered && "mx-auto text-center", 
        className
      )}
    >
      {eyebrow && (
        <div 
          className={cn(
            "inline-block text-sm tracking-wider font-semibold mb-3 px-3 py-1 rounded-full",
            color === 'dark' ? 'bg-electric-100 text-electric-700' : 'bg-electric-700 text-white',
            eyebrowClassName
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2 
        className={cn(
          "text-3xl sm:text-4xl font-bold leading-tight mb-4",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p 
          className={cn(
            "text-lg text-muted-foreground",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
