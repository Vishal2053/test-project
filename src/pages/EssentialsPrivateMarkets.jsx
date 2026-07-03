import "../styles/EssentialsPrivateMarkets.css";
import { useState } from "react";

function EssentialsPrivateMarkets(){

    const [active, setActive] = useState(null);
    const essentials = [
        {
            title: "Essentials of Private Equity",
            description:
                "Understand how private equity investments support business transformation, operational growth and long-term value creation across industries.",
            link: "/private-equity"
        },

        {
            title: "Essentials of Private Credit",
            description:
                "Explore how private credit provides flexible financing solutions while offering access to opportunities beyond traditional lending markets.",
            link: "/private-credit"
        },

        {
            title: "Essentials of Private Real Estate",
            description:
                "Learn how institutional real estate investing creates value through strategic acquisitions, development and asset management.",
            link: "/private-real-estate"
        },

        {
            title: "Essentials of Private Infrastructure",
            description:
                "Discover how infrastructure investments support essential services, energy systems and long-term economic development.",
            link: "/private-infrastructure"
        },

        {
            title: "Accessing Private Markets",
            description:
                "A guide for financial professionals seeking to understand pathways to private market opportunities and portfolio diversification.",
            link: "/access-private-markets"
        },

        {
            title: "Allocating to Private Assets",
            description:
                "Learn portfolio allocation strategies and how private assets can complement traditional investment approaches.",
            link: "/private-assets-allocation"
        }
    ];

    const toggleAccordion = (index) => {
        setActive(active === index ? null : index);
    };


return(

<div className="pe-page">

{/* HERO */}

<section className="pe-hero">

<div className="hero-left">

<span>QUINTESSENCE ATELIER</span>

<h1>
Understanding Private Markets
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
            alt="Essentials of private market"
        />
    </div>

</div>


</section>

<section className="essentials-section">

            <div className="essentials-container">

                <div className="essentials-label">
                    <span>EXPLORE THE ESSENTIALS</span>
                </div>

                <h2 className="essentials-heading">
                    Learn the fundamentals of major private asset classes.
                </h2>

                <div className="essentials-accordion">

                    {essentials.map((item, index) => (
                        <div className="essentials-item" key={index}>

                            <button
                                className="essentials-trigger"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{item.title}</span>

                                <div className="essentials-icon">
                                    {active === index ? "−" : "+"}
                                </div>
                            </button>

                            <div className={`essentials-content ${active === index ? "show" : ""}`}>
                                <p>{item.description}</p>

                                <a
                                    href={item.link}
                                    className="essentials-link"
                                >
                                    Learn More →
                                </a>
                            </div>

                        </div>
                    ))}

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




</div>

)

}

export default EssentialsPrivateMarkets;