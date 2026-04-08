import React, { useEffect, useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle, Award, ArrowRight, Building2, Briefcase, Globe, Shield } from 'lucide-react';

const ReviewsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const reviews = [
    {
        name: "Rajesh Singh",
        role: "Director, Blown Insulation",
        text: "Working with GnJ was a game-changer. They provided innovative solutions that streamlined our processes and improved productivity by 40%.",
        stars: 5
    },
    {
        name: "Amit Gadhavi",
        role: "Director, Jetwings Shipping",
        text: "The website looks superb — clean layout, professional design, user-friendly navigation. This work has added great value to our brand image.",
        stars: 5
    }
  ];

  const partners = [
    { name: "Global Tech", icon: Globe },
    { name: "Secure Systems", icon: Shield },
    { name: "Enterprise Corp", icon: Building2 },
    { name: "Business Solutions", icon: Briefcase },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
       <div className="relative bg-slate-900 py-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-30"></div>
          <div className="relative z-10">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Client Reviews</h1>
            <p className={`text-xl text-slate-300 mb-12 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>See what our partners have to say about working with us.</p>
            
            {/* Summary Stats */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center transition-all duration-700 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
                  <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <div className="text-slate-500 text-sm">Average Rating</div>
              </div>
              <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center transition-all duration-700 delay-400 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="mb-2 text-blue-500"><ThumbsUp size={24} /></div>
                  <div className="text-slate-500 text-sm">Client Retention Rate</div>
              </div>
              <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center transition-all duration-700 delay-500 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="text-4xl font-bold text-green-600 mb-2">350+</div>
                  <div className="mb-2 text-green-500"><MessageCircle size={24} /></div>
                  <div className="text-slate-500 text-sm">Happy Clients</div>
              </div>
          </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {reviews.map((review, idx) => (
                 <div key={idx} className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${600 + (idx * 100)}ms` }}>
                     <Quote className="text-blue-100 absolute top-6 right-6" size={40} fill="currentColor" />
                     <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className={`${i < review.stars ? 'text-yellow-400 fill-current' : 'text-slate-200'}`} />
                        ))}
                     </div>
                     <p className="text-slate-700 leading-relaxed mb-6 italic">"{review.text}"</p>
                     <div>
                         <h4 className="font-bold text-slate-900">{review.name}</h4>
                         <span className="text-sm text-slate-500">{review.role}</span>
                     </div>
                 </div>
             ))}
          </div>
       </div>

       {/* Trusted By Section */}
       <div className="bg-slate-50 py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-12">Trusted by Innovative Companies</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  {partners.map((partner, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center gap-3 p-6 hover:text-blue-600 transition-colors">
                          <partner.icon size={48} strokeWidth={1.5} />
                          <span className="font-semibold text-lg tracking-tight">{partner.name}</span>
                      </div>
                  ))}
              </div>
          </div>
       </div>

       {/* CTA Section */}
       <div className="bg-blue-600 py-24 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <Award size={64} className="mx-auto mb-8 text-blue-200" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to become our next success story?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who have transformed their businesses with our tailored software solutions.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
                  Start Your Project <ArrowRight size={20} />
              </a>
          </div>
       </div>
    </div>
  );
};

export default ReviewsPage;