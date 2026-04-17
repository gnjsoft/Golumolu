import React, { useEffect, useState } from 'react';
import { Server, Cloud, HardDrive, Network, Cpu, ArrowRight, Database, Monitor, Smartphone, Layout, Wifi, Shield, Code, Settings, CheckCircle2, Globe, Lock, Clock, IndianRupee, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfrastructureServicesPage: React.FC = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoad(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 overflow-hidden">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div className={`transition-all duration-1000 ${load ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                 <h1 className="text-5xl font-bold mb-6">Robust IT <br/> <span className="text-blue-500">Infrastructure</span></h1>
                 <p className="text-slate-400 text-xl mb-8">
                     From on-premise data centers to hybrid cloud environments, we build the backbone of your digital operations.
                 </p>
                 <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors inline-flex items-center">
                     Upgrade Infrastructure <ArrowRight className="ml-2" />
                 </Link>
             </div>

             {/* Isometric Server Block Visual */}
             <div className={`relative h-[400px] perspective-1000 transition-all duration-1000 delay-300 ${load ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                     {/* Stack 1 */}
                     <div className="relative w-32 h-40 bg-slate-800 border-2 border-slate-700 rounded-lg transform -skew-y-12 shadow-2xl z-20 hover:-translate-y-4 transition-transform duration-500">
                         <div className="absolute top-2 left-2 right-2 h-2 bg-green-500/50 rounded-sm animate-pulse"></div>
                         <div className="absolute top-6 left-2 right-2 h-1 bg-slate-600 rounded-sm"></div>
                         <div className="absolute top-10 left-2 right-2 h-1 bg-slate-600 rounded-sm"></div>
                         <Server className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600" size={40} />
                     </div>
                     {/* Stack 2 */}
                     <div className="absolute top-12 -left-20 w-32 h-40 bg-slate-800 border-2 border-slate-700 rounded-lg transform -skew-y-12 shadow-2xl z-10 hover:-translate-y-4 transition-transform duration-500 delay-100">
                         <div className="absolute top-2 left-2 right-2 h-2 bg-blue-500/50 rounded-sm animate-pulse"></div>
                         <Database className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600" size={40} />
                     </div>
                     {/* Stack 3 */}
                     <div className="absolute -top-12 left-20 w-32 h-40 bg-slate-800 border-2 border-slate-700 rounded-lg transform -skew-y-12 shadow-2xl z-0 hover:-translate-y-4 transition-transform duration-500 delay-200">
                         <div className="absolute top-2 left-2 right-2 h-2 bg-yellow-500/50 rounded-sm animate-pulse"></div>
                         <HardDrive className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600" size={40} />
                     </div>
                 </div>
             </div>
         </div>
      </div>

      {/* Components Covered Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IT Infrastructure Components We Cover</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  We professionally handle modern enterprise IT infrastructures—massive, complex, and heterogeneous. From daily monitoring to long-term optimization, we manage all your IT components.
              </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                  { icon: Monitor, title: "Hardware", items: ["Desktops & Laptops", "Mobile devices & tablets", "IoT devices"] },
                  { icon: Layout, title: "Software & Integrations", items: ["Custom & off-the-shelf apps", "Custom & OOTB ESBs", "Message brokers"] },
                  { icon: Wifi, title: "Networks", items: ["Switches & Routers", "Wireless access points", "Servers & VPNs"] },
                  { icon: Database, title: "Data Storage", items: ["Databases", "Data warehouses", "Data lakes (Cloud & On-prem)"] },
                  { icon: Cloud, title: "Cloud Infrastructure", items: ["IaaS & PaaS", "Virtual machines & Containers", "Serverless platforms", "Load balancers"] },
                  { icon: Shield, title: "Security Tools", items: ["Firewalls & SIEM", "IAM & Antivirus", "Network security monitoring", "Encryption tools"] },
                  { icon: Code, title: "Software Dev Infra", items: ["Dev & testing environments", "CI/CD pipelines", "Containerization tools", "Dependency management"] },
                  { icon: Settings, title: "Cloud Management", items: ["Cloud management platforms", "Multi-cloud tools", "Cost optimization", "Governance & compliance"] }
              ].map((comp, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-lg hover:border-blue-200 transition-all group">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                          <comp.icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{comp.title}</h3>
                      <ul className="space-y-2">
                          {comp.items.map((item, i) => (
                              <li key={i} className="flex items-start text-slate-600 text-sm">
                                  <CheckCircle2 className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      </div>

      {/* Technologies and Tools Section */}
      <div className="bg-slate-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Technologies & Tools We Work With</h2>
                  <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                      Our experts are proficient in a wide array of industry-leading platforms, databases, and DevOps tools.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                  {[
                      { category: "Clouds & Platforms", tools: ["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean", "Rackspace", "Dynamics 365", "Salesforce", "ServiceNow", "SAP SE"] },
                      { category: "Databases & Storage", tools: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "MongoDB", "Cassandra", "Apache Hive", "Redis"] },
                      { category: "Big Data", tools: ["Apache Hadoop", "Apache Spark", "Apache Kafka", "Amazon Redshift", "Azure Cosmos DB", "Google Datastore"] },
                      { category: "DevOps & CI/CD", tools: ["Docker", "Kubernetes", "Ansible", "Terraform", "Jenkins", "GitLab CI/CD", "Azure DevOps"] },
                      { category: "Monitoring & Ticketing", tools: ["Zabbix", "Prometheus", "Grafana", "Datadog", "Elastic Stack", "Jira", "Zendesk"] },
                      { category: "Remote Collaboration", tools: ["VPN", "RPD", "Microsoft Teams", "Zoom", "TeamViewer"] }
                  ].map((tech, idx) => (
                      <div key={idx} className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl">
                          <h3 className="text-2xl font-bold mb-6 text-blue-400">{tech.category}</h3>
                          <div className="flex flex-wrap gap-2">
                              {tech.tools.map((tool, i) => (
                                  <span key={i} className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-default">
                                      {tool}
                                  </span>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Challenges Addressed Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Equipped to Address Major Infrastructure Challenges</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  We tackle the most complex IT hurdles to ensure your business remains agile, secure, and cost-efficient.
              </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  {
                      icon: Globe,
                      title: "Mastering Multi-Cloud",
                      desc: "As official partners of AWS and Microsoft Azure, we leverage the best features of major cloud providers to create a winning, customized multi-cloud strategy."
                  },
                  {
                      icon: Cpu,
                      title: "Heterogeneous Environments",
                      desc: "Our team of 750+ IT professionals possesses the skills to seamlessly integrate and manage both legacy systems and modern tech stacks."
                  },
                  {
                      icon: Lock,
                      title: "Staying on Top of Security",
                      desc: "With 22 years of cybersecurity experience, our SOC experts handle compliance, administration, and rigorous security testing to protect your assets."
                  },
                  {
                      icon: Clock,
                      title: "24/7/365 Availability",
                      desc: "Through round-the-clock monitoring, architecture adjustments, and robust backups, we maximize uptime and prevent unforeseen infrastructure failures."
                  },
                  {
                      icon: IndianRupee,
                      title: "Optimized IT Costs",
                      desc: "We keep your IT expenses reasonable. By rightsizing cloud resources and utilizing Reserved/Spot instances, we can reduce costs by 20-40%."
                  },
                  {
                      icon: Home,
                      title: "Remote & Hybrid Workplaces",
                      desc: "With over 80% of our projects implemented remotely, we excel at ensuring prompt transitions to telework and creating secure digital workspaces."
                  }
              ].map((challenge, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                          <challenge.icon className="text-blue-600" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default InfrastructureServicesPage;