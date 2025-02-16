import PortalNavbar from "@/app/components/portalnavbar";
import Footer from "@/app/components/footer";

export default function AnnouncementsPage() {
    return (
        <>
            <PortalNavbar
                leftTitle="All Announcements"
                returnHref="/portal"
                returnLabel="Back"
            />

            <Footer />
        </>
    )
}