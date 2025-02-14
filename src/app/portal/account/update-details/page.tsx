"use client";
import Link from "next/link";
import Footer from "@/app/components/footer";
import PortalNavbar from "@/app/components/portalnavbar";
import { UserPen } from "lucide-react";

export default function UpdateAccountDetails() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <PortalNavbar
        leftTitle={'Your Details'}
        returnHref="/portal/account"
        returnLabel="Return to Account"
      />

      <main className="container mx-auto px-4 py-8 flex-grow"> 
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
            <p className="font-semibold pb-4">Please note, the "Chalet Number" and "Membership" 
              fields cannot be edited, contact <a href="mailto:largiemorecoa@gmail.com "
              className="hover:text-blue-600">largiemorecoa@gmail.com </a> 
              if you feel they are wrong and wish to change it.</p>
            <button type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >Save Details</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}