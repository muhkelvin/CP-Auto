"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#1A1A1A]/95 backdrop-blur border-b border-[#E6E6E6]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        LUX<span className="text-[#D4AF37]">AUTO</span>
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            About
                        </Link>
                        <Link
                            href="/vehicles"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Models
                        </Link>
                        <Link
                            href="/services"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    <a
                        href="https://api.whatsapp.com/send?phone=+6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                    >
                        Configure Yours
                    </a>


                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#1A1A1A]/95 border-t border-[#E6E6E6]/10">
                    <div className="flex flex-col space-y-4 py-4 px-6">
                        <Link
                            href="/"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/vehicles"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Models
                        </Link>
                        <Link
                            href="/services"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-[#D4AF37] transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <a
                            href="https://api.whatsapp.com/send?phone=+6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                        >
                            Configure Yours
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
}
