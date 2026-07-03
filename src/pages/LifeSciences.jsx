import "../styles/LifeSciences.css";
import React, { useEffect, useState } from "react";


function MultiAsset() {
    useEffect(() => {
        const reveals = document.querySelectorAll(".blackstone-reveal");
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );
    
        reveals.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
    }, []);


     const [activeStudy, setActiveStudy] = useState("strategy");

  const studies = {
    strategy: {
      title: "Strategic Expansion",
      description:
        "Our team supported business growth initiatives by identifying opportunities, strengthening operations, and driving long-term value creation across sectors.",
      image:
        "src/assets/images/expansion.png",
    },

    transformation: {
      title: "Business Transformation",
      description:
        "Through disciplined execution and strategic planning, we helped organizations improve efficiency and unlock sustainable growth.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400",
    },

    partnerships: {
      title: "Strategic Partnerships",
      description:
        "Long-term collaborations enable businesses to access expertise, capital, and innovative solutions to accelerate success.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400",
    },
  };

  
return (

<div className="multiasset-page">


{/* =========================================
MULTI ASSET HERO
========================================= */}

<section className="multiasset-hero">

<div className="multiasset-container">


{/* LEFT CONTENT */}

<div className="multiasset-left">

<span>
MULTI ASSET INVESTING
</span>

<h1>
Diversified Strategies <br />
Built For Modern Markets
</h1>

<p>

We lead in multi-asset investing globally, channeling capital across public and private markets to unlock opportunities and deliver meaningful outcomes for our clients.

</p>


<div className="multiasset-buttons">

<a href="#" className="multiasset-btn">
Explore Strategies
</a>

</div>

</div>



{/* RIGHT IMAGE */}

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\lifescienceshero.png"
            alt="Life Sciences"
        />
    </div>

</div>

</div>
</section>

{/* =========================================
MULTI ASSET PERFORMANCE
========================================= */}

<section className="multi-performance">

<div className="multi-performance-top">

<span>
MULTI ASSET INVESTING
</span>

<h2>
Building Balanced Portfolios Across Diverse Asset Opportunities
</h2>

<p>

Quintessence Atelier develops diversified investment
strategies designed to capture growth opportunities,
manage market cycles, and create long-term value
across multiple asset classes and sectors.

</p>

</div>



<div className="multi-performance-grid">


{/* CARD 1 */}

<div className="multi-performance-card">

<div className="multi-number">
₹6,800Cr+
</div>

<h3>
Diversified Capital Strategies
</h3>

<p>

Managing investment allocations across evolving
market opportunities with disciplined portfolio planning.

</p>

</div>



{/* CARD 2 */}

<div className="multi-performance-card">

<div className="multi-number">
₹1,950Cr+
</div>

<h3>
Flexible Investment Capacity
</h3>

<p>

Adaptive investment solutions focused on stability,
growth potential, and long-term financial performance.

</p>

</div>



{/* CARD 3 */}

<div className="multi-performance-card">

<div className="multi-number">
120+
</div>

<h3>
Strategic Market Relationships
</h3>

<p>

Building trusted partnerships across institutions,
business sectors, and global investment networks.

</p>

</div>

</div>



<div className="multi-performance-note">

<p>

*Figures represent combined diversified investment
capabilities, strategic allocations, and market-focused engagements.

</p>

</div>

</section>

{/* WHAT WE DO */}

      <section className="what-we-do-section">
        <div className="what-we-do-container">

          <div className="what-we-do-label">
            <span>WHAT WE DO</span>
            <div className="label-line"></div>
          </div>

          <h2 className="what-we-do-heading">
            We collaborate with pharmaceutical, biotechnology, and medical technology companies to help address unmet healthcare needs and improve patient outcomes worldwide.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\lifesciences.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Addressing Critical Needs</h3>
                <p>
                  We believe there is a funding gap between scientific innovation and patient access, and we work with leading healthcare companies to help advance promising products through development. </p>
              </div>

              <div className="content-block">
                <h3>Expertise and Scal</h3>
                <p>
                  We foster an environment where ambitious individuals
                  can grow, innovate, and build meaningful careers while
                  contributing to long-term success.
                </p>
              </div>

              <div className="content-block">
                <h3>Pursuing Attractive Risk-Adjusted Returns</h3>
                <p>
                  We partner with businesses by providing strategic insight,
                  operational expertise, and the resources needed to unlock
                  sustainable growth.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================
CASE STUDIES
===================================== */}

<section className="case-studies">

  <div className="case-heading">

    <span>CASE STUDIES</span>

    <h2>
      Delivering meaningful outcomes through collaboration,
      strategic execution and long-term thinking.
    </h2>

  </div>

  <div className="case-tabs">

    <button
      className={activeStudy === "strategy" ? "active" : ""}
      onClick={() => setActiveStudy("strategy")}
    >
      Strategic Expansion
    </button>

    <button
      className={activeStudy === "transformation" ? "active" : ""}
      onClick={() => setActiveStudy("transformation")}
    >
      Transformation
    </button>

    <button
      className={activeStudy === "partnerships" ? "active" : ""}
      onClick={() => setActiveStudy("partnerships")}
    >
      Partnerships
    </button>

  </div>

  <div className="case-content">

    <div className="case-left">

      <h3>{studies[activeStudy].title}</h3>

      <p>{studies[activeStudy].description}</p>

      <a href="/" className="case-link">
        Read More
        <span>→</span>
      </a>

    </div>

    <div className="case-right" key={activeStudy}>

  <div className="hero-image-wrap">
    <div className="hero-image-overlay"></div>

    <img
      src={studies[activeStudy].image}
      alt={studies[activeStudy].title}
      className="case-image"
    />
  </div>

</div>
  </div>
</section>

  {/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
          “Behind every successful outcome is a combination of insight, discipline, and a relentless pursuit of excellence.”
          </h2>
        </div>
      </section>

    
</div>

);

}

export default MultiAsset;