import React, { useEffect } from 'react';
import { Smartphone, Tablet, Watch, ArrowRight, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileTechPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
          <Smartphone size={64} className="mx-auto text-blue-500 mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Mobile Technologies</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Swift for iOS. Kotlin for Android. Flutter for everything. We master the stack to put your business in customers' pockets.
              <br /><br />
              <strong>Empower Your Business with Innovative Mobile Solutions.</strong> At GNJ Worldwide, we specialize in crafting powerful, user-centric mobile applications that drive growth, engagement, and digital transformation. Whether you're a startup with a groundbreaking idea or an established business looking to expand your mobile presence, our team of expert developers and designers is here to bring your vision to life.
          </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12">
          {/* iOS Section */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-200 transition-colors"></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">iOS (Swift)</h2>
              <p className="text-slate-600 mb-6 text-lg">
                  Building premium experiences for the Apple ecosystem. Performance, security, and human interface design guidelines compliance.
              </p>
              <div className="flex gap-4">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">SwiftUI</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Combine</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">CoreML</span>
              </div>
          </div>

          {/* Android Section */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-green-200 transition-colors"></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Android (Kotlin)</h2>
              <p className="text-slate-600 mb-6 text-lg">
                  Creating apps that run on billions of devices. Modern Android development with Jetpack Compose and robust architecture.
              </p>
              <div className="flex gap-4">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Jetpack</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Coroutines</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Material 3</span>
              </div>
          </div>
      </div>

      <div className="text-center pb-24">
          <Link to="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center">
              Discuss Mobile Strategy <ArrowRight className="ml-2" />
          </Link>
      </div>
    </div>
  );
};

export default MobileTechPage;