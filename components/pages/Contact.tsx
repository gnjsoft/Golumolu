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
    
    // --- ZOHO CRM INTEGRATION START ---
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

    useEffect(() => {
        // Zoho Validation Scripts
        const script = document.createElement('script');
        script.id = 'zoho-validation-script';
        script.innerHTML = `
            function addAriaSelected1011574000000598028(event){
                var optionElem = event.target;
                var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
                if (previousSelectedOption) {
                    previousSelectedOption.removeAttribute('aria-selected');
                }
                optionElem.querySelectorAll('option') [optionElem.selectedIndex] .ariaSelected = 'true';
            }
            function validateEmail1011574000000598028(){
                var form = document.forms['WebToLeads1011574000000598028'];
                var emailFld = form.querySelectorAll('[ftype=email]');
                var i;
                for(i = 0; i < emailFld.length; i++ ) {
                    var emailVal = emailFld[i].value;
                    if ((emailVal.replace (/^\\s+|\\s+$/g,'') ) .length != 0) {
                        var atpos = emailVal.indexOf('@');
                        var dotpos = emailVal.lastIndexOf('.');
                        if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                            alert('Please enter a valid email address. ');
                            emailFld[i].focus();
                            return false;
                        }
                    }
                }
                return true;
            }
            window.checkMandatory1011574000000598028 = function(){
                var mndFileds = new Array('Company', 'Last Name');
                var fldLangVal = new Array('Company', 'Last Name');
                for (var i = 0; i < mndFileds.length; i++ ) {
                    var fieldObj = document.forms['WebToLeads1011574000000598028'] [mndFileds[i]];
                    if (fieldObj) {
                        if(((fieldObj.value) .replace (/^\\s+|\\s+$/g,'') ) .length == 0) {
                            alert(fldLangVal[i] + ' cannot be empty.');
                            fieldObj.focus();
                            return false;
                        } else if (fieldObj.nodeName == 'SELECT') {
                            if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                                alert(fldLangVal[i] + ' cannot be none.');
                                fieldObj.focus();
                                return false;
                            }
                        }
                    }
                }
                if (typeof window.trackVisitor1011574000000598028 === 'function') {
                    window.trackVisitor1011574000000598028();
                }
                if ( !validateEmail1011574000000598028 () ) {
                    return false;
                }
                return true;
            }
        `;
        document.body.appendChild(script);

        // SalesIQ Script
        const siqScript = document.createElement('script');
        siqScript.id = 'zsiqscript-init';
        siqScript.innerHTML = `
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
                widgetcode: 'siqaeb47d767d02bb566cd02fa5cf99f918a407495334bcd820371d94a53a377b07',
                values: {},
                ready: function(){}
            };
            var d = document;
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.id = 'zsiqscript';
            s.defer = true;
            s.src = 'https://salesiq.zoho.in/widget';
            var t = d.getElementsByTagName('script')[0];
            t.parentNode.insertBefore(s, t);
            
            window.trackVisitor1011574000000598028 = function(){
                try{
                    if ($zoho && $zoho.salesiq && $zoho.salesiq.visitor) {
                        var LDTuvidObj = document.forms['WebToLeads1011574000000598028'] ['LDTuvid'];
                        if (LDTuvidObj) {
                            LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
                        }
                        var name = "";
                        var firstnameObj = document.forms['WebToLeads1011574000000598028'] ['First Name'];
                        var lastnameObj = document.forms['WebToLeads1011574000000598028'] ['Last Name'];
                        if (firstnameObj) name += firstnameObj.value + ' ';
                        if (lastnameObj) name += lastnameObj.value;
                        $zoho.salesiq.visitor.name(name.trim());
                        
                        var emailObj = document.forms['WebToLeads1011574000000598028'] ['Email'];
                        if (emailObj) {
                            $zoho.salesiq.visitor.email(emailObj.value);
                        }
                    }
                } catch (e){}
            }
        `;
        document.body.appendChild(siqScript);

        return () => {
            const s1 = document.getElementById('zoho-validation-script');
            const s2 = document.getElementById('zsiqscript-init');
            const s3 = document.getElementById('zsiqscript');
            if (s1) document.body.removeChild(s1);
            if (s2) document.body.removeChild(s2);
            if (s3) s3.remove();
        };
    }, []);
    // --- ZOHO CRM INTEGRATION END ---

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

                        {/* ZOHO CRM WEB-TO-LEAD FORM */}
                        <form 
                            id="webform1011574000000598028" 
                            action="https://crm.zoho.in/crm/WebToLeadForm" 
                            name="WebToLeads1011574000000598028" 
                            method="POST" 
                            onSubmit={(e) => {
                                // @ts-ignore
                                if (window.checkMandatory1011574000000598028 && !window.checkMandatory1011574000000598028()) {
                                    e.preventDefault();
                                }
                            }}
                            acceptCharset="UTF-8"
                            className="space-y-5"
                        >
                            {/* Zoho Hidden Fields */}
                            <input type='text' style={{display:'none'}} name='xnQsjsdp' value='cf7bd36beb1c64f66a0e87f8b0a94e633b40afa27134038a564fb09208b3a7bc' readOnly />
                            <input type='hidden' name='zc_gad' id='zc_gad' value='' readOnly />
                            <input type='text' style={{display:'none'}} name='xmIwtLD' value='dd13540ab1764c72e3bc0858c8adca168b9dccac578da049ef1298fc2f17650162185b05bbc3582c153b1da91f5dbeee' readOnly />
                            <input type='text' style={{display:'none'}} name='actionType' value='TGVhZHM=' readOnly />
                            <input type='text' style={{display:'none'}} name='returnURL' value='null' readOnly />
                            <input type='text' style={{display:'none'}} id='ldeskuid' name='ldeskuid' />
                            <input type='text' style={{display:'none'}} id='LDTuvid' name='LDTuvid' />
                            <input type='text' style={{display: 'none'}} name='aG9uZXlwb3Q' value='' readOnly />

                            <div className="relative group">
                                <textarea
                                    id="Description"
                                    name="Description"
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
                                    name="First Name"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="First Name" 
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                />
                                <input 
                                    id="Last_Name"
                                    name="Last Name"
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
                                    name="Company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="Company *" 
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                />
                                <input 
                                    id="Email"
                                    name="Email"
                                    ftype="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="Work email" 
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    id="Mobile"
                                    name="Mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    type="tel" 
                                    placeholder="Mobile Number" 
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                />
                                <select 
                                    id="Industry"
                                    name="Industry"
                                    value={formData.industry}
                                    onChange={(e) => {
                                        handleInputChange(e);
                                        // @ts-ignore
                                        if (window.addAriaSelected1011574000000598028) window.addAriaSelected1011574000000598028(e);
                                    }}
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
                                    name="Street"
                                    value={formData.street}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="Street" 
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input 
                                        id="City"
                                        name="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        type="text" 
                                        placeholder="City" 
                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                    />
                                    <input 
                                        id="State"
                                        name="State"
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
                                        name="Zip Code"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        type="text" 
                                        placeholder="Zip Code" 
                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none bg-gray-50/30" 
                                    />
                                    <input 
                                        id="Country"
                                        name="Country"
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
                                    className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-16 rounded-lg transition-all shadow-md text-[15px]"
                                >
                                    Submit
                                </button>
                            </div>
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