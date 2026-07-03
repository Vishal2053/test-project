import "../styles/Outcomes.css";
import "../styles/PartnerOrganizations.css";

function Outcomes()
{

   const partners = [
  {
    name: "City Harvest",
    logo: "/partners/cityharvest.png",
  },
  {
    name: "Cycle for Survival",
    logo: "/partners/cycleforsurvival.png",
  },
  {
    name: "Good360",
    logo: "/partners/good360.png",
  },
  {
    name: "Impetus",
    logo: "/partners/impetus.png",
  },
  {
    name: "Prince's Trust",
    logo: "/partners/prince-trust.png",
  },
  {
    name: "Robin Hood",
    logo: "/partners/robinhood.png",
  },
  {
    name: "SEO",
    logo: "/partners/seo.png",
  },
];

const scrollingLogos = [...partners, ...partners];

return(

<div className="pe-page">

{/* =========================
OUTCOMES HERO
========================= */}

<section className="outcomes-hero">

<div className="outcomes-container">

<div className="outcomes-content">

<span>OUTCOMES</span>

<h1>
Creating Meaningful Impact
Through Opportunity & Growth
</h1>

<p>

At Quintessence Atelier, we believe lasting success is
measured by the positive outcomes we help create.
Through strategic initiatives, responsible partnerships,
and long-term thinking, we support opportunities that
strengthen businesses, communities, and future generations.

</p>

</div>

</div>

<div className="outcomes-image">

<img
src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800"
alt="Outcomes"
/>

</div>

</section>

{/* ====================================
OUR COMMITMENT
==================================== */}

<section className="impact-manifesto">

<div className="impact-top">

<span>OUR COMMITMENT</span>

<h2>IMPACT</h2>

<p>
We believe meaningful outcomes are created through
long-term commitment, responsible action and opportunities
that empower people, businesses and communities.
</p>

</div>



<div className="impact-main">

{/* LEFT */}

<div className="impact-accordion">

<div className="impact-item">

<div className="impact-number">01</div>

<div className="impact-content">

<h3>Education</h3>

<p>
Supporting learning initiatives, skill development
programs and knowledge-sharing opportunities that
help individuals prepare for future success.
</p>

</div>

</div>



<div className="impact-item">

<div className="impact-number">02</div>

<div className="impact-content">

<h3>Community</h3>

<p>
Strengthening communities through collaboration,
engagement and programs that encourage sustainable
social development.
</p>

</div>

</div>



<div className="impact-item">

<div className="impact-number">03</div>

<div className="impact-content">

<h3>Opportunity</h3>

<p>
Creating access to resources, mentorship and
growth opportunities that help individuals and
organizations reach their potential.
</p>

</div>

</div>

</div>



{/* RIGHT IMAGE */}

<div className="impact-image">

  <div className="impact-image-wrap">

    <div className="impact-image-overlay"></div>

    <img
      src="/assets/images/impact.jpg"
      alt="Impact"
    />

  </div>

</div>

</div>

</section>


<section className="partner-section">

    <div className="partner-container">

        <h2 className="partner-title">
            Current Partner Organizations
        </h2>

        <div className="logo-slider">

            <div className="logo-track">

                {scrollingLogos.map((partner, index) => (

                    <div className="logo-item" key={index}>

                        <img
                            src={partner.logo}
                            alt={partner.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>

</div>

);

}

export default Outcomes;