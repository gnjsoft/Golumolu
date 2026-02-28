import React, { useState } from 'react';

// --- Types ---

interface TechItem {
  name: string;
  logo: string;
}

interface TechGroup {
  title?: string;
  items: TechItem[];
}

interface TechCategory {
  id: string;
  label: string;
  groups: TechGroup[];
}

// --- Data ---

const CATEGORIES: TechCategory[] = [
  {
    id: 'web',
    label: 'Web Development',
    groups: [
      {
        title: "Front End",
        items: [
          { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
          { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
          { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
        ]
      },
      {
        title: "Back End",
        items: [
          { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: ".NET Core", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
          { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
          { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" }
        ]
      }
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile & Desktop',
    groups: [
      {
        title: "Mobile",
        items: [
          { name: "iOS", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg" },
          { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
          { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
          { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
          { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" }
        ]
      },
      {
        title: "Desktop",
        items: [
          { name: "Electron", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" },
          { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
          { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
          { name: "Qt", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" }
        ]
      }
    ]
  },
  {
    id: 'data',
    label: 'Data & AI',
    groups: [
      {
        title: "Databases",
        items: [
          { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
          { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
          { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" }
        ]
      },
      {
        title: "AI & Big Data",
        items: [
          { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
          { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
          { name: "Hadoop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
          { name: "Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
          { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" }
        ]
      }
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    groups: [
      {
        title: "Cloud Providers",
        items: [
          { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
          { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
          { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
          { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" }
        ]
      },
      {
        title: "DevOps & Tools",
        items: [
          { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
          { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
          { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
          { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
          { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
        ]
      }
    ]
  },
  {
    id: 'enterprise',
    label: 'Enterprise & Security',
    groups: [
      {
        title: "Platforms & Low-Code",
        items: [
          { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
          { name: "SharePoint", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_SharePoint_2019.svg" },
          { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
          { name: "ServiceNow", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/ServiceNow_logo.svg" },
          { name: "Dynamics 365", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Microsoft_Dynamics_365_icon.svg" }
        ]
      },
      {
        title: "Security",
        items: [
          { name: "Cloudflare", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
          { name: "Splunk", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Splunk_logo.svg" },
          { name: "Wireshark", logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Wireshark_logo.png" }
        ]
      }
    ]
  }
];

const Technologies: React.FC = () => {
  const [activeTab, setActiveTab] = useState('web');

  const activeCategory = CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0];

  return (
    <section className="bg-sky-50 py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Technologies We Master
          </h2>
          <div className="w-24 h-1.5 bg-yellow-400 rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl">
            Our engineering team is proficient in a vast array of modern technologies, ensuring we select the perfect stack for your specific requirements.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="animate-fade-in min-h-[400px]">
          {activeCategory.groups.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-12 last:mb-0">
              {group.title && (
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-xl font-bold text-slate-800">{group.title}</h3>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="group bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4 h-32"
                  >
                    <div className="h-10 w-full flex items-center justify-center">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-full w-auto max-w-[80%] object-contain filter group-hover:brightness-110 transition-all"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors text-center">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;