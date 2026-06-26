import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Laptop,
    Search,
    Filter,
    Star,
    ShieldCheck,
    Truck,
    CheckCircle,
    FileText,
    X,
    Plus,
    Minus,
    Trash2,
    ChevronRight,
    Percent,
    Info,
    CornerDownRight,
    Maximize2,
    Mail,
    Globe,
    Cpu,
    Database,
    HardDrive,
    Tv,
    ArrowRight,
    Sparkles,
    Zap,
    Building,
    User,
    Phone
} from 'lucide-react';
import { CONTACT_DATA } from '../../../../data/ContactData';

// Product images generated dynamically
import dellLaptop from '../../../../src/assets/images/dell_latitude_laptop_1782465457461.jpg';
import thinkpadLaptop from '../../../../src/assets/images/thinkpad_business_laptop_1782465471798.jpg';
import hpLaptop from '../../../../src/assets/images/hp_elitebook_laptop_1782465486891.jpg';
import appleLaptop from '../../../../src/assets/images/macbook_pro_laptop_1782465505513.jpg';
import asusLaptop from '../../../../src/assets/images/asus_creator_laptop_1782465539560.jpg';

const getLaptopImage = (brand: string) => {
    switch (brand) {
        case 'Dell':
            return dellLaptop;
        case 'Lenovo':
            return thinkpadLaptop;
        case 'HP':
            return hpLaptop;
        case 'Apple':
            return appleLaptop;
        case 'ASUS':
            return asusLaptop;
        default:
            return dellLaptop;
    }
};

// Laptop Product Interface
interface LaptopProduct {
    id: string;
    name: string;
    brand: 'Dell' | 'HP' | 'Lenovo' | 'Apple' | 'ASUS';
    processor: 'Intel Core i3' | 'Intel Core i5' | 'Intel Core i7' | 'Intel Core i9' | 'Intel Core Ultra 5' | 'Intel Core Ultra 7' | 'Intel Core Ultra 9';
    ram: '8GB' | '16GB' | '32GB' | '64GB';
    storage: '256GB SSD' | '512GB SSD' | '1TB SSD' | '2TB SSD';
    graphics: string;
    display: string;
    os: string;
    originalPrice: number;
    corporatePrice: number;
    rating: number;
    reviewsCount: number;
    badge?: 'Bestseller' | 'Corporate Choice' | 'Premium Choice';
    tags: string[];
    overview: string;
    techSpecsText: string;
    warrantyText: string;
    imageBg: string; // CSS color theme for placeholders
    accentColor: string; // Tailwind tint
}

