import "../styles/PrivateEquity.css";
import React, { useEffect, useState } from "react";


function PrivateEquity(){

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
Private Equity
</h1>

<p>

Creating long-term value through strategic partnerships,
disciplined investments and sustainable growth initiatives.

</p>

</div>

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\privateequityhero.png"
            alt="Private equity"
        />
    </div>
</div>



</section>


{/* =========================================
PRIVATE EQUITY PERFORMANCE
========================================= */}

<section className="pe-performance">

<div className="pe-performance-top">

<span>
PRIVATE EQUITY PERFORMANCE
</span>

<h2>
Creating Long-Term Enterprise Value Through Strategic Investments
</h2>

<p>

Quintessence Atelier partners with businesses and
growth-focused enterprises through disciplined capital
strategies, operational insight, and long-term
value creation across evolving industries.

</p>

</div>



<div className="pe-performance-grid">


{/* CARD 1 */}

<div className="pe-performance-card">

<div className="pe-number">
₹8,200Cr+
</div>

<h3>
Strategic Capital Managed
</h3>

<p>

Supporting scalable businesses through diversified
private market investment strategies and operational expertise.

</p>

</div>



{/* CARD 2 */}

<div className="pe-performance-card">

<div className="pe-number">
₹2,400Cr+
</div>

<h3>
Available Growth Capital
</h3>

<p>

Flexible capital solutions focused on expansion,
transformation, and long-term business development.

</p>

</div>



{/* CARD 3 */}

<div className="pe-performance-card">

<div className="pe-number">
85+
</div>

<h3>
Business Partnerships
</h3>

<p>

Trusted collaborations with founders, enterprises,
and strategic stakeholders across multiple sectors.

</p>

</div>

</div>



<div className="pe-performance-note">

<p>

*Figures represent combined strategic engagements,
private market capabilities, and active growth partnerships.

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
            We invest across a wide range of industries, partnering with both established enterprises and growth-focused businesses around the world.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src\assets\images\privateequity.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Rigorous Due Diligence</h3>
                <p>
                  Our disciplined due diligence process helps assess risks, identify value opportunities, and support successful partnerships with experienced management teams.
                </p>
              </div>

              <div className="content-block">
                <h3>Creating Lasting Impact</h3>
                <p>
                  We seek to generate value by investing in high-quality businesses where our capital, strategic guidance, global network, and operational expertise can support meaningful transformation and growth.</p>
              </div>

              <div className="content-block">
                <h3>Long-Term Commitment</h3>
                <p>
                  When we partner with a business, we focus on building long-term resilience and sustainable growth through our experience and platform capabilities.
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
                <span>OUR PORTFOLIO</span>
            </div>

            <h2>
                We are proud of Quintessence Atelier's role as a positive
                economic catalyst for the businesses in our portfolio.
                We work to identify, invest in and enhance the value
                of great businesses.
            </h2>

        </div>


        <div className="portfolio-grid">

            <div className="portfolio-card">

                <h3>Jersey Mike's</h3>

                <p>
                    Jersey Mike's is a leading franchise of fast-casual
                    submarine sandwich stores, known for fresh ingredients
                    and strong customer loyalty.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}

            </div>


            <div className="portfolio-card">

                <h3>Copeland</h3>

                <p>
                    Copeland is a global leader in energy-efficient
                    heating and cooling technology, helping businesses
                    improve performance and sustainability.
                </p>

                {/* <a href="#">
                    Watch Video
                    <span>→</span>
                </a> */}

            </div>


            <div className="portfolio-card">

                <h3>Adevinta</h3>

                <p>
                    Adevinta operates leading online marketplaces and
                    digital platforms connecting millions of users across
                    multiple industries worldwide.
                </p>

                {/* <a href="#">
                    Watch Video
                    <span>→</span>
                </a> */}

            </div>


            <div className="portfolio-card">

                <h3>Legence</h3>

                <p>
                    Legence delivers mission-critical services across
                    healthcare, education, and commercial sectors,
                    enabling long-term operational excellence.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}

            </div>


            <div className="portfolio-card">

                <h3>TDI</h3>

                <p>
                    Transmission Developers develops innovative energy
                    infrastructure solutions that support the transition
                    toward cleaner power systems.
                </p>


            </div>


            <div className="portfolio-card">

                <h3>Ancestry</h3>

                <p>
                    Ancestry provides digital family history services,
                    helping millions discover and preserve their stories
                    through innovative technology.
                </p>

                {/* <a href="#">
                    Learn More
                    <span>→</span>
                </a> */}

            </div>

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

)

}

export default PrivateEquity;