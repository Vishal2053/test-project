import "../styles/Credit.css";
// import { useState } from "react";
import React, { useEffect, useState } from "react";

function Credit() {

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
            title: "Private Corporate Credit",
            content:
                "We provide financing solutions to companies and help banks manage risk. Our position as one of the world's largest direct lenders gives us visibility across markets and access to large, complex opportunities available to few others.",
            bullets: [
                "Senior Direct Lending",
                "Opportunistic Credit"
            ]
        },
        {
            title: "Liquid Corporate Credit",
            content:
                "Flexible investment solutions designed to navigate changing market environments.",
            bullets: []
        },
        {
            title: "Infrastructure and Asset Based Credit",
            content:
                "Specialized strategies focused on essential assets and long-term value creation.",
            bullets: []
        },
        {
            title: "Real Estate Credit",
            content:
                "Creative financing solutions across the capital structure and risk spectrum.",
            bullets: []
        }
    ];

    
  return (

<div className="credit-page">
{/* HERO SECTION */}

<section className="credit-hero">

<div className="credit-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
Credit
</h1>

<p>

Delivering flexible capital solutions through
strategic partnerships, disciplined execution
and long-term financial growth opportunities.

</p>

</div>


<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\credit01.png"
            alt="Credit"
        />
    </div>

</div>

</section>


{/* CREDIT PLATFORM STATS */}

<section className="credit-platform">

<div className="credit-head">

<span>CREDIT PLATFORM</span>

<h2>Delivering Flexible Capital Solutions</h2>

<p>
Quintessence Atelier provides strategic credit
solutions built around long-term partnerships,
market expertise and disciplined execution across
diverse opportunities.
</p>

</div>



<div className="credit-stats-grid">

<div className="credit-card">

<div className="card-count">
₹450Cr+
</div>

<h3>Capital Solutions</h3>

<p>
Supporting businesses with customized credit
strategies and structured financing approaches.
</p>

</div>



<div className="credit-card">

<div className="card-count">
350+
</div>

<h3>Business Relationships</h3>

<p>
Building long-term collaborations across
multiple sectors and industries.
</p>

</div>



<div className="credit-card">

<div className="card-count">
125+
</div>

<h3>Strategic Partnerships</h3>

<p>
Creating strong relationships with institutions,
advisors and business networks.
</p>

</div>



<div className="credit-card">

<div className="card-count">
Global
</div>

<h3>Market Perspective</h3>

<p>
Combining market intelligence and experience
to identify sustainable opportunities.
</p>

</div>

</div>


<div className="credit-note">

<p>

* Figures shown represent Quintessence Atelier's
broader strategic vision and platform capabilities.

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
            We invest across a broad spectrum of credit markets, managing established strategies focused on sectors supported by strong underlying fundamentals.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\credit.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Experience</h3>
                <p>
                  Our platform has developed alongside the growth of the credit markets over time. This experience enables us to leverage long-standing relationships and source attractive opportunities for our clients.
                </p>
              </div>

              <div className="content-block">
                <h3>Innovation</h3>
                <p>
                  Our capital solutions cover a wide range of liquidity and risk profiles, while our close collaboration with borrowers helps us identify additional opportunities for value creation.
                </p>
              </div>

              <div className="content-block">
                <h3>Expertise</h3>
                <p>
                  With an average of more than two decades of industry experience, our investment professionals benefit from the knowledge and insights of a broad network of senior advisors, specialists, and data experts. 
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

<section className="credit-section">

            <div className="credit-container">

                <div className="credit-label">
                    <span>OUR INVESTMENT STRATEGIES</span>
                </div>

                <h2 className="credit-heading">
                    The breadth of our strategies helps us build
                    solutions optimized for various market conditions
                    and customized for our clients' needs.
                </h2>


                <div className="credit-accordion">

                    {strategies.map((item, index) => (

                        <div
                            className={`credit-item ${active === index ? "active" : ""}`}
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

                                {item.bullets.length > 0 && (

                                    <ul>

                                        {item.bullets.map((bullet, i) => (

                                            <li key={i}>{bullet}</li>

                                        ))}

                                    </ul>

                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
<section className="qa-insurance">

    <div className="qa-insurance-top">

        <span>INSURANCE SOLUTIONS</span>

        <h2>
            Investment solutions designed to align with diverse risk objectives.
        </h2>

    </div>


    <div className="qa-insurance-grid">

        <div className="qa-insurance-card">

            <h3>
                Proven Expertise
            </h3>

            <p>
                Our experienced professionals bring deep market insight,
                disciplined underwriting and a rigorous investment framework.
            </p>

        </div>


        <div className="qa-insurance-card">

            <h3>
                Customized Solutions
            </h3>

            <p>
                Flexible structures can be tailored to varying objectives,
                enabling long-term strategic partnerships with clients.
            </p>

        </div>


        <div className="qa-insurance-card">

            <h3>
                Global Perspective
            </h3>

            <p>
                Cross-sector experience and broad market visibility help identify
                opportunities suited to evolving investment environments.
            </p>

        </div>

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

export default Credit;