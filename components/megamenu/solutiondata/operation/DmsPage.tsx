import React, { useEffect, useState } from 'react';
import { FileText, Folder, Search, Lock, Share2, ArrowRight, Archive } from 'lucide-react';
import { Link } from 'react-router-dom';

const DmsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center text-center">
          <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 mx-auto text-blue-600">
                  <Folder size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Document Management</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
                  Go paperless. Secure, searchable, and centralized repository for all your enterprise documents.
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
              {[
                  { icon: Search, title: "OCR & Indexing", desc: "Automatically extract text from scanned documents for full-text search." },
                  { icon: Lock, title: "Access Control", desc: "Granular permission settings to ensure sensitive data stays private." },
                  { icon: Archive, title: "Version Control", desc: "Track changes, restore previous versions, and maintain audit trails." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 transform ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${300 + (idx * 150)}ms` }}
                  >
                      <item.icon size={32} className="text-blue-500 mb-4 mx-auto" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>

          <div className={`mt-16 transition-opacity duration-1000 delay-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
              <Link to="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                  Digitize Your Files <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>
    </div>
  );
};

export default DmsPage;