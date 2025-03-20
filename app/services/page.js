"use client"
import { FaWrench, FaShieldAlt, FaHandHoldingUsd, FaExchangeAlt } from 'react-icons/fa'

export default function Services() {
    const services = [
        {
            icon: <FaHandHoldingUsd />,
            title: "Financing Solutions",
            desc: "Flexible payment plans with competitive rates"
        },
        {
            icon: <FaWrench />,
            title: "Maintenance",
            desc: "Genuine parts & expert technicians"
        },
        {
            icon: <FaShieldAlt />,
            title: "Insurance",
            desc: "Comprehensive coverage options"
        },
        {
            icon: <FaExchangeAlt />,
            title: "Trade-In",
            desc: "Get best value for your current vehicle"
        }
    ]

    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{
                        backgroundImage: "url('service.jpg')"
                    }}
                >
                    {/* Gradient overlay untuk mencairkan kesan gambar */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-blue-500 opacity-70" />
                </div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-6xl font-bold drop-shadow-lg">Premium Care</h1>
                    <p className="text-xl mt-4 drop-shadow-lg">Beyond the Purchase</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 border border-gray-300 rounded-lg hover:border-yellow-500 transition-colors bg-white shadow-md"
                        >
                            <div className="text-yellow-500 text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Service Details */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-white">
                        <h2 className="text-4xl font-bold">Complete Ownership Experience</h2>
                        <div className="space-y-6">
                            {[
                                "24/7 Roadside Assistance",
                                "Genuine Parts Warranty",
                                "Mobile Service Unit",
                                "Software Updates"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <span className="text-blue-900 font-bold">✓</span>
                                    </div>
                                    <span className="text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-96 rounded-lg overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://picsum.photos/seed/servicedetail/800/600')"
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-blue-600 opacity-80" />
                    </div>
                </div>
            </section>
        </main>
    )
}
