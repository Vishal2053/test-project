import "../styles/Insurers.css";
import React, { useEffect, useState } from "react";


function Insurers() {

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


  const strategies = [
  {
    title: "Corporate Credit Solutions",
    description:
      "We provide tailored financing support to businesses while helping institutions navigate evolving market risks. Our broad market perspective enables access to opportunities across diverse lending environments.",
    items: [
      "Senior Direct Lending",
      "Opportunistic Credit Strategies",
    ],
  },

  {
    title: "Public & Liquid Credit Markets",
    description:
      "Our expertise across actively traded credit markets provides valuable insights that help identify opportunities and manage changing market conditions.",
    items: [
      "Investment Grade Credit",
      "High Yield Strategies",
      "Leveraged Loans",
      "CLO Debt & Equity",
    ],
  },

  {
    title: "Infrastructure & Asset-Based Financing",
    description:
      "We support investments backed by essential infrastructure, diversified collateral pools, and sectors benefiting from long-term structural trends.",
    items: [
      "Infrastructure Financing",
      "Asset-Backed Lending",
      "Sustainable Resource Opportunities",
    ],
  },

  {
    title: "Real Estate Credit Solutions",
    description:
      "Our real estate credit approach focuses on financing opportunities supported by commercial and residential property assets through various debt structures.",
    items: [
      "Real Estate Lending",
      "Debt Securities",
      "Residential Mortgage Solutions",
    ],
  },
];

const [activeStrategy, setActiveStrategy] = useState(null);

  return (
    <div className="insurers-page">

      {/* =========================
INSURERS HERO
========================= */}

<section className="insurers-hero">

<div className="insurers-container">


{/* LEFT CONTENT */}

<div className="insurers-left">

<span>INSURERS</span>

<h1>
Strategic Credit Solutions  <br/>
For Modern Insurers

</h1>

<p>

Quintessence Atelier partners with insurance-focused
institutions to deliver disciplined credit strategies,
risk-managed financial solutions and long-term
capital stability designed for evolving market needs.

</p>


<div className="insurers-buttons">

<a href="/contact" className="insurers-btn">
Connect With Us
</a>

</div>

</div>



{/* RIGHT IMAGE */}

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\insurers.png"
            alt="insurers"
        />
    </div>

</div>



</div>

</section>

{/* =========================
INSURERS PERFORMANCE
========================= */}

<section className="insurers-performance">

<div className="insurers-performance-container">


{/* LEFT */}

<div className="insurers-performance-left">

<span>INSURERS PERFORMANCE</span>

<h2>
Strengthening Insurance Capital Through Disciplined Credit Strategies
</h2>

<p>

Quintessence Atelier supports insurers with structured
credit solutions, long-term capital planning and
risk-focused financial strategies designed to create
stability, liquidity and sustainable performance.

</p>

</div>



{/* RIGHT */}

<div className="insurers-performance-right">


{/* CARD 1 */}

<div className="insurers-performance-card">

<h3>₹8,700Cr+</h3>

<p>
Capital Strategies Structured Across Insurance-Focused Portfolios
</p>

</div>



{/* CARD 2 */}

<div className="insurers-performance-card">

<h3>₹2,900Cr+</h3>

<p>
Long-Term Financial Value Delivered Through Credit Solutions
</p>

</div>



{/* CARD 3 */}

<div className="insurers-performance-card">

<h3>120+</h3>

<p>
Insurance & Financial Relationships Built Across Markets
</p>

</div>

</div>

</div>



{/* NOTE */}

<div className="insurers-performance-note">

<p>

*Figures represent insurer-focused financial strategies,
credit engagements and long-term capital relationships.

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
            We invest across a broad range of credit markets, managing established strategies focused on sectors supported by strong underlying fundamentals.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\insurers2.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Experience</h3>
                <p>
                  Our platform has grown in parallel with the evolution of the credit markets. This experience enables us to leverage long-standing relationships and source opportunities on behalf of our clients.
                </p>
              </div>

              <div className="content-block">
                <h3>Innovation</h3>
                <p>
                  Our comprehensive capital solutions cover a wide range of liquidity and risk profiles, while our close relationships with borrowers help us identify additional avenues for value creation.
                </p>
              </div>

              <div className="content-block">
                <h3>Expertise</h3>
                <p>
                  With more than two decades of average industry experience, our investment professionals benefit from the knowledge and capabilities of our broader network of senior advisors, specialists, and data experts.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="qa-strategies">

    <div className="qa-strategies-header">

        <span>CREDIT STRATEGIES</span>

        <h2>
            Flexible Solutions Across Credit Markets
        </h2>

        <p>
            Our diverse capabilities allow us to pursue opportunities
            across multiple segments of the credit landscape while
            adapting to changing market environments.
        </p>

    </div>


    <div className="qa-strategy-list">

        {strategies.map((strategy, index) => (

            <div
                className={`qa-strategy ${
                  activeStrategy === index ? "active" : ""
                }`}
                key={index}
            >

                <button
                    className="qa-strategy-btn"
                    onClick={() =>
                      setActiveStrategy(
                        activeStrategy === index ? null : index
                      )
                    }
                >

                    <span>{strategy.title}</span>

                    <div className="qa-plus">
                        {activeStrategy === index ? "−" : "+"}
                    </div>

                </button>


                {activeStrategy === index && (

                    <div className="qa-strategy-content">

                        <p>
                            {strategy.description}
                        </p>

                        <div className="qa-tags">

                            {strategy.items.map((item, i) => (

                                <span key={i}>
                                    {item}
                                </span>

                            ))}

                        </div>

                    </div>

                )}

            </div>

        ))}

    </div>

</section>


<section className="qa-value-program">

    <div className="qa-value-grid">

        <div className="qa-value-content">

            <span>VALUE ENHANCEMENT INITIATIVES</span>

            <h2>
                Driving Operational Excellence Through Strategic Partnership
            </h2>

            <p>
                We work alongside portfolio companies beyond capital deployment,
                helping leadership teams identify opportunities for efficiency,
                resilience and sustainable growth.
            </p>

            <p>
                Our collaborative approach focuses on creating measurable value
                through operational improvements, technology adoption and
                long-term strategic execution.
            </p>

            <a href="#" className="qa-value-btn">
                Explore Our Approach
                <span>→</span>
            </a>

        </div>


        <div className="qa-value-media">

            <img
                src="src\assets\images\values.png"
                alt="Operational Excellence"
            />

            
        </div>

    </div>


    <div className="qa-value-note">

        Our value enhancement initiatives are designed to support portfolio
        companies throughout their growth journey by strengthening operations,
        improving scalability and fostering long-term competitive advantage.

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

            <h3>Proven Expertise</h3>
            <p>
                Our experienced professionals bring deep market insight,
                disciplined underwriting and a rigorous investment framework.
            </p>

        </div>


        <div className="qa-insurance-card">

            <h3>Customized Solutions</h3>

            <p>Flexible structures can be tailored to varying objectives,
                enabling long-term strategic partnerships with clients.</p>

        </div>
        <div className="qa-insurance-card">

            <h3>Global Perspective</h3>
            <p>Cross-sector experience and broad market visibility help identify
                opportunities suited to evolving investment environments.</p>

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

export default Insurers;