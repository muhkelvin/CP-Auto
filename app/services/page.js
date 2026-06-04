import Link from 'next/link';

export default function Services() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-16 space-y-32">

            {/* HERO SECTION - SERVICES (Split Layout dengan Gambar) */}
            <section className="flex flex-col lg:flex-row items-center gap-12 pt-12">
                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="text-violet-400 font-mono text-sm tracking-widest uppercase">Platform Services</div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        Powerful services to scale your fleet.
                    </h1>
                    <p className="text-lg text-slate-400">
                        From preventative maintenance algorithms to real-time driver analytics, CP-Auto provides end-to-end tooling for modern automotive operations.
                    </p>
                    <div className="pt-4">
                        <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-slate-200 transition-colors">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>

                {/* HERO IMAGE SERVICES */}
                <div className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/service.jpg"
                            alt="Fleet Management Services"
                            className="w-full h-[400px] object-cover"
                        />
                        {/* Efek gradient tipis di bawah gambar */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* Core Services Bento Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Card 1 */}
                <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.05] transition-all">
                    <h3 className="text-2xl font-bold text-white mb-4">Predictive Maintenance</h3>
                    <p className="text-slate-400 mb-6">
                        Our AI analyzes vehicle telemetry in real-time to predict failures before they happen. Schedule repairs proactively.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Automated diagnostic checks</li>
                        <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Dynamic wear-and-tear forecasting</li>
                    </ul>
                </div>

                {/* Service Card 2 */}
                <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.05] transition-all">
                    <h3 className="text-2xl font-bold text-white mb-4">Live Fleet Tracking</h3>
                    <p className="text-slate-400 mb-6">
                        Sub-second GPS tracking combined with route optimization. Monitor your entire fleet on a high-performance interactive map.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Real-time geolocation</li>
                        <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Automated geofencing alerts</li>
                    </ul>
                </div>
            </section>

        </div>
    );
}