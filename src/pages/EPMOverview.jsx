import "../styles/EPMOverview.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


function EPMOverview(){

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

    // const [active, setActive] = useState(0);

    const faqs = [
        {
            title: "Understanding Alternative Markets",
            content:
                "Learn how alternative investment markets function and how they differ from traditional investment environments."
        },
        {
            title: "Public vs. Private Opportunities",
            content:
                "Explore the key distinctions between public and private markets, including accessibility, ownership structures, and investment horizons."
        },
        {
            title: "Investor Participation",
            content:
                "Understand the diverse range of investors who participate in private market investments and their long-term objectives."
        },
        {
            title: "Accessing Private Investments",
            content:
                "Discover the pathways available to investors seeking exposure to private assets and alternative investment strategies."
        },
        {
            title: "Core Private Asset Categories",
            content:
                "Gain insight into the primary sectors of private investing, including equity, credit, infrastructure, and real assets."
        }
    ];


    const essential = [
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
    title: "Accessing Alternative Investments",
    link: "/accessing-private-markets",
  },
  {
    title: "Strategic Asset Allocation",
    link: "/allocating-private-assets",
  },
];


return(

<div className="pe-page">

  {/* HERO */}

<section className="pe-hero">

<div className="hero-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
Essentials of Private Markets
</h1>

<p>Through revenue expansion strategies, hands-on operational support, and access to our global platform, we are redefining the future of growth equity investing.</p>

</div>

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="/assets/images/epmoverview.png"
            alt="overview"
        />
    </div>

</div>


</section>

 <section className="explore-section">

            <div className="explore-container">

                <div className="explore-label">
                    <span>EXPLORE THE ESSENTIALS</span>
                </div>

                <h2 className="explore-heading">
                    Learn the fundamentals of major private asset classes
                    and gain insights designed to support informed,
                    long-term decision making.
                </h2>

                <div className="explore-accordion">

                    {essentials.map((item, index) => (

                        <div
                            className="explore-item"
                            key={index}
                        >

                            <button
                                className="explore-trigger"
                                onClick={() =>
                                    setActive(active === index ? -1 : index)
                                }
                            >

                                <span>{item.title}</span>

                                <div className="explore-icon">
                                    {active === index ? "−" : "+"}
                                </div>

                            </button>

                            <div
                                className={`explore-content ${
                                    active === index ? "show" : ""
                                }`}
                            >

                                <p>{item.content}</p>

                                <a
                                    href={item.link}
                                    className="explore-link"
                                >
                                    Learn More

                                    <span>→</span>
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>


        <section className="portfolio-comparison">

  <div className="comparison-header">
    <span>WHY DIVERSIFICATION MATTERS</span>

    <h2>
      Building Resilient Portfolios Through
      Strategic Allocation
    </h2>

    <p>
      Diversification can help balance growth opportunities,
      income generation, and long-term portfolio stability.
    </p>
  </div>

  <div className="comparison-grid">

    {/* Traditional */}

    <div className="portfolio-box">

      <span className="box-label">
        Traditional Portfolio
      </span>

      <div className="allocation-item">
        <h3>60%</h3>
        <p>Public Investments</p>
      </div>

      <div className="allocation-item">
        <h3>40%</h3>
        <p>Fixed Income</p>
      </div>

      <div className="portfolio-summary">
        <span>Moderate Growth</span>
        <span>Higher Concentration</span>
        <span>Limited Flexibility</span>
      </div>

    </div>


    <div className="comparison-divider">
      VS
    </div>


    {/* Enhanced */}

    <div className="portfolio-box enhanced">

      <span className="box-label">
        Enhanced Portfolio
      </span>

      <div className="allocation-item">
        <h3>45%</h3>
        <p>Public Investments</p>
      </div>

      <div className="allocation-item">
        <h3>20%</h3>
        <p>Fixed Income</p>
      </div>

      <div className="allocation-item">
        <h3>15%</h3>
        <p>Growth Opportunities</p>
      </div>

      <div className="allocation-item">
        <h3>10%</h3>
        <p>Alternative Strategies</p>
      </div>

      <div className="allocation-item">
        <h3>10%</h3>
        <p>Real Assets</p>
      </div>

      <div className="portfolio-summary">
        <span>Diversified Growth</span>
        <span>Broader Opportunities</span>
        <span>Improved Resilience</span>
      </div>

    </div>

  </div>

  <div className="comparison-footer">
    Diversification • Growth • Stability • Long-Term Value
  </div>

</section>

<section className="adoption-section">

    <div className="adoption-header">

        <span>MARKET INSIGHTS</span>

        <h2>
            Alternative Investment Adoption
        </h2>

        <p>
            Institutional investors have traditionally embraced alternative
            investments as part of their long-term strategies, while private
            investors are increasingly exploring these opportunities to build
            diversified portfolios.
        </p>

    </div>

    <div className="adoption-chart">

        <div className="adoption-item">

            <div className="bar-wrap">
                <div
                    className="adoption-bar"
                    style={{ height: "48%" }}
                ></div>

                <span className="percentage">
                    48%
                </span>
            </div>

            <h3>Institutional Funds</h3>

        </div>


        <div className="adoption-item">

            <div className="bar-wrap">
                <div
                    className="adoption-bar"
                    style={{ height: "36%" }}
                ></div>

                <span className="percentage">
                    36%
                </span>
            </div>

            <h3>Family Offices</h3>

        </div>


        <div className="adoption-item">

            <div className="bar-wrap">
                <div
                    className="adoption-bar"
                    style={{ height: "24%" }}
                ></div>

                <span className="percentage">
                    24%
                </span>
            </div>

            <h3>Corporate Investors</h3>

        </div>


        <div className="adoption-item highlight">

            <div className="bar-wrap">
                <div
                    className="adoption-bar"
                    style={{ height: "8%" }}
                ></div>

                <span className="percentage">
                    8%
                </span>
            </div>

            <h3>Private Investors</h3>

        </div>

    </div>

    <div className="adoption-note">

        <p>
            The figures shown are illustrative and intended to demonstrate
            how different investor groups may approach alternative
            investment allocation strategies.
        </p>

    </div>

</section>

<section className="faq-section">

            <div className="faq-container">

                <div className="faq-label">
                    <span>FREQUENTLY ASKED QUESTIONS</span>
                </div>

                <h2 className="faq-heading">
                    Explore answers to common questions and build a stronger
                    understanding of private markets and alternative investments.
                </h2>

                <div className="faq-accordion">

                    {faqs.map((item, index) => (

                        <div className="faq-item" key={index}>

                            <button
                                className="faq-trigger"
                                onClick={() =>
                                    setActive(active === index ? -1 : index)
                                }
                            >

                                <span>{item.title}</span>

                                <div className="faq-icon">
                                    {active === index ? "−" : "+"}
                                </div>

                            </button>

                            <div
                                className={`faq-content ${
                                    active === index ? "show" : ""
                                }`}
                            >

                                <p>{item.content}</p>

                            </div>

                        </div>

                    ))}

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
            “Great organizations are built on more than strategy and performance.
They are shaped by people who share a vision,
embrace responsibility, and strive for excellence every day.”
          </h2>
        </div>
      </section>

        



</div>
)

}

export default EPMOverview;