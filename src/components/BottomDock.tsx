import { MessageSquare, Phone } from 'lucide-react';

export default function BottomDock() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-t border-slate-200 p-3 pb-safe">
      <div className="flex gap-3 max-w-lg mx-auto">
        <a
          href="https://wa.me/254116893804?text=Hi%20Pinnacle%20Builders%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20get%20a%20roofing%20quotation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20ba5a] text-white px-4 py-3.5 rounded-2xl font-semibold text-sm transition-colors shadow-sm"
        >
          <MessageSquare className="w-5 h-5" />
          Connect on WhatsApp
        </a>
        <a
          href="tel:+254116893804"
          className="flex-shrink-0 w-[18%] flex items-center justify-center bg-navy active:bg-navy/90 text-white rounded-2xl transition-colors shadow-sm"
          aria-label="Call Support"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
