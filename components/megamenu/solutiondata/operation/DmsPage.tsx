import React, { useEffect, useState } from 'react';
import { 
  FileText, ArrowRight, 
  Archive, Zap, Layout, Globe, ShieldCheck, Settings,
  CheckCircle2, Cpu, FileEdit, Layers, Smartphone,
  Download, Mail, History, Database, Key, RefreshCw, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DmsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden bg-blue-950 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-blue-950"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-3 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6 backdrop-blur-sm">
                      <FileText size={40} className="text-blue-400" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Documentation Automation Software
              </h1>
              <p className={`text-xl text-blue-100/80 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Go paperless and automate your document lifecycle. We build intelligent systems for template management, automated generation, and secure distribution.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center group shadow-lg shadow-blue-500/20">
                      Digitize Your Workflow <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Documentation Automation: Key Functionality</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                  Based on GnJ Worldwide's extensive experience in enterprise content management, our consultants have outlined the core features of documentation automation software designed to eliminate manual errors and accelerate business velocity.
              </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
              {/* Template Creation & Management */}
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 hover:border-blue-500/30 transition-all group">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="bg-blue-50 p-3 rounded-2xl group-hover:bg-blue-600 transition-colors">
                          <Layout className="text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold">Template Creation & Management</h3>
                  </div>
                  <div className="space-y-6">
                      {[
                          { title: "Intelligent Template Editor", desc: "Create templates with dynamic fields and interview forms with complex branching logic.", icon: FileEdit },
                          { title: "Legacy Conversion", desc: "Convert existing electronic documents (contracts, invoices) into intelligent templates.", icon: RefreshCw },
                          { title: "AI-Powered OCR", desc: "AI-based conversion of scanned documents into readable PDFs with automated data extraction.", icon: Cpu },
                          { title: "Centralized Repository", desc: "Secure, centralized storage for all intelligent templates with advanced metadata search.", icon: Database },
                          { title: "Approval Workflows", desc: "Streamline the template lifecycle with built-in approval and versioning controls.", icon: CheckCircle2 }
                      ].map((item, i) => (
                          <div key={i} className="flex gap-4">
                              <item.icon className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                              <div>
                                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                  <p className="text-sm text-slate-500">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Document Generation & Management */}
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 hover:border-blue-500/30 transition-all group">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="bg-indigo-50 p-3 rounded-2xl group-hover:bg-indigo-600 transition-colors">
                          <Zap className="text-indigo-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold">Document Generation & Management</h3>
                  </div>
                  <div className="space-y-6">
                      {[
                          { title: "Automated Data Extraction", desc: "Generate documents using form answers or data from integrated enterprise systems.", icon: Layers },
                          { title: "Batch Generation", desc: "Mass-produce contracts, invoices, letters, and claims with a single click.", icon: Archive },
                          { title: "Assembly Workflows", desc: "Coordinate complex document assembly processes across multiple departments.", icon: Settings },
                          { title: "Built-in E-Signature", desc: "Accelerate approvals with integrated, legally binding electronic signatures.", icon: Key },
                          { title: "Smart Notifications", desc: "Real-time alerts for document creation, approval status, and template modifications.", icon: Zap }
                      ].map((item, i) => (
                          <div key={i} className="flex gap-4">
                              <item.icon className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
                              <div>
                                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                  <p className="text-sm text-slate-500">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Output & Distribution Section */}
      <div className="bg-slate-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                      <h2 className="text-4xl font-bold mb-8">Document Output & Distribution</h2>
                      <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                          Deliver your documents exactly where they need to be, in the format your stakeholders require. Our systems ensure seamless distribution across global channels.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-8">
                          {[
                              { title: "Multi-Format Output", desc: "Export to .pdf, .docx, .pptx, and .html seamlessly.", icon: Download },
                              { title: "Multilingual Support", desc: "Generate and output documents in multiple languages.", icon: Globe },
                              { title: "Mobile Accessibility", desc: "Mobile access and signature capture for teams on the go.", icon: Smartphone },
                              { title: "Automated Emailing", desc: "Instant distribution of created documents via secure email.", icon: Mail }
                          ].map((item, i) => (
                              <div key={i} className="space-y-3">
                                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                                      <item.icon size={24} />
                                  </div>
                                  <h4 className="font-bold text-xl">{item.title}</h4>
                                  <p className="text-sm text-slate-400">{item.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className={`relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                          <div className="space-y-6">
                              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                  <span className="font-bold">Distribution Status</span>
                                  <div className="flex gap-2">
                                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                      <span className="text-xs text-green-500 font-bold uppercase">Live</span>
                                  </div>
                              </div>
                              <div className="space-y-4">
                                  {[
                                      { label: "Contract_v2.pdf", status: "Sent", time: "2m ago" },
                                      { label: "Invoice_882.docx", status: "Signed", time: "15m ago" },
                                      { label: "Project_Proposal.html", status: "Viewed", time: "1h ago" }
                                  ].map((log, i) => (
                                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                          <div className="flex items-center gap-3">
                                              <FileText size={18} className="text-blue-400" />
                                              <span className="text-sm font-medium">{log.label}</span>
                                          </div>
                                          <div className="text-right">
                                              <div className="text-xs font-bold text-blue-400">{log.status}</div>
                                              <div className="text-[10px] text-slate-500">{log.time}</div>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Security & Compliance Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Document Security & Compliance</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Protecting your enterprise data with bank-grade security and ensuring adherence to global regulatory standards.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Lock, title: "Data Encryption", desc: "End-to-end encryption for documents at rest and in transit." },
                  { icon: ShieldCheck, title: "RBAC & MFA", desc: "Role-based access control and multi-factor authentication." },
                  { icon: History, title: "Versioning & Audit", desc: "Complete document version history and detailed audit trails." },
                  { icon: Archive, title: "Retention Policies", desc: "Automated archiving and regulatory deletion/retention policies." },
                  { icon: Database, title: "Backup & Recovery", desc: "Secure document backup and rapid disaster recovery protocols." },
                  { icon: Globe, title: "Global Compliance", desc: "Adherence to HIPAA, GDPR, GLBA, SOX, and other standards." }
              ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                          <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to automate your documentation?</h2>
                  <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                      Join high-performing organizations that have transformed their document workflows into a strategic competitive advantage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-blue-800 text-white border border-blue-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all">
                          Schedule a Demo
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DmsPage;
