import React, { useEffect, useState } from 'react';
import { 
  Scan, Bug, AlertCircle, FileCode, CheckCircle, ArrowRight, Radar, 
  HeartPulse, Landmark, Zap, Factory, Monitor, Server, Users, FileText, 
  ShieldCheck, BarChart, Wrench, Award, IndianRupee, Terminal, Code, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const SecurityTestingPage: React.FC = () => {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScanning(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const industries = [
    {
      title: "Healthcare",
      icon: HeartPulse,
      stats: "20 years in IT services",
      desc: "Profound knowledge of HIPAA, HITECH, FDA, and MDR/IVDR requirements. Dedicated medical device security assessment service.",
      stories: [
        "Network Pentesting and a Phishing Campaign for a US Healthcare Provider",
        "Comprehensive Quality Assessment of a Patient Portal",
        "Pentesting of a Web Platform and Mobile Apps for Remote Patient Monitoring",
        "Mobile Device Pentesting for a Healthcare Technology Company"
      ]
    },
    {
      title: "BFSI",
      icon: Landmark,
      stats: "20 years in IT services",
      desc: "Hands-on experience with PCI DSS/SSF, GLBA, SOX, and NYDFS. 13 years serving the insurance industry.",
      stories: [
        "AWS Cloud Security Assessment and Recurring Infrastructure Pentesting",
        "Pentesting of Blockchain Software and IT Infrastructure for Fintech",
        "IT Infrastructure Security Testing for a Gulf-Based Retail Bank",
        "API Security Testing for a European Bank"
      ]
    },
    {
      title: "Energy & Natural Resources",
      icon: Zap,
      stats: "15 years experience",
      desc: "Helping oil and gas companies ensure improved cybersecurity, better brand reputation, and unfailing business continuity.",
      stories: [
        "Network Penetration Testing for a Leading Mining Company",
        "SharePoint Health Check Assessment for a Consulting Firm",
        "IT Infrastructure Pentesting and a Phishing Campaign for an EU Energy Company",
        "SIEM Consulting for a Large Oil Company"
      ]
    },
    {
      title: "Manufacturing",
      icon: Factory,
      stats: "36 years experience",
      desc: "Providing software solutions and IT consulting for manufacturers, including global brands like Nestle and Heinz.",
      stories: [
        "Network Vulnerability Assessment for a US Equipment Manufacturer",
        "Web Application and IT Infrastructure Penetration Testing for a US Food Producer"
      ]
    }
  ];

  const targets = [
    {
      title: "Software",
      icon: Monitor,
      desc: "Identify vulnerabilities at any stage of the SDLC involving exploration of both the app's back end and front end.",
      items: ["Web applications and APIs", "Mobile applications", "Desktop applications"]
    },
    {
      title: "IT Infrastructure",
      icon: Server,
      desc: "Evaluate how well your cloud, hybrid, and on-premises IT infrastructures are protected against threats.",
      items: ["Endpoints (PCs, laptops, mobile)", "Network connectivity tools", "Email & Web servers", "Databases & Cloud resources", "Security solutions (firewalls, VPN, IAM)"]
    },
    {
      title: "Employee Awareness",
      icon: Users,
      desc: "Help avoid human-related security breaches by checking employee readiness.",
      items: ["Adherence to corporate security policies", "Fulfillment of compliance requirements", "Recognition of malicious messages/calls"]
    },
    {
      title: "Policies & Procedures",
      icon: FileText,
      desc: "Check if the security policies and procedures in place can ensure adequate security risk management.",
      items: ["Access control policy", "Data protection", "Vulnerability management", "Incident response & Disaster recovery"]
    }
  ];

  const benefits = [
    {
      title: "True picture of cyber resilience",
      icon: ShieldCheck,
      desc: "Our experts check every security aspect, uncovering even complex logic flaws and chained exploits to provide a complete view of the cybersecurity posture."
    },
    {
      title: "Detailed and actionable insight",
      icon: BarChart,
      desc: "Receive a detailed report containing the description of all detected vulnerabilities classified by severity and optimal corrective measures."
    },
    {
      title: "Prompt vulnerability remediation",
      icon: Wrench,
      desc: "Our developers, DevSecOps, and compliance consultants can fix all security and compliance gaps detected during the assessment."
    },
    {
      title: "Attestation letters & badges",
      icon: Award,
      desc: "Demonstrate your due diligence to regulatory authorities and prove the high security level to your clients."
    },
    {
      title: "Cost optimization",
      icon: IndianRupee,
      desc: "Identify only the required scope of testing activities and reuse knowledge in case of long-term cooperation."
    }
  ];

  const tools = [
    {
      category: "Vulnerability Assessment & Pentesting",
      icon: Terminal,
      items: ["BurpSuite", "Nessus Professional", "SQLmap", "Nmap", "Metasploit", "OWASP ZAP", "Wireshark", "Postman", "Gophish", "Acunetix", "Aircrack-ng"]
    },
    {
      category: "Secure Code Review",
      icon: Code,
      items: ["IBM AppScan", "Immunity Debugger", "Static Analyzer Security Scanner"]
    },
    {
      category: "Smart Contract Security",
      icon: FileCode,
      items: ["Mythril", "Slither", "MythX", "Contract Library"]
    },
    {
      category: "Technologies We Test",
      icon: Layers,
      items: [".NET", "Java", "Python", "Node.js", "PHP", "Golang", "HTML5/CSS/JS", "React", "Angular", "Vue.js", "Next.js"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef2bb6ffa030?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
         
         <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
             <div className="mb-8 relative">
                 <div className={`absolute inset-0 border-4 border-green-500 rounded-full ${scanning ? 'animate-ping opacity-20' : 'opacity-0'}`}></div>
                 <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center border-2 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                     <Scan size={40} className="text-green-500" />
                 </div>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-bold mb-6">Security Testing Services</h1>
             <p className="text-2xl font-medium text-green-400 mb-4">Stay One Step Ahead of Hackers</p>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                 Identify vulnerabilities before attackers do. Comprehensive vulnerability assessments, penetration testing, and code reviews.
             </p>
             
             <div className="flex gap-4">
                 <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-green-500/30">
                     Request Security Assessment
                 </Link>
             </div>
         </div>
      </div>

      {/* What We Check */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What We Check: Security Testing Targets</h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {targets.map((target, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-green-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <target.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{target.title}</h3>
                </div>
                <p className="text-slate-600 mb-6">{target.desc}</p>
                <ul className="space-y-3">
                  {target.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We Serve: Industry Expertise</h2>
            <p className="text-xl text-slate-400">High-risk industries we keep safe with proven success stories.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((ind, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700 text-green-400 rounded-xl flex items-center justify-center">
                      <ind.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{ind.title}</h3>
                      <p className="text-green-400 text-sm font-medium">{ind.stats}</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">{ind.desc}</p>
                <div className="bg-slate-900/50 p-6 rounded-xl">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Success Stories</h4>
                  <ul className="space-y-3">
                    {ind.stories.map((story, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                        {story}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Benefits Our Security Testing Firm Offers</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-2 transition-transform">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Tools Powering Our Security Testing Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Along with manual vulnerability exploration, we expertly apply security testing tools that best suit the project specifics.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((toolGroup, idx) => (
              <motion.div key={idx} {...fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <toolGroup.icon className="text-slate-400" size={24} />
                  <h3 className="text-xl font-bold text-slate-900">{toolGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {toolGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <div className="bg-white py-24 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Vulnerability Scan vs. Penetration Test</h2>
              <div className="grid md:grid-cols-2 gap-0 md:gap-8">
                  <div className="bg-slate-50 p-8 rounded-l-2xl md:rounded-2xl border border-slate-200">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Scan className="text-blue-500"/> Vulnerability Scan
                      </h3>
                      <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0"/> Automated high-level scan</li>
                          <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0"/> Identifies potential vulnerabilities</li>
                          <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0"/> Broad coverage</li>
                          <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0"/> Good for regular maintenance</li>
                      </ul>
                  </div>
                  <div className="bg-slate-900 p-8 rounded-r-2xl md:rounded-2xl text-white shadow-xl">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <AlertCircle className="text-red-500"/> Penetration Test
                      </h3>
                      <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0"/> Manual expert simulation</li>
                          <li className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0"/> Exploits vulnerabilities to prove risk</li>
                          <li className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0"/> Deep dive focus</li>
                          <li className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0"/> Critical for compliance & validation</li>
                      </ul>
                      <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                          <Link to="/services/penetration-testing" className="text-sm font-bold text-red-400 hover:text-white flex items-center justify-center gap-2">
                              Explore Penetration Testing <ArrowRight size={14} />
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default SecurityTestingPage;