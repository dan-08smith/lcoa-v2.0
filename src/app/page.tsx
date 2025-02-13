import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to LCOA</h1>
      <p>Your one-stop portal for the Largiemore Chalet Owners Association.</p>
      <Link href="/auth/login">
        <button>Portal</button>
      </Link>
    </div>
  );
}