import { ArrowRight, ChevronDown } from "lucide-react";
import React from "react";

type Stat = { number: string; label: string };
type HeroSectionProps = {
  className?: string;
  stats: Stat[];
  scrollY: number;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  className,
  stats,
  scrollY,
}) => (
  <section
    id="home"
    className={`min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 ${
      className ?? ""
    }`}
  >
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div
            className="transform transition-all duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(1 - scrollY / 500, 0.5),
            }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Premium
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block">
                Corrugated Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Manufacturing high-quality corrugated sheets and packaging
              solutions that protect your products and elevate your brand.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
             onClick={() => {
              document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
            }}
             className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold flex items-center justify-center">
              Get Quote Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
            className="border-2 cursor-pointer border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
            }}
            >
              View Products
            </button>
          </div>
          <div className="grid grid-cols-4 gap-6 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 transform rotate-3 shadow-2xl">
            <div className="bg-white rounded-2xl p-6 transform -rotate-3 shadow-xl">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg h-16 shadow-sm"
                  ></div>
                ))}
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-2">
                  Corrugated Sheet Stack
                </h3>
                <p className="text-sm text-gray-600">
                  Premium Quality Materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown />
    </div>
  </section>
);

export default HeroSection;
