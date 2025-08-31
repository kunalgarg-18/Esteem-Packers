import React from "react";

type IconProps = {
  className?: string;
};

type Props = {
  Check: React.ComponentType<IconProps>;
  Award: React.ComponentType<IconProps>;
  Star: React.ComponentType<IconProps>;
};

const QualitySection: React.FC<Props> = ({ Check, Award, Star }) => (
  <section
    id="quality"
    className="py-20 bg-gradient-to-br from-green-50 to-blue-50"
  >
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Quality Assurance
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our commitment to quality is unwavering. Every corrugated sheet
          undergoes rigorous testing to ensure it meets the highest industry
          standards.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Raw Material Testing
          </h3>
          <p className="text-gray-600">
            Every batch of raw materials is tested for strength, durability, and
            environmental compliance before production.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            In-Process Quality Control
          </h3>
          <p className="text-gray-600">
            Continuous monitoring during manufacturing ensures consistent
            quality and adherence to specifications.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Final Product Testing
          </h3>
          <p className="text-gray-600">
            Comprehensive testing including edge crush strength, burst strength,
            and moisture resistance tests.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default QualitySection;
