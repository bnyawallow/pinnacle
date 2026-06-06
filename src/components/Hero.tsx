import { ArrowRight, ShieldCheck, FileCheck2, MapPin } from 'lucide-react';
import modernRoofImg from '../assets/images/modern_roof_house_1.png';
import roofingStructureImg from '../assets/images/house2.jpg';
import roofInstallationImg from '../assets/images/house3.jpg';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 pr-0 lg:pr-8 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent tracking-widest font-bold uppercase text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              Kenya's Trusted Roofing Partner
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-navy tracking-tight mb-8 leading-[1.1]">
              Don't Just Buy Mabati.<br/>
              <span className="text-accent">Build a Roof for a Lifetime.</span>
            </h1>
            
            <p className="text-lg leading-relaxed text-slate-600 mb-10 max-w-2xl font-normal">
              Experience transparent, consultative roofing solutions with absolutely zero hidden costs. Formulated for durability, fabricated at City Cabanas, and delivered countrywide within 3 working days.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
              <a 
                href="https://wa.me/254116893804?text=Hi%20Pinnacle%20Builders%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20get%20a%20roofing%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba5a] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 px-8 py-4 text-base font-semibold rounded-full w-full sm:w-auto"
              >
                Start Your WhatsApp Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+254116893804"
                className="inline-flex justify-center items-center gap-2 text-navy hover:text-accent font-semibold px-4 py-4 w-full sm:w-auto transition-colors group"
              >
                Call for Technical Blueprints
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy/10 transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-slate-700">KEBS Certified Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy/10 transition-colors">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Written Factory Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy/10 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Physical Verification</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-navy/10 rounded-3xl transform rotate-3 scale-105 blur-2xl opacity-50"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10 masonry">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-48 bg-slate-200">
                  <img src={modernRoofImg} alt="Modern Roof" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-64 bg-slate-200">
                  <img src={roofingStructureImg} alt="Roofing Structure" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-64 bg-slate-200">
                  <img src={roofInstallationImg} alt="Roof Installation" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-48 bg-accent/10 flex items-center justify-center border border-accent/20">
                  <div className="text-center p-6">
                    <p className="font-display font-extrabold text-3xl text-accent mb-1">20+</p>
                    <p className="text-sm font-semibold text-navy">Years combined expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
