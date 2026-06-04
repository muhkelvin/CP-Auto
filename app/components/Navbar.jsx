'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Vehicles', href: '/vehicles' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                        CP-Auto
                    </Link>
                    <div className="hidden md:flex gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors ${pathname === link.href ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Contact Sales
                    </Link>
                    <Link href="/contact" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                        Book Demo
                    </Link>
                </div>
            </div>
        </nav>
    );
}