import "../styles/Growth.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Growth(){
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

            const portfolioItems = [
    {
        title: "Sediver",
        description:
            "A leading manufacturer of toughened glass insulators that support modern transmission networks and enable reliable power delivery worldwide.",
        link: "/portfolio/sediver"
    },
    {
        title: "Shermco",
        description:
            "A trusted provider of electrical testing, maintenance and engineering services that enhances reliability and efficiency across critical infrastructure.",
        link: "/portfolio/shermco"
    },
    {
        title: "Hill Top Energy Center",
        description:
            "A modern high-efficiency power facility designed to meet increasing energy demands through dependable performance.",
        link: "/portfolio/hill-top-energy-center"
    },
    {
        title: "Enverus",
        description:
            "An innovative software and analytics provider delivering intelligence and insights across the energy value chain.",
        link: "/portfolio/enverus"
    },
    {
        title: "Potomac Energy Center",
        description:
            "A strategically located power facility supporting rapidly expanding digital infrastructure requirements.",
        link: "/portfolio/potomac-energy-center"
    },
    {
        title: "Westwood",
        description:
            "An engineering and design partner advancing energy transition and infrastructure initiatives.",
        link: "/portfolio/westwood"
    },
    {
        title: "Trystar",
        description:
            "A provider of electrical equipment that strengthens backup power resilience for mission-critical operations.",
        link: "/portfolio/trystar"
    },
    {
        title: "Legence",
        description:
            "An advisory platform helping organizations improve efficiency through sustainable energy solutions.",
        link: "/portfolio/legence"
    },
    {
        title: "Power Grid Components",
        description:
            "A manufacturer of essential technologies supporting the safety and efficiency of transmission systems.",
        link: "/portfolio/power-grid-components"
    },
    {
        title: "Transmission Developers",
        description:
            "A developer of large-scale projects connecting renewable energy resources with growing urban demand.",
        link: "/portfolio/transmission-developers"
    },
    {
        title: "Geosyntec",
        description:
            "An environmental engineering consultancy delivering sophisticated solutions across infrastructure and environmental projects.",
        link: "/portfolio/geosyntec"
    },
    {
        title: "Energy Exemplar",
        description:
            "A software platform enabling advanced modeling and analysis of increasingly complex energy markets.",
        link: "/portfolio/energy-exemplar"
    }
];
            
    

return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

<div className="hero-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
EnergyTransitionPartners
</h1>

<p>We partner with leading energy companies to scale world-class enterprises that provide clean, reliable, and cost-efficient energy solutions for a rapidly evolving world.</p>

</div>

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="/assets/images/energytrasmission.png"
            alt="Energy Transmission"
        />
    </div>

</div>



</section>

{/* =========================================
GROWTH PERFORMANCE
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
            Quintessence Atelier Energy Transition Partners is our energy-focused investment platform, dedicated to supporting opportunities across a broad range of sectors within the evolving energy landscape.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="/assets/images/energytrasmission1.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Investment Opportunity</h3>
                <p>
                  Our investment philosophy centers on partnering with exceptional management teams and providing flexible capital solutions that help energy businesses expand, improve performance, and contribute to delivering cleaner, more reliable, and affordable energy solutions for the global community.
                </p>
              </div>

              <div className="content-block">
                <h3>Experience and Scale</h3>
                <p>
                  Our flexible investment approach allows us to participate across the entire energy transition value chain, including high-quality equipment manufacturers, service providers, technology innovators, and large-scale infrastructure projects that support decarbonization and sustainable growth.
                </p>
              </div>

              

            </div>

          </div>

        </div>
      </section>


      <section className="portfolio-section">

            <div className="portfolio-container">

                <div className="portfolio-header">

                    <div className="portfolio-label">
                        <span>PORTFOLIO HIGHLIGHTS</span>
                    </div>

                    <h2>
                        We maintain a long-term commitment to businesses and
                        initiatives driving energy innovation, infrastructure
                        resilience and sustainable growth.
                    </h2>

                    <p>
                        Explore selected highlights from our portfolio that
                        demonstrate our dedication to operational excellence,
                        strategic partnerships and future-focused solutions.
                    </p>

                </div>


                <div className="portfolio-grid">

                    {portfolioItems.map((item, index) => (

                        <div
                            className="portfolio-card"
                            key={index}
                        >

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            {/* <Link
                                to={item.link}
                                className="portfolio-link"
                            >
                                Read More

                                <span>→</span>

                            </Link> */}

                        </div>

                    ))}

                </div>

            </div>

        </section>






      {/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
            “In every challenge lies an opportunity to innovate and grow.
With resilience, integrity, and determination,
we transform possibilities into lasting achievements.”
          </h2>
        </div>
      </section>
</div>
)

}

export default Growth;