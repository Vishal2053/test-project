import "../styles/PracticeManagementResources.css";

function PracticeManagementResources(){

return(

<div className="pmr-page">

<section className="qa-practice-hero">

    <div className="qa-practice-top">

        <div className="qa-practice-left">
            <span className="qa-mini-label">
                INSIGHTS & RESOURCES
            </span>

            <h1>
                Strategic Insights for the Future of Alternative Investments
            </h1>
        </div>

        <div className="qa-practice-right">

            <p>
                Explore curated perspectives, research, and market intelligence
                designed to help investors navigate evolving opportunities across
                private equity, infrastructure, credit, and real assets.
            </p>

            <div className="qa-resource-links">
                <a href="/insights">Market Insights</a>
                <span>|</span>

                <a href="/research">Research Reports</a>
                <span>|</span>

                <a href="/resources">Investor Resources</a>
            </div>

        </div>

    </div>


    <div className="qa-feature-grid">

        <div className="qa-feature-content">

            <span className="qa-feature-label">
                FEATURED PERSPECTIVE
            </span>

            <h2>
                Maintaining a Long-Term Vision in Private Markets
            </h2>

            <p>
                Short-term market cycles often create noise that can distract
                from structural opportunities. Long-duration investment themes,
                disciplined capital deployment, and operational value creation
                remain central to generating sustainable outcomes across
                alternative assets.
            </p>

            <p>
                Our investment philosophy focuses on identifying resilient
                businesses and infrastructure platforms capable of creating
                value through multiple economic environments.
            </p>

            <a href="/insights" className="qa-read-btn">
                Explore Insights
                <span>→</span>
            </a>

        </div>


        <div className="qa-feature-image">

            <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1400&q=80"
                alt="Investment Strategy"
            />

        </div>

    </div>

</section>
</div>

)

}

export default PracticeManagementResources;