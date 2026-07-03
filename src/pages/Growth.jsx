import "../styles/Growth.css";
import React, { useEffect, useState } from "react";


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



return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

<div className="hero-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
Growth
</h1>

<p>Through revenue expansion strategies, hands-on operational support, and access to our global platform, we are redefining the future of growth equity investing.</p>

</div>

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\growth.png"
            alt="Growth"
        />
    </div>

</div>



</section>

<section className="platform-performance">

  <div className="platform-top">
    <span>OUR PLATFORM</span>

    <h2>
      Scale, Expertise and Strategic Execution
    </h2>

    <p>
      Combining experience, collaboration and disciplined execution,
      we focus on delivering meaningful outcomes and supporting
      long-term value creation.
    </p>
  </div>

  <div className="platform-grid">

    <div className="platform-card">
      <div className="platform-number">₹18,000Cr+</div>
      <h3>Assets Under Strategic Oversight</h3>
      <p>Reflecting the breadth and scale of opportunities managed across our platform.</p>
    </div>

    <div className="platform-card">
      <div className="platform-number">850+</div>
      <h3>Professionals Across Network</h3>
      <p>Experienced professionals collaborating to drive execution.</p>
    </div>

    <div className="platform-card">
      <div className="platform-number">18</div>
      <h3>Cities Served</h3>
      <p>Supporting businesses and clients across multiple regions.</p>
    </div>

    <div className="platform-card">
      <div className="platform-number">125+</div>
      <h3>Strategic Initiatives</h3>
      <p>Programs focused on innovation, growth and transformation.</p>
    </div>

    <div className="platform-card">
      <div className="platform-number">₹950Cr+</div>
      <h3>Operational Value Delivered</h3>
      <p>Illustrating our focus on operational excellence and impact.</p>
    </div>

    <div className="platform-card">
      <div className="platform-number">42</div>
      <h3>Strategic Partnerships</h3>
      <p>Long-term relationships supporting sustainable growth.</p>
    </div>

  </div>

  <div className="platform-note">
    <p>
      Figures shown above are illustrative representations of Quintessence Atelier's
      platform capabilities and strategic focus.
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
           We invest in businesses shaping the future, supporting emerging leaders on their journey to becoming globally recognized enterprises through the strength of our platform.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\growth1.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Leveraging Our Platform</h3>
                <p>
                  As experienced growth investors, we combine investment expertise with extensive resources, strategic capabilities, and a broad global network to provide companies with insights, operational support, and opportunities for transformational growth.
                </p>
              </div>

              <div className="content-block">
                <h3>Supporting Scalable Growth</h3>
                <p>
                  We help businesses scale efficiently by providing the tools, expertise, and strategic guidance needed to expand while managing operational complexity. Our network of experienced professionals and advisors supports companies in identifying new opportunities and strengthening their global presence.
                </p>
              </div>

              <div className="content-block">
                <h3>Building Global Leaders</h3>
                <p>
                  With decades of experience supporting high-growth businesses, we help companies achieve operational excellence and navigate the challenges associated with rapid expansion.
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
            “Sustainable success is built through disciplined decisions, trusted partnerships, and a commitment to long-term value. Every step forward reflects our dedication to excellence.”
          </h2>
        </div>
      </section>
</div>
)

}

export default Growth;