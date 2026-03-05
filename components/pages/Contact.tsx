import React, { useState, useRef, useEffect } from 'react';
import {
    Phone,
    Mail,
    MessageCircle,
    MessageSquare,
    Info,
    FileText,
    Mic,
    Upload,
    ShieldCheck,
    ChevronDown,
    X,
    Paperclip,
    Send,
    MapPin
} from 'lucide-react';
import { CONTACT_DATA } from '../../data/ContactData';

const Contact: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [message, setMessage] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [showChat, setShowChat] = useState(false);
    
    // --- INTEGRATION STATE START ---
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // YAHAN APNA ZOHO FLOW WEBHOOK URL DALEIN
        const ZOHO_WEBHOOK_URL = "APKA_ZOHO_FLOW_URL_HERE";

        const payload = {
            ...formData,
            message: message,
            submittedAt: new Date().toISOString(),
            source: "Website Contact Form"
        };

        try {
            const response = await fetch(ZOHO_WEBHOOK_URL, {
                method: 'POST',
                mode: 'no-cors', // Zoho Flow ke liye aksar zaroori hota hai
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            alert("Message sent successfully to Mailchimp!");
            // Form reset karein
            setFormData({ fullName: '', company: '', email: '', phone: '' });
            setMessage('');
            setFiles([]);
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };
    // --- INTEGRATION STATE END ---

    const [chatMessages, setChatMessages] = useState<{sender: 'bot' | 'user', text: string}[]>([
        { sender: 'bot', text: 'Hello! How can we help you today?' }
    ]);
    const [chatInput, setChatInput] = useState('');
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const recognitionRef = useRef<any>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (showChat && chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatMessages, showChat]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition();
                recognitionRef.current.continuous = true;
                recognitionRef.current.interimResults = false;
                recognitionRef.current.lang = 'en-US';

                recognitionRef.current.onresult = (event: any) => {
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            const speech = event.results[i][0].transcript;
                            setMessage(prev => prev + (prev.length > 0 && !prev.endsWith(' ') ? ' ' : '') + speech);
                        }
                    }
                };

                recognitionRef.current.onend = () => {
                    if (!recognitionRef.current) return;
                    setIsListening(false);
                };

                recognitionRef.current.onerror = (event: any) => {
                    console.error("Speech recognition error", event.error);
                    setIsListening(false);
                };
            }
        }
    }, []);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }

        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        } else {
            try {
                recognitionRef.current.start();
                setIsListening(true);
            } catch (error) {
                console.error("Error starting speech recognition:", error);
                setIsListening(false);
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) {
            const newFiles = Array.from(e.dataTransfer.files);
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleChatSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatInput.trim()) return;
        
        setChatMessages(prev => [...prev, { sender: 'user', text: chatInput }]);
        setChatInput('');

        setTimeout(() => {
            setChatMessages(prev => [...prev, { sender: 'bot', text: "Thanks for reaching out! One of our agents will be with you shortly." }]);
        }, 1000);
    };

    return (
        <section className="bg-gradient-to-br from-sky-50 via-white to-sky-100 py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -left-[10%] top-[10%] w-[50%] h-[50%] bg-sky-200/20 rounded-full blur-3xl"></div>
                <div className="absolute -right-[10%] bottom-[0%] w-[50%] h-[60%] bg-blue-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">

                    {/* Left Side - Form */}
                    <div className="flex-1 p-8 lg:p-12 border-r border-slate-100">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Need a Consultation?</h2>
                                <p className="text-slate-500 mt-2 text-[15px]">Drop us a line! We are here to answer your questions 24/7.</p>
                            </div>
                            <div className="hidden sm:flex items-center gap-1 border border-green-200 bg-green-50 px-2 py-1 rounded shadow-sm opacity-90">
                                <div className="bg-green-500 text-white p-0.5 rounded-sm">
                                    <ShieldCheck size={14} />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[9px] font-bold text-slate-700 uppercase">Verified</span>
                                    <span className="text-[8px] text-slate-500 uppercase">& Secured</span>
                                </div>
                            </div>
                        </div>

                        {/* FORM UPDATED WITH ONSUBMIT */}
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="relative group">
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg p-4 h-32 resize-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm bg-gray-50/30"
                                    placeholder="How can we help you?"
                                ></textarea>
                                <button
                                    type="button"
                                    onClick={toggleListening}
                                    className={`absolute bottom-4 right-4 transition-all p-2 rounded-full ${isListening
                                            ? 'bg-red-500 text-white animate-pulse shadow-md'
                                            : 'text-blue-500 hover:text-blue-700 hover:bg-blue-50'
                                        }`}
                                    title={isListening ? "Stop listening" : "Start dictation"}
                                >
                                    <Mic size={20} />
                                </button>
                            </div>

                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={`border-2 border-dashed rounded-lg p-4 transition-colors duration-200 ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-transparent'
                                    }`}
                            >
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <Upload size={16} className="text-slate-400" />
                                    <span>
                                        Drag and drop or
                                        <button
                                            type="button"
                                            onClick={triggerFileInput}
                                            className="text-blue-600 hover:underline font-medium mx-1"
                                        >
                                            browse
                                        </button>
                                        to upload your file(s)
                                    </span>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                        multiple
                                    />
                                </div>

                                {files.length > 0 && (
                                    <div className="mt-3 space-y-2">
                                        {files.map((file, index) => (
                                            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-200 text-sm">
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <Paperclip size={14} className="text-slate-400 shrink-0" />
                                                    <span className="truncate text-slate-700 max-w-[200px]">{file.name}</span>
                                                </div>
                                                <button type="button" onClick={() => removeFile(index)} className="text-slate-400 hover:text-red-500">
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="Full name" 
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                />
                                <input 
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="Company" 
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    type="email" 
                                    placeholder="Work email" 
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                />
                                <div className="flex relative">
                                    <div className="bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg px-3 flex items-center gap-2">
                                        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto rounded-sm" />
                                        <ChevronDown size={12} className="text-slate-400" />
                                    </div>
                                    <span className="absolute left-[70px] top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium">+91</span>
                                    <input 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        type="tel" 
                                        placeholder="00000 00000" 
                                        className="w-full border border-gray-200 rounded-r-lg p-3 pl-12 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`${isSubmitting ? 'bg-gray-400' : 'bg-yellow-400 hover:bg-yellow-500'} text-slate-900 font-bold py-3 px-16 rounded-lg transition-all shadow-md text-[15px]`}
                                >
                                    {isSubmitting ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side - Sidebar (No changes needed here) */}
                    <div className="w-full lg:w-80 bg-blue-50/50 p-8 lg:p-10 flex flex-col gap-8 border-l border-slate-50">
                        {/* ... existing sidebar content ... */}
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-5">Get in touch instantly</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href={`tel:${CONTACT_DATA.phone.sales}`} className="flex items-center gap-3 text-[15px] text-slate-600 hover:text-blue-600 transition-colors group">
                                        <span className="w-7 h-7 rounded-full bg-[#007bff] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                            <Phone size={14} fill="currentColor" />
                                        </span>
                                        Call us
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${CONTACT_DATA.email.sales}`} className="flex items-center gap-3 text-[15px] text-slate-600 hover:text-blue-600 transition-colors group">
                                        <span className="w-7 h-7 rounded-full bg-[#007bff] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                            <Mail size={14} fill="currentColor" />
                                        </span>
                                        Email us
                                    </a>
                                </li>
                                <li>
                                    <button onClick={() => setShowChat(true)} className="flex items-center gap-3 text-[15px] text-slate-600 hover:text-blue-600 transition-colors group w-full text-left">
                                        <span className="w-7 h-7 rounded-full bg-[#007bff] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                            <MessageSquare size={14} fill="currentColor" />
                                        </span>
                                        Live chat
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* ... Live Chat Widget code ... */}
        </section>
    );
};

export default Contact;