import { Calculator, Palette, ArrowRight } from 'lucide-react';

export default function ApplicationPortal() {
  return (
    <section id="product-suite" className="py-20 bg-slate-50 relative">
      <div className="absolute inset-0 bg-canvas bg-opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
            Digital Advisory Tools
          </h2>
          <p className="text-slate-600 font-normal leading-relaxed text-lg">
            Remove the guesswork from your build. Utilize our robust planning systems for precise budgets and striking visualizations before fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="glass-panel p-8 md:p-10 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
              <Calculator className="w-48 h-48 text-navy" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Calculator className="w-7 h-7" />
              </div>
              
              <h3 className="font-display font-bold text-2xl text-navy mb-3">Roofing Planner</h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                <strong className="text-slate-800 font-semibold block mb-1">Plan Your own Roof</strong>
                Skip the guesswork. Select your roofing tile, select the dimensions and get an instant downloadable estimate.
              </p>
              
              <a 
                href="https://roofplanner.creativefringe.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white hover:bg-navy/90 px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto"
              >
                Launch Planner
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
              <Palette className="w-48 h-48 text-accent" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <Palette className="w-7 h-7" />
              </div>
              
              <h3 className="font-display font-bold text-2xl text-navy mb-3">Roof Visualizer</h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                <strong className="text-slate-800 font-semibold block mb-1">See Your Design Before Fabrication.</strong>
                View a real-time 3D roof simulation. Easily switch between roof profiles and colors. Customize anything you wish!
              </p>
              
              <a 
                href="https://roofconfig.creativefringe.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white hover:bg-[#d94f20] px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto"
              >
                Launch Visualizer
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
