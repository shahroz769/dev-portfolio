import Button from "../Button";
import Project from "./Project";
import "./projects.css";
import image1 from "../../assets/thumbnail-project-1-large.webp";
import image2 from "../../assets/thumbnail-project-2-large.webp";
import image3 from "../../assets/thumbnail-project-3-large.webp";
import image4 from "../../assets/thumbnail-project-4-large.webp";
import image5 from "../../assets/thumbnail-project-5-large.webp";
import image6 from "../../assets/thumbnail-project-6-large.webp";

const Projects = () => {
    const projects = [
        { img: image1, title: "DESIGN PORTFOLIO", techs: ["HTML", "CSS"] },
        {
            img: image2,
            title: "E-LEARNING LANDING PAGE",
            techs: ["HTML", "CSS"],
        },
        {
            img: image3,
            title: "TODO WEB APP",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            img: image4,
            title: "ENTERTAINMENT WEB APP",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            img: image5,
            title: "MEMORY GAME",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            img: image6,
            title: "ART GALLERY SHOWCASE",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
    ];
    return (
        <div className="projects-container">
            <div className="header">
                <h1>Projects</h1>
                <Button text="MORE WORK" />
            </div>
            <div className="body">
                {projects.map((project, ind) => (
                    <Project
                        key={ind}
                        img={project.img}
                        title={project.title}
                        techs={project.techs}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
