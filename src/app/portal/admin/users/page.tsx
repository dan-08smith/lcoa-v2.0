import PortalNavbar from "@/app/components/portalnavbar";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/footer";

export default function AdminUsersPage() {
    return (
        <>
            <PortalNavbar 
                leftTitle="Users [Admin]"
                returnHref="/portal"
                returnLabel="Portal"
            />

            <Banner message="This page is not compatible on mobile devices. Please, use a desktop browser for an optimal experience."/>
            
            <Footer />
        </>
    )
}