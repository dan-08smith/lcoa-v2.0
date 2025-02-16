import Footer from "../../components/footer";
import PortalNavbar from "../../components/portalnav";
import Greeting from "../../components/Greeting";
import Banner from "../../components/Banner";

export default function AdminPortalPage() {

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <PortalNavbar 
                leftTitle={<Greeting name='John Doe'/>}
            />

            <Banner message="You are currently accessing the Admin Portal."/>

            <Footer />
        </div>
    );
}