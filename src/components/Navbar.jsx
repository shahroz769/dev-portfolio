import "@components/css/Navbar.css";
import IconGithub from "@assets/jsx/github";
import linkedInIcon from "@assets/LinkedIn.svg";
import twitterIcon from "@assets/twitter.svg";
import whatsappIcon from "@assets/whatsapp.svg";
import { useState, useContext, useCallback } from "react";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { CursorContext } from "@context/CursorContext";
import Reveal from "@components/Reveal";
import circleImage from "@assets/circle.svg";

const Navbar = ({ profileImageBoolean, bottom }) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [profileImageLoaded, setProfileImageLoaded] = useState(false);
    const [animationState, setAnimationState] = useState("hidden");

    const handleImageLoad = useCallback(() => {
        setAnimationState("visible");
    }, []);

    const imageVariants = {
        hidden: {
            y: -100,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        visible: {
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
    };

    return (
        <header
            className="nav-header"
            style={{ paddingBottom: bottom || 0 + "px" }}
        >
            <div>
                <Reveal>
                    <h3
                        className="logo"
                        onMouseEnter={() => mouseEnterHandler("medium")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "default" }}
                    >
                        shahroz
                        <span style={{ color: "var(--accent-)" }}>ahmed</span>
                    </h3>
                </Reveal>
            </div>
            <div className="icons">
                <Reveal>
                    <a
                        href="https://github.com/shahroz769"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                        aria-label="Github Profile"
                    >
                        <IconGithub aria-hidden="true" />
                        <span className="sr-only">Github</span>
                    </a>
                </Reveal>
                <Reveal>
                    <a
                        href="https://www.linkedin.com/in/shahroz769"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                        aria-label="LinkedIn Profile"
                    >
                        <img
                            style={{ width: "25px", height: "24px" }}
                            src={linkedInIcon}
                            alt="LinkedIn"
                        />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </Reveal>
                <Reveal>
                    <a
                        href="https://wa.me/923072800769"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                        aria-label="WhatsApp"
                    >
                        <img
                            style={{ width: "26px", height: "22px" }}
                            src={whatsappIcon}
                            alt="Whatsapp"
                        />
                        <span className="sr-only">WhatsApp</span>
                    </a>
                </Reveal>
                <Reveal>
                    <a
                        href="https://twitter.com/devshahroz"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                        aria-label="Twitter Profile"
                    >
                        <img
                            style={{ width: "25px", height: "24px" }}
                            src={twitterIcon}
                            alt="Twitter"
                        />
                        <span className="sr-only">Twitter</span>
                    </a>
                </Reveal>
            </div>
            {profileImageBoolean && (
                <div
                    className={`nav-profile-image ${
                        profileImageLoaded ? "" : "profile-loading"
                    }`}
                >
                    <LazyMotion features={domAnimation}>
                        <m.img
                            initial="hidden"
                            animate={animationState}
                            variants={imageVariants}
                            transition={{
                                ease: [0.83, 0, 0.17, 1],
                                duration: 1.5,
                            }}
                            fetchpriority="high"
                            src="https://res.cloudinary.com/doigzeztt/image/upload/f_avif,w_445,h_720,e_saturation:-10/v1705742111/image-profile-desktop_zn5wf8.webp"
                            alt="Profile Picture"
                            onLoad={() => {
                                handleImageLoad();
                                setProfileImageLoaded(true);
                            }}
                            onError={() => {
                                setProfileImageLoaded(true);
                            }}
                        />

                        <m.div
                            className="circle1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                        >
                            <img src={circleImage} alt="Circle" />
                        </m.div>
                    </LazyMotion>
                </div>
            )}
        </header>
    );
};

export default Navbar;
