import React from "react";

const EnquirySection: React.FC = () => (
  // ...copy the full JSX from your App.tsx for EnquirySection here...
  <section
    id="enquiry"
    className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white"
  >
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Request a Quote</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Get a customized quote for your corrugated packaging requirements. Our
          experts will help you find the perfect solution.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Product Requirements</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Product Type
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white">
                    <option value="" className="text-gray-900">
                      Select Product Type
                    </option>
                    <option value="single" className="text-gray-900">
                      Single Wall Corrugated
                    </option>
                    <option value="double" className="text-gray-900">
                      Double Wall Corrugated
                    </option>
                    <option value="triple" className="text-gray-900">
                      Triple Wall Corrugated
                    </option>
                    <option value="custom" className="text-gray-900">
                      Custom Die-Cut Sheets
                    </option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Length (mm)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-white/60"
                      placeholder="1000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Width (mm)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-white/60"
                      placeholder="700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quantity Required
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-white/60"
                    placeholder="1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none text-white placeholder-white/60"
                    placeholder="Any specific requirements or applications..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-white/60"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-white/60"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-white/60"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-white/60"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Contact Time
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white">
                    <option value="" className="text-gray-900">
                      Select Time
                    </option>
                    <option value="morning" className="text-gray-900">
                      Morning (9 AM - 12 PM)
                    </option>
                    <option value="afternoon" className="text-gray-900">
                      Afternoon (12 PM - 5 PM)
                    </option>
                    <option value="evening" className="text-gray-900">
                      Evening (5 PM - 8 PM)
                    </option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
                >
                  Get Instant Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EnquirySection;
