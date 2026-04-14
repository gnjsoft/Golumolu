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
  Boxes
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