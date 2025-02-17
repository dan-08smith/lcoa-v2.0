"use client";
import Link from "next/link";
import AuthCard from "./components/AuthCard";

export default function LoginPage() {
  return (
    <AuthCard title="Login">
      <form>
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
        <div className="mb-4 text-right ">
          <Link href="/reset-password" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>
        <button type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >Login</button>
      </form>

      <div className="mt-4 text-center">
        <p className="mt-2">Don&apos;t have an account? <Link href="/register"
          className="text-blue-600 hover:underline">Register here</Link></p>
        <p className="mt-5 text-gray-600">
          Want to bypass login? <Link href={`${process.env.NEXT_PUBLIC_PORTAL_URL}`} className="text-blue-600 hover:underline">
          Click here</Link></p>
      </div>

    </AuthCard>
  );
}