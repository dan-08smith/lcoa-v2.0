import Link from "next/link";

interface PortalNavbarProps {
  leftTitle: string; 
  returnHref: string; 
  returnLabel: string; 
}

export default function PortalNavbar({ leftTitle, returnHref, returnLabel }: PortalNavbarProps) {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow">
      <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
        <h1 className="text-xl font-bold">{leftTitle}</h1>

        <div className="flex space-x-4">
          <Link href={returnHref}
            className="px-4 py-2 hover:underline text-white font-semibold rounded"
          >{returnLabel}</Link>

          <Link href="/auth/logout"
            className="px-4 py-2 hover:bg-red-600 text-white font-semibold rounded"
          >Log Out</Link>
        </div>
      </div>
    </nav>
  );
}