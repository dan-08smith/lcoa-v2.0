import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FileText, ExternalLink, Send } from "lucide-react";

export default function SupportPage() {
    return (
        <>
            <Navbar />

            <main className="container mx-auto px-4 py-8 flex-grow pt-[100px]">
                <section className="mb-8">
                <h2 className="text-2xl font-bold text-center mb-6">Support & Legal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-white shadow rounded flex flex-col">
                    <div className="flex items-center mb-4">
                        <FileText className="w-8 h-8 text-blue-600 mr-4" />
                        <h3 className="text-lg font-bold">Privacy Policy</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        The privacy policy for this website (lcoa.d-smith.co.uk).
                    </p>
                    <a href="/files/blank.pdf" download
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
                    >Download</a>
                    </div>

                    <div className="p-4 bg-white shadow rounded flex flex-col">
                    <div className="flex items-center mb-4">
                        <FileText className="w-8 h-8 text-blue-600 mr-4" />
                        <h3 className="text-lg font-bold">Terms of Service</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                       The terms of service for this website (lcoa.d-smith.co.uk).
                    </p>
                    <a href="/files/blank.pdf" download
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
                    >Download</a>
                    </div>

                    <div className="p-4 bg-white shadow rounded flex flex-col">
                    <div className="flex items-center mb-4">
                        <ExternalLink className="w-8 h-8 text-blue-600 mr-4" />
                        <h3 className="text-lg font-bold">Status Page</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Something not working? Check the status of this website&apos;s servers.
                    </p>
                    <a href="https://lcoa.statuspage.io/" target="_blank" rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
                    >Visit</a>
                    </div>

                    <div className="p-4 bg-white shadow rounded flex flex-col">
                    <div className="flex items-center mb-4">
                        <Send className="w-8 h-8 text-blue-600 mr-4" />
                        <h3 className="text-lg font-bold">Contact Committee</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Contact the Largiemore Chalet Owners Association Committee.
                    </p>
                    <a href="mailto:largiemorecoa@gmail.com"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
                    >Email</a>
                    </div>

                    <div className="p-4 bg-white shadow rounded flex flex-col">
                    <div className="flex items-center mb-4">
                        <Send className="w-8 h-8 text-blue-600 mr-4" />
                        <h3 className="text-lg font-bold">Contact Tech</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Technical Issue or Query? Contact Technical Support.
                    </p>
                    <a href="mailto:largiemorecoa@gmail.com"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
                    >Email</a>
                    </div>

                    <div className="p-4 bg-white shadow rounded flex flex-col">
                    <div className="flex items-center mb-4">
                        <ExternalLink className="w-8 h-8 text-blue-600 mr-4" />
                        <h3 className="text-lg font-bold">Website Source</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        View this website&apos;s GitHub Source Repository.
                    </p>
                    <a href="https://github.com/dan-08smith/lcoa-v2.0" target="_blank" rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
                    >Visit</a>
                    </div>
                </div>
                </section>
            </main>

            <Footer />
        </>
    );
}