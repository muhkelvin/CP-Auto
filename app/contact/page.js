"use client"
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
    return (
        <main>
            <section className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-40" />
                <div className="relative z-10 text-center">
                    <h1 className="text-6xl font-bold">Get in Touch</h1>
                    <p className="text-xl mt-4">We're here to assist you</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <FaMapMarkerAlt className="text-[#D4AF37] text-2xl mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                                <p>123 Luxury Avenue<br />Premium City, PC 12345</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <FaPhoneAlt className="text-[#D4AF37] text-2xl mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Phone</h3>
                                <p>+1 (234) 567-8900<br />Mon-Fri: 8AM - 6PM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <MdEmail className="text-[#D4AF37] text-2xl mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <p>contact@luxauto.com<br />Response within 24 hours</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <FaWhatsapp className="text-[#D4AF37] text-2xl mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                                <p>+1 (234) 567-8901<br />Instant messaging support</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#2A2A2A] p-8 rounded-lg">
                        <form className="space-y-6">
                            <div>
                                <label className="block mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border border-[#E6E6E6]/30 px-4 py-3 rounded-sm focus:outline-[#D4AF37]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border border-[#E6E6E6]/30 px-4 py-3 rounded-sm focus:outline-[#D4AF37]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full bg-transparent border border-[#E6E6E6]/30 px-4 py-3 rounded-sm focus:outline-[#D4AF37]"
                                />
                            </div>

                            <button className="w-full bg-[#D4AF37] text-[#1A1A1A] py-3 rounded-sm hover:bg-[#c5a235] transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#1A1A1A]/95">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>

                    <div className="space-y-4">
                        {[
                            { question: "What's the warranty period?", answer: "5 years or 100,000 km" },
                            { question: "Do you offer test drives?", answer: "Yes, book online or visit dealership" },
                            { question: "Payment methods accepted?", answer: "Cash, Credit, Financing Options" }
                        ].map((item, index) => (
                            <div key={index} className="border-b border-[#E6E6E6]/10 pb-4">
                                <div className="flex justify-between items-center cursor-pointer py-2">
                                    <h3 className="font-bold">{item.question}</h3>
                                    <span className="text-[#D4AF37]">+</span>
                                </div>
                                <p className="text-[#E6E6E6]/80 pt-2">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}