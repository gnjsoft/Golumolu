import React, { useEffect, useState } from 'react';
import { Terminal, ShieldAlert, Lock, Unlock, Crosshair, FileWarning, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PenetrationTestingPage: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Initializing Red Team protocols... Target acquired... Exploiting vulnerabilities...";

  useEffect(() => {
    window.scrollTo(0, 0);
    let i = 0;
    const interval = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-mono text-slate-300">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden border-b border-red-900/30">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 grayscale"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
             <div className="inline-block p-2 px-4 bg-red-900/20 border border-red-800 rounded mb-6 text-red-500 font-bold tracking-widest uppercase">
                 Offensive Security
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                 Penetration <span className="text-red-600">Testing</span>
             </h1>
             <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-400">
                 Ethical hacking to expose weaknesses before malicious actors exploit them. We simulate real-world attacks on your infrastructure.
             </p>
             
             {/* Terminal Effect */}
             <div className="max-w-2xl mx-auto bg-slate-900 rounded-lg border border-slate-700 p-4 text-left shadow-2xl">
                 <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="font-mono text-green-500 text-sm">
                     <span className="text-blue-400">root@gnj-security:~$</span> {text}<span className="animate-pulse">_</span>
                 </div>
             </div>
         </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Network Pentesting", icon: Crosshair, desc: "Identifying vulnerabilities in your external and internal networks, including firewalls, routers, and switches." },
                  { title: "Web App Pentesting", icon: Terminal, desc: "Testing for OWASP Top 10 vulnerabilities like SQL Injection, XSS, and broken authentication." },
                  { title: "Mobile App Pentesting", icon: Lock, desc: "Analyzing iOS and Android apps for insecure data storage, API leaks, and reverse engineering risks." },
                  { title: "Social Engineering", icon: Unlock, desc: "Testing your human firewall through phishing simulations and physical security assessments." },
                  { title: "Cloud Pentesting", icon: ShieldAlert, desc: "Assessing the security of your AWS, Azure, or GCP environments and configurations." },
                  { title: "API Pentesting", icon: FileWarning, desc: "Ensuring your APIs withstand manipulation, injection attacks, and unauthorized access." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-red-600/50 transition-colors group">
                      <item.icon className="text-red-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Process CTA */}
      <div className="bg-red-900/10 py-20 border-y border-red-900/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Don't wait for a breach.</h2>
              <p className="text-slate-300 mb-8">
                  Get a comprehensive report detailing vulnerabilities, impact analysis, and remediation steps.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-red-600 text-white font-bold py-3 px-8 rounded hover:bg-red-700 transition-colors">
                  Schedule a Test <ArrowRight className="ml-2" size={20} />
              </Link>
          </div>
      </div>
    </div>
  );
};

export default PenetrationTestingPage;