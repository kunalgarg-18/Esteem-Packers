import React from "react";

type Feature = { icon: React.ReactNode; title: string; desc: string };
type Props = { features: Feature[] };

const FeaturesSection: React.FC<Props> = ({ features }) => (
  <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          With decades of experience and cutting-edge technology, we deliver
          excellence in every corrugated sheet.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-blue-100">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
