import React, { useEffect, useState } from 'react';
import { TrendingUp, BarChart2, PieChart, ArrowRight, UserCheck, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
          <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block p-4 bg-green-500/10 rounded-full mb-6 border border-green-500/30">
                  <TrendingUp size={48} className="text-green-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Investment Technology</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                  Empowering wealth managers and retail investors with data-driven platforms and seamless trading experiences.
              </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Robo-Advisory & WealthTech</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  The future of investing is automated and personalized. We build sophisticated robo-advisory platforms that use algorithms to manage portfolios based on risk tolerance and financial goals.
              </p>
              <ul className="space-y-4">
                  {[
                      "Algorithmic Trading Engines",
                      "Real-time Portfolio Rebalancing",
                      "Tax-Loss Harvesting",
                      "Goal-Based Investing Tools"
                  ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-semibold text-slate-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div> {item}
                      </li>
                  ))}
              </ul>
              <div className="mt-8">
                  <Link to="/contact" className="text-green-600 font-bold hover:text-green-700 inline-flex items-center">
                      Explore Solutions <ArrowRight className="ml-2" size={18} />
                  </Link>
              </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
              {[
                  { icon: BarChart2, title: "Analytics", desc: "Deep market insights." },
                  { icon: Smartphone, title: "Mobile Trading", desc: "Trade on the go." },
                  { icon: PieChart, title: "Portfolio Mgmt", desc: "Unified asset view." },
                  { icon: UserCheck, title: "KYC/Onboarding", desc: "Frictionless signup." }
              ].map((card, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all">
                      <card.icon className="mx-auto text-green-600 mb-3" size={32} />
                      <h3 className="font-bold text-slate-900">{card.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{card.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default InvestmentPage;