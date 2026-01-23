import { LucideIcon } from "lucide-react";
export default function EmptyState({
  message,
  icon: Icon,
}: {
  message: string;
  icon: LucideIcon;
}) {
  return (
    <div className="empty-state flex flex-col items-center justify-center">
      {Icon && <Icon className="size-12 text-muted-foreground/50 mb-6" />}

      <p className="text-xl font-medium">{message}</p>
    </div>
  );
}
