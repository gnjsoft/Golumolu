import React, { useEffect } from 'react';
import { 
  Code2, 
  ArrowRight, 
  Check, 
  LayoutTemplate, 
  ShieldCheck, 
  Zap, 
  Search, 
  Target, 
  Settings, 
  Layers, 
  Cloud, 
  RefreshCw, 
  Shield,
  SearchCode,
  Box,
  Users,
  Workflow,
  FileSearch,
  Lightbulb,
  ClipboardCheck,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  ShoppingCart,
  IndianRupee,
  FileText,
  Megaphone,
  BrainCircuit,
  Eye,
  Stethoscope,
  Landmark,
  Heart,
  Factory,
  Truck,
  Flame,
  ZapOff,
  Briefcase,
  Construction,
  Palmtree,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Lock,
  BookOpen,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const SoftwareConsultingPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const serviceScope = [
    { title: "Software stack assessment", icon: SearchCode, desc: "Auditing current software performance, planning improvements like modernization, refactoring, or migration." },
    { title: "Software architecture assessment & redesign", icon: LayoutTemplate, desc: "Identifying flaws affecting performance and security. Redesigning for resilience and optimized maintenance." },
    { title: "Software modernization", icon: RefreshCw, desc: "Gradual transition to modern programming techs without disrupting critical business operations." },
    { title: "Software selection", icon: ClipboardCheck, desc: "Evaluating vendors and pricing plans to match requirements. Providing comparison summaries for best-suited candidates." },
    { title: "Software development", icon: Code2, desc: "Working out solutions to cover business needs. Assembling full project teams to release specified solutions." },
    { title: "Software compliance consulting", icon: ShieldCheck, desc: "Validating compliance with industry laws and regulations. Listing requirements to license software products." },
    { title: "Team augmentation", icon: Users, desc: "Providing staff resources to complete the required skillset of any project role in your development team." },
    { title: "Setup of DevOps processes", icon: Workflow, desc: "Building an effective DevOps pipeline to speed up your software delivery process." },
    { title: "Business process analysis", icon: FileSearch, desc: "Auditing processes and planning improvements with software-only changes like workflow automation." },
    { title: "SDLC consulting", icon: Settings, desc: "Reviewing processes and tools. Offering best practices to accelerate development and raise quality." },
    { title: "Software product consulting", icon: Lightbulb, desc: "Analyzing target markets and conceptualizing products with unique selling propositions and UX research." },
    { title: "QA process setup", icon: Zap, desc: "Implementing time-saving testing automation practices and providing skilled testing engineers." }
  ];

  const solutionConsulting = [
    { category: "Software development consulting", items: ["Web consulting", "Mobile consulting", "SaaS consulting", "Cloud consulting"], icon: Globe },
    { category: "Solution consulting", items: ["Supply chain", "CRM", "Data analytics", "Ecommerce", "Corporate finance", "Project management", "Document management", "Marketing & Advertising", "Data science", "IoT", "Computer vision", "ITSM consulting"], icon: Box }
  ];

  const industries = [
    { name: "Healthcare", icon: Stethoscope },
    { name: "Banking", icon: Landmark },
    { name: "Insurance", icon: Heart },
    { name: "Lending", icon: IndianRupee },
    { name: "Payments", icon: Zap },
    { name: "Investment", icon: TrendingUp },
    { name: "Real estate", icon: Box },
    { name: "Retail", icon: ShoppingCart },
    { name: "Manufacturing", icon: Factory },
    { name: "Logistics and Transportation", icon: Truck },
    { name: "Oil and Gas", icon: Flame },
    { name: "Energy and utilities", icon: ZapOff },
    { name: "Professional services", icon: Briefcase },
    { name: "Telecoms", icon: Smartphone },
    { name: "Engineering and construction", icon: Construction },
    { name: "Travel and hospitality", icon: Palmtree }
  ];

  const caseStudy = [
    { challenge: "Reliance on Excel for complex multi-asset portfolio management", solution: "Concept for a modern, SaaS-ready investment management solution built on Azure and .NET" },
    { challenge: "Difficulty consolidating and reconciling siloed investment data", solution: "Secure integrations with custodian banks and FactSet for automated data aggregation" },
    { challenge: "Lack of in-house software engineering and consulting expertise", solution: "End-to-end consulting and technical design by GnJ Worldwide’s investment IT experts" },
    { challenge: "Inefficient visualization of investment performance in Excel", solution: "UX wireframes and investment-specific dashboards using SyncFusion libraries" },
    { challenge: "Uncertainty about SaaS market fit and unique value proposition", solution: "Market research, competitive analysis, and SaaS go-to-market strategy" },
    { challenge: "Risk of costly rework due to unclear requirements", solution: "Detailed functional specification and triaged MVP feature scope" },
    { challenge: "Concerns about scalability and future SaaS evolution", solution: "Modular monolith architecture enabling both quick MVP delivery and flexible future growth" },
    { challenge: "Limited project budget and tight MVP timeline", solution: "Agile roadmap with 4 staged development phases and a lean 8-month MVP plan" },
    { challenge: "Need for cost-efficient testing of integrations", solution: "Use of test containers to minimize risks and expenses in integration testing" },
    { challenge: "No structured development plan or timeline", solution: "Work breakdown structure, resource plan, risk mitigation strategy, and clear cost estimates" }
  ];

  const bestPractices = [
    { title: "Risk-proof project scoping", desc: "Accurately scope the project at the start and assess feasibility of alterations to avoid scope creep.", icon: Target },
    { title: "Realistic cost estimation", desc: "Analyze the project from different perspectives to factor in all risks and estimate cost precisely.", icon: IndianRupee },
    { title: "Focus on user experience", desc: "Research user expectations to design winning UX/UI and ensure high user adoption.", icon: Eye },
    { title: "Healthy collaboration", desc: "Foster collaboration based on transparency, efficiency, and mutual respect.", icon: Users },
    { title: "Quality throughout SDLC", desc: "Introduce quality control mechanisms at every stage to detect and solve issues early.", icon: ClipboardCheck },
    { title: "Top security", desc: "Implement a robust security management system to safeguard environment, software, and data.", icon: Lock },
    { title: "Centralized project knowledge", desc: "Establish mature documentation practices to create a single source of truth.", icon: BookOpen },
    { title: "Objective success measurement", desc: "Define unique success criteria and KPIs to stay in control of project progress.", icon: PieChart }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Lightbulb size={14} />
              Software Consulting Services
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Realize the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Full Value</span> of Your Software
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Make reasonable, future-proof software decisions with expertise built on 4,200+ success stories across varied IT needs.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center group">
                Consult with Experts <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICE SCOPE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Service Scope: Technology Advisory and Beyond</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We help you see and realize the full business value that software can potentially deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceScope.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOCUSED CONSULTING --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">We Help Select, Build and Manage Different Software Solutions</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expertise across a variety of software domains allows us to provide precisely focused consulting services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {solutionConsulting.map((group, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 p-10 rounded-[2rem] backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                    <group.icon size={24} />
                  </div>
                  <h4 className="text-2xl font-bold">{group.category}</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRY EXPERTISE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Expert Management of Industry-Specific Software</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We have provided software consulting and development services for 30+ industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <industry.icon size={20} />
                </div>
                <span className="font-bold text-slate-800">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CASE STUDY --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200">
            <div className="p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">One Example of GnJ Worldwide’s Consulting in Action</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    How we helped a family office move beyond spreadsheets and prepare for the launch of a SaaS-ready investment management platform in just 4 weeks.
                  </p>
                </div>
                <div className="bg-blue-600 text-white p-8 rounded-3xl text-center shrink-0">
                  <div className="text-4xl font-bold mb-1">4 Weeks</div>
                  <div className="text-blue-100 text-sm font-medium">To Clear Roadmap</div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900 text-white p-6 rounded-2xl font-bold text-lg hidden md:grid">
                  <div>Client Challenges</div>
                  <div>GnJ Worldwide's Solution</div>
                </div>
                {caseStudy.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                    <div>
                      <div className="md:hidden text-xs font-bold text-slate-400 uppercase mb-2">Challenge</div>
                      <div className="flex gap-3">
                        <AlertCircle size={20} className="text-amber-500 shrink-0 mt-1" />
                        <p className="text-slate-700 font-medium">{item.challenge}</p>
                      </div>
                    </div>
                    <div>
                      <div className="md:hidden text-xs font-bold text-slate-400 uppercase mb-2">Solution</div>
                      <div className="flex gap-3">
                        <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-1" />
                        <p className="text-slate-600">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BEST PRACTICES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Software Development and Project Management Best Practices</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We implement quality control and risk management at every stage of the SDLC.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestPractices.map((practice, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white text-blue-600 flex items-center justify-center mb-6 shadow-sm">
                  <practice.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{practice.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{practice.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to optimize your software strategy?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Leverage our expertise to build resilient, scalable, and high-performing software solutions.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl transform hover:-translate-y-1">
            Book Your Consulting Session
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SoftwareConsultingPage;
