import React from "react";
import Link from "next/link";

interface ActivityPageProps {
  title: string;
  description: string;
  image: string; // URL for the image
  details: string; // Full details about the activity
}

export default function ActivityPage({ title, description, image, details }: ActivityPageProps) {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <Link href="/#things-to-do" className="text-blue-500 hover:underline text-sm">&larr; Back to Things to Do</Link>
      <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-lg text-gray-600">{description}</p>
      <div className="text-gray-700 leading-relaxed">
        {details}
      </div>
    </div>
  );
}