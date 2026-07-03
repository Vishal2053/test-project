import "../styles/StrategicPartners.css";
import React, { useEffect, useState } from "react";


function StrategicPartners(){

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
                    title: "Private Equity",
                    content:
                        "Our flexible investment approach is designed to adapt to changing market conditions, seeking opportunities across diverse asset classes while maintaining disciplined risk management."
                },
                {
                    title: "Infrastructure",
                    content:
                        "We employ a multi-strategy framework that combines complementary investment approaches to create balanced portfolios and support long-term objectives."
                },
                {
                    title: "Real Estate",
                    content:
                        "We focus on infrastructure-related investments that support essential industries and long-term development, aiming to generate sustainable value over time."
                },
                {
                    title: "GP Stakes",
                    content:
                        "We focus on infrastructure-related investments that support essential industries and long-term development, aiming to generate sustainable value over time."
                }
                
            ];
        

return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

<div className="hero-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
Strategic Partners
</h1>

<p>

We are a global leader in the alternative asset secondary market, with deep expertise and a proven track record.

</p>

</div>


<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\partners.png"
            alt="Partners"
        />
    </div>
</div>


</section>
{/* =========================================
STRATEGIC PARTNERS PERFORMANCE
========================================= */}

<section className="pe-performance">

<div className="pe-performance-top">

<span>STRATEGIC PARTNERS</span>

<h2>
Expanding Long-Term Value Through <br />
Strategic Partnership Networks
</h2>

<p>

Quintessence Atelier collaborates with institutional
partners, investors and business networks through
disciplined execution, scalable investment strategies
and relationship-driven growth opportunities.

</p>

</div>



<div className="pe-performance-grid">


{/* CARD 1 */}

<div className="pe-performance-card">

<div className="pe-number">
₹8,300Cr+
</div>

<h3>
Strategic Capital Managed
</h3>

<p>

Diversified partnership-driven investment solutions
focused on sustainable financial growth and long-term value.

</p>

</div>



{/* CARD 2 */}

<div className="pe-performance-card">

<div className="pe-number">
6,500+
</div>

<h3>
Partnership Interests Structured
</h3>

<p>

Strong collaborative engagements across evolving
industries, institutional platforms and global markets.

</p>

</div>



{/* CARD 3 */}

<div className="pe-performance-card">

<div className="pe-number">
2,350+
</div>

<h3>
Strategic Transactions Delivered
</h3>

<p>

Executing disciplined transactions supported by
market expertise, operational insight and trusted partnerships.

</p>

</div>

</div>



<div className="pe-performance-note">

<p>

*Figures shown represent partnership capabilities,
strategic engagements and long-term investment activity.

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
            We acquire interests in investment funds across multiple asset classes, providing liquidity solutions to investors while co-investing alongside managers around the world.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\spartnerswwd.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Trusted Partner</h3>
                <p>
                  Investors and fund managers recognize us as a reliable and respected partner capable of executing transactions efficiently, fairly, and with complete confidentiality. Our reputation and ability to move quickly remain important strengths of our platform.
                </p>
              </div>

              <div className="content-block">
                <h3>Diversified Approach</h3>
                <p>
            Our experience spans a broad range of transaction types, from individual fund transfers to complex portfolio solutions and direct investment opportunities. For every investment, we establish clear objectives and pursue opportunities that create value for all parties involved.
                </p>
              </div>

              <div className="content-block">
                <h3>Information Advantage</h3>
                <p>
Comprehensive, bottom-up analysis is fundamental to our investment process. As an active participant in the secondary market, we leverage our global network and deep industry expertise to perform thorough due diligence on every opportunity.
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
            “Behind every successful outcome is a combination of insight, discipline, and a relentless pursuit of excellence.”
          </h2>
        </div>
      </section>


</div>

)

}

export default StrategicPartners;