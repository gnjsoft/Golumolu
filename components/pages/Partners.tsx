import React from 'react';

const PARTNERS = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Zoho", logo: "https://www.zoho.com/sites/zweb/images/zoho_general_pages/zoho-logo-512.png" },
  { name: "Softdel", logo: "https://www.softdel.com/wp-content/uploads/2022/02/softdel-colored-new-logo.png" },
  { name: "iNOS", logo: "https://inos.in/wp-content/uploads/2021/05/Logo-Inos-transperent.png" },
  { name: "LTI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/LTI_Lets_solve.png" },
  { name: "Xoriant", logo: "https://neuropi.ai/logo/Xoriant-Logo.png.bv.webp" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "ServiceNow", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwBBLfJlsQ1OJQLPE4UlRZonkVjSPVq-vZw&s" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
];

const Partners: React.FC = () => {
  // Duplicate the array to ensure seamless infinite scrolling
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-blue-100 py-24 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left Side - Heading */}
          <div className="lg:w-1/3 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Technology Partners
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              We collaborate with world-class technology leaders to deliver superior solutions. Our partnerships grant us access to the latest tools, training, and support, ensuring you get the best possible results.
            </p>
          </div>

          {/* Right Side - Carousel */}
          <div className="lg:w-2/3 w-full relative">
            
            {/* Gradient Masks for smooth fade effect on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-100 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-100 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div className="flex overflow-hidden group">
               <div className="flex animate-scroll gap-6 group-hover:[animation-play-state:paused] w-max py-4">
                  {duplicatedPartners.map((partner, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center p-6 bg-white border border-slate-200/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-[200px] h-32"
                    >
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-16 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            (e.target as HTMLImageElement).style.display = 'none';
                            const span = (e.target as HTMLImageElement).nextElementSibling;
                            if (span) span.classList.remove('hidden');
                          }}
                        />
                      ) : null}

                      {/* Text Fallback (Hidden by default if logo exists) */}
                      <span
                        className={`text-lg font-bold text-slate-700 text-center ${partner.logo ? 'hidden' : 'block'}`}
                      >
                        {partner.name}
                      </span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;