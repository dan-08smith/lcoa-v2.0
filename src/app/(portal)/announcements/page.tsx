"use client";
import { useState } from "react";
import Footer from "@/app/components/footer";
import PortalNavbar from "@/app/components/portalnav";
import Link from "next/link";

const announcements = [
    {
        title: "Upcoming Annual General Meeting (AGM)",
        date: "14th February 2025",
        href: "/announcements/2025/upcoming-annual-general-meeting",
        description: "Join us for the Largiemore Chalet Owners Association AGM on 20th April 2025 at 12:00 PM in Chalet #10."
    },
    {
        title: "Welcome to our New Website!",
        date: "13th February 2025",
        href: "/announcements/2025/welcome-to-our-new-website",
        description: "We are excited to launch our new website, designed to provide a better experience for our members."
    },
    // Add more announcements here
];

export default function AllAnnouncementsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAnnouncements = announcements.filter(announcement =>
        announcement.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <PortalNavbar leftTitle="All Announcements" />

            <main className="container mx-auto px-4 py-8 flex-grow">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Posted Announcements</h2>
                
                <input
                    type="text"
                    placeholder="Search announcements..."
                    className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAnnouncements.map((announcement, index) => (
                        <div key={index} className="p-5 bg-white shadow rounded-lg hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800">{announcement.title}</h3>
                            <p className="text-gray-500 text-sm mb-2">{announcement.date}</p>
                            <p className="text-gray-600">{announcement.description}</p>
                            <Link href={announcement.href}>
                                <span className="text-blue-600 hover:underline mt-3 inline-block">Read More</span>
                            </Link>
                        </div>
                    ))}
                </div>

                {filteredAnnouncements.length === 0 && (
                    <p className="text-gray-500 text-center mt-6">No announcements found.</p>
                )}
            </main>

            <Footer />
        </div>
    );
}