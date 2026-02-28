import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Singh",
    role: "Director of Blown Insulation Services Pvt. Ltd.",
    company: "Blown Insulation Services Pvt. Ltd.",
    image: "", // Placeholder for Rajesh
    logo: "https://blowninsulationservices.com/blownimage/blown.png", // Fallback logo
    content: "Working with GnJ was a game-changer. They provided innovative solutions that streamlined our processes and improved productivity by 40%. Outstanding support throughout the entire engagement.",
    stars: 5,
    highlight: ["flexible", "responsive", "demos", "business needs", "supporting"],
    projectUrl: "https://blowninsulationservices.com"
  },
  {
    id: 2,
    name: "Amit Gadhavi",
    role: "Director of Jetwings Shipping LLP",
    company: "Jetwings Shipping LLP",
    image: "", // Placeholder for Amit
    logo: "https://jetwingsshipping.com/images/Copy%20of%20Jetwings%20Shipping%20LLP..png", // Fallback logo
    content: "I would like to sincerely appreciate the excellent work done on our website design and business profile. The website looks superb — clean layout, professional design, user-friendly navigation, and a very modern appearance. It clearly reflects our company’s vision and creates a strong first impression for clients and partners. The business profile is also well-structured, informative, and professionally presented. The content flow, design elements, and overall presentation effectively communicate our services and strengths. Overall, this work has added great value to our brand image. Thank you for your creativity, dedication, and timely support. Keep up the great work.",
    stars: 5,
    highlight: ["excellent work", "superb", "professional design", "modern appearance", "brand image"],
    projectUrl: "https://jetwingsshipping.com"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-sky-50 py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-yellow-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Clients Say
          </h2>
          <div className="w-24 h-1.5 bg-yellow-400 rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Trusted by global leaders. Read what our partners have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 hover:shadow-lg transition-shadow duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-blue-200 group-hover:text-blue-300 transition-colors">
                <Quote size={64} fill="currentColor" />
              </div>

              {/* Header: Image & Info */}
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-bold text-2xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  {/* Company Logo Badge (Small) */}
                  <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-slate-50">
                    <img src={testimonial.logo} alt="Company" className="w-6 h-6 rounded-full object-contain" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {testimonial.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-1">{testimonial.role}</p>

                  {/* Company Name Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-blue-100/50 px-2 py-0.5 rounded text-xs font-semibold text-blue-700">
                    {testimonial.company}
                    <ExternalLink size={10} />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-slate-700 leading-relaxed text-[15px] italic">
                  "
                  {testimonial.content.split(' ').map((word, i) => {
                    // Simple highlighting logic based on the highlight array
                    const cleanWord = word.replace(/[.,]/g, '');
                    const shouldHighlight = testimonial.highlight.some(h =>
                      cleanWord.toLowerCase().includes(h.toLowerCase()) || h.toLowerCase().includes(cleanWord.toLowerCase())
                    );

                    return shouldHighlight ? (
                      <span key={i} className="font-semibold text-slate-900">{word} </span>
                    ) : (
                      <span key={i}>{word} </span>
                    );
                  })}
                  "
                </p>
              </div>

              {/* Footer / CTA */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex justify-end relative z-10">
                <a
                  href={testimonial.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  Check the project
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;