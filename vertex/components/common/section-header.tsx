import { LucideIcon } from "lucide-react";

export default function SectionHeader({
  title,
  icon: Icon,
  description,
}: {
  title: string;
  icon: LucideIcon;
  description: string;
}) {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="items-center flex gap-2 sm:gap-3 mb-2 sm:mb-3">
        <Icon className="size-5 sm:size-6 lg:size-7 text-primary" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-bold">{title}</h2>
      </div>
      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">{description}</p>
    </div>
  );
}
