import "../styles/TacticalOpportunities.css";
import React, { useEffect, useState } from "react";


function Tacticalopportunities(){

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
Tactical Opportunities
</h1>

<p>

We deploy capital strategically, act with speed and precision, and provide distinctive solutions that set us apart in the market.

</p>

</div>

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\tactical.png"
            alt="Tactical opporoootunities"
        />
    </div>
</div>


</section>

{/* =========================================
TACTICAL OPPORTUNITIES PERFORMANCE
========================================= */}

<section className="pe-performance">

<div className="pe-performance-top">

<span>TACTICAL OPPORTUNITIES</span>

<h2>
Flexible Investment Strategies <br />
Across Emerging Opportunities
</h2>

<p>

Delivering dynamic investment solutions through
opportunistic capital deployment, strategic market
positioning and disciplined execution across
high-potential sectors and evolving industries.

</p>

</div>



<div className="pe-performance-grid">


{/* CARD 1 */}

<div className="pe-performance-card">

<div className="pe-number">
₹2,750Cr+
</div>

<h3>
Capital Strategically Allocated
</h3>

<p>

Focused investments across evolving sectors,
special situations and high-growth market opportunities.

</p>

</div>



{/* CARD 2 */}

<div className="pe-performance-card">

<div className="pe-number">
190+
</div>

<h3>
Strategic Investment Engagements
</h3>

<p>

Diversified opportunities supported through
adaptive investment planning and market expertise.

</p>

</div>



{/* CARD 3 */}

<div className="pe-performance-card">

<div className="pe-number">
100+
</div>

<h3>
Global Investment Specialists
</h3>

<p>

Experienced professionals driving research,
execution and long-term strategic value creation.

</p>

</div>

</div>



<div className="pe-performance-note">

<p>

*Figures shown represent strategic investment activity,
market capabilities and diversified opportunity engagements.

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
            We deploy flexible capital strategies to build differentiated portfolios designed to create long-term value for our investors.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\tactical1.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Flexible Approach</h3>
                <p>
                  Our investment strategy is not limited by asset class, industry, sector, security type, or geographic region, allowing us to pursue opportunities wherever we find compelling value.
                </p>
              </div>

              <div className="content-block">
                <h3>Agility</h3>
                <p>
                  Opportunities can emerge in both stable and volatile market conditions. Our ability to act with speed, discipline, and conviction allows us to identify and capture opportunities that others may overlook.
                </p>
              </div>

              <div className="content-block">
                <h3>Differentiation</h3>
                <p>
                  We focus on investment opportunities that traditional strategies may not access or pursue. These differentiated investments aim to enhance portfolio diversification while reducing correlation with conventional asset classes and helping manage volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase">

    <div className="portfolio-showcase-container">

        <div className="portfolio-header">

            <div className="portfolio-label">
                <span>OUR PORTFOLIO</span>
            </div>

            <h2>
                We identify opportunities with long-term potential and partner
                with businesses that demonstrate innovation, resilience and
                the ability to create meaningful value across industries.
            </h2>

            <p>
                Our approach combines strategic insight, operational expertise
                and disciplined execution to support companies through every
                stage of growth and transformation.
            </p>

        </div>

        <div className="portfolio-grid">

            <div className="portfolio-card">
                <h3>Life Sciences & Healthcare</h3>

                <p>
                    We support organizations advancing healthcare innovation,
                    helping them strengthen operations, expand capabilities
                    and improve access to critical services that impact lives
                    worldwide.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}
            </div>


            <div className="portfolio-card">
                <h3>Aerospace & Defense</h3>

                <p>
                    We partner with businesses developing next-generation
                    technologies that enhance security, accelerate innovation
                    and address evolving global challenges.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}
            </div>


            <div className="portfolio-card">
                <h3>Digital Governance</h3>

                <p>
                    We invest in technology-driven platforms that improve
                    transparency, strengthen decision-making and help
                    organizations navigate increasingly complex environments.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}
            </div>


            <div className="portfolio-card">
                <h3>Insurance Innovation</h3>

                <p>
                    Through partnerships with forward-thinking businesses,
                    we support digital solutions that enhance efficiency,
                    improve accessibility and modernize traditional markets.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}
            </div>


            <div className="portfolio-card">
                <h3>Brand & Marketing Solutions</h3>

                <p>
                    We work alongside organizations that help global brands
                    optimize performance through creativity, technology and
                    integrated service delivery models.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}
            </div>

        </div>

    </div>

</section>


{/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
            “The future belongs to those who combine strategic vision with the discipline to execute it consistently, day after day.”
          </h2>
        </div>
      </section>



</div>

)

}

export default Tacticalopportunities;