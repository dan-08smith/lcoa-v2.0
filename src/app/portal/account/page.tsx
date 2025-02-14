"use client";
import Link from "next/link";
import Footer from "@/app/components/footer";
import PortalNavbar from "@/app/components/portalnavbar";

export default function AccountPage() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <PortalNavbar
        leftTitle={'Your Account'}
        returnHref="/portal"
        returnLabel="Return to Portal"
      />

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="bg-white shadow rounded p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Account Details</h2>
          <div className="space-y-4">
            <div>
              <span className="font-medium">Full Name: </span>
              John Doe
            </div>
            <div>
              <span className="font-medium">Email: </span>
              john.doe@example.com
            </div>
            <div>
              <span className="font-medium">Chalet Number: </span>
              22
            </div>
            <div>
              <span className="font-medium">Phone Number: </span>
              07436 035784
            </div>
            <div>
              <span className="font-medium">Primary Address: </span>
              18 Park Avenue, Glasgow, GA1 5GD
            </div>
            <div>
              <span className="font-medium">Membership: <span className="bg-blue-100 text-blue-800 
                text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                Chalet Owner</span><span className="bg-pink-100 text-pink-800 text-sm font-medium me-2 
                px-2.5 py-0.5 rounded-sm dark:bg-pink-900 dark:text-pink-300">Committee Member</span>
              </span>
            </div>
          </div>
        </section>

        

        <section className="bg-white shadow rounded p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Update Your Details</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Full Name</label>
              <input type="text" defaultValue="John Doe"
                className="w-full px-4 py-2 border rounded"/>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Primary Address</label>
              <input type="text" defaultValue="18 Park Avenue, Glasgow, GA1 5GD"
                className="w-full px-4 py-2 border rounded"/>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Phone Number</label>
              <input type="tel" defaultValue="07436 035784"
                className="w-full px-4 py-2 border rounded"/>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" defaultValue="john.doe@example.com"
                className="w-full px-4 py-2 border rounded"/>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Password</label>
              <input type="password" defaultValue="loljkhaha"
                className="w-full px-4 py-2 border rounded"/>
            </div>
            <button type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >Save Details</button>
          </form>
        </section>

        <section className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Delete Your Account</h2>
          <p className="mb-2">Click the button below to delete your account and all data stored by LCOA.</p>
          <p className="italic font-bold mb-5">Warning: Please note, this action cannot be undone.</p>
          <Link href="/auth/delete-account"
            className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 font-bold rounded"
          >Delete Account</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}