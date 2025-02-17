"use client";
import { useRouter } from "next/navigation";
import RegisterCard from "@/app/components/RegisterAuthCard";

export default function RegistrationPage2() {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push("/register/page-3")
    }
    
    return (
        <RegisterCard title="Register" step={2}>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Chalet Number</label>
                <input type="text" placeholder="Enter your chalet number" className="w-full px-4 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Phone Number</label>
                <input type="text" placeholder="Enter your phone number" className="w-full px-4 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Primary Address</label>
                <input type="text" placeholder="Enter your primary address" className="w-full px-4 py-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Continue
            </button>
            </form>
        </RegisterCard>
    );
}