"use-client";
import AuthCard from "@/app/components/AuthCard";
import Link from "next/link";

export default function RegistrationPage() {
    return (
        <AuthCard title="Register">
            <form>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Full Name</label>
                    <input type="text" placeholder="Enter your full name"
                        className="w-full px-4 py-2 border rounded"/>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input type="email" placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded"/>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <input type="password" placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded"/>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Confirm Password</label>
                    <input type="password" placeholder="Re-enter your password"
                        className="w-full px-4 py-2 border rounded"/>
                </div>
                <button type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >Register</button>
            </form>

            <p className="mt-4 text-center">
                Already have an account? <Link href="/auth"
                className="text-blue-600 hover:underline">Login here</Link>
            </p>
        </AuthCard>
    );
}