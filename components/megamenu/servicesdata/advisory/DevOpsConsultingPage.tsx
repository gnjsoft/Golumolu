import React, { useEffect, useState } from 'react';
import { 
  Infinity, ArrowRight, Server, GitBranch, Terminal, ArrowLeft, Shield, Cloud, Activity, 
  Settings, Zap, CheckCircle, AlertTriangle, Clock, Users, Bug, Rocket, Wrench, LifeBuoy, 
  Cpu, ShieldCheck, ClipboardList, Map, Play, Headset, ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const DevOpsConsultingPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const painPoints = [
    { icon: AlertTriangle, text: "Differences in the configurations of development, testing and production environments." },
    { icon: Clock, text: "The slow manual process of providing new IT infrastructure." },
    { icon: Settings, text: "Time-consuming infrastructure modifications, software updates and bug fixing." },
    { icon: Users, text: "The lack of collaboration between teams resulting in slow delivery and low quality." },
    { icon: Bug, text: "Post-release errors affecting user or customer experience or business operations." },
    { icon: Activity, text: "A slow and inefficient testing process due to insufficient test automation." }
  ];

  const services = [
    {
      title: "End-to-end DevOps implementation consulting",
      icon: Rocket,
      desc: "Leverage connected and automated development, testing and deployment at any stage:",
      items: ["Infrastructure as Code (IaC)", "App module containerization", "CI/CD pipelines", "Test automation", "Automated application monitoring"]
    },
    {
      title: "DevOps launch consulting",
      icon: Play,
      desc: "Get your DevOps journey started on the right foot:",
      items: ["Strategic planning", "Detailed implementation roadmap", "Team upskilling", "Solution setup assistance"]
    },
    {
      title: "DevOps project recovery consulting",
      icon: LifeBuoy,
      desc: "Our experienced recovery team helps:",
      items: ["Fix collaboration problems", "Fill knowledge gaps", "Resolve technical CI/CD errors", "Optimize automated testing coverage"]
    },
    {
      title: "DevOps tech consulting",
      icon: Cpu,
      desc: "Optimize your toolchain:",
      items: ["Choosing and configuring the right tools", "Upskilling your team in DevOps techs"]
    },
    {
      title: "Managed DevOps services",
      icon: ShieldCheck,
      desc: "Comprehensive 24/7/365 monitoring, management, and continuous improvement:",
      items: ["IaC, CI/CD, orchestration (Docker, K8s)", "Cloud infrastructure management", "Continuous security", "Performance & incident management"]
    }
  ];

  const scenarioSteps = [
    {
      step: "STEP 1",
      title: "Plan",
      icon: ClipboardList,
      items: [
        "Analyze current software development cycle, IT resources, and infrastructure.",
        "Map business expectations, identify IT capabilities and constraints.",
        "Devise DevOps implementation strategy."
      ]
    },
    {
      step: "STEP 2",
      title: "Create roadmap",
      icon: Map,
      items: [
        "Design containerization approach (Kubernetes/Apache Mesos).",
        "Design CI/CD approach and configure tools (Jenkins, GoCD).",
        "Advise on test automation approach and CI/CD integration.",
        "Design integration of IaC tools (Ansible, Chef) with CI/CD.",
        "Design automated monitoring solution (Zabbix, Nagios).",
        "Locate DevOps-specific challenges and elaborate solutions."
      ]
    },
    {
      step: "STEP 3",
      title: "Execute",
      icon: Play,
      items: [
        "Upskill IT admins, managers, developers, and QA in DevOps tools.",
        "Introduce the Infrastructure as Code (IaC) approach.",
        "Assist in deployment and configuration of CI/CD and test automation."
      ]
    },
    {
      step: "STEP 4",
      title: "Support",
      icon: Headset,
      items: [
        "Mentor DevOps practitioners to achieve implementation objectives.",
        "Maintain operability of software infrastructure.",
        "Implement changes and ensure proper load distribution."
      ]
    }
  ];

  const challenges = [
    {
      challenge: "Resistance of employees to the DevOps implementation",
      solution: "GnJ Worldwide's DevOps consultants provide proper training for your development, QA, and operations specialists to improve teamwork and achieve full adoption of DevOps tools and processes."
    },
    {
      challenge: "Uncertainty about technologies to implement the DevOps initiative",
      solution: "Considering your implementation plan, our experts will help you choose an appropriate set of containerization, CI/CD, and infrastructure automation tools aligned with your team's needs, and configure them correctly."
    },
    {
      challenge: "Difficulty in adapting legacy applications to DevOps",
      solution: "We suggest opting for application modernization, including application re-hosting, reengineering, and recoding, to overcome difficulties with adapting your legacy applications to DevOps."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      {/* Hero */}
      <div className="bg-[#0f172a] text-white py-24 px-4 text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
        
        <div className={`relative z-10 transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Link to="/services/software-development" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Software Development
            </Link>
            <Infinity size={80} className="mx-auto text-blue-500 mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">DevOps Consulting</h1>
            <p className="text-2xl font-medium text-blue-400 mb-4">Transform Your IT Operations with DevOps</p>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Streamline your development pipeline, accelerate delivery, and ensure your infrastructure is optimized for performance, scalability, and security.
            </p>
        </div>
      </div>

      {/* Is It Time? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Is It Time to Turn to DevOps Consulting?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">DevOps consulting may be the answer if you feel concerned about:</p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <point.icon size={24} />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">DevOps Services by GnJ Worldwide</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">From consulting to managed services, our DevOps outsourcing services ensure your infrastructure is optimized.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <CheckCircle size={18} className="text-blue-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Scenario */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Sample End-To-End DevOps Implementation Scenario</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2"></div>

            <div className="space-y-12">
              {scenarioSteps.map((step, idx) => (
                <motion.div key={idx} {...fadeIn} className={`relative flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full border-4 border-white items-center justify-center z-10 text-white font-bold">
                    {idx + 1}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 p-4">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-full text-sm">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <h4 className="font-semibold text-slate-700 mb-4">What we do:</h4>
                      <ul className="space-y-3">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">DevOps-Specific Challenges You Can Face and We Can Solve</h2>
          </motion.div>

          <div className="space-y-8">
            {challenges.map((item, idx) => (
              <motion.div key={idx} {...fadeIn} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 bg-red-50/50 border-b md:border-b-0 md:border-r border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldAlert className="text-red-500" size={24} />
                    <h3 className="text-sm font-bold text-red-500 uppercase tracking-wider">Challenge {idx + 1}</h3>
                  </div>
                  <p className="text-xl font-bold text-slate-900">{item.challenge}</p>
                </div>
                <div className="md:w-1/2 p-8 bg-green-50/50">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-green-600" size={24} />
                    <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider">Solution</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Additional Services to Enhance DevOps Implementation</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">QA Consulting</h3>
              <p className="text-slate-600">To improve the overall software quality and introduce test automation on a high scale.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Software Consulting</h3>
              <p className="text-slate-600">To adapt existing development practices to the new DevOps approach.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Application Modernization</h3>
              <p className="text-slate-600">To adapt your legacy applications to DevOps.</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DevOpsConsultingPage;