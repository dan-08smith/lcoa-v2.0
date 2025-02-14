export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-black-600">
          <a href="/files/blank.pdf" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >Privacy Policy</a>
          {" "}•{" "}
          <a href="/files/blank.pdf" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >Terms of Service</a>
          {" "}•{" "}
          &copy; {new Date().getFullYear()} Largiemore Chalet Owners Association (LCOA)
          {" "}•{" "}
          <a href="https://lcoa.statuspage.io/" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >Status Page</a>
          {" "}•{" "}
          <a href="https://github.com/dan-08smith/lcoa-v2.0" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >Website Source</a>
        </p>
      </div>
    </footer>
  );
}