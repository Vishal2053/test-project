import "../styles/privateEquity01.css";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";



function PrivateEquity(){

    const essentials = [
  {
    title: "Understanding Private Markets",
    link: "/EPMOverview",
  },
  {
    title: "Introduction to Private Credit",
    link: "/private-credit",
  },
  {
    title: "Private Real Estate Strategies",
    link: "/private-real-estate",
  },
  {
    title: "Infrastructure Investment Insights",
    link: "/private-infrastructure",
  },
  {
    title: "Strategic Asset Allocation",
    link: "/AllocatingPrivateAssets",
  },
];


const growthData = [
  { year: "2016", private: 100000, public: 100000 },
  { year: "2017", private: 125000, public: 118000 },
  { year: "2018", private: 150000, public: 130000 },
  { year: "2019", private: 190000, public: 155000 },
  { year: "2020", private: 250000, public: 180000 },
  { year: "2021", private: 390000, public: 240000 },
  { year: "2022", private: 520000, public: 290000 },
  { year: "2023", private: 630000, public: 250000 },
  { year: "2024", private: 710000, public: 330000 },
  { year: "2025", private: 790000, public: 386000 },
];


 
return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

    <div className="hero-left">

        <span>QUINTESSENCE ATELIER</span>

        <h1>
            Essentials of Private Equity
        </h1>

        <p>Private equity involves investing in privately owned businesses at various stages of development, from emerging ventures to well-established enterprises.
        </p>

        <div className="hero-highlight">
            Typically, investments in privately held companies,
            ranging from startups to large enterprises.
        </div>

        <a
            href="/brochures/private-equity-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-brochure"
        >
            Download Brochure
            <span>↗</span>
        </a>

    </div>

    <div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="/assets/images/private equity news 1.jpg"
            alt="Private equity 01"
        />
    </div>
</div>


</section>

<section className="pe-insights">

    <div className="pe-insights-top">

        <span>UNDERSTANDING PRIVATE EQUITY</span>

        <h2>What You Should Know</h2>

    </div>

    <div className="pe-insights-grid">

        <div className="pe-insight-card">

            <div className="pe-insight-number">01</div>

            <h3>Extensive Investment Landscape</h3>

            <p>
                The private equity market presents a significant opportunity, as a large proportion of businesses around the world remain privately owned. Family offices and institutional investors have long incorporated private equity into their investment strategies, while an increasing number of individual investors are also recognizing its potential.
            </p>

        </div>

        <div className="pe-insight-card">

            <div className="pe-insight-number">02</div>

            <h3>Track Record of Strong Performance</h3>

            <p>
                Over extended periods, private equity has demonstrated the ability to deliver compelling returns while helping diversify traditional investment portfolios. For investors seeking long-term growth opportunities, it can serve as an important component of a well-balanced investment approach.
            </p>

        </div>

        <div className="pe-insight-card">

            <div className="pe-insight-number">03</div>

            <h3>Driving Value Through Expertise</h3>
            <p>Private equity managers actively work alongside businesses to enhance operations, strengthen strategic direction, and unlock growth opportunities. Through these value-creation initiatives, investors gain access to the potential for enhanced returns, while accepting a longer investment horizon and reduced liquidity compared to public markets.</p>

        </div>

    </div>

</section>




<section className="pm-editorial">

  <div className="pm-intro">
    <span>UNDERSTANDING PRIVATE MARKETS</span>

    <h2>
      Private markets create opportunities beyond traditional exchanges,
      enabling long-term partnerships, strategic expansion, and sustainable value creation.
    </h2>
  </div>

  <div className="pm-metrics">

    <div className="pm-metric">
      <h3>88</h3>
      <p>Private Businesses</p>
    </div>

    <div className="pm-metric featured">
      <h3>₹500Cr+</h3>
      <p>Enterprise Scale</p>
    </div>

    <div className="pm-metric">
      <h3>~45%</h3>
      <p>Market Concentration</p>
    </div>

  </div>

  <div className="pm-statement">
    <h2>
      Building value through disciplined investments,
      strategic partnerships, and a long-term perspective.
    </h2>
  </div>

</section>


<section className="qa-patient-capital">

  <div className="qa-capital-header">

    <span>LONG-TERM PERSPECTIVE</span>

    <h2>
      The Value of Patient Capital
    </h2>

    <p>
      Sustainable wealth creation often requires discipline,
      strategic execution, and a long-term outlook.
      While public markets may fluctuate with short-term
      sentiment, private market strategies focus on
      operational improvement and enduring value creation.
    </p>

  </div>

  <div className="qa-chart-layout">

    <div className="qa-chart-wrapper">

      <ResponsiveContainer width="100%" height={500}>

        <LineChart data={growthData}>

          <XAxis dataKey="year" />

          <YAxis tickFormatter={(v) => `₹${v / 100000}L`} />

          <Tooltip
            formatter={(value) =>
              `₹${value.toLocaleString("en-IN")}`
            }
          />

          <Line
            type="monotone"
            dataKey="private"
            stroke="#0A5B66"
            strokeWidth={4}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="public"
            stroke="#C6CBD3"
            strokeWidth={4}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

    <div className="qa-results">

      <div className="qa-result-item">

        <span>PRIVATE MARKET STRATEGY</span>

        <h3>₹7.9Cr</h3>

      </div>

      <div className="qa-result-item">

        <span>TRADITIONAL BENCHMARK</span>

        <h3>₹3.86Cr</h3>

      </div>

    </div>

  </div>

  <div className="qa-editorial-quote">

    "Long-term conviction often rewards discipline
    over reaction."

  </div>

</section>


<section className="qa-core-allocation">

  <div className="qa-core-header">

    <div>
      <span>PRIVATE EQUITY INSIGHTS</span>

      <h2>
        Why Private Equity Matters
      </h2>
    </div>

    <p>
      Institutional investors have historically embraced
      private equity as part of long-term portfolio construction,
      while individual participation has remained comparatively
      limited. Expanding access is gradually reshaping this landscape.
    </p>

  </div>


  <div className="qa-allocation-flow">

    <div className="qa-flow-card card-1">
      <h3>27%</h3>
      <h4>Family Offices</h4>
      <p>
        Often maintain meaningful allocations to private opportunities.
      </p>
    </div>

    <div className="qa-flow-card card-2">
      <h3>21%</h3>
      <h4>Institutional Endowments</h4>
      <p>
        Long-term investors seeking diversification and growth.
      </p>
    </div>

    <div className="qa-flow-card card-3">
      <h3>14%</h3>
      <h4>Pension Institutions</h4>
      <p>
        Strategic exposure supporting multi-decade objectives.
      </p>
    </div>

    <div className="qa-flow-card card-4">
      <h3>&lt;3%</h3>
      <h4>Individual Investors</h4>
      <p>
        Historically underrepresented within private markets.
      </p>
    </div>

  </div>


  <div className="qa-core-quote">

    "Access to private markets has historically differed across investor groups — creating opportunities as participation evolves."

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