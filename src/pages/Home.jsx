import Hero from "../components/Hero";
import "../styles/Home.css";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";


import security from "../assets/images/financialsecurity01.png";
import career from "../assets/images/career01.png";
import business from "../assets/images/business01.png";


function Home() {
  
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal-image");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        {
            threshold:0.25
        }
    );

    reveals.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
}, []);
  return (
    <div>

      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
<section className="about-preview">

  <div className="about-container">

    {/* Left Content */}
    <div className="about-content">

      <span className="section-tag">WHO WE ARE</span>

      <h2 className="section-title">
        About Quintessence Atelier
      </h2>

      <p className="section-text">
        Quintessence Atelier is a forward-thinking investment and advisory
        platform dedicated to building enduring value through strategic
        partnerships, disciplined execution, and long-term vision.
      </p>

      <p className="section-text">
        We combine market intelligence, operational expertise, and innovative
        thinking to identify opportunities that generate sustainable growth
        across diverse sectors.
      </p>

      <Link to="/About">
        <button className="primary-btn">
          Learn More
        </button>
      </Link>

    </div>

    <div className="aum-box">

  <h2>₹500Cr+</h2>

  <h4>Strategic Value Created</h4>

  {/* <p>
    Reflecting our commitment to long-term growth,
    strategic partnerships and value-driven investments
    across diverse sectors.
  </p> */}

  <span>
    Figures shown for illustrative branding purposes and
    represent the scale of opportunities pursued by
    Quintessence Atelier.
  </span>

</div>

  </div>

</section>

      {/* images section */}
<section className="value-section">
  <div className="value-container">

    {/* Card 1 */}
    <div className="value-card">

      <div className="card-img">
    <div className="image-animation reveal-image">
    <div className="white-wipe"></div>

    <div className="image-reveal">
        <img src={security} alt="Financial Security" />
    </div>
</div>

    <h3>Build financial security</h3>
</div>

      <div className="card-text">
        <p>
          We seek to deliver outstanding performance for institutional and individual
          investors by stewarding their capital with integrity and conviction.
        </p>

        <a href="/private-wealth" className="learn-link">
          Learn More →
        </a>
      </div>

    </div>


    {/* Card 2 */}
    <div className="value-card">

<div className="card-img">
   <div className="image-animation reveal-image">
    <div className="white-wipe"></div>

    <div className="image-reveal">
        <img src={career} alt="Career Growth" />
    </div>
</div>

    <h3>Build your career</h3>
</div>
      

      <div className="card-text">
        <p>
          We offer an environment where exceptional talent can build lasting careers.
          Our team works at the forefront of emerging trends and industry innovation.
        </p>

        <a href="/Career" className="learn-link">
          Learn More →
        </a>
      </div>

    </div>


    {/* Card 3 */}
    <div className="value-card">


      
<div className="card-img">
    <div className="image-animation reveal-image">
    <div className="white-wipe"></div>

    <div className="image-reveal">
        <img src={business} alt="Strong Businesses" />
    </div>
</div>

    <h3>Build strong businesses</h3>
</div>
      
      

      <div className="card-text">
        <p>
          We equip businesses with the tools and capabilities they need to grow,
          innovate, and achieve long-term sustainable success.
        </p>

        <a href="/strategic-partners" className="learn-link">
          Learn More →
        </a>
      </div>

    </div>

  </div>
</section>

{/* verdina a0*/}
 <section className="wealth-section">

      <div className="wealth-container">

        {/* LEFT CONTENT */}

        <div className="wealth-left">

          <div className="wealth-tag">
            PRIVATE WEALTH
            <span className="tag-line"></span>
          </div>

          <h2>
            Institutional quality <br />
            for individual <br />
            investors
          </h2>

          <p>
            Quintessence Atelier Private Wealth partners with financial advisors to help
            drive performance for their clients. Our perpetual solutions are
            built to bring institutional quality investments to individuals,
            encompassing all private asset classes.
          </p>

          <a href="/" className="wealth-btn">
            Learn More
            <span className="circle-arrow">→</span>
          </a>

        </div>

        {/* RIGHT CARD */}

        <div className="wealth-right">
  <div className="wealth-card-item">
    <span>Quintessence Atelier Real Estate Income Trust</span>
    <Link to="/real-estate-income-trust" className="arrow"> → </Link>
  </div>

  <div className="divider"></div>
  <div className="wealth-card-item">
    <span>Quintessence Atelier Private Credit Fund</span>

    <Link to="/private-credit-fund" className="arrow">
      →
    </Link>
  </div>

  <div className="divider"></div>
  <div className="wealth-card-item">
    <span>Quintessence Atelier Private Multi-Asset Credit and Income Fund</span>

    <Link
      to="/multi-asset-credit-fund"
      className="arrow"
    >
      →
    </Link>
  </div>

</div>
      </div>


      {/* BOTTOM ANIMATED TEXT */}

      <div className="scroll-text">
        <div className="scroll-track">
          Build wealth with Quintessence Atelier&nbsp;&nbsp;&nbsp;
          Build wealth with Quintessence Atelier &nbsp;&nbsp;&nbsp;
          Build wealth with Quintessence Atelier
        </div>
      </div>

    </section>

   <section className="insights">

    <div className="insights-inner">

        <div className="insights-top">
            <span>LATEST INSIGHTS</span>
        </div>

        <div className="insights-content">

            <div className="insights-left">
                <h2>
                    Quintessence Atelier Releases
                    2026 Market Outlook
                </h2>

                <p>Analysis</p>
            </div>

            <div className="insights-right">

                <a href="/">View Full Report →</a>

                <div className="downloads">
                    <a href="/">Download PDF</a>
                    <span>|</span>
                    <a href="/">Download Presentation</a>
                </div>

                <a href="/">Read Executive Summary</a>

            </div>

        </div>

    </div>

</section>

      
      

     

      {/* ✅ CONTACT FORM (Footer च्या वर) */}
<ContactForm />

    </div>
  );
}


export default Home;