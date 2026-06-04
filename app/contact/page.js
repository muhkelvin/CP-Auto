export default function Contact() {
    return (
        <div className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden bg-black">

            {/* 1. BACKGROUND IMAGE & OVERLAYS - Pasti Tampil */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Gambar Background */}
                <img
                    src="/contact-bg.jpg"
                    alt="Contact Background"
                    className="w-full h-full object-cover opacity-30"
                />

                {/* Blur & Dark Overlay agar teks form mudah dibaca */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>

                {/* Subtle Violet Glow di tengah layar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]"></div>
            </div>

            {/* 2. FLOATING CONTACT CARD (Glassmorphism) */}
            <div className="relative z-10 w-full max-w-2xl bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 border border-white/10 mb-6">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
                        Get in touch.
                    </h1>
                    <p className="text-slate-400">
                        Fill out the form below and our sales engineering team will get back to you within 24 hours.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">First Name</label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                                placeholder="Jane"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Last Name</label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Work Email</label>
                        <input
                            type="email"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                            placeholder="jane@company.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">How can we help?</label>
                        <textarea
                            rows="4"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all resize-none"
                            placeholder="Tell us about your fleet operations and goals..."
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button
                            type="button"
                            className="w-full rounded-xl bg-white text-black font-bold py-4 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Footer info inside card */}
                <p className="mt-8 text-center text-xs text-slate-500">
                    By submitting this form, you agree to our <a href="#" className="text-slate-300 hover:text-white underline underline-offset-2">Privacy Policy</a>.
                </p>

            </div>
        </div>
    );
}