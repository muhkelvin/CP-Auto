export default function About() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-16 space-y-24">

            {/* 1. ABOUT HERO SECTION */}
            <section className="text-center max-w-3xl mx-auto pt-12">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                    Driving the future of automotive operations.
                </h1>
                <p className="text-lg text-slate-400">
                    CP-Auto was founded with a singular vision: to eliminate the friction in fleet management through intelligent, modern software.
                </p>
            </section>

            {/* 2. FULL WIDTH IMAGE */}
            <section className="w-full rounded-[2rem] overflow-hidden border border-white/10 relative h-[400px] md:h-[600px]">
                <img
                    src="/about.jpg"
                    alt="CP-Auto Team and Mission"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div> {/* Dark overlay tipis agar tidak terlalu terang */}
            </section>

            {/* 3. STORY & METRICS SECTION */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                {/* Kiri: Metrics */}
                <div className="md:col-span-4 space-y-8 border-t border-white/10 pt-8">
                    <div>
                        <div className="text-4xl font-bold text-white mb-1">2021</div>
                        <div className="text-sm font-mono text-slate-500 uppercase">Year Founded</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-1">50M+</div>
                        <div className="text-sm font-mono text-slate-500 uppercase">Miles Tracked</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-1">99.9%</div>
                        <div className="text-sm font-mono text-slate-500 uppercase">Uptime SLA</div>
                    </div>
                </div>

                {/* Kanan: Story */}
                <div className="md:col-span-8 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
                    <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                        <p>
                            We believe that managing vehicles shouldn't require archaic spreadsheets or fragmented, slow software. The automotive industry is moving at lightning speed, but the tools used to manage it have been stuck in the past.
                        </p>
                        <p>
                            That's why we built CP-Auto. We are a team of engineers, designers, and automotive enthusiasts who set out to build the absolute best operating system for vehicle fleets.
                        </p>
                        <p>
                            Today, we power thousands of fleets worldwide—from local delivery services to enterprise logistics companies—providing the rock-solid infrastructure needed for preventative maintenance, real-time tracking, and automated billing.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}