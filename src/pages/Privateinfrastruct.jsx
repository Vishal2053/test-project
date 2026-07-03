import "../styles/Privateinfrastruct.css";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";


function Privateinfrastructure(){
    const essentials = [
  {
    title: "Understanding Private Markets",
    link: "/EPMOverview",
  },
  {
    title: "Introduction to Private Credit",
    link: "/private-credit",
  },
  {
    title: "Private Real Estate Strategies",
    link: "/private-real-estate",
  },
  {
    title: "Infrastructure Investment Insights",
    link: "/private-infrastructure",
  },
  {
    title: "Strategic Asset Allocation",
    link: "/AllocatingPrivateAssets",
  },
];

const [active, setActive] = useState(null);

    const faqs = [
        {
            title: "What is private infrastructure?",
            content:
                "Private infrastructure refers to investments in essential long-term assets such as energy systems, transportation networks, utilities, and digital infrastructure that are owned or operated by private entities rather than public governments."
        },
        {
            title: "What are the different types of private infrastructure?",
            content:
                "Private infrastructure spans multiple sectors including energy and power generation, transportation and logistics networks, water and waste management systems, and digital infrastructure such as data centers and communication networks."
        },
        {
            title: "Why invest in private infrastructure?",
            content:
                "Private infrastructure can provide stable, long-term income, potential capital appreciation, and portfolio diversification. These assets are often supported by essential services with consistent demand across economic cycles."
        },
        {
            title: "What are the differences between public vs private infrastructure investment?",
            content:
                "Public infrastructure investments are typically listed and traded on public markets, offering higher liquidity but greater exposure to market volatility. Private infrastructure investments are less liquid but may provide more stable cash flows and long-term value creation potential."
        },
        {
            title: "What is driving the growth in private infrastructure?",
            content:
                "Growth in private infrastructure is being driven by increasing global demand for energy transition, digital connectivity, urban development, and governments seeking private capital to fund large-scale infrastructure projects."
        }
    ];

 
return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

    <div className="hero-left">

        <span>QUINTESSENCE ATELIER</span>

       <h1>
  Private Infrastructure
</h1>

<p>
  Generating long-term value through essential infrastructure assets,
  strategic partnerships, disciplined capital deployment, and sustainable
  development initiatives that support economic and social growth.
</p>

<div className="hero-highlight">
  Investments in essential infrastructure systems such as energy,
  transportation, utilities, and digital networks that form the backbone of
  modern economies.
</div>

<a
  href="/brochures/private-infrastructure-brochure.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-brochure"
>
  Download Brochure
  <span>↗</span>
</a>

    </div>

     <div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="/assets/images/infrastructure news.jpg"
            alt="Infrasturture"
        />
    </div>
</div>

    
</section>

<section className="pe-insights">

    <div className="pe-insights-top">

        <span>UNDERSTANDING PRIVATE EQUITY</span>

        <h2>What You Should Know</h2>

    </div>

    <div className="pe-insights-grid">

        <div className="pe-insight-card">

            <div className="pe-insight-number">01</div>

            <h3>Historical Outperformance</h3>

            <p>
                Private infrastructure investments have often delivered relatively strong returns over time, with comparatively lower volatility when measured against public equity markets across different economic cycles.
            </p>

        </div>

        <div className="pe-insight-card">

            <div className="pe-insight-number">02</div>

            <h3>Diversification Benefits</h3>

            <p>Private infrastructure typically moves differently from most traditional asset classes, which can help reduce overall portfolio risk and improve diversification outcomes.
            </p>

        </div>

        <div className="pe-insight-card">

            <div className="pe-insight-number">03</div>

            <h3>Potential Inflation Protection</h3>

            <p>Many infrastructure assets are supported by revenue models linked to inflation or structured in a way that can help offset rising costs, supporting more stable income generation during inflationary periods.</p>

        </div>

    </div>

</section>

<section className="qa-infra-intro">

    <div className="qa-infra-intro-left">

        <span>
            ESSENTIAL INFRASTRUCTURE
        </span>

        <h2>
            Understanding
            <br />
            Private Infrastructure
        </h2>

        <p>
            Private infrastructure encompasses the critical physical
            assets that support modern economies, including digital
            networks, transportation systems, energy platforms and
            environmental services relied upon every day by businesses
            and communities.
        </p>

        <p>
            These assets often operate through long-term agreements,
            regulated frameworks or recurring service models that can
            provide durable cash flows and resilience across changing
            market environments. Their essential nature and consistent
            demand make infrastructure an important component of
            long-term investment strategies.
        </p>

    </div>

    <div className="qa-infra-intro-right">

        <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600"
            alt="Private Infrastructure"
        />

    </div>

</section>

<section className="qa-infra-sectors">

    <div className="qa-infra-header">

        <span>ESSENTIAL INFRASTRUCTURE</span>

        <h2>
            Infrastructure Opportunities Across Critical Sectors
        </h2>

        <p>
            Infrastructure forms the foundation of modern economies,
            supporting digital connectivity, energy systems,
            transportation networks and environmental services that
            drive long-term growth and resilience.
        </p>

    </div>

    {/* 1 */}

    <div className="qa-infra-row">

        <div className="qa-infra-content">
            <h3>Digital Infrastructure</h3>

            <p>
                The rapid expansion of cloud computing, artificial
                intelligence and digital connectivity continues to
                increase demand for essential digital assets that
                power modern businesses and consumers.
            </p>

            <ul>
                <li>Data Centers</li>
                <li>Telecom Towers</li>
                <li>Fiber Networks</li>
            </ul>
        </div>

        <div className="qa-infra-image">
            <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600"
                alt="Digital Infrastructure"
            />
        </div>

    </div>


    {/* 2 */}

    <div className="qa-infra-row reverse">

        <div className="qa-infra-image">
            <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600"
                alt="Energy Infrastructure"
            />
        </div>

        <div className="qa-infra-content">

            <h3>Energy Infrastructure</h3>

            <p>
                Growing global energy demand and the transition toward
                cleaner energy solutions are creating investment
                opportunities across generation, transmission and
                storage systems.
            </p>

            <ul>
                <li>Renewable Energy</li>
                <li>Transmission Networks</li>
                <li>Utility Assets</li>
            </ul>

        </div>

    </div>


    {/* 3 */}

    <div className="qa-infra-row">

        <div className="qa-infra-content">

            <h3>Transportation Networks</h3>

            <p>
                Efficient movement of goods and people remains
                fundamental to economic activity, supporting trade,
                logistics and urban development worldwide.
            </p>

            <ul>
                <li>Ports & Logistics</li>
                <li>Rail Infrastructure</li>
                <li>Air Transport Assets</li>
                <li>Road Networks</li>
            </ul>

        </div>

        <div className="qa-infra-image">

            <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600"
                alt="Transportation"
            />

        </div>

    </div>


    {/* 4 */}

    <div className="qa-infra-row reverse">

        <div className="qa-infra-image">

            <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600"
                alt="Water Infrastructure"
            />

        </div>

        <div className="qa-infra-content">

            <h3>Water & Environmental Systems</h3>

            <p>
                Essential environmental infrastructure supports water
                treatment, distribution and sustainable resource
                management for growing populations and industries.
            </p>

            <ul>
                <li>Water Utilities</li>
                <li>Waste Management</li>
                <li>Environmental Services</li>
            </ul>

        </div>

    </div>

</section>


<section className="qa-infra-performance">

  {/* TOP CONTENT */}
  <div className="qa-infra-performance-top">

    <div className="qa-infra-content">

      <span>PRIVATE INFRASTRUCTURE INSIGHTS</span>

      <h2>Why Private Infrastructure?</h2>

      <p>
        Private infrastructure invests in essential real-world systems such as
        energy, transport, utilities, and digital networks that support global
        economic activity.
      </p>

      <p>
        These assets often operate under long-term contracts, helping generate
        stable cash flows and resilient performance across market cycles.
      </p>

      <p>
        As a result, infrastructure can provide a combination of income
        potential, diversification, and long-term value creation.
      </p>

    </div>

    {/* STATS CARD */}
    <div className="qa-infra-stat-card">

      <div className="qa-stat-item">
        <h3>$742k</h3>
        <span>Private Infrastructure</span>
      </div>

      <div className="qa-divider"></div>

      <div className="qa-stat-item">
        <h3>$612k</h3>
        <span>Public Equities</span>
      </div>

    </div>

  </div>

  {/* CHART AREA */}
  <div className="qa-chart-area">

    <div className="qa-chart">

      {/* GRID */}
      <div className="qa-grid">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* SVG CHART */}
      <svg viewBox="0 0 1000 450" preserveAspectRatio="none">

        {/* Public Market Line */}
        <path
          d="M0 380
             C120 360, 200 340, 280 310
             C360 300, 420 320, 500 290
             C600 260, 700 240, 800 210
             C900 180, 950 150, 1000 120"
          className="public-line"
        />

        {/* Infrastructure Line */}
        <path
          d="M0 390
             C120 330, 200 280, 280 240
             C360 200, 420 180, 500 150
             C600 120, 700 80, 800 50
             C900 20, 950 10, 1000 -20"
          className="infra-line"
        />

      </svg>

    </div>

  </div>

