import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-black-600">
          &copy; {new Date().getFullYear()} Largiemore Chalet Owners Association (LCOA)
          {" "}•{" "}
          <Link href="/support-and-legal" 
            className="text-blue-600 hover:underline"
          >Support & Legal</Link>
        </p>
      </div>
    </footer>
  );
}