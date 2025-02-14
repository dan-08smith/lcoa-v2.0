import PortalNavbar from "@/app/components/portalnavbar";
import Footer from "@/app/components/footer";
import { FileText } from "lucide-react";

export default function FilesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <PortalNavbar
        leftTitle="Your Private Files"
        returnHref="/portal/"
        returnLabel="Return to Portal"
      />

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Available Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white shadow rounded flex flex-col">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-lg font-bold">Committee Meeting Minutes</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The minutes from the last committee meeting held on January 15th, 2025.
              </p>
              <a href="/files/blank.pdf" download
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
              >Download</a>
            </div>

            <div className="p-4 bg-white shadow rounded flex flex-col">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-lg font-bold">Budget Report 2024</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Detailed financial report outlining the budget for 2024.
              </p>
              <a href="/files/blank.pdf" download
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
              >Download</a>
            </div>

            <div className="p-4 bg-white shadow rounded flex flex-col">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-lg font-bold">Code of Conduct</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Official code of conduct for committee members and the association.
              </p>
              <a href="/files/blank.pdf" download
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
              >Download</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
