import './portfolio.scss';

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <p>some of my projects</p>
            {/* <ul>
                <li>Featured</li>
                <li>Djago</li>
                <li>Ruby on Rails</li>
                <li>Express</li>
                <li>MERN</li>
                <li>Test</li>
            </ul> */}
            <div className="container">
                <div className="item">
                    <img src="assets/profile.jpg"></img>
                    <h3>Covid Tracker</h3>
                </div>

                <div className="item">
                    <img src=""></img>
                    <h3>Covid Tracker</h3>
                </div>

                <div className="item">
                    <img src=""></img>
                    <h3>Covid Tracker</h3>
                </div>
            </div>
        </div>
    )
}
