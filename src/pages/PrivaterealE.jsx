import "../styles/PrivaterealE.css";
import { Link } from "react-router-dom";
import { useState } from "react";


// import React, { useEffect, useState } from "react";


function PrivaterealE(){
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

const realEstateBenefits = [
  {
    title: "Portfolio Diversification",
    content:
      "Private real estate can help broaden portfolio exposure by providing access to asset classes that often behave differently from traditional public markets."
  },

  {
    title: "Income & Inflation Resilience",
    content:
      "Real estate assets may generate recurring income streams while certain property sectors can benefit from rental adjustments that help offset inflationary pressures over time."
  },

  {
    title: "Low Correlation",
    content:
      "Private real estate investments have historically demonstrated different performance patterns compared to public equities and bonds, potentially enhancing portfolio balance."
  },

  {
    title: "Attractive Risk-Adjusted Returns",
    content:
      "Through disciplined asset selection, active management and long-term ownership strategies, private real estate can offer compelling return potential relative to risk."
  }
];

// export default function RealEstateBenefits() {
  const [active, setActive] = useState(null);
 
return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

    <div className="hero-left">

        <span>QUINTESSENCE ATELIER</span>

        <h1>
         Essentials of Private Infrastructure
        </h1>

        <p>
            Private infrastructure focuses on investments in assets and services that support everyday life and play a vital role in the functioning and growth of the global economy.
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
            src="src\assets\images\real estate news.png"
            alt="Private real estate"
        />
    </div>
</div>
    

</section>

<section className="pe-insights">

    <div className="pe-insights-top">

        <span>Introduction to Private Infrastructure</span>

        <h2>What You Should Know</h2>

    </div>

    <div className="pe-insights-grid">

        <div className="pe-insight-card">

            <div className="pe-insight-number">01</div>

            <h3>Large Market Opportunity</h3>

            <p>Commercial real estate represents the third-largest global asset class, following equities and fixed income. However, individual investors typically maintain only minimal exposure in their portfolios, especially when compared to institutional allocations.
            </p>

        </div>

        <div className="pe-insight-card">

            <div className="pe-insight-number">02</div>

            <h3>Attractive Risk-Return Profile</h3>

            <p>Private real estate has the potential to generate strong income and long-term capital appreciation. It may also provide a hedge against inflation and demonstrate relatively low correlation with traditional equity and fixed income markets.</p>

        </div>

        <div className="pe-insight-card">

            <div className="pe-insight-number">03</div>

            <h3>The Importance of Where You Invest</h3>

            <p>Successful outcomes in private real estate depend heavily on sector selection and manager expertise. Key considerations include asset quality, growth potential, and long-term value creation opportunities.</p>

        </div>

    </div>

</section>

<section className="qa-realestate">

    <div className="qa-re-header">

        <div className="qa-re-title">
            <span>PRIVATE REAL ESTATE</span>

            <h2>
                Exploring Private Real Estate Investment Opportunities
            </h2>
        </div>

        <div className="qa-re-intro">
            <p>
                Private real estate encompasses a broad range of income-generating commercial properties, such as logistics facilities, multifamily housing, office spaces, hospitality venues, and retail centers. It does not include the residential housing market for home sales.
            </p>
        </div>

    </div>


    {/* PROPERTY TYPES */}

    <div className="qa-property-grid">

        <div className="qa-property-card">

            <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Digital Infrastructure"
            />

            <h3>Digital Infrastructure</h3>

            <p>
                Facilities supporting cloud computing, data storage,
                AI systems and global connectivity networks.
            </p>

        </div>


        <div className="qa-property-card">

            <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial Logistics"
            />

            <h3>Logistics & Industrial</h3>

            <p>
                Distribution centers and industrial assets supporting
                modern supply chains and commerce.
            </p>

        </div>


        <div className="qa-property-card">

            <img
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80"
                alt="Residential Communities"
            />

            <h3>Residential Communities</h3>

            <p>
                Professionally managed housing assets designed for
                stable occupancy and long-term growth.
            </p>

        </div>

    </div>


    {/* MARKET SECTION */}

    <div className="qa-re-market">

        {/* Donut */}

        <div className="qa-donut-wrap">

            <h4>Private Real Estate Market Scale</h4>

            <div className="qa-donut">

                <div className="qa-donut-center">
                    <span>₹1,660T+</span>
                    <small>Market Value</small>
                </div>

            </div>

            <div className="qa-donut-legend">

                <div>
                    <span className="private"></span>
                    Private Market
                </div>

                <div>
                    <span className="public"></span>
                    Public Market
                </div>

            </div>

        </div>


        {/* Bar Chart */}

        <div className="qa-bars-wrap">

            <h4>Typical Real Estate Allocation Levels</h4>

            <div className="qa-bars">

                <div className="qa-bar-item">

                    <div
                        className="qa-bar"
                        style={{ height: "260px" }}
                    >
                        <span>14%</span>
                    </div>

                    <p>Institutions</p>

                </div>


                <div className="qa-bar-item">

                    <div
                        className="qa-bar"
                        style={{ height: "220px" }}
                    >
                        <span>11%</span>
                    </div>

                    <p>Endowments</p>

                </div>


                <div className="qa-bar-item active">

                    <div
                        className="qa-bar"
                        style={{ height: "80px" }}
                    >
                        <span>&lt;3%</span>
                    </div>

                    <p>Individuals</p>

                </div>

            </div>

        </div>

    </div>

</section>


<section className="investment-section">
  <div className="investment-container">

    <div className="investment-header">
      <h2>Strategic Sector Allocation</h2>

      <p>
        Successful real estate investing is driven by selecting sectors
        supported by long-term economic trends, demographic shifts,
        and evolving consumer behavior. Targeting resilient assets can
        enhance portfolio stability and growth potential.
      </p>

      <p>
        By focusing on high-demand property segments and emerging market
        opportunities, investors can position their portfolios to benefit
        from structural growth while managing risk across market cycles.
      </p>
    </div>

    <div className="sector-performance">

      <div className="performance-header">
        <h3>Sector Growth Analysis</h3>
        <span>Cumulative Sector Performance (2010–2025)</span>
      </div>

      <div className="performance-list">

        <div className="performance-item positive">
          <div className="label">
            <span>Logistics & Warehousing</span>
            <strong>138%</strong>
          </div>
          <div className="bar">
            <div style={{ width: "100%" }}></div>
          </div>
        </div>

        <div className="performance-item positive">
          <div className="label">
            <span>Residential Communities</span>
            <strong>82%</strong>
          </div>
          <div className="bar">
            <div style={{ width: "59%" }}></div>
          </div>
        </div>

        <div className="performance-item positive">
          <div className="label">
            <span>Data Centers</span>
            <strong>71%</strong>
          </div>
          <div className="bar">
            <div style={{ width: "51%" }}></div>
          </div>
        </div>

        <div className="performance-item positive">
          <div className="label">
            <span>Healthcare Facilities</span>
            <strong>45%</strong>
          </div>
          <div className="bar">
            <div style={{ width: "33%" }}></div>
          </div>
        </div>

        <div className="performance-item positive">
          <div className="label">
            <span>Hospitality</span>
            <strong>18%</strong>
          </div>
          <div className="bar">
            <div style={{ width: "13%" }}></div>
          </div>
        </div>

        <div className="performance-item negative">
          <div className="label">
            <span>Traditional Office</span>
            <strong>-8%</strong>
          </div>
          <div className="bar negative-bar">
            <div style={{ width: "8%" }}></div>
          </div>
        </div>

        <div className="performance-item negative">
          <div className="label">
            <span>Regional Retail Centers</span>
            <strong>-14%</strong>
          </div>
          <div className="bar negative-bar">
            <div style={{ width: "14%" }}></div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<section className="qa-re-benefits">

      <div className="qa-re-benefits-header">

        <span>PRIVATE REAL ESTATE</span>

        <h2>
          Why Private Real Estate?
        </h2>

        <p>
          Real estate remains one of the most established private market
          asset classes, offering diversification, income potential,
          and access to tangible assets with long-term value creation.
        </p>

      </div>

      <div className="qa-re-accordion">

        {realEstateBenefits.map((item, index) => (

          <div
            className={`qa-re-item ${
              active === index ? "active" : ""
            }`}
            key={index}
          >

            <button
              className="qa-re-btn"
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >

              <span>{item.title}</span>

              <div className="qa-re-icon">
                {active === index ? "−" : "+"}
              </div>

            </button>

            {active === index && (

              <div className="qa-re-content">

                <p>
                  {item.content}
                </p>

              </div>

            )}

          </div>

        ))}

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
            “Our greatest achievements are not measured solely by performance.
They are reflected in the confidence we inspire,
the relationships we build, and the futures we help shape.”
          </h2>
        </div>
      </section>


</div>

)

}

export default PrivaterealE;