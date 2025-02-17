import PortalNavbar from "@/app/components/portalnav";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/footer";

export default function AccountManagerPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <PortalNavbar leftTitle="Account Manager" />
            
            <Banner message="This page is not compatible on mobile devices. Please, use a desktop browser for an optimal experience." />
            
            <main className="container mx-auto px-4 py-6 flex-grow">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Users</h2>
                    <div className="p-4 bg-white shadow rounded-lg">
                        <p className="text-gray-600">This is a placeholder page for the Account Manager.</p>
                        <div className="mt-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add New User</button>
                        </div>
                    </div>
                </section>
                <section>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Existing Users</h3>
                    <div className="p-4 bg-white shadow rounded-lg">
                        <p className="text-gray-500">No users available.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}