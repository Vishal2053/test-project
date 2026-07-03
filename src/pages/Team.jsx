import "../styles/Team.css";

function Team() {
  return (
    <div className="team-page">
{/* ================= TEAM HERO ================= */}

<section className="team-hero">

  <div className="team-hero-content">

    <span className="team-label">
      OUR PEOPLE
    </span>

    <h1>
      Leadership That Shapes
      <br />
      Long-Term Success
    </h1>

    <p>
      Our team combines industry expertise, strategic insight,
      and a commitment to excellence to deliver meaningful
      outcomes for clients and partners.
    </p>

  </div>

  <div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="/assets/images/team.png"
            alt="Tactical opporoootunities"
        />
    </div>
</div>
</section>

      {/* Director's Message */}
      <section className="director-message">
        <div className="container">
          <h2>Director’s Message</h2>
          <p>
            At Quintessence Atelier, our philosophy is rooted in integrity,
            strategic clarity, and long-term value creation. We believe that
            sustainable success comes from disciplined execution and strong partnerships.
          </p>
          <p>
            Our team is committed to delivering excellence while maintaining
            the highest standards of professionalism and trust.
          </p>
        </div>
      </section>

{/* Executive Officers */}

<section className="executive-section">

<div className="executive-container">

<div className="section-header">

{/* <span>LEADERSHIP TEAM</span> */}

<h2>Executive Officers</h2>
{/* 
<p>
Experienced professionals shaping strategy,
growth and long-term value creation.
</p> */}

</div>


<div className="executive-grid">

<div className="executive-card">
<div className="card-number">01</div>

</div>

<div className="executive-card">
<div className="card-number">02</div>

</div>

<div className="executive-card">
<div className="card-number">03</div>

</div>

<div className="executive-card">
<div className="card-number">04</div>

</div>

<div className="executive-card">
<div className="card-number">05</div>

</div>

<div className="executive-card">
<div className="card-number">06</div>
</div>

</div>

</div>

</section>


{/* OUR PEOPLE */}

<section className="people-section">

<div className="people-container">

<div className="section-header">

{/* <span>OUR TEAM</span> */}

<h2>Our People</h2>

<p>
A team of experienced professionals bringing together
leadership, expertise and long-term strategic vision.
</p>

</div>


<div className="people-grid">

<div className="people-card">
<div className="card-number">01</div>
</div>

<div className="people-card">
<div className="card-number">02</div>
</div>

<div className="people-card">
<div className="card-number">03</div>
</div>

<div className="people-card">
<div className="card-number">04</div>
</div>

<div className="people-card">
<div className="card-number">05</div>
</div>

<div className="people-card">
<div className="card-number">06</div>
</div>

<div className="people-card">
<div className="card-number">07</div>
</div>

<div className="people-card">
<div className="card-number">08</div>
</div>

<div className="people-card">
<div className="card-number">09</div>
</div>

<div className="people-card">
<div className="card-number">10</div>
</div>

<div className="people-card">
<div className="card-number">11</div>
</div>

<div className="people-card">
<div className="card-number">12</div>
</div>

</div>

</div>

</section>  


      {/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
            “Great investments are never just about capital — they are about conviction, collaboration, and the courage to think long term.”
          </h2>
        </div>
      </section>

      

    </div>
  );
}

export default Team;