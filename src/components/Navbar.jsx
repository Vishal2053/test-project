import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/Quintessence atelier.jpg";


function Navbar() {

const [openMenu,setOpenMenu] = useState(null);
const [mobileMenu,setMobileMenu] = useState(false);

const navRef = useRef(null);

const location = useLocation();

/* Close menu when page changes */

useEffect(()=>{

const timer = setTimeout(() => {
setOpenMenu(null);
setMobileMenu(false);
}, 0);

return () => clearTimeout(timer);

},[location]);


useEffect(()=>{

function handleOutside(e){

if(navRef.current && !navRef.current.contains(e.target)){

setOpenMenu(null);

}

}

document.addEventListener("mousedown",handleOutside);

return ()=>document.removeEventListener(
"mousedown",
handleOutside
);

},[]);

return(

<nav className="navbar" ref={navRef}>

<div className="nav-container">

<div className="logo">
   <Link to="/">
      <img src={logo} alt="logo"/>
   </Link>
</div>

<div
className="menu-toggle"
onClick={()=>setMobileMenu(!mobileMenu)}
>
☰
</div>

<ul className={`nav-menu ${mobileMenu ? "active" : ""}`}>

<li>

<span onClick={()=>setOpenMenu(
openMenu==="firm"?null:"firm"
)}>
The Firm ▾
</span>

</li>

 {/* <li>
<Link to="/about">About</Link>
</li>  */}

<li>
<span onClick={()=>setOpenMenu(
openMenu==="services"?null:"services"
)}>
What We Do ▾
</span>
</li>


<li>
<span onClick={()=>setOpenMenu(
openMenu==="news"?null:"news"
)}>
News & Insights ▾
</span>
</li>

 <li>
<Link to="">Financial Advisors</Link>
</li>  
{/* <li>
<span onClick={()=>setOpenMenu(
openMenu==="Advisors"?null:"Advisors"
)}>
Financial Advisors▾
</span>
</li> */}

<li>
<Link to="/shareholders">Shareholders</Link>
</li>

<li>
<Link to="/contact">Contact</Link>
</li>

</ul>

</div>

{/* MEGA MENUS OUTSIDE CONTAINER */}

{openMenu==="firm" && (

<div className="mega-menu">

<div className="mega-inner">

<div className="mega-column">

<h4>About Firm</h4>
<Link to="/Overview">Overview</Link>
<Link to="/team">Our People</Link>
<Link to="/outcomes">Our Impact</Link>
{/* <Link to="/client">Our Clients</Link> */}
<Link to="/career">Careers</Link>

</div>

<div className="mega-column">

<h4>Our Clients</h4>

<Link to="/Investors">Institutional Investors</Link>
<Link to="/FinancialAdvisors">Financial Advisors</Link>
<Link to="/Familyoffice">Family Offices</Link>
<Link to="/insurers">Insurers</Link>

</div>

</div>

</div>

)}

{openMenu==="services" && (

<div className="mega-menu">

<div className="mega-inner">

<div className="mega-column">

<h4>Businesses</h4>

<Link to="/private-equity">Private Equity</Link>
<Link to="/real-estate">Real Estate</Link>
<Link to="/Credit">Credit</Link>
<Link to="/multi-asset-investing">Multi-Asset Investing</Link>
<Link to="/strategic-partners">Strategic Partners</Link>


</div>

<div className="mega-column">

<h4></h4>

<Link to="/tactical-opportunities">Tactical Opportunities</Link>
<Link to="/infrastructure"> Infrastructure</Link>
<Link to="/LifeSciences"> Life Sciences</Link>
<Link to="/growth"> Growth </Link>
<Link to="/EnergyTransitionPartners">Energy Transition Project</Link>

</div>

<div className="mega-column">

<h4>Transformation</h4>
<Link to="/technology-innovation">Technology & Innovation</Link>
{/* <Link to="/operating-team">Operating Team</Link> */}
</div>

<div className="mega-column">

{/* <h4>Products</h4>

<Link to="/real-estate-income-trust">Real Estate Income Trust</Link>
<Link to="/private-credit-fund">Private Credit Fund</Link>
<Link to="/multi-asset-credit-fund">Multi-Asset Credit Fund</Link> */}

</div>

</div>

</div>

)}

{openMenu==="news" && (

<div className="mega-menu">

<div className="mega-inner">

<div className="mega-column">

<h4>News & Insights</h4>

<Link to="/">Market Views</Link>

</div>



<div className="mega-column">
<h4>Essential Of Private Markets</h4> 
<Link to="/EPMOverview">Overview</Link>
<Link to="/privateEquity01">Private Equity</Link>
<Link to="/private-credit">Private Credit</Link>
<Link to="/private-real-estate">Private Real Estate</Link>
<Link to="/private-infrastructure">Private Infrastructure</Link>
</div>

</div>

</div>

)}

{openMenu==="Advisors" && (

<div className="mega-menu">

<div className="mega-inner">

<div className="mega-column">

<h4>Traning & Accelaration program</h4>

<Link to="/EPMOverview">Essentials of Private Markets</Link>
<Link to="/AccessingPrivateMarkets">Accessing Private Markets</Link>
<Link to="/AllocatingPrivateAssets">Allocating to Private Assets</Link>
<Link to="/practice-management-resources">Practice Management Resources</Link>

</div>

{/* <div className="mega-column">
<h4>Strategies</h4>

<Link to="/global-private-equity">Global Private Equity</Link>
<Link to="/institutional-solutions">Institutional Solutions</Link>
<Link to="/family-office">Family Office Services</Link>
<Link to="/global-investments">Global Investments</Link>

</div> */}

<div className="mega-column">

<h4><Link to="/private-wealth">Private Wealth</Link></h4>
{/* <Link to="/research">Research & Reports</Link>
<Link to="/economic-outlook">Economic Outlook</Link>
<Link to="/industry-trends">Industry Trends</Link> */}

</div>

</div>

</div>

)}
</nav>

);

}

export default Navbar;
