// app/layout.js
import './globals.css'
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
    title: 'Luxury Auto',
    description: 'Premium Automotive Experience',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Playfair+Display:wght@400;700&family=Inter:wght@400;500&family=Avenir+Next:wght@600&display=swap" rel="stylesheet" />
        </head>
        <body className="bg-[#1A1A1A] text-[#E6E6E6]">
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    )
}