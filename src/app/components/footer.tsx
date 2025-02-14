import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          <a href="/files/blank.pdf" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >Privacy Policy</a>
          {" "}•{" "}
          <a href="/files/blank.pdf" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >Terms of Service</a>
          {" "}•{" "}
          &copy; 2025 Largiemore Chalet Owners Association (LCOA)
          {" "}•{" "}
          <a href="https://github.com/dan-08smith/lcoa-v2.0" target="_blank"
            rel="noopener noreferrer" className="text-blue-600 hover:underline 
            flex-inline items-center inline-block"><ExternalLink className="w-4 h-4 mr-1 
            inline-block" />Website Source 
          </a>
        </p>
      </div>
    </footer>
  );
}