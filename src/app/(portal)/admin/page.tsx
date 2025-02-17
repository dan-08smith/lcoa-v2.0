import Banner from "@/app/components/Banner";
import Footer from "@/app/components/footer";
import Greeting from "@/app/components/Greeting";
import PortalNavbar from "@/app/components/portalnav";
import { FileText, Users } from "lucide-react";
import LinkCard from "@/app/components/LinkCard";

export default function AdminPortalPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <PortalNavbar leftTitle={<Greeting name='John Doe' />} />
            
            <Banner message="You are currently accessing the Admin Portal." />
            
            <main className="container mx-auto px-4 py-6 flex-grow">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <LinkCard href="/admin/announcements" icon={FileText} label="Manage Announcements" />
                        <LinkCard href="/admin/accounts" icon={Users} label="Manage Users" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
