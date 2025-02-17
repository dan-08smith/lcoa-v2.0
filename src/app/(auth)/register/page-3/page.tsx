"use client";
import { useRouter } from "next/navigation";
import RegisterCard from "@/app/components/RegisterAuthCard";

export default function RegistrationPage3() {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push("/register/confirm")
    }
    
    return (
        <RegisterCard title="Register" step={3}>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Password</label>
                <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Confirm Password</label>
                <input type="password" placeholder="Re-enter your password" className="w-full px-4 py-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Register
            </button>
            </form>
        </RegisterCard>
    );
}