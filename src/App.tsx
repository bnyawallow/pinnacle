/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ApplicationPortal from './components/ApplicationPortal';
import PriceRegistry from './components/PriceRegistry';
import KnowledgeHub from './components/KnowledgeHub';
import BottomDock from './components/BottomDock';
import { Facebook, Instagram } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas font-sans selection:bg-accent/20 selection:text-navy">
      <Navigation />
      <main>
        <Hero />
        <ProductShowcase />
        <ApplicationPortal />
        <PriceRegistry />
        <KnowledgeHub />
      </main>
      
      {/* Footer */}
      <footer className="bg-navy pt-20 pb-10 border-t-4 border-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/pinnacle-logo.png" 
                  alt="Pinnacle Roofing logo" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-slate-300 max-w-sm leading-relaxed mb-6">
                Kenya's premier structural roofing partner. Engineered for durability, fabricated with precision, and delivered countrywide.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/share/15enKYqLZw/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/pinnacleroofingmabati?utm_source=qr&igsh=ZjAzdHU0d3A2cWph" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all duration-300" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@pinnacleroofingmabati?_t=ZM-90eYwDLeFCa&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.66-.21-3.07 1.87-5.54 4.83-6.08 1.5-.26 2.98-.02 4.3.71V6.96c-2.42-.52-4.94-.3-7.25.56-2.11.77-3.9 2.21-4.99 4.11-1.13 1.94-1.46 4.22-1.02 6.37.5 2.5 2.05 4.63 4.29 5.76 2.06 1.05 4.54 1.25 6.78.47 2.37-.82 4.29-2.58 5.25-4.87.56-1.34.82-2.79.82-4.22V0c-1.34.02-2.69.01-4.03.02z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">Digital Tools</h4>
              <ul className="space-y-4 text-slate-300">
                <li><a href="https://roofplanner.creativefringe.digital" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Roof Planner</a></li>
                <li><a href="https://roofconfig.creativefringe.digital" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Visual Configurator</a></li>
                <li><a href="#knowledge-base" className="hover:text-accent transition-colors">Knowledge Base</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">Headquarters</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-accent">📍</span>
                  <span>City Cabanas<br/>Off Mombasa Road<br/>Nairobi, Kenya</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">📞</span>
                  <span>0116 893 804</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Pinnacle Builders. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <BottomDock />
      
      {/* Mobile spacing for bottom dock */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
