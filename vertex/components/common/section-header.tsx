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
    <div className="mb-8">
      <div className="items-center flex gap-2 mb-3">
        <Icon className="size-6 text-primary" />
        <h2 className="text-3xl text-primary font-bold">{title}</h2>
      </div>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}
