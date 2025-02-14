import { LucideIcon } from "lucide-react";

interface LinkCardProps {
  href: string;
  icon: LucideIcon; // Icon from Lucide
  label: string;
  target?: string; // Optional target (e.g., "_blank")
}

export default function LinkCard({ href, icon: Icon, label, target }: LinkCardProps) {
  return (
    <a
      href={href}
      target={target || "_self"}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="p-6 bg-blue-100 hover:bg-blue-200 rounded shadow flex items-center space-x-4"
    >
      <Icon className="w-8 h-8 text-blue-600" />
      <span className="text-lg font-semibold text-blue-600">{label}</span>
    </a>
  );
}
