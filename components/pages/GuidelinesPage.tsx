import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  BookOpen, 
  UserCheck, 
  AlertOctagon, 
  MessageSquare, 
  Lock, 
  ShieldAlert, 
  Gavel, 
  Mail, 
  Globe, 
  HelpCircle
} from 'lucide-react';
import { CONTACT_DATA } from '../../data/ContactData';

const GuidelinesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const guidelinesSections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: BookOpen,
      subtitle: 'Applicability of our digital usage framework',
      content: 'These formal Guidelines govern and apply to all users, visitors, enterprise partners, and clients who access www.gnjworldwide.com and any associated systems or technical resources provided by GnJ Worldwide Private Limited.'
    },
    {
      id: 'general-conduct',
      title: 'General Conduct',
      icon: UserCheck,
      subtitle: 'Professional, lawful, and responsible behavior',
      content: 'All users are expected to behave ethically and responsibly. When interacting with our websites, software portals, and team members, you agree to always act lawfully, show professional respect, and cooperate in maintaining a healthy environment for collaboration.'
    },
    {
      id: 'users-must-not',
      title: 'Prohibited Behaviors (Users Must Not)',
      icon: AlertOctagon,
      subtitle: 'Strict actions and restrictions strictly prohibited',
      content: 'To prevent abuse and maintain optimal service security, users are strictly forbidden from performing any of the following activities:\n\n• Submitting false, unlawful, abusive, threatening, or intentionally misleading information.\n• Uploading, distributing, or triggering malware, spywares, server-side viruses, or malicious exploits.\n• Attempting to hack, probe, or run penetration/vulnerability tests without express authorization.\n• Operating unauthorized automated web scraping bots, crawlers, or automation engines.\n• Disrupting website performance, service latency, data channels, or overall cloud infrastructure.\n• Impersonating other clients, vendors, team developers, or representing false corporate affiliations.'
    },
    {
      id: 'support-communication',
      title: 'Support and Communication',
      icon: MessageSquare,
      subtitle: 'Standards of communication with our desks',
      content: 'Our resolution agents work diligently to keep your services active. When communicating with support, onboarding, or technical desks, users must maintain professional language, cooperate fully with diagnostic instructions, and provide precise, current details regarding inquiries, billing issues, or technical service requests.'
    },
    {
      id: 'security',
      title: 'Security Responsibilities',
      icon: Lock,
      subtitle: 'Maintaining protection for login credentials',
      content: 'Account security requires collaborative diligence. Users hold full accountability for preserving the credentials of their specific user ids, sessions, and terminal configurations. Under any suspicion of unauthorized administrative access, credential loss, or session leaks, you must notify our operations response desk immediately.'
    },
    {
      id: 'enforcement',
      title: 'Enforcement Policy',
      icon: ShieldAlert,
      subtitle: 'Remedies, warnings, and limitations of access',
      content: 'Violating these Guidelines may force the company to take quick remedial measures. Depending on severity, the Company reserves the absolute right to:\n\n• Issue official warnings to user emails.\n• Restrict, limit, or completely suspend active portal access.\n• Cancel pending service requests, onboarding workflows, or order allocations.\n• Permanently delete or terminate associated accounts.\n• Report violations to legal authorities and pursue statutory civil or criminal actions.'
    },
    {
      id: 'governing-law-contact',
      title: 'Governing Law & Contact',
      icon: Gavel,
      subtitle: 'Regional jurisdiction and corporate reporting desk',
      content: 'These corporate guidelines shall be governed by, construed, and enforced in alignment with the laws of India. Any associated disputes shall fall exclusively under the jurisdiction of the courts located at Jalgaon, Maharashtra, India.\n\nTo report any compliance violations, report security concerns, or request clarifications, please contact support@gnjworldwide.com.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-24">
      {/* Guidelines Page Hero Header Banner */}
      <div className="relative bg-gradient-to-r from-[#002B49] via-[#004270] to-[#001D33] text-white py-20 overflow-hidden">
        {/* Dynamic decorative background elements */}
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Shield size={14} className="animate-pulse" /> Corporate Governance
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              Usage Guidelines
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg max-w-2xl leading-relaxed font-light"
            >
              GnJ Worldwide Private Limited
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-300 bg-white/5 backdrop-blur-md py-2 px-4 rounded-full border border-white/10"
            >
              <span className="flex items-center gap-1.5">
                <Globe size={12} className="text-yellow-400" /> Website: <a href="https://www.gnjworldwide.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors underline">www.gnjworldwide.com</a>
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Effective Date: June 1, 2026</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Last Updated: June 1, 2026</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Layout container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-12">
        <div className="space-y-10">
          {guidelinesSections.map((section, idx) => {
            const IconComp = section.icon;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/70 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Decorative inner background border elements */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600/10 group-hover:bg-blue-600 transition-colors duration-300"></div>
                  
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Floating circular icon container */}
                  <div className="w-14 h-14 bg-gradient-to-tr from-blue-50 to-indigo-50 border border-blue-100/50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <IconComp size={24} />
                  </div>

                  <div className="flex-grow space-y-4">
                    <div>
                      {/* Section Header */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-blue-500 bg-blue-50/50 px-2 py-0.5 rounded-md">
                          0{idx + 1}
                        </span>
                        <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                          {section.title}
                        </h2>
                      </div>
                      <p className="text-slate-400 text-sm mt-1 font-medium">{section.subtitle}</p>
                    </div>

                    {/* Content rendering logic */}
                    {section.content && (
                      <p className="text-slate-600 leading-relaxed text-[15px] whitespace-pre-line">
                        {section.content}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Bottom contact card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-[#002B49] to-[#004270] rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-yellow-400">
                <HelpCircle size={12} /> Legal Compliance Desk
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Need guidelines clarifications?</h3>
              <p className="text-slate-200 text-sm leading-relaxed font-light">
                Our team is here to support you in ensuring clear integration with safe usage practices. Let us know if you need any clarification.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={`mailto:${CONTACT_DATA.email.support}`}
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-[0.98] transition-all"
              >
                <Mail size={18} /> Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPage;
