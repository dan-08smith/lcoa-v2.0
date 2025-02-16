import Footer from "@/app/components/footer";
import PortalNavbar from "@/app/components/portalnavbar";
import Greeting from "@/app/components/Greeting";
import Banner from "@/app/components/Banner";

export default function AdminPortalPage() {

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <PortalNavbar 
                leftTitle={<Greeting name='John Doe'/>}
                returnHref="/"
                returnLabel="Home"
            />

            <Banner message="You are currently accessing the Admin Portal."/>

            <Footer />
        </div>
    );
}