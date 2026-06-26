import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Monitor,
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
    Phone,
    Sliders,
    Settings,
    Check
} from 'lucide-react';
import { CONTACT_DATA } from '../../../../data/ContactData';
import desktopSffImage from '../../../../src/assets/images/business_desktop_sff_1782465521702.jpg';

// Desktop Product Interface
interface DesktopProduct {
    id: string;
    name: string;
    brand: 'Lenovo' | 'HP' | 'Dell';
    generation: '2nd/3rd Gen' | '4th Gen' | '6th Gen' | '7th Gen' | '8th Gen' | '9th Gen' | 'AMD Ryzen 5';
    cpu: string;
    ram: string;
    storage: string;
    formFactor: 'SFF' | 'MT' | 'Tiny';
    graphics: string;
    originalPrice: number; // in Rupees
    corporatePrice: number; // in Rupees
    rating: number;
    reviewsCount: number;
    badge?: string;
    suitability: 'Student-friendly' | 'Office-ready' | 'Professional' | 'High-Performance';
    overview: string;
    techSpecsText: string;
    warrantyText: string;
    tags: string[];
}

// Customization Option Interface
interface CustomizeOption {
    id: string;
    name: string;
    category: 'Monitor' | 'Upgrade';
    price: number; // in Rupees
}

