import Footer from "../components/footer";
import LinkCard from "../components/LinkCard";
import { UserCog, Folders, Newspaper } from "lucide-react";
import PortalNavbar from "../components/portalnavbar";
import Greeting from "../components/Greeting";

export default function PortalPage() {

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <PortalNavbar 
                leftTitle={<Greeting name='John Doe'/>}
                returnHref="/"
                returnLabel="Home"
            />

            <main className="container mx-auto px-4 py-8 flex-grow">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <LinkCard
                            href="/portal/account"
                            icon={UserCog}
                            label="Manage Account"
                        />
                        <LinkCard
                            href="/portal/files"
                            icon={Folders}
                            label="View Files"
                        />
                        <LinkCard
                            href="/portal/announcements"
                            icon={Newspaper}
                            label="LCOA Announcements"
                        />
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Latest Announcements</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-white shadow rounded">
                            <h3 className="text-xl font-semibold">Upcoming Annual General Meeting (AGM)</h3>
                            <p className="text-gray-600 mt-2">
                                We are pleased to annouce that the Annual General Meeting (AGM) of the Largiemore 
                                Chalet Owners Association will be held on Saturday, 20th April 2025, at 12:00 PM 
                                in Chalet #10.
                            </p>
                            <a href="/portal/announcements/2025/upcoming-annual-general-meeting" className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
                        </div>
                        <div className="p-4 bg-white shadow rounded">
                            <h3 className="text-xl font-semibold">Welcome to our New Website!</h3>
                            <p className="text-gray-600 mt-2">
                                We are excited to announce the launch of our brand-new website! This platform
                                has been designed with our members in mind, offering a modern interface and
                                easy access to essential information.
                            </p>
                            <a href="/portal/announcements/2025/welcome-to-our-new-website" className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}