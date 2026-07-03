import "../styles/TechnologyInnovation.css";
import React, { useEffect, useState } from "react";


function TechnologyInnovation(){


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



    const [active, setActive] = useState(null);

    const roles = [
        {
            title: "Software Development",
            content:
                "Our software development teams transform ideas into scalable digital solutions by combining technical expertise, innovation and a user-focused approach to deliver exceptional experiences."
        },
        {
            title: "Product Management",
            content:
                "We bridge strategy and execution by defining product vision, prioritizing opportunities and collaborating across teams to create products that deliver measurable value."
        },
        {
            title: "Cyber Security",
            content:
                "Our cybersecurity professionals proactively identify risks, strengthen digital resilience and protect critical systems against evolving threats."
        },
        {
            title: "Data Analyst",
            content:
                "We turn complex information into actionable insights through data analysis, helping organizations make informed and confident decisions."
        },
        {
            title: "Data Engineering",
            content:
                "Our data engineers design and optimize robust data infrastructures that enable efficient processing, accessibility and scalability."
        },
        {
            title: "UI/UX Design",
            content:
                "We create intuitive and engaging experiences by combining creativity, research and human-centered design principles."
        }
    ];


return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

<div className="hero-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
Technology Innovation
</h1>

<p>Through revenue expansion strategies, hands-on operational support, and access to our global platform, we are redefining the future of growth equity investing.</p>

</div>

<div className="hero-right">
    <div className="hero-image-wrap">
        <div className="hero-image-overlay"></div>
        <img
            src="src\assets\images\technology01.png"
            alt="Tactical opporoootunities"
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
            src="src\assets\images\technology.png"
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



 <section className="roles-section">

            <div className="roles-container">

                <div className="roles-label">
                    <span>OUR ROLES</span>
                </div>

                <h2 className="roles-heading">
                    We are forward-thinking problem solvers who transform
                    ideas into impactful solutions through collaboration,
                    innovation and expertise.
                </h2>

                <div className="roles-accordion">

                    {roles.map((role, index) => (

                        <div
                            className="roles-item"
                            key={index}
                        >

                            <button
                                className="roles-trigger"
                                onClick={() =>
                                    setActive(active === index ? -1 : index)
                                }
                            >

                                <span>{role.title}</span>

                                <div className="roles-icon">
                                    {active === index ? "−" : "+"}
                                </div>

                            </button>

                            <div
                                className={`roles-content ${
                                    active === index ? "show" : ""
                                }`}
                            >

                                <p>{role.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ==========================
RECRUITING PROGRAMS
========================== */}

<section className="recruiting-section">

    <div className="recruiting-container">

        {/* Header */}

        <div className="recruiting-header">

            <div className="recruiting-label">
                <span>RECRUITING PROGRAMS</span>
            </div>

            <h2>
                We are committed to developing the next generation of talent by
                creating meaningful learning experiences, expanding access to
                opportunities, and empowering individuals to build impactful careers.
            </h2>

            <p>
                Through immersive programs and hands-on experiences, participants
                gain exposure to real-world challenges while developing the skills,
                confidence, and professional networks needed for long-term success.
            </p>

        </div>


        {/* Cards */}

        <div className="recruiting-grid">

            <div className="recruiting-card">

                <h3>Future Innovators Program</h3>

                <p>
                    Designed for aspiring technology professionals, this program
                    provides early exposure to how innovation and digital solutions
                    influence modern business strategy. Participants collaborate
                    on practical projects, gain mentorship from experienced teams,
                    and develop the technical and leadership capabilities required
                    to thrive in an evolving digital landscape.
                </p>
            </div>


            <div className="recruiting-card">

                <h3>Technology Experience Program</h3>
                <p>
                    This initiative offers undergraduate students the opportunity
                    to work in collaborative teams on real business challenges,
                    gaining valuable project experience and industry exposure.
                    Through guided learning and hands-on problem-solving,
                    participants strengthen the practical skills that support
                    future internships and career growth.
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
</div>
)

}

export default TechnologyInnovation;