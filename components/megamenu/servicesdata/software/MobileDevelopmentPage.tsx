import React, { useEffect } from 'react';
import { 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  MessageSquare, 
  Truck, 
  ShoppingCart, 
  ShieldPlus, 
  HeartPulse, 
  Banknote, 
  ShieldCheck, 
  Factory, 
  Plane, 
  CalendarCheck, 
  Home, 
  Gavel, 
  AlertTriangle, 
  HandHeart, 
  Tv, 
  Apple, 
  Play, 
  Layers, 
  Globe, 
  Watch, 
  Glasses, 
  Cpu, 
  Monitor,
  MapPin, 
  CreditCard, 
  PhoneCall, 
  RefreshCw, 
  Mic, 
  Bot, 
  Zap, 
  UserCheck, 
  Eye, 
  QrCode, 
  Bell, 
  BarChart3, 
  Target, 
  DollarSign, 
  Users2, 
  Lock, 
  BookOpen, 
  ClipboardList, 
  LifeBuoy, 
  Settings2, 
  Brain, 
  Database, 
  Link as LinkIcon, 
  Search, 
  PenTool, 
  Compass, 
  Code2, 
  Server, 
  ChevronRight,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const MobileDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const appTypes = [
    { title: "Enterprise apps", icon: Building2, items: ["Inspection & quality control", "Compliance & audit", "Remote asset monitoring", "Asset management", "Mobile BI & reporting", "Customer service", "Field service", "Field sales", "Loyalty management", "Invoicing & payments", "Employee management", "Corporate training", "Secure messaging"] },
    { title: "Communication & social", icon: MessageSquare, items: ["Video conferencing", "Collaboration tools", "Instant messaging", "Social media apps", "Community & event apps", "Dating & matchmaking"] },
    { title: "SCM & logistics", icon: Truck, items: ["Supply chain planning", "Inventory counting (RFID/Barcodes)", "Warehouse management", "Procurement management", "Transportation planning", "Fleet management", "Driver navigation", "Last-mile delivery"] },
    { title: "mCommerce apps", icon: ShoppingCart, items: ["Ecommerce websites", "Auction & resale platforms", "Subscription box apps", "On-demand food delivery", "Supermarket delivery", "Coupon & loyalty rewards", "Price comparison", "Live stream shopping"] },
    { title: "Secure medical apps", icon: ShieldPlus, items: ["Telemedicine apps", "Patient portal apps", "Care coordination", "EHR/EMR mobile access", "Nurse & staff apps", "Medical inventory", "Chronic disease management", "Remote patient monitoring", "Digital therapeutics"] },
    { title: "Health & fitness", icon: HeartPulse, items: ["Health tracking", "Activity & step tracking", "Workout & personal training", "Meditation & relaxation", "Mental health apps", "Diet & nutrition", "Medication tracking", "Sleep tracking", "Pregnancy & baby care"] },
    { title: "Banking & finance", icon: Banknote, items: ["Mobile banking", "Payment apps", "P2P money transfer", "Digital & crypto wallets", "Lending apps", "Buy Now, Pay Later", "Personal finance", "Retail investment", "Wealth planning", "Robo-advisors"] },
    { title: "Insurance apps", icon: ShieldCheck, items: ["Life insurance", "Health insurance", "Auto insurance", "Home insurance", "Commercial insurance", "Specialty insurance", "Parametric insurance", "Microinsurance", "P2P insurance", "Usage-based insurance"] },
    { title: "Manufacturing", icon: Factory, items: ["MES systems", "PLM systems", "BOM & inventory", "Product quality (QMS)", "Equipment monitoring", "Machine monitoring", "Condition monitoring", "Production scheduling", "HMI apps", "Industrial IoT (IIoT)"] },
    { title: "Travel & hospitality", icon: Plane, items: ["Ride-hailing & taxi", "Public transit mobility", "Carpooling apps", "Vehicle rental", "Navigation & maps", "Vacation rentals", "Hotel & resort booking", "Business travel management", "Flight alerts"] },
    { title: "Booking & reservation", icon: CalendarCheck, items: ["Event ticketing", "Meeting room scheduling", "Equipment booking", "Restaurant reservations", "Fitness class booking", "Salon & spa appointments", "Activity & experience booking"] },
    { title: "Real estate apps", icon: Home, items: ["Property browsing", "Property rental apps", "360° virtual tours", "AR home staging", "VR property showcasing"] },
    { title: "e-Government", icon: Gavel, items: ["Digital ID portals", "Tax filing services", "Social benefits access", "Digital voting", "Citizen reporting"] },
    { title: "Public safety", icon: AlertTriangle, items: ["Disaster alerts", "Emergency response", "Public health alerts", "Epidemic tracking"] },
    { title: "Nonprofit & aid", icon: HandHeart, items: ["Fundraising & donations", "Charity coordination", "Beneficiary registration", "Aid distribution tracking", "Campaign management", "Volunteer training"] },
    { title: "Entertainment & media", icon: Tv, items: ["IPTV apps", "Video-on-demand (SVOD)", "Live sports streaming", "Music streaming", "Podcast apps"] }
  ];

  const approaches = [
    { title: "Native mobile apps", techs: "Objective-C, Swift, Java, Kotlin", desc: "Built specifically for one mobile OS using its official tools and languages.", icon: Smartphone },
    { title: "Near-native apps", techs: "React Native, Flutter, Xamarin", desc: "Built from a single codebase for both iOS and Android but treated as native.", icon: Layers },
    { title: "Hybrid mobile apps", techs: "Cordova, Ionic", desc: "Developed using web technologies (HTML, CSS, JS) and displayed via WebView.", icon: Globe },
    { title: "Responsive web apps", techs: "HTML5, CSS3, JS", desc: "In-browser apps designed with a single codebase that adapts to all screen sizes.", icon: Monitor },
    { title: "Progressive Web Apps", techs: "PWA, Service Workers", desc: "Enhanced responsive apps with native-like features like offline access and push notifications.", icon: Zap },
    { title: "Smartwatch apps", techs: "watchOS, Wear OS", desc: "Companions to full-scale apps providing notifications and fitness tracking.", icon: Watch },
    { title: "Smart TV apps", techs: "tvOS, Android TV, Roku", desc: "Sharing code with mobile apps for streaming services like Netflix and YouTube.", icon: Tv },
    { title: "AR/VR wearables", techs: "VisionOS, Meta Quest", desc: "Apps for headsets like Apple Vision Pro and Meta Quest, often paired with mobile.", icon: Glasses },
    { title: "IoT apps", techs: "MQTT, WebSockets", desc: "Interfaces for IoT ecosystems (Apple Home, Tesla) serving as a control hub.", icon: Cpu }
  ];

  const features = [
    { title: "Geolocation", icon: MapPin },
    { title: "Payments", icon: CreditCard },
    { title: "Messaging & Calling", icon: PhoneCall },
    { title: "Multi-device Sync", icon: RefreshCw },
    { title: "Voice Recognition", icon: Mic },
    { title: "Chatbots", icon: Bot },
    { title: "Immersive Experience", icon: Zap },
    { title: "Scheduling & Booking", icon: CalendarCheck },
    { title: "UX Personalization", icon: UserCheck },
    { title: "Image Recognition", icon: Eye },
    { title: "QR Code Scanning", icon: QrCode },
    { title: "Push Notifications", icon: Bell },
    { title: "Wearables Integration", icon: Watch },
    { title: "IoT Interaction", icon: Cpu },
    { title: "Mobile BI", icon: BarChart3 }
  ];

  const projectFlow = [
    { title: "Project scoping", desc: "Techniques for analyzing requirements and avoiding scope creep.", icon: Target },
    { title: "Cost estimation", desc: "Vast set of factors we consider to estimate accurately.", icon: DollarSign },
    { title: "Collaboration", desc: "Forms of collaboration to keep you informed of progress.", icon: Users2 },
    { title: "Risk management", desc: "Effective risk mitigation strategies for your project.", icon: AlertTriangle },
    { title: "Documentation", desc: "Comprehensive scope of documents at each SDLC stage.", icon: BookOpen },
    { title: "Knowledge management", icon: ClipboardList, desc: "Incorporating knowledge management into all processes." },
    { title: "Reporting", icon: BarChart3, desc: "Reporting tools and types of reports we routinely provide." },
    { title: "Post-launch warranty", icon: LifeBuoy, desc: "Confidence in having no severe issues with delivered software." },
    { title: "Change management", icon: Settings2, desc: "Process of recording and prioritizing feasible changes." }
  ];

  const complexityLevels = [
    { 
      level: "Simple app", 
      price: "$30,000–$80,000", 
      productPrice: "$80,000–$150,000",
      features: ["Simple UI and navigation", "Basic features (one primary function)", "Low programming complexity", "Fast development"]
    },
    { 
      level: "Medium complexity", 
      price: "$80,000–$200,000", 
      productPrice: "$150,000–$300,000",
      features: ["Interactive interface", "Multi-step user journeys", "Multiple use cases", "Data storage & API integrations"]
    },
    { 
      level: "High complexity", 
      price: "$200,000–$500,000", 
      productPrice: "$300,000+",
      features: ["Rich & dynamic interface", "Advanced interactions", "Complex business logic", "Custom back-end & algorithms"]
    }
  ];

  const advancedTech = [
    { title: "Big data", icon: Database },
    { title: "Internet of Things", icon: Cpu },
    { title: "Data science", icon: Brain },
    { title: "Augmented Reality", icon: Layers },
    { title: "Virtual Reality", icon: Glasses },
    { title: "Artificial Intelligence", icon: Brain },
    { title: "Image recognition", icon: Eye },
    { title: "Blockchain", icon: LinkIcon }
  ];

  const timeline = [
    { time: "Up to 1 hour", desc: "To get an initial response and a sales manager assigned." },
    { time: "2–4 days", desc: "To get CVs of mobile developers with the required skills." },
    { time: "1–2 weeks", desc: "To assemble a full project team and set off." },
    { time: "2–3 months", desc: "To get an MVP ready and launched." },
    { time: "3–10 months", desc: "To get a full-fledged mobile app." },
    { time: "Lifetime", desc: "To evolve your app following market trends and user needs." }
  ];

  const services = [
    { title: "Product design", icon: PenTool, desc: "Market analysis and brand identity to spot competitive advantage." },
    { title: "Mobile app consulting", icon: Compass, desc: "Concept finalization, platform compatibility, and cost optimization." },
    { title: "Mobile app design", icon: PenTool, desc: "Sleek UX and visually appealing UI to ensure engagement." },
    { title: "Mobile app development", icon: Code2, desc: "Creating and deploying fast, stable & high-performing apps." },
    { title: "Web development", icon: Globe, desc: "Complementing your app with a web portal, store or SaaS." },
    { title: "Mobile app integration", icon: LinkIcon, desc: "Seamless integration with back ends and third-party software." },
    { title: "Testing and QA", icon: ShieldCheck, desc: "Functional, performance, security, and accessibility testing." },
    { title: "Maintenance & support", icon: LifeBuoy, desc: "L1–L3 support, compliance, security, and app evolution." },
    { title: "App modernization", icon: RefreshCw, desc: "Redesign architecture, refactor code, and offer new look and feel." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 border border-purple-700 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Smartphone size={14} />
              Mobile App Development
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Native, Cross-Platform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">& Progressive Apps</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              GnJ Worldwide creates mobile applications with stable performance, human-centered design and a unique selling proposition to stand out in a fierce market.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-purple-500/50 flex items-center group">
                Start Your App Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- APP TYPES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">App Types We Develop: Industry & Use Cases</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We find a unique value proposition for each app and tailor the functionality uniquely to its audience's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((type, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  <type.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-6">{type.title}</h4>
                <ul className="space-y-2 mb-6 flex-grow">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 size={14} className="text-green-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-purple-600 font-bold hover:text-purple-800 transition-colors group mt-auto">
                  See more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPROACHES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Mobile App Development Approaches</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We ensure app success by delivering striking UI, secure app code, and resilient back ends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  <approach.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{approach.title}</h4>
                <div className="text-purple-600 text-sm font-bold mb-4">{approach.techs}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{approach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Building All Mobile Features Modern Users Need</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We rely on our expertise in different techs and tools to make an app truly helpful and worth taking your users' screen space.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-12 h-12 rounded-xl bg-white text-purple-600 flex items-center justify-center mb-4 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <feature.icon size={24} />
                </div>
                <span className="text-sm font-bold text-slate-700 leading-tight">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECT FLOW --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Benefit from a Smoothly Organized Project Flow</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We've described all the key sides of our cooperation so that you know what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectFlow.map((flow, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  <flow.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{flow.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{flow.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-purple-600 font-bold hover:text-purple-800 transition-colors group">
                  Explore <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COSTS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Cost of Mobile App Development</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The development cost of a mobile app of average complexity varies between $80,000 and $200,000.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {complexityLevels.map((level, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 hover:border-purple-500 transition-all duration-300">
                <h4 className="text-2xl font-bold mb-6">{level.level}</h4>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Business Needs</div>
                    <div className="text-3xl font-bold text-purple-400">{level.price}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Commercial Product</div>
                    <div className="text-3xl font-bold text-pink-400">{level.productPrice}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                      <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADVANCED TECH --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Advanced Technologies We're Skilled In</h2>
            <p className="text-xl text-slate-600">
              Expanding the scope of functions the software can perform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advancedTech.map((tech, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-600 transition-colors">
                  <tech.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{tech.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TIMELINE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Move Your Mobile Project On at Your Convenient Pace</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-white text-purple-600 flex items-center justify-center shadow-sm shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900 mb-2">{item.time}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Mobile Application Development Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to launch your mobile app?</h2>
          <p className="text-xl text-purple-100 mb-10">
            Get a free consultation and a tailored quote for your mobile development needs.
          </p>
          <Link to="/contact" className="inline-block bg-white text-purple-600 font-bold py-4 px-10 rounded-xl hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl">
            Request a Free Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default MobileDevelopmentPage;
