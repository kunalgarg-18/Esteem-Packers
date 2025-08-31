
const clients = [
    { name: "Bisleri", logo: "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756627977/Bisleri_5ltr_2-1737444130103_uyqspz.webp" },
    { name: "Sujata", logo: "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756628456/sujata_onjfvw.png" },
    { name: "Farmley", logo: "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756628573/farmley_kj70bk.webp" },
    { name: "Bisleri Vedica", logo: "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756627879/bisleri-vedica_r7ugnw.jpg" },
    { name: "Campa Cola", logo: "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756626394/CAMPA_COLA_xeq2ag.png" },
  { name: "Dalda", logo: "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756628645/DALDA_m9fjr9.jpg" },
  { name: "Bisleri Pop", logo: "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756626393/BisleriPop_ak7fou.png" },
  { name: "Albert David", logo: "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756628886/albertdavid_zhhmzt.jpg" },
  { name: "Ajanta Soya", logo: "https://res.cloudinary.com/df6yjgcmv/image/upload/v1756629040/ajantasoya_rqavre.webp" },
];

  export const ClientsSection = () => (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to serve some of the most respected companies across various industries. 
            Our client relationships are built on trust, quality, and consistent delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {clients.map((client, index) => (
                <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
                >
                {/* Logo + Name side by side */}
                <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center h-24 w-24 sm:h-28 sm:w-28">
                    <img
                        src={client.logo}
                        alt={client.name}
                        className="object-contain max-h-20 max-w-20 sm:max-h-24 sm:max-w-24"
                    />
                    </div>
                    <p className="text-lg sm:text-xl font-semibold text-gray-800">
                    {client.name}
                    </p>
                </div>

                {/* Trusted Partner at bottom */}
                <p className="text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                    Trusted Partner
                </p>
                </div>
            ))}
        </div>



        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Join Our Growing Family</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Over 100 satisfied clients trust us for their corrugated packaging needs. 
            Experience the ESTEEEM difference today.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-sm text-blue-100">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-sm text-blue-100">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-sm text-blue-100">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24hrs</div>
              <div className="text-sm text-blue-100">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
