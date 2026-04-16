import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, Truck, Globe, Megaphone, Users, UserCheck, 
  CreditCard, MonitorSmartphone, BarChart3, Calculator, 
  FileText, ShieldCheck, ArrowRight, CheckCircle2, 
  Lightbulb, PenTool, Target, DollarSign, Puzzle, BookOpen,
  Headphones, Server, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const softwareSolutions = [
    { icon: Truck, title: "Supply chain management", desc: "We can automate individual processes, like procurement and inventory management, or develop a comprehensive solution for integrated SCM to facilitate efficient workflow automation and accurate data transfer across the chain." },
    { icon: Globe, title: "Ecommerce", desc: "We help retailers establish and manage an effective online presence through various solutions: web stores, marketplaces, mobile apps, and auction platforms. We also build software such as PIM or CMS that connects to the ecommerce storefront and facilitates back-office processes." },
    { icon: Megaphone, title: "Marketing automation", desc: "We can give you the tools to plan, deploy, and manage full-scale marketing campaigns across digital and traditional channels and target specific customer segments with the right messages." },
    { icon: Users, title: "Customer relationship management", desc: "We can collect and organize disparate customer data in a centralized CRM system and implement tailored strategies to leverage this data for B2C and B2B sales and customer engagement." },
    { icon: UserCheck, title: "HR and workforce management", desc: "We can enable you to manage a full employee life cycle, schedule shifts based on peak traffic times, and track employee attendance, ensuring that the right staff is always present to meet customer demand." },
    { icon: ShieldCheck, title: "Vendor management", desc: "We can build a system to onboard, evaluate, and monitor wholesalers and manufacturers you work with, ensuring compliance with quality standards and contractual obligations." },
    { icon: CreditCard, title: "POS systems and online payment", desc: "We can integrate payment gateways to support your secure online transactions and set up onsite POS systems enabling various payment methods (by card, cash, phone, or wearable devices)." },
    { icon: MonitorSmartphone, title: "Self-service kiosks", desc: "We build custom software for checkout and payment kiosks as well as devices meant for wayfinding, promotion, or product tryouts. Remote kiosk management allows you to ensure fail-proof kiosk operation." },
    { icon: BarChart3, title: "Retail analytics and BI", desc: "We build end-to-end data pipelines and enable self-service reporting to deliver data-driven insights into customer experience and satisfaction, sales, inventory, brand awareness, and more whenever you need them." },
    { icon: Calculator, title: "Financial management", desc: "We can centralize and automate your financial processes, including bookkeeping, revenue management, tax management, invoicing, payroll accounting, financial planning and analysis, and more." },
    { icon: FileText, title: "Document management", desc: "We can set up a central document management system that streamlines the creation, approval, and signature of documents across your local or international retail chain." },
    { icon: Shield, title: "Store security", desc: "We can help you create a safe store environment and power a comprehensive security system encompassing surveillance cameras, alarm systems, access control measures, and theft prevention technologies." }
  ];

  const investmentPitfalls = [
    { icon: Lightbulb, title: "A thorough discovery stage", desc: "We dig into your business processes, align the opinions and needs of engaged stakeholders, and elicit full requirements to ensure that all software features will be valuable to users." },
    { icon: PenTool, title: "Mindful UX design", desc: "Our UX designers plan easily understandable interfaces and intuitive workflows and make sure that the software is accessible to all target user groups, including employees and customers." },
    { icon: Target, title: "Accurate project scoping", desc: "We fully define the client’s goals, constraints, and expected deliverables to accurately estimate the project’s cost and timelines." },
    { icon: DollarSign, title: "Rigorous budget management", desc: "We control change requests to prevent scope creep and routinely monitor the expenditures in the course of the project to ensure we don’t go over the budget." },
    { icon: Puzzle, title: "Designing for integration", desc: "We design new software with your existing IT infrastructure and tech stack in mind to minimize integration efforts and ensure compatibility with your current business systems." },
    { icon: BookOpen, title: "Comprehensive user training", desc: "We prepare clear user documentation and arrange online sessions to help your employees smoothly transfer their workflows to the new software and fully adopt its capabilities." }
  ];

  const beyondSoftware = [
    { title: "IT consulting", desc: "We leverage our full expertise as IT practitioners to guide your digital transformation, address technical debt, optimize IT costs, and help you avoid the pitfalls and enhance the outcomes of any IT initiative." },
    { title: "Staff augmentation", desc: "We provide developers specializing in ecommerce and retail software as well as project managers, business analysts, QA engineers, cybersecurity engineers, and other experts to join your team on an hourly basis." },
    { title: "Software modernization", desc: "We overcome your current technology constraints, improve operational efficiency of your software, and facilitate its further maintenance." },
    { title: "Software integration", desc: "We connect disparate applications and data sources to create a unified ecosystem and facilitate collaboration within your organization." },
    { title: "Software maintenance and support", desc: "We provide preventive software maintenance, deliver instant troubleshooting assistance, and modify your software according to new or changing requirements." },
    { title: "Help desk", desc: "We are ready to take over L1–L3 IT support for your employees or online customers. We guarantee adherence to service delivery KPIs (e.g., response and resolution times) fixed in our service level agreement." },
    { title: "Security management", desc: "We can routinely assess your evolving IT environment or selected software for security flaws and implement measures to fix them. We can also check and verify whether you comply with privacy laws and security standards applicable to your business." },
    { title: "IT infrastructure management", desc: "We monitor, troubleshoot, and evolve your hardware, software, and networks to ensure their seamless operation and adherence to evolving business needs." }
  ];

  const sampleCosts = [
    {
      title: "Inventory management solution",
      price: "₹75,00,000 – ₹3,30,00,000",
      desc: "A comprehensive solution to automate and optimize inventory operations, including:",
      features: [
        "Inventory tracking (using barcode or RFID scanning).",
        "Inventory item cataloging.",
        "Automated and manual purchase order creation.",
        "Order processing.",
        "Inventory analytics and reporting."
      ]
    },
    {
      title: "Order management solution",
      price: "₹1,65,00,000 – ₹3,30,00,000",
      desc: "A solution to manage the entire order cycle:",
      features: [
        "Multichannel order capturing.",
        "Bulk order processing.",
        "Order routing to an inventory location and execution.",
        "Order tracking.",
        "Return management.",
        "Order analytics and reporting."
      ]
    },
    {
      title: "Retail business intelligence (BI) solution",
      price: "₹1,65,00,000 – ₹3,30,00,000",
      desc: "A solution that turns raw data into insights via:",
      features: [
        "Integration with up to 7 data sources.",
        "Batch and real-time processing of structured, semi-structured, and unstructured data types.",
        "Rule-based and ML/AI-powered analytics.",
        "Scheduled and ad hoc reporting.",
        "Advanced visualization capabilities."
      ]
    },
    {
      title: "Ecommerce store",
      price: "₹20,00,000 – ₹1,65,00,000",
      desc: "A solution for online sales equipped with:",
      features: [
        "Product and catalog management.",
        "Pricing and promotion management.",
        "Shopping cart and checkout via integrated payment gateways.",
        "Order management.",
        "Basic sales analytics."
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="relative bg-pink-600 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-pink-500 rounded-full blur-[150px] opacity-50 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/30 border border-pink-400/50 text-pink-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <ShoppingBag size={14} /> Retail Industry
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
              IT Services & Solutions for <span className="text-pink-200">Retail</span>.
            </h1>
            <p className="text-xl text-pink-50 mb-6 leading-relaxed max-w-2xl">
              GnJ Worldwide has been helping online and brick-and-mortar retailers optimize their operations and deliver better customer experiences with the help of tailored IT solutions.
            </p>
            <p className="text-lg text-pink-100 mb-10 leading-relaxed max-w-2xl">
              Retail IT solutions are meant to enhance the efficiency of back-office retail operations and create a customer-centric experience for digital and physical sales channels. Knowing the competitive nature of retail, GnJ Worldwide is committed to helping retailers boost their digital maturity and market resilience.
            </p>
            <Link to="/contact" className="bg-white text-pink-600 px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center inline-flex group hover:bg-pink-50">
              Transform Your Retail Business <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Software Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Software Solutions for All Key Retail Processes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our wide service portfolio covers all IT needs of retail companies, from automating business operations and data analytics to launching new digital sales channels and ensuring the security of payments and customer data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareSolutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white text-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-pink-600 group-hover:text-white transition-all">
                  <solution.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Ensure Investments Pay Off */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How We Ensure Your Retail Software Solution Investments Pay Off</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Why 49% of Retailers Regret Investing In Software? Here is what we do to avoid these pitfalls.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentPitfalls.map((pitfall, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center shrink-0">
                    <pitfall.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{pitfall.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{pitfall.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Software Development */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Retail IT Services Beyond Software Development</h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Retail IT services go beyond software development and aim to fully help retailers adopt, manage, and evolve an IT infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {beyondSoftware.map((service, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.05 }} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-pink-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sample Costs of Custom IT Solutions for Retail</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Estimated pricing for comprehensive retail software solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sampleCosts.map((cost, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-pink-500 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-2">{cost.title}</h3>
                <div className="text-3xl font-bold text-pink-400 mb-6">{cost.price}</div>
                <p className="text-slate-300 mb-6">{cost.desc}</p>
                <ul className="space-y-3">
                  {cost.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 shrink-0">
                        <CheckCircle2 size={18} className="text-pink-500" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Optimize Your Retail Operations?</h2>
          <p className="text-xl text-pink-100 mb-12 leading-relaxed">
            Let's discuss how our tailored IT solutions can help you deliver better customer experiences and boost your digital maturity.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-pink-600 font-bold py-5 px-12 rounded-2xl hover:bg-pink-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get a Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RetailPage;