// 7 Realistic Premium Laptops
const LAPTOP_PRODUCTS: LaptopProduct[] = [
    {
        id: 'dell-latitude-3440',
        name: 'Dell Latitude 3440 Business Laptop',
        brand: 'Dell',
        processor: 'Intel Core Ultra 5',
        ram: '8GB',
        storage: '256GB SSD',
        graphics: 'Intel® Graphics Engine',
        display: '14.0" FHD IPS Energy Star (250 nits)',
        os: 'Windows 11 Pro Enterprise Ready',
        originalPrice: 1199,
        corporatePrice: 899,
        rating: 4.6,
        reviewsCount: 88,
        badge: 'Corporate Choice',
        tags: ['8GB RAM', '256GB SSD', 'Intel Core Ultra 5'],
        overview: 'An excellent robust computer designed for everyday corporate operations, customer service teams, and administrative professionals. Engineered with an Intel Core Ultra 5 processor, a highly durable spill-resistant keyboard, 1-day battery charge, and exceptional thermal handling.',
        techSpecsText: '• CPU: Intel® Core™ Ultra 5 125U (12 Cores, 14 Threads, up to 4.3 GHz)\n• RAM Memory: 8GB DDR5 5600MHz high-efficiency RAM\n• Storage: 256GB M.2 PCIe NVMe Solid State Drive\n• Integrated Security: Windows Hello compatibility, Fingerprint sensor, and camera privacy shutter\n• Ports: 1x Thunderbolt 4 / USB4, 2x USB 3.2 Gen 1, 1x HDMI 2.1, 1x RJ45 Ethernet, audio jack',
        warrantyText: 'Standard Graceful 1-Year GNJ Business-Class Mail-in Protection. Quick triage lines, hardware test services, and standard components replacement plans.',
        imageBg: 'from-[#002B49] via-blue-900 to-slate-800',
        accentColor: 'blue'
    },
    {
        id: 'dell-xps-15',
        name: 'Dell XPS 15 Enterprise Edition',
        brand: 'Dell',
        processor: 'Intel Core i7',
        ram: '32GB',
        storage: '1TB SSD',
        graphics: 'NVIDIA® GeForce® RTX 4060 8GB GDDR6',
        display: '15.6" OLED 3.5K InfiniteEdge Touch (400 nits)',
        os: 'Windows 11 Pro Licensing Pre-installed',
        originalPrice: 2249,
        corporatePrice: 1899,
        rating: 4.8,
        reviewsCount: 142,
        badge: 'Premium Choice',
        tags: ['CNC Aluminum', 'vPro Enabled', 'UHD Display'],
        overview: 'The ultimate premium productivity hardware for high-demand business administration. Crafted with CNC machined aerospace-grade aluminum, sleek carbon fiber components, and a spectacular 16:10 aspect ratio OLED tactile display. Engineered specifically for corporate executives, lead compilers, and professionals who require mobility without sacrificing power.',
        techSpecsText: '• CPU: Intel® Core™ i7-13700H (14 Cores / 20 Threads, Smart Cache 24MB, turbo up to 5.0 GHz)\n• RAM: 32GB Dual Channel DDR5 at 4800MHz (Upgradable slots)\n• Storage: 1TB PCIe NVMe Gen4 M.2 SSD Solid State\n• Thermals: Dual fan layout with massive heat dissipation vapor pipes\n• Security: Integrated infra-red face unlock camera & Windows Hello matching sensor\n• Video-Out: ThunderBolt™ 4 ports with Power Delivery and DisplayPort capabilities',
        warrantyText: 'Premium 1-Year Official On-site Enterprise Protection Agreement. Guaranteed next-business-day response from licensed technical staff. Coverage includes global hardware parts warranty, active diagnostic remote tools, and standard battery health assurance plans.',
        imageBg: 'from-blue-600 via-indigo-700 to-slate-900',
        accentColor: 'blue'
    },
    {
        id: 'thinkpad-x1-carbon',
        name: 'Lenovo ThinkPad X1 Carbon Gen 11',
        brand: 'Lenovo',
        processor: 'Intel Core i7',
        ram: '16GB',
        storage: '512GB SSD',
        graphics: 'Intel® Iris® Xe Graphics Engine',
        display: '14.0" WUXGA IPS Low Blue Light (400 nits)',
        os: 'Windows 11 Professional Enterprise vPro Ready',
        originalPrice: 1999,
        corporatePrice: 1599,
        rating: 4.9,
        reviewsCount: 284,
        badge: 'Bestseller',
        tags: ['MIL-STD 810H', 'Liquid Spill Keyboard', 'Lightweight Carbon'],
        overview: 'The gold standard of executive laptop technology. Constructed from premium aerospace carbon fiber weaves, weighing under 1.1kg while meeting 12 military-grade resilience specifications. Features the iconic spill-resistant responsive mechanical keyboard, secure dTPM 2.0 encryption architecture, and extensive fast connectivity suites.',
        techSpecsText: '• CPU: Intel® Core™ i7-1365U vPro Enterprise Platform (10 Cores, 12 Threads, up to 5.2 GHz)\n• Memory: 16GB Ultra-Efficient LPDDR5x 6400MHz dual-channel onboard\n• Disk: 512GB PCIe Gen4 NVMe Performance M.2 Solid State Drive\n• Cellular option: Built-in 4G LTE/5G ready multi-band antenna suite\n• Webcam: FHD 1080p Lens with physical Privacy Shutter system\n• Structural build: Carbon Fiber Hybrid construction casing with anti-smudge coating',
        warrantyText: 'Lenovo Premier Support Upgrade Contract included for 1 Year. Dedicated support representative line 24/7. Part replacement on-site within next business day. Covers accidental damage defense and dedicated expert systems analysts.',
        imageBg: 'from-slate-800 via-slate-900 to-neutral-950',
        accentColor: 'slate'
    },
    {
        id: 'hp-elitebook-860',
        name: 'HP EliteBook 860 G10 Enterprise',
        brand: 'HP',
        processor: 'Intel Core i7',
        ram: '32GB',
        storage: '1TB SSD',
        graphics: 'Intel® Iris® Xe Professional Graphics',
        display: '16" WUXGA Anti-Glare HP Sure View Privacy Glass',
        os: 'Windows 11 Pro with HP Wolf Pro Security Suite',
        originalPrice: 1799,
        corporatePrice: 1449,
        rating: 4.7,
        reviewsCount: 119,
        badge: 'Corporate Choice',
        tags: ['Wolf Security', 'HP Sure View', 'Collaboration Suite'],
        overview: 'Designed for enterprise collaboration, hybrid work schedules, and executive efficiency. Boasts a spacious 16-inch workspace with integrated electronic privacy filter, auto-framing dual cameras with contextual lighting correction, and premium Bang & Olufsen sound architectures with localized sound filtering policies.',
        techSpecsText: '• CPU: Intel® Core™ i7-1355U (10 Cores, 12 Threads, 12MB Cache, up to 5.0 GHz Booster)\n• Solid State Storage: 1TB PCIe NVMe OPAL2 Self-Encrypting Solid State Drive\n• Core RAM: 32GB Dual Channel DDR5 at 5200MHz RAM (Removable and upgradable)\n• Collaboration: HP 5MP Camera with AI Auto-Tracking + integrated dual-array audio\n• Visual Protection: HP Sure View privacy window block prevents screen-peeking via keystroke\n• Enterprise Security: Wolf Pro Security active firmware shielding & BIOS Protection',
        warrantyText: 'HP Elite Service Suite Agreement standard with 12 Months duration. Includes pickup and return services on-site if required. Software-level active diagnosis and express hardware replacement lines covered without additional fees.',
        imageBg: 'from-zinc-600 via-stone-700 to-slate-900',
        accentColor: 'zinc'
    },
    {
        id: 'macbook-pro-16',
        name: 'Apple MacBook Pro 16" Ultra Workstation',
        brand: 'Apple',
        processor: 'Intel Core Ultra 9',
        ram: '32GB',
        storage: '1TB SSD',
        graphics: 'Intel® Arc™ Graphic Pro Max Core',
        display: '16.2" Mini-LED Liquid Retina XDR (120Hz ProMotion)',
        os: 'macOS Sonoma Enterprise Integration Suite',
        originalPrice: 3499,
        corporatePrice: 3199,
        rating: 4.95,
        reviewsCount: 310,
        badge: 'Premium Choice',
        tags: ['Intel Core Ultra 9', 'XDR Display', '22h Battery'],
        overview: 'An absolute masterpiece of developer and engineer performance. Custom equipped with an Intel Core Ultra 9 processor running on highly optimized corporate containers. Enjoy unprecedented computational benchmarks, stunning XDR panel dynamics, and an unbeatable mobile execution span.',
        techSpecsText: '• Processor architecture: Intel® Core™ Ultra 9 185H (16 Cores: 6 Performance + 8 Efficient + 2 Low Power, up to 5.1 GHz)\n• Unified RAM: 32GB Fast Unified Memory LPDDR5x\n• Host Storage: 1TB Proprietary high-bandwidth Solid State SSD\n• Liquid Display: 16.2-inch XDR Liquid Retina (3024 x 1964, up to 1600 nits HDR Peak, 1000 nits SDR)\n• Interface Ports: HDMI 2.1, SDXC card, MagSafe 3 safe port, 3x USB-C Thunderbolt 4 ports\n• System Audio: Hi-Fi 6-speaker spatial system with force-cancelling dual woofers',
        warrantyText: '1-Year Enterprise AppleCare+ for Business Integration. Custom priority dispatch with immediate on-location assistance pathways. Full support for corporate remote configuration suites like Jamf Pro or Apple Business Manager.',
        imageBg: 'from-zinc-900 via-neutral-900 to-zinc-950',
        accentColor: 'amber'
    },
    {
        id: 'asus-creator-pro',
        name: 'ASUS ProArt Creator Pro 16',
        brand: 'ASUS',
        processor: 'Intel Core Ultra 9',
        ram: '64GB',
        storage: '2TB SSD',
        graphics: 'NVIDIA® GeForce® RTX™ 4080 12GB GDDR6',
        display: '16.0" 120Hz OLED 4K (DCI-P3 100%) Pantoned',
        os: 'Windows 11 Pro Workstation Tuning Edition',
        originalPrice: 2999,
        corporatePrice: 2649,
        rating: 4.85,
        reviewsCount: 76,
        badge: 'Premium Choice',
        tags: ['64GB RAM', 'RTX 4080', 'ISV Certified'],
        overview: 'High-end workstation laptop for graphic architects, deep machine learning developers, and 3D modeling pipelines. Loaded with a whopping 64GB DDR5 memory, high-core-count Intel Core Ultra 9 chipset, and robust ISV certifications ensuring maximum compatibility with professional CAD, simulation, and render tools.',
        techSpecsText: '• Chipset: Intel® Core™ Ultra 9 185H (16 Cores, 22 Threads, up to 5.1 GHz)\n• GPU architecture: NVIDIA® GeForce® RTX™ 4080 12GB Laptop GPU (Full TGP 130W)\n• Dynamic memory: 64GB DDR5 Dual Channel RAM (Fully upgradable to 96GB capacity)\n• Premium Storage: 2TB PCIe Gen4 Performance NVMe Solid State Disk (Dual slot SSD M.2)\n• Screen Panel: 16-inch 3.5K OLED (3200 x 2000), 120Hz response, PANTONE® Certified studio display\n• Custom interface: ASUS Dial integrated rotary control for direct app parameters tuning',
        warrantyText: '1-Year ASUS Commercial Support contract with expedited business support lines. Immediate technical replacements, fast carrier collection services, and direct access to specialized commercial server-hardware technicians.',
        imageBg: 'from-purple-900 via-indigo-950 to-neutral-950',
        accentColor: 'indigo'
    },
    {
        id: 'thinkpad-p16-workstation',
        name: 'Lenovo ThinkPad P16 Gen 2 Workstation',
        brand: 'Lenovo',
        processor: 'Intel Core i9',
        ram: '64GB',
        storage: '2TB SSD',
        graphics: 'NVIDIA RTX™ 3500 Ada Generation Professional',
        display: '16" WQUXGA HDR IPS (800 nits, Calibrated)',
        os: 'Windows 11 Pro for Workstations Edition',
        originalPrice: 3899,
        corporatePrice: 3499,
        rating: 4.9,
        reviewsCount: 54,
        badge: 'Corporate Choice',
        tags: ['ECC Memory', 'vPro Core i9', 'ISV Workstation'],
        overview: 'A military-grade powerhouse workstation, engineered to serve as a mobile datacenter. Custom adapted for engineering simulations, localized neural network testing, financial risk modeling, and complex scientific computation. Features professional ECC memory support and military-vetted chassis build.',
        techSpecsText: '• Heavy-duty Processor: Intel® Core™ i9-13980HX Enterprise vPro (24 Cores, 32 Threads, 36MB Cache, to 5.6 GHz)\n• Professional GPU: NVIDIA RTX™ 3500 Ada Professional Workstation Generation 12GB GDDR6\n• ECC RAM: 64GB DDR5 Server-Grade ECC High Integrity Memory (4x SO-DIMM slots up to 192GB)\n• Storage Engine: 2TB PCIe Gen4 Performance NVMe RAID-Configurable M.2 Storage\n• Panel specs: 16.0-inch 16:10 WQUXGA (3840 x 2400) IPS, Dolby Vision, HDR 400, X-Rite factory calibrator\n• Robust Build: Magnesium-aluminum alloy reinforced protection roll cage chassis with high-flow cooling',
        warrantyText: 'Lenovo Commercial Standard 3-Year On-site On-demand SLA Protection suite. Instant priority parts, server technical advisors hotline, battery hardware upgrade warranty for high duty cycles included.',
        imageBg: 'from-blue-950 via-slate-900 to-indigo-950',
        accentColor: 'blue'
    }
];

