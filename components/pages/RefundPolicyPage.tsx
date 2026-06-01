import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  XOctagon, 
  Slash, 
  Send, 
  RefreshCcw, 
  AlertTriangle, 
  Mail, 
  Globe, 
  HelpCircle
} from 'lucide-react';
import { CONTACT_DATA } from '../../data/ContactData';

const RefundPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const refundSections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Shield,
      subtitle: 'Basic framework for service settlements',
      content: 'GnJ Worldwide Private Limited operates under strict enterprise SLA parameters. Refunds are issued only in limited, pre-specified circumstances, fully governed by this consolidated Refund Policy.'
    },
    {
      id: 'refund-window',
      title: 'Refund Window',
      icon: Clock,
      subtitle: 'Official timeline thresholds for claim submission',
      content: 'Any support request, subscription dispute, or formal claim for refund must be explicitly submitted within 48 hours (2 days) from the original transaction timestamp, order confirmation, work product delivery, or digital service activation threshold.'
    },
    {
      id: 'eligible-cases',
      title: 'Eligible Refund Cases',
      icon: CheckCircle,
      subtitle: 'Scenarios qualified for financial reversal',
      content: 'Refunds or account adjustments may be thoroughly reviewed and considered only in the following certified circumstances:\n\n• Double or duplicate payments due to transaction link issues.\n• Erroneous billing amounts arising from verified platform or database bugs.\n• Service instances that remain completely unactivated due to verified failures on the Company side.\n• Formal service requests accepted by the team but unfulfilled due to capacity ceilings.'
    },
    {
      id: 'non-refundable-cases',
      title: 'Non-Refundable Cases',
      icon: XOctagon,
      subtitle: 'Excluded items and service conditions',
      content: 'Refunds are strictly unavailable and cannot be issued under any of the following conditions:\n\n• Bespoke software engineering, proprietary product customizations, or legacy setups.\n• Setup fees, technical diagnostics, support sessions, or initial integration retainers.\n• Digital subscription assets, APIs, or SaaS licenses already active or generated.\n• Project milestones completed, verified, or partially developed.\n• Licenses or server spaces custom-procured from third-party vendors on your behalf.\n• Delays, scope adjustments, or project changes caused by client-side decisions or requirements.'
    },
    {
      id: 'cancellation',
      title: 'Cancellation Rights',
      icon: Slash,
      subtitle: 'Pre-requisites for session or project stoppages',
      content: 'Formally requested cancellations submitted within the initial 48-hour window may be considered only if work has not officially commenced, and no preliminary access keys, workspace links, sandbox credentials, or deployment services have been provided to the customer.'
    },
    {
      id: 'request-process',
      title: 'Refund Request Process',
      icon: Send,
      subtitle: 'Formal steps to submit a verification request',
      content: 'To request an adjustment, email support@gnjworldwide.com with the following information:\n\n• Your registered name or legal business name\n• Active Order ID or Invoice Number\n• Certified Proof of Payment (bank confirmation / gateway slip)\n• Accurate representation of the reasons for the refund request\n• Any supporting logs, screenshots, or system errors to substantiate your claim'
    },
    {
      id: 'approval-processing',
      title: 'Approval and Processing',
      icon: RefreshCcw,
      subtitle: 'SLA windows for review and payouts',
      content: 'All refund requests undergo systematic internal evaluation and technical audit prior to confirmation. Once approved, the refund transaction will be executed back to the original funding source within 7 to 15 business days. Final processing speed depends entirely on payment gateway or banking network channels.'
    },
    {
      id: 'fraudulent-claims',
      title: 'Fraudulent Claims & Revisions',
      icon: AlertTriangle,
      subtitle: 'Action structures and policy adjustments',
      content: 'Abusive chargeback attempts, invalid claims, or fraudulent refund statements are serious violations of our corporate service rules. Engaging in such actions may lead to instant service termination, permanent account restrictions, and necessary legal actions.\n\nThe Company reserves the right to modernize or revise this Refund Policy at any point. Updated policies are enforced instantly upon publication on this page.'
    },
    {
      id: 'contact',
      title: 'Support and Questions',
      icon: Mail,
      subtitle: 'Reporting claims or administrative questions',
      content: 'For direct refund operations, account audits, or payment-related tracking, please communicate with our technical desk at: support@gnjworldwide.com.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-24">
      {/* Refund Policy Page Hero Header Banner */}
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
              Refund Policy
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
          {refundSections.map((section, idx) => {
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
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Need specific billing clarifications?</h3>
              <p className="text-slate-200 text-sm leading-relaxed font-light">
                Our corporate billing compliance and executive governance team is ready to address your requirements. Write to us at any time for formal explanations.
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

export default RefundPolicyPage;
