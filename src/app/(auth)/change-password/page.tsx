import AuthCard from "@/app/components/AuthCard";

export default function ChangePassword() {

  return (
    <>
      <AuthCard title="Change Your Password">
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium">New Password</label>
            <input type="password" placeholder="Enter your new password"
              className="w-full px-4 py-2 border rounded"/>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input type="password" placeholder="Confirm your new password"
              className="w-full px-4 py-2 border rounded"/>
          </div>
          <button type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >Change Password</button>
        </form>
      </AuthCard>
    </>
  );
}