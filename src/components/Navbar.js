import Link from "next/link"

export default function Navbar({ link }) {
    
    
    return (
        <div className="flex gap-5 pb-10 font-bold text-2xl bg-gray-900 text-gray-100">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events</Link>
        </div>
    )
}