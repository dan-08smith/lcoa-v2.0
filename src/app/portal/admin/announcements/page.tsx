import PortalNavbar from "@/app/components/PortalNavbar";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/footer";

export default function AnnouncementsManagerPage() {
    return (
        <>
            <PortalNavbar 
                leftTitle="Announcements Manager"
            />

            <Banner message="This page is not compatible on mobile devices. Please, use a desktop browser for an optimal experience."/>

            <Footer />
        </>
    )
}