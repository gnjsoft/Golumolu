import React, { useEffect, useState } from 'react';
import { Zap, Code, Link as LinkIcon, Smartphone, ArrowRight, Rocket, CreditCard, ShieldCheck, LineChart, Wallet, Lock, Server, Activity, PieChart, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinTechPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-sans text-white">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-50"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <span className="text-purple-400 font-bold tracking-widest uppercase mb-4 block">Disruptive Finance</span>
              <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
                  Fin<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tech</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                  Building the next generation of financial unicorns. Blockchain, Neobanking, Embedded Finance, and secure payment ecosystems.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-purple-400 transition-all">
                  Build the Future <Rocket className="ml-2" size={20} />
              </Link>
          </div>
      </div>

      {/* Core Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Comprehensive FinTech Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">We engineer secure, scalable, and compliant financial software tailored to modern market demands.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: LinkIcon, title: "Blockchain & Crypto", desc: "DeFi platforms, smart contracts, secure crypto wallets, and custom tokenomics." },
                  { icon: Smartphone, title: "Neobanking", desc: "Digital-only banks with smooth UX, virtual cards, and instant onboarding." },
                  { icon: Code, title: "Embedded Finance", desc: "Integrating payment and lending capabilities into non-financial apps (BNPL)." },
                  { icon: CreditCard, title: "Payment Processing", desc: "Custom payment gateways, POS integrations, and cross-border remittance." },
                  { icon: LineChart, title: "WealthTech", desc: "Robo-advisors, portfolio management, and algorithmic trading platforms." },
                  { icon: ShieldCheck, title: "RegTech & InsurTech", desc: "Automated KYC/AML compliance, fraud detection, and digital claims processing." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-purple-500/50 transition-colors group">
                      <item.icon size={40} className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Deep Dive Sections */}
      <div className="py-24 bg-black relative">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 space-y-32 relative z-10">
              
              {/* Section 1 */}
              <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2">
                      <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000" alt="Digital Wallets" className="rounded-3xl shadow-2xl shadow-purple-900/20 border border-slate-800" />
                  </div>
                  <div className="md:w-1/2">
                      <h2 className="text-4xl font-bold mb-6">Digital Wallets & P2P Payments</h2>
                      <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                          We build secure, scalable digital wallet solutions that enable instant peer-to-peer transfers, bill payments, and merchant transactions. Our platforms support multi-currency, crypto assets, and seamless bank integrations.
                      </p>
                      <ul className="space-y-4 text-slate-300">
                          <li className="flex items-center gap-3"><Wallet className="text-purple-500" size={20} /> NFC & QR Code Payments</li>
                          <li className="flex items-center gap-3"><Globe className="text-purple-500" size={20} /> Cross-border Remittances</li>
                          <li className="flex items-center gap-3"><Lock className="text-purple-500" size={20} /> Tokenization & Biometric Auth</li>
                      </ul>
                  </div>
              </div>

              {/* Section 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                  <div className="md:w-1/2">
                      <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000" alt="Trading Platforms" className="rounded-3xl shadow-2xl shadow-purple-900/20 border border-slate-800" />
                  </div>
                  <div className="md:w-1/2">
                      <h2 className="text-4xl font-bold mb-6">Trading & Investment Platforms</h2>
                      <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                          Empower your users with real-time market data, advanced charting, and lightning-fast execution. We develop robust trading engines for stocks, forex, and cryptocurrencies.
                      </p>
                      <ul className="space-y-4 text-slate-300">
                          <li className="flex items-center gap-3"><Activity className="text-purple-500" size={20} /> High-Frequency Trading (HFT) Engines</li>
                          <li className="flex items-center gap-3"><PieChart className="text-purple-500" size={20} /> Automated Portfolio Rebalancing</li>
                          <li className="flex items-center gap-3"><Server className="text-purple-500" size={20} /> FIX Protocol Integrations</li>
                      </ul>
                  </div>
              </div>

          </div>
      </div>

      {/* Security & Compliance */}
      <div className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">Bank-Grade Security & Compliance</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-16">Security isn't an afterthought; it's the foundation of every financial product we build.</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                      { title: "PCI-DSS Compliant", desc: "Secure cardholder data environments and tokenization." },
                      { title: "KYC / AML", desc: "Automated identity verification and anti-money laundering workflows." },
                      { title: "End-to-End Encryption", desc: "Military-grade data protection at rest and in transit." },
                      { title: "Fraud Detection", desc: "AI-driven anomaly detection and transaction monitoring." }
                  ].map((item, idx) => (
                      <div key={idx} className="p-8 bg-black rounded-3xl border border-slate-800 hover:border-purple-500/50 transition-colors">
                          <ShieldCheck className="text-purple-500 mx-auto mb-6" size={40} />
                          <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default FinTechPage;