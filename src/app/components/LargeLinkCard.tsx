import { LucideIcon } from "lucide-react";

interface LargeLinkCardProps {
  href: string;
  icon: LucideIcon; // Icon from Lucide
  title: string;
  description: string;
  target?: string; // Optional target (e.g., "_blank")
  action: string; // Single action, freeform text
}

export default function LargeLinkCard({ href, icon: Icon, title, description, target, action }: LargeLinkCardProps) {
  return (
    <a
      href={href}
      target={target || "_self"}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="hover:shadow-lg transition-shadow duration-300 rounded-2xl border border-gray-200 flex flex-col items-start p-6 space-y-4"
    >
      <div className="flex items-center space-x-4">
        <Icon className="w-6 h-6 text-gray-400" />
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
      <button
        className="mt-4 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {action}
      </button>
    </a>
  );
}