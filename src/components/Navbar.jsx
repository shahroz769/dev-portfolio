import "@components/css/Navbar.css";
import IconGithub from "@assets/jsx/github";
import linkedInIcon from "@assets/LinkedIn.svg";
import twitterIcon from "@assets/twitter.svg";
import whatsappIcon from "@assets/whatsapp.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContext, useCallback } from "react";
import { CursorContext } from "@context/CursorContext";
import Reveal from "@components/Reveal";

const Navbar = ({ profileImageBoolean, bottom }) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [src, setSrc] = useState();

    const updateImageSrc = useCallback(() => {
        if (window.innerWidth > 768) {
            return "https://res.cloudinary.com/doigzeztt/image/upload/v1705742111/image-profile-desktop_zn5wf8.webp";
        } else if (window.innerWidth > 600 && window.innerWidth <= 768) {
            return "https://res.cloudinary.com/doigzeztt/image/upload/v1705742111/image-profile-tablet_ltkoqr.webp";
        } else {
            return "https://res.cloudinary.com/doigzeztt/image/upload/f_webp/v1706038916/image-profile-mobile_rbg44m.jpg";
        }
    }, []);

    useEffect(() => {
        setSrc(updateImageSrc());
        function handleResize() {
            setSrc(updateImageSrc());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [updateImageSrc]);
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
                        shahroz<span style={{ color: "#0aff9d" }}>ahmed</span>
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
                    >
                        <IconGithub />
                    </a>
                </Reveal>
                <Reveal>
                    <a
                        href="https://www.linkedin.com/in/shahroz769"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                    >
                        <img src={linkedInIcon} alt="linkedIn" />
                    </a>
                </Reveal>
                <Reveal>
                    <a
                        href="https://wa.me/923072800769"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                    >
                        <img src={whatsappIcon} alt="twitter" />
                    </a>
                </Reveal>
                <Reveal>
                    <a
                        href="https://twitter.com/devshahroz"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                    >
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                </Reveal>
            </div>
            {profileImageBoolean && (
                <div className="nav-profile-image">
                    <motion.img
                        initial={{
                            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                            y: -100,
                        }}
                        animate={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            y: 0,
                        }}
                        transition={{
                            ease: [0.83, 0, 0.17, 1],
                            duration: 1.5,
                        }}
                        fetchpriority="high"
                        src={src}
                        alt="Profile Picture"
                    />
                </div>
            )}
        </header>
    );
};

export default Navbar;
