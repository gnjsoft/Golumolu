import React, { useEffect, useState } from 'react';
import { 
  BarChart2, TrendingUp, Search, ArrowRight, Layers, Database, 
  Stethoscope, Landmark, Factory, ShoppingCart, Truck, Building2, 
  Briefcase, Zap, Droplets, Phone, GraduationCap, Plane, Film, 
  DollarSign, TruckIcon, Megaphone, Users, Settings, UserCheck,
  CheckCircle2, Cpu, Globe, ShieldCheck, Activity, Microscope,
  PieChart, LineChart, Layout
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalyticsSolutionPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const industries = [
    {
      category: "Healthcare",
      icon: Stethoscope,
      subsectors: [
        {
          name: "Healthcare Providers",
          items: [
            "Patient health condition monitoring & alerting",
            "AI-powered treatment optimization",
            "Personalized care plan recommendations",
            "Proactive care trend detection",
            "Fraud detection in insurance",
            "Staff workload & shift optimization",
            "Space & equipment usage optimization"
          ]
        },
        {
          name: "Contract Research Organizations (CROs)",
          items: [
            "Informed study design & trial site comparison",
            "Trial progress monitoring (enrollment, disposition)",
            "Pharmacology & medical device trial analytics",
            "Adverse events alerting & forecasting",
            "Post-market surveillance & RWE analytics",
            "Lab operations & inventory optimization",
            "Predictive enrollment & study outcomes"
          ]
        },
        {
          name: "Medical Labs",
          items: [
            "Operational lab KPIs (turnaround time, cost per test)",
            "Predictive equipment maintenance",
            "Inventory management & demand forecasting",
            "Quality control analytics",
            "Automated test result interpretation",
            "Clinical trial and R&D analytics"
          ]
        }
      ]
    },
    {
      category: "Banking & Finance",
      icon: Landmark,
      subsectors: [
        {
          name: "Banking",
          items: [
            "Bank stability indicators monitoring",
            "Institution performance forecasts",
            "360-degree customer view",
            "Cross-selling & upselling opportunities",
            "Market, credit, and operational risk modeling",
            "Fraud detection & automated compliance"
          ]
        },
        {
          name: "Insurance",
          items: [
            "AI-powered segment-specific recommendations",
            "Underwriting profitability monitoring",
            "Risk monitoring with stress testing",
            "Claims processing & customer service analytics",
            "Workforce & agent performance assessment",
            "Predictive insurance planning"
          ]
        },
        {
          name: "Lending",
          items: [
            "Borrower creditworthiness & default prediction",
            "Lending products performance analytics",
            "AI-powered loan portfolio optimization",
            "Operational bottleneck identification",
            "Continuous compliance monitoring"
          ]
        },
        {
          name: "Investment",
          items: [
            "Portfolio performance & benchmarking",
            "Factor exposure & risk attribution analysis",
            "Market, credit, and liquidity risk monitoring",
            "What-if risk factor scenarios",
            "Insider trading & HFT fraud detection",
            "Tax management insights"
          ]
        }
      ]
    }
  ];

  const moreIndustries = [
    { name: "Manufacturing", icon: Factory, items: ["OEE analysis", "Process quality optimization", "Maintenance scheduling", "Power consumption forecasting"] },
    { name: "Retail", icon: ShoppingCart, items: ["Sales & profitability monitoring", "Demand forecasting", "Inventory optimization", "Assortment planning"] },
    { name: "Logistics", icon: Truck, items: ["Operational capacity planning", "Predictive vehicle maintenance", "Vehicle demand forecasting", "IoT cargo monitoring"] },
    { name: "Real Estate", icon: Building2, items: ["Market trend insights", "Buyer-seller matching", "Portfolio management", "Occupancy rate monitoring"] },
    { name: "Professional Services", icon: Briefcase, items: ["Customer segmentation", "Sentiment analysis", "Staff performance optimization", "Resource forecasting"] },
    { name: "Energy & Utilities", icon: Zap, items: ["Energy generation monitoring", "Renewable share analysis", "Consumption pattern analysis", "Demand forecasting"] },
    { name: "Oil & Gas", icon: Droplets, items: ["Exploration management", "EUR & production forecasting", "Pipeline monitoring", "Refinery optimization"] },
    { name: "Telecoms", icon: Phone, items: ["Network performance monitoring", "Churn prevention", "Operational bottleneck identification"] },
    { name: "Education", icon: GraduationCap, items: ["Teaching quality feedback", "Student performance alerts", "Enrollment forecasting", "Financial analytics"] },
    { name: "Travel & Hospitality", icon: Plane, items: ["Customer preference tracking", "Real-time lodging recommendations", "AI-powered pricing", "Demand forecasting"] },
    { name: "Media & Entertainment", icon: Film, items: ["Audience segmentation", "Personalized content recommendations", "Content performance analytics", "Ad effectiveness tracking"] }
  ];

  const analyticsAreas = [
    { title: "Financial Analytics", icon: DollarSign, desc: "Monitoring revenue, expenses, and profitability. Budget planning and financial risk management." },
    { title: "Supply Chain Analytics", icon: TruckIcon, desc: "Demand forecasting, supplier performance monitoring, and predictive route optimization." },
    { title: "Marketing & Sales", icon: Megaphone, desc: "Pricing analytics, sales trend prediction, and competitor benchmarking." },
    { title: "Customer Analytics", icon: Users, desc: "Behavior analysis, predictive modeling, and churn risk management." },
    { title: "Asset Analytics", icon: Settings, desc: "Real-time monitoring, predictive maintenance, and investment planning." },
    { title: "HR Analytics", icon: UserCheck, desc: "Employee performance monitoring, retention strategy, and labor cost analytics." }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse delay-1000"></div>
          
          <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-300 text-sm font-medium backdrop-blur-md">
                  <Database size={16} /> Data Analytics Company
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                  Building Data Analytics <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Solutions for Different Domains</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                  GnJ Worldwide helps businesses from 30+ industries integrate, aggregate, and analyze various data types from multiple data sources to address their most ambitious needs at department and enterprise levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-500 transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
                      Start Your Data Journey <ArrowRight className="ml-2" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center bg-white/5 text-white border border-white/10 font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all">
                      View Case Studies
                  </Link>
              </div>
          </div>
      </div>

      {/* Industry Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Analytics by Industry</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Specialized solutions tailored to the unique data challenges of your sector.</p>
          </div>

          <div className="space-y-24">
              {industries.map((industry, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                          <industry.icon size={200} />
                      </div>
                      <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-12">
                              <div className="p-4 bg-blue-600/20 rounded-2xl text-blue-400">
                                  <industry.icon size={32} />
                              </div>
                              <h3 className="text-3xl md:text-4xl font-bold">{industry.category}</h3>
                          </div>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                              {industry.subsectors.map((sub, sIdx) => (
                                  <div key={sIdx} className="space-y-6">
                                      <h4 className="text-xl font-bold text-blue-300 border-b border-white/10 pb-4">{sub.name}</h4>
                                      <ul className="space-y-3">
                                          {sub.items.map((item, iIdx) => (
                                              <li key={iIdx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                                  <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={16} />
                                                  {item}
                                              </li>
                                          ))}
                                      </ul>
                                      <Link to="/contact" className="inline-flex items-center text-blue-400 text-sm font-bold hover:text-blue-300 transition-colors">
                                          Read all <ArrowRight className="ml-2" size={14} />
                                      </Link>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* More Industries Grid */}
      <div className="bg-slate-900/50 py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">More Industries We Serve</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">From Retail to Real Estate, we bring data-driven innovation to every corner of the market.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {moreIndustries.map((ind, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 hover:border-blue-500/30 transition-all group">
                          <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                              <ind.icon size={24} />
                          </div>
                          <h3 className="text-xl font-bold mb-4">{ind.name}</h3>
                          <ul className="space-y-2 mb-6">
                              {ind.items.slice(0, 3).map((item, i) => (
                                  <li key={i} className="text-slate-500 text-xs flex items-center gap-2">
                                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div> {item}
                                  </li>
                              ))}
                          </ul>
                          <Link to="/contact" className="text-blue-400 text-xs font-bold flex items-center gap-2">
                              Read all <ArrowRight size={12} />
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Analytics Areas */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Analytics by Area</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Addressing specific business functions with deep-dive data insights.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsAreas.map((area, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-10 rounded-[2.5rem] hover:border-purple-500/50 transition-all group">
                      <div className="p-4 bg-purple-600/20 rounded-2xl text-purple-400 w-fit mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all">
                          <area.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                      <p className="text-slate-400 leading-relaxed mb-8">
                          {area.desc}
                      </p>
                      <Link to="/contact" className="inline-flex items-center text-purple-400 font-bold hover:gap-3 transition-all">
                          Read all <ArrowRight className="ml-2" size={18} />
                      </Link>
                  </div>
              ))}
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-purple-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to outsmart the competition?</h2>
                  <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Leverage our 30+ years of cross-industry expertise to build a data ecosystem that drives real business value.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-blue-900 text-white border border-blue-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DataAnalyticsSolutionPage;
