"use client";

export default function PortalNavbar() {
    return (
        <nav className="bg-blue-600 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Welcome, "User"!</h1>

                <div className="space-x-4">
                    <a href="/" className="text-white hover:underline">Back to Home</a>
                    <button
                        onClick={() => alert("Logging out...")} // Replace with actual logout logic
                        className="text-white py-2 px-4 rounded hover:bg-red-700"
                    >LogOut</button>
                </div>
            </div>
        </nav>
    );
}