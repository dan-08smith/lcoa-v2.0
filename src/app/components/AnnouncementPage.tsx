import React from "react";

interface AnnouncementPageProps {
  title: string;
  datePublished: string;
  description: string; 
  details: React.ReactNode; // Full details about the activity
}

export default function AnnouncementPage({ title, datePublished, description, details }: AnnouncementPageProps) {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <a href="/" className="text-blue-500 hover:underline text-sm">&larr; Back to Portal</a>
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500 font-semibold">Published on {datePublished}</p>
      <p className="text-lg text-gray-600">{description}</p>
      <div className="text-gray-700 leading-relaxed">
        {details}
      </div>
    </div>
  );
}