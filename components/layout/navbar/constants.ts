
import { MenuItem } from '../../../types';
export const NAV_ITEMS: MenuItem[] = [
  {
    title: "About",
    href: "/about",
    megaMenu: {
      columns: [
        {
          title: "Company",
          items: [
            { title: "About Company", href: "/about" },
            { title: "Mission", href: "/about/mission" },
            // { title: "Leadership", href: "/about/leadership" },
            { title: "Our Team", href: "/about/team" },
            // { title: "Portfolio", href: "/portfolio" },
            { title: "Client Reviews", href: "/reviews" },
            { title: "Partners", href: "/partners" },
            { title: "Locations", href: "/locations" }
          ]
        },
        {
          title: "Join Us",
          items: [
            { title: "Careers", href: "/careers" },
            { title: "How We Hire", href: "/careers/hiring" },
          ]
        }
      ]
    }
  },
  {
    title: "Services",
    href: "/services",
    megaMenu: {
      columns: [
        {
          title: "Software Engineering",
          items: [
            { title: "Software Development", href: "/services/software-development" },
            { title: "Web Development", href: "/services/web-development" },
            { title: "Mobile Development", href: "/services/mobile-development" },
            { title: "Desktop Development", href: "/services/desktop-development" },
            { title: "API Development", href: "/services/api-development" },
            { title: "Database Development", href: "/services/database-development" },
            // { title: "Software Modernization", href: "/services/software-modernization" },
          ]
        },
        {
          title: "Strategy & Advisory",
          items: [
            { title: "IT Consulting", href: "/services/it-consulting" },
            { title: "Digital Transformation", href: "/services/digital-transformation" },
            { title: "Software Consulting", href: "/services/software-consulting" },
            { title: "IT Project Management", href: "/services/it-project-management" },
            { title: "Google Consulting", href: "/services/google-consulting" },
            { title: "DevOps Consulting", href: "/services/devops-consulting" },
            { title: "Microsoft Consulting", href: "/services/microsoft-consulting" },
            { title: "ServiceNow Consulting", href: "/services/servicenow-consulting" },
            { title: "Zoho Consulting", href: "/services/zoho-consulting" }
          ]
        },
        {
          title: "Data & Intelligence",
          items: [
            { title: "Data Analytics", href: "/services/data-analytics" },
            { title: "Data Warehousing", href: "/services/data-warehousing" },
            { title: "Business Intelligence", href: "/services/business-intelligence" },
            { title: "Data Science", href: "/services/data-science" },
            { title: "Machine Learning", href: "/services/machine-learning" },
            { title: "Artificial Intelligence", href: "/services/artificial-intelligence" }
          ]
        },
        {
          title: "Operations & Support",
          items: [
            { title: "IT Outsourcing", href: "/services/it-outsourcing" },
            { title: "Managed IT Services", href: "/services/managed-it-services" },
            { title: "Infrastructure Services", href: "/services/infrastructure-services" },
            { title: "IT Support", href: "/services/it-support" },
            { title: "IT Help Desk", href: "/services/it-help-desk" },
            { title: "Application Services", href: "/services/application-services" },
            { title: "Application Maintenance", href: "/services/application-maintenance" },
            { title: "Testing and QA", href: "/services/testing-and-qa" }
          ]
        },
        {
          title: "Security",
          items: [
            { title: "Cybersecurity", href: "/services/cybersecurity" },
            { title: "Compliance Services", href: "/services/compliance-services" },
            { title: "Security Testing", href: "/services/security-testing" },
            { title: "Penetration Testing", href: "/services/penetration-testing" },
            { title: "SIEM Services", href: "/services/siem-services" }
          ]
        }
      ]
    }
  },
  {
    title: "Industries",
    href: "/industries",
    megaMenu: {
      columns: [
        {
          title: "Healthcare",
          items: [
            { title: "Healthcare IT Services", href: "/industries/healthcare-it" },
            { title: "Hospitals & Health Systems", href: "/industries/hospitals" },
            { title: "Medical Devices & Diagnostics", href: "/industries/medical-devices" },
            { title: "Mental Health Care Providers", href: "/industries/mental-health" },
            { title: "Home Healthcare Providers", href: "/industries/home-healthcare" },
            { title: "Medical Laboratories", href: "/industries/medical-labs" }
          ]
        },
        {
          title: "", // Spacer for alignment
          items: [
            { title: "Contract Research Organizations", href: "/industries/cro" },
            { title: "Biotech & Pharma", href: "/industries/biotech-pharma" },
            { title: "Healthcare Payers", href: "/industries/payers" },
            { title: "Healthcare Software Companies", href: "/industries/healthcare-software" },
            { title: "Digital Health Startups", href: "/industries/digital-health" },
            { title: "Public Health Agencies & NGOs", href: "/industries/public-health" },
            { title: "Fitness & Wellness Companies", href: "/industries/fitness-wellness" }
          ]
        },
        {
          title: "Finance",
          items: [
            { title: "Financial Services", href: "/industries/financial-services" },
            { title: "Banking", href: "/industries/banking" },
            { title: "Insurance", href: "/industries/insurance" },
            { title: "Investment", href: "/industries/investment" },
            { title: "Lending", href: "/industries/lending" },
            { title: "FinTech", href: "/industries/fintech" },
            { title: "Payments", href: "/industries/payments" }
          ]
        },
        {
          title: "Other Industries",
          items: [
            { title: "Manufacturing", href: "/industries/manufacturing" },
            { title: "Retail", href: "/industries/retail" },
            { title: "Transportation & Logistics", href: "/industries/logistics" },
            { title: "Oil & Gas", href: "/industries/oil-gas" },
            { title: "Professional Services", href: "/industries/professional-services" },
            { title: "Education", href: "/industries/education" },
            { title: "Government", href: "/industries/government" }
          ]
        },
        {
          title: "", // Spacer for alignment
          items: [
            { title: "Telecommunications", href: "/industries/telecom" },
            { title: "Real Estate", href: "/industries/real-estate" },
            { title: "Construction", href: "/industries/construction" },
            { title: "Travel & Hospitality", href: "/industries/travel" },
            { title: "Agriculture", href: "/industries/agriculture" }, 
          ]
        }
      ]
    }
  },
  {
    title: "Solutions",
    href: "/solutions",
    megaMenu: {
      columns: [
        {
          title: "Operations & SCM",
          items: [
            { title: "ERP", href: "/solutions/erp" },
            { title: "Operations Management", href: "/solutions/operations" },
            { title: "Supply Chain Management", href: "/solutions/scm" },
            { title: "Warehouse Management", href: "/solutions/wms" },
            { title: "Enterprise Asset Management", href: "/solutions/eam" },
            { title: "Vendor Management", href: "/solutions/vendor" },
            { title: "Project Management", href: "/solutions/project-mgmt" },
            { title: "Document Management", href: "/solutions/dms" }
          ]
        },
        {
          groups: [
            {
              title: "Corporate Finance",
              items: [
                { title: "Financial Management", href: "/solutions/finance" },
                { title: "Payment Management", href: "/solutions/payment" },
                { title: "Accounting Software", href: "/solutions/accounting" }
              ]
            },
            {
              title: "Analytics & AI",
              items: [
                { title: "Data Analytics", href: "/solutions/analytics" },
                { title: "AI Software", href: "/solutions/ai" }
              ]
            }
          ]
        },
        {
          title: "Customer Experience",
          items: [
            { title: "CRM", href: "/solutions/crm" },
            { title: "Ecommerce", href: "/solutions/ecommerce" },
            { title: "Content Management", href: "/solutions/cms" },
            { title: "Marketing & Advertising", href: "/solutions/marketing" },
            { title: "Kiosk Software", href: "/solutions/kiosk" }
          ]
        },
        {
          groups: [
            {
              title: "Portals & Digital Workplace",
              items: [
                { title: "Web Portals", href: "/solutions/portals" },
                { title: "Intranets", href: "/solutions/intranets" }
              ]
            },
            {
              title: "HR & Learning",
              items: [
                { title: "Human Resources", href: "/solutions/hr" },
                { title: "eLearning", href: "/solutions/elearning" }
              ]
            }
          ]
        },
        {
          title: "",
          items: []
        }
      ]
    }
  },
  {
    title: "Technologies",
    href: "/technologies",
    megaMenu: {
      columns: [
        {
          items: [
            { title: "Artificial Intelligence", href: "/technologies/artificial-intelligence" },
            { title: "Data Science", href: "/technologies/data-science" },
            { title: "Machine Learning", href: "/technologies/machine-learning" },
            { title: "Image Analysis", href: "/technologies/image-analysis" },
            { title: "Blockchain", href: "/technologies/blockchain" },
            { title: "Big Data", href: "/technologies/big-data" },
            { title: "Internet of Things", href: "/technologies/iot" },
            { title: "Virtual Reality", href: "/technologies/vr" },
            { title: "Augmented Reality", href: "/technologies/ar" },
            { title: "Cloud", href: "/technologies/cloud" },
            { title: "Software as a Service (SaaS)", href: "/technologies/saas" }
          ]
        },
        {
          title: "Use technology",
          items: [
            { title: ".NET", href: "/technologies/dotnet" },
            { title: "Java", href: "/technologies/java" },
            { title: "Python", href: "/technologies/python" },
            { title: "PHP", href: "/technologies/php" },
            { title: "Golang", href: "/technologies/golang" },
            { title: "C++", href: "/technologies/cpp" },
            { title: "Node.js", href: "/technologies/nodejs" },
            { title: "JavaScript", href: "/technologies/javascript" },
            { title: "React Native", href: "/technologies/react-native" },
            { title: "Mobile", href: "/technologies/mobile" }
          ]
        },
        {
          title: "Microsoft",
          items: [
            { title: "Azure", href: "/technologies/azure" },
            { title: "Power Apps", href: "/technologies/power-apps" },
            { title: "Dynamics 365", href: "/technologies/dynamics-365" },
            { title: "SharePoint and Microsoft 365", href: "/technologies/sharepoint" },
            { title: "Power BI", href: "/technologies/power-bi" }
          ]
        },
        {
          title: "Amazon",
          items: [
            { title: "Amazon Web Services", href: "/technologies/aws" },
            { title: "Adobe Commerce", href: "/technologies/adobe-commerce" },
            { title: "ServiceNow®", href: "/technologies/servicenow" },
            { title: "Salesforce", href: "/technologies/salesforce" },
            { title: "Pimcore", href: "/technologies/pimcore" },
            { title: "All technologies", href: "/technologies/all" }
          ]
        },

      ]
    }
  },
  {
    title: "Hardware",
    href: "/hardware",
    megaMenu: {
      columns: [
        {
          title: "Personal Computing",
          items: [
            { title: "Desktops", href: "/hardware/desktops" },
            { title: "Laptops", href: "/hardware/laptops" },
            { title: "Workstations", href: "/hardware/workstations" }
          ]
        },
        {
          title: "Infrastructure & Network",
          items: [
            { title: "Servers & Storage", href: "/hardware/servers" },
            { title: "Networking", href: "/hardware/networking" },
            { title: "Firewalls", href: "/hardware/firewalls" },
            { title: "CCTV", href: "/hardware/cctv" }
          ]
        },
        {
          title: "Printing & Accessories",
          items: [
            { title: "Printers", href: "/hardware/printers" },
            { title: "Cartridges", href: "/hardware/cartridges" },
            { title: "Accessories", href: "/hardware/accessories" }
          ]
        },
        {
          title: "Brands We Partner With",
          items: [
            { title: "Dell Technologies", href: "/hardware/brand/dell" },
            { title: "HP Enterprise", href: "/hardware/brand/hp" },
            { title: "Lenovo", href: "/hardware/brand/lenovo" },
            { title: "Cisco", href: "/hardware/brand/cisco" },
            { title: "TP Link", href: "/hardware/brand/tplink" }
          ]
        }
      ]
    }
  },
  
];
