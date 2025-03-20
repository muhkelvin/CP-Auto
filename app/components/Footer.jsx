import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] border-t border-[#E6E6E6]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>About Us</h3>
                        <p className="text-sm text-[#E6E6E6]/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Redefining luxury mobility with cutting-edge technology and timeless design.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Discover</h3>
                        <div className="space-y-2">
                            <Link href="/vehicles" className="block text-sm hover:text-[#D4AF37] transition-colors duration-300">Models</Link>
                            <Link href="/services" className="block text-sm hover:text-[#D4AF37] transition-colors duration-300">Services</Link>
                            <Link href="/about" className="block text-sm hover:text-[#D4AF37] transition-colors duration-300">Company</Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact</h3>
                        <p className="text-sm text-[#E6E6E6]/80 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>123 Luxury Avenue</p>
                        <p className="text-sm text-[#E6E6E6]/80 mb-2">contact@luxauto.com</p>
                        <p className="text-sm text-[#E6E6E6]/80">+1 234 567 890</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-[#E6E6E6]/10 text-center text-sm text-[#E6E6E6]/60">
                    © {new Date().getFullYear()} LuxAuto. All rights reserved.
                </div>
            </div>
        </footer>
    )
}