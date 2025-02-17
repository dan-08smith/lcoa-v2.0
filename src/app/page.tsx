import { UserCog, Folders, Newspaper } from "lucide-react";
import Footer from "@/app/components/footer";
import Greeting from "@/app/components/Greeting";
import LinkCard from "@/app/components/LinkCard";
import PortalNavbar from "@/app/components/portalnav";

export default function PortalPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <PortalNavbar leftTitle={<Greeting name='John Doe' />} />

            <main className="container mx-auto px-4 py-6 flex-grow">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <LinkCard href="/account" icon={UserCog} label="Manage Account" />
                        <LinkCard href="/files" icon={Folders} label="View Files" />
                        <LinkCard href="/announcements" icon={Newspaper} label="LCOA Announcements" />
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Announcements</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                            <h3 className="text-xl font-semibold text-gray-900">Upcoming Annual General Meeting (AGM)</h3>
                            <p className="text-gray-600 mt-2">
                                The Annual General Meeting (AGM) of the Largiemore Chalet Owners Association
                                will be held on Saturday, 20th April 2025, at 12:00 PM in Chalet #10.
                            </p>
                            <a href="/announcements/2025/upcoming-annual-general-meeting" 
                               className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
                        </div>
                        <div className="p-4 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                            <h3 className="text-xl font-semibold text-gray-900">Welcome to our New Website!</h3>
                            <p className="text-gray-600 mt-2">
                                We are thrilled to launch our brand-new website! Designed with our members in mind,
                                it provides a modern interface and easy access to essential information.
                            </p>
                            <a href="/announcements/2025/welcome-to-our-new-website" 
                               className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
