import Link from "next/link";

export default function Portal() {
    return (
        <div>
            <h1>Member Portal</h1>
            <p>Welcome to your member dashboard.</p>
            <Link href="/portal/account">
                <button>Your Account</button>
            </Link>
        </div>
    );
}