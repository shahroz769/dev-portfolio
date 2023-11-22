import "./skill.css";

const Skill = ({ title, exp }) => {
    return (
        <div className="skill">
            <h2>{title}</h2>
            <p>{exp}</p>
        </div>
    );
};

export default Skill;
