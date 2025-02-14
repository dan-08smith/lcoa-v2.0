import Link from "next/link";

export default function AnnouncementPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Upcoming Annual General Meeting (AGM)</h1>
        <p className="text-gray-500 text-sm mb-4">Posted on: 14-02-2025</p>
        <p className="text-gray-700 font-bold leading-relaxed mb-4">
          We are pleased to annouce that the Annual General Meeting (AGM) of the Largiemore 
          Chalet Owners Association will be held on Saturday, 20th April 2025, at 12:00 PM 
          in Chalet #10.
        </p>
        <p className="text-gray-700 leading-relaxed">
          All members are kindly requested to complete and submit the Membership Form by 
          10th April 2025 to ensure your membership is up-to-date and confirm your attendance 
          at the meeting. This form is essential for us to verify your contact details and 
          prepare for the AGM effectively.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The Membership Form can be downloaded <a href="/files/blank.pdf" 
          className="text-blue-600 hover:underline">here</a> and should be emailed to <a 
          href="mailto:largiemorecoa@gmail.com" className="text-blue-600 hover:underline">
            largiemorecoa@gmail.com</a>.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We look forward to seeing you at the AGM, where we&apos;ll discuss important matters and 
          collaborate to shape the future of our community.
        </p>

        <div className="mt-8">
          <Link href="/portal" className="inline-block px-6 py-3 bg-blue-600 text-white 
            font-semibold rounded hover:bg-blue-700">Back to Portal</Link>
        </div>
      </div>
    </section>
  );
}
