import "../styles/Infrastructure.css";
import React, { useEffect, useState } from "react";


function Infrastructure(){

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

<h1>Infrastructure</h1>

<p>Our global investments focus on Core and Core+ infrastructure, where we utilize our scale and value creation mindset to drive sustainable growth and deliver strong outcomes.</p>

</div>

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\infrasturture01.png"
            alt="infrasturture"
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
            We invest actively across a range of sectors, including energy transition infrastructure, transportation, digital infrastructure, and water and waste management.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\infrasturture.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Long-Term Investment Approach</h3>
                <p>
                  We pursue a long-term ownership strategy for large-scale infrastructure assets, with the objective of delivering sustainable capital appreciation alongside consistent annual cash flow generation.
                </p>
              </div>

              <div className="content-block">
                <h3>Value Creation Focus</h3>
                <p>
                  Our approach to value creation is driven by operational discipline, enhanced accountability, greater transparency, and active involvement throughout the investment and asset management lifecycle.
                </p>
              </div>

              <div className="content-block">
                <h3>Responsible Investing</h3>
                <p>
                  We are committed to safeguarding our investors' capital by supporting resilient businesses and high-quality assets that contribute to climate solutions, the energy transition, and long-term value creation.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

<section class="portfolio-section">
    <div class="portfolio-container">

        <div class="portfolio-heading">
            <h2>Our Portfolio</h2>
        </div>

        <div class="portfolio-grid">

            <div class="portfolio-item">
                <h3>Applegreen</h3>
                <p>
                    Applegreen is the largest motorway service area operator
                    in the US and Ireland. We partnered with Applegreen,
                    alongside its two founders, with the goal of investing
                    behind Applegreen's geographic and electric vehicle
                    charging expansion.
                </p>
            </div>

            <div class="portfolio-item">
                <h3>Invenergy</h3>
                <p>
                    Invenergy Renewables is the largest private renewables
                    developer in North America. The company has developed
                    and commercialized renewable energy projects across
                    wind, solar and storage sectors.
                </p>
            </div>

            <div class="portfolio-item">
                <h3>ASPI</h3>
                <p>
                    ASPI is one of Europe's largest toll road operators,
                    spanning thousands of kilometers and serving millions
                    of users while supporting critical transportation
                    infrastructure.
                </p>
            </div>

            <div class="portfolio-item">
                <h3>Carrix</h3>
                <p>
                    Carrix is the largest marine terminal operator in North
                    America and plays a critical role in the global supply
                    chain through its strategic port operations.
                </p>
            </div>

            <div class="portfolio-item">
                <h3>Phoenix Tower International</h3>
                <p>
                    Phoenix Tower International is a leading private cell
                    tower platform operating across the Americas and Europe,
                    supporting the growing demand for digital connectivity.
                </p>
            </div>

            <div class="portfolio-item">
                <h3>QTS</h3>
                <p>
                    QTS is one of the world's largest data center operators,
                    providing critical digital infrastructure and cloud
                    solutions to enterprise customers.
                </p>
            </div>

        </div>

    </div>
</section>

{/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
            “Markets evolve and opportunities change, but the principles of integrity, discipline, and innovation remain timeless.”
          </h2>
        </div>
      </section>

</div>

)

}

export default Infrastructure;