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
      className={`p-6 flex flex-col items-center justify-center transition-all hover:bg-[#1a4d2e]/10 ${
        hasBorder ? "lg:border-r border-[#1a4d2e]/50" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        {/* Glow effect on the icon */}
        <Icon className="size-6 sm:size-8 text-[#4ade80] drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
        <p className="text-2xl sm:text-4xl font-bold tracking-tight text-white">{value}</p>
      </div>
      <p className="text-sm sm:text-base text-[#a3b899] font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}