"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RegisterCard from "@/app/components/RegisterAuthCard";

export default function RegistrationPage1() {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push("/register/page-2")
    }
    
    return (
        <RegisterCard title="Register" step={1}>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block mb-1 font-medium">First Name</label>
                <input type="text" placeholder="Enter your first name" className="w-full px-4 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Last Name</label>
                <input type="text" placeholder="Enter your last name" className="w-full px-4 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Continue
            </button>
            </form>
            <p className="mt-4 text-center">
            Already have an account? <Link href="/" className="text-blue-600 hover:underline">Login here</Link>
            </p>
        </RegisterCard>
    );
}