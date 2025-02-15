import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LargeLinkCard from "../components/LargeLinkCard";
import { FileText, ExternalLink, Send } from "lucide-react";

export default function SupportPage() {
    return (
        <>
            <Navbar />

            <main className="container mx-auto px-4 py-8 flex-grow pt-[100px]">
                <section className="mb-8">
                <h2 className="text-2xl font-bold text-center mb-6">Support & Legal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <LargeLinkCard 
                        href="/files/blank.pdf"
                        icon={FileText}
                        title="Privacy Policy"
                        description="The privacy policy for this website (lcoa.d-smith.co.uk)."
                        action="Download"
                    />

                    <LargeLinkCard 
                        href="/files/blank.pdf"
                        icon={FileText}
                        title="Terms of Service"
                        description="The terms of service for this website (lcoa.d-smith.co.uk)."
                        action="Download"
                    />

                    <LargeLinkCard 
                        href="mailto:largiemorecoa@gmail.com"
                        icon={Send}
                        title="Contact Committee"
                        description="Contact the Largiemore Chalet Owners Association Committee."
                        action="Email"
                    />

                    <LargeLinkCard 
                        href="mailto:largiemorecoa@gmail.com"
                        icon={Send}
                        title="Contact Tech"
                        description="Technical Issue or Query? Contact Technical Support."
                        action="Email"
                    />

                    <LargeLinkCard 
                        href="https://lcoa.statuspage.io/"
                        icon={ExternalLink}
                        title="Status Page"
                        description="Something not working? Check the status of this website&apos;s servers."
                        target="_blank"
                        action="Visit"
                    />

                    <LargeLinkCard 
                        href="https://github.com/dan-08smith/lcoa-v2.0"
                        icon={ExternalLink}
                        title="Website Source"
                        description="View this website&apos;s GitHub Source Repository."
                        target="_blank"
                        action="Visit"
                    />
                </div>
                </section>
            </main>

            <Footer />
        </>
    );
}