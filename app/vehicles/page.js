"use client"
import { useState } from 'react'
import { FaFilter, FaGasPump, FaCarBattery, FaExchangeAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function VehicleModels() {
    const [selectedFilter, setSelectedFilter] = useState("Semua")

    const vehicles = [
        {
            id: 1,
            name: "Model A",
            price: "$120,000",
            type: "SUV",
            fuel: "14 km/L",
            energy: "Elektrik",
            transmission: "Otomatis",
            image: "https://images.unsplash.com/photo-1615063029891-497bebd4f03c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            name: "Model S",
            price: "$130,000",
            type: "Sedan",
            fuel: "12 km/L",
            energy: "Hybrid",
            transmission: "Manual",
            image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name: "Model Z",
            price: "$110,000",
            type: "Elektrik",
            fuel: "16 km/L",
            energy: "Elektrik",
            transmission: "Otomatis",
            image: "https://plus.unsplash.com/premium_photo-1714672716183-c717a99f857f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            name: "Model R",
            price: "$140,000",
            type: "Hybrid",
            fuel: "13 km/L",
            energy: "Hybrid",
            transmission: "Manual",
            image: "https://images.unsplash.com/photo-1611073975502-37d6af8eec35?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            name: "Model T",
            price: "$115,000",
            type: "SUV",
            fuel: "15 km/L",
            energy: "Elektrik",
            transmission: "Otomatis",
            image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1559&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            name: "Model V",
            price: "$125,000",
            type: "Sedan",
            fuel: "14 km/L",
            energy: "Hybrid",
            transmission: "Manual",
            image: "https://images.unsplash.com/photo-1619485029177-28ce04ffbbfe?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const filterTypes = ['Semua', 'SUV', 'Sedan', 'Elektrik', 'Hybrid']

    // Filter kendaraan berdasarkan selectedFilter (jika "Semua" maka tampilkan semua)
    const filteredVehicles = selectedFilter === "Semua"
        ? vehicles
        : vehicles.filter(vehicle => vehicle.type === selectedFilter)

    return (
        <main>
            {/* Header Section */}
            <header className="py-8 bg-[#121212] text-center">
                <h1 className="text-4xl font-bold text-[#D4AF37]">Our Vehicle Collection</h1>
                <p className="mt-4 text-lg text-gray-300">
                    Find the vehicle model that suits your lifestyle and needs.
                </p>
            </header>

            {/* Filter Section */}
            <section className="py-12 bg-[#1A1A1A]/95">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex items-center gap-2 text-[#D4AF37]">
                            <FaFilter className="text-xl" />
                            <span className="text-lg">Filter By:</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {filterTypes.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedFilter(type)}
                                    className={`px-6 py-2 border border-[#E6E6E6]/20 rounded-full transition-colors ${
                                        selectedFilter === type ? "border-[#D4AF37]" : "hover:border-[#D4AF37]"
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVehicles.map((vehicle) => (
                        <div key={vehicle.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <div
                                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${vehicle.image})` }}
                            />
                            <div className="p-6 bg-[#2A2A2A]">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white">{vehicle.name}</h3>
                                    <span className="text-[#D4AF37] font-semibold">{vehicle.price}</span>
                                </div>
                                <div className="flex flex-col gap-2 mb-4 text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <FaGasPump className="text-[#D4AF37]" />
                                        <span>{vehicle.fuel}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCarBattery className="text-[#D4AF37]" />
                                        <span>{vehicle.energy}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaExchangeAlt className="text-[#D4AF37]" />
                                        <span>{vehicle.transmission}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredVehicles.length === 0 && (
                        <p className="text-center text-gray-300 col-span-full">There is no vehicle for this Category.</p>
                    )}
                </div>
            </section>

            {/* Electric Vehicles Banner */}
            <section className="relative h-96 flex items-center justify-center mb-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-90" />
                <div className="relative z-10 text-center space-y-6">
                    <h2 className="text-4xl font-bold text-white">The Electric Future</h2>
                    <p className="max-w-2xl mx-auto text-gray-200">
                        Explore our range of environmentally friendly and innovative zero-emission vehicles.
                    </p>
                    <button className="bg-[#D4AF37] text-[#1A1A1A] px-8 py-3 rounded-sm font-medium">
                        Find EV Models
                    </button>
                </div>
            </section>

            {/* Additional Information Section */}
            <section className="py-12 bg-[#121212]">
                <div className="container mx-auto px-4 text-center text-gray-300">
                    <h3 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h3>
                    <p className="mb-6">
                        We provide various vehicle models with the latest technology, modern design, and optimal fuel efficiency.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-700 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 text-white">Leading Innovation</h4>
                            <p>
                                We are always innovating to bring the latest technology to every vehicle, from entertainment systems to safety.
                            </p>
                        </div>
                        <div className="p-6 border border-gray-700 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 text-white">Maximum Security</h4>
                            <p>
                                Each of our vehicle models is equipped with advanced safety features such as automatic braking, collision sensors and more.
                            </p>
                        </div>
                        <div className="p-6 border border-gray-700 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 text-white">Elegant Design</h4>
                            <p>
                                With an attractive and ergonomic design, our vehicles not only provide driving comfort but also a stunning appearance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="py-8 bg-[#1A1A1A] text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Modern Vehicles. All rights reserved.</p>
            </footer>
        </main>
    )
}
