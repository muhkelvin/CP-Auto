"use client";
import Link from 'next/link'
import {
  FaArrowRight,
  FaNewspaper,
  FaTrophy,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  // Mapping for social media icons
  const icons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    instagram: FaInstagram,
    youtube: FaYoutube,
  };

  // Data Model with static image URLs
  const models = [
    {
      id: 1,
      name: "Luxury Model X",
      price: "$200,000",
      image: "https://images.unsplash.com/photo-1593720083103-e7118f71cad2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Sporty Coupe",
      price: "$150,000",
      image: "https://images.unsplash.com/photo-1541473411399-6dd85c3853b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Electric Revolution",
      price: "$180,000",
      image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  // News Data with static image URLs
  const news = [
    {
      id: 1,
      title: "Latest Generation 2024",
      description: "The latest autonomous driving technology with advanced safety systems.",
      category: "New Launch",
      image: "https://images.unsplash.com/photo-1742399733126-2879198ff6cb?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Hybrid Engine Advantage",
      description: "Fuel efficiency and maximum power in one package.",
      category: "Technology Innovation",
      image: "https://images.unsplash.com/photo-1591465897635-27a579732deb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Futuristic Design",
      description: "A future car concept with modern and aerodynamic aesthetics.",
      category: "Design & Aesthetics",
      image: "https://images.unsplash.com/photo-1480895696893-aef1c3683d29?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
      <main className="relative">
        {/* Hero Section with Video Background */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop className="w-full h-full object-cover opacity-90">
              <source src="/hero-videoo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Redefining <span className="text-[#D4AF37]">Automotive</span>
              <br /> Excellence
            </h1>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="/vehicles">
                <button className="bg-[#D4AF37] text-[#1A1A1A] px-8 py-4 rounded-sm hover:bg-[#c5a235] transition-colors flex items-center gap-2">
                  View Models <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Company Summary Section */}
        <section className="py-20 bg-[#1A1A1A]/95">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Vision of Tomorrow</h2>
              <p className="text-[#E6E6E6]/90 leading-relaxed">
                Since 1985, we have been committed to bringing innovation in every detail.
                With a combination of cutting-edge technology and timeless design, we create
                an unforgettable driving experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border-l-4 border-[#D4AF37]">
                  <h3 className="text-xl font-bold mb-2">300+</h3>
                  <p className="text-sm">International Awards</p>
                </div>
                <div className="p-4 border-l-4 border-[#D4AF37]">
                  <h3 className="text-xl font-bold mb-2">5 Million+</h3>
                  <p className="text-sm">Global Customers</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1470&auto=format&fit=crop')" }}>
              <div className="absolute inset-0 bg-[#1A1A1A]/30" />
            </div>
          </div>
        </section>

        {/* Featured Models Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Models</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                className="pb-12"
            >
              {models.map((model) => (
                  <SwiperSlide key={model.id}>
                    <div className="group relative h-96 bg-[#2A2A2A] rounded-lg overflow-hidden">
                      <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${model.image})` }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-[#D4AF37] text-lg">{model.price}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="py-20 bg-[#1A1A1A]/95">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Latest News</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((article) => (
                  <div
                      key={article.id}
                      className="border border-[#E6E6E6]/10 rounded-lg overflow-hidden hover:border-[#D4AF37]/30 transition-colors"
                  >
                    <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[#D4AF37] mb-3">
                        <FaNewspaper /> <span className="text-sm">{article.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                      <p className="text-[#E6E6E6]/80 text-sm mb-4">{article.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter & Social Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <FaTrophy className="text-[#D4AF37] text-4xl mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
              <p className="text-[#E6E6E6]/90 mb-8">
                Get the latest updates on products, exclusive events, and special offers
              </p>
              <form className="flex gap-4 max-w-md mx-auto mb-12">
                <input
                    type="email"
                    placeholder="Your Email Address"
                    className="flex-1 bg-transparent border border-[#E6E6E6]/30 px-4 py-3 rounded-sm focus:outline-[#D4AF37]"
                />
                <button className="bg-[#D4AF37] text-[#1A1A1A] px-6 py-3 rounded-sm">
                  Subscribe
                </button>
              </form>
              <div className="flex justify-center gap-6">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => {
                  const IconComponent = icons[platform];
                  return (
                      <a
                          key={platform}
                          href="#"
                          className="text-2xl hover:text-[#D4AF37] transition-colors"
                      >
                        <IconComponent />
                      </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
