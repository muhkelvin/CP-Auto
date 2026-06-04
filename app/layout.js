import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
    title: 'CP-Auto | Premium Fleet Management',
    description: 'The operating system for modern vehicle fleets.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-black text-slate-50 selection:bg-violet-500/30 antialiased min-h-screen flex flex-col">
                {/* Global Background Glow */}
                <div className="fixed top-0 z-[-1] h-screen w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>

                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}