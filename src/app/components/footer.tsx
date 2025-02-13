export default function Footer() {
    return (
        <footer className="bg-gray-100 py-6">
            <div className="container mx-auto px-4 text-center">
                <a href="/files/blank.pdf" target="_blank" rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >Privacy Policy</a>
                <p className="text-gray-600 mt-2">
                    &copy; {new Date().getFullYear()} Largiemore Chalet Owners Association
                </p>
            </div>
        </footer>
    );
}