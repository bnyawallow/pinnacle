import { CheckCircle2, ArrowRight } from 'lucide-react';
import boxProfileImg from '../assets/images/box_profile_house_1.png';
import ecospanTileImg from '../assets/images/ecospan_house_1.png';
import classicTileImg from '../assets/images/classic_house_1.png';
import britonTileImg from '../assets/images/briton_house_1.png';
import redRomanImg from '../assets/images/roman_house_1.png';
import redCorrugatedImg from '../assets/images/corrugated_house_1.png';
import decraImg from '../assets/images/decra_house_1.png';

const products = [
  {
    id: 'box-profile',
    name: 'Box Profile',
    description: 'Clean, modern, and highly durable. Features deep angular flutes for superior water channeling and structural strength. Ideal for contemporary residential and commercial properties.',
    image: boxProfileImg,
    features: ['Size: G28/G30', 'Superior Water Drainage', 'Modern Straight-Line Aesthetic'],
    finish: 'Matte/Glossy'
  },
  {
    id: 'ecospan-tile',
    name: 'EcoSpan Tile',
    description: 'Timeless Design, Maximum Coverage. Elevate your home\'s aesthetic with the EcoSpan Tile, where classic charm meets modern functionality.',
    image: ecospanTileImg,
    features: ['Size: G28/G30', 'Elegant Profile', 'Cost-Effective Design'],
    finish: 'Matte/Glossy'
  },
  {
    id: 'classic-tile',
    name: 'Classic Tile',
    description: 'Timeless Elegance Meets Modern Performance.',
    image: redRomanImg,
    features: ['Size: G28/G30', 'Traditional Clay-Tile Profile', 'Zero Heat Breakage'],
    finish: 'Matte'
  },
  {
    id: 'briton-tile',
    name: 'Briton Tile',
    description: 'The Perfect Blend of Style & Strength. Tap into refined British elegance, crafted to boost your home’s appeal while standing strong against the toughest weather.',
    image: britonTileImg,
    features: ['Size: G28/G30', 'Architectural Appeal', 'High Durability'],
    finish: 'Matte'
  },
  {
    id: 'corrugated-sheets',
    name: 'Corrugated Steel Sheets (Available in different colors)',
    description: 'Traditional and highly versatile corrugated profile. Widely recognized for its structural reliability and efficient water runoff.',
    image: redCorrugatedImg,
    features: ['Size: G28/G30', 'Versatile Application', 'Classic Corrugated Look'],
    finish: 'Matte/Glossy'
  },
  {
    id: 'stone-coated',
    name: 'Decra Roofing Tiles',
    description: 'The ultimate luxury roofing solution. Features an architectural steel core bonded with natural stone granules for unparalleled weather resistance, rain sound insulation, and an elegant scalloped profile.',
    image: decraImg,
    features: ['Luxury Granular Texture', 'Acoustic Rain Insulation', 'Scalloped Stepped Profile'],
    finish: 'Stone Coated'
  }
];

export default function ProductShowcase() {
  return (
    <section id="premium-products" className="py-24 bg-canvas border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold uppercase text-xs tracking-widest mb-4">
            Structural Collection
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
            Premium Steel Architecture
          </h2>
          <p className="text-slate-600 font-normal leading-relaxed text-lg">
            Engineered for the distinct Kenyan climate. Explore our flagship roofing profiles designed for longevity, structural integrity, and aesthetic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="glass-panel flex flex-col rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-xs font-bold text-navy uppercase tracking-wider">{product.finish}</span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col bg-white/50">
                <h3 className="font-display text-2xl font-bold text-navy mb-3">{product.name}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow whitespace-pre-line">
                  {product.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/254116893804?text=${encodeURIComponent(`Hi Pinnacle Builders, I am interested in learning more about your ${product.name} profile.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-navy font-semibold w-full py-4 rounded-xl relative overflow-hidden group/btn bg-navy/5 hover:bg-navy hover:text-white transition-colors duration-300"
                >
                  Request Technical Specs
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
