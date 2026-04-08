import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Cpu, Server, ShieldCheck, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    title: "Empowering Your Digital Future",
    subtitle: "Partner with industry veterans to architect scalable software solutions. We guide your digital transformation with precision-engineered code and strategic development planning.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070",
    bgColor: "bg-blue-50",
    pillColor: "bg-blue-100 text-blue-700",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    icon: Code,
    iconText:"Modern Solutions",
    learnMoreHref: "/services"
  },
  {
    id: 2,
    title: "Advanced Hardware Solutions",
    subtitle: "Power your enterprise with robust infrastructure. From custom server configurations to IoT deployments, we provide the physical foundation for your digital success.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
    bgColor: "bg-indigo-50",
    pillColor: "bg-indigo-100 text-indigo-700",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    icon: Cpu,
    iconText:"On Sale Refurbished",
    learnMoreHref: "/hardware"
  },
  {
    id: 3,
    title: "Seamless Systems Integration",
    subtitle: "Bridging the gap between powerful hardware and intelligent software. We create unified ecosystems that optimize performance, security, and operational efficiency.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    bgColor: "bg-emerald-50",
    pillColor: "bg-emerald-100 text-emerald-700",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    icon: Server,
     iconText:"Deal Of the Day",
    learnMoreHref: "/solutions"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const setSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const slide = SLIDES[currentSlide];
  const Icon = slide.icon;

  return (
    <div className={`relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden transition-colors duration-1000 ease-in-out ${slide.bgColor}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-current rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-current rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 z-10">
            <div key={slide.id} className="animate-fade-in">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-colors duration-500 ${slide.pillColor}`}>
                <Icon size={16} className="mr-2" />
                <span>{slide.iconText}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                {slide.title}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                {slide.subtitle}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
                 <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <ShieldCheck size={16} className="text-green-600" />
                    <span className="text-xs font-bold text-slate-700">Trusted Partner</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-xs font-bold text-slate-700">Industry Leader</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <Globe size={16} className="text-blue-500" />
                    <span className="text-xs font-bold text-slate-700">Global Reach</span>
                 </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact"
                  className={`${slide.buttonColor} text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center group`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to={slide.learnMoreHref}
                  className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {SLIDES.map((s, index) => {
              const SlideIcon = s.icon;
              return (
              <div 
                key={s.id}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out transform ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100 translate-x-0 rotate-0' 
                    : index < currentSlide 
                      ? 'opacity-0 scale-95 -translate-x-12 -rotate-6'
                      : 'opacity-0 scale-105 translate-x-12 rotate-6'
                }`}
              >
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2">
                   <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10 pointer-events-none" />
                   <img 
                     src={s.image} 
                     alt={s.title}
                     className="w-full h-full object-cover rounded-[2rem]"
                   />
                   
                   {/* Floating Badge */}
                   {index === currentSlide && (
                     <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 animate-bounce-slow z-20">
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center ${s.pillColor}`}>
                         <SlideIcon size={24} />
                       </div>
                       <div>
                         <div className="text-sm font-bold text-slate-900">Innovative Solutions</div>
                         <div className="text-xs text-slate-500">Tailored for your business</div>
                       </div>
                     </div>
                   )}
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:left-8 lg:translate-x-0 flex space-x-3 z-20">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-slate-900 w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;