import React from "react";

type IconProps = {
  className?: string;
};

type Props = {
  Check: React.ComponentType<IconProps>;
  Award: React.ComponentType<IconProps>;
  Star: React.ComponentType<IconProps>;
};

const AboutSection: React.FC<Props> = ({ Star, Award, Check }) => (
  <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Crafting Quality Since 1995
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Esteem Packers Pvt. Ltd. has been at the forefront of corrugated sheet
              manufacturing, serving diverse industries with premium packaging
              solutions.
            </p>
            <p>
              Our state-of-the-art facility houses
              advanced machinery capable of producing over 1 million sheets
              annually.
            </p>
            <p>
              We pride ourselves on sustainable practices, using 100% recyclable
              materials and eco-friendly manufacturing processes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Star className="w-8 h-8 text-yellow-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-600">
                ISO 9001:2015 certified manufacturing
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Award className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Industry Leader</h3>
              <p className="text-sm text-gray-600">25+ years of excellence</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Our Certifications</h3>
            <div className="space-y-4">
              {[
                "ISO 9001:2015 Quality Management",
                "ISO 14001:2015 Environmental Management",
                "OHSAS 18001 Occupational Health & Safety",
                "FSC Chain of Custody Certification",
              ].map((cert, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
