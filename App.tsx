
import React, { useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import Contact from './components/pages/Contact';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/pages/auth/LoginPage';
import SignupPage from './components/pages/auth/SignupPage';
import ForgotPasswordPage from './components/pages/auth/ForgotPasswordPage';

// Individual Top-Level Pages
import AboutPage from './components/megamenu/aboutdata/AboutPage';
import ServicesPage from './components/megamenu/servicesdata/ServicesPage';
import IndustriesPage from './components/megamenu/industrydata/IndustriesPage';
import SolutionsPage from './components/megamenu/solutiondata/SolutionsPage';
import TechnologiesPage from './components/megamenu/technologydata/TechnologiesPage';

// Hardware Pages - Computing
import HardwarePage from './components/megamenu/hardware/HardwarePage';
import DesktopsPage from './components/megamenu/hardware/computing/DesktopsPage';
import LaptopsPage from './components/megamenu/hardware/computing/LaptopsPage';
import WorkstationsPage from './components/megamenu/hardware/computing/WorkstationsPage';

// Hardware Pages - Infrastructure & Others
import ServersPage from './components/megamenu/hardware/infra/ServersPage';
import NetworkingPage from './components/megamenu/hardware/infra/NetworkingPage';
import FirewallsPage from './components/megamenu/hardware/infra/FirewallsPage';
import CctvPage from './components/megamenu/hardware/infra/CctvPage';
import PrintersPage from './components/megamenu/hardware/printing/PrintersPage';
import CartridgesPage from './components/megamenu/hardware/printing/CartridgesPage';
import AccessoriesPage from './components/megamenu/hardware/printing/AccessoriesPage';

// Hardware Pages - Brands
import DellPage from './components/megamenu/hardware/brand/DellPage';
import HpPage from './components/megamenu/hardware/brand/HpPage';
import LenovoPage from './components/megamenu/hardware/brand/LenovoPage';
import CiscoPage from './components/megamenu/hardware/brand/CiscoPage';
import TpLinkPage from './components/megamenu/hardware/brand/TpLinkPage';

import ComingSoonPage from './components/pages/ComingSoonPage';

// Specific Mega Menu Pages (Services - Software Engineering)
import SoftwareDevelopmentPage from './components/megamenu/servicesdata/software/SoftwareDevelopmentPage';
import WebDevelopmentPage from './components/megamenu/servicesdata/software/WebDevelopmentPage';
import MobileDevelopmentPage from './components/megamenu/servicesdata/software/MobileDevelopmentPage';
import DesktopDevelopmentPage from './components/megamenu/servicesdata/software/DesktopDevelopmentPage';
import ApiDevelopmentPage from './components/megamenu/servicesdata/software/ApiDevelopmentPage';
import DatabaseDevelopmentPage from './components/megamenu/servicesdata/software/DatabaseDevelopmentPage';
import DiscoveryPage from './components/megamenu/servicesdata/software/DiscoveryPage';

// Specific Mega Menu Pages (Services - Strategy & Advisory)
import ItConsultingPage from './components/megamenu/servicesdata/advisory/ItConsultingPage';
import DigitalTransformationPage from './components/megamenu/servicesdata/advisory/DigitalTransformationPage';
import SoftwareConsultingPage from './components/megamenu/servicesdata/advisory/SoftwareConsultingPage';
import ItProjectManagementPage from './components/megamenu/servicesdata/advisory/ItProjectManagementPage';
import GoogleConsultingPage from './components/megamenu/servicesdata/advisory/GoogleConsultingPage';
import DevOpsConsultingPage from './components/megamenu/servicesdata/advisory/DevOpsConsultingPage';
import MicrosoftConsultingPage from './components/megamenu/servicesdata/advisory/MicrosoftConsultingPage';
import ServiceNowConsultingPage from './components/megamenu/servicesdata/advisory/ServiceNowConsultingPage';
import ZohoConsultingPage from './components/megamenu/servicesdata/advisory/ZohoConsultingPage';

// Specific Mega Menu Pages (Services - Data & Intelligence)
import DataAnalyticsPage from './components/megamenu/servicesdata/data/DataAnalyticsPage';
import DataWarehousingPage from './components/megamenu/servicesdata/data/DataWarehousingPage';
import BusinessIntelligencePage from './components/megamenu/servicesdata/data/BusinessIntelligencePage';
import DataSciencePage from './components/megamenu/servicesdata/data/DataSciencePage';
import MachineLearningPage from './components/megamenu/servicesdata/data/MachineLearningPage';
import ArtificialIntelligencePage from './components/megamenu/servicesdata/data/ArtificialIntelligencePage';

// Specific Mega Menu Pages (Services - Operations & Support)
import ItOutsourcingPage from './components/megamenu/servicesdata/operations/ItOutsourcingPage';
import ManagedItServicesPage from './components/megamenu/servicesdata/operations/ManagedItServicesPage';
import InfrastructureServicesPage from './components/megamenu/servicesdata/operations/InfrastructureServicesPage';
import ItSupportPage from './components/megamenu/servicesdata/operations/ItSupportPage';
import ItHelpDeskPage from './components/megamenu/servicesdata/operations/ItHelpDeskPage';
import ApplicationServicesPage from './components/megamenu/servicesdata/operations/ApplicationServicesPage';
import ApplicationMaintenancePage from './components/megamenu/servicesdata/operations/ApplicationMaintenancePage';
import TestingAndQaPage from './components/megamenu/servicesdata/operations/TestingAndQaPage';

// Specific Mega Menu Pages (Services - Security)
import CybersecurityPage from './components/megamenu/servicesdata/security/CybersecurityPage';
import ComplianceServicesPage from './components/megamenu/servicesdata/security/ComplianceServicesPage';
import SecurityTestingPage from './components/megamenu/servicesdata/security/SecurityTestingPage';
import PenetrationTestingPage from './components/megamenu/servicesdata/security/PenetrationTestingPage';
import SiemServicesPage from './components/megamenu/servicesdata/security/SiemServicesPage';

// Specific Mega Menu Pages (Industries - Healthcare)
import HealthcareItPage from './components/megamenu/industrydata/healthcare/HealthcareItPage';
import HospitalsPage from './components/megamenu/industrydata/healthcare/HospitalsPage';
import MedicalDevicesPage from './components/megamenu/industrydata/healthcare/MedicalDevicesPage';
import MentalHealthPage from './components/megamenu/industrydata/healthcare/MentalHealthPage';
import HomeHealthcarePage from './components/megamenu/industrydata/healthcare/HomeHealthcarePage';
import MedicalLabsPage from './components/megamenu/industrydata/healthcare/MedicalLabsPage';
import CroPage from './components/megamenu/industrydata/healthcare/CroPage';
import BiotechPharmaPage from './components/megamenu/industrydata/healthcare/BiotechPharmaPage';
import PayersPage from './components/megamenu/industrydata/healthcare/PayersPage';
import HealthcareSoftwarePage from './components/megamenu/industrydata/healthcare/HealthcareSoftwarePage';
import DigitalHealthPage from './components/megamenu/industrydata/healthcare/DigitalHealthPage';
import PublicHealthPage from './components/megamenu/industrydata/healthcare/PublicHealthPage';
import FitnessWellnessPage from './components/megamenu/industrydata/healthcare/FitnessWellnessPage';

// Specific Mega Menu Pages (Industries - Finance)
import FinancialServicesPage from './components/megamenu/industrydata/finance/FinancialServicesPage';
import BankingPage from './components/megamenu/industrydata/finance/BankingPage';
import InsurancePage from './components/megamenu/industrydata/finance/InsurancePage';
import InvestmentPage from './components/megamenu/industrydata/finance/InvestmentPage';
import LendingPage from './components/megamenu/industrydata/finance/LendingPage';
import FinTechPage from './components/megamenu/industrydata/finance/FinTechPage';
import PaymentsPage from './components/megamenu/industrydata/finance/PaymentsPage';

// Specific Mega Menu Pages (Industries - Other)
import ManufacturingPage from './components/megamenu/industrydata/other/ManufacturingPage';
import RetailPage from './components/megamenu/industrydata/other/RetailPage';
import LogisticsPage from './components/megamenu/industrydata/other/LogisticsPage';
import OilGasPage from './components/megamenu/industrydata/other/OilGasPage';
import ProfessionalServicesPage from './components/megamenu/industrydata/other/ProfessionalServicesPage';
import TelecomPage from './components/megamenu/industrydata/other/TelecomPage';
import RealEstatePage from './components/megamenu/industrydata/other/RealEstatePage';
import ConstructionPage from './components/megamenu/industrydata/other/ConstructionPage';
import TravelPage from './components/megamenu/industrydata/other/TravelPage';

// Solutions - Operations
import ErpPage from './components/megamenu/solutiondata/operation/ErpPage';
import OperationsManagementPage from './components/megamenu/solutiondata/operation/OperationsManagementPage';
import ScmPage from './components/megamenu/solutiondata/operation/ScmPage';
import WmsPage from './components/megamenu/solutiondata/operation/WmsPage';
import EamPage from './components/megamenu/solutiondata/operation/EamPage';
import VendorManagementPage from './components/megamenu/solutiondata/operation/VendorManagementPage';
import ProjectManagementSolutionPage from './components/megamenu/solutiondata/operation/ProjectManagementPage';
import DmsPage from './components/megamenu/solutiondata/operation/DmsPage';

// Solutions - Corporate & Analytics
import FinancialManagementPage from './components/megamenu/solutiondata/corporate/FinancialManagementPage';
import PaymentManagementPage from './components/megamenu/solutiondata/corporate/PaymentManagementPage';
import AccountingSoftwarePage from './components/megamenu/solutiondata/corporate/AccountingSoftwarePage';
import DataAnalyticsSolutionPage from './components/megamenu/solutiondata/analytics/DataAnalyticsSolutionPage';
import AiSoftwareSolutionPage from './components/megamenu/solutiondata/analytics/AiSoftwareSolutionPage';

// Solutions - Customer Experience
import CrmPage from './components/megamenu/solutiondata/customer/CrmPage';
import EcommercePage from './components/megamenu/solutiondata/customer/EcommercePage';
import CmsPage from './components/megamenu/solutiondata/customer/CmsPage';
import MarketingPage from './components/megamenu/solutiondata/customer/MarketingPage';
import KioskPage from './components/megamenu/solutiondata/customer/KioskPage';

// Solutions - Portals & Digital Workplace
import WebPortalsPage from './components/megamenu/solutiondata/portal/WebPortalsPage';
import IntranetsPage from './components/megamenu/solutiondata/portal/IntranetsPage';

// Solutions - HR & Learning
import HumanResourcesPage from './components/megamenu/solutiondata/learning/HumanResourcesPage';
import ElearningPage from './components/megamenu/solutiondata/learning/ElearningPage';

// Technologies (Overview & Emerging)
import TechArtificialIntelligencePage from './components/megamenu/technologydata/ArtificialIntelligencePage';
import TechDataSciencePage from './components/megamenu/technologydata/DataSciencePage';
import TechMachineLearningPage from './components/megamenu/technologydata/MachineLearningPage';
import TechImageAnalysisPage from './components/megamenu/technologydata/ImageAnalysisPage';
import TechBlockchainPage from './components/megamenu/technologydata/BlockchainPage';
import TechBigDataPage from './components/megamenu/technologydata/BigDataPage';
import TechInternetOfThingsPage from './components/megamenu/technologydata/InternetOfThingsPage';
import TechVirtualRealityPage from './components/megamenu/technologydata/VirtualRealityPage';
import TechAugmentedRealityPage from './components/megamenu/technologydata/AugmentedRealityPage';
import TechCloudPage from './components/megamenu/technologydata/CloudPage';
import TechSaasPage from './components/megamenu/technologydata/SaasPage';

// Technologies (Use Tech - Languages & Frameworks)
import TechDotNetPage from './components/megamenu/technologydata/usetech/DotNetPage';
import TechJavaPage from './components/megamenu/technologydata/usetech/JavaPage';
import TechPythonPage from './components/megamenu/technologydata/usetech/PythonPage';
import TechPhpPage from './components/megamenu/technologydata/usetech/PhpPage';
import TechGolangPage from './components/megamenu/technologydata/usetech/GolangPage';
import TechCppPage from './components/megamenu/technologydata/usetech/CppPage';
import TechNodeJsPage from './components/megamenu/technologydata/usetech/NodeJsPage';
import TechJavaScriptPage from './components/megamenu/technologydata/usetech/JavaScriptPage';
import TechReactNativePage from './components/megamenu/technologydata/usetech/ReactNativePage';
import TechMobilePage from './components/megamenu/technologydata/usetech/MobileTechPage';

// Technologies (Microsoft)
import TechAzurePage from './components/megamenu/technologydata/microsoft/AzurePage';
import TechPowerAppsPage from './components/megamenu/technologydata/microsoft/PowerAppsPage';
import TechDynamics365Page from './components/megamenu/technologydata/microsoft/Dynamics365Page';
import TechSharePointPage from './components/megamenu/technologydata/microsoft/SharePointPage';
import TechPowerBiPage from './components/megamenu/technologydata/microsoft/PowerBiPage';

// Technologies (Amazon/Partners)
import TechAwsPage from './components/megamenu/technologydata/amazon/AwsPage';
import TechAdobeCommercePage from './components/megamenu/technologydata/amazon/AdobeCommercePage';
import TechServiceNowPage from './components/megamenu/technologydata/amazon/ServiceNowPage';
import TechSalesforcePage from './components/megamenu/technologydata/amazon/SalesforcePage';
import TechPimcorePage from './components/megamenu/technologydata/amazon/PimcorePage';

// New About Section Pages
import MissionPage from './components/megamenu/aboutdata/MissionPage';
import LeadershipPage from './components/megamenu/aboutdata/LeadershipPage';
import TeamPage from './components/megamenu/aboutdata/TeamPage';
import PortfolioPage from './components/megamenu/aboutdata/PortfolioPage';
import ReviewsPage from './components/megamenu/aboutdata/ReviewsPage';
import PartnersPage from './components/megamenu/aboutdata/PartnersPage';
import LocationsPage from './components/megamenu/aboutdata/LocationsPage';
import CareersPage from './components/megamenu/aboutdata/CareersPage';
import HiringPage from './components/megamenu/aboutdata/HiringPage';

const AppContent: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle legacy hash-based routing by redirecting to clean paths
    if (window.location.hash.startsWith('#/')) {
      const path = window.location.hash.substring(2);
      navigate(`/${path}`, { replace: true });
    }
  }, [navigate]);

  // Route matching logic
  let component = <HomePage />;

  switch (pathname) {
    case '/':
      component = <HomePage />;
      break;
    case '/contact':
      component = <div className="pt-20"><Contact /></div>;
      break;
    case '/login':
      component = <div className="pt-20"><LoginPage /></div>;
      break;
    case '/signup':
      component = <div className="pt-20"><SignupPage /></div>;
      break;
    case '/forgot-password':
      component = <div className="pt-20"><ForgotPasswordPage /></div>;
      break;
    case '/about':
      component = <AboutPage />;
      break;
    case '/services':
      component = <ServicesPage />;
      break;
    case '/industries':
      component = <IndustriesPage />;
      break;
    case '/solutions':
      component = <SolutionsPage />;
      break;
    case '/technologies':
      component = <TechnologiesPage />;
      break;
    
    // Hardware
    case '/hardware': component = <HardwarePage />; break;
    case '/hardware/desktops': component = <ComingSoonPage />; break;
    case '/hardware/laptops': component = <ComingSoonPage />; break;
    case '/hardware/workstations': component = <ComingSoonPage />; break;
    case '/hardware/servers': component = <ComingSoonPage />; break;
    case '/hardware/networking': component = <ComingSoonPage />; break;
    case '/hardware/firewalls': component = <ComingSoonPage />; break;
    case '/hardware/cctv': component = <ComingSoonPage />; break;
    case '/hardware/printers': component = <ComingSoonPage />; break;
    case '/hardware/cartridges': component = <ComingSoonPage />; break;
    case '/hardware/accessories': component = <ComingSoonPage />; break;
    
    // Hardware Brands
    case '/hardware/brand/dell': component = <ComingSoonPage />; break;
    case '/hardware/brand/hp': component = <ComingSoonPage />; break;
    case '/hardware/brand/lenovo': component = <ComingSoonPage />; break;
    case '/hardware/brand/cisco': component = <ComingSoonPage />; break;
    case '/hardware/brand/tplink': component = <ComingSoonPage />; break;
    
    // Services - Software
    case '/services/software-development': component = <SoftwareDevelopmentPage />; break;
    case '/services/web-development': component = <WebDevelopmentPage />; break;
    case '/services/mobile-development': component = <MobileDevelopmentPage />; break;
    case '/services/desktop-development': component = <DesktopDevelopmentPage />; break;
    case '/services/api-development': component = <ApiDevelopmentPage />; break;
    case '/services/database-development': component = <DatabaseDevelopmentPage />; break;
    case '/services/software-development/discovery': component = <DiscoveryPage />; break;
    
    // Services - Strategy & Advisory
    case '/services/it-consulting': component = <ItConsultingPage />; break;
    case '/services/digital-transformation': component = <DigitalTransformationPage />; break;
    case '/services/software-consulting': component = <SoftwareConsultingPage />; break;
    case '/services/it-project-management': component = <ItProjectManagementPage />; break;
    case '/services/agile-consulting': component = <GoogleConsultingPage />; break;
    case '/services/google-consulting': component = <GoogleConsultingPage />; break;
    case '/services/devops-consulting': component = <DevOpsConsultingPage />; break;
    case '/services/microsoft-consulting': component = <MicrosoftConsultingPage />; break;
    case '/services/servicenow-consulting': component = <ServiceNowConsultingPage />; break;
    case '/services/zoho-consulting': component = <ZohoConsultingPage />; break;

    // Services - Data & Intelligence
    case '/services/data-analytics': component = <DataAnalyticsPage />; break;
    case '/services/data-warehousing': component = <DataWarehousingPage />; break;
    case '/services/business-intelligence': component = <BusinessIntelligencePage />; break;
    case '/services/data-science': component = <DataSciencePage />; break;
    case '/services/machine-learning': component = <MachineLearningPage />; break;
    case '/services/artificial-intelligence': component = <ArtificialIntelligencePage />; break;

    // Services - Operations & Support
    case '/services/it-outsourcing': component = <ItOutsourcingPage />; break;
    case '/services/managed-it-services': component = <ManagedItServicesPage />; break;
    case '/services/infrastructure-services': component = <InfrastructureServicesPage />; break;
    case '/services/it-support': component = <ItSupportPage />; break;
    case '/services/it-help-desk': component = <ItHelpDeskPage />; break;
    case '/services/application-services': component = <ApplicationServicesPage />; break;
    case '/services/application-maintenance': component = <ApplicationMaintenancePage />; break;
    case '/services/testing-and-qa': component = <TestingAndQaPage />; break;

    // Services - Security
    case '/services/cybersecurity': component = <CybersecurityPage />; break;
    case '/services/compliance-services': component = <ComplianceServicesPage />; break;
    case '/services/security-testing': component = <SecurityTestingPage />; break;
    case '/services/penetration-testing': component = <PenetrationTestingPage />; break;
    case '/services/siem-services': component = <SiemServicesPage />; break;

    // Industries - Healthcare
    case '/industries/healthcare-it': component = <HealthcareItPage />; break;
    case '/industries/hospitals': component = <HospitalsPage />; break;
    case '/industries/medical-devices': component = <MedicalDevicesPage />; break;
    case '/industries/mental-health': component = <MentalHealthPage />; break;
    case '/industries/home-healthcare': component = <HomeHealthcarePage />; break;
    case '/industries/medical-labs': component = <MedicalLabsPage />; break;
    case '/industries/cro': component = <CroPage />; break;
    case '/industries/biotech-pharma': component = <BiotechPharmaPage />; break;
    case '/industries/payers': component = <PayersPage />; break;
    case '/industries/healthcare-software': component = <HealthcareSoftwarePage />; break;
    case '/industries/digital-health': component = <DigitalHealthPage />; break;
    case '/industries/public-health': component = <PublicHealthPage />; break;
    case '/industries/fitness-wellness': component = <FitnessWellnessPage />; break;

    // Industries - Finance
    case '/industries/financial-services': component = <FinancialServicesPage />; break;
    case '/industries/banking': component = <BankingPage />; break;
    case '/industries/insurance': component = <InsurancePage />; break;
    case '/industries/investment': component = <InvestmentPage />; break;
    case '/industries/lending': component = <LendingPage />; break;
    case '/industries/fintech': component = <FinTechPage />; break;
    case '/industries/payments': component = <PaymentsPage />; break;

    // Industries - Other
    case '/industries/manufacturing': component = <ManufacturingPage />; break;
    case '/industries/retail': component = <RetailPage />; break;
    case '/industries/logistics': component = <LogisticsPage />; break;
    case '/industries/oil-gas': component = <OilGasPage />; break;
    case '/industries/professional-services': component = <ProfessionalServicesPage />; break;
    case '/industries/telecom': component = <TelecomPage />; break;
    case '/industries/real-estate': component = <RealEstatePage />; break;
    case '/industries/construction': component = <ConstructionPage />; break;
    case '/industries/travel': component = <TravelPage />; break;
    case '/industries/education': component = <ComingSoonPage />; break;
    case '/industries/government': component = <ComingSoonPage />; break;
    case '/industries/media': component = <ComingSoonPage />; break;
    case '/industries/agriculture': component = <ComingSoonPage />; break;
    case '/industries/legal': component = <ComingSoonPage />; break;
    case '/industries/non-profit': component = <ComingSoonPage />; break;
    case '/industries/automotive': component = <ComingSoonPage />; break;

    // Solutions - Operations
    case '/solutions/erp': component = <ErpPage />; break;
    case '/solutions/operations': component = <OperationsManagementPage />; break;
    case '/solutions/scm': component = <ScmPage />; break;
    case '/solutions/wms': component = <WmsPage />; break;
    case '/solutions/eam': component = <EamPage />; break;
    case '/solutions/vendor': component = <VendorManagementPage />; break;
    case '/solutions/project-mgmt': component = <ProjectManagementSolutionPage />; break;
    case '/solutions/dms': component = <DmsPage />; break;

    // Solutions - Corporate & Analytics
    case '/solutions/finance': component = <FinancialManagementPage />; break;
    case '/solutions/payment': component = <PaymentManagementPage />; break;
    case '/solutions/accounting': component = <AccountingSoftwarePage />; break;
    case '/solutions/analytics': component = <DataAnalyticsSolutionPage />; break;
    case '/solutions/ai': component = <AiSoftwareSolutionPage />; break;

    // Solutions - Customer Experience
    case '/solutions/crm': component = <CrmPage />; break;
    case '/solutions/ecommerce': component = <EcommercePage />; break;
    case '/solutions/cms': component = <CmsPage />; break;
    case '/solutions/marketing': component = <MarketingPage />; break;
    case '/solutions/kiosk': component = <KioskPage />; break;

    // Solutions - Portals & Digital Workplace
    case '/solutions/portals': component = <WebPortalsPage />; break;
    case '/solutions/intranets': component = <IntranetsPage />; break;

    // Solutions - HR & Learning
    case '/solutions/hr': component = <HumanResourcesPage />; break;
    case '/solutions/elearning': component = <ElearningPage />; break;

    // Technologies (Overview)
    case '/technologies/artificial-intelligence': component = <TechArtificialIntelligencePage />; break;
    case '/technologies/data-science': component = <TechDataSciencePage />; break;
    case '/technologies/machine-learning': component = <TechMachineLearningPage />; break;
    case '/technologies/image-analysis': component = <TechImageAnalysisPage />; break;
    case '/technologies/blockchain': component = <TechBlockchainPage />; break;
    case '/technologies/big-data': component = <TechBigDataPage />; break;
    case '/technologies/iot': component = <TechInternetOfThingsPage />; break;
    case '/technologies/vr': component = <TechVirtualRealityPage />; break;
    case '/technologies/ar': component = <TechAugmentedRealityPage />; break;
    case '/technologies/cloud': component = <TechCloudPage />; break;
    case '/technologies/saas': component = <TechSaasPage />; break;

    // Technologies (Use Tech)
    case '/technologies/dotnet': component = <TechDotNetPage />; break;
    case '/technologies/java': component = <TechJavaPage />; break;
    case '/technologies/python': component = <TechPythonPage />; break;
    case '/technologies/php': component = <TechPhpPage />; break;
    case '/technologies/golang': component = <TechGolangPage />; break;
    case '/technologies/cpp': component = <TechCppPage />; break;
    case '/technologies/nodejs': component = <TechNodeJsPage />; break;
    case '/technologies/javascript': component = <TechJavaScriptPage />; break;
    case '/technologies/react-native': component = <TechReactNativePage />; break;
    case '/technologies/mobile': component = <TechMobilePage />; break;

    // Technologies (Microsoft)
    case '/technologies/azure': component = <TechAzurePage />; break;
    case '/technologies/power-apps': component = <TechPowerAppsPage />; break;
    case '/technologies/dynamics-365': component = <TechDynamics365Page />; break;
    case '/technologies/sharepoint': component = <TechSharePointPage />; break;
    case '/technologies/power-bi': component = <TechPowerBiPage />; break;

    // Technologies (Amazon/Partners)
    case '/technologies/aws': component = <TechAwsPage />; break;
    case '/technologies/adobe-commerce': component = <TechAdobeCommercePage />; break;
    case '/technologies/servicenow': component = <TechServiceNowPage />; break;
    case '/technologies/salesforce': component = <TechSalesforcePage />; break;
    case '/technologies/pimcore': component = <TechPimcorePage />; break;

    // About
    case '/about/mission': component = <MissionPage />; break;
    case '/about/leadership': component = <LeadershipPage />; break;
    case '/about/team': component = <TeamPage />; break;
    case '/portfolio': component = <PortfolioPage />; break;
    case '/reviews': component = <ReviewsPage />; break;
    case '/partners': component = <PartnersPage />; break;
    case '/locations': component = <LocationsPage />; break;
    case '/careers': component = <CareersPage />; break;
    case '/careers/hiring': component = <HiringPage />; break;

    default:
      component = <HomePage />; // Default to Home or 404
      break;
  }

  return (
    <Layout>
      {component}
    </Layout>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Block right click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Block keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S, Ctrl+P, Ctrl+C
      if (e.ctrlKey || e.metaKey) {
        if (e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
          e.preventDefault();
        }
        if (['U', 'S', 'P', 'C', 'u', 's', 'p', 'c'].includes(e.key)) {
          e.preventDefault();
        }
      }
    };

    // Block drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    // Disable text selection via CSS on body
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
