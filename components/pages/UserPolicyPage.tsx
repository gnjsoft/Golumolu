import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  UserCheck, 
  AlertTriangle, 
  Lock, 
  FileText, 
  Mail, 
  Globe, 
  Scale, 
  CheckCircle2, 
  UserX, 
  HelpCircle
} from 'lucide-react';
import { CONTACT_DATA } from '../../data/ContactData';

const UserPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const policySections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: EyeIcon,
      subtitle: 'Agreement to our terms and standards',
      content: 'By accessing or using www.gnjworldwide.com, users agree to use the website and services lawfully, responsibly, and in accordance with this User Policy. This document forms a legal agreement between you and GnJ Worldwide Private Limited, guiding safe, ethical interactions with our digital platforms.'
    },
    {
      id: 'eligibility',
      title: 'Eligibility',
      icon: Scale,
      subtitle: 'Who can access our platforms',
      content: 'Users must be legally capable of entering into a binding agreement and must provide accurate, complete, and updated information while using the website or services. If you are accepting these terms on behalf of an enterprise or organization, you represent that you have full legal authority to bind that entity to this User Policy.'
    },
    {
      id: 'responsibilities',
      title: 'User Responsibilities',
      icon: UserCheck,
      subtitle: 'Your legal and professional obligations',
      items: [
        'Provide true, complete, and updated information during registrations.',
        'Keep login credentials, sessions, and multi-factor authenticators secure.',
        'Use the website, documentation, and services only for lawful, professional purposes.',
        'Avoid misuse of our public platform, support portals, communication channels, or backend systems.'
      ]
    },
    {
      id: 'prohibited-activities',
      title: 'Prohibited Activities',
      icon: AlertTriangle,
      subtitle: 'Strictly forbidden actions and behaviors',
      items: [
        'Attempting unauthorized access to system databases, server assets, or user accounts.',
        'Uploading, transmitting, or distributing harmful code, malware, viruses, or deceptive content.',
        'Copying, scraping, reverse-engineering, crawling, or exploiting website source material without prior written consent.',
        'Impersonating any personnel, client, partner, or entity, or representing false affiliations.',
        'Violating intellectual property rights, data privacy laws, or strict corporate confidentiality agreements.'
      ]
    },
    {
      id: 'account-security',
      title: 'Account Security',
      icon: Lock,
      subtitle: 'Protecting your organizational credentials',
      content: 'Users are solely responsible for maintaining the confidentiality of their account credentials, active sessions, and access keys. You are fully accountable for all activities originating from your account. In case of suspected security anomalies, leaks, or unauthorized access, you must immediately report the incident to our security response team.'
    },
    {
      id: 'suspension-termination',
      title: 'Suspension / Termination',
      icon: UserX,
      subtitle: 'Standards for access removal and violations',
      content: 'GnJ Worldwide Private Limited reserves the absolute right to suspend, restrict, or completely terminate user accounts or access channels if a user violates any clause of this policy, provides fraudulent registration information, or is found engaging in suspicious, malicious, or unlawful activities.'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: FileText,
      subtitle: 'Ownership of brand assets and source code',
      content: 'All source code, design mockups, visual graphics, underlying services, user feedback interfaces, text materials, and trade brands published on this platform are owned by or exclusively licensed to GnJ Worldwide Private Limited. No digital asset, brand mark, or material may be reproduced, modified, or re-distributed without explicit, prior written authorization from our compliance board.'
    },
    {
      id: 'changes-contact',
      title: 'Changes and Contact',
      icon: Mail,
      subtitle: 'Policy updates and executive resolution',
      content: 'The Company reserves the right to review, update, or revise this User Policy at any point. Continued utilization of the platform after updates have been published signifies a formal, binding acceptance of the updated standards. For inquiries, general questions, or reporting policy violations, reach out directly via support@gnjworldwide.com.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-24">
      {/* Policy Page Hero Header Banner */}
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
              User Policy
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
              <span>Effective Date: March 1, 2026</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Last Updated: March 1, 2026</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Layout container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-12">
        <div className="space-y-10">
          {policySections.map((section, idx) => {
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

                      {section.items && (
                        <ul className="space-y-3.5 pt-2">
                          {section.items.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3 text-slate-600 text-[15px] leading-relaxed">
                              <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-1" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
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
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Need specific policy clarifications?</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-light">
                  Our corporate compliance and data governance team is ready to address your requirements. Write to us at anytime for formal explanations.
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

// Internal EyeIcon to resolve dynamic import cleanly
const EyeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default UserPolicyPage;
