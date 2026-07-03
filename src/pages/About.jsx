import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">



{/* HERO SECTION */}

<section className="about-hero">

    <div className="hero-wrapper">

        <div className="hero-text">

            <span className="hero-label">
                ABOUT THE FIRM
            </span>

            <h1>
                About <br/>
                Quintessence Atelier
            </h1>

            <p>
                Quintessence Atelier combines strategic thinking,
                market expertise and forward-looking financial
                solutions designed to create long-term value and
                sustainable opportunities across evolving markets.
            </p>

            <div className="hero-cta">

                <a href="/shareholders" className="hero-btn-primary">
                    Explore
                </a>

                <a href="/contact" className="hero-btn-outline">
                    Contact Us
                </a>

            </div>

        </div>


        <div className="hero-image">

            <div className="hero-image-overlay"></div>

            <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400"
                alt="About Quintessence Atelier"
            />

        </div>

    </div>

</section>

      {/* Company Overview */}    
      {/* Mission & Vision */}
<section className="mission-vision">

  <div className="mv-card mission">

    <div className="mv-image"></div>

    <div className="mv-content">
      <h2>Our Mission</h2>
      <p>
        To empower businesses and institutions through strategic capital,
        insightful advisory, and disciplined execution that drives measurable,
        sustainable value.
      </p>
    </div>
  </div>


  <div className="mv-card vision">
    <div className="mv-image"></div>
    <div className="mv-content">
      <h2>Our Vision</h2>
      <p>
        To be a trusted global partner recognized for excellence,
        innovation, and integrity in every engagement.
      </p>
    </div>

  </div>

</section>

{/* =========================================
FAQ NAVIGATION
========================================= */}

<section className="faq-navigation">

<div className="faq-heading">

<span>FREQUENTLY ASKED QUESTIONS</span>

<h2>
Explore Our Investment
Capabilities
</h2>

</div>



<div className="faq-list">

<Link to="/private-equity" className="faq-row">

<div className="faq-left">

<h3>What is Private Equity Investing?</h3>

<p>
Learn how long-term capital partnerships help
businesses scale and create value.
</p>

</div>

<div className="faq-arrow">
↗
</div>

</Link>



<Link to="/real-estate" className="faq-row">

<div className="faq-left">

<h3>How Does Real Estate Investing Create Value?</h3>

<p>
Explore our approach to acquiring, developing and
managing real estate opportunities.
</p>

</div>

<div className="faq-arrow">
↗
</div>

</Link>



<Link to="/credit" className="faq-row">

<div className="faq-left">

<h3>What Credit Solutions Do We Provide?</h3>

<p>
Understand how flexible financing strategies support
business growth and expansion.
</p>

</div>

<div className="faq-arrow">
↗
</div>

</Link>



<Link to="/multi-asset-investing" className="faq-row">

<div className="faq-left">

<h3>Why Consider Multi-Asset Investing?</h3>

<p>
Discover diversified strategies designed to balance
growth opportunities and risk management.
</p>

</div>

<div className="faq-arrow">
↗
</div>

</Link>



<Link to="/strategic-partners" className="faq-row">

<div className="faq-left">

<h3>How Do Strategic Partnerships Create Value?</h3>

<p>
See how collaboration and long-term alignment
help businesses achieve sustainable growth.
</p>

</div>

<div className="faq-arrow">
↗
</div>

</Link>



<Link to="/outcomes" className="faq-row">

<div className="faq-left">

<h3>How Do We Measure Impact & Outcomes?</h3>

<p>
Learn how we focus on opportunity, development
and long-term positive outcomes.
</p>

</div>

<div className="faq-arrow">
↗
</div>

</Link>

</div>

</section>

      {/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
            “Excellence is never achieved alone — it is built through collaboration,
            discipline, and shared vision.”
          </h2>
        </div>
      </section>

      

    </div>
  );
}

export default About;