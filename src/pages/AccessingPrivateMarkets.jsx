import "../styles/AccessingPrivateMarkets.css";
// import { useState } from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function AccessingPrivateMarkets(){

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
            Accessing Private Market
        </h1>

        <p>
            Private markets offer access to investment opportunities beyond
            traditional public securities. Through private equity, credit,
            real assets, and strategic partnerships, investors can pursue
            long-term growth, diversification, and alternative sources of
            value creation.
        </p>

    </div>

    <div className="hero-right">

        <div className="hero-image-wrap">

            <div className="hero-image-overlay"></div>

            <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400"
                alt="Private Market"
            />

        </div>

    </div>

</section>

{/* =========================================
PRIVATE MARKET ACCESS COMPARISON
========================================= */}

<section className="pm-comparison">

<div className="pm-top">

<span>PRIVATE MARKET ACCESS</span>

<h2>
Exploring Different Paths To Private Market Investing
</h2>

<p>
Investment structures offer varying levels of liquidity,
capital deployment, accessibility, and portfolio exposure.
Understanding these differences helps investors identify
solutions aligned with their long-term objectives.
</p>

</div>


<div className="pm-table-wrap">

<table className="pm-table">

<thead>

<tr>

<th>Key Characteristics</th>

<th>Traditional Market Funds</th>

<th className="highlight-col">
Flexible Access Funds
</th>

<th>Long-Term Private Vehicles</th>

</tr>

</thead>

<tbody>

<tr>

<td>Private Market Exposure</td>

<td>Limited</td>

<td className="highlight-col">Balanced Exposure</td>

<td>High Exposure</td>

</tr>

<tr>

<td>Capital Deployment</td>

<td>Immediate</td>

<td className="highlight-col">Immediate</td>

<td>Gradual Over Time</td>

</tr>

<tr>

<td>Investment Access</td>

<td>Daily Availability</td>

<td className="highlight-col">
Periodic Opportunities
</td>

<td>Selective Opportunities</td>

</tr>

<tr>

<td>Liquidity</td>

<td>High</td>

<td className="highlight-col">
Moderate Liquidity
</td>

<td>Limited Liquidity</td>

</tr>

<tr>

<td>Performance Reporting</td>

<td>Daily</td>

<td className="highlight-col">Monthly</td>

<td>Quarterly</td>

</tr>

<tr>

<td>Investment Horizon</td>

<td>Flexible</td>

<td className="highlight-col">
Long-Term Focus
</td>

<td>Extended Commitment</td>

</tr>

</tbody>

</table>

</div>


<div className="pm-note">

<p>

*The information presented is for illustrative purposes only and is intended to provide a general comparison of investment structures and characteristics.

</p>

</div>

</section>

