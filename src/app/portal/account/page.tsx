"use client";

import Footer from "@/app/components/footer";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">My Account</h1>
          <p className="mt-2">Manage your account information and settings here.</p>
        </div>
      </header>

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
              <span className="font-medium">Member Since: </span>
              January 2023
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Edit Account</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Full Name</label>
              <input type="text" defaultValue="John Doe"
                className="w-full px-4 py-2 border rounded"/>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" defaultValue="john.doe@example.com"
                className="w-full px-4 py-2 border rounded"/>
            </div>
            <button type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >Save Changes</button>
          </form>
        </section>

        <section className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Logout</h2>
          <p className="mb-4">Click the button below to log out of your account.</p>
          <button
            onClick={() => alert("Logging out...")} // Replace with actual logout logic
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >Logout</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}