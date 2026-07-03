import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Client from "./pages/Client";
import Outcomes from "./pages/Outcomes";
import Shareholders from "./pages/Shareholders";
import Career from "./pages/Career";
import Investors from "./pages/Investors";
import AccessingPrivateMarkets from "./pages/AccessingPrivateMarkets";
import AllocatingPrivateAssets from "./pages/AllocatingPrivateAssets";
import Credit from "./pages/Credit";
import EnergyTransitionPartners from "./pages/EnergyTransitionPartners";
import EssentialsPrivateMarkets from "./pages/EssentialsPrivateMarkets";
import Familyoffice from "./pages/Familyoffice";
import GlobalPrivateEquity from "./pages/GlobalPrivateEquity";
import Growth from "./pages/Growth";
import Infrastructure from "./pages/Infrastructure";
import Insurers from "./pages/Insurers";
import MultiAssetCreditFund from "./pages/MultiAssetCreditFund";
import MultiAssetInvesting from "./pages/MultiAssetInvesting";
import OperatingTeam from "./pages/OperatingTeam";
import PracticeManagementResources from "./pages/PracticeManagementResources";
import Privatecredit from "./pages/Privatecredit";
import PrivateCreditFund from "./pages/PrivateCreditFund";
import PrivateEquity from "./pages/PrivateEquity";
import Privateinfrastruct from "./pages/Privateinfrastruct";
import PrivaterealE from "./pages/PrivaterealE";
import PrivateWealth from "./pages/PrivateWealth";
import RealEstate from "./pages/RealEstate";
import RealEstateIncomeTrust from "./pages/RealEstateIncomeTrust";
import StrategicPartners from "./pages/StrategicPartners";
import TacticalOpportunities from "./pages/TacticalOpportunities";
import TechnologyInnovation from "./pages/TechnologyInnovation";
import Overview from "./pages/Overview";
import FinancialAdvisors from "./pages/FinancialAdvisors";
import EPMOverview from "./pages/EPMOverview";
import LifeSciences from "./pages/LifeSciences";
import PrivateEquity01 from "./pages/privateEquity01";






function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Outcomes" element={<Outcomes />} />
        <Route path="/Shareholders" element={<Shareholders />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Investors" element={<Investors />} />
        <Route path="/AccessingPrivateMarkets" element={<AccessingPrivateMarkets/>}/>
        <Route path="/AllocatingPrivateAssets" element={<AllocatingPrivateAssets/>}/>
        <Route path="/Credit" element={<Credit/>}/>
        <Route path="/EnergyTransitionPartners" element={<EnergyTransitionPartners />}/>
        <Route path="/EssentialsPrivateMarkets" element={<EssentialsPrivateMarkets/>}/>
        <Route path="/Familyoffice" element={<Familyoffice />} />
        <Route path="/global-private-equity" element={<GlobalPrivateEquity/>}/>
        <Route path="/growth" element={<Growth/>}/>
        <Route path="/infrastructure" element={<Infrastructure/>}/>
        <Route path="/insurers" element={<Insurers/>}/>
        <Route path="/multi-asset-credit-fund" element={<MultiAssetCreditFund/>}/>
        <Route path="/multi-asset-investing" element={<MultiAssetInvesting/>}/>
        <Route path="/operating-team" element={<OperatingTeam/>}/>
        <Route path="/practice-management-resources" element={<PracticeManagementResources/>}/>
        <Route path="/private-credit" element={<Privatecredit/>}/>
        <Route path="/private-credit-fund" element={<PrivateCreditFund/>}/>
        <Route path="/private-equity" element={<PrivateEquity/>}/>
        <Route path="/private-infrastructure" element={<Privateinfrastruct/>}/>
        <Route path="/private-real-estate" element={<PrivaterealE/>}/>
        <Route path="/private-wealth" element={<PrivateWealth/>}/>
        <Route path="/real-estate" element={<RealEstate/>}/>
        <Route path="/real-estate-income-trust" element={<RealEstateIncomeTrust/>}/>
        <Route path="/strategic-partners" element={<StrategicPartners/>}/>
        <Route path="/tactical-opportunities" element={<TacticalOpportunities/>}/>
        <Route path="/technology-innovation" element={<TechnologyInnovation/>}/>
        <Route path="/Overview" element={<Overview/>}/>
        <Route path="/FinancialAdvisors" element={<FinancialAdvisors/>}/>
        <Route path="/EPMOverview" element={<EPMOverview/>}/>
        <Route path="/LifeSciences" element={<LifeSciences/>}/>
        <Route path="/PrivateEquity01" element={<PrivateEquity01/>}/>


      </Routes>
 
      <Footer /> {/* 👈 Footer added here */}
    </Router>
  );
}

export default App;
