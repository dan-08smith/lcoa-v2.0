import PortalNavbar from "../components/portalnavbar";
import Footer from "../components/footer";

export default function PortalPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <PortalNavbar />

            <main className="container mx-auto px-4 py-8 flex-grow">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <a href="/portal/account" 
                            className="p-4 bg-blue-100 hover:bg-blue-200 rounded shadow flex items-center"
                        >Manage Account</a>
                        <a href="/files/documents" 
                            className="p-4 bg-blue-100 hover:bg-blue-200 rounded shadow flex items-center"
                        >View Files??</a>
                        <a href="/portal/settings" 
                            className="p-4 bg-blue-100 hover:bg-blue-200 rounded shadow flex items-center"
                        >Weather Info??</a>
                    </div>
                </section>

                <section>
                    <p>Faux Padding</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Recent Announcements</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-white shadow rounded">
                            <h3 className="text-xl font-semibold">Welcome to our New Website!</h3>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet sem varius finibus 
                                malesuada vel pretium cras eleifend. Platea habitasse integer ullamcorper sociosqu 
                                pellentesque tempus.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}