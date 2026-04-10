import React, { useEffect, useState } from 'react';
import { CheckCircle, Bug, Search, Smartphone, Monitor, Shield, ArrowRight, ArrowLeft, Globe, Award, Users, Laptop, Cloud, Database, ShoppingCart, Heart, Activity, Cpu, Glasses, Link as LinkIcon, Settings, Zap, BarChart, FileText, Layout, PenTool, CheckSquare, Server, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestingAndQaPage: React.FC = () => {
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setScanned(true), 500);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-teal-50 py-24 px-4 text-center">
          <Link to="/services/software-development" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors font-bold">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Software Development
          </Link>
          <div className="relative inline-block mb-8">
              <Search size={64} className={`text-teal-600 transition-transform duration-1000 ${scanned ? 'rotate-12 scale-110' : '-rotate-12 scale-100'}`} />
              {scanned && (
                  <div className="absolute -top-2 -right-2 text-green-500 animate-bounce">
                      <CheckCircle size={24} fill="currentColor" className="text-white" />
                  </div>
              )}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Professional Software Testing Company</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              For 36 years, GnJ Worldwide has built testing expertise across healthcare, manufacturing, retail, logistics, and more. Our goal-driven, self-managed experts dive into your project within 1–3 days to validate functionality, integrations, performance, usability, and security.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto text-left">
              {[
                  { icon: Globe, title: "Global Presence", desc: "Located in India with presence in the EU & Gulf" },
                  { icon: Award, title: "ISO 9001", desc: "Certified quality management system" },
                  { icon: CheckSquare, title: "ISTQB-Certified", desc: "Highly trained test engineers" },
                  { icon: Users, title: "75+ Professionals", desc: "Dedicated testing experts" },
                  { icon: Settings, title: "Complex Projects", desc: "Experienced in massive infrastructures" }
              ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                      <stat.icon className="text-teal-500 mb-3" size={28} />
                      <h4 className="font-bold text-slate-900 mb-1 text-sm">{stat.title}</h4>
                      <p className="text-xs text-slate-500">{stat.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Applications & Solutions */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-16">
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Types of Applications We Test</h2>
                  <div className="grid grid-cols-2 gap-4">
                      {[
                          { icon: Globe, label: "Web Applications" },
                          { icon: Cloud, label: "SaaS Platforms" },
                          { icon: Smartphone, label: "Mobile Apps" },
                          { icon: Monitor, label: "Desktop Apps" },
                          { icon: Database, label: "Data Warehouses (DWH)" }
                      ].map((app, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                              <app.icon className="text-teal-600" size={20} />
                              <span className="font-medium text-slate-700">{app.label}</span>
                          </div>
                      ))}
                  </div>
              </div>
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Specific Solutions & Industries</h2>
                  <div className="grid grid-cols-2 gap-4">
                      {[
                          { icon: Settings, label: "ERP Systems" },
                          { icon: Users, label: "CRM Platforms" },
                          { icon: ShoppingCart, label: "Ecommerce" },
                          { icon: Heart, label: "Healthcare Software" },
                          { icon: Shield, label: "Insurance Software" }
                      ].map((sol, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                              <sol.icon className="text-teal-600" size={20} />
                              <span className="font-medium text-slate-700">{sol.label}</span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Risk-Free Innovation */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Testing for Risk-Free Innovation</h2>
                  <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                      We closely collaborate with development teams for effective risk-based testing focused on innovation challenges and cutting-edge architectures.
                  </p>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                  {[
                      { icon: Server, label: "Microservices" },
                      { icon: Database, label: "Big Data" },
                      { icon: Glasses, label: "AR/VR" },
                      { icon: Cpu, label: "IoT Devices" },
                      { icon: LinkIcon, label: "Blockchain" }
                  ].map((tech, idx) => (
                      <div key={idx} className="bg-slate-800 border border-slate-700 px-8 py-6 rounded-2xl flex flex-col items-center gap-4 hover:bg-slate-700 transition-colors">
                          <tech.icon className="text-teal-400" size={32} />
                          <span className="font-bold text-lg">{tech.label}</span>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Testing Types */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Testing Types We Perform</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                  { icon: Bug, title: "Functional Testing" },
                  { icon: LinkIcon, title: "Integration Testing" },
                  { icon: Monitor, title: "Compatibility Testing" },
                  { icon: RefreshCw, title: "Regression Testing" },
                  { icon: Zap, title: "Performance Testing" },
                  { icon: Shield, title: "Security Testing" },
                  { icon: Users, title: "Usability Testing" }
              ].map((item, idx) => (
                  <div key={idx} className="p-6 border border-slate-200 rounded-xl hover:shadow-md hover:border-teal-300 transition-all flex items-center gap-4">
                      <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-teal-600" size={24} />
                      </div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                  </div>
              ))}
          </div>
      </div>

      {/* Test Automation & Tools */}
      <div className="bg-teal-50 py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Test Automation (IMAAT)</h2>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          GnJ Worldwide adheres to the proprietary <strong>Integrated Manual and Automated Testing (IMAAT)</strong> approach to optimize testing time. 
                      </p>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          Our leads analyze automation feasibility and calculate ROI. If lucrative, we develop reusable scripts at API and UI levels, introducing test automation within just 3 weeks.
                      </p>
                      <Link to="/contact" className="inline-flex items-center text-teal-700 font-bold hover:text-teal-900 transition-colors">
                          More about test automation <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-teal-100">
                      <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">Tools We Use</h3>
                      <div className="space-y-6">
                          <div>
                              <h4 className="font-bold text-teal-700 mb-3 text-sm uppercase tracking-wider">UI Testing</h4>
                              <div className="flex flex-wrap gap-2">
                                  {["Selenium", "Appium", "Protractor", "Ranorex", "fMBT", "XCTest", "TestStack WHITE"].map(t => <span key={t} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">{t}</span>)}
                              </div>
                          </div>
                          <div>
                              <h4 className="font-bold text-teal-700 mb-3 text-sm uppercase tracking-wider">API Testing</h4>
                              <div className="flex flex-wrap gap-2">
                                  {["REST-assured", "RestSharp", "Apache JMeter", "SoapUI", "Postman"].map(t => <span key={t} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">{t}</span>)}
                              </div>
                          </div>
                          <div>
                              <h4 className="font-bold text-teal-700 mb-3 text-sm uppercase tracking-wider">DevOps & CI/CD</h4>
                              <div className="flex flex-wrap gap-2">
                                  {["Docker", "Kubernetes", "Ansible", "Terraform", "Jenkins", "GitLab CI/CD", "Azure DevOps", "Datadog"].map(t => <span key={t} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">{t}</span>)}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* QA Consulting & Reports */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-16">
              {/* QA Consulting */}
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">QA Consulting & Assessment</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      Fueled by 36 years in software testing and 23 years in QA consulting, we offer strategic guidance to elevate your quality standards.
                  </p>
                  <ul className="space-y-4 mb-8">
                      {[
                          "Quality assurance strategy development",
                          "Quality assurance process audit",
                          "Pre-certification preparation (HIPAA, GAMP, PCI DSS)",
                          "Process certifications (ISO9000, ISO/IEC/IEEE 29119-3:2013)"
                      ].map((item, i) => (
                          <li key={i} className="flex items-start">
                              <CheckCircle className="text-teal-500 mr-3 flex-shrink-0 mt-1" size={20} />
                              <span className="text-slate-700 font-medium">{item}</span>
                          </li>
                      ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center text-teal-700 font-bold hover:text-teal-900 transition-colors">
                      Explore QA consulting <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
              </div>

              {/* Comprehensive Reports */}
              <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-xl">
                  <h2 className="text-3xl font-bold mb-6">Actionable Testing Reports</h2>
                  <p className="text-slate-400 mb-8">
                      We provide highly detailed reports catering to technical teams and business stakeholders, enabling precise troubleshooting.
                  </p>
                  <div className="space-y-6">
                      {[
                          { title: "Detailed Test Log", desc: "Exhaustive logs detailing every test case, timestamps, and system states." },
                          { title: "Error Analysis", desc: "Comprehensive breakdown with stack traces, error codes, and exception handling." },
                          { title: "Coverage Analysis", desc: "Scope and effectiveness of automated tests, highlighting areas lacking coverage." },
                          { title: "Actionable Recommendations", desc: "Prioritized suggestions for immediate fixes and long-term improvements." }
                      ].map((report, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                              <div className="w-10 h-10 bg-teal-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <FileText className="text-teal-400" size={20} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-teal-300 mb-1">{report.title}</h4>
                                  <p className="text-sm text-slate-400 leading-relaxed">{report.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-teal-600 text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ensure Quality at Speed</h2>
          <Link to="/contact" className="inline-block bg-white text-teal-700 hover:bg-teal-50 font-bold py-4 px-10 rounded-xl transition-colors shadow-lg">
              Hire QA Engineers
          </Link>
      </div>
    </div>
  );
};



export default TestingAndQaPage;