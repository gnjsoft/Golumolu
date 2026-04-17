import React, { useEffect, useState } from 'react';
import {
    CreditCard, Globe, Lock, ArrowRight, Repeat, Check,
    Smartphone, Zap, ShieldCheck, Activity, BarChart3,
    Database, Cpu, Layers, Users, CheckCircle2,
    Wallet, Landmark, Shield, Layout,
    FileText, Clock, IndianRupee, Box, ShoppingCart,
    Briefcase, Search, Lightbulb, Fingerprint, Mic,
    QrCode, Nfc, Link as LinkIcon, RefreshCw, Target, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentManagementPage: React.FC = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setActive(true);
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
            {/* Hero Section */}
            <div className="relative py-32 px-4 overflow-hidden bg-teal-350 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-teal-950/50 to-teal-950"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <div className="inline-block p-3 rounded-full bg-teal-500/20 border border-teal-500/30 mb-6 backdrop-blur-sm">
                            <CreditCard size={40} className="text-teal-400" />
                        </div>
                    </div>
                    <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Payment Software Development Services
                    </h1>
                    <p className={`text-xl text-teal-100/80 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Engineered for automated processing, high performance, and unimpeded scalability. We ensure robust protection and compliance with PCI DSS, 3D Secure, GDPR, and more.
                    </p>
                    <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link to="/contact" className="bg-teal-500 text-white hover:bg-teal-400 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center group shadow-lg shadow-teal-500/20">
                            Build Your Payment Solution <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Client Segments Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Payment Solutions for Any Client Segment</h2>
                    <p className="text-slate-600">We cater to a wide range of organizations seeking to innovate their payment infrastructure.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        "Payment service providers", "Payment card providers", "Banks",
                        "Payment software product companies", "Paytech startups", "Digital transformation seekers"
                    ].map((segment, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center">
                            <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-3">
                                <Users size={20} />
                            </div>
                            <span className="text-sm font-bold text-slate-700 leading-tight">{segment}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Solutions Section */}
            <div className="bg-slate-100 py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-4">Payment Solutions GnJ Worldwide Delivers</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">From simple mobile apps to large-scale multi-party networks — we create all kinds of payment solutions.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Payment Processing Software",
                                icon: Cpu,
                                desc: "Automated capture and processing of online and POS transactions with instant transfer to global networks."
                            },
                            {
                                title: "Payment Applications",
                                icon: Smartphone,
                                desc: "Web or mobile apps for fast digital payments with extensive self-service and billing automation options."
                            },
                            {
                                title: "Money Transfer Applications",
                                icon: Repeat,
                                desc: "Secure domestic and cross-border P2P funds transfers with full-featured digital wallet functionality."
                            },
                            {
                                title: "Buy Now, Pay Later (BNPL)",
                                icon: Clock,
                                desc: "Loan management combined with consumer-facing features for convenient installment payments."
                            },
                            {
                                title: "Payment Gateways",
                                icon: Landmark,
                                desc: "Secure integration of payment functionality into customer-facing apps with robust encryption."
                            },
                            {
                                title: "Payment Orchestration",
                                icon: Layers,
                                desc: "Facilitating integration of multiple selling platforms with various PSPs and analytics-based routing."
                            },
                            {
                                title: "Payment Automation",
                                icon: Zap,
                                desc: "Eliminating manual tasks across document processing, execution, and reconciliation for enterprises."
                            },
                            {
                                title: "Fraud Detection Systems",
                                icon: ShieldCheck,
                                desc: "AI-powered analysis to spot fraud and prevent financial losses from malicious activities."
                            },
                            {
                                title: "Payment Analytics",
                                icon: BarChart3,
                                desc: "Forecasting payment behavior and performance with AI-powered spend optimization advice."
                            },
                            {
                                title: "Blockchain Payment Networks",
                                icon: Database,
                                desc: "Decentralized networks for cost-effective, near-instant domestic and cross-border payments."
                            }
                        ].map((solution, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-200 hover:border-teal-500 transition-all group">
                                <div className="bg-teal-50 p-3 rounded-2xl w-fit mb-6 group-hover:bg-teal-600 transition-colors">
                                    <solution.icon className="text-teal-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                        <h3 className="text-2xl font-bold mb-8 text-center">Supported Payment Methods</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Cards", desc: "Credit, debit, and virtual-only cards.", icon: CreditCard },
                                { title: "Wallets", desc: "Digital, mobile, and crypto wallets.", icon: Wallet },
                                { title: "Transfers", desc: "Bank, ACH, wire, and direct debit.", icon: Landmark },
                                { title: "Checks", desc: "E-checks and digitalized paper checks.", icon: FileText }
                            ].map((method, i) => (
                                <div key={i} className="flex gap-4">
                                    <method.icon className="w-6 h-6 text-teal-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{method.title}</h4>
                                        <p className="text-xs text-slate-500">{method.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* High Satisfaction Features */}
            <div className="py-24 max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4">Features to Drive High User Satisfaction</h2>
                    <p className="text-slate-600">We power payment solutions with advanced capabilities to enhance convenience and ROI.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Globe, title: "P2P Transfers", desc: "Domestic and international money transfers." },
                        { icon: IndianRupee, title: "Multi-currency", desc: "Including support for crypto payments." },
                        { icon: Activity, title: "AI Planning", desc: "AI-powered budget, savings, and payment planning." },
                        { icon: QrCode, title: "QR Payments", desc: "Online and offline QR-code-based payments." },
                        { icon: Nfc, title: "NFC Payments", desc: "NFC-enabled onsite mobile payments." },
                        { icon: LinkIcon, title: "Virtual Cards", desc: "Creating and managing virtual payment cards." },
                        { icon: Fingerprint, title: "Biometrics", desc: "Secure biometric authentication." },
                        { icon: Mic, title: "Voice & TTS", desc: "Voice commands and text-to-speech." },
                        { icon: Lightbulb, title: "Digital Assistants", desc: "Intelligent digital assistants for users." }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="bg-teal-50 p-3 rounded-xl">
                                <feature.icon className="w-6 h-6 text-teal-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">{feature.title}</h4>
                                <p className="text-xs text-slate-500">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Field of Expertise */}
            <div className="bg-teal-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-4">Our Field of Expertise</h2>
                        <p className="text-teal-200 max-w-2xl mx-auto">Full-cycle consulting and engineering services to deliver effective and secure payment solutions.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Development",
                                desc: "Promptly engineer, integrate, and perform QA for your tailored payment solution.",
                                icon: Settings
                            },
                            {
                                title: "Evolution",
                                desc: "Rearchitect, cloud migrate, or modernize legacy tech stacks and codebases.",
                                icon: RefreshCw
                            },
                            {
                                title: "Consulting",
                                desc: "Optimal feature sets, architecture, UX/UI, and tech stack recommendations.",
                                icon: Search
                            },
                            {
                                title: "Product Consulting",
                                desc: "Market analysis, niche definition, and interactive prototyping for feasibility.",
                                icon: Target
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/10 p-8 rounded-[2rem] border border-white/10 hover:border-teal-400 transition-all group">
                                <item.icon className="w-12 h-12 text-teal-400 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-teal-100/70 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <Link to="/contact" className="text-teal-400 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                    I'm interested <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Success Practices */}
            <div className="py-24 max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4">Our Practices to Lead Payment Initiatives to Success</h2>
                    <p className="text-slate-600">Value-driven approach to payment software engineering.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "Close & Transparent Collaboration",
                            desc: "Flexible communication, tailored KPIs, regular reporting, and continuous knowledge transfer.",
                            icon: Users
                        },
                        {
                            title: "Designing for Maximized Value",
                            desc: "Seamless performance, complete security, and excellent UX as the three pillars of winning software.",
                            icon: Layout
                        },
                        {
                            title: "Accurate Scoping & Estimates",
                            desc: "Project scoping around specific requirements for a smooth and predictable development flow.",
                            icon: Target
                        },
                        {
                            title: "Fast Development",
                            desc: "Mature Agile practices delivering an MVP in 2–5 months with 2–4-week iterations.",
                            icon: Zap
                        }
                    ].map((practice, i) => (
                        <div key={i} className="flex gap-6 p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100">
                            <div className="bg-teal-50 p-4 rounded-2xl h-fit">
                                <practice.icon className="text-teal-600 w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{practice.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{practice.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div className="py-24 max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-r from-teal-600 to-emerald-700 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to innovate your payments?</h2>
                        <p className="text-xl text-teal-100 mb-10 leading-relaxed">
                            Partner with GnJ Worldwide to build secure, scalable, and user-centric payment solutions that drive business growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-teal-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
                                Get a Free Consultation
                            </Link>
                            <Link to="/contact" className="bg-teal-800 text-white border border-teal-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-900 transition-all">
                                Schedule a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentManagementPage;
