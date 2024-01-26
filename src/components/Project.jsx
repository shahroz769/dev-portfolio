import "@components/css/Project.css";
import IconGithub from "@assets/jsx/github";
import IconUrl from "@assets/jsx/url";
import { useContext, useEffect, useState } from "react";
import { CursorContext } from "@context/CursorContext";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@components/Reveal";
import crossIcon from "@assets/cross.svg";

const Project = ({
    img,
    title,
    techs,
    code,
    project,
    shortDescription,
    longDescription,
}) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [showProjectModal, setShowProjectModal] = useState(false);
    useEffect(() => {
        document.body.style.overflow = showProjectModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showProjectModal]);
    return (
        <>
            <AnimatePresence>
                {showProjectModal && (
                    <>
                        <motion.div
                            key={"project-modal-container"}
                            className="project-modal-container"
                            initial={{
                                opacity: 0,
                                backdropFilter: "blur(0px)",
                            }}
                            animate={{
                                opacity: 1,
                                backdropFilter: "blur(12px)",
                            }}
                            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            onClick={(e) => {
                                if (
                                    e.target.classList.contains(
                                        "project-modal-container"
                                    )
                                ) {
                                    setShowProjectModal(false);
                                }
                            }}
                        >
                            <motion.div
                                className="project-modal"
                                key={"project-modal"}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                            >
                                <div
                                    style={{ position: "relative" }}
                                    className="project-modal-image"
                                    onMouseEnter={() =>
                                        mouseEnterHandler("large")
                                    }
                                    onMouseLeave={mouseLeaveHandler}
                                >
                                    <img src={img} alt="Project Image" />
                                    <div
                                        style={{
                                            width: "1.6rem",
                                            position: "absolute",
                                            top: "12px",
                                            right: "12px",
                                            backgroundColor: "#0aff9d",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            setShowProjectModal(false);
                                        }}
                                    >
                                        <img src={crossIcon} alt="Cross" />
                                    </div>
                                </div>
                                <div className="project-modal-body">
                                    <Reveal>
                                        <h3
                                            onMouseEnter={() =>
                                                mouseEnterHandler("small")
                                            }
                                            onMouseLeave={mouseLeaveHandler}
                                            style={{ cursor: "default" }}
                                        >
                                            {title}
                                        </h3>
                                    </Reveal>
                                    <div className="project-techs modal-project-techs">
                                        <Reveal>
                                            <p
                                                onMouseEnter={() =>
                                                    mouseEnterHandler("small")
                                                }
                                                onMouseLeave={mouseLeaveHandler}
                                                style={{
                                                    cursor: "default",
                                                }}
                                            >
                                                {techs}
                                            </p>
                                        </Reveal>
                                    </div>
                                    <div className="project-modal-description">
                                        {
                                            <Reveal>
                                                <p
                                                    onMouseEnter={() =>
                                                        mouseEnterHandler(
                                                            "small"
                                                        )
                                                    }
                                                    onMouseLeave={
                                                        mouseLeaveHandler
                                                    }
                                                    style={{
                                                        cursor: "default",
                                                    }}
                                                >
                                                    {longDescription}
                                                </p>
                                            </Reveal>
                                        }
                                    </div>
                                    <div className="modal-project-urls">
                                        <Reveal>
                                            <h3
                                                className="modal-links-text"
                                                onMouseEnter={() =>
                                                    mouseEnterHandler("small")
                                                }
                                                onMouseLeave={mouseLeaveHandler}
                                                style={{ cursor: "default" }}
                                            >
                                                Project Links<span>.</span>
                                            </h3>
                                        </Reveal>
                                    </div>
                                    <div className="project-modal-links">
                                        <a
                                            href={code}
                                            target="_blank"
                                            onMouseEnter={() =>
                                                mouseEnterHandler("small")
                                            }
                                            onMouseLeave={mouseLeaveHandler}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <Reveal>
                                                <IconGithub fill="var(--accent-)" />
                                            </Reveal>
                                            <Reveal>
                                                <p>Source code</p>
                                            </Reveal>
                                        </a>
                                        <a
                                            href={project}
                                            target="_blank"
                                            onMouseEnter={() =>
                                                mouseEnterHandler("small")
                                            }
                                            onMouseLeave={mouseLeaveHandler}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <Reveal>
                                                <IconUrl fill="var(--accent-)" />
                                            </Reveal>
                                            <Reveal>
                                                <p>Live project</p>
                                            </Reveal>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <div className="project">
                <div
                    onClick={() => setShowProjectModal(true)}
                    className="project-bg"
                >
                    <img src={img} alt="Project Image" loading="lazy" />
                </div>

                <div className="project-details">
                    <div className="project-title">
                        <Reveal>
                            <h3
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{
                                    cursor: "default",
                                }}
                            >
                                {title}
                            </h3>
                        </Reveal>
                        <div className="project-title-hl"></div>
                        <div className="project-title-urls">
                            <a
                                target="_blank"
                                href={code}
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ cursor: "pointer" }}
                            >
                                <Reveal>
                                    <IconGithub />
                                </Reveal>
                            </a>
                            <a
                                target="_blank"
                                href={project}
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ cursor: "pointer" }}
                            >
                                <Reveal>
                                    <IconUrl />
                                </Reveal>
                            </a>
                        </div>
                    </div>
                    <div className="project-techs">
                        <Reveal>
                            <p
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ cursor: "default" }}
                            >
                                {techs}
                            </p>
                        </Reveal>
                    </div>
                    <div className="project-description">
                        <Reveal>
                            <p
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ cursor: "default" }}
                            >
                                {shortDescription}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
