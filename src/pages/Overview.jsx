import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import "../styles/Overview.css";
import familyOfficeImg from "../assets/images/Family Offices.jpg";

function OverviewFirm() {

    const [openIndex, setOpenIndex] = useState(null);

const toggleAccordion = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

 useEffect(() => {
    const reveals = document.querySelectorAll(".blackstone-reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
}, []);


const [activeIndex, setActiveIndex] = useState(null);

const clientItems = [
  {
    title: "Institutional Investors",
    link: "/institutional-investors/",
    description:
      "We've generated $445 billion in gains for our investors, including retirement systems representing over 135 million pensioners.",
  },
  {
    title: "Financial Advisors & Individual Investors",
    link: "/financial-advisors/",
    description:
      "Access investment strategies, portfolio solutions, and market insights designed for advisors and individual investors.",
  },
  {
    title: "Family Offices, Endowments & Foundations",
    link: "/family-offices/",
    description:
      "Customized investment approaches to support long-term wealth preservation and institutional goals.",
  },
  {
    title: "Insurers",
    link: "/insurers/",
    description:
      "Dedicated investment solutions tailored to insurance balance sheets and liability management.",
  },
];

  return (
    <>
      {/* ABOUT THE FIRM */}

      <section className="firm-overview-section">
        <div className="firm-overview-container">

          <div className="firm-overview-content">

            <div className="firm-left">
              <h2>About the Firm</h2>
            </div>

            <div className="firm-right">
              <p>
                Quintessence Atelier is a global alternative investment firm
                focused on creating enduring value through disciplined investing
                and strategic partnerships. We work closely with investors and
                businesses to identify opportunities across dynamic sectors,
                supporting growth through deep industry expertise, thoughtful
                execution, and a long-term perspective.
              </p>

              <p>
                Our approach is built on integrity, innovation, and a commitment
                to delivering sustainable outcomes for our stakeholders. By
                combining market insight with operational excellence, we seek to
                build resilient businesses positioned to thrive in an evolving
                global economy.
              </p>
            </div>

          </div>

          <div className="firm-image-wrapper">
            <img
              src={familyOfficeImg}
              alt="Quintessence Atelier"
            />
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}

      <section className="what-we-do-section">
        <div className="what-we-do-container">

          <div className="what-we-do-label">
            <span>WHAT WE DO</span>
            <div className="label-line"></div>
          </div>

          <h2 className="what-we-do-heading">
            At Quintessence Atelier, we create lasting value by
            investing in opportunities that shape tomorrow's economy.
          </h2>

          <div className="what-we-do-grid">

           <div className="blackstone-reveal">
    <div className="blackstone-image">
        <img
            src="src/assets/images/outcomes01.png"
            alt="Corporate Building"
        />
    </div>
</div>

            <div className="what-we-do-content">

              <div className="content-block">
                <h3>Create financial confidence</h3>
                <p>
                  We strive to deliver enduring results for institutional
                  and individual investors through disciplined execution,
                  thoughtful partnerships, and a commitment to excellence.
                </p>
              </div>

              <div className="content-block">
                <h3>Empower exceptional talent</h3>
                <p>
                  We foster an environment where ambitious individuals
                  can grow, innovate, and build meaningful careers while
                  contributing to long-term success.
                </p>
              </div>

              <div className="content-block">
                <h3>Strengthen businesses</h3>
                <p>
                  We partner with businesses by providing strategic insight,
                  operational expertise, and the resources needed to unlock
                  sustainable growth.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="our-clients-section">
  <div className="our-clients-container">
    <h2 className="our-clients-title">Our Clients</h2>

    <div className="our-clients-accordion">
      {clientItems.map((item, index) => (
        <div
          key={index}
          className={`our-clients-item ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <button
            className="our-clients-header"
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          >
            <span>{item.title}</span>

            <div className="our-clients-icon">
              {activeIndex === index ? "⌃" : "⌄"}
            </div>
          </button>

          <div
            className="our-clients-content"
            style={{
              maxHeight: activeIndex === index ? "250px" : "0",
            }}
          >
            <div className="our-clients-inner">
              <p>{item.description}</p>

              <Link to={item.link} className="our-clients-readmore">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* OUR VALUES */}

<section className="values-section">
    <div className="values-container">

        <div className="values-label">
            <span>OUR VALUES</span>
            <div className="values-line"></div>
        </div>

        <div className="values-header">

            <h2>
                Our people are united by values that shape our
                culture, strengthen our partnerships, and guide
                every investment decision we make.
            </h2>

            <a href="/team" className="values-link">
                <span>Learn More About Our People</span>

                <div className="values-arrow">
                    →
                </div>
            </a>

        </div>

        <div className="values-grid">

            <div className="value-card">
                <h3>Relentlessly pursue excellence</h3>

                <p>
                    We strive to achieve exceptional outcomes
                    through disciplined execution, intellectual
                    curiosity, and a commitment to continuous
                    improvement.
                </p>
            </div>

            <div className="value-card">
                <h3>Act with integrity</h3>

                <p>
                    We uphold the highest standards of ethics,
                    transparency, and accountability in every
                    relationship we build.
                </p>
            </div>

            <div className="value-card">
                <h3>Innovate with purpose</h3>

                <p>
                    We embrace forward-thinking ideas and seek
                    opportunities that create meaningful and
                    lasting impact.
                </p>
            </div>

            <div className="value-card">
                <h3>Deliver lasting value</h3>

                <p>
                    We steward capital responsibly and focus
                    on generating sustainable results for our
                    investors and partners.
                </p>
            </div>

            <div className="value-card">
                <h3>Collaborate to succeed</h3>

                <p>
                    We believe diverse perspectives, teamwork,
                    and mutual respect lead to stronger decisions
                    and better outcomes.
                </p>
            </div>

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
    </>
  );
}

export default OverviewFirm;