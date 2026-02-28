import React, { useEffect, useState } from 'react';
import { Blocks, Link as LinkIcon, ShieldCheck, Lock, FileKey, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlockchainPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-[#111827] text-white py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
              <Blocks size={64} className="mx-auto text-yellow-500 mb-6" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Blockchain Technology</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                  Decentralized, immutable, and transparent. We build enterprise-grade DApps, smart contracts, and private ledgers.
              </p>
              <Link to="/contact" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 px-8 rounded transition-all">
                  Build DApps
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: FileKey, title: "Smart Contracts", desc: "Self-executing contracts with the terms of the agreement directly written into code." },
                  { icon: ShieldCheck, title: "Supply Chain", desc: "Traceability and transparency for logistics and provenance tracking." },
                  { icon: LinkIcon, title: "DeFi Solutions", desc: "Decentralized finance platforms for lending, borrowing, and trading." },
                  { icon: Lock, title: "Identity Mgmt", desc: "Self-sovereign identity solutions giving users control over their data." },
                  { icon: Blocks, title: "NFT Marketplaces", desc: "Platforms for minting, buying, and selling unique digital assets." },
                  { icon: LinkIcon, title: "Tokenization", desc: "Digitizing real-world assets to improve liquidity and accessibility." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-700 mb-4">
                          <item.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default BlockchainPage;