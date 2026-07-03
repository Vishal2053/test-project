import "../styles/Client.css";

function OurClients(){

return(

<div className="clients-page">


{/* HERO SECTION */}

<section className="clients-hero">

<div className="clients-wrapper">


{/* LEFT */}

<div className="clients-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
Our Clients
</h1>

<p>

Partnering with ambitious businesses, institutions
and visionary leaders to create long-term growth,
strategic transformation and sustainable success.

</p>

</div>



{/* RIGHT IMAGE */}

<div className="clients-right">

<img
src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400"
alt="Our Clients"
/>

</div>

</div>

</section>

{/* CLIENT CATEGORIES */}

<section className="client-categories">

<div className="client-container">


{/* LEFT IMAGE */}

<div className="client-image">

<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400"
alt="Clients"
/>

</div>



{/* RIGHT CONTENT */}

<div className="client-content">

<span>OUR CLIENTS</span>

<h2>
Strategic Partnerships Built Around Long-Term Growth
</h2>

<p>

We work alongside institutions, private offices
and financial organizations by delivering tailored
strategies, disciplined execution and sustainable
value creation across changing markets.

</p>



{/* ITEM */}

<a href="/Investors" className="client-item">

<div>

<h3>Institutional Clients</h3>

<p>

Tailored investment and advisory solutions designed
for institutions focused on scalable growth,
capital preservation and strategic performance.

</p>

</div>

<div className="client-arrow">
→
</div>

</a>



{/* ITEM */}

<a href="/Familyoffice" className="client-item">

<div>

<h3>Family Offices</h3>

<p>

Personalized strategies supporting generational
wealth planning, portfolio diversification
and long-term financial stability.

</p>

</div>

<div className="client-arrow">
→
</div>

</a>



{/* ITEM */}

<a href="/insurers" className="client-item">

<div>

<h3>Insurers</h3>

<p>

Flexible financial strategies and partnership-driven
solutions focused on stability, operational efficiency
and long-term value creation.

</p>

</div>

<div className="client-arrow">
→
</div>

</a>

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

export default OurClients;