</section>

<section className="faq-section">

            <div className="faq-container">

                {/* Label */}

                <div className="faq-label">
                    <span>FREQUENTLY ASKED QUESTIONS</span>
                </div>
                {/* Heading */}

                <h2 className="faq-heading">
                    Explore common questions about private credit and gain
                    a deeper understanding of this growing segment of
                    alternative investments.
                </h2>


                {/* Accordion */}

                <div className="faq-accordion">

                    {faqs.map((faq, index) => (

                        <div className="faq-item" key={index}>

                            <button
                                className="faq-trigger"
                                onClick={() =>
                                    setActive(active === index ? -1 : index)
                                }
                            >

                                <span>{faq.title}</span>

                                <div className="faq-icon">
                                    {active === index ? "−" : "+"}
                                </div>

                            </button>


                            <div
                                className={`faq-content ${
                                    active === index ? "show" : ""
                                }`}
                            >
                                <p>{faq.content}</p>

                            </div>

                        </div>

                    ))}

                </div>
                {/* Disclaimer */}
                <div className="faq-disclaimer">
                    <p>
                        Past performance does not guarantee future results.
                        Diversification does not ensure a profit or protect
                        against investment losses.
                    </p>
                </div>
            </div>
        </section>



<section className="essentials-section">

  <div className="essentials-header">
    <span>QUINTESSENCE ATELIER</span>
    <h2>Explore Insights</h2>
    <p>
      Discover essential perspectives designed to help investors
      understand private markets and long-term investment opportunities.
    </p>
  </div>

  <div className="essentials-list">

    {essentials.map((item, index) => (
      <Link
        key={index}
        to={item.link}
        className="essential-row"
      >
        <span>{item.title}</span>

        <div className="essential-arrow">
          →
        </div>
      </Link>
    ))}

  </div>

</section> 


{/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
            “True progress is achieved when innovation meets purpose.
By combining insight with action,
we create value that stands the test of time.”
          </h2>
        </div>
      </section>


</div>

)

}

export default Privateinfrastructure;