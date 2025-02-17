import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-bold text-blue-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-gray-500 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-10">
          <Link
            href={`${process.env.NEXT_PUBLIC_MAIN_URL}`}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-center space-x-8">
          {/* Status Page Link */}
          <Link
            href="https://lcoa.statuspage.io/"
            className="text-sm font-semibold text-black-600 hover:text-blue-600"
          >
            Status Page <span aria-hidden="true">&rarr;</span>
          </Link>

          <Link
            href={`${process.env.NEXT_PUBLIC_MAIN_URL}/support-and-legal`}
            className="text-sm font-semibold text-black-600 hover:text-blue-600"
          >
            Support & Legal <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