// All 30 Models from user data sheet mapped perfectly with authentic pricing, specs, and details
const DESKTOP_PRODUCTS: DesktopProduct[] = [
    // 2nd / 3rd Gen Desktops
    {
        id: 'dt-1',
        name: 'Lenovo ThinkCentre SFF | Intel Core i3 2nd Gen | 4 GB DDR3 | 250 GB HDD',
        brand: 'Lenovo',
        generation: '2nd/3rd Gen',
        cpu: 'i3 2nd',
        ram: '4GB',
        storage: '250GB HDD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 2000',
        originalPrice: 22000,
        corporatePrice: 6499,
        rating: 4.3,
        reviewsCount: 14,
        badge: 'Economy Choice',
        suitability: 'Student-friendly',
        overview: 'Reliable, highly cost-effective small form factor PC perfect for basic schoolwork, office front-desk tasks, and administrative database entries.',
        techSpecsText: '• Processor: Intel® Core™ i3-2100 (2 Cores, 4 Threads, 3.10 GHz)\n• RAM: 4GB DDR3 High Quality Memory\n• Storage: 250GB SATA 7200RPM Mechanical Drive\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 10 Home Pre-configured\n• Connectivity: Front and rear USB, VGA + DisplayPort support',
        warrantyText: '12-Month SLA standard warranty. Guaranteed replacement support within 48 hours for corporate accounts.',
        tags: ['Intel Core i3', '4GB DDR3', '250GB HDD', 'Student-friendly']
    },
    {
        id: 'dt-2',
        name: 'HP Pro SFF | Intel Core i5 2nd Gen | 4 GB DDR3 | 250 GB HDD',
        brand: 'HP',
        generation: '2nd/3rd Gen',
        cpu: 'i5 2nd',
        ram: '4GB',
        storage: '250GB HDD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 2000',
        originalPrice: 25000,
        corporatePrice: 7499,
        rating: 4.4,
        reviewsCount: 18,
        badge: 'Best Value SFF',
        suitability: 'Student-friendly',
        overview: 'A dependable commercial grade desktop from HP. Outfitted with an Intel i5 processor to support quad-core business workloads, multi-tab browsing, and inventory tools.',
        techSpecsText: '• Processor: Intel® Core™ i5-2400 (4 Cores, 4 Threads, 3.10 GHz)\n• RAM: 4GB DDR3 High Quality Memory\n• Storage: 250GB SATA Standard Business Hard Drive\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 10 Pro Business License\n• Connectivity: HP Intelligent IO suite, DisplayPort + VGA',
        warrantyText: '12-Month SLA standard warranty. Verified premium refurbished grade A.',
        tags: ['Intel Core i5', '4GB DDR3', '250GB HDD', 'Student-friendly']
    },
    {
        id: 'dt-3',
        name: 'Dell Optiplex SFF | Intel Core i3 3rd Gen | 4 GB DDR3 | 250 GB HDD',
        brand: 'Dell',
        generation: '2nd/3rd Gen',
        cpu: 'i3 3rd',
        ram: '4GB',
        storage: '250GB HDD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 2500',
        originalPrice: 26000,
        corporatePrice: 7999,
        rating: 4.2,
        reviewsCount: 9,
        badge: 'Corporate Standard',
        suitability: 'Student-friendly',
        overview: 'Dell commercial Optiplex with 3rd Generation Intel architecture. Ideal for light office workstations, school computer labs, and continuous point-of-sale use.',
        techSpecsText: '• Processor: Intel® Core™ i3-3220 (2 Cores, 4 Threads, 3.30 GHz)\n• RAM: 4GB DDR3 1600MHz RAM\n• Storage: 250GB SATA 7200RPM Hard Drive\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 10 Pro licensed\n• Connectivity: Gigabit Ethernet, multiple USB ports, PCIe expansion support',
        warrantyText: '12-Month SLA standard warranty. Certified refurbishment process.',
        tags: ['Intel Core i3', '4GB DDR3', '250GB HDD', 'Student-friendly']
    },
    {
        id: 'dt-4',
        name: 'Lenovo ThinkCentre SFF | Intel Core i5 3rd Gen | 4 GB DDR3 | 250 GB HDD',
        brand: 'Lenovo',
        generation: '2nd/3rd Gen',
        cpu: 'i5 3rd',
        ram: '4GB',
        storage: '250GB HDD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 4000',
        originalPrice: 28000,
        corporatePrice: 8499,
        rating: 4.5,
        reviewsCount: 22,
        badge: 'Enterprise Choice',
        suitability: 'Office-ready',
        overview: 'Heavy-duty 3rd Generation Intel i5 SFF PC from Lenovo. Features advanced thermal design and highly resilient power supply configurations suited for demanding 24/7 workspaces.',
        techSpecsText: '• Processor: Intel® Core™ i5-3470 (4 Cores, 4 Threads, 3.20 GHz, to 3.60 GHz)\n• RAM: 4GB DDR3 Dual-Channel\n• Storage: 250GB High Reliability SATA Hard Drive\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 10 Pro Commercial\n• Connectivity: ThinkCentre active noise suppression chipset, DB9 Serial, DisplayPorts',
        warrantyText: '12-Month SLA standard warranty. Includes priority call-center support.',
        tags: ['Intel Core i5', '4GB DDR3', '250GB HDD', 'Office-ready']
    },

    // 4th Gen Desktops
    {
        id: 'dt-5',
        name: 'Lenovo ThinkCentre SFF | Intel Dual Core 4th Gen | 4 GB DDR3 | 250 GB HDD',
        brand: 'Lenovo',
        generation: '4th Gen',
        cpu: 'DC 4th',
        ram: '4GB',
        storage: '250GB HDD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 4400',
        originalPrice: 29000,
        corporatePrice: 8999,
        rating: 4.1,
        reviewsCount: 16,
        badge: 'Highly Affordable',
        suitability: 'Student-friendly',
        overview: 'Haswell architecture Dual Core desktop. Exceptional value formulation, designed specifically for budget-restricted bulk procurements in schools, labs, and logistics offices.',
        techSpecsText: '• Processor: Intel® Pentium® Dual Core G3220 (2 Cores, 2 Threads, 3.00 GHz)\n• RAM: 4GB DDR3 Memory\n• Storage: 250GB High Speed SATA Hard Disk\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 10 Home Edition\n• Connectivity: USB 3.0 SuperSpeed ports, VGA, DisplayPort, Realtek LAN',
        warrantyText: '12-Month SLA standard warranty. Guaranteed thoroughly inspected and tested.',
        tags: ['Intel Dual Core', '4GB DDR3', '250GB HDD', 'Student-friendly']
    },
    {
        id: 'dt-6',
        name: 'Lenovo ThinkCentre SFF | Intel Core i5 4th Gen | 4 GB DDR3 | 250 GB HDD',
        brand: 'Lenovo',
        generation: '4th Gen',
        cpu: 'i5 4th',
        ram: '4GB',
        storage: '250GB HDD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 4600',
        originalPrice: 32000,
        corporatePrice: 9999,
        rating: 4.6,
        reviewsCount: 31,
        badge: 'Performance Pick',
        suitability: 'Office-ready',
        overview: 'A highly responsive 4th Gen i5 enterprise computer. Designed to support heavy spreadsheet processing, legacy system terminals, and modern office productivity applications.',
        techSpecsText: '• Processor: Intel® Core™ i5-4570 (4 Cores, 4 Threads, 3.20 GHz, to 3.60 GHz)\n• RAM: 4GB DDR3 1600MHz Dual-Channel\n• Storage: 250GB SATA Enterprise-grade HDD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 10 Pro 64-bit\n• Connectivity: 4x USB 3.0, 4x USB 2.0, dual DisplayPort, VGA, audio in/out',
        warrantyText: '12-Month SLA standard warranty. Premium refurbished grade A+ certified.',
        tags: ['Intel Core i5', '4GB DDR3', '250GB HDD', 'Office-ready']
    },
    {
        id: 'dt-7',
        name: 'Lenovo ThinkCentre SFF | Intel Core i7 4th Gen | 4 GB DDR3 | 250 GB HDD',
        brand: 'Lenovo',
        generation: '4th Gen',
        cpu: 'i7 4th',
        ram: '4GB',
        storage: '250GB HDD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 4600',
        originalPrice: 39000,
        corporatePrice: 11999,
        rating: 4.7,
        reviewsCount: 24,
        badge: 'High Performance',
        suitability: 'Professional',
        overview: 'Equipped with a powerful Intel Core i7 processor with 8 logical threads. Outstanding multitasking capability, suited for developers, data analysts, and heavy clerical tasks.',
        techSpecsText: '• Processor: Intel® Core™ i7-4770 (4 Cores, 8 Threads, 3.40 GHz, to 3.90 GHz)\n• RAM: 4GB DDR3 High Performance RAM\n• Storage: 250GB 3.5" SATA 7200RPM HDD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 10 Pro Licensed\n• Connectivity: Dual DP display outputs, VGA, front panel audio, Gigabit LAN',
        warrantyText: '12-Month SLA standard warranty. 30-day no-questions-asked swap SLA.',
        tags: ['Intel Core i7', '4GB DDR3', '250GB HDD', 'Professional']
    },

    // 6th Gen Desktops
    {
        id: 'dt-8',
        name: 'Dell Optiplex 3046 SFF | Intel Dual Core 6th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '6th Gen',
        cpu: 'DC 6th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 510',
        originalPrice: 36000,
        corporatePrice: 10999,
        rating: 4.3,
        reviewsCount: 15,
        badge: 'Modern Storage',
        suitability: 'Student-friendly',
        overview: 'Equipped with ultra-fast solid state storage and DDR4 memory. Instant system booting, immediate web browser startups, and smooth desktop productivity.',
        techSpecsText: '• Processor: Intel® Pentium® Dual Core G4400 (2 Cores, 3.30 GHz)\n• RAM: 8GB DDR4 2133MHz High-Speed Memory\n• Storage: 256GB High Speed Solid State Drive (SSD)\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Ready\n• Connectivity: HDMI, DisplayPort, USB 3.0 ports, RJ45',
        warrantyText: '12-Month SLA standard warranty. Certified 100% operational hardware.',
        tags: ['Intel Dual Core', '8GB DDR4', '256GB SSD', 'Student-friendly']
    },
    {
        id: 'dt-9',
        name: 'Dell Optiplex 3046 SFF | Intel Core i3 6th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '6th Gen',
        cpu: 'i3 6th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 530',
        originalPrice: 39000,
        corporatePrice: 11999,
        rating: 4.5,
        reviewsCount: 19,
        badge: 'Office Standard',
        suitability: 'Office-ready',
        overview: 'Intel Skylake i3 processor combined with 8GB DDR4. Smooth multitasking flow, modern Windows 11 capabilities, and low energy draw standard.',
        techSpecsText: '• Processor: Intel® Core™ i3-6100 (2 Cores, 4 Threads, 3.70 GHz)\n• RAM: 8GB DDR4 2133MHz Memory\n• Storage: 256GB Solid State Drive (SSD)\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Installed\n• Connectivity: HDMI, DisplayPort, USB 3.0, integrated Intel HD Audio',
        warrantyText: '12-Month SLA standard warranty. Fast on-site parts delivery option.',
        tags: ['Intel Core i3', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-10',
        name: 'Dell Optiplex 3046 SFF | Intel Core i5 6th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '6th Gen',
        cpu: 'i5 6th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 530',
        originalPrice: 45000,
        corporatePrice: 13499,
        rating: 4.7,
        reviewsCount: 42,
        badge: 'Bestseller Choice',
        suitability: 'Office-ready',
        overview: 'Our absolute bestselling commercial desktop. A powerhouse 6th Gen quad-core i5 desktop combined with responsive SSD storage and standard 8GB RAM.',
        techSpecsText: '• Processor: Intel® Core™ i5-6500 (4 Cores, 4 Threads, 3.20 GHz, to 3.60 GHz)\n• RAM: 8GB DDR4 2133MHz Memory (Expandable to 32GB)\n• Storage: 256GB High-Speed Solid State Drive\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro 64-bit Licensed\n• Connectivity: HDMI 1.4, DisplayPort 1.2, 4x USB 3.0, 4x USB 2.0',
        warrantyText: '12-Month SLA standard warranty. Multi-point QA certified.',
        tags: ['Intel Core i5', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-11',
        name: 'Dell Optiplex 3046 SFF | Intel Core i7 6th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '6th Gen',
        cpu: 'i7 6th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 530',
        originalPrice: 52000,
        corporatePrice: 15999,
        rating: 4.8,
        reviewsCount: 29,
        badge: 'Pro Workstation',
        suitability: 'Professional',
        overview: 'High-end Core i7 6th Gen with 8 hyperthreads and fast SSD storage. Ideal for processing telemetry data, administrative compiles, and multi-monitor operations.',
        techSpecsText: '• Processor: Intel® Core™ i7-6700 (4 Cores, 8 Threads, 3.40 GHz, to 4.00 GHz)\n• RAM: 8GB DDR4 High-Performance Memory\n• Storage: 256GB SATA-III Solid State Drive\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro 64-bit\n• Connectivity: HDMI, DisplayPort, VGA, 4x USB 3.0, PCIe x16 slot',
        warrantyText: '12-Month SLA standard warranty. Premium business-class priority coverage.',
        tags: ['Intel Core i7', '8GB DDR4', '256GB SSD', 'Professional']
    },

    // 7th Gen Desktops
    {
        id: 'dt-12',
        name: 'Dell Optiplex 3050 SFF | Intel Core i3 7th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '7th Gen',
        cpu: 'i3 7th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 630',
        originalPrice: 42000,
        corporatePrice: 12999,
        rating: 4.4,
        reviewsCount: 11,
        badge: 'Efficient Core',
        suitability: 'Office-ready',
        overview: '7th Gen Intel Kaby Lake technology. Better integrated graphics capabilities, native HEVC decodes, and faster memory bus execution.',
        techSpecsText: '• Processor: Intel® Core™ i3-7100 (2 Cores, 4 Threads, 3.90 GHz)\n• RAM: 8GB DDR4 2400MHz High-Speed RAM\n• Storage: 256GB Performance Solid State Drive\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Ready\n• Connectivity: DisplayPort 1.2, HDMI 1.4, 4x USB 3.1 Gen 1, Gigabit LAN',
        warrantyText: '12-Month SLA standard warranty. Low carbon lifecycle choice.',
        tags: ['Intel Core i3', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-13',
        name: 'Dell Optiplex 5050 SFF | Intel Core i5 7th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '7th Gen',
        cpu: 'i5 7th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 630',
        originalPrice: 48000,
        corporatePrice: 14499,
        rating: 4.7,
        reviewsCount: 36,
        badge: 'Enterprise Choice',
        suitability: 'Office-ready',
        overview: 'A premium corporate workhorse model featuring enhanced BIOS protections, active remote management features, and rich storage expansion choices.',
        techSpecsText: '• Processor: Intel® Core™ i5-7500 (4 Cores, 4 Threads, 3.40 GHz, to 3.80 GHz)\n• RAM: 8GB DDR4 2400MHz Corporate RAM\n• Storage: 256GB PCIe NVMe SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Licensed\n• Connectivity: 2x DisplayPort, HDMI, 6x USB 3.1 Gen 1, Serial, expansion bay',
        warrantyText: '12-Month SLA standard warranty. ProSupport SLA response guaranteed.',
        tags: ['Intel Core i5', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-14',
        name: 'Dell Optiplex 5050 SFF | Intel Core i7 7th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '7th Gen',
        cpu: 'i7 7th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® HD Graphics 630',
        originalPrice: 58000,
        corporatePrice: 17999,
        rating: 4.9,
        reviewsCount: 18,
        badge: 'Executive Power',
        suitability: 'Professional',
        overview: 'Top-tier executive PC with highly capable 7th Gen i7 processor. Fast computations, multiple virtual machine execution, and fluid high-density data sheets.',
        techSpecsText: '• Processor: Intel® Core™ i7-7700 (4 Cores, 8 Threads, 3.60 GHz, to 4.20 GHz)\n• RAM: 8GB DDR4 2400MHz (Supports to 64GB)\n• Storage: 256GB Performance SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Commercial\n• Connectivity: 2x DisplayPort, HDMI, 6x USB 3.1, front Type-C port',
        warrantyText: '12-Month SLA standard warranty. Premium grade A+ refurbished tier.',
        tags: ['Intel Core i7', '8GB DDR4', '256GB SSD', 'Professional']
    },

    // 8th Gen Desktops
    {
        id: 'dt-15',
        name: 'Lenovo ThinkCentre SFF | Intel Core i3 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Lenovo',
        generation: '8th Gen',
        cpu: 'i3 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 49000,
        corporatePrice: 14999,
        rating: 4.6,
        reviewsCount: 22,
        badge: 'Hexa-Era Value',
        suitability: 'Office-ready',
        overview: '8th Gen i3 provides true quad-core performance for the first time in an i3 series. Phenomenal price-to-performance ratio for modern office fleets.',
        techSpecsText: '• Processor: Intel® Core™ i3-8100 (4 Cores, 4 Threads, 3.60 GHz, 6MB Cache)\n• RAM: 8GB DDR4 2666MHz RAM\n• Storage: 256GB M.2 PCIe NVMe High Speed SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro\n• Connectivity: 2x DisplayPort, VGA, USB 3.1 Gen 2, Serial, card reader',
        warrantyText: '12-Month SLA standard warranty. Energy Star Certified green device.',
        tags: ['Intel Core i3', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-16',
        name: 'HP ProDesk SFF | Intel Core i3 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'HP',
        generation: '8th Gen',
        cpu: 'i3 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 49000,
        corporatePrice: 14999,
        rating: 4.5,
        reviewsCount: 15,
        badge: 'Secure Core',
        suitability: 'Office-ready',
        overview: 'HP ProDesk SFF featuring BIOS-level protections, physical chassis locks support, and 8th generation quad-core efficiency.',
        techSpecsText: '• Processor: Intel® Core™ i3-8100 (4 Cores, 4 Threads, 3.60 GHz)\n• RAM: 8GB DDR4 2666MHz RAM\n• Storage: 256GB High Speed Solid State Drive\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Licensed\n• Connectivity: 2x DisplayPort, VGA, USB Type-C, front USB 3.1, Gigabit LAN',
        warrantyText: '12-Month SLA standard warranty. Active business SLA replacement.',
        tags: ['Intel Core i3', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-17',
        name: 'Dell Optiplex SFF | Intel Core i3 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '8th Gen',
        cpu: 'i3 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 51000,
        corporatePrice: 15499,
        rating: 4.6,
        reviewsCount: 19,
        badge: 'B2B Standard',
        suitability: 'Office-ready',
        overview: 'Dell commercial benchmark computer with 8th Gen Intel architecture. Outstanding reliability, small desk footprint, and easy internal accessibility.',
        techSpecsText: '• Processor: Intel® Core™ i3-8100 (4 Cores, 4 Threads, 3.60 GHz)\n• RAM: 8GB DDR4 2666MHz RAM\n• Storage: 256GB NVMe SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Installed\n• Connectivity: HDMI, DisplayPort, USB 3.1, Gigabit Ethernet, audio jacks',
        warrantyText: '12-Month SLA standard warranty. Fast, responsive parts-dispatch.',
        tags: ['Intel Core i3', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-18',
        name: 'Lenovo ThinkCentre SFF | Intel Core i5 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Lenovo',
        generation: '8th Gen',
        cpu: 'i5 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 55000,
        corporatePrice: 16999,
        rating: 4.8,
        reviewsCount: 52,
        badge: 'Highly Recommended',
        suitability: 'Office-ready',
        overview: 'Features a massive 6-Core Intel i5 processor (Coffee Lake). Handles heavy data manipulation, virtual workspace nodes, and concurrent office software with absolute grace.',
        techSpecsText: '• Processor: Intel® Core™ i5-8500 (6 Cores, 6 Threads, 3.00 GHz, to 4.10 GHz)\n• RAM: 8GB DDR4 2666MHz RAM (Supports to 64GB)\n• Storage: 256GB PCIe M.2 NVMe Performance SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Licensed\n• Connectivity: 2x DisplayPort, VGA, USB Type-C, front USB 3.1 Gen 2',
        warrantyText: '12-Month SLA standard warranty. Corporate priority dispatch suite included.',
        tags: ['Intel Core i5', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-19',
        name: 'HP ProDesk SFF | Intel Core i5 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'HP',
        generation: '8th Gen',
        cpu: 'i5 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 55000,
        corporatePrice: 16999,
        rating: 4.7,
        reviewsCount: 39,
        badge: 'Enterprise Standard',
        suitability: 'Office-ready',
        overview: 'HP commercial desktop featuring deep hardware-enforced protection. Powered by a highly robust 6-Core i5 Coffee Lake CPU for flawless workflow operations.',
        techSpecsText: '• Processor: Intel® Core™ i5-8500 (6 Cores, 6 Threads, 3.00 GHz, to 4.10 GHz)\n• RAM: 8GB DDR4 High-Speed RAM\n• Storage: 256GB NVMe Performance SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro\n• Connectivity: Dual DisplayPorts, USB Type-C, front high-speed IO panels',
        warrantyText: '12-Month SLA standard warranty. Active support channels.',
        tags: ['Intel Core i5', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-20',
        name: 'Dell Optiplex SFF | Intel Core i5 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '8th Gen',
        cpu: 'i5 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 57000,
        corporatePrice: 17499,
        rating: 4.8,
        reviewsCount: 46,
        badge: 'Enterprise Best',
        suitability: 'Office-ready',
        overview: '6-Core 8th Generation i5 desktop model. Exceptional engineering cooling curves, ultra-low idle acoustics, and solid stability metrics.',
        techSpecsText: '• Processor: Intel® Core™ i5-8500 (6 Cores, 6 Threads, 3.00 GHz, to 4.10 GHz)\n• RAM: 8GB DDR4 2666MHz RAM\n• Storage: 256GB PCIe M.2 NVMe SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Licensed\n• Connectivity: DisplayPort, HDMI, 4x USB 3.1, Gigabit LAN, standard legacy serial',
        warrantyText: '12-Month SLA standard warranty. 100% components verified.',
        tags: ['Intel Core i5', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-21',
        name: 'Lenovo ThinkCentre SFF | Intel Core i7 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Lenovo',
        generation: '8th Gen',
        cpu: 'i7 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 65000,
        corporatePrice: 19999,
        rating: 4.9,
        reviewsCount: 33,
        badge: 'Heavy Workstation',
        suitability: 'Professional',
        overview: 'Incredible computation power from the 6-Core / 12-Thread Core i7-8700. Custom tuned for compiling software, financial data crunching, and heavy multitasking environments.',
        techSpecsText: '• Processor: Intel® Core™ i7-8700 (6 Cores, 12 Threads, 3.20 GHz, to 4.60 GHz, 12MB Cache)\n• RAM: 8GB DDR4 2666MHz RAM\n• Storage: 256GB PCIe NVMe SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro 64-bit\n• Connectivity: 2x DisplayPort, VGA, USB 3.1 Gen 2, Type-C, Serial DB9',
        warrantyText: '12-Month SLA standard warranty. Complete express unit swap SLA included.',
        tags: ['Intel Core i7', '8GB DDR4', '256GB SSD', 'Professional']
    },
    {
        id: 'dt-22',
        name: 'HP ProDesk SFF | Intel Core i7 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'HP',
        generation: '8th Gen',
        cpu: 'i7 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 65000,
        corporatePrice: 19999,
        rating: 4.8,
        reviewsCount: 21,
        badge: 'Elite Performance',
        suitability: 'Professional',
        overview: 'HP high-performance small footprint desk unit. Powerful Intel i7 8th Gen and rich configuration features for elite computing.',
        techSpecsText: '• Processor: Intel® Core™ i7-8700 (6 Cores, 12 Threads, 3.20 GHz, to 4.60 GHz)\n• RAM: 8GB DDR4 2666MHz Memory\n• Storage: 256GB PCIe M.2 SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Licensed\n• Connectivity: Dual DisplayPorts, USB Type-C, Gigabit Ethernet, premium onboard sound',
        warrantyText: '12-Month SLA standard warranty. Enterprise executive support hotline access.',
        tags: ['Intel Core i7', '8GB DDR4', '256GB SSD', 'Professional']
    },
    {
        id: 'dt-23',
        name: 'Dell Optiplex SFF | Intel Core i7 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '8th Gen',
        cpu: 'i7 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 67000,
        corporatePrice: 20499,
        rating: 4.9,
        reviewsCount: 28,
        badge: 'Professional Prime',
        suitability: 'Professional',
        overview: 'Intel i7 6-Core processor paired with Dell Optiplex premium chassis. Ideal for engineering, statistics calculations, and local web app staging.',
        techSpecsText: '• Processor: Intel® Core™ i7-8700 (6 Cores, 12 Threads, 3.20 GHz, to 4.60 GHz)\n• RAM: 8GB DDR4 2666MHz (Expandable to 64GB)\n• Storage: 256GB high-velocity PCIe NVMe M.2 SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Commercial\n• Connectivity: Dual DisplayPorts, HDMI, 6x USB 3.1, Gigabit LAN',
        warrantyText: '12-Month SLA standard warranty. Direct commercial replacement parts dispatch.',
        tags: ['Intel Core i7', '8GB DDR4', '256GB SSD', 'Professional']
    },
    {
        id: 'dt-24',
        name: 'HP ProDesk MT | Intel Core i7 8th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'HP',
        generation: '8th Gen',
        cpu: 'i7 8th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'MT',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 74000,
        corporatePrice: 20999,
        rating: 4.9,
        reviewsCount: 54,
        badge: 'MicroTower Expandable',
        suitability: 'High-Performance',
        overview: 'HP MicroTower form factor (MT). Provides incredible upgrade space, allowing addition of full-height graphics cards, multiple hard drives, and custom network expansion controllers.',
        techSpecsText: '• Processor: Intel® Core™ i7-8700 (6 Cores, 12 Threads, 3.20 GHz, to 4.60 GHz)\n• RAM: 8GB DDR4 2666MHz high performance memory\n• Storage: 256GB Solid State Drive (expandable secondary HDD slot ready)\n• Form Factor: MicroTower (MT) Expandable Chassis\n• Operating System: Windows 11 Pro 64-bit Licensed\n• Connectivity: 2x DisplayPort, HDMI, 6x USB 3.1, Type-C, dual internal PCIe slots',
        warrantyText: '12-Month SLA standard warranty. Designed for highly expandable hardware lifecycles.',
        tags: ['Intel Core i7', '8GB DDR4', '256GB SSD', 'High-Performance']
    },

    // 9th Gen Desktops
    {
        id: 'dt-25',
        name: 'Lenovo ThinkCentre SFF | Intel Core i5 9th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Lenovo',
        generation: '9th Gen',
        cpu: 'i5 9th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 62000,
        corporatePrice: 18999,
        rating: 4.8,
        reviewsCount: 16,
        badge: 'Modern Powerhouse',
        suitability: 'Office-ready',
        overview: '9th Gen Intel 6-Core processor. Excellent power envelope, native hardware safeguards, and fast processing metrics.',
        techSpecsText: '• Processor: Intel® Core™ i5-9500 (6 Cores, 6 Threads, 3.00 GHz, to 4.40 GHz, 9MB Cache)\n• RAM: 8GB DDR4 2666MHz High Speed RAM\n• Storage: 256GB M.2 NVMe Solid State Drive\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro\n• Connectivity: 2x DisplayPort, VGA, USB 3.1 Gen 2, Type-C',
        warrantyText: '12-Month SLA standard warranty. Premium business-class certified support.',
        tags: ['Intel Core i5', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-26',
        name: 'HP ProDesk SFF | Intel Core i5 9th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'HP',
        generation: '9th Gen',
        cpu: 'i5 9th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 62000,
        corporatePrice: 18999,
        rating: 4.7,
        reviewsCount: 12,
        badge: 'Secure Elite',
        suitability: 'Office-ready',
        overview: '9th Gen Intel Core i5 inside HP SFF design. Features advanced cooling algorithms and physical and digital system protections.',
        techSpecsText: '• Processor: Intel® Core™ i5-9500 (6 Cores, 6 Threads, 3.00 GHz, to 4.40 GHz)\n• RAM: 8GB DDR4 2666MHz RAM\n• Storage: 256GB PCIe NVMe SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro\n• Connectivity: Dual DisplayPorts, Type-C, front high-speed USB 3.1',
        warrantyText: '12-Month SLA standard warranty. Grade A+ certification quality.',
        tags: ['Intel Core i5', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-27',
        name: 'Dell Optiplex SFF | Intel Core i5 9th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Dell',
        generation: '9th Gen',
        cpu: 'i5 9th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 64000,
        corporatePrice: 19499,
        rating: 4.8,
        reviewsCount: 20,
        badge: 'Enterprise Choice',
        suitability: 'Office-ready',
        overview: 'Premium 9th Gen i5 computer with massive 6 physical computing cores. Rock-solid corporate platform standard.',
        techSpecsText: '• Processor: Intel® Core™ i5-9500 (6 Cores, 6 Threads, 3.00 GHz, to 4.40 GHz)\n• RAM: 8GB DDR4 2666MHz (Supports to 64GB)\n• Storage: 256GB PCIe M.2 NVMe SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro 64-bit\n• Connectivity: DisplayPort, HDMI, 4x USB 3.1, Gigabit LAN, serial',
        warrantyText: '12-Month SLA standard warranty. Enterprise hardware protection suite.',
        tags: ['Intel Core i5', '8GB DDR4', '256GB SSD', 'Office-ready']
    },
    {
        id: 'dt-28',
        name: 'Lenovo ThinkCentre SFF | Intel Core i7 9th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'Lenovo',
        generation: '9th Gen',
        cpu: 'i7 9th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 72000,
        corporatePrice: 21999,
        rating: 4.9,
        reviewsCount: 38,
        badge: 'Ultimate Compute',
        suitability: 'High-Performance',
        overview: 'Extremely powerful 8-Core i7 9th Gen Coffee Lake Refresh processor. Seamless execution of code compilations, heavy database structures, and high speed calculations.',
        techSpecsText: '• Processor: Intel® Core™ i7-9700 (8 Cores, 8 Threads, 3.00 GHz, to 4.70 GHz, 12MB Cache)\n• RAM: 8GB DDR4 2666MHz (Supports to 128GB)\n• Storage: 256GB PCIe M.2 NVMe Performance SSD\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro\n• Connectivity: Dual DisplayPort, VGA, USB 3.1 Gen 2, Type-C, Gigabit Ethernet',
        warrantyText: '12-Month SLA standard warranty. Ultimate high reliability SLA replacement.',
        tags: ['Intel Core i7', '8GB DDR4', '256GB SSD', 'High-Performance']
    },
    {
        id: 'dt-29',
        name: 'HP ProDesk MT | Intel Core i7 9th Gen | 8 GB DDR4 | 256 GB SSD',
        brand: 'HP',
        generation: '9th Gen',
        cpu: 'i7 9th',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'MT',
        graphics: 'Intel® UHD Graphics 630',
        originalPrice: 74000,
        corporatePrice: 22499,
        rating: 4.9,
        reviewsCount: 26,
        badge: 'Premium Tower',
        suitability: 'High-Performance',
        overview: 'HP MicroTower packing an 8-Core Intel i7 9th Gen. Vast motherboard expansion slots, massive power reserves, and state-of-the-art airflow dynamics.',
        techSpecsText: '• Processor: Intel® Core™ i7-9700 (8 Cores, 8 Threads, 3.00 GHz, to 4.70 GHz)\n• RAM: 8GB DDR4 2666MHz high performance memory\n• Storage: 256GB Solid State Drive (Supports secondary SSD/HDD slots)\n• Form Factor: MicroTower (MT) Expandable Chassis\n• Operating System: Windows 11 Pro 64-bit\n• Connectivity: 2x DisplayPort, HDMI, 6x USB 3.1, Type-C, dual PCIe slots',
        warrantyText: '12-Month SLA standard warranty. Highly reliable workstation formulation.',
        tags: ['Intel Core i7', '8GB DDR4', '256GB SSD', 'High-Performance']
    },

    // AMD Ryzen 5
    {
        id: 'dt-30',
        name: 'HP EliteDesk 705 G5 SFF | AMD Ryzen 5 Pro 3400G | 8 GB | 256 GB SSD | 2 GB Radeon',
        brand: 'HP',
        generation: 'AMD Ryzen 5',
        cpu: 'Pro',
        ram: '8GB',
        storage: '256GB SSD',
        formFactor: 'SFF',
        graphics: 'AMD Radeon™ RX Vega 11 Graphics (2GB VRAM)',
        originalPrice: 59000,
        corporatePrice: 17499,
        rating: 4.8,
        reviewsCount: 31,
        badge: 'Professional GPU',
        suitability: 'High-Performance',
        overview: 'Sleek HP EliteDesk packing an AMD Ryzen 5 Pro processor with enterprise-grade security and robust integrated Radeon 2GB graphics, perfect for entry-level CAD, visual staging, and analytics graphics.',
        techSpecsText: '• Processor: AMD Ryzen™ 5 Pro 3400G (4 Cores, 8 Threads, 3.70 GHz, to 4.20 GHz, 6MB Cache)\n• RAM: 8GB DDR4 High-Performance RAM\n• Storage: 256GB PCIe M.2 NVMe SSD\n• GPU: AMD Radeon™ RX Vega 11 Graphics 2GB Dedicated VRAM\n• Form Factor: Small Form Factor (SFF)\n• Operating System: Windows 11 Pro Licensed\n• Connectivity: 2x DisplayPort, VGA, 4x USB 3.1 Gen 2, 4x USB 2.0, audio jack',
        warrantyText: '12-Month SLA standard warranty. Specialized AMD PRO Security processor active.',
        tags: ['AMD Ryzen 5 Pro', '8GB DDR4', '256GB SSD', 'High-Performance']
    }
];

const CUSTOMIZE_OPTIONS: CustomizeOption[] = [
    // Monitors
    { id: 'opt-m1', name: '18.5" Wide Business Series TFT Monitor', category: 'Monitor', price: 4500 },
    { id: 'opt-m2', name: '18.5" Wide Business Series TFT Monitor (Slim LED)', category: 'Monitor', price: 4900 },
    { id: 'opt-m3', name: '22" Wide Business Series TFT Monitor', category: 'Monitor', price: 6500 },
    { id: 'opt-m4', name: '22" Wide Business Series TFT Monitor with Cam', category: 'Monitor', price: 7500 },
    { id: 'opt-m5', name: '24" Wide Business Series TFT Monitor - Bezelless', category: 'Monitor', price: 8900 },
    { id: 'opt-m6', name: '24" Wide Business Series TFT Monitor with Cam', category: 'Monitor', price: 9900 },

    // Upgrades
    { id: 'opt-u1', name: 'Kbd+ Mouse+ Cable set', category: 'Upgrade', price: 800 },
    { id: 'opt-u2', name: '512 SSD Upgrade (in Lieu of 256 SSD)', category: 'Upgrade', price: 1500 },
    { id: 'opt-u3', name: '256GB NVME Upgrade (in Lieu of 256 GB SSD)', category: 'Upgrade', price: 1000 },
    { id: 'opt-u4', name: 'Addl. 8 GB DDR4 Ram', category: 'Upgrade', price: 1200 },
    { id: 'opt-u5', name: 'Wi fi Module for TINY PC / HP SFF', category: 'Upgrade', price: 600 },
    { id: 'opt-u6', name: 'Tiny PC Stand', category: 'Upgrade', price: 500 }
];

// Beautiful SVG representation of Small Form Factor Desktop or tower bundle with Edify Logo
const DesktopVisual: React.FC<{ brand: string; formFactor: string; selectedMonitorId?: string }> = ({ brand, formFactor, selectedMonitorId }) => {
    const monitorObj = selectedMonitorId ? CUSTOMIZE_OPTIONS.find(o => o.id === selectedMonitorId) : null;
    const hasMonitor = !!monitorObj;

    return (
        <div className="w-full h-48 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Real photorealistic generated product image */}
            <img 
                src={desktopSffImage} 
                alt={`${brand} Desktop ${formFactor}`} 
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
            />
            {/* Sleek shadow overlays for clear text on contrast backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-black/30 z-10" />

            {/* Brand label & Form factor badges overlay */}
            <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-white/20 text-white py-1 px-2.5 rounded-full backdrop-blur-md border border-white/10 select-none uppercase tracking-widest font-extrabold shadow-sm">
                    {brand}
                </span>
                {hasMonitor && (
                    <span className="text-[9px] font-bold bg-emerald-500/90 text-white py-0.5 px-2 rounded-full backdrop-blur-sm border border-emerald-400/20 shadow-sm animate-pulse">
                        + Monitor Bundle
                    </span>
                )}
            </div>

            {/* Form factor overlay flag on SFF/MT bottom corner */}
            <div className="absolute bottom-3 right-3 z-20 bg-slate-900/95 border border-slate-800 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-md">
                {formFactor} Unit
            </div>
        </div>
    );
};

const DesktopsPage: React.FC = () => {
    // Scroll to Top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Active Tab & Filter Configurations
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrand, setSelectedBrand] = useState<string>('All');
    const [selectedCpuType, setSelectedCpuType] = useState<string>('All');
    const [selectedGeneration, setSelectedGeneration] = useState<string>('All');
    const [selectedFormFactor, setSelectedFormFactor] = useState<string>('All');
    const [maxPrice, setMaxPrice] = useState<number>(30000);

    // Active selected compare products
    const [comparedProductIds, setComparedProductIds] = useState<string[]>([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    // Quote Cart for business procurement
    const [quoteCart, setQuoteCart] = useState<Array<{
        product: DesktopProduct;
        qty: number;
        monitorId?: string;
        selectedUpgrades: string[]; // customizeOption IDs
        calculatedUnitPrice: number;
    }>>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Detail Modal configuration options
    const [activeProduct, setActiveProduct] = useState<DesktopProduct | null>(null);
    const [activeProductTab, setActiveProductTab] = useState<'overview' | 'techspecs' | 'warranty'>('overview');
    const [activeThumbnailIndex, setActiveThumbnailIndex] = useState<number>(0);

    // Active custom configuration state inside Modal
    const [modalSelectedMonitor, setModalSelectedMonitor] = useState<string>(''); // Monitor ID
    const [modalSelectedUpgrades, setModalSelectedUpgrades] = useState<string[]>([]); // Upgrade IDs

    // B2B RFQ Form Modal
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
    const [quoteFormTargetProduct, setQuoteFormTargetProduct] = useState<DesktopProduct | null>(null);

    // Form inputs
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formCompany, setFormCompany] = useState('');
    const [formQty, setFormQty] = useState('5'); // Standard initial bulk desktop count
    const [formNotes, setFormNotes] = useState('');
    const [formSuccessMessage, setFormSuccessMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Filter selectors matching second image datasheet values
    const brands = ['All', 'Lenovo', 'HP', 'Dell'];
    const cpuTypes = ['All', 'i3', 'i5', 'i7', 'Dual Core', 'Ryzen 5'];
    const generations = ['All', '2nd/3rd Gen', '4th Gen', '6th Gen', '7th Gen', '8th Gen', '9th Gen', 'AMD Ryzen 5'];
    const formFactors = ['All', 'SFF', 'MT'];

    // Dynamic filtering matching the criteria
    const filteredProducts = useMemo(() => {
        return DESKTOP_PRODUCTS.filter(item => {
            const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.cpu.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchBrand = selectedBrand === 'All' || item.brand === selectedBrand;
            
            // Match CPU type e.g. i3, i5, i7
            let matchCpu = selectedCpuType === 'All';
            if (selectedCpuType !== 'All') {
                if (selectedCpuType === 'Dual Core') {
                    matchCpu = item.cpu.toLowerCase().includes('dc');
                } else if (selectedCpuType === 'Ryzen 5') {
                    matchCpu = item.cpu.toLowerCase().includes('pro');
                } else {
                    matchCpu = item.cpu.toLowerCase().includes(selectedCpuType.toLowerCase());
                }
            }

            const matchGen = selectedGeneration === 'All' || item.generation === selectedGeneration;
            const matchForm = selectedFormFactor === 'All' || item.formFactor === selectedFormFactor;
            const matchPrice = item.corporatePrice <= maxPrice;

            return matchSearch && matchBrand && matchCpu && matchGen && matchForm && matchPrice;
        });
    }, [searchQuery, selectedBrand, selectedCpuType, selectedGeneration, selectedFormFactor, maxPrice]);

    // Comparison handling
    const toggleCompare = (productId: string) => {
        setComparedProductIds(prev => {
            if (prev.includes(productId)) {
                return prev.filter(id => id !== productId);
            }
            if (prev.length >= 4) {
                // Max 4 items compared
                return prev;
            }
            return [...prev, productId];
        });
    };

    // Calculate dynamic customized unit price
    const calculateCustomUnitPrice = (product: DesktopProduct, monitorId: string, upgradeIds: string[]) => {
        let base = product.corporatePrice;
        if (monitorId) {
            const m = CUSTOMIZE_OPTIONS.find(o => o.id === monitorId);
            if (m) base += m.price;
        }
        upgradeIds.forEach(uid => {
            const u = CUSTOMIZE_OPTIONS.find(o => o.id === uid);
            if (u) base += u.price;
        });
        return base;
    };

    // Live active product calculated price inside modal
    const liveCalculatedPrice = useMemo(() => {
        if (!activeProduct) return 0;
        return calculateCustomUnitPrice(activeProduct, modalSelectedMonitor, modalSelectedUpgrades);
    }, [activeProduct, modalSelectedMonitor, modalSelectedUpgrades]);

    // Cart Mechanics
    const addToQuoteCart = (product: DesktopProduct, monitorId?: string, upgradeIds?: string[]) => {
        const monId = monitorId || '';
        const upgIds = upgradeIds || [];
        const unitPrice = calculateCustomUnitPrice(product, monId, upgIds);

        setQuoteCart(prev => {
            // Find duplicate with same configuration
            const existing = prev.find(item => 
                item.product.id === product.id && 
                item.monitorId === monId && 
                JSON.stringify(item.selectedUpgrades.sort()) === JSON.stringify(upgIds.sort())
            );

            if (existing) {
                return prev.map(item => 
                    (item.product.id === product.id && 
                     item.monitorId === monId && 
                     JSON.stringify(item.selectedUpgrades.sort()) === JSON.stringify(upgIds.sort()))
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            return [...prev, {
                product,
                qty: 1,
                monitorId: monId,
                selectedUpgrades: upgIds,
                calculatedUnitPrice: unitPrice
            }];
        });
        setIsCartOpen(true);
    };

    const updateCartQty = (idx: number, delta: number) => {
        setQuoteCart(prev => {
            return prev.map((item, i) => {
                if (i === idx) {
                    const newQty = item.qty + delta;
                    return newQty > 0 ? { ...item, qty: newQty } : item;
                }
                return item;
            }).filter(item => item.qty > 0);
        });
    };

    const removeFromCart = (idx: number) => {
        setQuoteCart(prev => prev.filter((_, i) => i !== idx));
    };

    const cartTotalQuoteValue = useMemo(() => {
        return quoteCart.reduce((acc, item) => acc + (item.calculatedUnitPrice * item.qty), 0);
    }, [quoteCart]);

    // Dynamic Bulk Quotation Initiator
    const openBulkQuoteForm = (product: DesktopProduct | null = null) => {
        setQuoteFormTargetProduct(product);
        if (product) {
            let noteStr = `Requesting enterprise quote for Desktop: ${product.name}.`;
            if (modalSelectedMonitor) {
                const mon = CUSTOMIZE_OPTIONS.find(o => o.id === modalSelectedMonitor);
                if (mon) noteStr += `\n- Configured TFT Monitor Add-on: ${mon.name}`;
            }
            if (modalSelectedUpgrades.length > 0) {
                noteStr += `\n- Included Hardware Upgrades:`;
                modalSelectedUpgrades.forEach(uid => {
                    const u = CUSTOMIZE_OPTIONS.find(o => o.id === uid);
                    if (u) noteStr += `\n   * ${u.name}`;
                });
            }
            setFormNotes(noteStr);
        } else if (quoteCart.length > 0) {
            let notes = `Comprehensive B2B Quote request for multiple configured desktop units:\n`;
            quoteCart.forEach((item, index) => {
                notes += `${index + 1}. ${item.product.name} (Qty: ${item.qty}) - Price Each: ₹${item.calculatedUnitPrice.toLocaleString('en-IN')}`;
                if (item.monitorId) {
                    const mon = CUSTOMIZE_OPTIONS.find(o => o.id === item.monitorId);
                    if (mon) notes += `\n   + Bundle TFT Monitor: ${mon.name}`;
                }
                if (item.selectedUpgrades.length > 0) {
                    notes += `\n   + Configured Upgrades: ${item.selectedUpgrades.map(uid => CUSTOMIZE_OPTIONS.find(o => o.id === uid)?.name).join(', ')}`;
                }
                notes += `\n`;
            });
            setFormNotes(notes);
            setFormQty(quoteCart.reduce((sum, item) => sum + item.qty, 0).toString());
        } else {
            setFormNotes('');
        }
        setFormSuccessMessage(null);
        setErrors({});
        setIsQuoteFormOpen(true);
    };

    // Handle RFQ Form submit
    const handleQuoteSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!formName.trim()) newErrors.name = 'Contact name is required';
        if (!formEmail.trim() || !formEmail.includes('@')) newErrors.email = 'Valid corporate email is required';
        if (!formPhone.trim()) newErrors.phone = 'Phone number is required';
        if (!formCompany.trim()) newErrors.company = 'Company name is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const randId = Math.floor(100000 + Math.random() * 900000);
        setFormSuccessMessage(`CONFIRMED - QUOTE ID: GNJ-DK-RFQ-${randId}`);

        // Clear states
        setFormName('');
        setFormEmail('');
        setFormPhone('');
        setFormCompany('');
        setFormQty('5');
        if (!quoteFormTargetProduct) {
            setQuoteCart([]);
        }
    };

    // Open detail modal with custom resetting options
    const handleOpenDetailModal = (product: DesktopProduct) => {
        setActiveProduct(product);
        setActiveProductTab('overview');
        setActiveThumbnailIndex(0);
        // Pre-configure default monitor/upgrades
        setModalSelectedMonitor('');
        setModalSelectedUpgrades([]);
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-sans text-slate-800 pb-20 relative antialiased">
            
            {/* 1. HERO HEADER AREA - Sleek Enterprise theme consistent with site */}
            <div className="relative bg-gradient-to-r from-[#002B49] via-[#003C66] to-[#001D33] text-white py-16 px-4 md:px-8 border-b border-white/5 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 pt-6">
                    <div className="max-w-3xl space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider">
                            <Zap size={14} className="animate-pulse" /> Certified B2B Computing Catalog
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none text-white">
                            Business Desktops <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Corporate & Office Hardware</span>
                        </h1>
                        <p className="text-slate-300 text-lg font-light max-w-xl md:mx-auto lg:mx-0">
                            Procure certified, rigorous multi-point tested Small Form Factor (SFF) and MicroTower (MT) desktop PCs customized for high operational throughput.
                        </p>

                        {/* Quick corporate highlights */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-slate-300 pt-2">
                            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-amber-400" /> Active 12-Month Support SLAs</span>
                            <span className="flex items-center gap-2"><Truck size={16} className="text-amber-400" /> Standard Logistics Bulk Shipments</span>
                            <span className="flex items-center gap-2"><Settings size={16} className="text-amber-400" /> Custom System Images Installed</span>
                        </div>
                    </div>

                    {/* Quick RFQ Basket Panel */}
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-sm w-full text-center lg:text-left space-y-6 shrink-0 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-white text-md uppercase tracking-wider">Bulk RFQ Basket</h3>
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                        </div>

                        <div className="space-y-3">
                            <div className="text-sm text-slate-300">Quote Basket Items</div>
                            <div className="flex items-center gap-4 justify-center lg:justify-start">
                                <div className="text-4xl font-extrabold text-amber-400">{quoteCart.reduce((sum, item) => sum + item.qty, 0)}</div>
                                <div className="text-xs text-slate-300 leading-tight text-left">Systems loaded in your active RFQ list</div>
                            </div>
                        </div>

                        {quoteCart.length > 0 ? (
                            <div className="space-y-3 pt-2">
                                <button
                                    id="btn-trigger-cart-sidebar"
                                    onClick={() => setIsCartOpen(true)}
                                    className="w-full bg-white/10 hover:bg-white/20 transition-all text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 border border-white/20"
                                >
                                    Review Configured Items ({quoteCart.length})
                                </button>
                                <button
                                    id="btn-cart-quote-form"
                                    onClick={() => openBulkQuoteForm(null)}
                                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-sm shadow-xl hover:shadow-yellow-500/20 transition-all flex items-center justify-center gap-1.5"
                                >
                                    Request Corporate RFQ <ArrowRight size={16} />
                                </button>
                            </div>
                        ) : (
                            <div className="text-xs text-slate-400 leading-relaxed font-light py-2 text-center lg:text-left">
                                Your B2B quotation bucket is currently empty. Click <strong className="text-amber-400">"Add to Cart"</strong> on any desktop card to build custom configurations.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 2. MAIN CATALOG SPLIT CONTAINER */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* A. CUSTOM B2B FILTERS PANEL */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 sticky top-28">
                            
                            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                    <Filter size={18} className="text-blue-900" />
                                    <h4 className="font-bold text-slate-900 text-sm tracking-tight uppercase">Custom Filters</h4>
                                </div>
                                {(selectedBrand !== 'All' || selectedCpuType !== 'All' || selectedGeneration !== 'All' || selectedFormFactor !== 'All' || searchQuery !== '' || maxPrice < 30000) && (
                                    <button
                                        id="btn-clear-all-filters"
                                        onClick={() => {
                                            setSelectedBrand('All');
                                            setSelectedCpuType('All');
                                            setSelectedGeneration('All');
                                            setSelectedFormFactor('All');
                                            setSearchQuery('');
                                            setMaxPrice(30000);
                                        }}
                                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                                    >
                                        Reset All
                                    </button>
                                )}
                            </div>

                            {/* BRAND / MANUFACTURER FILTER */}
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Manufacturer / Brand</label>
                                <div className="space-y-1.5">
                                    {brands.map(b => (
                                        <button
                                            key={b}
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

                            {/* GENERATION / TIER FILTER */}
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Generation Level</label>
                                <select
                                    value={selectedGeneration}
                                    onChange={(e) => setSelectedGeneration(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 py-2.5 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
                                >
                                    {generations.map(g => (
                                        <option key={g} value={g}>{g === 'All' ? 'All Generations' : g}</option>
                                    ))}
                                </select>
                            </div>

                            {/* PROCESSOR ARCHITECTURE FILTER */}
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">CPU Family</label>
                                <div className="flex flex-wrap gap-1.5">
                                    {cpuTypes.map(cpu => (
                                        <button
                                            key={cpu}
                                            onClick={() => setSelectedCpuType(cpu)}
                                            className={`py-1.5 px-3 rounded-xl text-xs font-bold border transition-all ${selectedCpuType === cpu
                                                    ? 'bg-blue-900 text-white border-blue-900 shadow-md shadow-blue-900/10'
                                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                                                }`}
                                        >
                                            {cpu === 'All' ? 'ALL CPU' : cpu}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* FORM FACTOR FILTER */}
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Chassis Form Factor</label>
                                <div className="flex gap-2">
                                    {formFactors.map(ff => (
                                        <button
                                            key={ff}
                                            onClick={() => setSelectedFormFactor(ff)}
                                            className={`flex-1 py-2 text-center rounded-xl text-xs font-bold border transition-all ${selectedFormFactor === ff
                                                    ? 'bg-slate-900 text-white border-slate-900'
                                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                                                }`}
                                        >
                                            {ff === 'All' ? 'All' : ff}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* BUDGET SLIDER IN INR (Rupees) */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Max Corporate Price</label>
                                    <span className="text-semibold text-xs font-mono text-blue-900 bg-blue-50 px-2 py-0.5 rounded-md">
                                        ₹{maxPrice.toLocaleString('en-IN')}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="6000"
                                    max="30000"
                                    step="500"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                                    <span>₹6,000</span>
                                    <span>₹30,000</span>
                                </div>
                            </div>

                            {/* B2B Advisory notes */}
                            <div className="bg-gradient-to-tr from-slate-50 to-blue-50/40 p-4 rounded-2xl border border-blue-50 flex items-start gap-3">
                                <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                <div className="text-[11px] text-slate-500 leading-relaxed">
                                    <strong>Flexible Add-ons Enabled:</strong> Add screens, keyboard-mouse kits, storage SSD/NVMe upgrades, and network cards in real-time. Prices calculate on demand.
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* B. PRODUCT LISTINGS CATALOG VIEW */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* Search Bar / Stats caption */}
                        <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="relative w-full sm:max-w-md">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search desktops (e.g. Optiplex, i7 8th, SSD)..."
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
                                Displaying <span className="text-slate-900 font-bold">{filteredProducts.length}</span> of {DESKTOP_PRODUCTS.length} Enterprise Desktops
                            </div>
                        </div>

                        {/* DESKTOP PRODUCT GRID MATCHING IMAGE STYLE EXACTLY */}
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredProducts.map((product) => {
                                        const isCompared = comparedProductIds.includes(product.id);
                                        const discountPercent = Math.round((100 - (product.corporatePrice / product.originalPrice * 100)));

                                        return (
                                            <motion.div
                                                layout
                                                key={product.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.25 }}
                                                className="bg-white rounded-[2rem] border border-slate-200/60 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                                            >
                                                {/* Top action header badge bar */}
                                                <div className="flex items-center justify-between mb-3 relative z-10">
                                                    {/* ⇄ Compare Badge */}
                                                    <button
                                                        onClick={() => toggleCompare(product.id)}
                                                        className={`text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer ${
                                                            isCompared 
                                                                ? 'bg-blue-600 text-white' 
                                                                : 'bg-black text-white hover:bg-slate-800'
                                                        }`}
                                                    >
                                                        <span>⇄</span> {isCompared ? 'Compared' : 'Compare'}
                                                    </button>

                                                    {/* Round Seal Stamp - Edify Guaranteed */}
                                                    <div className="flex items-center justify-center relative">
                                                        <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center relative bg-slate-50">
                                                            <div className="w-8 h-8 rounded-full bg-slate-900 flex flex-col items-center justify-center text-[5px] text-white font-extrabold uppercase tracking-tight text-center leading-[6px]">
                                                                <span>Edify</span>
                                                                <span className="text-amber-400 font-bold">100%</span>
                                                            </div>
                                                        </div>
                                                        <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 rounded-full p-0.5 border border-white">
                                                            <ShieldCheck size={8} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Desktop Case Vector Image */}
                                                <div className="mb-4">
                                                    <DesktopVisual brand={product.brand} formFactor={product.formFactor} />
                                                    
                                                    {/* Slider pagination dots placeholder */}
                                                    <div className="flex justify-center items-center gap-1.5 mt-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                                    </div>
                                                </div>

                                                {/* Brand and Description Info */}
                                                <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                                                            {product.brand}
                                                        </span>
                                                        <h3 
                                                            onClick={() => handleOpenDetailModal(product)}
                                                            className="text-slate-900 font-bold text-sm leading-tight hover:text-blue-600 transition-colors cursor-pointer min-h-[36px] line-clamp-2"
                                                        >
                                                            {product.name}
                                                        </h3>

                                                        {/* Ratings and Reviews */}
                                                        <div className="flex items-center gap-1 py-1">
                                                            <div className="flex text-amber-400">
                                                                <Star size={12} fill="currentColor" />
                                                                <Star size={12} fill="currentColor" />
                                                                <Star size={12} fill="currentColor" />
                                                                <Star size={12} fill="currentColor" />
                                                                <Star size={12} fill={product.rating >= 4.5 ? 'currentColor' : 'none'} />
                                                            </div>
                                                            <span className="text-[10px] text-slate-400 font-medium font-sans">({product.reviewsCount})</span>
                                                        </div>

                                                        {/* Specifications Capsule Tags */}
                                                        <div className="flex flex-wrap gap-1.5 py-2">
                                                            {product.tags.slice(0, 3).map((tag, i) => (
                                                                <span key={i} className="bg-slate-50 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-100 uppercase tracking-tight">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Highlight Banner block e.g. Student-friendly */}
                                                    <div className="mt-2">
                                                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50/60 py-1.5 px-3 rounded-full border border-emerald-100 text-center w-full block mb-3">
                                                            {product.suitability}
                                                        </span>

                                                        {/* Pricing layout matching image */}
                                                        <div className="flex items-center justify-between pt-1 pb-2 border-t border-slate-50">
                                                            <div className="flex items-baseline gap-1.5">
                                                                <span className="text-lg font-extrabold text-[#002B49] font-mono">
                                                                    ₹{product.corporatePrice.toLocaleString('en-IN')}
                                                                </span>
                                                                <span className="text-[11px] text-slate-400 line-through font-mono">
                                                                    ₹{product.originalPrice.toLocaleString('en-IN')}
                                                                </span>
                                                            </div>
                                                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                                                                {discountPercent}% OFF
                                                            </span>
                                                        </div>

                                                        {/* SLA Warranty */}
                                                        <div className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1.5 pb-2">
                                                            <ShieldCheck size={14} className="shrink-0" />
                                                            <span>12-Month Warranty</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Add to Cart full-width CTA Button */}
                                                <button
                                                    onClick={() => addToQuoteCart(product)}
                                                    className="w-full bg-black text-white hover:bg-slate-800 active:scale-[0.98] transition-all py-3.5 rounded-2xl font-bold text-xs text-center mt-2 cursor-pointer uppercase tracking-wider"
                                                >
                                                    Add to Cart
                                                </button>

                                            </motion.div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="bg-white p-16 rounded-3xl border border-slate-100 shadow-xl text-center max-w-lg mx-auto">
                                    <Monitor size={48} className="mx-auto text-slate-300 mb-4" />
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">No Matching Systems Found</h4>
                                    <p className="text-slate-500 text-sm mb-6">
                                        We could not find any refurbished desktops fitting your active filter specifications. Refine search parameters or request a custom deployment quote.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSelectedBrand('All');
                                            setSelectedCpuType('All');
                                            setSelectedGeneration('All');
                                            setSelectedFormFactor('All');
                                            setSearchQuery('');
                                            setMaxPrice(30000);
                                        }}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition-colors"
                                    >
                                        Clear Search Matrix
                                    </button>
                                </div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
            </div>

            {/* 3. TRUST HIGHLIGHT BANNER */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24">
                <div className="bg-gradient-to-br from-[#002B49] to-slate-950 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
                        <div className="lg:col-span-2 space-y-4">
                            <span className="text-xs text-amber-400 font-bold uppercase tracking-widest block">Quality Assurance Benchmark</span>
                            <h3 className="text-2xl md:text-4xl font-bold leading-tight">Every system undergoes strict 40-step diagnostic certification procedures</h3>
                            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                                From RAM diagnostic memory burns to localized thermal sweeps, drive health monitors, capacitor scans, and clean sanitizations. Certified directly for robust business deployment.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                            <h4 className="font-bold text-sm uppercase tracking-wider text-amber-400">Request Bulk Options?</h4>
                            <p className="text-xs text-slate-300">
                                Need custom hardware deployment bundles, software loads, asset management, and specific SLA response contracts?
                            </p>
                            <button
                                onClick={() => openBulkQuoteForm(null)}
                                className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition-colors"
                            >
                                Contact Operations SLA
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. FLOATING COMPARISON BOTTOM TRAY */}
            {comparedProductIds.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 text-white py-4 px-6 z-40 shadow-2xl flex items-center justify-between">
                    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Sliders size={18} className="text-amber-400" />
                            <div className="text-xs md:text-sm">
                                <span className="font-bold text-amber-400">{comparedProductIds.length}</span> of 4 Systems selected for side-by-side comparison.
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setComparedProductIds([])}
                                className="text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
                            >
                                Clear Selection
                            </button>
                            <button
                                onClick={() => setIsCompareModalOpen(true)}
                                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-2 px-5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-400/10"
                            >
                                Compare Desktops Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 5. MODAL DETAILED POPUP + CONFIGURATOR BUILDER */}
            <AnimatePresence>
                {activeProduct && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-[2.5rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative"
                        >
                            {/* Close cross */}
                            <button
                                onClick={() => setActiveProduct(null)}
                                className="absolute right-6 top-6 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full p-2 transition-colors z-10 cursor-pointer"
                            >
                                <X size={18} />
                            </button>

                            {/* Modal Header */}
                            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    
                                    {/* Left: Dynamic Render Display & Active Thumbnail Carousel */}
                                    <div className="space-y-4">
                                        <DesktopVisual 
                                            brand={activeProduct.brand} 
                                            formFactor={activeProduct.formFactor} 
                                            selectedMonitorId={modalSelectedMonitor}
                                        />

                                        {/* Carousel Thumbnails Angles representing bundle options */}
                                        <div className="grid grid-cols-3 gap-2">
                                            <button 
                                                onClick={() => {
                                                    setActiveThumbnailIndex(0);
                                                    setModalSelectedMonitor(''); // standard PC
                                                }}
                                                className={`p-2 border rounded-xl text-center text-[10px] font-bold ${
                                                    !modalSelectedMonitor 
                                                        ? 'border-blue-600 bg-blue-50/40 text-blue-900' 
                                                        : 'border-slate-200 bg-white text-slate-600'
                                                }`}
                                            >
                                                Standard SFF
                                            </button>
                                            <button 
                                                onClick={() => {
                                                    setActiveThumbnailIndex(1);
                                                    setModalSelectedMonitor('opt-m3'); // standard 22" TFT
                                                }}
                                                className={`p-2 border rounded-xl text-center text-[10px] font-bold ${
                                                    modalSelectedMonitor === 'opt-m3' 
                                                        ? 'border-blue-600 bg-blue-50/40 text-blue-900' 
                                                        : 'border-slate-200 bg-white text-slate-600'
                                                }`}
                                            >
                                                22" Bundle
                                            </button>
                                            <button 
                                                onClick={() => {
                                                    setActiveThumbnailIndex(2);
                                                    setModalSelectedMonitor('opt-m5'); // bezelless 24"
                                                }}
                                                className={`p-2 border rounded-xl text-center text-[10px] font-bold ${
                                                    modalSelectedMonitor === 'opt-m5' 
                                                        ? 'border-blue-600 bg-blue-50/40 text-blue-900' 
                                                        : 'border-slate-200 bg-white text-slate-600'
                                                }`}
                                            >
                                                24" Bezelless
                                            </button>
                                        </div>

                                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Live Calculated Config Price</span>
                                            <div className="flex items-baseline gap-2 mt-1">
                                                <span className="text-3xl font-extrabold text-[#002B49] font-mono">
                                                    ₹{liveCalculatedPrice.toLocaleString('en-IN')}
                                                </span>
                                                <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                                                    B2B SLA Included
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: B2B Configurator and Options selections */}
                                    <div className="space-y-6">
                                        <div>
                                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{activeProduct.brand} Operations</span>
                                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mt-1">{activeProduct.name}</h2>
                                        </div>

                                        {/* INTERACTIVE CUSTOMIZER (Spreadsheet Options integrated dynamically!) */}
                                        <div className="space-y-4">
                                            {/* Category 1: TFT Monitor Selection */}
                                            <div className="space-y-2">
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Configure TFT Monitor Bundle</label>
                                                <select
                                                    value={modalSelectedMonitor}
                                                    onChange={(e) => setModalSelectedMonitor(e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                                >
                                                    <option value="">No Monitor (CPU Unit Only)</option>
                                                    {CUSTOMIZE_OPTIONS.filter(o => o.category === 'Monitor').map(mon => (
                                                        <option key={mon.id} value={mon.id}>
                                                            {mon.name} (+₹{mon.price.toLocaleString('en-IN')})
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Category 2: Hardware Upgrades */}
                                            <div className="space-y-2">
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Hardware upgrades & accessories</label>
                                                <div className="grid grid-cols-1 gap-1.5 max-h-[160px] overflow-y-auto pr-1">
                                                    {CUSTOMIZE_OPTIONS.filter(o => o.category === 'Upgrade').map(upg => {
                                                        const isChecked = modalSelectedUpgrades.includes(upg.id);
                                                        return (
                                                            <label 
                                                                key={upg.id} 
                                                                className={`flex items-center justify-between p-2 rounded-xl border text-xs cursor-pointer transition-all ${
                                                                    isChecked 
                                                                        ? 'border-blue-500 bg-blue-50/20 text-blue-900' 
                                                                        : 'border-slate-100 hover:border-slate-300'
                                                                }`}
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={isChecked}
                                                                        onChange={() => {
                                                                            setModalSelectedUpgrades(prev => 
                                                                                prev.includes(upg.id) 
                                                                                    ? prev.filter(id => id !== upg.id) 
                                                                                    : [...prev, upg.id]
                                                                            );
                                                                        }}
                                                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                                                    />
                                                                    <span>{upg.name}</span>
                                                                </div>
                                                                <span className="font-mono text-slate-500 font-medium">+₹{upg.price}</span>
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action buttons inside Modal */}
                                        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                                            <button
                                                onClick={() => openBulkQuoteForm(activeProduct)}
                                                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wide transition-colors flex items-center justify-center gap-1.5"
                                            >
                                                <FileText size={14} /> Request RFQ
                                            </button>
                                            <button
                                                onClick={() => {
                                                    addToQuoteCart(activeProduct, modalSelectedMonitor, modalSelectedUpgrades);
                                                    setActiveProduct(null);
                                                }}
                                                className="bg-black text-white hover:bg-slate-900 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wide transition-colors text-center flex items-center justify-center gap-1"
                                            >
                                                <span>Add to Basket</span>
                                            </button>
                                        </div>

                                    </div>
                                </div>

                                {/* Bottom description tabs inside Modal */}
                                <div className="border-t border-slate-200 pt-6">
                                    <div className="flex border-b border-slate-200 text-xs font-medium">
                                        <button
                                            onClick={() => setActiveProductTab('overview')}
                                            className={`py-2 px-4 border-b-2 transition-all ${
                                                activeProductTab === 'overview' 
                                                    ? 'border-blue-600 text-blue-900 font-bold' 
                                                    : 'border-transparent text-slate-500 hover:text-slate-900'
                                            }`}
                                        >
                                            Product Overview
                                        </button>
                                        <button
                                            onClick={() => setActiveProductTab('techspecs')}
                                            className={`py-2 px-4 border-b-2 transition-all ${
                                                activeProductTab === 'techspecs' 
                                                    ? 'border-blue-600 text-blue-900 font-bold' 
                                                    : 'border-transparent text-slate-500 hover:text-slate-900'
                                            }`}
                                        >
                                            Detailed Tech Specs
                                        </button>
                                        <button
                                            onClick={() => setActiveProductTab('warranty')}
                                            className={`py-2 px-4 border-b-2 transition-all ${
                                                activeProductTab === 'warranty' 
                                                    ? 'border-blue-600 text-blue-900 font-bold' 
                                                    : 'border-transparent text-slate-500 hover:text-slate-900'
                                            }`}
                                        >
                                            SLA & Support Warranty
                                        </button>
                                    </div>

                                    <div className="py-4 text-xs leading-relaxed text-slate-600">
                                        {activeProductTab === 'overview' && <p>{activeProduct.overview}</p>}
                                        {activeProductTab === 'techspecs' && (
                                            <div className="whitespace-pre-line font-mono text-[11px] bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                {activeProduct.techSpecsText}
                                            </div>
                                        )}
                                        {activeProductTab === 'warranty' && <p>{activeProduct.warrantyText}</p>}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* 6. COMPARE SIDE-BY-SIDE MODAL */}
            <AnimatePresence>
                {isCompareModalOpen && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            className="bg-white rounded-[2.5rem] shadow-2xl max-w-5xl w-full p-8 max-h-[90vh] overflow-y-auto relative"
                        >
                            <button
                                onClick={() => setIsCompareModalOpen(false)}
                                className="absolute right-6 top-6 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full p-2 transition-colors z-10"
                            >
                                <X size={18} />
                            </button>

                            <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-6">Compare Business Desktops</h2>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                                {/* Side Column: comparison titles */}
                                <div className="hidden md:flex flex-col justify-end space-y-12 pb-6 text-xs text-slate-400 font-extrabold uppercase tracking-widest">
                                    <div className="h-44 border-b border-slate-50 flex items-end pb-3">Systems Visual</div>
                                    <div className="py-2 border-b border-slate-50">Manufacturer</div>
                                    <div className="py-2 border-b border-slate-50">Generation</div>
                                    <div className="py-2 border-b border-slate-50">CPU Class</div>
                                    <div className="py-2 border-b border-slate-50">Default Memory</div>
                                    <div className="py-2 border-b border-slate-50">Default Drive</div>
                                    <div className="py-2 border-b border-slate-50">Form Factor</div>
                                    <div className="py-2 border-b border-slate-50">Corporate Price</div>
                                </div>

                                {/* Comparison cards */}
                                {comparedProductIds.map(pid => {
                                    const prod = DESKTOP_PRODUCTS.find(p => p.id === pid);
                                    if (!prod) return null;
                                    return (
                                        <div key={prod.id} className="border border-slate-150 p-4 rounded-3xl space-y-4 text-xs">
                                            {/* Header */}
                                            <div className="flex justify-between items-start">
                                                <span className="font-bold text-blue-600">{prod.brand}</span>
                                                <button
                                                    onClick={() => toggleCompare(prod.id)}
                                                    className="text-slate-400 hover:text-red-500"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                            <h3 className="font-bold text-slate-950 text-xs min-h-[32px] line-clamp-2">{prod.name}</h3>

                                            {/* Visual */}
                                            <div className="h-44 flex items-center justify-center bg-slate-50 rounded-2xl">
                                                <DesktopVisual brand={prod.brand} formFactor={prod.formFactor} />
                                            </div>

                                            {/* Comparative parameters */}
                                            <div className="space-y-2 font-medium">
                                                <div className="py-1 border-b border-slate-50 flex justify-between md:block">
                                                    <span className="md:hidden text-slate-400 text-[10px] font-bold">Manufacturer:</span>
                                                    <span>{prod.brand}</span>
                                                </div>
                                                <div className="py-1 border-b border-slate-50 flex justify-between md:block">
                                                    <span className="md:hidden text-slate-400 text-[10px] font-bold">Generation:</span>
                                                    <span>{prod.generation}</span>
                                                </div>
                                                <div className="py-1 border-b border-slate-50 flex justify-between md:block">
                                                    <span className="md:hidden text-slate-400 text-[10px] font-bold">CPU Family:</span>
                                                    <span>{prod.cpu}</span>
                                                </div>
                                                <div className="py-1 border-b border-slate-50 flex justify-between md:block">
                                                    <span className="md:hidden text-slate-400 text-[10px] font-bold">Memory:</span>
                                                    <span>{prod.ram}</span>
                                                </div>
                                                <div className="py-1 border-b border-slate-50 flex justify-between md:block">
                                                    <span className="md:hidden text-slate-400 text-[10px] font-bold">Drive:</span>
                                                    <span>{prod.storage}</span>
                                                </div>
                                                <div className="py-1 border-b border-slate-50 flex justify-between md:block">
                                                    <span className="md:hidden text-slate-400 text-[10px] font-bold">Form Factor:</span>
                                                    <span>{prod.formFactor}</span>
                                                </div>
                                                <div className="py-1 border-b border-slate-50 flex justify-between md:block font-mono text-sm font-extrabold text-[#002B49]">
                                                    <span className="md:hidden text-slate-400 text-[10px] font-bold">Price:</span>
                                                    <span>₹{prod.corporatePrice.toLocaleString('en-IN')}</span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => {
                                                    addToQuoteCart(prod);
                                                    setIsCompareModalOpen(false);
                                                }}
                                                className="w-full bg-black hover:bg-slate-900 text-white font-bold py-2 rounded-xl text-[10px] uppercase tracking-wide transition-colors"
                                            >
                                                Add configuration to Cart
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* 7. CART SIDEBAR DRAWER (Procurement list) */}
            <AnimatePresence>
                {isCartOpen && (
                    <div className="fixed inset-0 z-50 overflow-hidden">
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer" 
                            onClick={() => setIsCartOpen(false)}
                        />

                        {/* Sidebar */}
                        <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden">
                            
                            {/* Drawer Header */}
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-slate-900">
                                    <Monitor size={18} className="text-blue-600" />
                                    <h3 className="font-extrabold text-md uppercase tracking-wider">Configure B2B Request</h3>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-slate-400 hover:text-slate-600 rounded-full p-2"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Drawer list */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {quoteCart.length > 0 ? (
                                    quoteCart.map((item, index) => {
                                        const mon = item.monitorId ? CUSTOMIZE_OPTIONS.find(o => o.id === item.monitorId) : null;
                                        return (
                                            <div key={index} className="border border-slate-100 bg-slate-50/50 p-4 rounded-2xl space-y-3">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.product.brand}</span>
                                                        <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{item.product.name}</h4>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(index)}
                                                        className="text-slate-400 hover:text-red-500"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>

                                                {/* Mini configured list overview */}
                                                <div className="text-[10px] text-slate-500 space-y-0.5 bg-white p-2 rounded-lg border border-slate-100">
                                                    <div>• Base: {item.product.cpu} | {item.product.ram} | {item.product.storage}</div>
                                                    {mon && <div className="text-blue-600 font-medium">• Screen: {mon.name}</div>}
                                                    {item.selectedUpgrades.length > 0 && (
                                                        <div className="text-amber-600 font-medium">• Custom Upgrades: {item.selectedUpgrades.map(uid => CUSTOMIZE_OPTIONS.find(o => o.id === uid)?.name).join(', ')}</div>
                                                    )}
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateCartQty(index, -1)}
                                                            className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                                                        >
                                                            <Minus size={10} />
                                                        </button>
                                                        <span className="text-xs font-bold font-mono text-slate-800">{item.qty}</span>
                                                        <button
                                                            onClick={() => updateCartQty(index, 1)}
                                                            className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                                                        >
                                                            <Plus size={10} />
                                                        </button>
                                                    </div>

                                                    <div className="text-right">
                                                        <span className="block text-[8px] text-slate-400 uppercase font-bold font-sans">Corporate Subtotal</span>
                                                        <span className="font-bold font-mono text-xs text-[#002B49]">
                                                            ₹{(item.calculatedUnitPrice * item.qty).toLocaleString('en-IN')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="text-center py-16 space-y-3">
                                        <Monitor size={48} className="mx-auto text-slate-300" />
                                        <h4 className="font-bold text-slate-800 text-sm">No systems selected</h4>
                                        <p className="text-xs text-slate-400 max-w-xs mx-auto">
                                            Add business desktop configurations from the main catalog to build a dynamic volume quotation request.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Drawer Footer */}
                            <div className="p-6 border-t border-slate-100 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Quotation Total</span>
                                    <span className="text-xl font-mono font-extrabold text-[#002B49]">
                                        ₹{cartTotalQuoteValue.toLocaleString('en-IN')}
                                    </span>
                                </div>

                                <button
                                    onClick={() => {
                                        setIsCartOpen(false);
                                        openBulkQuoteForm(null);
                                    }}
                                    disabled={quoteCart.length === 0}
                                    className="w-full bg-black disabled:bg-slate-200 disabled:text-slate-400 text-white hover:bg-slate-900 active:scale-[0.98] transition-all font-bold py-3.5 rounded-2xl text-xs uppercase tracking-wider text-center"
                                >
                                    Proceed to Corporate RFQ
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* 8. BULK QUOTE / RFQ DETAILED MODAL FORM */}
            <AnimatePresence>
                {isQuoteFormOpen && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-[2.5rem] shadow-2xl max-w-lg w-full p-8 relative overflow-hidden"
                        >
                            <button
                                onClick={() => setIsQuoteFormOpen(false)}
                                className="absolute right-6 top-6 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full p-2 transition-colors cursor-pointer"
                            >
                                <X size={18} />
                            </button>

                            <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-1 flex items-center gap-2">
                                <FileText className="text-blue-600 animate-pulse" /> Corporate Quotation SLA
                            </h3>
                            <p className="text-slate-400 text-xs mb-6">
                                Submit company contact details. An executive support advisor will respond with custom pricing tiers within 2 business hours.
                            </p>

                            {formSuccessMessage ? (
                                <div className="space-y-6 text-center py-6">
                                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                                        <CheckCircle size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-slate-900 text-lg">Request Logged Successfully</h4>
                                        <p className="text-xs text-slate-500 font-mono bg-slate-50 py-3 px-4 border border-slate-100 rounded-2xl">
                                            {formSuccessMessage}
                                        </p>
                                        <p className="text-xs text-slate-400 max-w-xs mx-auto">
                                            A notification has been flagged to our Mumbai/Singapore corporate SLA divisions. Our phone sales hotline: <strong className="text-slate-900">{CONTACT_DATA.phone.displaySales}</strong>.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsQuoteFormOpen(false);
                                            setFormSuccessMessage(null);
                                        }}
                                        className="w-full bg-black text-white hover:bg-slate-900 transition-colors py-3 rounded-xl font-bold text-xs uppercase"
                                    >
                                        Close Portal
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                                    {/* Company Contact */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Contact Name</label>
                                            <input
                                                type="text"
                                                value={formName}
                                                onChange={(e) => setFormName(e.target.value)}
                                                placeholder="e.g. Rajesh Kumar"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                            />
                                            {errors.name && <span className="text-[10px] text-red-500 font-medium">{errors.name}</span>}
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Company / Enterprise</label>
                                            <input
                                                type="text"
                                                value={formCompany}
                                                onChange={(e) => setFormCompany(e.target.value)}
                                                placeholder="e.g. Infotech Private Ltd"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                            />
                                            {errors.company && <span className="text-[10px] text-red-500 font-medium">{errors.company}</span>}
                                        </div>
                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Corporate Email</label>
                                            <input
                                                type="email"
                                                value={formEmail}
                                                onChange={(e) => setFormEmail(e.target.value)}
                                                placeholder="rajesh@company.com"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                            />
                                            {errors.email && <span className="text-[10px] text-red-500 font-medium">{errors.email}</span>}
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block text-[10px] font-bold text-slate-400 uppercase">Phone / Contact</label>
                                            <input
                                                type="text"
                                                value={formPhone}
                                                onChange={(e) => setFormPhone(e.target.value)}
                                                placeholder="+91 98XXXXXX"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                            />
                                            {errors.phone && <span className="text-[10px] text-red-500 font-medium">{errors.phone}</span>}
                                        </div>
                                    </div>

                                    {/* Quantity */}
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-bold text-slate-400 uppercase">Estimated Deployment Quantity</label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="5000"
                                            value={formQty}
                                            onChange={(e) => setFormQty(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none font-mono"
                                        />
                                    </div>

                                    {/* Custom Notes */}
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-bold text-slate-400 uppercase">Config details & custom requests</label>
                                        <textarea
                                            value={formNotes}
                                            onChange={(e) => setFormNotes(e.target.value)}
                                            rows={4}
                                            placeholder="Write customized configuration specs here (e.g. WiFi dongles, Windows version loads)..."
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none leading-relaxed"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-black hover:bg-slate-900 text-white font-bold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-colors pt-2"
                                    >
                                        Request Quotation SLA
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default DesktopsPage;
