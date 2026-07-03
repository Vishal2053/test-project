import "../styles/Privatecredit.css";
import { Link } from "react-router-dom";
// import React, { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";


import React, { useEffect, useState } from "react";


function Privatecredit(){

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

 const [active, setActive] = useState(null);

    const faqs = [
        {
            title: "What is private credit?",
            content:
                "Private credit refers to loans and financing solutions provided by non-bank institutions directly to businesses and organizations. It has become an increasingly important source of capital across a wide range of industries."
        },
        {
            title: "Why consider investing in private credit?",
            content:
                "Private credit may offer the potential for attractive risk-adjusted returns, portfolio diversification, and access to opportunities that are not typically available in public debt markets."
        },
        {
            title: "What do private credit managers do?",
            content:
                "Private credit managers identify investment opportunities, conduct due diligence, structure financing solutions, monitor borrower performance, and actively manage investments throughout their lifecycle."
        },
        {
            title: "How do you select a trusted private credit manager?",
            content:
                "Investors often evaluate experience, investment discipline, track record, risk management practices, industry expertise, and alignment of interests when choosing a private credit manager."
        },
        {
            title: "How large is the private credit market?",
            content:
                "The private credit market has experienced significant growth over the past decade and continues to expand as businesses increasingly seek alternative sources of financing beyond traditional banks."
        }
    ];

 
    const chartData = [
  { year: "2020", qaReturns: 10000, traditional: 10000 },
  { year: "2021", qaReturns: 13500, traditional: 12000 },
  { year: "2022", qaReturns: 17500, traditional: 13500 },
  { year: "2023", qaReturns: 22500, traditional: 15000 },
  { year: "2024", qaReturns: 29500, traditional: 17500 },
  { year: "2025", qaReturns: 38500, traditional: 21000 },
];

const performanceData = [
  {
    year: "2020",
    values: [
      { value: "12.5%", label: "Private Equity", highlight: true },
      { value: "8.2%", label: "Public Equity" },
      { value: "5.4%", label: "Bonds" },
      { value: "3.8%", label: "Cash" }
    ]
  },
  {
    year: "2021",
    values: [
      { value: "15.8%", label: "Private Equity", highlight: true },
      { value: "11.2%", label: "Public Equity" },
      { value: "4.6%", label: "Bonds" },
      { value: "2.9%", label: "Cash" }
    ]
  },
  {
    year: "2022",
    values: [
      { value: "10.4%", label: "Private Equity", highlight: true },
      { value: "-3.2%", label: "Public Equity" },
      { value: "-1.1%", label: "Bonds" },
      { value: "2.5%", label: "Cash" }
    ]
  },
  {
    year: "2023",
    values: [
      { value: "14.7%", label: "Private Equity", highlight: true },
      { value: "9.8%", label: "Public Equity" },
      { value: "4.1%", label: "Bonds" },
      { value: "3.2%", label: "Cash" }
    ]
  },
  {
    year: "2024",
    values: [
      { value: "13.9%", label: "Private Equity", highlight: true },
      { value: "8.6%", label: "Public Equity" },
      { value: "5.2%", label: "Bonds" },
      { value: "3.5%", label: "Cash" }
    ]
  },
  {
    year: "2025",
    values: [
      { value: "16.4%", label: "Private Equity", highlight: true },
      { value: "10.1%", label: "Public Equity" },
      { value: "4.8%", label: "Bonds" },
      { value: "3.7%", label: "Cash" }
    ]
  }
];
return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

    <div className="hero-left">

        <span>QUINTESSENCE ATELIER</span>

        <h1>
           Essentials of Private Credit
        </h1>

        <p>
            Private credit focuses on providing financing solutions through privately negotiated loans and credit arrangements, outside the traditional banking system and public markets.
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
            src="src\assets\images\credit news.jpg"
            alt="Private Credit"
        />
    </div>

</div>


</section>

<section className="pe-insights">

    <div className="pe-insights-top">

        <span>Introduction to Private Credit</span>

        <h2>What You Should Know</h2>
    </div>
    <div className="pe-insights-grid">

        <div className="pe-insight-card">

            <div className="pe-insight-number">01</div>

            <h3>Expanding Market Opportunity</h3>

            <p>
                As businesses increasingly look beyond conventional bank financing, the demand for flexible and customized funding solutions continues to grow. Private credit has evolved across a wide range of strategies—including direct lending, asset-backed financing, real estate debt, and specialized credit solutions—to address diverse capital requirements.
            </p>

        </div>

        <div className="pe-insight-card">

            <div className="pe-insight-number">02</div>

            <h3>Stable Income Potential</h3>
            <p>
                Because private credit transactions are negotiated directly between borrowers and lenders, investors benefit from tailored investment structures, deeper access to borrower insights, and ongoing engagement throughout the investment lifecycle. These characteristics have historically supported capital preservation while offering attractive income opportunities.
            </p>

        </div>

        <div className="pe-insight-card">

            <div className="pe-insight-number">03</div>

            <h3>A Valuable Portfolio Component</h3>

            <p>Incorporating private credit into a traditional portfolio of equities and fixed income investments can enhance diversification and strengthen the overall risk-return profile. As a result, private credit is increasingly being considered an important element of long-term portfolio construction.</p>

        </div>

    </div>

</section>


<section className="credit-landscape">

    <div className="credit-header">

        <span>PRIVATE CREDIT INSIGHTS</span>

        <h2>
            Exploring the Private Credit Landscape
        </h2>

    </div>

    <div className="credit-grid">

        <article className="credit-card">

            <div className="credit-image">

                <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200"
                    alt="Corporate Credit"
                />

            </div>

            <div className="credit-content">

                <h3>
                    Corporate Lending Solutions
                </h3>

                <p>
                    Financing solutions tailored to support
                    business expansion, acquisitions, and
                    operational initiatives through privately
                    negotiated arrangements.
                </p>

            </div>

        </article>


        <article className="credit-card">

            <div className="credit-image">

                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
                    alt="Asset Based Credit"
                />

            </div>

            <div className="credit-content">

                <h3>
                    Asset-Backed Financing
                </h3>

                <p>
                    Credit opportunities supported by
                    physical or contractual assets, offering
                    structured income potential and enhanced
                    security characteristics.
                </p>

            </div>

        </article>


        <article className="credit-card">

            <div className="credit-image">

                <img
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200"
                    alt="Structured Credit"
                />

            </div>

            <div className="credit-content">

                <h3>
                    Structured Credit Strategies
                </h3>

                <p>
                    Diversified approaches designed to
                    balance risk and return through
                    customized investment structures and
                    income-generating assets.
                </p>

            </div>

        </article>

    </div>

</section>


<section className="qa-direct-lending">

    <div className="qa-direct-header">

        <span>PRIVATE CREDIT INSIGHTS</span>

        <h2>
            Understanding Direct Lending
        </h2>

        <p>
            Direct lending creates a more efficient pathway between
            investors and businesses seeking capital. By reducing
            intermediary layers, it can provide greater certainty,
            flexibility, and alignment for both borrowers and investors.
        </p>

    </div>


    <div className="qa-lending-comparison">

        {/* Traditional */}

        <div className="qa-path">

            <div className="qa-path-title">
                Traditional Lending
            </div>

            <div className="qa-journey">

                <div className="qa-node">
                    <div className="qa-icon">🏢</div>
                    <h4>Borrower</h4>
                </div>

                <div className="qa-arrow"></div>

                <div className="qa-node">
                    <div className="qa-icon">🏛️</div>
                    <h4>Bank</h4>
                </div>

                <div className="qa-arrow"></div>

                <div className="qa-node">
                    <div className="qa-icon">📈</div>
                    <h4>Syndication</h4>
                </div>

                <div className="qa-arrow"></div>

                <div className="qa-node">
                    <div className="qa-icon">👥</div>
                    <h4>Investors</h4>
                </div>

            </div>

        </div>


        {/* Direct */}

        <div className="qa-path featured">

            <div className="qa-path-title">
                Direct Lending
            </div>

            <div className="qa-journey">

                <div className="qa-node">
                    <div className="qa-icon">🏢</div>
                    <h4>Borrower</h4>
                </div>

                <div className="qa-arrow"></div>

                <div className="qa-node qa-brand">

    <img
        src="src/assets/images/Quintessence atelier.jpg"
        alt="Quintessence Atelier"
        className="qa-brand-logo"
    />

</div>

                <div className="qa-arrow"></div>

                <div className="qa-node">
                    <div className="qa-icon">👥</div>
                    <h4>Investors</h4>
                </div>

            </div>

        </div>

    </div>


    <div className="qa-direct-note">

        Direct lending structures may offer efficiency,
        customized terms, and a closer alignment between
        capital providers and businesses seeking financing.

    </div>

</section>

<section className="growth-section">

    <div className="growth-header">

        <span>LONG-TERM VALUE CREATION</span>

        <h2>
            Higher Growth Potential
        </h2>

        <p>
            Our investment philosophy focuses on identifying
            opportunities with the potential to generate
            sustainable long-term value while maintaining
            disciplined risk management.
        </p>

    </div>

    <div className="growth-grid">

        <div className="growth-left">

            <div className="growth-item">
                <h4>Strategic Selection</h4>

                <p>
                    We focus on high-quality opportunities
                    supported by strong fundamentals and
                    long-term market trends.
                </p>
            </div>

            <div className="growth-item">
                <h4>Active Value Creation</h4>

                <p>
                    Through operational expertise and strategic
                    guidance, we seek to unlock additional value
                    throughout the investment lifecycle.
                </p>
            </div>

            <div className="growth-item">
                <h4>Disciplined Risk Management</h4>

                <p>
                    Every investment is evaluated through a
                    rigorous framework designed to preserve
                    capital and support consistent performance.
                </p>
            </div>

        </div>

        <div className="growth-right">

            <div className="chart-placeholder">

  <ResponsiveContainer width="100%" height={380}>
    <LineChart data={chartData}>

      <CartesianGrid stroke="#e5e5e5" />

      <XAxis
        dataKey="year"
        tick={{ fill: "#666", fontSize: 13 }}
        axisLine={false}
        tickLine={false}
      />

      <YAxis
        tick={{ fill: "#666", fontSize: 13 }}
        axisLine={false}
        tickLine={false}
      />

      <Line
        type="monotone"
        dataKey="qaReturns"
        stroke="#8a6a44"
        strokeWidth={3}
        dot={false}
      />

      <Line
        type="monotone"
        dataKey="traditional"
        stroke="#c8c8c8"
        strokeWidth={3}
        dot={false}
      />

    </LineChart>
  </ResponsiveContainer>

</div>

            <div className="growth-highlight">
                <span>2.0x</span>
                <p>
                    illustrative increase in portfolio value
                    compared with traditional approaches.
                </p>
            </div>

        </div>

    </div>

</section>

<section className="performance-section">

    <div className="performance-header">

        <h2>Why Investors Allocate to Private Markets</h2>

        <div className="performance-text">

            <p>
                Private market investments have historically delivered
                attractive long-term performance while offering access
                to opportunities beyond traditional public markets.
            </p>

            <p>
                Diversification across private equity, infrastructure,
                real assets and strategic partnerships can help investors
                pursue growth while reducing reliance on public market cycles.
            </p>

        </div>

    </div>

    <div className="performance-table">

        {performanceData.map((yearData, index) => (
            <div className="year-column" key={index}>

                <div className="year-heading">
                    {yearData.year}
                </div>

                {yearData.values.map((item, i) => (
                    <div
                        key={i}
                        className={`performance-cell ${
                            item.highlight ? "highlight" : ""
                        }`}
                    >
                        <h3>{item.value}</h3>
                        <span>{item.label}</span>
                    </div>
                ))}

            </div>
        ))}

    </div>

    <div className="ranking-box">

        <h3>Average Annual Returns (2020–2025)</h3>

        <div className="ranking-row">
            <span>Private Equity</span>
            <strong>13.9%</strong>
        </div>

        <div className="ranking-row">
            <span>Public Equity</span>
            <strong>7.4%</strong>
        </div>

        <div className="ranking-row">
            <span>Bonds</span>
            <strong>3.8%</strong>
        </div>

        <div className="ranking-row">
            <span>Cash</span>
            <strong>2.7%</strong>
        </div>

    </div>

</section>

<div className="portfolio-table">

  <div className="table-header">
    <div></div>
    <div>Traditional 60/40</div>
    <div>20% Direct Lending</div>
  </div>

  <div className="table-row">
    <div>Annualized Return</div>
    <div>6.8%</div>
    <div>8.1%</div>
  </div>

  <div className="table-row">
    <div>Annualized Volatility</div>
    <div>10.4%</div>
    <div>9.4%</div>
  </div>

  <div className="table-row">
    <div>Current Yield</div>
    <div>2.8%</div>
    <div>4.2%</div>
  </div>

</div>




<section className="faq-section">

            <div className="faq-container">

                {/* Label */}

                <div className="faq-label">
                    <span>FREQUENTLY ASKED QUESTIONS</span>
                </div>
                {/* Heading */}

                <h2 className="faq-heading">
                    Explore common questions about private credit and gain
                    a deeper understanding of this growing segment of
                    alternative investments.
                </h2>


                {/* Accordion */}

                <div className="faq-accordion">

                    {faqs.map((faq, index) => (

                        <div className="faq-item" key={index}>

                            <button
                                className="faq-trigger"
                                onClick={() =>
                                    setActive(active === index ? -1 : index)
                                }
                            >

                                <span>{faq.title}</span>

                                <div className="faq-icon">
                                    {active === index ? "−" : "+"}
                                </div>

                            </button>


                            <div
                                className={`faq-content ${
                                    active === index ? "show" : ""
                                }`}
                            >
                                <p>{faq.content}</p>

                            </div>

                        </div>

                    ))}

                </div>
                {/* Disclaimer */}
                <div className="faq-disclaimer">
                    <p>
                        Past performance does not guarantee future results.
                        Diversification does not ensure a profit or protect
                        against investment losses.
                    </p>
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

{/* Statement */}
      <section className="team-note">
        <div className="container">
          <h2>
            “The path to sustainable growth is guided by thoughtful decisions.
When ambition is balanced with discipline,
success becomes both meaningful and enduring.”
          </h2>
        </div>
      </section>

</div>

)

}

export default Privatecredit;