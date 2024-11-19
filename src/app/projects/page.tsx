import NavBar from "../navbar";
import "./projects.css"; // Import the CSS file

export default function Projects() {
    return (
        <div>
            <NavBar />
            <div className="projects-page">
              
                    <h1 className="big-title">Projects</h1>
                    {/* Project 1 */}
                    <div className="project">
                        <h2 className="project-title">House Party</h2>
                        <ul className="technologies">
                            <li>Django</li>
                            <li>React</li>
                            <li>Spotify API</li>
                        </ul>
                        <div className="image-placeholder">
                            {/* Add your image later */}
                            <img src="/images/house-party.png" alt="Project Preview" />
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project">
                        <h2 className="project-title">Gaucho Ride</h2>
                        <ul className="technologies">
                            <li>SpringBoot</li>
                            <li>Javascript</li>
                            <li>Google Maps API</li>
                        </ul>
                        <div className="image-placeholder">
                            {/* Add your image later */}
                            <img src="/images/gaucho-ride.png" alt="Project Preview" />
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="project">
                        <h2 className="project-title">Better Bill Splitter</h2>
                        <ul className="technologies">
                            <li>React-Native</li>
                            <li>Firebase</li>
                            <li>OCR API</li>
                        </ul>
                        <div className="image-placeholder">
                            {/* Add your image later */}
                            <p>[Image Placeholder]</p>
                        </div>
                </div>
            </div>
        </div>
    );
}
