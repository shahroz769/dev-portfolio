import { useState } from "react";
import "./project.css";

const Project = ({ img, title, techs }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                window.innerWidth >= 768 && setShowOverlay(true);
            }}
            onMouseLeave={() => {
                window.innerWidth >= 768 && setShowOverlay(false);
            }}
            className={`project ${showOverlay ? "overlay-active" : ""}`}
        >
            <div className="img-container">
                <img src={img} alt={title} />
                {window.innerWidth > 768 && (
                    <div className="overlay">
                        <div className="overlay-btn">
                            <div className="btn">
                                <span className="submit-btn">VIEW PROJECT</span>
                            </div>
                            <div className="btn">
                                <span className="submit-btn">VIEW CODE</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <h3>{title}</h3>
                <div className="tech">
                    {techs.map((tech, ind) => {
                        return <p key={ind}>{tech}</p>;
                    })}
                </div>
            </div>
            {window.innerWidth <= 768 && (
                <div className="tab-btn-container">
                    <div className="btn">
                        <span className="submit-btn">VIEW PROJECT</span>
                    </div>
                    <div className="btn">
                        <span className="submit-btn">VIEW CODE</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