const LaptopsPage: React.FC = () => {
    // Navigation & Page Init
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter States
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrand, setSelectedBrand] = useState<string>('All');
    const [selectedProcessor, setSelectedProcessor] = useState<string>('All');
    const [selectedRam, setSelectedRam] = useState<string>('All');
    const [maxPrice, setMaxPrice] = useState<number>(4000);

    // Quote Cart State (Special B2B Feature)
    const [quoteCart, setQuoteCart] = useState<Array<{ product: LaptopProduct; qty: number }>>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Active Detail Modal State
    const [activeProduct, setActiveProduct] = useState<LaptopProduct | null>(null);
    const [activeProductTab, setActiveProductTab] = useState<'overview' | 'techspecs' | 'warranty'>('overview');
    const [activeThumbnailIndex, setActiveThumbnailIndex] = useState<number>(0);

    // Bulky Quote Request Form Modal
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
    const [quoteFormTargetProduct, setQuoteFormTargetProduct] = useState<LaptopProduct | null>(null);

    // Form Field States
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formCompany, setFormCompany] = useState('');
    const [formQty, setFormQty] = useState('10'); // Default corporate bulk qty
    const [formNotes, setFormNotes] = useState('');
    const [formSuccessMessage, setFormSuccessMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Filter List Parameters
    const brands = ['All', 'Dell', 'HP', 'Lenovo', 'Apple', 'ASUS'];
    const processors = [
        'All',
        'Intel Core i3',
        'Intel Core i5',
        'Intel Core i7',
        'Intel Core i9',
        'Intel Core Ultra 5',
        'Intel Core Ultra 7',
        'Intel Core Ultra 9'
    ];
    const rams = ['All', '8GB', '16GB', '32GB', '64GB'];

    // Filter logic
    const filteredProducts = useMemo(() => {
        return LAPTOP_PRODUCTS.filter(item => {
            const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.processor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchBrand = selectedBrand === 'All' || item.brand === selectedBrand;
            const matchProcessor = selectedProcessor === 'All' || item.processor === selectedProcessor;
            const matchRam = selectedRam === 'All' || item.ram === selectedRam;
            const matchPrice = item.corporatePrice <= maxPrice;

            return matchSearch && matchBrand && matchProcessor && matchRam && matchPrice;
        });
    }, [searchQuery, selectedBrand, selectedProcessor, selectedRam, maxPrice]);

    // Quote Cart Mechanics
    const addToQuoteCart = (product: LaptopProduct) => {
        setQuoteCart(prev => {
            const existing = prev.find(item => item.product.id === product.id);
            if (existing) {
                return prev.map(item => item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item);
            }
            return [...prev, { product, qty: 1 }];
        });
        // Trigger localized notification / open cart sidebar briefly to indicate success
        setIsCartOpen(true);
    };

    const updateCartQty = (productId: string, delta: number) => {
        setQuoteCart(prev => {
            return prev.map(item => {
                if (item.product.id === productId) {
                    const newQty = item.qty + delta;
                    return newQty > 0 ? { ...item, qty: newQty } : item;
                }
                return item;
            }).filter(item => item.qty > 0);
        });
    };

    const removeFromCart = (productId: string) => {
        setQuoteCart(prev => prev.filter(item => item.product.id !== productId));
    };

    const cartTotalQuoteValue = useMemo(() => {
        return quoteCart.reduce((acc, item) => acc + (item.product.corporatePrice * item.qty), 0);
    }, [quoteCart]);

    // Trigger Bulk Quote for items
    const openBulkQuoteForm = (product: LaptopProduct | null = null) => {
        setQuoteFormTargetProduct(product);
        if (product) {
            setFormNotes(`Requesting enterprise quote for model: ${product.name}. Required configurations standard.`);
        } else if (quoteCart.length > 0) {
            const itemsList = quoteCart.map(c => `${c.product.name} (Qty: ${c.qty})`).join(', ');
            setFormNotes(`Comprehensive Quote for multiple hardware models: ${itemsList}.`);
            setFormQty(quoteCart.reduce((acc, item) => acc + item.qty, 0).toString());
        } else {
            setFormNotes('');
        }
        setFormSuccessMessage(null);
        setErrors({});
        setIsQuoteFormOpen(true);
    };

    // Submit quote handler
    const handleQuoteSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!formName.trim()) newErrors.name = 'Full name is required';
        if (!formEmail.trim() || !formEmail.includes('@')) newErrors.email = 'Corporate verification email is required';
        if (!formPhone.trim()) newErrors.phone = 'Contact number is required';
        if (!formCompany.trim()) newErrors.company = 'Company name is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Success response setup
        const randId = Math.floor(100000 + Math.random() * 900000);
        setFormSuccessMessage(`CONFIRMED - QUOTE-ID: GNJ-RFQ-26-${randId}`);

        // Clear state
        setFormName('');
        setFormEmail('');
        setFormPhone('');
        setFormCompany('');
        setFormQty('10');
        // Clear cart if submitting standard cart quote
        if (!quoteFormTargetProduct) {
            setQuoteCart([]);
        }
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-sans text-slate-800 pb-20 relative antialiased">

            {/* 1. HERO HEADER AREA with deep brand values */}
            <div className="relative bg-gradient-to-r from-[#002B49] via-[#003C66] to-[#001D33] text-white py-16 px-4 md:px-8 border-b border-white/5 overflow-hidden">
                {/* Glow vector elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 pt-6">
                    <div className="max-w-3xl space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider">
                            <Zap size={14} className="animate-pulse" /> Enterprise Hardware Operations
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none text-white">
                            Business Laptop <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Corporate Catalog</span>
                        </h1>
                        <p className="text-slate-300 text-lg font-light max-w-xl md:mx-auto lg:mx-0">
                            Procure certified enterprise ultrabooks, computational notebooks, and heavy-duty workstations designed for the seamless performance of your workforce.
                        </p>

                        {/* Quick corporate trust lines */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-slate-300 pt-2">
                            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-amber-400" /> Active 12-Month Support SLAs</span>
                            <span className="flex items-center gap-2"><Truck size={16} className="text-amber-400" /> Free Shipping On Bulk Orders</span>
                            <span className="flex items-center gap-2"><Sparkles size={16} className="text-amber-400" /> Custom System Images Built</span>
                        </div>
                    </div>

                    {/* Quick Stats & Cart Indicator Box */}
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-sm w-full text-center lg:text-left space-y-6 shrink-0 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-white text-md uppercase tracking-wider">B2B Procurement</h3>
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                        </div>

                        <div className="space-y-3">
                            <div className="text-sm text-slate-300">Quote Basket Items</div>
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-extrabold text-amber-400">{quoteCart.reduce((sum, item) => sum + item.qty, 0)}</div>
                                <div className="text-xs text-slate-300 leading-tight">Laptops loaded in pending RFQ file</div>
                            </div>
                        </div>

                        {quoteCart.length > 0 ? (
                            <div className="space-y-4">
                                <button
                                    id="btn-trigger-cart-sidebar"
                                    onClick={() => setIsCartOpen(true)}
                                    className="w-full bg-white/10 hover:bg-white/20 transition-all text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 border border-white/20"
                                >
                                    <Laptop size={14} /> Review Selected Items ({quoteCart.length})
                                </button>
                                <button
                                    id="btn-cart-quote-form"
                                    onClick={() => openBulkQuoteForm(null)}
                                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-sm shadow-xl hover:shadow-yellow-500/20 hover:scale-105 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                                >
                                    Request Bulk Cart Quote <ArrowRight size={16} />
                                </button>
                            </div>
                        ) : (
                            <div className="text-xs text-slate-400 leading-relaxed font-light py-2">
                                Your RFQ list is current empty. Click <strong className="text-amber-400">"Add to RFQ"</strong> on catalog listings below to request specialized corporate volume discounts.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 2. CATALOG CONTAINER AND SPLIT SIDEBAR ACTIONS */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* A. REFIND FILTER SIDEBAR PANEL (Sticky Desktop) */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 sticky top-28">

                            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                    <Filter size={18} className="text-blue-900" />
                                    <h4 className="font-bold text-slate-900 text-sm tracking-tight uppercase">Custom Filters</h4>
                                </div>
                                {(selectedBrand !== 'All' || selectedProcessor !== 'All' || selectedRam !== 'All' || searchQuery !== '' || maxPrice < 4000) && (
                                    <button
                                        id="btn-clear-all-filters"
                                        onClick={() => {
                                            setSelectedBrand('All');
                                            setSelectedProcessor('All');
                                            setSelectedRam('All');
                                            setSearchQuery('');
                                            setMaxPrice(4000);
                                        }}
                                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>

                            {/* BRAND FILTER */}
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Manufacturer / Brand</label>
                                <div className="space-y-1.5">
                                    {brands.map(b => (
                                        <button
                                            key={b}
                                            id={`filter-brand-${b.toLowerCase()}`}
                                            onClick={() => setSelectedBrand(b)}
                                            className={`w-full text-left flex items-center justify-between py-2 px-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedBrand === b
                                                    ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-600 pl-3'
                                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                                }`}
                                        >
                                            <span>{b === 'All' ? 'All Manufacturers' : b}</span>
                                            {selectedBrand === b && <CheckCircle size={14} className="text-blue-600" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* PROCESSOR FILTER */}
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Processor Architecture</label>
                                <div className="space-y-1.5 font-sans text-sm">
                                    <select
                                        id="filter-select-processor"
                                        value={selectedProcessor}
                                        onChange={(e) => setSelectedProcessor(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 py-2.5 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
                                    >
                                        {processors.map(p => (
                                            <option key={p} value={p}>{p === 'All' ? 'All Processors' : p}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* RAM SIZE FILTER */}
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Memory Allocation</label>
                                <div className="flex flex-wrap gap-2">
                                    {rams.map(r => (
                                        <button
                                            key={r}
                                            id={`filter-ram-${r}`}
                                            onClick={() => setSelectedRam(r)}
                                            className={`py-1.5 px-3 rounded-xl text-xs font-bold border transition-all ${selectedRam === r
                                                    ? 'bg-blue-900 text-white border-blue-900 shadow-md shadow-blue-900/10'
                                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                                                }`}
                                        >
                                            {r === 'All' ? 'ALL RAM' : r}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* PRICE BUDGET SLIDER */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Max Corporate Price</label>
                                    <span className="text-semibold text-sm font-mono text-blue-900 bg-blue-50 px-2 py-0.5 rounded-md">${maxPrice}</span>
                                </div>
                                <input
                                    id="filter-price-slider"
                                    type="range"
                                    min="800"
                                    max="4000"
                                    step="100"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                                    <span>$800</span>
                                    <span>$4,000</span>
                                </div>
                            </div>

                            {/* B2B Support box */}
                            <div className="bg-gradient-to-tr from-slate-50 to-blue-50/30 p-4 rounded-2xl border border-blue-50 flex items-start gap-3">
                                <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                <div className="text-[11px] text-slate-500 leading-relaxed">
                                    <strong>Need customized configurations?</strong> Custom OS deployment, corporate login integrations, asset tagging, and high volume rates are arranged upon request.
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* B. PRODUCT LISTINGS CATALOG VIEW */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* SEARCH AND CAPTION MATRIX BAR */}
                        <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="relative w-full sm:max-w-md">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    id="catalog-search-input"
                                    type="text"
                                    placeholder="Query system (e.g. ThinkPad, M3, 64GB)..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        <X size={14} />
                                    </button>
                                )}
                            </div>

                            <div className="text-xs text-slate-400 font-medium shrink-0">
                                Displaying <span className="text-slate-900 font-bold">{filteredProducts.length}</span> of {LAPTOP_PRODUCTS.length} Enterprise Models
                            </div>
                        </div>

                        {/* PRODUCT GRID */}
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredProducts.map((product) => {
                                        const isInCart = quoteCart.some(item => item.product.id === product.id);
                                        const cartItem = quoteCart.find(item => item.product.id === product.id);

                                        return (
                                            <motion.div
                                                layout
                                                key={product.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.4 }}
                                                className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 relative overflow-hidden flex flex-col group h-full"
                                            >
                                                {/* 1. Ribbon badges */}
                                                {product.badge && (
                                                    <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border ${product.badge === 'Bestseller'
                                                            ? 'bg-amber-400/90 text-slate-900 border-yellow-400/20'
                                                            : product.badge === 'Corporate Choice'
                                                                ? 'bg-blue-600/90 text-white border-blue-500/20'
                                                                : 'bg-indigo-600/90 text-white border-indigo-500/20'
                                                        }`}>
                                                        {product.badge}
                                                    </div>
                                                )}

                                                {/* 2. Sleek Visual Placeholder Frame */}
                                                <div className={`relative h-48 bg-gradient-to-br ${product.imageBg} p-6 flex flex-col justify-between overflow-hidden shrink-0`}>

                                                    {/* Inner technology schematic circles */}
                                                    <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60"></div>
                                                    <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full border border-white/5 bg-white/5 blur-xl"></div>

                                                    {/* Hardware mark icon */}
                                                    <div className="flex justify-end relative z-10">
                                                        <span className="text-[10px] font-mono font-bold bg-white/10 text-white/80 py-1 px-2.5 rounded-full backdrop-blur-md border border-white/10">
                                                            {product.brand}
                                                        </span>
                                                    </div>

                                                    {/* Dynamic stylized visual laptop representing key features */}
                                                    <div className="flex items-center justify-center py-4 relative z-10">
                                                        <img src={getLaptopImage(product.brand)} alt={product.name} className="w-36 h-24 object-cover rounded-xl shadow-lg border border-white/20 transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                                                    </div>

                                                    {/* Tags block */}
                                                    <div className="flex flex-wrap gap-1 relative z-10">
                                                        {product.tags.slice(0, 2).map((tag, i) => (
                                                            <span key={i} className="text-[9px] font-bold bg-black/20 text-slate-100 px-2 py-0.5 rounded-md border border-white/5 backdrop-blur-sm">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* 3. Product Info Content */}
                                                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                                                    <div className="space-y-2">
                                                        {/* Star ratings and Reviews */}
                                                        <div className="flex items-center gap-1">
                                                            <div className="flex text-amber-400">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star key={i} size={12} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className="stroke-current" />
                                                                ))}
                                                            </div>
                                                            <span className="text-[11px] font-bold text-slate-500">{product.rating} ({product.reviewsCount})</span>
                                                        </div>

                                                        {/* Title */}
                                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-tight">
                                                            {product.name}
                                                        </h3>

                                                        {/* Hardware Specifications short badge lists */}
                                                        <div className="grid grid-cols-3 gap-1 pt-1.5 text-center text-[10px] font-bold text-slate-500">
                                                            <span className="bg-slate-50 rounded-lg p-1 border border-slate-100 flex flex-col justify-center items-center gap-0.5">
                                                                <Cpu size={12} className="text-blue-500" />
                                                                <span className="truncate max-w-full font-sans text-[8px] text-slate-400">Processor</span>
                                                                <span className="truncate max-w-full text-slate-800">{product.processor.split(' ').slice(-1)[0]}</span>
                                                            </span>
                                                            <span className="bg-slate-50 rounded-lg p-1 border border-slate-100 flex flex-col justify-center items-center gap-0.5">
                                                                <Database size={12} className="text-purple-500" />
                                                                <span className="truncate max-w-full font-sans text-[8px] text-slate-400">RAM Size</span>
                                                                <span className="truncate max-w-full text-slate-800">{product.ram}</span>
                                                            </span>
                                                            <span className="bg-slate-50 rounded-lg p-1 border border-slate-100 flex flex-col justify-center items-center gap-0.5">
                                                                <HardDrive size={12} className="text-emerald-500" />
                                                                <span className="truncate max-w-full font-sans text-[8px] text-slate-400">Disk Storage</span>
                                                                <span className="truncate max-w-full text-slate-800">{product.storage.split(' ')[0]}</span>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* 5. CTA Button Actions */}
                                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                                        <button
                                                            id={`btn-view-details-${product.id}`}
                                                            onClick={() => {
                                                                setActiveProduct(product);
                                                                setActiveProductTab('overview');
                                                                setActiveThumbnailIndex(0);
                                                            }}
                                                            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer text-center"
                                                        >
                                                            View Details
                                                        </button>

                                                        {isInCart ? (
                                                            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-2">
                                                                <button
                                                                    id={`btn-qty-minus-${product.id}`}
                                                                    onClick={() => updateCartQty(product.id, -1)}
                                                                    className="text-blue-900 hover:bg-blue-100 p-1.5 rounded-lg active:scale-90 transition-transform"
                                                                >
                                                                    <Minus size={12} />
                                                                </button>
                                                                <span className="font-mono font-bold text-xs text-blue-900">{cartItem?.qty}</span>
                                                                <button
                                                                    id={`btn-qty-plus-${product.id}`}
                                                                    onClick={() => updateCartQty(product.id, 1)}
                                                                    className="text-blue-900 hover:bg-blue-100 p-1.5 rounded-lg active:scale-90 transition-transform"
                                                                >
                                                                    <Plus size={12} />
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <button
                                                                id={`btn-add-rfq-${product.id}`}
                                                                onClick={() => addToQuoteCart(product)}
                                                                className="w-full bg-[#002B49] text-white hover:bg-[#003C66] font-bold py-2.5 px-3 rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-1"
                                                            >
                                                                <span>Add to RFQ</span>
                                                            </button>
                                                        )}
                                                    </div>

                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-xl shadow-slate-200/50 space-y-4">
                                    <Laptop size={48} className="mx-auto text-slate-300" />
                                    <h3 className="text-xl font-bold text-slate-800">No Enterprise Models Found</h3>
                                    <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                                        We could not locate laptops matching your target filtering parameters. Try adjusting brand filters, processors type, or clearing searching queries.
                                    </p>
                                    <button
                                        id="btn-clear-empty-state-filters"
                                        onClick={() => {
                                            setSelectedBrand('All');
                                            setSelectedProcessor('All');
                                            setSelectedRam('All');
                                            setSearchQuery('');
                                            setMaxPrice(4000);
                                        }}
                                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-transform active:scale-98"
                                    >
                                        Clear Filter Configurations
                                    </button>
                                </div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
            </div>

            {/* 3. TRUST OR QUALITY PARAMETER HIGHLIGHT BANNER */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
                <div className="bg-gradient-to-r from-slate-900 via-[#002B49] to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-center md:text-left">
                        <div className="space-y-3">
                            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mx-auto md:mx-0">
                                <ShieldCheck size={24} />
                            </div>
                            <h4 className="text-lg font-bold">1-Year Official Warranty</h4>
                            <p className="text-slate-300 text-xs leading-relaxed font-light">
                                Secure standard next-business-day response SLAs with replacement options. Extended 3-year commercial packages are customizable per deployment plan.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mx-auto md:mx-0">
                                <Truck size={24} />
                            </div>
                            <h4 className="text-lg font-bold">Free Corporate Delivery</h4>
                            <p className="text-slate-300 text-xs leading-relaxed font-light">
                                Expedited carrier deliveries safely dispatched straight to your central headquarters, development centers, or branch offices across active zones.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mx-auto md:mx-0">
                                <Sparkles size={24} />
                            </div>
                            <h4 className="text-lg font-bold">ISO 9001 Certified Partner</h4>
                            <p className="text-slate-300 text-xs leading-relaxed font-light">
                                GnJ Worldwide adheres to strict, validated quality integration, technical staging protocols, asset serialization, and pre-loading configurations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. MODALS INTERACTION (A. CART SIDEBAR B. PRODUCT DETAILS C. RFQ FORM) */}

            {/* A. RFQ CART SIDEBAR ON-DEMAND */}
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 bg-black z-40 transition-opacity"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col justify-between"
                        >

                            {/* CART HEADER */}
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#002B49] text-white">
                                <div className="flex items-center gap-2">
                                    <Laptop className="text-amber-400" size={20} />
                                    <div>
                                        <h3 className="font-bold text-sm uppercase tracking-wider">Quote Basket</h3>
                                        <p className="text-[10px] text-slate-300 font-light">Prepare customized configuration files</p>
                                    </div>
                                </div>
                                <button
                                    id="btn-close-cart-sidebar"
                                    onClick={() => setIsCartOpen(false)}
                                    className="bg-white/10 hover:bg-white/20 text-white rounded-lg p-1.5 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* CART LIST ITEMS */}
                            <div className="p-6 overflow-y-auto flex-grow space-y-4">
                                {quoteCart.length > 0 ? (
                                    quoteCart.map((item) => (
                                        <div key={item.product.id} className="flex items-start gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 relative group">

                                            <button
                                                id={`btn-cart-remove-${item.product.id}`}
                                                onClick={() => removeFromCart(item.product.id)}
                                                className="absolute right-2 top-2 text-slate-400 hover:text-red-500 hover:bg-red-50 p-1 rounded-lg transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>

                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.product.imageBg} flex items-center justify-center shrink-0 text-white`}>
                                                <Laptop size={20} />
                                            </div>

                                            <div className="space-y-1 pr-6 flex-grow">
                                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{item.product.brand}</span>
                                                <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{item.product.name}</h4>

                                                <div className="text-[10px] text-slate-500 font-medium">Specs: {item.product.ram} / {item.product.storage}</div>

                                                <div className="flex items-center justify-between pt-1.5">
                                                    <span className="text-xs font-bold font-mono text-[#002B49]">${item.product.corporatePrice} ea</span>

                                                    <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-lg px-1 py-0.5">
                                                        <button
                                                            id={`btn-cart-qty-minus-${item.product.id}`}
                                                            onClick={() => updateCartQty(item.product.id, -1)}
                                                            className="text-slate-500 hover:bg-slate-100 p-0.5 rounded"
                                                        >
                                                            <Minus size={10} />
                                                        </button>
                                                        <span className="text-[11px] font-mono font-bold text-slate-800">{item.qty}</span>
                                                        <button
                                                            id={`btn-cart-qty-plus-${item.product.id}`}
                                                            onClick={() => updateCartQty(item.product.id, 1)}
                                                            className="text-slate-500 hover:bg-slate-100 p-0.5 rounded"
                                                        >
                                                            <Plus size={10} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="py-12 text-center space-y-4">
                                        <Laptop className="mx-auto text-slate-300" size={36} />
                                        <h4 className="text-sm font-bold text-slate-700">RFQ Basket is Empty</h4>
                                        <p className="text-xs text-slate-400 max-w-[200px] mx-auto font-light leading-relaxed">
                                            Select corporate laptops and add them to your cart to construct consolidated RFQs.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* CART BOTTOM ACTIONS */}
                            <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4 shrink-0">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Estimated Total</span>
                                        <span className="text-xs text-slate-400 font-light">Excludes bulk-volume tier adjustments</span>
                                    </div>
                                    <span className="text-xl font-mono font-bold text-[#002B49]">${cartTotalQuoteValue.toLocaleString()}</span>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    <button
                                        id="btn-cart-submit-rfq-form"
                                        onClick={() => {
                                            setIsCartOpen(false);
                                            openBulkQuoteForm(null);
                                        }}
                                        disabled={quoteCart.length === 0}
                                        className={`w-full font-bold py-3 px-6 rounded-xl text-center text-sm transition-all focus:outline-none flex items-center justify-center gap-1.5 ${quoteCart.length > 0
                                                ? 'bg-[#002B49] hover:bg-[#003C66] text-white shadow-lg active:scale-[0.99] cursor-pointer'
                                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                            }`}
                                    >
                                        Request Bulk Corporate Quote <ArrowRight size={16} />
                                    </button>
                                    <button
                                        id="btn-cart-continue-shopping"
                                        onClick={() => setIsCartOpen(false)}
                                        className="w-full text-center text-xs font-bold text-slate-500 hover:text-slate-800 py-1 transition-all"
                                    >
                                        Continue System Selection
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* B. DETAILED PRODUCT DETAIL SPLIT-VIEW / MODAL */}
            <AnimatePresence>
                {activeProduct && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveProduct(null)}
                            className="fixed inset-0 bg-black/60 z-40 transition-opacity"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-x-4 top-10 bottom-10 md:inset-x-12 md:top-14 md:bottom-14 lg:inset-x-24 xl:inset-x-32 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col md:flex-row"
                        >

                            {/* Product Visual Mock & thumbnails (Left Pane) */}
                            <div className={`md:w-1/2 bg-gradient-to-br ${activeProduct.imageBg} p-8 md:p-12 relative flex flex-col justify-between text-white shrink-0`}>

                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-45 pointer-events-none"></div>

                                {/* Brand label */}
                                <div className="flex justify-between items-center relative z-10 w-full">
                                    <span className="text-xs font-mono font-bold bg-white/15 text-white py-1 px-3.5 rounded-full backdrop-blur-md border border-white/10 uppercase tracking-widest">
                                        {activeProduct.brand} Commercial Division
                                    </span>

                                    {activeProduct.badge && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-900 px-3 py-1 rounded-full border border-yellow-400/20 shadow-sm">
                                            {activeProduct.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Big Mock Screen */}
                                <div className="flex-grow flex flex-col items-center justify-center py-6 relative z-10 max-w-sm mx-auto">
                                    <motion.div
                                        key={activeThumbnailIndex}
                                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4 text-center mt-4"
                                    >
                                        <img src={getLaptopImage(activeProduct.brand)} alt={activeProduct.name} className="w-64 h-48 object-cover rounded-2xl shadow-2xl mx-auto border-2 border-white/20" referrerPolicy="no-referrer" />

                                        <div className="space-y-1">
                                            <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                                                {activeThumbnailIndex === 0 ? 'Primary Frontal View' : activeThumbnailIndex === 1 ? 'Isometric Closed Lid' : 'I/O Connectivity Array'}
                                            </span>
                                            <p className="text-[11px] text-slate-300 font-light max-w-xs mx-auto">
                                                {activeThumbnailIndex === 0
                                                    ? 'Featuring dynamic thin bezels, localized tactile trackpad, & front-facing array.'
                                                    : activeThumbnailIndex === 1
                                                        ? 'Premium structural casing crafted with high durability composites and logo imprint.'
                                                        : 'Fitted with standard enterprise multi-port interfaces, ThunderBolt standard, and HDMI slots.'}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Styled Interactive Thumbnails Controls */}
                                <div className="space-y-3 relative z-10">
                                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 text-center">Interactive Colorways / Cameras</span>
                                    <div className="flex justify-center gap-3">
                                        {[
                                            { label: 'Screen', index: 0 },
                                            { label: 'Chassis', index: 1 },
                                            { label: 'Ports', index: 2 }
                                        ].map((thumb) => (
                                            <button
                                                key={thumb.index}
                                                id={`btn-modal-thumbnail-${thumb.index}`}
                                                onClick={() => setActiveThumbnailIndex(thumb.index)}
                                                className={`py-1.5 px-4 rounded-xl text-[10px] font-bold border transition-colors cursor-pointer ${activeThumbnailIndex === thumb.index
                                                        ? 'bg-white text-[#002B49] border-white font-extrabold shadow-lg'
                                                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                                                    }`}
                                            >
                                                {thumb.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Product Specifications & Matrices tabs (Right Pane) */}
                            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-between bg-white relative">

                                {/* Close modal action button */}
                                <button
                                    id="btn-close-product-detail"
                                    onClick={() => setActiveProduct(null)}
                                    className="absolute right-6 top-6 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full p-2 transition-colors cursor-pointer z-20"
                                >
                                    <X size={20} />
                                </button>

                                <div className="space-y-6">
                                    {/* Brand & Titles */}
                                    <div className="space-y-1 pr-8">
                                        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                                            {activeProduct.brand} Series
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                                            {activeProduct.name}
                                        </h2>
                                    </div>

                                    {/* Stock, Availability tag and Alert banner */}
                                    <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                                        <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full font-bold">
                                            <span className="h-2 w-2 rounded-full bg-emerald-600 inline-block animate-pulse" /> In Stock & Configured
                                        </span>
                                        <span className="flex items-center gap-1.25 text-purple-600 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full font-bold">
                                            <Percent size={12} /> Bulk Order Discount Applied
                                        </span>
                                    </div>



                                    {/* Tabs controls */}
                                    <div className="flex border-b border-slate-200 text-sm font-medium">
                                        {[
                                            { id: 'overview', label: 'Overview' },
                                            { id: 'techspecs', label: 'Technical Specs' },
                                            { id: 'warranty', label: 'Warranty & Support' }
                                        ].map((tab) => (
                                            <button
                                                key={tab.id}
                                                id={`btn-modal-tab-${tab.id}`}
                                                onClick={() => setActiveProductTab(tab.id as any)}
                                                className={`py-2 px-4 border-b-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeProductTab === tab.id
                                                        ? 'border-blue-900 text-blue-900'
                                                        : 'border-transparent text-slate-400 hover:text-slate-600'
                                                    }`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Tab Display Area */}
                                    <div className="min-h-[140px] text-slate-600 text-sm leading-relaxed">
                                        {activeProductTab === 'overview' && (
                                            <div className="space-y-4">
                                                <p className="text-[14px] leading-relaxed font-light">{activeProduct.overview}</p>
                                                {/* Highlights list dots */}
                                                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                                                    <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-600" /> MIL-STD 810H Tested</span>
                                                    <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-600" /> Active vPro Core Shield</span>
                                                    <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-600" /> Windows 11 Enterprise</span>
                                                    <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-600" /> Smart Diagnostic Ports</span>
                                                </div>
                                            </div>
                                        )}

                                        {activeProductTab === 'techspecs' && (
                                            <div className="space-y-4">
                                                <div className="text-xs bg-slate-50 p-4 rounded-xl border border-slate-100 whitespace-pre-line font-mono text-slate-700 leading-relaxed">
                                                    {activeProduct.techSpecsText}
                                                </div>

                                                {/* Clean HTML Specifications Matrix Table */}
                                                <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                                                    <table className="w-full text-left border-collapse text-xs">
                                                        <thead>
                                                            <tr className="bg-slate-50 font-bold border-b border-slate-100 text-slate-700">
                                                                <th className="p-2.5">Category</th>
                                                                <th className="p-2.5">Component Specification</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-slate-100 text-slate-600">
                                                            <tr>
                                                                <td className="p-2.5 font-bold bg-slate-50/50">Graphics</td>
                                                                <td className="p-2.5 font-light">{activeProduct.graphics}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2.5 font-bold bg-slate-50/50">Display</td>
                                                                <td className="p-2.5 font-light">{activeProduct.display}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2.5 font-bold bg-slate-50/50">Storage</td>
                                                                <td className="p-2.5 font-light">{activeProduct.storage}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2.5 font-bold bg-slate-50/50">Operating System</td>
                                                                <td className="p-2.5 font-light">{activeProduct.os}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {activeProductTab === 'warranty' && (
                                            <p className="text-[14px] leading-relaxed font-light">{activeProduct.warrantyText}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Modal CTA footer block */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100 shrink-0">
                                    <button
                                        id={`btn-modal-add-rfq-${activeProduct.id}`}
                                        onClick={() => {
                                            addToQuoteCart(activeProduct);
                                            setActiveProduct(null);
                                        }}
                                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3.5 px-6 rounded-xl text-xs transition-colors cursor-pointer text-center"
                                    >
                                        Add to Quote Basket
                                    </button>
                                    <button
                                        id={`btn-modal-request-bulk-${activeProduct.id}`}
                                        onClick={() => {
                                            const tgt = activeProduct;
                                            setActiveProduct(null);
                                            // Let current transition finish before showing form
                                            setTimeout(() => openBulkQuoteForm(tgt), 100);
                                        }}
                                        className="w-full bg-[#002B49] hover:bg-[#003C66] text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                                    >
                                        Request Bulk Quote <ArrowRight size={14} />
                                    </button>
                                </div>

                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* C. INTUITIVE B2B BULK QUOTE EMAIL REQUEST FORM MODAL */}
            <AnimatePresence>
                {isQuoteFormOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsQuoteFormOpen(false)}
                            className="fixed inset-0 bg-black/70 z-50 transition-opacity"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:max-w-lg md:mx-auto bg-white rounded-3xl shadow-2xl z-55 overflow-hidden flex flex-col"
                        >

                            {/* Header */}
                            <div className="p-6 bg-[#002B49] text-white flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Building size={20} className="text-amber-400" />
                                    <div>
                                        <h3 className="font-bold text-sm uppercase tracking-wider">Corporate Quotation Desk</h3>
                                        <p className="text-[10px] text-slate-300 font-light">Custom volume tariffs and SLA configuration</p>
                                    </div>
                                </div>
                                <button
                                    id="btn-close-quote-form-modal"
                                    onClick={() => setIsQuoteFormOpen(false)}
                                    className="bg-white/10 hover:bg-white/20 text-white rounded-lg p-1.5 transition-colors cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Form Content */}
                            <div className="p-6 overflow-y-auto max-h-[75vh]">
                                {formSuccessMessage ? (
                                    <div className="text-center py-8 space-y-4">
                                        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                                            <CheckCircle size={36} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-slate-800">RFQ Submitted Successfully</h4>
                                            <p className="text-xs text-slate-400 font-light max-w-xs mx-auto">
                                                Your enterprise requisition file has been recorded. Our corporate hardware accounts managers will contact you within 2 business hours.
                                            </p>
                                        </div>

                                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 max-w-sm mx-auto">
                                            <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Reference Code</span>
                                            <span className="text-sm font-mono font-bold text-[#002B49] uppercase tracking-wider">{formSuccessMessage}</span>
                                        </div>

                                        <button
                                            id="btn-close-success-form"
                                            onClick={() => setIsQuoteFormOpen(false)}
                                            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition-colors"
                                        >
                                            Return to Laptop Catalog
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleQuoteSubmit} className="space-y-4 text-xs font-sans">

                                        {quoteFormTargetProduct ? (
                                            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-tr ${quoteFormTargetProduct.imageBg} flex items-center justify-center text-white shrink-0`}>
                                                    <Laptop size={16} />
                                                </div>
                                                <div>
                                                    <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest">{quoteFormTargetProduct.brand}</span>
                                                    <h4 className="text-xs font-bold text-slate-800 leading-none">{quoteFormTargetProduct.name}</h4>
                                                    <span className="text-[10px] text-slate-400 font-mono">Retail Base: ${quoteFormTargetProduct.corporatePrice} ea</span>
                                                </div>
                                            </div>
                                        ) : quoteCart.length > 0 ? (
                                            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                                                <div className="text-[10px] text-slate-500 font-semibold mb-1">Items In RFQ Packet ({quoteCart.length}):</div>
                                                <div className="max-h-20 overflow-y-auto space-y-1 mt-1">
                                                    {quoteCart.map(c => (
                                                        <div key={c.product.id} className="flex justify-between items-center text-[10px] text-slate-700 font-medium">
                                                            <span>• {c.product.name}</span>
                                                            <span className="font-mono font-bold text-slate-900">Qty: {c.qty}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {/* FIELDS */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                            <div className="space-y-1">
                                                <label className="block font-bold text-slate-600 uppercase tracking-wider">Contact Name *</label>
                                                <div className="relative">
                                                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                    <input
                                                        id="field-form-name"
                                                        type="text"
                                                        placeholder="John Doe"
                                                        value={formName}
                                                        onChange={(e) => setFormName(e.target.value)}
                                                        className={`w-full pl-9 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50/50'
                                                            }`}
                                                    />
                                                </div>
                                                {errors.name && <span className="text-[10px] text-red-500 font-medium">{errors.name}</span>}
                                            </div>

                                            <div className="space-y-1">
                                                <label className="block font-bold text-slate-600 uppercase tracking-wider">Corporate Email *</label>
                                                <div className="relative">
                                                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                    <input
                                                        id="field-form-email"
                                                        type="email"
                                                        placeholder="jdoe@firm.com"
                                                        value={formEmail}
                                                        onChange={(e) => setFormEmail(e.target.value)}
                                                        className={`w-full pl-9 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50/50'
                                                            }`}
                                                    />
                                                </div>
                                                {errors.email && <span className="text-[10px] text-red-500 font-medium">{errors.email}</span>}
                                            </div>

                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                            <div className="space-y-1">
                                                <label className="block font-bold text-slate-600 uppercase tracking-wider">Phone / Ext *</label>
                                                <div className="relative">
                                                    <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                    <input
                                                        id="field-form-phone"
                                                        type="text"
                                                        placeholder="+1 (555) 0192"
                                                        value={formPhone}
                                                        onChange={(e) => setFormPhone(e.target.value)}
                                                        className={`w-full pl-9 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50/50'
                                                            }`}
                                                    />
                                                </div>
                                                {errors.phone && <span className="text-[10px] text-red-500 font-medium">{errors.phone}</span>}
                                            </div>

                                            <div className="space-y-1">
                                                <label className="block font-bold text-slate-600 uppercase tracking-wider">Company / Department *</label>
                                                <div className="relative">
                                                    <Building size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                    <input
                                                        id="field-form-company"
                                                        type="text"
                                                        placeholder="Enterprise Inc."
                                                        value={formCompany}
                                                        onChange={(e) => setFormCompany(e.target.value)}
                                                        className={`w-full pl-9 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.company ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50/50'
                                                            }`}
                                                    />
                                                </div>
                                                {errors.company && <span className="text-[10px] text-red-500 font-medium">{errors.company}</span>}
                                            </div>

                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                            <div className="space-y-1">
                                                <label className="block font-bold text-slate-600 uppercase tracking-wider">Required Quantity</label>
                                                <select
                                                    id="field-form-qty"
                                                    value={formQty}
                                                    onChange={(e) => setFormQty(e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                                >
                                                    <option value="5">5-9 Units</option>
                                                    <option value="10">10-24 Units (Silver support tier)</option>
                                                    <option value="25">25-99 Units (Gold support tier)</option>
                                                    <option value="100">100+ Units (Enterprise custom pricing)</option>
                                                </select>
                                            </div>

                                        </div>

                                        {/* Specifications notes text area */}
                                        <div className="space-y-1">
                                            <label className="block font-bold text-slate-600 uppercase tracking-wider">Integration Notes / Custom Configurations</label>
                                            <textarea
                                                id="field-form-notes"
                                                rows={3}
                                                placeholder="Please details OS preferences, preloaded files, target deployment dates, or remote asset tags configurations..."
                                                value={formNotes}
                                                onChange={(e) => setFormNotes(e.target.value)}
                                                className="w-full p-3 border border-slate-200 bg-slate-50/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs text-slate-700"
                                            />
                                        </div>

                                        {/* Disclaimer */}
                                        <p className="text-[10px] text-slate-400 leading-relaxed font-light">
                                            By submitting this form, you acknowledge that GnJ Worldwide Private Limited protects raw metrics in compliance with our standard corporate Privacy Policy, and will only use this info for RFQ evaluation.
                                        </p>

                                        {/* Submit CTAs */}
                                        <div className="flex gap-3 pt-4 border-t border-slate-100">
                                            <button
                                                type="button"
                                                onClick={() => setIsQuoteFormOpen(false)}
                                                className="w-1/2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl text-xs transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="w-1/2 bg-[#002B49] text-white hover:bg-[#003C66] font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-lg shadow-blue-900/10"
                                            >
                                                Submit RFQ System
                                            </button>
                                        </div>

                                    </form>
                                )}
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </div>
    );
};

export default LaptopsPage;
