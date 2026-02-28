
import React, { useEffect } from 'react';
import { Camera, Eye, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CctvPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-800 text-white py-24 px-4 text-center">
          <Camera size={64} className="mx-auto mb-6 text-slate-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Surveillance Systems</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              High-definition IP cameras and NVR solutions for comprehensive premise security.
          </p>
          <Link to="/contact" className="bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-200 transition-colors inline-flex items-center">
              Get a Quote <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { title: "IP Cameras", desc: "4K resolution, night vision, and weather-proof cameras for any environment." },
              { title: "Smart Analytics", desc: "Motion detection, facial recognition, and license plate reading capabilities." },
              { title: "Remote Viewing", desc: "Access live feeds and recorded footage securely from your mobile device." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default CctvPage;
