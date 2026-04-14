import React, { useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Server, 
  Database, 
  Cpu, 
  Mail, 
  Globe, 
  Code, 
  Workflow, 
  Smartphone, 
  Laptop, 
  Network, 
  Cloud, 
  ShieldAlert, 
  UserX, 
  Bug, 
  Zap, 
  Terminal, 
  FileCode, 
  Activity, 
  Layers,
  Search,
  ShieldCheck,
  FileSearch,
  Fingerprint,
  Radio,
  Share2,
  Boxes,
  Scale,
  Award,
  FileText,
  BarChart2,
  AlertOctagon,
  Filter,
  FileCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const CybersecurityPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const itComponents = [
    { title: "On-premises infrastructures", icon: Server },
    { title: "Cloud environments", icon: Cloud },
    { title: "External and internal networks", icon: Network },
    { title: "Databases, DWH, Data Lakes", icon: Database },
    { title: "Web, Mobile, Desktop Apps", icon: Smartphone },
    { title: "Websites and Portals", icon: Globe },
    { title: "APIs and Microservices", icon: Layers },
    { title: "CI/CD Pipelines", icon: Workflow },
    { title: "Desktops, Laptops, Mobile", icon: Laptop },
    { title: "System Software & OS", icon: Cpu },
    { title: "Email Services", icon: Mail },
    { title: "IoT Devices & Infra", icon: Radio },
    { title: "Cybersecurity Tools", icon: ShieldCheck },
    { title: "Security Policies", icon: FileSearch },
    { title: "Blockchain & Oracles", icon: Share2 },
    { title: "Smart Contracts", icon: FileCode }
  ];

  const threats = [
    {
      category: "Malware-based Attacks",
      icon: Bug,
      items: ["Viruses, Worms, Trojans", "Ransomware", "Spyware & Keyloggers", "Advanced Persistent Threats (APTs)"]
    },
    {
      category: "Identity & Access Attacks",
      icon: UserX,
      items: ["Identity Theft", "Brute-force Attacks", "Unauthorized Access", "Insider Attacks"]
    },
    {
      category: "Injection & Code Attacks",
      icon: Code,
      items: ["SQL Injection", "Cross-Site Scripting (XSS)", "CSRF & SSRF", "Code-based Vulnerabilities"]
    },
    {
      category: "Social Engineering",
      icon: Fingerprint,
      items: ["Phishing & Whaling", "Vishing & Smishing", "Business Email Compromise", "Spear Phishing"]
    },
    {
      category: "Network & Infrastructure",
      icon: ShieldAlert,
      items: ["DoS & DDoS Attacks", "Man-in-the-middle (MitM)", "Session Hijacking", "DNS & IP Spoofing"]
    }
  ];

  const toolkit = [
    {
      category: "Vulnerability & Pen Testing",
      tools: ["Siege", "w3af", "BurpSuite", "Nessus Pro", "SQLmap", "Aircrack-ng", "Acunetix", "Nmap", "Metasploit", "OpenVAS", "Skipfish"]
    },
    {
      category: "Blockchain & Smart Contract",
      tools: ["Mythril", "Slither", "MythX", "Contract Library", "OpenZeppelin", "Whiteblock Genesis"]
    },
    {
      category: "Secure Code Review",
      tools: ["IBM AppScan", "Immunity Debugger", "Static Analyzer Security Scanner"]
    },
    {
      category: "SIEM",
      tools: ["QRadar", "SolarWinds", "AlienVault", "Splunk", "Micro Focus ArcSight"]
    },
    {
      category: "Cloud Security",
      tools: ["AWS", "Azure", "GCP", "DigitalOcean", "Rackspace"]
    },
    {
      category: "Coding & Scripting",
      tools: ["Bash", "PowerShell", "Python", "Golang", "YAML", "Perl", "HCL Technologies"]
    },
    {
      category: "Identity & Access (IAM)",
      tools: ["IBM IAM", "RSA", "OCI IAM", "Core Security"]
    },
    {
      category: "Email Security",
      tools: ["SpamTitan", "Barracuda", "Cisco Email Security"]
    },
    {
      category: "Data Loss Prevention (DLP)",
      tools: ["Symantec", "Teramind", "Code42", "SecureTrust"]
    },
    {
      category: "DDoS Protection",
      tools: ["Cloudflare", "Imperva Incapsula", "Cloudbric", "SolarWinds", "Netscout Arbor"]
    },
    {
      category: "IDS / IPS",
      tools: ["Snort", "Bro", "SolarWinds", "OSSEC", "Security Onion"]
    },
    {
      category: "Cloud Security Platforms",
      tools: ["Qualys", "Nessus", "Rapid7", "Tenable"]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white selection:bg-blue-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
            alt="Cybersecurity Shield" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
          
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Shield size={14} /> Enterprise-Grade Security
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Protect Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Apps & Networks</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              GnJ Worldwide provides full-range information security services to 30+ industries. We minimize cyber risks and prevent devastating consequences of attacks and compliance breaches.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 group">
                Secure Your Infrastructure <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- IT COMPONENTS WE SECURE --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">IT Components We Secure</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive protection across your entire digital ecosystem.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {itComponents.map((component, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all group text-center"
              >
                <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-4 mx-auto text-blue-400 group-hover:scale-110 transition-transform">
                  <component.icon size={24} />
                </div>
                <h4 className="text-sm font-bold text-slate-200">{component.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CYBER THREATS WE PREVENT --- */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Cyber Threats We Help Prevent</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Proactive defense against the most sophisticated modern attack vectors.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-red-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400">
                    <threat.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{threat.category}</h4>
                </div>
                <ul className="space-y-3">
                  {threat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SIEM & SOC SERVICES --- */}
      <section className="py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div {...fadeIn} className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">SIEM & <span className="text-blue-500">SOC Services</span></h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Security Information and Event Management. We aggregate, analyze, and alert on data from across your enterprise to detect threats instantly.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Eye, title: "24/7 Monitoring", desc: "SOC watches your environment around the clock." },
                  { icon: Filter, title: "Log Correlation", desc: "Ingest logs from firewalls, servers, and endpoints." },
                  { icon: AlertOctagon, title: "Incident Response", desc: "Immediate triage and response to detected threats." }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <item.icon className="mx-auto mb-3 text-blue-500" size={28} />
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {["Splunk", "Elastic Security", "IBM QRadar", "Azure Sentinel", "Datadog", "AlienVault"].map((tool, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-xs font-bold text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="lg:w-1/2 w-full">
              <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 overflow-hidden">
                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                  <span className="text-xs font-mono text-slate-400">LIVE SECURITY MONITOR</span>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-green-500 font-mono">SYSTEM ACTIVE</span>
                  </div>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between text-red-400 bg-red-500/5 p-2 rounded">
                    <span>[CRITICAL] Suspicious Login Attempt (IP 192.168.1.45)</span>
                    <span>10:42:01</span>
                  </div>
                  <div className="flex justify-between text-slate-500 p-2">
                    <span>[INFO] Firewall rule updated</span>
                    <span>10:41:55</span>
                  </div>
                  <div className="flex justify-between text-yellow-400 bg-yellow-500/5 p-2 rounded">
                    <span>[WARN] High CPU Usage Server-02</span>
                    <span>10:41:30</span>
                  </div>
                  <div className="flex justify-between text-slate-500 p-2">
                    <span>[INFO] Backup completed successfully</span>
                    <span>10:40:12</span>
                  </div>
                  <div className="h-40 mt-6 bg-slate-800/50 rounded-xl flex items-end gap-1.5 p-3">
                    {[40, 60, 30, 80, 50, 90, 20, 70, 45, 65, 30, 50, 70, 40, 60, 85, 35, 55].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-500/40 hover:bg-blue-400 transition-all rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- REGULATORY COMPLIANCE --- */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div {...fadeIn} className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative bg-white text-slate-900 p-10 rounded-2xl shadow-2xl w-full max-w-sm mx-auto rotate-2 border-t-8 border-blue-600">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-3xl font-serif font-bold tracking-tight">CERTIFIED</div>
                  <Award className="text-blue-600" size={48} />
                </div>
                <div className="space-y-5 mb-10">
                  <div className="h-4 bg-slate-100 rounded-full w-full"></div>
                  <div className="h-4 bg-slate-100 rounded-full w-5/6"></div>
                  <div className="h-4 bg-slate-100 rounded-full w-4/6"></div>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-bold border-2 border-green-600 px-6 py-3 rounded-xl uppercase text-sm w-fit transform -rotate-6 shadow-lg">
                  <FileCheck size={20} /> Compliant
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Regulatory <span className="text-blue-500">Compliance</span></h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Navigate the complex landscape of global regulations. We ensure your business meets standards like GDPR, HIPAA, SOC 2, and ISO 27001.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["GDPR", "HIPAA", "SOC 2", "ISO 27001", "PCI DSS", "CCPA", "NIST", "FedRAMP"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <ShieldCheck className="text-blue-500" size={18} />
                    <span className="text-sm font-bold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Gap Analysis", desc: "Assess current state against desired frameworks." },
                  { step: 2, title: "Remediation", desc: "Implement controls, policies, and technical fixes." },
                  { step: 3, title: "Audit Support", desc: "Guidance through external audit processes." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-slate-200">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- OUR TOOLKIT --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Security Toolkit</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We leverage industry-leading technologies to ensure failsafe protection.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolkit.map((category, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800"
              >
                <h4 className="text-lg font-bold text-blue-400 mb-6 border-b border-slate-800 pb-4">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-medium text-slate-300 border border-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-gradient-to-b from-transparent to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <Shield size={64} className="mx-auto text-blue-500 mb-8 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Fortify Your Business?</h2>
            <p className="text-xl text-slate-400 mb-12">
              Don't wait for a breach to happen. Let our experts audit your infrastructure and implement a robust security strategy today.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-2xl shadow-blue-500/40 transform hover:-translate-y-1">
              Request a Security Audit <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;