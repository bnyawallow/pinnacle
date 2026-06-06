import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

type ProductCategory = 'All' | 'Box Profiles' | 'Premium Tiles' | 'Accessories';

interface Product {
  name: string;
  category: ProductCategory;
  price: string;
  unit: string;
}

const products: Product[] = [
  { name: 'Box Profile Glossy Finish (G30)', category: 'Box Profiles', price: '520', unit: 'Meter' },
  { name: 'Box Profile Matte Finish (G28)', category: 'Box Profiles', price: '700', unit: 'Meter' },
  { name: 'Classic Tile Matte Finish (G28)', category: 'Premium Tiles', price: '750', unit: 'Meter' },
  { name: 'Standing Seam Roofing Panel (G28)', category: 'Premium Tiles', price: '415', unit: 'Meter' },
  { name: 'Stone Coated Roofing Shingles / Decra', category: 'Premium Tiles', price: '750', unit: 'Unit' },
  { name: 'Ridges - Matte Finish 2m', category: 'Accessories', price: '800', unit: 'Pc' },
  { name: 'Ridges - Glossy Finish 2m', category: 'Accessories', price: '600', unit: 'Pc' },
  { name: 'Valleys - Glossy Finish 2m', category: 'Accessories', price: '600', unit: 'Pc' },
  { name: 'Valleys - Matte Finish 2m', category: 'Accessories', price: '800', unit: 'Pc' },
  { name: 'Ridges - Decra 2m', category: 'Accessories', price: '815', unit: 'Pc' },
  { name: 'Valleys - Decra 2m', category: 'Accessories', price: '815', unit: 'Pc' },
  { name: 'Decra Nails', category: 'Accessories', price: '918', unit: 'KG' },
  { name: 'Touch Up kit / Finishing Kit', category: 'Accessories', price: '1450', unit: 'Kit' },
  { name: 'Roofing Nails - Stainless Steel', category: 'Accessories', price: '300', unit: 'KG' },
  { name: 'Roofing Nails - Coloured with washers', category: 'Accessories', price: '600', unit: 'KG' },
  { name: 'Rubber Washers', category: 'Accessories', price: '150', unit: 'Pct' },
];

export default function PriceRegistry() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory>('All');

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const getWhatsAppLink = (productName: string) => {
    return `https://wa.me/254116893804?text=${encodeURIComponent(`Hi Pinnacle Builders, I am interested in ordering custom lengths for: ${productName}`)}`;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
              Interactive Price Registry
            </h2>
            <p className="text-slate-600 font-normal leading-relaxed">
              Transparent, factory-direct pricing for 2025. Select your structural profile below and engage our technical team for custom length fabrication.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {(['All', 'Box Profiles', 'Premium Tiles', 'Accessories'] as ProductCategory[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-navy text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter === 'All' ? 'Show All' : filter}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="py-5 px-6 font-semibold text-slate-500 text-sm tracking-wider uppercase">Profile / Material Specification</th>
                  <th className="py-5 px-6 font-semibold text-slate-500 text-sm tracking-wider uppercase text-right">Factory Price</th>
                  <th className="py-5 px-6 font-semibold text-slate-500 text-sm tracking-wider uppercase w-48 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group">
                    <td className="py-5 px-6 font-medium text-navy">{product.name}</td>
                    <td className="py-5 px-6 text-right">
                      <span className="font-semibold text-slate-800">KES {product.price}</span>
                      <span className="text-slate-500 text-sm"> / {product.unit}</span>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <a 
                        href={getWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-accent hover:text-[#d94f20] font-medium text-sm transition-colors opacity-80 group-hover:opacity-100 whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Order Custom
                      </a>
                    </td>
                  </tr>
                ))}
                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-12 text-center text-slate-500">
                      No products found in this category. Connect with us on WhatsApp for unlisted accessories.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
