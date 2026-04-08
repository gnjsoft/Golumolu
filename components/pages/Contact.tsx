import React, { useState, useRef, useEffect } from 'react';
import jsonp from 'jsonp';
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        mobile: '',
        description: '',
        industry: '-None-',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'description') setMessage(value);
    };

    const handleMailchimpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Replace this URL with your Mailchimp embedded form POST URL
        // Make sure to change '/post?' to '/post-json?'
        const MAILCHIMP_URL = 'https://gnjworldwide.us14.list-manage.com/subscribe/post?u=020b238a101ab45bba7fab536&amp;id=6f08c4fd21&amp;f_id=001b9be1f0" method="post" id="mc-embedded-subscribe-form';

        // Map your form data to Mailchimp merge tags
        // You may need to adjust these keys based on your Mailchimp audience settings
        const params = new URLSearchParams({
            EMAIL: formData.email,
            FNAME: formData.firstName,
            LNAME: formData.lastName,
            PHONE: formData.mobile,     // Matches *|PHONE|*
            COMPANY: formData.company,  // Matches *|COMPANY|*
            MMERGE5: formData.industry, // Matches *|MMERGE5|* (Industry)
            MMERGE7: formData.description, // Matches *|MMERGE7|* (Message)
            MMERGE3: `${formData.street}, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}`
            // ^ Since your Address (MMERGE3) is set as 'Text', we combine your address fields into one string.
        });

        const url = `${MAILCHIMP_URL}&${params.toString()}`;

        jsonp(url, { param: 'c' }, (err, data) => {
            setIsSubmitting(false);
            if (err) {
                console.error('Failed to send to Mailchimp:', err);
                setSubmitStatus('error');
            } else if (data.result !== 'success') {
                console.error('Mailchimp error:', data.msg);
                setSubmitStatus('error');
            } else {
                setSubmitStatus('success');
                setFormData({
                    firstName: '', lastName: '', company: '', email: '', mobile: '',
                    description: '', industry: '-None-', street: '', city: '', state: '', zipCode: '', country: ''
                });
                setMessage('');
            }
        });
    };

    const [chatMessages, setChatMessages] = useState<{ sender: 'bot' | 'user', text: string }[]>([
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
                            setMessage(prev => {
                                const newText = prev + (prev.length > 0 && !prev.endsWith(' ') ? ' ' : '') + speech;
                                setFormData(f => ({ ...f, description: newText }));
                                return newText;
                            });
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

                        {/* MAILCHIMP FORM */}
                        <form
                            onSubmit={handleMailchimpSubmit}
                            className="space-y-5"
                        >

                            <div className="relative group">
                                <textarea
                                    id="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    id="First_Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                />
                                <input
                                    id="Last_Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Last Name *"
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    id="Company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Company *"
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                />
                                <input
                                    id="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Work email"
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    id="Mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                />
                                <select
                                    id="Industry"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                >
                                    <option value="-None-">-Select Industry-</option>
                                    <option value="ASP (Application Service Provider)">ASP (Application Service Provider)</option>
                                    <option value="Data/Telecom OEM">Data/Telecom OEM</option>
                                    <option value="ERP (Enterprise Resource Planning)">ERP (Enterprise Resource Planning)</option>
                                    <option value="Government/Military">Government/Military</option>
                                    <option value="Large Enterprise">Large Enterprise</option>
                                    <option value="ManagementISV">ManagementISV</option>
                                    <option value="MSP (Management Service Provider)">MSP (Management Service Provider)</option>
                                    <option value="Network Equipment Enterprise">Network Equipment Enterprise</option>
                                    <option value="Non-management ISV">Non-management ISV</option>
                                    <option value="Optical Networking">Optical Networking</option>
                                    <option value="Service Provider">Service Provider</option>
                                    <option value="Small/Medium Enterprise">Small/Medium Enterprise</option>
                                    <option value="Storage Equipment">Storage Equipment</option>
                                    <option value="Storage Service Provider">Storage Service Provider</option>
                                    <option value="Systems Integrator">Systems Integrator</option>
                                    <option value="Wireless Industry">Wireless Industry</option>
                                    <option value="ERP">ERP</option>
                                    <option value="Management ISV">Management ISV</option>
                                </select>
                            </div>

                            {/* Address Fields - Grouped for cleaner look */}
                            <div className="space-y-4 pt-2 border-t border-slate-100 mt-4">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address Details (Optional)</p>
                                <input
                                    id="Street"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Street"
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        id="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="City"
                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                    />
                                    <input
                                        id="State"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="State"
                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        id="Zip_Code"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Zip Code"
                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                    />
                                    <input
                                        id="Country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Country"
                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center pt-6">
                                <button
                                    id="formsubmit"
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-16 rounded-lg transition-all shadow-md text-[15px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : submitStatus === 'success' ? (
                                        <>
                                            <ShieldCheck size={20} />
                                            Sent Successfully
                                        </>
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </div>
                            {submitStatus === 'error' && (
                                <p className="text-red-500 text-sm text-center mt-2">
                                    Failed to send message. Please try again later.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Right Side - Sidebar (No changes needed here) */}
                    <div className="w-full lg:w-80 bg-blue-50/50 p-8 lg:p-10 flex flex-col gap-10 border-l border-slate-50">
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

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Visit Us</h4>
                                    <p className="text-blue-600 text-sm mt-1 leading-relaxed">
                                        10th Floor, BKC Complex, Awfis, East Bandra, Mumbai, 400051 Maharashtra, India
                                    </p>
                                    <p className="text-slate-500 text-xs mt-1">Come say hello at our office</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Register Address</h4>
                                    <p className="text-blue-600 text-sm mt-1 leading-relaxed">
                                        32/147, Ramanand Nagar, Near Ram Mandir, Jalgaon, 425002 Maharashtra, India
                                    </p>
                                    <p className="text-slate-500 text-xs mt-1">Our Register Address</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Singapore Office</h4>
                                    <p className="text-blue-600 text-sm mt-1 leading-relaxed">
                                        Office no.: 36, 5 Temasek Boulevard, 17th Floor Singapore, Central Singapore 038985
                                    </p>
                                    <p className="text-slate-500 text-xs mt-1">Our Singapore Headquarters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ... Live Chat Widget code ... */}
        </section>
    );
};

export default Contact;