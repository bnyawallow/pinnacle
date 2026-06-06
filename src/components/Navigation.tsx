import { Phone, MessageSquare, Facebook, Instagram } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <img 
              src="/pinnacle-logo.png" 
              alt="Pinnacle Roofing logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
             { label: 'Tools', href: '#product-suite' },
              { label: 'FAQs', href: '#knowledge-base' },
              { label: 'Authenticity', href: '#authenticity' }
            ].map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 hover:text-navy transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))} 
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a href="tel:+254116893804" className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>0116 893 804</span>
            </a>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/share/15enKYqLZw/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] text-accent hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/pinnacleroofingmabati?utm_source=qr&igsh=ZjAzdHU0d3A2cWph" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] text-accent hover:text-white transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@pinnacleroofingmabati?_t=ZM-90eYwDLeFCa&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center hover:bg-black hover:border-black text-accent hover:text-white transition-all duration-300" aria-label="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.66-.21-3.07 1.87-5.54 4.83-6.08 1.5-.26 2.98-.02 4.3.71V6.96c-2.42-.52-4.94-.3-7.25.56-2.11.77-3.9 2.21-4.99 4.11-1.13 1.94-1.46 4.22-1.02 6.37.5 2.5 2.05 4.63 4.29 5.76 2.06 1.05 4.54 1.25 6.78.47 2.37-.82 4.29-2.58 5.25-4.87.56-1.34.82-2.79.82-4.22V0c-1.34.02-2.69.01-4.03.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
