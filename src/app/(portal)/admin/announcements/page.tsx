import Banner from "@/app/components/Banner";
import Footer from "@/app/components/footer";
import PortalNavbar from "@/app/components/portalnav";

export default function AnnouncementsManagerPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <PortalNavbar leftTitle="Announcements Manager" />
            
            <Banner message="This page is not compatible on mobile devices. Please, use a desktop browser for an optimal experience." />
            
            <main className="container mx-auto px-4 py-6 flex-grow">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Announcements</h2>
                    <div className="p-4 bg-white shadow rounded-lg">
                        <p className="text-gray-600">This is a placeholder page for the Announcements Manager.</p>
                        <div className="mt-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Create New Announcement</button>
                        </div>
                    </div>
                </section>
                <section>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Existing Announcements</h3>
                    <div className="p-4 bg-white shadow rounded-lg">
                        <p className="text-gray-500">No announcements available.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
