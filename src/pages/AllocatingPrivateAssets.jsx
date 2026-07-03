import "../styles/AllocatingPrivateAssets.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";



function AllocatingPrivateAssets(){

  const [active, setActive] = useState(null);
  
      const essentials = [
          {
              title: "Essentials of Private Equity",
              content:
                  "Understand how private equity investments support business growth, operational transformation and long-term value creation through active ownership.",
              link: "#"
          },
          {
              title: "Essentials of Private Credit",
              content:
                  "Explore how private credit provides flexible financing solutions while offering alternative sources of income and diversification.",
              link: "#"
          },
          {
              title: "Essentials of Private Real Estate",
              content:
                  "Learn the fundamentals of private real estate investing and how it can provide income potential and portfolio diversification.",
              link: "#"
          },
          {
              title: "Essentials of Private Infrastructure",
              content:
                  "Discover how infrastructure investments support essential services and long-term development through resilient assets.",
              link: "#"
          },
          {
              title: "For Financial Professionals: Accessing Private Markets",
              content:
                  "Explore key considerations for gaining access to private markets and understanding the opportunities available to investors.",
              link: "#"
          },
          {
              title: "For Financial Professionals: Allocating to Private Assets",
              content:
                  "Learn how private assets may complement traditional portfolios and contribute to long-term investment objectives.",
              link: "#"
          }
      ];

return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

<div className="hero-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
  Allocating Private Assets
</h1>

<p>
Private markets offer access to investment opportunities beyond traditional public securities. Through private equity, credit, real assets, and strategic partnerships, investors can pursue long-term growth, diversification, and alternative sources of value creation.
</p>

</div>


<div className="hero-right">

    <div className="hero-image-wrap">

        <div className="hero-image-overlay"></div>

        <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400"
            alt="Real Estate"
        />

    </div>

</div>

</section>


<section className="allocation-matters">

<div className="allocation-header">

<span>ALLOCATION STRATEGY</span>

<h2>
Why Allocation <br />
Matters
</h2>

<p>
A well-structured allocation approach helps investors
balance growth objectives, manage risk, and build
long-term portfolio resilience.
</p>

</div>

<div className="allocation-grid">

<div className="allocation-box">

<div className="allocation-number">01</div>

<h3>Diversification</h3>

<p>
Reducing concentration risk by spreading investments
across multiple asset categories and market segments.
</p>

</div>

<div className="allocation-box">

<div className="allocation-number">02</div>

<h3>Growth Potential</h3>

<p>
Seeking long-term capital appreciation through a broad
range of investment opportunities and strategies.
</p>

</div>

<div className="allocation-box">

<div className="allocation-number">03</div>

<h3>Income Generation</h3>

<p>
Combining growth-oriented and income-focused investments
to support portfolio objectives.
</p>

</div>

<div className="allocation-box">

<div className="allocation-number">04</div>

<h3>Risk Management</h3>

<p>
Building portfolio resilience through disciplined
allocation and strategic diversification.
</p>

</div>

</div>

</section>

<section className="allocation-framework">

<div className="framework-head">

<span>ALLOCATION FRAMEWORK</span>

<h2>
Aligning Investment Goals
With Strategic Solutions
</h2>

<p>
Different investment objectives may require different
portfolio approaches. A diversified allocation framework
helps investors balance growth, income, resilience,
and long-term value creation.
</p>

</div>

<div className="framework-table">

<div className="framework-row framework-title">

<div>Investment Objective</div>
<div>Suggested Focus</div>

</div>

<div className="framework-row">

<div className="objective">
Capital Growth
</div>

<div className="focus">
Private Equity
</div>

</div>

<div className="framework-row">

<div className="objective">
Income Generation
</div>

<div className="focus">
Private Credit
</div>

</div>

<div className="framework-row">

<div className="objective">
Inflation Protection
</div>

<div className="focus">
Infrastructure
</div>

</div>

<div className="framework-row">

<div className="objective">
Asset Appreciation
</div>

<div className="focus">
Real Estate
</div>

</div>

<div className="framework-row">

<div className="objective">
Diversification
</div>

<div className="focus">
Multi Asset Solutions
</div>

</div>

</div>

</section>

<section className="portfolio-allocation">

<div className="portfolio-head">

<span>SAMPLE PORTFOLIO</span>

<h2>
Illustrative Diversified
Portfolio Allocation
</h2>

<p>
A diversified portfolio may combine multiple private market
strategies to balance growth potential, income generation,
asset appreciation, and long-term resilience.
</p>

</div>


<div className="allocation-board">

<div className="allocation-item">

<div className="allocation-top">
<h3>Private Equity</h3>
<span>35%</span>
</div>

<div className="allocation-bar">
<div
className="allocation-fill"
style={{width:"35%"}}
></div>
</div>

</div>


<div className="allocation-item">

<div className="allocation-top">
<h3>Private Credit</h3>
<span>25%</span>
</div>

<div className="allocation-bar">
<div
className="allocation-fill"
style={{width:"25%"}}
></div>
</div>

</div>


<div className="allocation-item">

<div className="allocation-top">
<h3>Real Estate</h3>
<span>20%</span>
</div>

<div className="allocation-bar">
<div
className="allocation-fill"
style={{width:"20%"}}
></div>
</div>

</div>


<div className="allocation-item">

<div className="allocation-top">
<h3>Infrastructure</h3>
<span>10%</span>
</div>

<div className="allocation-bar">
<div
className="allocation-fill"
style={{width:"10%"}}
></div>
</div>

</div>


<div className="allocation-item">

<div className="allocation-top">
<h3>Cash & Other Assets</h3>
<span>10%</span>
</div>

<div className="allocation-bar">
<div
className="allocation-fill"
style={{width:"10%"}}
></div>
</div>

</div>

</div>

</section>

{/* =========================================
WHY PRIVATE MARKETS
========================================= */}

<section className="private-markets">

<div className="private-top">

<span>PRIVATE MARKETS INSIGHTS</span>

<h2>
Why Investors Explore
Private Markets
</h2>

<p>

Private markets offer access to opportunities beyond
traditional investments, helping investors pursue
long-term growth, diversification and strategic value creation.

</p>

</div>



<div className="private-list">


{/* 01 */}

<div className="private-row">

<div className="private-number">
01
</div>

<div className="private-content">

<h3>
Long-Term Growth
</h3>

<p>

Private market investments often focus on building
businesses and assets over extended periods,
supporting sustainable growth beyond short-term cycles.

</p>

</div>

</div>



{/* 02 */}

<div className="private-row">

<div className="private-number">
02
</div>

<div className="private-content">

<h3>
Portfolio Diversification
</h3>

<p>

Alternative investments can provide exposure to
opportunities that may behave differently from
traditional public market investments.

</p>

</div>

</div>



{/* 03 */}

<div className="private-row">

<div className="private-number">
03
</div>

<div className="private-content">

<h3>
Unique Opportunities
</h3>

<p>

Private markets provide access to businesses,
real assets and investment opportunities not
typically available through public markets.

</p>

</div>

</div>



{/* 04 */}

<div className="private-row">

<div className="private-number">
04
</div>

<div className="private-content">

<h3>
Strategic Value Creation
</h3>

<p>

Active ownership, operational improvements and
long-term planning can help unlock additional
sources of value over time.

</p>

</div>

</div>

</div>

</section>

<section className="essentials-section">

  <div className="essentials-header">
    <span>QUINTESSENCE ATELIER</span>
    <h2>Explore Insights</h2>
    <p>
      Discover essential perspectives designed to help investors
      understand private markets and long-term investment opportunities.
    </p>
  </div>

  <div className="essentials-list">

    {essentials.map((item, index) => (
      <Link
        key={index}
        to={item.link}
        className="essential-row"
      >
        <span>{item.title}</span>

        <div className="essential-arrow">
          →
        </div>
      </Link>
    ))}

  </div>

</section>






</div>

)

}

export default AllocatingPrivateAssets;