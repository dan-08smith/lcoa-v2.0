"use client";
import AuthCard from "@/app/components/AuthCard";
import Link from "next/link";

export default function ResetPasswordPage() {
    return (
        <AuthCard title="Reset Your Password">
            <form>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input type="email" placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded"/>
                </div>
                <button type="submit" 
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >Reset Password</button>
            </form>

            <p className="mt-4 text-center">
                Remembered your password? <Link href="/auth"
                className="text-blue-600 hover:underline">Login here</Link>
            </p>
        </AuthCard>
    );
}