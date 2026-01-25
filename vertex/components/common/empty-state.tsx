import { LucideIcon } from "lucide-react";
export default function EmptyState({
  message,
  icon: Icon,
}: {
  message: string;
  icon: LucideIcon;
}) {
  return (
    <div className="empty-state flex flex-col items-center justify-center max-w-7xl mx-auto bg-[#0a2012]/40 border-[#2d5a3d]/60 text-[#a3b899] backdrop-blur-sm">
      {Icon && <Icon className="size-8 sm:size-10 lg:size-12 text-[#4ade80]/70 mb-4 sm:mb-6" />}

      <p className="text-base sm:text-lg lg:text-xl font-medium text-center text-slate-50">{message}</p>
    </div>
  );
}
