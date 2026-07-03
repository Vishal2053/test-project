import "../styles/Investors.css";
import React, { useEffect, useState } from "react";


function Investors() {

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
    <div className="investors-page">

      {/* =========================
INSTITUTIONAL HERO
========================= */}

<section className="institutional-hero">

<div className="institutional-container">


{/* LEFT CONTENT */}

<div className="institutional-left">

<span>INSTITUTIONAL CLIENTS</span>

<h1>
Institutional <br/>
Growth Solutions
</h1>

<p>

Quintessence Atelier partners with institutions,
investment groups and financial organizations to
deliver disciplined strategies, long-term value
creation and sustainable market opportunities.

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
            src="/assets/images/institutional.jpg"
            alt="Investors"
        />
    </div>

</div>




</div>

</section>

{/* =========================
{/* =========================
INSTITUTIONAL PERFORMANCE
========================= */}

<section className="institutional-performance">

<div className="institutional-performance-container">


{/* LEFT */}

<div className="institutional-performance-left">

<span>INSTITUTIONAL PERFORMANCE</span>

<h2>
Delivering Scalable Financial Growth For Institutions
</h2>

<p>

Quintessence Atelier partners with institutions to create
long-term value through disciplined capital management,
strategic advisory, and diversified investment solutions
designed for sustainable growth and market resilience.

</p>

</div>



{/* RIGHT */}

<div className="institutional-performance-right">


{/* CARD 1 */}

<div className="institutional-performance-card">

<h3>₹10,500Cr+</h3>

<p>
Strategically Managed Across Diversified Financial Portfolios
</p>

</div>



{/* CARD 2 */}

<div className="institutional-performance-card">

<h3>₹3,200Cr+</h3>

<p>
Long-Term Value Created Through Strategic Partnerships
</p>

</div>



{/* CARD 3 */}

<div className="institutional-performance-card">

<h3>150+</h3>

<p>
Institutional Relationships Across Multiple Industries
</p>

</div>

</div>

</div>



{/* NOTE */}

<div className="institutional-performance-note">

<p>

*Figures reflect institutional capabilities, strategic engagements,
market activity and long-term financial partnerships.

</p>

</div>

</section>


{/* WHAT WE DO */}

      <section className="what-we-do-section">
        <div className="what-we-do-container">

          <div className="what-we-do-label">
            <span>INSTITUTIONAL INVESTORS</span>
            <div className="label-line"></div>
          </div>

          <h2 className="what-we-do-heading">
            At Quintessence Atelier, we collaborate with organizations, institutions, businesses, and strategic partners who are shaping industries and communities around the world.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="/assets/images/financila investors.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Dedicated to Those We Serve</h3>
                <p>
                  As a leading alternative investment platform, we partner with institutional investors, endowments, sovereign wealth funds, pension systems, and family offices, delivering solutions across diverse market environments.
                </p>
              </div>

              <div className="content-block">
                <h3>Returns & Capital Protection</h3>
                <p>
                  Our objective is to deliver long-term returns while preserving capital through partnership, tailored solutions, excellence, and integrity.
                </p>
              </div>

              <div className="content-block">
                <h3>Complete Alignment</h3>
                <p>
                  Aligning our interests with those of our clients sits at the center of our investment philosophy. We continuously adapt our strategies to meet evolving client objectives while taking an active, transparent, and accountable approach to delivering long-term client success.
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
           "Success doesn't come from what you do occasionally; it comes from what you do consistently."
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Investors;