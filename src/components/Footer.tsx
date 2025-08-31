import React from "react";

const Footer: React.FC = () => (
  // ...copy the full JSX from your App.tsx for Footer here...
  <footer className="bg-gray-950 text-gray-300 py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Esteem Packers Pvt. Ltd.
          </h3>
          <p className="text-sm mb-4">
            Leading manufacturer of premium corrugated sheets and packaging
            solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>Single Wall Corrugated</li>
            <li>Double Wall Corrugated</li>
            <li>Triple Wall Corrugated</li>
            <li>Custom Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Custom Manufacturing</li>
            <li>Die Cutting</li>
            <li>Design Consultation</li>
            <li>Quality Testing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Quality Policy</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
        <p>&copy; 2025 Esteem Packers Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
