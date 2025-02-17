"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterConfirmPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`${process.env.NEXT_PUBLIC_AUTH_URL}`); 
    }, 5000); 

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <h1 className="text-2xl font-bold mb-4">Your account is being created</h1>
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p>Redirecting you to the login page...</p>
      </div>
    </div>
  );
}