import "../styles/Shareholders.css";

function Shareholders(){

return(

<div className="shareholders-page">
<section className="investor-overview">
  <div className="investor-container">

    <div className="investor-content">
      <h2>Investor Overview</h2>

      <p>
        Our continued growth is driven by long-term partnerships,
        disciplined investment strategies, and a commitment to
        delivering sustainable value. As investors place confidence
        in our platform, we expand our capabilities and pursue new
        opportunities across evolving markets.
      </p>
    </div>

    <div className="investor-stats">

      <div className="stat-card">
        <span className="stat-value">₹9,925</span>
        <span className="stat-label">Current Market Value</span>
      </div>

      <div className="stat-card">
        <span className="stat-value">₹3,615 Cr</span>
        <span className="stat-label">Total Distributions</span>
      </div>

      <div className="stat-card">
        <span className="stat-value">4.8%</span>
        <span className="stat-label">Annual Distribution Yield</span>
      </div>

    </div>

  </div>
</section>

<section className="investor-nav-section">
  <div className="investor-container">

    <div className="investor-nav">

      <a href="#overview">Company Overview</a>

      <a href="#events">Investor Events</a>

      <a href="#reports">Financial Reports</a>

      <a href="#governance">Governance</a>

      <a href="#news">News & Updates</a>

      <a href="#tax">Tax Documents</a>

      <a href="#contact">Contact Investor Team</a>

    </div>

  </div>
</section>

<section id="reports" className="financial-update-section">
  <div className="investor-container">

    <div className="section-label">
      <span>Latest Financial Update</span>
    </div>

    <div className="financial-card">

      <div className="financial-content">
        <h2>Second Quarter 2026 Performance Review</h2>

        <p>
          Explore our latest financial performance, market insights,
          portfolio developments, and strategic initiatives that continue
          to support long-term value creation.
        </p>
      </div>

      <div className="financial-links">

        <a href="#">
          Investor Presentation
        </a>

        <a href="#">
          Quarterly Earnings Report
        </a>

        <a href="#">
          Financial Statement Package
        </a>

        <a href="#">
          Download Data Workbook
        </a>

        <a href="#">
          Management Commentary
        </a>

      </div>

    </div>

  </div>
</section>

<section id="contact" className="investor-contact-section">
  <div className="investor-container">

    <div className="section-label">
      <span>Investor Support</span>
    </div>

    <div className="contact-grid">

      {/* Investor Relations */}

      <div className="contact-card">
        <div className="contact-top">
          <span className="contact-tag">Investor Relations</span>
          <h2>Connect With Our Investor Team</h2>
        </div>

        <div className="contact-info">
          <p>
            ABC Capital Partners<br />
            Financial District<br />
            Mumbai, Maharashtra 400001
          </p>

          <a href="tel:+911234567890">
            +91 12345 67890
          </a>

          <a href="mailto:investors@abccapital.com">
            investors@abccapital.com
          </a>
        </div>
      </div>

      {/* Support Services */}

      <div className="contact-card">
        <div className="contact-top">
          <span className="contact-tag">Investor Services</span>
          <h2>Account & Transfer Assistance</h2>
        </div>

        <div className="contact-info">
          <p>
            Investor Services Center<br />
            Corporate Business Park<br />
            Bengaluru, Karnataka 560001
          </p>

          <a href="tel:+911800123456">
            1800 123 456
          </a>

          <a href="#">
            www.investorservices.com
          </a>
        </div>
      </div>

    </div>

  </div>
</section>

<section className="investor-disclosure-section">
  <div className="investor-container">

    <div className="section-label">
      <span>Important Information</span>
    </div>

    <div className="disclosure-wrapper">

      <div className="disclosure-main">
        <h2>Investor Notice</h2>

        <p>
          The information presented on this website is provided for
          informational purposes only and should not be considered
          investment, legal, tax, or financial advice.
        </p>

        <p>
          Investment values may fluctuate due to market conditions,
          economic developments, and other factors. Investors should
          carefully evaluate risks and consult professional advisors
          before making investment decisions.
        </p>
      </div>

      <div className="disclosure-side">
        <div className="info-box">
          <span>Disclosure</span>
          <p>
            Historical performance is not a guarantee of future results.
          </p>
        </div>

        <div className="info-box">
          <span>Risk Reminder</span>
          <p>
            All investments involve varying degrees of risk,
            including the possible loss of capital.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
</div>

)

}

export default Shareholders;