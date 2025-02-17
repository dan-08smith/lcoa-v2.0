"use client";
import { useRouter } from "next/navigation";
import AuthCard from "@/app/components/AuthCard";
import Link from "next/link";

export default function ResetPasswordConfirmPage() {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push("/")
    }
    
    return (
        <AuthCard title="Check Your Email">
            <form onSubmit={handleSubmit}>
                <div className="mb-4 text-center">
                    <p>Please check your registered email account for a password reset link.</p>
                </div>
                <button type="submit" 
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >Return to Login</button>
            </form>

            <p className="mt-4 text-center">
                Haven't received a link? <Link href="/reset-password"
                className="text-blue-600 hover:underline">Try again here</Link>
            </p>
        </AuthCard>
    );
}