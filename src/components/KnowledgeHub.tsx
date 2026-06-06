import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do I accurately differentiate between Gauge 28 and Gauge 30?',
    answer: 'Gauge measurements dictate the structural thickness and longevity of your roofing profile. Gauge 28 is thicker and offers superior impact resistance, making it our primary recommendation for permanent family homes and long-term architectural investments. Gauge 30 is relatively thinner, suitable for temporary structures or tight budget constraints.'
  },
  {
    question: 'Matte vs. Glossy Finish: Which options suit my environment?',
    answer: 'The choice between Matte and Glossy is both aesthetic and functional. Matte finishes provide a sleek, non-reflective profile that absorbs light beautifully, offering a highly premium, modern architectural look. Glossy finishes are cost-effective, shine brightly under the sun, and are traditionally easier to wash down naturally during heavy rainfall.'
  },
  {
    question: 'The Anti-Scam Protocol: How do I protect my building budget online?',
    answer: 'Protecting your building budget is paramount. We explicitly instruct all clients to demand official company letterheads for quotations. Furthermore, we strongly encourage physical verification; visit our cash office directly at City Cabanas. You must firmly reject "too-good-to-be-true" Facebook advertisements that demand mobile money deposits before site verification.'
  }
];

export default function KnowledgeHub() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="knowledge-base" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-navy/10 text-navy font-semibold text-sm mb-4">
            Roofing Authority Knowledge Hub
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            Consultative Expert Insights
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`glass-panel transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen ? 'shadow-md border-navy/20' : 'hover:border-navy/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-display font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-accent' : 'text-navy'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
