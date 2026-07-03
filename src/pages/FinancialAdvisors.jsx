import "../styles/FinancialAdvisors.css";
import React, { useEffect, useState } from "react";


function FinancialAdvisors() {

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

  return (
    <div className="family-page">

      {/* =========================
FAMILY OFFICES HERO
========================= */}

<section className="institutional-hero family-hero">

<div className="institutional-container">

{/* LEFT CONTENT */}

<div className="institutional-left">

<span>FAMILY OFFICES</span>

<h1>
Private Wealth <br/>
Built For Generations
</h1>

<p>
Quintessence Atelier partners with family offices
to preserve wealth, unlock long-term opportunities,
and create tailored investment strategies designed
for future generations.
</p>

<div className="institutional-buttons">

<a href="/contact" className="institutional-btn">
Connect With Us
</a>

</div>

</div>



{/* RIGHT IMAGE */}

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="/assets/images/Family Offices.jpg"
            alt="Financial Advisors"
        />
    </div>

</div>



</div>

</section>

{/* =========================
FAMILY OFFICE OVERVIEW
========================= */}

<section className="family-overview">

<div className="family-overview-container">

<div className="family-overview-left">

<span>PRIVATE CAPITAL SOLUTIONS</span>

<h2>
Tailored Wealth Strategies <br/>
For Family Offices
</h2>

<p>
Quintessence Atelier partners with family offices to preserve,
grow, and structure wealth through disciplined investment
strategies, long-term partnerships, and personalized financial guidance.
Our approach is built around stability, flexibility, and generational value creation.
</p>

</div>



<div className="family-overview-right">

<div className="family-data-card">

<h3>₹850Cr+</h3>

<p>
Managed Across Diversified Private Investment Strategies
</p>

</div>



<div className="family-data-card">

<h3>75+</h3>

<p>
Trusted Family Office & Private Capital Relationships
</p>

</div>



<div className="family-data-card">

<h3>18%</h3>

<p>
Average Long-Term Portfolio Growth Performance
</p>

</div>
</div>
</div>

<div className="family-note">

<p>
*Figures shown represent internal portfolio activity, strategic relationships,
and long-term private investment capabilities across select engagements.
</p>
</div>
</section>


{/* WHAT WE DO */}

      <section className="what-we-do-section">
        <div className="what-we-do-container">

          <div className="what-we-do-label">
            <span>FINANCIAL ADVISORS</span>
            <div className="label-line"></div>
          </div>

          <h2 className="what-we-do-heading">
           Through our Private Wealth platform, we provide financial advisors with access to institutional-grade alternative investment opportunities for their clients.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="/assets/images/financilaa.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Access</h3>
                <p>
                  Through our broad and diversified platform, we deliver solutions designed to support a wide range of portfolio construction objectives.
                </p>
              </div>

              <div className="content-block">
                <h3>Education</h3>
                <p>
                  We collaborate with financial advisors by offering market insights, investment opportunities, and educational resources to help deepen their understanding of private market investing and its characteristics.
                </p>
              </div>

              <div className="content-block">
                <h3>Partnership</h3>
                <p>
                  Many of our experienced professionals have spent years working alongside financial advisors, providing valuable insight into the unique goals and requirements of their clients.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>



{/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
            “Innovation thrives where curiosity is encouraged, collaboration is valued, and excellence is expected.”
          </h2>
        </div>
      </section>

    

    </div>
  );
}

export default FinancialAdvisors;