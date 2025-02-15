import React from "react";

interface PageCardProps {
  title: string;
  description: string;
  image: string; // URL for the image
  href: string; // Link to redirect on click
}

export default function PageCard({ title, description, image, href }: PageCardProps) {
  return (
    <a
      href={href}
      className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full h-48 bg-gray-200" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </a>
  );
}