import React, { useEffect, useState } from 'react';
import { 
  CreditCard, Repeat, Shield, Globe, ArrowRight, Zap, 
  Smartphone, Wallet, Building2, Rocket, RefreshCw, 
  Settings, BarChart3, Lock, Cpu, Network, MessageSquare, 
  Bot, Eye, FileText, CheckCircle2, ShieldCheck, 
  Coins, Calculator, FileCheck, Landmark,
  Layout, Headphones, Pill, BarChart, Heart, 
  Share2, UserCog, BookOpen, Boxes, Boxes as BlockchainIcon, Truck, Kanban, 
  Terminal, ClipboardList, ClipboardCheck, Warehouse, 
  Microscope, Image as ImageIcon, Activity, Cloud, 
  Fingerprint, Mic, Languages, Search, Layers, Database, Radio
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PaymentsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const clientSegments = [
    { name: "Payment Service Providers", icon: Network },
    { name: "Payment Card Providers", icon: CreditCard },
    { name: "Banks", icon: Landmark },
    { name: "Software Product Companies", icon: Boxes },
    { name: "Paytech Startups", icon: Rocket },
    { name: "Digital Transformation Seekers", icon: RefreshCw }
  ];

  const paymentSolutions = [
    {
      title: "Payment Processing Software",
      icon: Cpu,
      desc: "The backbone of digital payment systems, enabling automated capture, processing, and transfer to global networks."
    },
    {
      title: "Payment Applications",
      icon: Smartphone,
      desc: "Web or mobile apps for fast, convenient digital payments with extensive self-service and billing automation."
    },
    {
      title: "Money Transfer Applications",
      icon: Wallet,
      desc: "Secure domestic and cross-border P2P funds transfers with full visibility and streamlined transaction control."
    },
    {
      title: "Buy Now, Pay Later (BNPL)",
      icon: Calculator,
      desc: "Loan management combined with consumer-facing features for convenient online and in-store installment payments."
    },
    {
      title: "Payment Gateways",
      icon: Lock,
      desc: "Secure integration of payment functionality into customer-facing apps with encrypted data transfer."
    },
    {
      title: "Payment Orchestration",
      icon: Layers,
      desc: "facilitating integration of multiple selling platforms with various PSPs and analytics-based routing."
    },
    {
      title: "Payment Automation",
      icon: Settings,
      desc: "Eliminating manual tasks across all payment processes, from document processing to reconciliation."
    },
    {
      title: "Fraud Detection Systems",
      icon: ShieldCheck,
      desc: "AI-powered analysis of transactions and payer behavior to instantly spot and prevent malicious activities."
    },
    {
      title: "Payment Analytics",
      icon: BarChart3,
      desc: "Analyzing historical transactions and forecasting behavior to accurately plan finance and promotional activities."
    },
    {
      title: "Blockchain Payment Networks",
      icon: BlockchainIcon,
      desc: "Decentralized networks for cost-effective, near-instant domestic and cross-border payments with full traceability."
    }
  ];

  const recommendedFeatures = [
    { title: "P2P Money Transfers", icon: Share2, desc: "Domestic and international peer-to-peer funds transfer." },
    { title: "Multi-currency & Crypto", icon: Coins, desc: "Support for global currencies and digital assets." },
    { title: "AI Budget Planning", icon: Bot, desc: "Intelligent savings and payment planning assistants." },
    { title: "QR-code Payments", icon: Search, desc: "Online and offline QR-based transaction support." },
    { title: "NFC Mobile Payments", icon: Radio, desc: "Contactless onsite mobile payment capabilities." },
    { title: "Virtual Payment Cards", icon: CreditCard, desc: "Creating and managing secure virtual-only cards." },
    { title: "Biometric Authentication", icon: Fingerprint, desc: "Enhanced security via fingerprint or facial recognition." },
    { title: "Voice & Text-to-Speech", icon: Mic, desc: "Accessibility-focused voice commands and audio feedback." },
    { title: "Intelligent Assistants", icon: MessageSquare, desc: "Context-aware digital helpers for user guidance." }
  ];

  const expertise = [
    {
      title: "Payment Software Development",
      desc: "Prompt engineering, integration, and comprehensive QA for secure, tailored solutions.",
      cta: "I'm interested"
    },
    {
      title: "Payment Software Evolution",
      desc: "Rearchitecting, cloud migration, and legacy modernization to add new features at lower cost.",
      cta: "I'm interested"
    },
    {
      title: "Development Consulting",
      desc: "Optimal feature sets, architecture, and UX/UI design with a risk-free implementation roadmap.",
      cta: "I'm interested"
    },
    {
      title: "Payment Product Consulting",
      desc: "Market niche analysis, target audience definition, and interactive prototyping for feasibility.",
      cta: "I'm interested"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-900 via-slate-900 to-indigo-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <CreditCard size={14} /> Payment Software Development
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Seamless <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Payment Experiences</span>
                </h1>
                <p className="text-xl text-cyan-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide engineers user-friendly, high-performing payment software that smoothly integrates with processing systems and provides unimpeded scalability.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] flex items-center">
                        Modernize Your Payments <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl overflow-hidden group">
                    <div className="bg-white/10 p-6 rounded-2xl mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-cyan-300 font-bold">Transaction Volume</span>
                            <Activity className="text-green-400" />
                        </div>
                        <div className="flex items-end gap-2 h-32">
                            {[40, 60, 45, 80, 55, 95, 85].map((h, i) => (
                                <div key={i} className="flex-1 bg-cyan-500/50 rounded-t-lg" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/10 rounded-xl flex items-center gap-3">
                            <ShieldCheck className="text-cyan-400" />
                            <span className="text-sm font-bold">PCI DSS</span>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl flex items-center gap-3">
                            <Lock className="text-indigo-400" />
                            <span className="text-sm font-bold">3D Secure</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Client Segments */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Payment Solutions for Any Client Segment</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">We partner with diverse organizations to deliver secure and scalable payment ecosystems.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientSegments.map((segment, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:shadow-lg hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <segment.icon size={24} />
                </div>
                <span className="font-bold text-slate-900 text-sm">{segment.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Delivered */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Payment Solutions We Deliver</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">From mobile apps to large-scale networks — we create all kinds of secure payment solutions.</p>
            <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paymentSolutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-white text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm">
                  <solution.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Features */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Drive High User Satisfaction</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">We recommend these capabilities to enhance convenience and drive higher ROI.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedFeatures.map((feature, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Field of Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Full-cycle consulting and engineering services for effective payment solutions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{item.title}</h3>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">{item.desc}</p>
                </div>
                <Link to="/contact" className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 group">
                  {item.cta} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-cyan-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Rigorous Compliance & Security</h2>
                <p className="text-cyan-50 text-lg mb-8 leading-relaxed">
                  We help achieve and maintain compliance with global and region-specific sectoral regulations and data protection standards.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-cyan-200" size={32} />
                    <span className="font-bold">PCI DSS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="text-cyan-200" size={32} />
                    <span className="font-bold">3D Secure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-cyan-200" size={32} />
                    <span className="font-bold">GDPR / SOX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-cyan-200" size={32} />
                    <span className="font-bold">CPA Compliance</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                  <h4 className="text-2xl font-bold mb-4">Supported Methods</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-200 rounded-full"></div>
                      <span>Credit & Debit Cards (incl. Virtual)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-200 rounded-full"></div>
                      <span>Digital & Crypto Wallets</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-200 rounded-full"></div>
                      <span>Bank, ACH, and Wire Transfers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-200 rounded-full"></div>
                      <span>E-checks & Digitalized Paper Checks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Transform Your Payments?</h2>
          <p className="text-xl text-slate-400 mb-12">
            Partner with GnJ Worldwide for secure, compliant, and high-performance payment technology solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-cyan-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-cyan-500 transition-all shadow-xl transform hover:-translate-y-1">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PaymentsPage;