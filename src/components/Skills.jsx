import Skill from "@components/Skill";
import "@components/css/Skills.css";

const Skills = () => {
    const skills = [
        { title: "HTML", exp: "6 Months Experience" },
        { title: "CSS", exp: "6 Months Experience" },
        { title: "Javascript", exp: "6 Months Experience" },
        { title: "Firebase", exp: "6 Months Experience" },
        { title: "GSAP", exp: "6 Months Experience" },
        { title: "ReactJS", exp: "3 Months Experience" },
        { title: "NodeJS", exp: "3 Months Experience" },
        { title: "ExpressJS", exp: "3 Months Experience" },
        { title: "MongoDB", exp: "3 Months Experience" },
        { title: "Framer-Motion", exp: "2 Months Experience" },
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
