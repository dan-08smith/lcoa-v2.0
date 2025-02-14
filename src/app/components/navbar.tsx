export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <p className="text-xl font-semibold">Largiemore Chalet Owners Association</p>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#hero" className="hover:text-blue-500">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-blue-500">About</a>
                    </li>
                    <li>
                        <a href="#files" className="hover:text-blue-500">Files</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-500">Contact</a>
                    </li>
                    <li>
                        <a href="/auth" 
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >Portal</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}