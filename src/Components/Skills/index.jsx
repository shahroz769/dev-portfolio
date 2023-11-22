import Skill from "./Skill";
import "./skills.css";

const Skills = () => {
    const skills = [
        { title: "HTML", exp: "1 Year Experience" },
        { title: "CSS", exp: "1 Year Experience" },
        { title: "Javascript", exp: "1 Year Experience" },
        { title: "Firebase", exp: "1 Year Experience" },
        { title: "GSAP", exp: "1 Year Experience" },
        { title: "ReactJS", exp: "1 Year Experience" },
        { title: "NodeJS", exp: "1 Year Experience" },
        { title: "ExpressJS", exp: "1 Year Experience" },
        { title: "MongoDB", exp: "1 Year Experience" },
    ];
    return (
        <div className="skills-container">
            {skills.map((skill, ind) => (
                <Skill key={ind} title={skill.title} exp={skill.exp} />
            ))}
        </div>
    );
};

export default Skills;
