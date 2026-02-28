import React, { useEffect, useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle, Award } from 'lucide-react';

const ReviewsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      text: "GnJ Worldwide transformed our legacy systems into a modern, efficient cloud infrastructure. Their team's expertise is unmatched.",
      stars: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, Innovation Labs",
      text: "The dedication and technical prowess shown by the GnJ team helped us launch our product 2 months ahead of schedule.",
      stars: 5
    },
    {
      name: "Emily Williams",
      role: "Director, HealthPlus",
      text: "Outstanding service! They truly understood our compliance needs in the healthcare sector and delivered a secure, robust solution.",
      stars: 5
    },
    {
      name: "David Miller",
      role: "Founder, StartUp Inc",
      text: "Partnering with GnJ was the best decision for our startup. They scaled with us from day one and provided invaluable guidance.",
      stars: 4
    },
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

  return (
    <div className="bg-white min-h-screen pt-20">
       <div className="bg-sky-50 py-24 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Client Reviews</h1>
          <p className={`text-xl text-slate-600 mb-12 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>See what our partners have to say about working with us.</p>
          
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

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

       {/* Video Testimonials Placeholder */}
       <div className="bg-slate-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Hear from our clients directly</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className={`bg-slate-800 rounded-2xl aspect-video flex items-center justify-center relative group cursor-pointer hover:bg-slate-700 transition-all duration-500 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                          <div className="font-bold">John's Story</div>
                          <div className="text-sm text-slate-400">CEO, Financial Corp</div>
                      </div>
                  </div>
                  <div className={`bg-slate-800 rounded-2xl aspect-video flex items-center justify-center relative group cursor-pointer hover:bg-slate-700 transition-all duration-500 delay-500 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                       <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                       <div className="absolute bottom-4 left-4">
                          <div className="font-bold">Tech Transformation</div>
                          <div className="text-sm text-slate-400">HealthPlus Systems</div>
                      </div>
                  </div>
              </div>
          </div>
       </div>
    </div>
  );
};

export default ReviewsPage;