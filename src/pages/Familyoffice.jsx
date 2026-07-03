import "../styles/Familyoffice.css";
import React, { useEffect, useState } from "react";


function FamilyOffice() {

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
            src="/assets/images/familyoffice1.png"
            alt="Family Offices"
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
            <span>FAMILY OFFICES</span>
            <div className="label-line"></div>
          </div>

          <h2 className="what-we-do-heading">
            We provide comprehensive access to the firm's senior professionals, investment solutions, data-driven insights, and extensive industry network.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="/assets/images/familyoffice.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Personalized Engagement</h3>
                <p>
                  Our clients benefit from dedicated regional support and direct interaction with investment professionals and senior leadership teams.
                </p>
              </div>

              <div className="content-block">
                <h3>Industry Perspectives</h3>
                <p>
                  We share insights and analysis from our investment strategists and portfolio businesses, providing valuable perspectives on important market trends and emerging opportunities.
                </p>
              </div>

              <div className="content-block">
                <h3>Bringing Leaders Together</h3>
                <p>
            We regularly organize forums and events where chief investment officers can connect with senior leaders, advisors, and experts from across the alternative investments landscape.
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
            “Achievement is not measured by how far one person goes, but by how many people grow together along the way.”
          </h2>
        </div>
      </section>

    

    </div>
  );
}

export default FamilyOffice;