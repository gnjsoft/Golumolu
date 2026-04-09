import React, { useEffect, useState } from 'react';
import { Cpu, Sparkles, Eye, Mic, ArrowRight, ScanFace, CheckCircle2, Network, Headphones, Building2, Stethoscope, Landmark, Truck, Package, Wrench, TrendingUp, Users, ShieldAlert, Globe, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtificialIntelligencePage: React.FC = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-sans text-white selection:bg-green-500 selection:text-black">
      {/* Sci-Fi Hero */}
      <div className="relative py-32 px-4 overflow-hidden h-[80vh] flex items-center justify-center">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965" 
                alt="AI Eye" 
                className="w-full h-full object-cover opacity-50"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
             {/* Scanlines */}
             <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
         </div>

         <div className="relative z-10 max-w-5xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 border border-green-500/50 bg-green-900/20 px-6 py-2 rounded-full text-green-400 text-sm font-mono mb-8 backdrop-blur-md">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 System Online v2.0
             </div>
             <h1 className={`text-6xl md:text-9xl font-bold mb-8 tracking-tighter ${glitch ? 'translate-x-1 text-green-500 opacity-80' : 'text-white'}`} style={{textShadow: "0 0 20px rgba(74, 222, 128, 0.5)"}}>
                 Artificial <br/>Intelligence
             </h1>
             <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light">
                 Generative AI, Computer Vision, and Cognitive Computing solutions that redefine reality.
             </p>
           
         </div>
      </div>

      {/* AI Solutions and Capabilities We Build */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">AI Solutions & Capabilities We Build</h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  As an AI software development company with hands-on experience across 30+ industries, we tailor AI solutions to the unique needs of each domain—including healthcare, BFSI, manufacturing, retail, advertising, professional services, and beyond.
              </p>
          </div>

          {/* By AI Capability */}
          <div className="mb-24">
              <h3 className="text-3xl font-bold mb-10 text-white flex items-center gap-4">
                  <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                  By AI Capability
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                  {/* Generative AI */}
                  <div className="bg-gray-900/40 backdrop-blur border border-gray-800 p-10 rounded-3xl hover:border-green-500/50 transition-all group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] group-hover:bg-green-500/20 transition-colors"></div>
                      <Sparkles className="w-12 h-12 text-green-400 mb-6 relative z-10" />
                      <h4 className="text-2xl font-bold mb-6 text-white relative z-10">Generative AI</h4>
                      <ul className="space-y-4 text-gray-400 relative z-10">
                          <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" /> <span><strong>Chatbots & Copilots:</strong> Intelligent conversational interfaces for internal and external use.</span></li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" /> <span><strong>Autonomous Agents:</strong> Including voice agents capable of executing complex, multi-step tasks.</span></li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" /> <span><strong>Multi-Agent Systems:</strong> Collaborative AI networks designed to solve intricate enterprise problems.</span></li>
                      </ul>
                  </div>
                  
                  {/* Traditional ML */}
                  <div className="bg-gray-900/40 backdrop-blur border border-gray-800 p-10 rounded-3xl hover:border-green-500/50 transition-all group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors"></div>
                      <Network className="w-12 h-12 text-green-400 mb-6 relative z-10" />
                      <h4 className="text-2xl font-bold mb-6 text-white relative z-10">Traditional ML & Deep Learning</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 relative z-10">
                          <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> Predictive AI</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> Prescriptive AI (Optimization)</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> Recommendation Engines</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> Anomaly Detection</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> Computer Vision</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> Descriptive & Diagnostic AI</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> Classical NLP</li>
                      </ul>
                  </div>
              </div>
          </div>

          {/* By Business Area */}
          <div>
              <h3 className="text-3xl font-bold mb-10 text-white flex items-center gap-4">
                  <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                  By Business Area
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      {
                          title: "Customer Service",
                          icon: Headphones,
                          desc: "Virtual support agents, intent detection, churn prediction, and AI assistants that empower human agents with suggested replies and summaries."
                      },
                      {
                          title: "Industry-Centric Assistants",
                          icon: Building2,
                          desc: "Specialized GenAI & RAG copilots for Healthcare (AI scribes), BFSI (policy Q&A), Education (virtual tutors), Marketing, and Gaming."
                      },
                      {
                          title: "Healthcare & Imaging",
                          icon: Stethoscope,
                          desc: "Medical image analysis (MRI, CT), EHR management assistance, clinical decision support, and outcome prediction for readmission risks."
                      },
                      {
                          title: "Financial Management",
                          icon: Landmark,
                          desc: "Finance copilots for reporting, agentic workflows for reconciliations, fraud detection, cash flow forecasting, and tax optimization."
                      },
                      {
                          title: "Supply Chain",
                          icon: Truck,
                          desc: "Procurement copilots, real-time route optimization, predictive maintenance for fleets, and computer vision for automated product inspection."
                      },
                      {
                          title: "Inventory Management",
                          icon: Package,
                          desc: "Warehouse management copilots, computer vision for cycle counting, demand forecasting, and dynamic price optimization."
                      },
                      {
                          title: "Asset Maintenance",
                          icon: Wrench,
                          desc: "Technician copilots for SOP guidance, predictive asset maintenance, early-failure detection, and real-time energy consumption optimization."
                      },
                      {
                          title: "Sales & Marketing",
                          icon: TrendingUp,
                          desc: "Personalized content generation, meeting summarization, campaign copilots, predictive lead scoring, and multi-dimensional customer segmentation."
                      },
                      {
                          title: "HR Management",
                          icon: Users,
                          desc: "HR copilots for recruitment, AI-powered CV screening, turnover prediction, sentiment analysis, and employee onboarding assistance."
                      },
                      {
                          title: "Security & Fraud",
                          icon: ShieldAlert,
                          desc: "SOC copilots for alert triage, automated detection of digital/physical fraudulent activity, phishing simulation, and biometric authentication."
                      },
                      {
                          title: "Web Scraping & Crawling",
                          icon: Globe,
                          desc: "LLM-assisted extraction from unstructured content, topic aggregation, taxonomy normalization, and image-based enrichment via OCR."
                      },
                      {
                          title: "Content Creation",
                          icon: PenTool,
                          desc: "Natural language generation with brand guardrails, multi-modal generation pipelines, SEO optimization, and automated content moderation."
                      }
                  ].map((area, idx) => (
                      <div key={idx} className="bg-gray-900/30 border border-gray-800 p-8 rounded-2xl hover:bg-gray-800/50 hover:border-green-500/30 transition-all group">
                          <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                              <area.icon className="w-6 h-6 text-green-400" />
                          </div>
                          <h4 className="text-xl font-bold mb-3 text-white">{area.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default ArtificialIntelligencePage;