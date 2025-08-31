import React from "react";

type IconProps = {
  className?: string;
};

type Props = {
  Phone: React.ComponentType<IconProps>;
  Mail: React.ComponentType<IconProps>;
  MapPin: React.ComponentType<IconProps>;
};

const Instagram = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17" cy="7" r="1.5" />
  </svg>
);

const ContactSection: React.FC<Props> = ({ Phone, Mail, MapPin }) => (
  // ...copy the full JSX from your App.tsx for ContactSection here...
  <section id="contact" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to discuss your corrugated packaging needs? Contact us for a
          personalized quote and consultation.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 rounded-lg p-3">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 7505271939</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 rounded-lg p-3">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">esteempackers@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 rounded-lg p-3">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <a
                href="https://www.instagram.com/esteempackerspvt.ltd?igsh=MXYzcmNhaXVnbXp0eQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                @esteempackerspvtltd
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 rounded-lg p-3">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">
                89, Pawan Puri
                <br />
                Muradnagar, Ghaziabad - 334001,
                <br />
                Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-white/60"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-white/60"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none text-white placeholder-white/60"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
