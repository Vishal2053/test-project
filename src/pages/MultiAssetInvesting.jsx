import "../styles/MultiAssetInvesting.css";
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


    
    const [active, setActive] = useState(null);

    const strategies = [
        {
            title: "Flexible Return Strategies",
            content:
                "Our flexible investment approach is designed to adapt to changing market conditions, seeking opportunities across diverse asset classes while maintaining disciplined risk management."
        },
        {
            title: "Diversified Investment Solutions",
            content:
                "We employ a multi-strategy framework that combines complementary investment approaches to create balanced portfolios and support long-term objectives."
        },
        {
            title: "Infrastructure Opportunities",
            content:
                "We focus on infrastructure-related investments that support essential industries and long-term development, aiming to generate sustainable value over time."
        }
    ];

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
            src="src\assets\images\multiasset.png"
            alt="Multi Asset Investing"
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
            We are multi-asset investors, delivering portfolio solutions through our distinctive combination of scale, capabilities, and investment expertise.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\Multiassetinvestwwd.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Partnership</h3>
                <p>
                  We focus on building long-term strategic relationships with our clients by creating investment solutions tailored to their specific return objectives and risk preferences. The longevity of our client relationships reflects the strength of our partnership-driven approach.
                </p>
              </div>

              <div className="content-block">
                <h3>People</h3>
                <p>
                  Our people are our greatest strength. Their collective experience spans the alternative investment landscape, allowing us to evaluate opportunities from multiple perspectives and invest with confidence and conviction.
                </p>
              </div>

              <div className="content-block">
                <h3>Perspective</h3>
                <p>
                  Operating across global markets provides us with valuable insights into trends emerging across industries and asset classes. Combined with our scale and resources, this perspective helps us identify compelling opportunities for our clients.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="credit-section">

            <div className="credit-container">

                <div className="credit-label">
                    <span>OUR STRATEGIES</span>
                </div>

                <h2 className="credit-heading">
                    We develop investment strategies that combine
                    discipline, adaptability and long-term thinking
                    to create meaningful opportunities for growth.
                </h2>

                <div className="credit-accordion">

                    {strategies.map((item, index) => (

                        <div
                            className="credit-item"
                            key={index}
                        >

                            <button
                                className="credit-trigger"
                                onClick={() =>
                                    setActive(active === index ? -1 : index)
                                }
                            >

                                <span>{item.title}</span>

                                <div className="credit-icon">
                                    {active === index ? "−" : "+"}
                                </div>

                            </button>

                            <div
                                className={`credit-content ${
                                    active === index ? "show" : ""
                                }`}
                            >

                                <p>{item.content}</p>

                            </div>

                        </div>

                    ))}

                </div>

                <p className="strategy-note">
                    The strategies highlighted above represent
                    Quintessence Atelier's investment philosophy
                    and demonstrate our commitment to identifying
                    resilient opportunities through thoughtful,
                    long-term decision-making.
                </p>

            </div>

        </section>

{/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
           “Every meaningful achievement begins with a vision and grows through consistent effort and collaboration.
          </h2>
        </div>
      </section>


</div>

);

}

export default MultiAsset;