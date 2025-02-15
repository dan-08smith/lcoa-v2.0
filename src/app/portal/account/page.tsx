"use client";
import Link from "next/link";
import Footer from "@/app/components/footer";
import PortalNavbar from "@/app/components/portalnavbar";
import LinkCard from "@/app/components/LinkCard";
import { UserPen, SquareAsterisk, ShieldCheck } from "lucide-react";

export default function AccountPage() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <PortalNavbar
        leftTitle={'Your Account'}
        returnHref="/portal"
        returnLabel="Portal"
      />

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="bg-white shadow rounded p-6 mb-8 relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold mb-2">Account Details</h2>
            <a href="/portal/account/update-details"
              className="absolute top-6 right-6"
              aria-label="Update Account Details"
            ><UserPen className="w-8 h-8 align-right text-blue-600 mr-4" />
            </a>
          </div>
          
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
              <span className="font-medium">Membership: <span className="bg-green-100 text-green-800 text-sm 
              font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">Member</span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm 
              dark:bg-blue-900 dark:text-blue-300">Chalet Owner</span><span className="bg-pink-100 text-pink-800 
              text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-pink-900 dark:text-pink-300">
              Committee Member</span>
              </span>
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded p-6 mb-8">
          <LinkCard
            href="/portal/account/change-password"
            icon={SquareAsterisk}
            label="Change Your Password"
          />
        </section>

        <section className="bg-white shadow rounded p-6 mb-8">
          <LinkCard
            href="/portal/account/2fa/enable"
            icon={ShieldCheck}
            label="Enable 2 Factor Authentication"
          />
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