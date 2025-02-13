export default function AuthCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded">
                <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
                {children}
            </div>
        </div>
    );
}