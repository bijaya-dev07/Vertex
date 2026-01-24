import { LucideIcon } from "lucide-react";
export default function EmptyState({
  message,
  icon: Icon,
}: {
  message: string;
  icon: LucideIcon;
}) {
  return (
    <div className="empty-state flex flex-col items-center justify-center max-w-7xl mx-auto">
      {Icon && <Icon className="size-8 sm:size-10 lg:size-12 text-muted-foreground/50 mb-4 sm:mb-6" />}

      <p className="text-base sm:text-lg lg:text-xl font-medium text-center">{message}</p>
    </div>
  );
}