<section className="qa-compounding">

    <div className="qa-compound-header">

        <span>LONG-TERM CAPITAL STRATEGY</span>

        <h2>
            The Advantage of
            Staying Invested
        </h2>

    </div>


    <div className="qa-compound-top">

        <div className="qa-compound-text">

            <p>
                Long-duration investment strategies allow capital to
                remain continuously deployed, creating opportunities
                for growth to build upon growth over time.
            </p>

            <p>
                Rather than repeatedly exiting and redeploying assets,
                investors can benefit from the cumulative effects of
                operational value creation, earnings expansion, and
                market growth across multiple cycles.
            </p>

            <p>
                The discipline of remaining invested through different
                environments can strengthen the potential for compounding
                and long-term value creation.
            </p>

        </div>


        {/* Growth Visual */}

        <div className="qa-growth-chart">

            <div className="qa-chart-title">
                Illustrative Growth of Capital Over Time
            </div>

            <div className="qa-chart-area">

                <svg viewBox="0 0 700 350">

                    {/* grid */}

                    <line x1="50" y1="280" x2="650" y2="280" className="grid"/>
                    <line x1="50" y1="220" x2="650" y2="220" className="grid"/>
                    <line x1="50" y1="160" x2="650" y2="160" className="grid"/>
                    <line x1="50" y1="100" x2="650" y2="100" className="grid"/>
                    <line x1="50" y1="40" x2="650" y2="40" className="grid"/>

                    {/* traditional */}

                    <path
                        className="traditional-line"
                        d="M50 260
                        C120 250,180 245,240 235
                        C300 225,360 210,420 190
                        C500 170,570 145,650 120"
                    />

                    {/* long term */}

                    <path
                        className="compound-line"
                        d="M50 260
                        C120 250,180 235,240 215
                        C300 190,360 160,420 120
                        C500 80,570 40,650 5"
                    />

                </svg>

            </div>

            <div className="qa-chart-legend">

                <div>
                    <span className="legend long"></span>
                    Long-Term Capital Strategy
                </div>

                <div>
                    <span className="legend traditional"></span>
                    Conventional Investment Cycle
                </div>

            </div>

        </div>

    </div>



    {/* CARDS */}

    <div className="qa-compound-grid">

        <div className="qa-compound-card">

            <h3>
                Continuous Capital Deployment
            </h3>

            <p>
                Remaining invested allows businesses and assets
                additional time to mature operationally and unlock
                long-term value opportunities.
            </p>

        </div>


        <div className="qa-compound-card">

            <h3>
                Reduced Reinvestment Risk
            </h3>

            <p>
                Avoiding repeated capital redeployment can help reduce
                uncertainty associated with timing future investments.
            </p>

        </div>


        <div className="qa-compound-card">

            <h3>
                Stronger Compounding Potential
            </h3>

            <p>
                Growth generated over one period can continue creating
                value in subsequent periods, strengthening long-term
                outcomes.
            </p>

        </div>

    </div>


    <div className="qa-editorial-quote">

        <h3>
            Time in the market often matters more than timing the market.
        </h3>

        <p>
            Long-term capital allows businesses to pursue ambitious
            strategies, invest through market cycles, and create
            value that compounds over time.
        </p>

    </div>

</section>

{/* =====================================
ASSET CLASSES
===================================== */}

<section className="asset-platform">

<div className="asset-head">

<span>INVESTMENT STRATEGIES</span>

<h2>
Explore Private Market <br />
Investment Opportunities
</h2>

<p>
Our investment platform provides exposure across
multiple private market strategies designed to support
long-term growth, diversification, and value creation.
</p>

</div>


<div className="asset-grid">

{/* Private Equity */}

<div className="asset-card">

<div className="asset-image">

<img
src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200"
alt="Private Equity"
/>

</div>

<div className="asset-content">

<h3>Private Equity</h3>

<p>
Investing in businesses with a focus on operational
improvement, strategic growth initiatives, and
long-term value creation.
</p>

</div>

</div>



{/* Private Credit */}

<div className="asset-card">

<div className="asset-image">

<img
src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200"
alt="Private Credit"
/>

</div>

<div className="asset-content">

<h3>Private Credit</h3>

<p>
Providing tailored financing solutions through
private lending strategies designed to support
business growth and capital needs.
</p>

</div>

</div>



{/* Real Estate */}

<div className="asset-card">

<div className="asset-image">

<img
src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
alt="Real Estate"
/>

</div>

<div className="asset-content">

<h3>Real Estate</h3>

<p>
Investing in income-producing and growth-oriented
properties across residential, commercial and
specialized sectors.
</p>

</div>

</div>



{/* Infrastructure */}

<div className="asset-card">

<div className="asset-image">

<img
src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200"
alt="Infrastructure"
/>

</div>

<div className="asset-content">

<h3>Infrastructure</h3>

<p>
Supporting essential assets and services that
contribute to economic development and
long-term stability.
</p>

</div>

</div>

</div>

</section>

<section className="journey-section">

<div className="container">

<div className="journey-head">

<span>ACCESS JOURNEY</span>

<h2>
The Path To Long-Term
<span> Value Creation</span>
</h2>

<p>
A structured approach designed to help investors
navigate private markets through planning,
strategy, allocation, and long-term growth.
</p>

</div>

<div className="journey-map">

<div className="journey-node top">
<h3>Investor</h3>
</div>

<div className="vertical-line"></div>

<div className="journey-node second">
<h3>Financial Planning</h3>
</div>

<div className="branch-row">

<div className="journey-node left">
<h3>Private Market Strategy</h3>
</div>

<div className="journey-node right">
<h3>Portfolio Allocation</h3>
</div>

</div>

<div className="merge-line"></div>

<div className="journey-node bottom">
<h3>Long-Term Value Creation</h3>
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

export default AccessingPrivateMarkets;