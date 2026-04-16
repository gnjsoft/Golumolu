import React, { useEffect } from 'react';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Layout, 
  ShoppingCart, 
  Monitor, 
  Zap, 
  Search, 
  PenTool, 
  Compass, 
  Code2, 
  Server, 
  Link as LinkIcon, 
  ShieldCheck, 
  LifeBuoy, 
  RefreshCw, 
  DollarSign, 
  Target, 
  ClipboardList, 
  Users2, 
  Lock, 
  BookOpen, 
  Clock,
  Wallet,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const WebDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const solutions = [
    {
      title: "Web portals",
      desc: "Since 2005, GnJ Worldwide works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users.",
      icon: Layout,
      color: "blue"
    },
    {
      title: "Websites",
      desc: "Hundreds of businesses, governmental and non-profit organizations use the websites we've created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management.",
      icon: Globe,
      color: "purple"
    },
    {
      title: "Ecommerce",
      desc: "22 years in ecommerce development, we've grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes.",
      icon: ShoppingCart,
      color: "emerald"
    },
    {
      title: "Web apps",
      desc: "In our portfolio of thousands of web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation.",
      icon: Monitor,
      color: "indigo"
    }
  ];

  const fullScaleServices = [
    { title: "Business analysis", icon: Search, count: "40+ business analysts", desc: "Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution." },
    { title: "UX and UI design", icon: PenTool, count: "20+ UX and UI designers", desc: "We start designing a web app with the analysis of target audience and planning convenient, quick and frictionless user journeys." },
    { title: "Architecture", icon: Compass, count: "20+ architects", desc: "Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic is feasible." },
    { title: "Front-end development", icon: Code2, count: "Expert Developers", desc: "Our front-end developers can implement any design idea. We work with Angular, React, Meteor, Vue, Next, Ember." },
    { title: "Back-end development", icon: Server, count: "Expert Developers", desc: "We rely on proven frameworks and ensure fast and quality coding in .NET, Java, Python, Node.js, PHP, Go." },
    { title: "Integration", icon: LinkIcon, count: "API Specialists", desc: "We set up APIs to integrate your web app with corporate or third-party systems and services for immediate data synchronization." },
    { title: "Testing and QA", icon: ShieldCheck, count: "QA Engineers", desc: "We guarantee that your web solution will function flawlessly, work fast, be user-friendly and secure." },
    { title: "Help desk", icon: LifeBuoy, count: "L1, L2, L3 Support", desc: "We deliver hot-fixes within 24 hours to prevent or resolve any issues in usage, technology and code that may arise." },
    { title: "Evolution", icon: RefreshCw, count: "Continuous Support", desc: "We advance your web-based software to keep it efficient, competitive, and compliant with evolving business needs." }
  ];

  const costs = [
    { price: "From ₹17L", title: "Corporate Website", desc: "For a custom branded corporate website." },
    { price: "From ₹60L", title: "Customer Portal", desc: "For a self-service customer web portal." },
    { price: "From ₹1.7Cr", title: "Ecommerce Solution", desc: "With custom visual interface and business logic, integrated into IT infrastructure." },
    { price: "From ₹3.4Cr", title: "Enterprise Software", desc: "For complex enterprise web software, e.g., a custom EHR system." }
  ];

  const successFactors = [
    { title: "Scoping", icon: Target, desc: "Requirements engineering, feasibility assessment, and scoping with strict scope creep control." },
    { title: "Cost estimation", icon: DollarSign, desc: "Consideration of all cost factors with sample top-down and bottom-up estimates." },
    { title: "Quality management", icon: ClipboardList, desc: "ISO 9001-certified management system with software quality and project health KPIs." },
    { title: "Collaboration", icon: Users2, desc: "Collaboration flow from planning to success measurement with tactical communication forms." },
    { title: "Security management", icon: Lock, desc: "ISO 27001-supported security management procedures during the development project." },
    { title: "Knowledge management", icon: BookOpen, desc: "Knowledge transfer process and sample software documents across various stages." },
    { title: "Budget management", icon: Wallet, desc: "Detailed project cost estimation and consistent expenditure control to meet agreements." },
    { title: "Deadline management", icon: Clock, desc: "Key practices to manage project time and meet client's goals as fast as needed." }
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
              <Globe size={14} />
              Web Development Services
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Genuine care for your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">web development project</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              With experience from 4,200+ IT projects completed, GnJ Worldwide partners with clients to design, redesign, and support customer-facing and enterprise web apps that drive adoption and conversion.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center group">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHAT WEB SOLUTION DO YOU NEED? --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What Web Solution Do You Need?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Web development services help create all types of web-based software and ensure great experience for web users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <solution.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{solution.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FULL-SCALE WEB DEVELOPMENT --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Full-Scale Web Development by GnJ Worldwide</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Throughout all web development services, GnJ Worldwide adheres to a quality-first approach based on ISO 9001-certified quality management system and ISO 27001 security regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullScaleServices.map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                <div className="text-blue-600 text-sm font-bold mb-4">{service.count}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AVERAGE COST --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Average Cost of Different Web Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take a look at several examples from our practices and don't hesitate to request a free quote tailored to your specific solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costs.map((cost, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 hover:border-blue-500 transition-all duration-300 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-4">{cost.price}</div>
                <h4 className="text-lg font-bold mb-2">{cost.title}</h4>
                <p className="text-sm text-slate-400">{cost.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW WE ENSURE SUCCESS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How We Ensure Success in Web Development Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Apart from technical expertise, many other factors influence project success and software quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successFactors.map((factor, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <factor.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{factor.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{factor.desc}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to launch your web project?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a free consultation and a tailored quote for your web development needs.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-xl hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl">
            Request a Free Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default WebDevelopmentPage;
