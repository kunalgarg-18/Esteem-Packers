import React from "react";

type IconProps = {
  className?: string;
};

type Props = {
  Factory: React.ComponentType<IconProps>;
  Award: React.ComponentType<IconProps>;
  Users: React.ComponentType<IconProps>;
  Truck: React.ComponentType<IconProps>;
};

const plantImages = [
  "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756626398/plant7_rng8sf.jpg",
  "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756626394/plant_1_mrpzt7.jpg",
  "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756626395/plant_2_lh8qpu.jpg",
  "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756626396/plant4_axyhpp.jpg",
  "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756626396/plant6_c1teft.jpg",
  "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756626395/plant3_hjsb2u.jpg",
];

const InfrastructureSection: React.FC<Props> = ({
  Factory,
  Award,
  Users,
  Truck,
}) => (
      <section id="infrastructure" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            World-Class Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art manufacturing facility is equipped with the latest 
            technology to deliver superior corrugated packaging solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Factory className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">World-class facility</h4>
                  <p className="text-gray-600">Spacious, modern manufacturing unit with optimal workflow design</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Advanced Corrugator Line</h4>
                  <p className="text-gray-600">High-speed corrugating machine capable of producing 200m/min</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Automated Die-Cutting</h4>
                  <p className="text-gray-600">Precision die-cutting machines for custom shapes and sizes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Production Capacity</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10M+</div>
                <div className="text-sm">Sheets/Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">200m</div>
                <div className="text-sm">Per Minute</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm">Operations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.5%</div>
                <div className="text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 mb-6 mx-auto w-24 h-24 flex items-center justify-center">
              <Factory className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Manufacturing</h3>
            <p className="text-gray-600">IoT-enabled machines with real-time monitoring and predictive maintenance</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 mb-6 mx-auto w-24 h-24 flex items-center justify-center">
              <Award className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Manufacturing Unit</h3>
            <p className="text-gray-600">Quality manufacturing plant with international standard equipments</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 mb-6 mx-auto w-24 h-24 flex items-center justify-center">
              <Truck className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Logistics Hub</h3>
            <p className="text-gray-600">Automated warehouse with efficient packaging and dispatch systems</p>
          </div>
        </div>

        {/* Plant Photos Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Automatic Manufacturing Plant
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art automated facility 
              equipped with cutting-edge technology and modern machinery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plantImages.map((imgUrl, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center h-64">
                  <img
                    src={imgUrl}
                    alt={`Plant Photo ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Manufacturing Unit</h4>
                    <p className="text-sm text-gray-200">Automated Production Line</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

);

export default InfrastructureSection;
