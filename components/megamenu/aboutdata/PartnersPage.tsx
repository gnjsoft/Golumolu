import React, { useEffect, useState } from 'react';
import { ArrowRight, Handshake } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const cloudPartners = [
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" }
  ];

  const techPartners = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
     { name: "ServiceNow", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwBBLfJlsQ1OJQLPE4UlRZonkVjSPVq-vZw&s" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Zoho", logo: "https://cdn.worldvectorlogo.com/logos/zoho-1.svg" }
  ];

  const hardwarePartners = [
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { name: "Hewlett Packard Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "TP-Link", logo: "data:image/png;base64,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" },
    { name: "D-Link", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAACUCAMAAACqYkXNAAAAYFBMVEX///8rjKFPm60hiZ/w9fcAe5Q+k6bl7vE0j6MAfpZcorLz+Pm20trV5ekAgJfR4+jJ3ePd6u1np7aKuMR4rrymydKbwszA2d+CtMFAjqNIlKiTvskAdY+TucWuzdVup7fd4qSyAAAFM0lEQVR4nO2ZiZKjNhRFQWIXCDBrmo79/38Zsdg8gaAxjSepyj1dM1VgJN7RLmFZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzXEI4j/u0Y/gQiqW4sKuP8VGo/TS+OpyeLTTRZ6m+nEXmyRo+1sCVXhKx5OyI/riMur28QTWDbfI3tqSrZjLJha/6isTmlymKA22+5OlldMlVK9rdzWmmLYAppyeB7Mzc/PzIUDqNPVHLOqDxaP/69ZV7Ax0JyL1etQ742nK/szJSoCtdFE9L27kiSR7TTEygpl+TdH1D9Yh6NmEURIxXNvwz1KqLgy9NKSF10Wq5UtTwWiSglzfN6Vct3GuqaCCFqci1NgfpZmkU0rjZutFZqk8I62lcTHkWfVVXvYK/AuNc3NvEgGjI2p2pIxQXLsOYGLvkqfdJR+VcROVmek0L/iGq6VLUyrXGaR5WU9Ndg8Vsy/calLJcdICs92U5ZZsUtiqLHa5oSf17VKunQZO5re6rCVQOMDCWrVHZiXgw4TRn0A9+g6rTBc5a7P9OZVP38RXJuPbKrKmhH5MZReE/VElV1b4a4nMoNete0apl0x4GHF0IkkSvntyabqvW3O/P99/WqdF60+eNt1SnyvCnUBMKUiO+SiYSX8U2b43i9pdqQt3BZ/rZRm1Qt9tMYuq/qJ1lct6zXG1RLV1OTi8l86rwr1TwgURT1b9uvWTXTZkZDae6qlox5z8XIoFoXbGNVNjxy842qPpnR5H0VwkWqakInoRh6655qGpI116BqWfGiIrWLKDepioKY1heYmlWtlK6ZxmWs08TqrydOd1U9bXHJhiE4m9ti/572iz5iVqUL6c66ArOqVdN1RF8xDQ/lhOs5ybaqqO4tKaexVqkqL9QNUmVGVUH60LMzf0g1J71LVvq1mgn3h6V8T5V7vVlKbhhU5X1uVvJx0eZ1Q5WuI2ShdRx+c35StZd9laoOo1A67xhMqvbcCSS7auV0RLVTW6w5iKD5abIxqBKJQ6rz496vJ5kfVEkodthY5GrY7byhuhyW3lSVxtXaharabGP7Tug9CVrrPdVzDfjPqdJ5UHZC7WufjI9sqPpZlV+sOmXwMVVH23ofXULk1Y2794tVVQ4Hj2zOqWrrfdNBmFG1UIvbYS9+qerr94+oCtpRbdNBhEl1WLNuqZLID6nSCA4fxZ1QpYvz45u49MuoemoElg09qZPX1KtBtdEq1XgOZlIdhrKLGrBrCXa561pV/FypRtXhTPSiBuzqS1Fb3i5ow6sTQ22lb0vzKwyq4/byogbs6o/09fr75WFDyntQTegGK6zMqegQPanex634huq7tdqP+o12dnH7pavf0W1y0CRJrLUbc/OlW5d+U+b4vj/tB0ZV+vMwgJPuP46nVDUYTxUTstEb9+I1/WTCvY0z6WMU39oIZMswJAc/3FiSouVS/2oj+/O856e32BIxbXk8KFJVqdpuva201qm26ncrabWvI5JHcd/9aTop2ePsJt3XRXW4DDpTm0m0M7FVqrvV6g9wt7Mi/U7YWv6NSriFeCw/evG+73R8kfLsGVNp+Ho4IWVQmBfaTG6nUsQiWGbl56F+x/X7MYLk4zr5Klc29OA7k+SXraHjgKrhm/DIo2uSjb3/ZpqBWiSLO15nNZ5+pz9xsdIiIjcyFi2YrPK4WN07gXC22Dni2EwzYHhArN4jlm/vH1F/Yv6n/pujfN07bQoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+7/wDh5lKgKuKfN4AAAAASUVORK5CYII=" }
  ];

  const renderPartnerGrid = (partners: any[], title: string, baseDelay: number) => (
    <div className={`mb-16 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${baseDelay}ms` }}>
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
        {partners.map((partner, idx) => {
          const content = (
            <div className="flex items-center justify-center p-8 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-all h-32 group hover:-translate-y-1 w-full">
              <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          );
          
          return partner.url ? (
            <a key={idx} href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
              {content}
            </a>
          ) : (
            <div key={idx} className="block">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="relative bg-slate-900 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Strategic Partners</h1>
          <p className={`text-xl text-slate-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Collaborating with industry leaders to bring the best technology solutions to our clients.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {renderPartnerGrid(cloudPartners, "Cloud Infrastructure Partners", 300)}
        {renderPartnerGrid(techPartners, "Software & Platform Partners", 500)}
        {renderPartnerGrid(hardwarePartners, "Hardware & Network Partners", 700)}
      </div>

      {/* Become a Partner CTA */}
      <div className="bg-blue-600 py-20">
        <div className={`max-w-5xl mx-auto px-4 text-center text-white transition-all duration-1000 delay-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Handshake size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Join our Partner Ecosystem</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Together we can achieve more. Partner with GnJ Worldwide to access new markets, advanced technology, and shared growth opportunities.
          </p>
          <button className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors inline-flex items-center">
            Become a Partner <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;