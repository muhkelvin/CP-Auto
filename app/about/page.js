"use client"
import { FaAward, FaLeaf, FaUsers, FaRegHandshake } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function About() {
    // Data untuk Leadership Team
    const leadershipTeam = [
        {
            id: 1,
            name: "John Doe",
            role: "Chief Executive Officer",
            description: "10+ years experience in automotive industry",
            image: "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Chief Financial Officer",
            description: "Expert in global financial strategies",
            image: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            id: 3,
            name: "Emily White",
            role: "Chief Marketing Officer",
            description: "Innovative marketing strategies for brand expansion",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('about.jpg')" }}
                />
                <div className="relative z-10 text-center">
                    <h1 className="text-6xl font-bold mb-4">Driving Excellence</h1>
                    <p className="text-xl text-[#E6E6E6]/90">Since 1985</p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-[#1A1A1A]/95">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 w-0.5 h-full bg-[#E6E6E6]/20 transform -translate-x-1/2" />
                        <div className="space-y-20">
                            {[2010, 2014, 2018, 2022].map((year, index) => (
                                <div
                                    key={year}
                                    className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'pr-14' : 'pl-14'}`}>
                                        <div className="relative bg-[#2A2A2A] p-8 rounded-lg border-l-4 border-[#D4AF37]">
                                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                                                <span className="text-[#1A1A1A] font-bold">{year}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">Milestone Achievement</h3>
                                            <p className="text-[#E6E6E6]/80">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-4xl font-bold mb-8">Core Values</h2>
                        <p className="text-[#E6E6E6]/90">
                            Fundamental principles that guide our every innovation
                        </p>
                    </div>
                    <div className="md:col-span-2 grid gap-8 md:grid-cols-2">
                        {[
                            { icon: <FaAward />, title: 'Excellence', desc: 'Uncompromising quality in every detail' },
                            { icon: <FaLeaf />, title: 'Sustainability', desc: 'Eco-friendly innovations for future generations' },
                            { icon: <FaUsers />, title: 'Customer Focus', desc: 'Personalized experiences beyond expectations' },
                            { icon: <FaRegHandshake />, title: 'Integrity', desc: 'Ethical business practices as standard' }
                        ].map((item, index) => (
                            <div key={index} className="p-6 border border-[#E6E6E6]/10 rounded-lg hover:border-[#D4AF37]/30 transition-colors">
                                <div className="text-[#D4AF37] text-3xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-[#E6E6E6]/80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management Team Section */}
            <section className="py-20 bg-[#1A1A1A]/95">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="pb-16"
                    >
                        {leadershipTeam.map((member) => (
                            <SwiperSlide key={member.id}>
                                <div className="group relative h-96 bg-[#2A2A2A] rounded-lg overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${member.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                        <h3 className="text-2xl font-bold">{member.name}</h3>
                                        <p className="text-[#D4AF37]">{member.role}</p>
                                        <p className="text-sm text-[#E6E6E6]/80 mt-2">{member.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Certifications & Awards */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">Recognized Excellence</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="p-4 border border-[#E6E6E6]/10 rounded-lg">
                                    <FaAward className="text-[#D4AF37] text-3xl mx-auto mb-4" />
                                    <h3 className="font-bold">Best Luxury Brand 2023</h3>
                                    <p className="text-sm text-[#E6E6E6]/80">Global Automotive Awards</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CSR Section */}
            <section className="py-20 bg-[#1A1A1A]/95">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div
                        className="relative h-96 rounded-lg overflow-hidden"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564627334137-f477a3a8588e?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="absolute inset-0 bg-[#1A1A1A]/40" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">Green Future Initiative</h2>
                        <p className="text-[#E6E6E6]/90 leading-relaxed">
                            Kami berkomitmen untuk mengurangi emisi karbon sebesar 50% hingga 2030 melalui:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                                    <FaLeaf className="text-[#1A1A1A]" />
                                </div>
                                <span>100% Renewable Energy in Production</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                                    <FaLeaf className="text-[#1A1A1A]" />
                                </div>
                                <span>Eco-Friendly Material Innovation</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                                    <FaLeaf className="text-[#1A1A1A]" />
                                </div>
                                <span>Global Reforestation Programs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}
