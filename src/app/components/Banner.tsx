import React from "react";

interface BannerProps {
  message: string; // Text to display in the banner
  backgroundColor?: string; // Optional background color for the banner
  textColor?: string; // Optional text color for the banner
}

export default function Banner({ message, backgroundColor = "bg-gray-500", textColor = "text-white" }: BannerProps) {
  return (
    <div className={`w-full py-4 px-6 text-center ${backgroundColor} ${textColor}`}>
      <p className="text-sl font-medium">{message}</p>
    </div>
  );
}
