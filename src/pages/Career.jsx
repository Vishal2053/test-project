import "../styles/Career.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import ContactForm from "../components/ContactForm";

function Career() {

    const [activeOpportunity, setActiveOpportunity] = useState(null);

const opportunities = [
  {
    title: "Students",
    content:
      "Explore internships, graduate programs, and learning opportunities designed to help students build successful careers."
  },
  {
    title: "Experienced Professionals",
    content:
      "Join our team and contribute your expertise across investment, technology, operations, and leadership roles."
  }
];

return(

<div className="career-page">

{/* =========================
CAREER HERO
========================= */}

<section className="career-hero">

<div className="career-container">

{/* LEFT CONTENT */}

<div className="career-left">

<span>
CAREERS AT QUINTESSENCE ATELIER
</span>

<h1>
Build The Future <br/>
With Vision, <br/>
Strategy & Innovation
</h1>

<p>

At Quintessence Atelier, we believe exceptional people
create exceptional outcomes. We foster a culture driven
by collaboration, creativity and long-term growth where
individuals are empowered to lead, innovate and make
a meaningful impact.

</p>

<div className="career-buttons">

<Link to="/contact" className="career-btn">
Explore Opportunities
</Link>

</div>

</div>



{/* RIGHT IMAGE */}

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\career011.png"
            alt="Career"
        />
    </div>

</div>
</div>
</section>

{/* HORIZONTAL IMAGE SECTION */}

<section className="career-banner-image">

<img
src="src\assets\images\careeer.png"
alt="Team Collaboration"
/>

</section>

{/* =========================
CAREER CULTURE SECTION
========================= */}

<section className="career-culture">

<div className="career-culture-container">

{/* LEFT */}

<div className="career-culture-left">

<span>OUR CULTURE</span>

<h2>
Our People Drive <br/>
Our Vision
</h2>

<p>

At Quintessence Atelier, we believe exceptional results
begin with exceptional people. We foster a collaborative
environment where innovation, strategic thinking, and
continuous learning empower individuals to grow and lead
with confidence.

</p>

<p>

Our culture is built around modern perspectives,
long-term partnerships, and leadership-driven excellence —
creating opportunities for ambitious professionals to shape
meaningful impact across industries and financial markets.

</p>

</div>



{/* RIGHT */}

<div className="career-culture-right">

<div className="culture-card">

<h3>
Building Careers Through Leadership & Innovation
</h3>

<p>

Work alongside experienced professionals in an environment
that encourages leadership, strategic problem solving,
and forward-thinking execution.

</p>

</div>



<div className="culture-card">

<h3>
Empowering Talent Through Opportunity
</h3>

<p>

We invest in talent through mentorship, collaborative
projects, and continuous development opportunities
designed to unlock long-term professional growth.

</p>

</div>



<div className="culture-card">

<h3>
Modern Thinking & Collaborative Excellence
</h3>

<p>

Our teams combine creativity, discipline, and innovation
to deliver impactful solutions while building a workplace
driven by trust, ambition, and shared success.

</p>

</div>

</div>

</div>

</section>

<section className="opportunities-section">
  <div className="opportunities-container">
    <h2 className="opportunities-title">Opportunities</h2>

    <div className="opportunities-list">
      {opportunities.map((item, index) => (
        <div
          key={index}
          className={`opportunity-item ${
            activeOpportunity === index ? "active" : ""
          }`}
        >
          <button
            className="opportunity-header"
            onClick={() =>
              setActiveOpportunity(
                activeOpportunity === index ? null : index
              )
            }
          >
            {item.title}
          </button>

          <div
            className="opportunity-content"
            style={{
              maxHeight: activeOpportunity === index ? "250px" : "0"
            }}
          >
            <div className="opportunity-inner">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* =========================
CAREER PATHS SECTION
========================= */}

<section className="career-paths">

<div className="career-paths-top">

<span>CAREER PATHS</span>

<h2>
Opportunities Built For Every Stage Of Growth
</h2>

<p>
At Quintessence Atelier, we foster an environment where
emerging talent, experienced professionals, and strategic
leaders can collaborate, innovate, and create long-term impact.
</p>

</div>



<div className="career-paths-grid">


{/* CARD 1 */}

<div className="career-path-card">

<div className="career-path-image">

<img
src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
alt=""
/>

</div>

<div className="career-path-content">

<span>01</span>

<h3>
Graduate Programs
</h3>

<p>

Designed for graduates, interns, and early-career talent
looking to build strong foundations in finance, advisory,
strategy, and market research through structured learning.

</p>

</div>

</div>



{/* CARD 2 */}

<div className="career-path-card">

<div className="career-path-image">

<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
alt=""
/>

</div>

<div className="career-path-content">

<span>02</span>

<h3>
Experienced Professionals
</h3>

<p>

Collaborate on complex financial strategies, client advisory,
investment planning, and business transformation initiatives
within a high-performance environment.

</p>

</div>

</div>



{/* CARD 3 */}

<div className="career-path-card">

<div className="career-path-image">

<img
src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
alt=""
/>

</div>

<div className="career-path-content">

<span>03</span>

<h3>
Leadership Opportunities
</h3>

<p>

Lead strategic growth initiatives, mentor future talent,
and contribute to long-term organizational vision through
executive leadership and industry expertise.

</p>

</div>

</div>

</div>

</section>

{/* =========================================
PROFESSIONAL GROWTH SECTION
========================================= */}

<section className="growth-section">

<div className="growth-container">


{/* LEFT */}

<div className="growth-left">

<span>CAREER DEVELOPMENT</span>

<h2>
Building Future Financial Leaders
</h2>

<p>

At Quintessence Atelier, growth is shaped through
real market exposure, strategic collaboration,
leadership mentorship, and long-term professional development.
We create an environment where ambitious professionals
can refine expertise, contribute to meaningful financial initiatives,
and evolve into future industry leaders.

</p>

</div>



{/* RIGHT */}

<div className="growth-right">


{/* ITEM 1 */}

<div className="growth-item">

<div className="growth-number">
01
</div>

<div className="growth-content">

<h3>
Industry Exposure & Workshops
</h3>

<p>

Participate in financial workshops, market discussions,
and strategic sessions designed to strengthen analytical
thinking and modern investment perspectives.

</p>

</div>

</div>



{/* ITEM 2 */}

<div className="growth-item">

<div className="growth-number">
02
</div>

<div className="growth-content">

<h3>
Strategic Project Experience
</h3>

<p>

Work on high-impact advisory and financial initiatives
alongside experienced professionals across evolving sectors
and long-term growth strategies.

</p>

</div>

</div>



{/* ITEM 3 */}

<div className="growth-item">

<div className="growth-number">
03
</div>

<div className="growth-content">

<h3>
Leadership & Mentorship
</h3>

<p>

Receive guidance from senior leadership teams focused on
professional development, strategic decision-making,
and long-term career advancement.

</p>

</div>

</div>

</div>

</div>

</section>

<ContactForm />



</div>

)

}

export default Career;