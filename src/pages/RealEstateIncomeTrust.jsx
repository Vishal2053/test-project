import "../styles/RealEstateIncomeTrust.css";
import { useState } from "react";

function RealEstateIncomeTrust(){
    const [activeClass, setActiveClass] = useState("Class I");

const data = {
  "Class I": {
    value1: "₹500Cr+",
    label1: "Strategic Value Created",
    value2: "₹250Cr+",
    label2: "Capital Deployed",
    value3: "50+",
    label3: "Investment Opportunities",
    value4: "25+",
    label4: "Portfolio Initiatives",
  },

  "Class S*": {
    value1: "₹750Cr+",
    label1: "Managed Exposure",
    value2: "₹350Cr+",
    label2: "Growth Capital",
    value3: "75+",
    label3: "Business Opportunities",
    value4: "30+",
    label4: "Strategic Partnerships",
  },

  "Class S-2": {
    value1: "₹900Cr+",
    label1: "Asset Platform",
    value2: "₹450Cr+",
    label2: "Capital Allocation",
    value3: "100+",
    label3: "Investment Solutions",
    value4: "40+",
    label4: "Active Engagements",
  },

  "Class T*": {
    value1: "₹1200Cr+",
    label1: "Total Value Platform",
    value2: "₹600Cr+",
    label2: "Strategic Deployment",
    value3: "125+",
    label3: "Growth Opportunities",
    value4: "50+",
    label4: "Market Initiatives",
  },

  "Class T-2": {
    value1: "₹1500Cr+",
    label1: "Investment Capacity",
    value2: "₹750Cr+",
    label2: "Capital Commitments",
    value3: "150+",
    label3: "Business Relationships",
    value4: "60+",
    label4: "Expansion Programs",
  },

  "Class D*": {
    value1: "₹2000Cr+",
    label1: "Platform Scale",
    value2: "₹1000Cr+",
    label2: "Capital Solutions",
    value3: "200+",
    label3: "Strategic Transactions",
    value4: "75+",
    label4: "Industry Connections",
  },

  "Class D-2": {
    value1: "₹2500Cr+",
    label1: "Enterprise Value Reach",
    value2: "₹1250Cr+",
    label2: "Investment Activity",
    value3: "250+",
    label3: "Partnership Network",
    value4: "100+",
    label4: "Long-Term Initiatives",
  },
};

return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

<div className="hero-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
Real Estate Income Trust
</h1>

<p>

Transforming spaces through strategic investments,
innovative development and long-term value creation
across evolving real estate markets.

</p>

</div>

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="/assets/images/reit.png"
            alt="real esate"
        />
    </div>
</div>



</section>

<section className="allocation-showcase">

  <div className="allocation-tabs">

    {Object.keys(data).map((item) => (
      <button
        key={item}
        className={`allocation-tab ${
          activeClass === item ? "active" : ""
        }`}
        onClick={() => setActiveClass(item)}
      >
        {item}
      </button>
    ))}

  </div>

  <div className="allocation-center">

    <h2>{data[activeClass].value1}</h2>

    <span>
      {data[activeClass].label1}
    </span>

  </div>

  <div className="allocation-bottom">

    <div className="allocation-item">
      <h3>{data[activeClass].value2}</h3>
      <p>{data[activeClass].label2}</p>
    </div>

    <div className="allocation-item">
      <h3>{data[activeClass].value3}</h3>
      <p>{data[activeClass].label3}</p>
    </div>

    <div className="allocation-item">
      <h3>{data[activeClass].value4}</h3>
      <p>{data[activeClass].label4}</p>
    </div>

  </div>

</section>


{/* WHAT WE DO */}

<section className="re-work">

<div className="section-header">

<span>WHAT WE DO</span>

<h2>
We focus on opportunities where evolving economic shifts,
changing lifestyles and long-term market trends create
strong potential for sustainable growth and value creation.</h2>

</div>



<div className="re-work-container">

{/* LEFT IMAGE */}
<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="/assets/images/financilaa.png"
            alt="real esate income trust"
        />
    </div>
</div>





{/* RIGHT CONTENT */}

<div className="re-content">

<div className="re-card">

<h3>Strategic Insight</h3>

<p>
Our broad market exposure and experience across multiple
asset categories provide deeper visibility into emerging
patterns, helping us identify investment opportunities with
greater confidence and clarity.
</p>

</div>



<div className="re-card">

<h3>Global Collaboration</h3>

<p>
Our integrated teams work together across regions and
markets, combining local understanding with a wider
perspective to evaluate opportunities more effectively.
</p>

</div>



<div className="re-card">

<h3>Strength Through Scale</h3>

<p>
Our diverse investment ecosystem and flexible capital
approach allow us to pursue opportunities across different
sectors while adapting to changing market environments.
</p>

</div>

</div>

</div>

</section>


</div>

)

}

export default RealEstateIncomeTrust;