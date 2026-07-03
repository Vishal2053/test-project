import "../styles/RealEstate.css";
import React, { useEffect, useState } from "react";


function RealEstate(){

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

return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

<div className="hero-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
Real Estate
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
            src="src/assets/images/real estate.jpg"
            alt="real esate"
        />
    </div>
</div>



</section>

{/* =========================================
REAL ESTATE PERFORMANCE
========================================= */}

<section className="pe-performance">

<div className="pe-performance-top">

<span>REAL ESTATE PLATFORM</span>

<h2>
Real Estate Investment <br />
Performance Overview
</h2>

<p>

Creating long-term real estate value through
strategic acquisitions, modern developments
and disciplined investment execution across
high-growth opportunities.

</p>

</div>



<div className="pe-performance-grid">


{/* CARD 1 */}

<div className="pe-performance-card">

<div className="pe-number">
₹26,250+
</div>

<h3>
Cr Capital Managed
</h3>

<p>

Diversified real estate investment strategies
focused on sustainable growth and asset value creation.

</p>

</div>



{/* CARD 2 */}

<div className="pe-performance-card">

<div className="pe-number">
₹51,400+
</div>

<h3>
Cr Portfolio Value
</h3>

<p>

Large-scale residential, commercial and
mixed-use real estate assets across key markets.

</p>

</div>



{/* CARD 3 */}

<div className="pe-performance-card">

<div className="pe-number">
85+
</div>

<h3>
Active Development Projects
</h3>

<p>

Strategic investment and development projects
driving long-term operational and financial growth.

</p>

</div>

</div>



<div className="pe-performance-note">

<p>

*Figures shown represent overall platform activity,
investment capabilities and real estate development operations.

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
           We invest with a thematic approach in high-quality assets, focusing on opportunities supported by long-term economic and demographic trends with strong growth potential.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\realewhat we do.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Conviction</h3>
                <p>
                  Our extensive portfolio provides valuable insights across major real estate sectors and markets worldwide, enabling us to identify emerging themes and deploy capital with confidence.
                </p>
              </div>

              <div className="content-block">
                <h3>Connectivity</h3>
                <p>
                  Our people are our greatest strength. With a globally connected team of real estate professionals working as one integrated platform, we evaluate opportunities through a unified investment approach that considers both potential and risk.
                </p>
              </div>

              <div className="content-block">
                <h3>Scale</h3>
                <p>
                  The scale of our platform is a key advantage. The diversity of our portfolio offers unique perspectives across industries and regions, while our substantial capital resources allow us to pursue large and complex investment opportunities.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


<section className="strategy-section">

    <div className="strategy-container">

        {/* Header */}

        <div className="strategy-label">
            <span>OUR INVESTMENT STRATEGIES</span>
        </div>

        <div className="strategy-header">

            <div className="strategy-left">

                <h2>
                    We identify opportunities,
                    build long-term partnerships
                    and create sustainable value
                    across diverse sectors.
                </h2>

            </div>

            <div className="strategy-right">

                <p>
                    Through disciplined investment practices
                    and strategic guidance, we support businesses
                    with practical solutions designed to deliver
                    resilience and long-term growth.
                </p>

            </div>

        </div>


        {/* Cards */}

        <div className="strategy-grid">

            <div className="strategy-card">

                <h3>Growth Capital</h3>

                <p>
                    We partner with ambitious businesses,
                    providing capital and strategic expertise
                    to accelerate expansion and unlock
                    long-term opportunities.
                </p>

            </div>


            <div className="strategy-card">

                <h3>Operational Excellence</h3>

                <p>
                    Working alongside leadership teams,
                    we help optimize operations, improve
                    efficiency and strengthen competitive
                    positioning.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}

            </div>


            <div className="strategy-card">

                <h3>Strategic Advisory</h3>

                <p>
                    We deliver practical guidance and
                    market insight to support businesses
                    through changing environments while
                    preserving long-term value.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}

            </div>

        </div>

    </div>

</section>


{/* ==========================
PRIVATE REAL ESTATE CTA
========================== */}

<section className="pre-cta">

    <div className="pre-container">

        <div className="pre-label">
            <span>LEARN MORE ABOUT PRIVATE REAL ESTATE INVESTING</span>
        </div>

        <div className="pre-content">

            {/* IMAGE */}

            <div className="pre-image">

                <img
                    src="src\assets\images\essentials.png"
                    alt="Private Real Estate"
                />

            </div>


            {/* CONTENT */}

            <div className="pre-text">

                <h2>
                    Essentials of Private
                    Real Estate
                </h2>

                <p>
                    Gain an understanding of the potential benefits
                    and considerations of private real estate,
                    including inflation hedging and lower volatility
                    relative to public markets.
                </p>

                <a href="/real-estate-guide">

                    Learn More

                    <span>→</span>

                </a>

            </div>

        </div>

    </div>

</section>


{/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
          "Real estate cannot be lost or stolen, nor can it be carried away. Managed with common sense, it is about the safest investment in the world."
          </h2>
        </div>
      </section>
</div>

)

}

export default RealEstate;