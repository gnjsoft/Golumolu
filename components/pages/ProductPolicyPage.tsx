import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Layers, 
  Info, 
  CheckSquare, 
  FileCheck, 
  Sliders, 
  RefreshCw, 
  UserPlus, 
  HelpCircle, 
  Mail, 
  Globe, 
  ShieldAlert
} from 'lucide-react';
import { CONTACT_DATA } from '../../data/ContactData';

const ProductPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productSections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Shield,
      subtitle: 'Applicability of our product services standards',
      content: 'This Product Policy governs all software licenses, containerized infrastructures, custom e-commerce applications, and enterprise IT services offered by GnJ Worldwide Private Limited through our flagship portal (www.gnjworldwide.com).'
    },
    {
      id: 'product-scope',
      title: 'Product Scope',
      icon: Layers,
      subtitle: 'Definition of technology solutions and support channels',
      content: 'Our product and services matrix includes core cloud-engineered software solutions, network management services, specialized IT infrastructure pipelines, digital e-commerce storefront deployments, and professional systems architecture consultants.'
    },
    {
      id: 'product-information',
      title: 'Product Information',
      icon: Info,
      subtitle: 'Accuracy of details, features, and pricing structures',
      content: 'The Company takes every commercial effort to keep details, capability listings, feature highlights, and pricing parameters updated and accurate. However, unexpected technical limits, platform updates, and feature revisions or discontinuations can happen without prior notification.'
    },
    {
      id: 'availability',
      title: 'Availability',
      icon: Sliders,
      subtitle: 'Offering distribution limits and feasibility checks',
      content: 'All products, service blocks, and implementation plans are subject to local availability, regional technical feasibility, and final validation by Our compliance team. The Company reserves the absolute right to refuse, restrict, or modify any current service package at our discretion.'
    },
    {
      id: 'order-confirmation',
      title: 'Order Confirmation',
      icon: FileCheck,
      subtitle: 'Commercial approval and legal parameters',
      content: 'A service request or specialized product setup is considered officially confirmed only after GnJ Worldwide Private Limited issues a formal confirmation email, collects the initial project retainer, and completes the execution of standard professional agreements.'
    },
    {
      id: 'usage-conditions',
      title: 'Usage Conditions',
      icon: CheckSquare,
      subtitle: 'Proper application of technological assets',
      content: 'Customers must use our custom codes, configurations, and application instances strictly for lawful, pre-authorized corporate operations. You may not copy, reverse engineer, extract underlying proprietary models, resell access, or bypass licensing walls without our explicit written validation.'
    },
    {
      id: 'support-updates',
      title: 'Support and Updates',
      icon: RefreshCw,
      subtitle: 'Maintenance schedules, upgrades, and patches',
      content: 'Operational support, SLA delivery, emergency patch configurations, and routine system upgrades depend directly on the specific purchase plan and corresponding master service agreement. The Company reserves the right to deploy maintenance patches, feature enhancements, or minor version upgrades at any time.'
    },
    {
      id: 'customer-responsibilities',
      title: 'Customer Responsibilities',
      icon: UserPlus,
      subtitle: 'Administrative assistance and data accuracy requirements',
      content: 'Customers agree to provide accurate, updated billing addresses, technical contact lists, and server access permissions whenever required. Safe implementation of products depends on your coordination during system integration and testing cycles.'
    },
    {
      id: 'refunds-liability',
      title: 'Refunds and Liability',
      icon: ShieldAlert,
      subtitle: 'Cancellations, refunds, and financial exposure limits',
      content: 'All order cancellations, subscription revisions, and refund requests are governed by our master Refund Policy and terms designated in the service agreements.\n\nTo the extent permitted by law, overall corporate liability linked to any specific digital product is strictly capped at the actual financial amount paid to Us for that target product or service.'
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: Mail,
      subtitle: 'Address inquiries directly to technical desks',
      content: 'For all queries regarding specifications, updates, support timelines, or policy compliance, reach out directly to our product support desk at: support@gnjworldwide.com.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-24">
      {/* Product Policy Page Hero Header Banner */}
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
              Product Policy
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
          {productSections.map((section, idx) => {
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
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Need specific product clarifications?</h3>
              <p className="text-slate-200 text-sm leading-relaxed font-light">
                Our corporate product management and compliance team is ready to address your requirements. Write to us at any time for formal explanations.
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

export default ProductPolicyPage;
