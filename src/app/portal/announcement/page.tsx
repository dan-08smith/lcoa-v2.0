import Link from "next/link";

export default function AnnouncementPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to our New Website!</h1>
        <p className="text-gray-500 text-sm mb-4">Posted on: 14-02-2025</p>
        <p className="text-gray-700 font-bold leading-relaxed mb-4">
          We are excited to announce the launch of our brand-new website! This platform
          has been designed with our members in mind, offering a modern interface and
          easy access to essential information.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Here, you’ll find the latest updates from the Largiemore Chalet Owners
          Association, important documents, and a members-only portal to manage your
          account. We hope this site enhances your experience and keeps you connected
          with the LCOA community.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Thank you for your support as we continue to improve our services. Feel free
          to explore the website and let us know if you have any feedback!
        </p>

        <div className="mt-8">
          <Link href="/portal" className="inline-block px-6 py-3 bg-blue-600 text-white 
            font-semibold rounded hover:bg-blue-700">Back to Portal</Link>
        </div>
      </div>
    </section>
  );
}
