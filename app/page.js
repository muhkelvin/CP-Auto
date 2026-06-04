import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-slate-50 selection:bg-violet-500/30 font-sans overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 z-[-1] h-screen w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>

      <main className="mx-auto max-w-7xl px-6 pt-12 pb-16 space-y-32">

        {/* 1. HERO SECTION */}
        <section className="flex flex-col items-center text-center pt-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 mb-8 hover:bg-white/10 transition-all">
            <span className="flex h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></span>
            Announcing CP-Auto 2.0 <span className="text-white ml-1">→</span>
          </div>

          <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            The operating system for modern vehicle fleets.
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10">
            Streamline your automotive services, manage vehicles effortlessly, and scale your operations with our premium management platform built for speed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
            <Link href="/contact" className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Start Building Free
            </Link>
            <Link href="/services" className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all">
              Explore Services
            </Link>
          </div>

          {/* HERO IMAGE - Pasti Tampil */}
          <div className="w-full max-w-5xl mx-auto rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.15)] bg-white/5">
            <img
              src="/service.jpg"
              alt="CP-Auto Dashboard"
              className="w-full h-auto max-h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </section>

        {/* 2. SOCIAL PROOF - FIXED COLORS */}
        <section className="flex flex-col items-center border-y border-white/10 py-14 bg-white/[0.01]">
          <p className="text-xs font-semibold text-slate-500 mb-8 uppercase tracking-[0.2em]">
            Trusted by world-class automotive teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {['Tesla', 'Rivian', 'Lucid', 'Polestar', 'Porsche'].map((brand) => (
              <div
                key={brand}
                className="text-xl md:text-2xl font-bold font-serif text-slate-400/60 hover:text-white transition-all duration-300 cursor-default tracking-tight"
              >
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* 3. KEY FEATURES (Bento Grid) */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need, nothing you don't.</h2>
            <p className="text-slate-400">Manage your entire vehicle lifecycle from a single, lightning-fast dashboard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/[0.07] transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Real-time Telemetry</h3>
              <p className="text-sm text-slate-400">Track your entire fleet with sub-second latency. Know exactly where your vehicles are at all times.</p>
            </div>

            {/* Feature 2 */}
            <div className="group relative md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/[0.07] transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Automated Service Scheduling</h3>
              <p className="text-sm text-slate-400">Predictive maintenance alerts ensure your vehicles never miss a crucial service window. Reduce downtime by up to 40%.</p>
            </div>

            {/* Feature 3 */}
            <div className="group relative md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/[0.07] transition-all overflow-hidden">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Frictionless Billing</h3>
              <p className="text-sm text-slate-400 max-w-md">Integrated invoicing and payment collection. Get paid faster with our automated API integrations built right in.</p>
            </div>

            {/* Feature 4 */}
            <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/[0.07] transition-all overflow-hidden">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Deep Analytics</h3>
              <p className="text-sm text-slate-400">Generate custom reports on vehicle utilization and ROI instantly.</p>
            </div>
          </div>
        </section>

        {/* 4. METRICS / STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-16">
          {[
            { label: 'Uptime', value: '99.99%' },
            { label: 'Vehicles Managed', value: '50k+' },
            { label: 'Service Hours Saved', value: '2.5M' },
            { label: 'Customer Satisfaction', value: '4.9/5' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold tracking-tighter text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Onboard your fleet in minutes.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

            {[
              { step: '01', title: 'Connect Data', desc: 'Sync your existing vehicle database instantly via our secure API.' },
              { step: '02', title: 'Configure Rules', desc: 'Set up custom maintenance schedules and alert thresholds.' },
              { step: '03', title: 'Automate', desc: 'Let CP-Auto handle dispatching, tracking, and billing on autopilot.' }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="h-24 w-24 rounded-full bg-black border border-white/20 flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent">
              <div className="flex gap-1 mb-6 text-violet-400">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-lg text-slate-300 mb-8">"Since migrating our services to CP-Auto, our operational overhead has dropped by 60%. The interface is impossibly fast."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/20"></div>
                <div>
                  <div className="font-semibold text-white">Sarah Jenkins</div>
                  <div className="text-xs text-slate-500">Director of Operations, MetroFleet</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent">
              <div className="flex gap-1 mb-6 text-violet-400">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-lg text-slate-300 mb-8">"It feels like software built from the future. The vehicle tracking and automated service routing is absolutely flawless."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/20"></div>
                <div>
                  <div className="font-semibold text-white">Marcus Thorne</div>
                  <div className="text-xs text-slate-500">CEO, Velocity Auto</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="relative rounded-3xl border border-white/10 bg-white/5 px-6 py-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">Ready to accelerate?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
              Join hundreds of forward-thinking automotive businesses using CP-Auto to scale their fleet management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                Start Building Free
              </Link>
              <Link href="/contact" className="rounded-full border border-white/10 bg-black px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all">
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}