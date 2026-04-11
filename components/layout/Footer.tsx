import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Zap,
  Globe
} from 'lucide-react';
import { CONTACT_DATA } from '../../data/ContactData';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002B49] text-white pt-16 pb-8 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 cursor-pointer">
               <img src="https://gnjsoft.com/images/logo.png" className="h-10 w-auto" alt="GnJ Worldwide Logo" />
               <span className="font-bold text-xl tracking-tight text-white">GnJ<span className="text-yellow-400">Worldwide</span></span>
            </Link>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">Company</h3>
            <ul className="space-y-3">
              {[
                  { name: 'About', href: '/about' }, 
                  { name: 'Services', href: '/services' }, 
                  { name: 'Industries', href: '/industries' }, 
                  { name: 'Careers', href: '/careers' }, 
                  { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Cyber Security', href: '/services/cybersecurity' },
                { name: 'IT Support', href: '/services/it-support' },
                { name: 'IT Infrastructure', href: '/services/infrastructure-services' },
                { name: 'Refurbished, Rental Solutions', href: '/hardware' },
                { name: 'Helpdesk Solutions', href: '/services/it-help-desk' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Other */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">Other</h3>
            <ul className="space-y-3">
              {[
                'Partnership', 
                'Awards and Recognitions', 
                'Insights', 
                'Blogs', 
                'Resource', 
                'Augmentation'
              ].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">Connect</h3>
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Sales Enquiry</p>
                <a href={`tel:${CONTACT_DATA.phone.sales}`} className="text-white hover:text-yellow-400 font-medium transition-colors">
                   {CONTACT_DATA.phone.displaySales}
                </a>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Sales Email</p>
                <a href={`mailto:${CONTACT_DATA.email.sales}`} className="text-white hover:text-yellow-400 font-medium transition-colors break-words">
                  {CONTACT_DATA.email.sales}
                </a>
              </div>

              <div>
               <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Support Email</p>
                <a href={`mailto:${CONTACT_DATA.email.support}`} className="text-white hover:text-yellow-400 font-medium transition-colors break-words">
                  {CONTACT_DATA.email.support}
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4">
                <a href={CONTACT_DATA.social.linkedin} className="bg-white/10 p-2 rounded-lg hover:bg-blue-600 transition-colors group">
                  <Linkedin size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href={CONTACT_DATA.social.facebook} className="bg-white/10 p-2 rounded-lg hover:bg-blue-600 transition-colors group">
                  <Facebook size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href={CONTACT_DATA.social.instagram} className="bg-white/10 p-2 rounded-lg hover:bg-pink-600 transition-colors group">
                  <Instagram size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Government Recognitions & Certifications */}
        <div className="border-t border-blue-900/50 pt-10 pb-10">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-95">
             {/* DPIIT Recognized */}
             <div className="bg-white p-3 rounded shadow-sm h-20 w-40 flex flex-col items-center justify-center border-l-4 border-blue-600 hover:scale-105 transition-transform duration-300">
                <span className="text-xl font-bold text-slate-800 leading-none">DPIIT</span>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">RECOGNIZED</span>
                <span className="text-[8px] text-slate-500 mt-0.5">Govt. of India</span>
             </div>

             {/* MSME Badge */}
             <div className="bg-white p-3 rounded shadow-sm h-20 w-40 flex flex-col items-center justify-center border-l-4 border-orange-500 hover:scale-105 transition-transform duration-300">
                <span className="text-2xl font-bold text-slate-800 leading-none">MSME</span>
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Registered</span>
                <span className="text-[8px] text-slate-500 mt-1">Govt. of India</span>
             </div>

             {/* ISO Certification */}
             <div className="bg-white p-3 rounded shadow-sm h-20 w-40 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                <div className="relative flex items-center justify-center w-10 h-10 border-2 border-[#002B49] rounded-full shrink-0">
                    <span className="text-[10px] font-bold text-[#002B49]">ISO</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-xs font-bold text-slate-900 leading-tight">9001:2015</span>
                   <span className="text-[8px] text-slate-500 uppercase font-medium">Certified</span>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 GNJ Worldwide | Designed by GNJ Worldwide </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['User Policy', 'Terms & Conditions', 'Product Policy', 'Refund Policy', 'Guidelines'].map((link) => (
              <Link key={link} to="/" className="hover:text-yellow-400 transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;