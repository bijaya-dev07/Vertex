import { LucideIcon } from "lucide-react";

export default function StatsCard({
  icon: Icon,
  value,
  label,
  hasBorder,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}) {
  return (
    <div
      className={hasBorder ? "sm:border-r sm:border-muted-foreground/20 sm:pr-4" : ""}
    >
      <div className="flex items-center justify-center gap-3">
        <Icon className="size-6 sm:size-8 text-primary/70" />
        <p className="text-2xl sm:text-3xl font-bold">{value}</p>
      </div>
      <p className="text-lg text-muted-foreground">{label}</p>
    </div>
  );
}
