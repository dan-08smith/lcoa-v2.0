import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-black-600">
          <Link href={`${process.env.NEXT_PUBLIC_MAIN_URL}/support-and-legal`}
            className="hover:text-blue-600 "
          >Support & Legal</Link>
          {" "}•{" "}
          <Link href={`${process.env.NEXT_PUBLIC_MAIN_URL}`} 
            className="hover:text-blue-600 "
          >Copyright &copy; {new Date().getFullYear()} Largiemore Chalet Owners Association (LCOA)
          </Link>
        </p>
      </div>
    </footer>
  );
}