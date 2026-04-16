import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Smartphone, Monitor, Layers, Cloud, Database, 
  Network, BrainCircuit, Settings, ShieldCheck, CheckCircle2,
  Code2, Server, Terminal
} from 'lucide-react';

const TechnologiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Web');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const techCategories = [
    {
      id: 'Web',
      icon: Globe,
      subcategories: [
        {
          title: "Back end",
          items: ["Microsoft .NET", "Java", "Python", "Node.js", "Golang", "PHP", "C++"]
        },
        {
          title: "Front end",
          items: ["HTML5", "CSS", "JavaScript", "Angular JS", "React JS", "MeteorJS", "Vue.js", "Ember.js"]
        }
      ]
    },
    {
      id: 'Mobile',
      icon: Smartphone,
      subcategories: [
        {
          title: "Native & Cross-platform",
          items: ["iOS", "Android", "Xamarin", "Apache Cordova", "React Native", "Flutter", "Kotlin", "Dart"]
        },
        {
          title: "Web",
          items: ["Progressive Web Apps"]
        }
      ]
    },
    {
      id: 'Desktop',
      icon: Monitor,
      subcategories: [
        {
          title: "Languages & Frameworks",
          items: ["C++", "Qt", "C#", "Python", "Objective-C", "Swift"]
        }
      ]
    },
    {
      id: 'Low-code',
      icon: Code2,
      subcategories: [
        {
          title: "Low-code development",
          items: ["Microsoft Power Apps", "Microsoft Power Automate", "App Engine Studio (ServiceNow)", "Bubble.io"]
        }
      ]
    },
    {
      id: 'Platforms',
      icon: Layers,
      subcategories: [
        {
          title: "Enterprise Platforms",
          items: ["Microsoft Dynamics 365", "Salesforce", "Adobe Commerce", "SharePoint", "ServiceNow", "Power BI", "SAP SE", "QRadar"]
        }
      ]
    },
    {
      id: 'Clouds',
      icon: Cloud,
      subcategories: [
        {
          title: "Cloud Providers",
          items: ["Amazon Web Services", "Microsoft Azure", "Google Cloud Platform", "DigitalOcean", "Rackspace Technology"]
        }
      ]
    },
    {
      id: 'Databases',
      icon: Database,
      subcategories: [
        {
          title: "Relational databases / data storages",
          items: ["Microsoft SQL Server", "MySQL", "Oracle", "PostgreSQL", "Azure Synapse Analytics", "Azure SQL Database", "Amazon RDS", "Amazon S3", "Google Cloud SQL"]
        }
      ]
    },
    {
      id: 'Big Data',
      icon: Network,
      subcategories: [
        {
          title: "Big data technologies",
          items: ["Apache Hadoop", "Apache Spark", "Apache Cassandra", "Apache Kafka", "Apache Hive", "Apache ZooKeeper", "Apache HBase", "Azure Cosmos DB", "Azure Blob Storage", "Azure Data Lake", "Amazon DynamoDB", "Amazon Redshift", "Amazon DocumentDB", "Amazon ElastiCache", "MongoDB", "Google Cloud Datastore"]
        }
      ]
    },
    {
      id: 'Machine Learning',
      icon: BrainCircuit,
      subcategories: [
        {
          title: "Programming languages",
          items: ["MATLAB", "GNU Octave", "R"]
        },
        {
          title: "Frameworks",
          items: ["Apache Mahout", "Caffe", "Apache MXNet", "TensorFlow", "Keras", "Torch", "OpenCV", "Theano"]
        },
        {
          title: "Libraries",
          items: ["Apache Spark MLlib", "Scikit Learn", "Gensim", "SpaCy"]
        },
        {
          title: "Cloud services",
          items: ["Amazon Machine Learning", "Amazon SageMaker", "Azure Machine Learning", "Google Cloud AI Platform"]
        }
      ]
    },
    {
      id: 'DevOps',
      icon: Server,
      subcategories: [
        {
          title: "Containerization",
          items: ["Docker", "Kubernetes", "Red Hat OpenShift", "Apache Mesos"]
        },
        {
          title: "Automation",
          items: ["Ansible", "Puppet", "Chef", "Saltstack", "HashiCorp Terraform", "HashiCorp Packer"]
        },
        {
          title: "CI/CD tools",
          items: ["AWS Developer Tools", "Azure DevOps", "Google Developer Tools", "GitLab CI/CD", "Jenkins", "TeamCity"]
        },
        {
          title: "Monitoring",
          items: ["Zabbix", "Nagios", "Elasticsearch", "Prometheus", "Grafana", "Datadog"]
        }
      ]
    },
    {
      id: 'Testing',
      icon: CheckCircle2,
      subcategories: [
        {
          title: "Test automation tools",
          items: ["Selenium", "Appium", "Protractor", "fMBT", "XCTest", "TestStack WHITE", "Cuit", "Ranorex", "Postman", "Apache JMeter", "HP QuickTest Professional", "Unified Functional Testing"]
        }
      ]
    },
    {
      id: 'Security',
      icon: ShieldCheck,
      subcategories: [
        {
          title: "Information security",
          items: ["QRadar", "Cloudflare", "Siege", "BurpSuite", "Nessus Professional", "Aircrack-ng", "Acunetix", "Rapid7 Metasploit", "Nmap", "DIRB", "Wireshark", "ZMap", "Masscan"]
        }
      ]
    }
  ];

  const activeCategoryData = techCategories.find(c => c.id === activeTab) || techCategories[0];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="bg-[#0f172a] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8">
              <Terminal size={16} /> Technologies We Work With
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Technology <span className="text-blue-500">Expertise</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We specialize in leveraging top-tier technologies to deliver impactful solutions. Our expertise ensures that clients stay ahead in today's digital landscape, empowering them to thrive.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex flex-col gap-2">
              {techCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-semibold transition-all ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                    }`}
                  >
                    <Icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                    {category.id}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                  <activeCategoryData.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{activeCategoryData.id} Technologies</h2>
              </div>

              <div className="space-y-12">
                {activeCategoryData.subcategories.map((sub, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {sub.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {sub.items.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium border border-slate-200 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all cursor-default shadow-sm hover:shadow"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TechnologiesPage;