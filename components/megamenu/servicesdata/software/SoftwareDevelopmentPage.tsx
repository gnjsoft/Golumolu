import React, { useEffect } from 'react';
import { 
  Code2, 
  ArrowRight, 
  CheckCircle2,
  Stethoscope,
  Building2,
  ShieldCheck,
  Banknote,
  CreditCard,
  TrendingUp,
  Home,
  ShoppingBag,
  Factory,
  Truck,
  Droplets,
  Zap,
  Briefcase,
  Phone,
  HardHat,
  Palmtree,
  Settings,
  Package,
  Box,
  Megaphone,
  Wallet,
  BarChart3,
  Users,
  MessageSquare,
  ShieldAlert,
  Brain,
  Database,
  Cpu,
  Eye,
  Link as LinkIcon,
  Network,
  Layers,
  Glasses,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const SoftwareDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const industries = [
    { icon: Stethoscope, name: "Healthcare" },
    { icon: Building2, name: "Banking" },
    { icon: ShieldCheck, name: "Insurance" },
    { icon: Banknote, name: "Lending" },
    { icon: CreditCard, name: "Payments" },
    { icon: TrendingUp, name: "Investment" },
    { icon: Home, name: "Real estate" },
    { icon: ShoppingBag, name: "Retail" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Truck, name: "Logistics and Transportation" },
    { icon: Droplets, name: "Oil and Gas" },
    { icon: Zap, name: "Energy and utilities" },
    { icon: Briefcase, name: "Professional services" },
    { icon: Phone, name: "Telecoms" },
    { icon: HardHat, name: "Engineering and construction" },
    { icon: Palmtree, name: "Travel and hospitality" },
  ];

  const solutions = [
    {
      title: "Business & project management",
      icon: Settings,
      items: ["ERP", "Project management", "Task management", "Risk and issue management", "Compliance management", "Document management"],
      href: "/solutions/erp"
    },
    {
      title: "Sourcing & stock management",
      icon: Package,
      items: ["Procurement management software", "Vendor management", "Transportation management", "Supply chain management", "Inventory management", "Warehouse management"],
      href: "/solutions/scm"
    },
    {
      title: "Asset management",
      icon: Box,
      items: ["Asset utilization planning and control", "Remote asset monitoring", "MRO, including predictive maintenance, AR for maintenance", "Asset warranty and contract management"],
      href: "/solutions/eam"
    },
    {
      title: "Sales, marketing & customer service",
      icon: Megaphone,
      items: ["Customer relationship management", "Sales & marketing automation systems", "AdTech & MarTech", "Online catalogs", "Order management", "Customer feedback tools", "Promotions management software", "Loyalty management", "Customer service management", "Product information management", "Content management and digital asset management systems"],
      href: "/solutions/crm"
    },
    {
      title: "Corporate finance management",
      icon: Wallet,
      items: ["Financial accounting and reporting", "General ledger software", "Accounts receivable automation", "Billing and invoicing", "Cost control software", "Revenue management software", "Pricing software", "Treasury management", "Cash management systems"],
      href: "/solutions/finance"
    },
    {
      title: "Business analytics",
      icon: BarChart3,
      items: ["BI solutions (DWHs, OLAP/ROLAP cubes, visualization and reporting)", "Big data solutions", "Data science (including AI and ML) solutions"],
      href: "/solutions/analytics"
    },
    {
      title: "HR, talent & productivity management",
      icon: Users,
      items: ["HR policy management", "Recruitment management", "Onboarding management", "Workforce scheduling", "Employee performance monitoring", "Compensation & benefits management", "Corporate learning and development systems", "Central employee help desk"],
      href: "/solutions/hr"
    },
    {
      title: "Communication",
      icon: MessageSquare,
      items: ["Project team collaboration tools", "Secure messengers", "Secure videoconferencing", "Intranets", "Vendor portals", "Customer portals", "Partner portals", "Chatbots"],
      href: "/solutions/portals"
    },
    {
      title: "Security & emergency",
      icon: ShieldAlert,
      items: ["Information security systems", "Video surveillance", "Incident management systems", "Emergency response systems"],
      href: "/services/cybersecurity"
    }
  ];

  const advancedTech = [
    {
      title: "Artificial intelligence",
      icon: Brain,
      desc: "Software capable of drawing insights and triggering actions based on historical and real-time data processing."
    },
    {
      title: "Data science",
      icon: Database,
      desc: "Software that can find sophisticated patterns in data and continuously learn to deliver more accurate results."
    },
    {
      title: "Big data",
      icon: Network,
      desc: "Scalable software that aggregates and processes huge volumes of data with high velocity."
    },
    {
      title: "Computer vision",
      icon: Eye,
      desc: "Software to recognize patterns and classify objects in digital images and videos."
    },
    {
      title: "Blockchain",
      icon: LinkIcon,
      desc: "Software with decentralized and highly secure data storage enabling direct peer-to-peer transactions."
    },
    {
      title: "Internet of Things",
      icon: Cpu,
      desc: "Software that allows for fast processing and mining of data captured by physical objects."
    },
    {
      title: "Augmented reality",
      icon: Layers,
      desc: "Software capable of laying virtual objects over real surroundings."
    },
    {
      title: "Virtual reality",
      icon: Glasses,
      desc: "Software that creates fictional environment with 3D objects and realistic acoustics."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Code2 size={14} />
              Software Development
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Software Development <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              At GnJ Worldwide, we work with clients to shape software solutions across the full development lifecycle — from business analysis to delivery and support — and help modernize legacy systems or provide expert advisory at any stage of SDLC.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center group">
                Get a Consultation <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- EXPLORE SERVICES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Explore Services Tailored to You</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse our software development services based on your industry or the solution you need.
            </p>
          </div>

          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-bold text-slate-900 whitespace-nowrap">Industry-specific expertise</h3>
              <div className="h-px bg-slate-200 w-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {industries.map((industry, idx) => (
                <div key={idx} className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center">
                  <div className="w-12 h-12 rounded-xl bg-white text-blue-600 flex items-center justify-center mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <industry.icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-700 leading-tight">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-bold text-slate-900 whitespace-nowrap">Solution-focused services</h3>
              <div className="h-px bg-slate-200 w-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <solution.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-6">{solution.title}</h4>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {solution.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={solution.href} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group mt-auto">
                    See more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ADVANCED TASKS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Software for advanced business tasks</h2>
            <p className="text-xl text-slate-600">
              We work with all the mainstream technologies to expand the scope of functions the software can perform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedTech.map((tech, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <tech.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{tech.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your next big thing?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss your project requirements and how we can help you achieve your goals.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-xl hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SoftwareDevelopmentPage;
