import React from "react";

type Product = {
  name: string;
  description: string;
  applications: string[];
  thickness: string;
};
type Props = {
  products: Product[];
  Check: React.ComponentType<{ className?: string }>;
};

const ProductsSection: React.FC<Props> = ({ products, Check }) => (
  <section id="products" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Our Product Range
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From lightweight packaging to heavy-duty industrial solutions, we
          manufacture corrugated sheets that meet every requirement.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 mb-6 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-white/20 rounded backdrop-blur-sm"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mb-4">
              <span className="text-sm font-semibold text-blue-600">
                Thickness: {product.thickness}
              </span>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-sm">
                Applications:
              </h4>
              {product.applications.map((app, i) => (
                <div
                  key={i}
                  className="flex items-center text-sm text-gray-600"
                >
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  {app}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
