import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  FileCheck, 
  Briefcase, 
  UserCheck, 
  CreditCard, 
  AlertOctagon, 
  Award, 
  ExternalLink, 
  Scale, 
  Gavel, 
  Mail, 
  Globe, 
  HelpCircle
} from 'lucide-react';
import { CONTACT_DATA } from '../../data/ContactData';

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const termsSections = [
    {
      id: 'acceptance',
      title: 'Acceptance',
      icon: FileCheck,
      subtitle: 'Agreement to our terms and conditions',
      content: 'By accessing or using www.gnjworldwide.com, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please stop accessing or using our websites and professional services.'
    },
    {
      id: 'services',
      title: 'Services',
      icon: Briefcase,
      subtitle: 'Scope of IT and cloud offerings',
      content: 'GnJ Worldwide Private Limited provides comprehensive software development, system architecture, IT infrastructure management, e-commerce deployments, and related professional consulting services.\n\nThe Company reserves the absolute right to modify, updates, enhance, or discontinue any aspect of our services without prior notice, unless otherwise agreed upon in a separate formal written contract.'
    },
    {
      id: 'accounts',
      title: 'Accounts',
      icon: UserCheck,
      subtitle: 'Credential management and registration requirements',
      content: 'Certain interactive elements or enterprise services may require user registration. When creating an account, you represent that all registration details are true, accurate, and current. You are entirely responsible for safeguard-ing your login identifiers and maintaining the confidentiality of your active session credentials.'
    },
    {
      id: 'orders-payments',
      title: 'Orders and Payments',
      icon: CreditCard,
      subtitle: 'Billing cycles, invoices, and service terms',
      content: 'All service purchase orders, subscriptions, or specialized work requests are subject to review and explicit approval by GnJ Worldwide Private Limited. Precise pricing matrices, localized taxes, and terms of payment are communicated formally on the website, within direct invoices, or through official business communications.\n\nFailure to make payments in a timely manner may automatically lead to immediate work delays, restriction of user portal access, service suspension, or complete contract cancellation.'
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use',
      icon: AlertOctagon,
      subtitle: 'Safe and standardized user conduct rules',
      content: 'Our systems must only be accessed for lawful compliance and valid business intents. Under no circumstances should users attempt to disrupt system performance, compromise network security, execute unauthorized database access protocols, or scrape, crawl, copy, or distribute materials belonging to the company.'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Award,
      subtitle: 'Copyrights, brand ownership, and designs',
      content: 'All content, source code modules, user interface structures, brand names, vector markups, software applications, visual templates, and logos published on this website are the exclusive intellectual property of GnJ Worldwide Private Limited or our authorized licensors.\n\nNo brand assets, copy-text, or media assets can be repurposed, modified, shared, or distributed without our clear prior written authorization.'
    },
    {
      id: 'third-party-services',
      title: 'Third-Party Services',
      icon: ExternalLink,
      subtitle: 'External links, integration points, and tools',
      content: 'For your convenience, our digital assets may link out to third-party providers, external APIs, software modules, or vendor tools. Please note that GnJ Worldwide Private Limited does not curate, govern, or hold accountability for external content, user privacy policies, or actions of third-party platforms.'
    },
    {
      id: 'disclaimer-liability',
      title: 'Disclaimer and Liability',
      icon: Scale,
      subtitle: 'Boundaries of technical and corporate liability',
      content: 'Our website portal and overall online services are provided on an "as is" and "as available" standard, without warranties of any kind. To the maximum extent permitted by applicable laws, GnJ Worldwide Private Limited shall not be liable for any indirect, incidental, or consequential losses, data damage, or business disruption.\n\nOur aggregate liability in relationship to any claim shall not exceed the actual financial fee paid to Us for the relevant service in question.'
    },
    {
      id: 'termination-governing-law',
      title: 'Termination / Governing Law',
      icon: Gavel,
      subtitle: 'Enforcement guidelines, legal structures, and jurisdiction',
      content: 'The Company holds absolute discretion to suspend, limit, or completely block website or service access in case of policy violations, harmful behavior, suspicious activity, account non-payment, or security breaches.\n\nThese general Terms & Conditions shall be governed by, construed, and enforced in accordance with the laws of India. Any legal action or dispute arising under these conditions shall fall exclusively under the jurisdiction of the courts located at Jalgaon, Maharashtra, India.'
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: Mail,
      subtitle: 'Inquiries, dispute resolutions, and general questions',
      content: 'If you have any specific legal questions, queries, or require clarifications regarding these terms, please write to our executive governance console directly at: support@gnjworldwide.com.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-24">
      {/* Terms Page Hero Header Banner */}
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
              Terms & Conditions
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
          {termsSections.map((section, idx) => {
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
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Need specific terms clarifications?</h3>
              <p className="text-slate-200 text-sm leading-relaxed font-light">
                Our corporate compliance and data governance team is ready to address your requirements. Write to us at any time for formal explanations.
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

export default TermsPage;
