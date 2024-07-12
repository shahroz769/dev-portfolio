import "@components/css/Project.css";
import IconGithub from "@assets/jsx/github";
import IconUrl from "@assets/jsx/url";
import { useContext, useEffect, useState } from "react";
import { CursorContext } from "@context/CursorContext";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
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
    imageErrorHandler,
}) => {
    const [projectImageLoaded, setProjectImageLoaded] = useState(false);
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
                        <LazyMotion features={domAnimation}>
                            <m.div
                                key={"project-modal-container"}
                                className="project-modal-container"
                                initial={{
                                    opacity: 0,
                                    background: "rgba(29, 29, 29, 0)",
                                }}
                                animate={{
                                    opacity: 1,
                                    background: "rgba(29, 29, 29, 0.9)",
                                }}
                                exit={{
                                    opacity: 0,
                                    background: "rgba(29, 29, 29, 0)",
                                }}
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
                                <m.div
                                    className="project-modal"
                                    key={"project-modal"}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                >
                                    <div
                                        style={{ position: "relative" }}
                                        className="project-modal-image"
                                    >
                                        <img src={img} alt="Project Image" />
                                        <div
                                            style={{
                                                width: "1.6rem",
                                                position: "absolute",
                                                top: "12px",
                                                right: "12px",
                                                backgroundColor:
                                                    "var(--accent-)",
                                                borderRadius: "50%",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => {
                                                setShowProjectModal(false);
                                            }}
                                            onMouseEnter={() =>
                                                mouseEnterHandler("small")
                                            }
                                            onMouseLeave={mouseLeaveHandler}
                                            onError={() => {
                                                imageErrorHandler();
                                            }}
                                        >
                                            <img src={crossIcon} alt="Cross" />
                                        </div>
                                    </div>
                                    <div className="project-modal-body">
                                        <h3
                                            onMouseEnter={() =>
                                                mouseEnterHandler("small")
                                            }
                                            onMouseLeave={mouseLeaveHandler}
                                            style={{ cursor: "default" }}
                                        >
                                            {title}
                                        </h3>
                                        <div className="project-techs modal-project-techs">
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
                                        </div>
                                        <div className="project-modal-description">
                                            <p
                                                onMouseEnter={() =>
                                                    mouseEnterHandler("small")
                                                }
                                                onMouseLeave={mouseLeaveHandler}
                                                style={{
                                                    cursor: "default",
                                                }}
                                            >
                                                {longDescription}
                                            </p>
                                        </div>
                                        <div className="modal-project-urls">
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
                                                <IconGithub fill="var(--accent-)" />
                                                <p>Source code</p>
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
                                                <IconUrl fill="var(--accent-)" />
                                                <p>Live project</p>
                                            </a>
                                        </div>
                                    </div>
                                </m.div>
                            </m.div>
                        </LazyMotion>
                    </>
                )}
            </AnimatePresence>
            <div className="project">
                <div
                    onClick={() => setShowProjectModal(true)}
                    className={`project-bg ${
                        projectImageLoaded ? "" : "loading"
                    }`}
                >
                    <img
                        src={img}
                        alt="Project Image"
                        loading="lazy"
                        onLoad={() => {
                            setProjectImageLoaded(true);
                        }}
                        onError={() => {
                            imageErrorHandler();
                            setProjectImageLoaded(true);
                        }}
                        className={projectImageLoaded ? "loaded" : ""}
                    />
                </div>
                <div className="project-details">
                    <div className="project-title">
                        <Reveal>
                            <h2
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{
                                    cursor: "default",
                                    fontSize: "1.5rem",
                                    lineHeight: "2rem",
                                }}
                            >
                                {title}
                            </h2>
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
