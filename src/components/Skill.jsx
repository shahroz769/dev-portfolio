import "@components/css/Skill.css";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import Reveal from "@components/Reveal";

const Skill = ({ title, exp }) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <div
            className="skill"
            onMouseEnter={() => mouseEnterHandler("small")}
            onMouseLeave={mouseLeaveHandler}
            style={{ cursor: "default" }}
        >
            <Reveal>
                <h2>{title}</h2>
            </Reveal>
            <Reveal>
                <p>{exp}</p>
            </Reveal>
        </div>
    );
};

export default Skill;
