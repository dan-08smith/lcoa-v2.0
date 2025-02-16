import AuthCard from "@/app/components/AuthCard";

export default function Verify2FA() {

  return (
    <>
      <AuthCard title="Verify Your 2FA ">
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Your Code</label>
            <input type="text" placeholder="Enter the generated code"
              className="w-full px-4 py-2 border rounded"/>
          </div>
          <button type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >Verify Code</button>
        </form>
      </AuthCard>
    </>
  );
}