import PortalNavbar from "@/app/components/portalnav";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/footer";

export default function UsersManagerPage() {
    return (
        <>
            <PortalNavbar 
                leftTitle="Users Manager"
            />

            <Banner message="This page is not compatible on mobile devices. Please, use a desktop browser for an optimal experience."/>
            
            <Footer />
        </>
    )
}