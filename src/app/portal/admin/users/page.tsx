import PortalNavbar from "../../../components/PortalNavbar";
import Banner from "../../../components/Banner";
import Footer from "../../../components/footer";

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