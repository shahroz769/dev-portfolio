import "@components/css/Navbar.css";
import IconGithub from "@assets/jsx/github";
import linkedInIcon from "@assets/LinkedIn.svg";
import twitterIcon from "@assets/twitter.svg";
import whatsappIcon from "@assets/whatsapp.svg";
import { useEffect, useState } from "react";
import { useContext, useCallback } from "react";
import { CursorContext } from "@context/CursorContext";
import Reveal from "@components/Reveal";
import BlurUpImage from "@components/BlurUpImage";

const Navbar = ({ profileImageBoolean, bottom }) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [highSrc, setHighSrc] = useState();
    const [lowSrc, setLowSrc] = useState();

    const updateHighImageSrc = useCallback(() => {
        if (window.innerWidth > 768) {
            return "https://res.cloudinary.com/doigzeztt/image/upload/v1705742111/image-profile-desktop_zn5wf8.webp";
        } else if (window.innerWidth > 600 && window.innerWidth <= 768) {
            return "https://res.cloudinary.com/doigzeztt/image/upload/v1705742111/image-profile-tablet_ltkoqr.webp";
        } else {
            return "https://res.cloudinary.com/doigzeztt/image/upload/f_webp/v1706038916/image-profile-mobile_rbg44m.jpg";
        }
    }, []);

    const updateLowImageSrc = useCallback(() => {
        if (window.innerWidth > 768) {
            return "https://res.cloudinary.com/doigzeztt/image/upload/f_webp/v1706103161/blur_profile_portfolio/image-profile-desktop_blur_vpibn5.jpg";
        } else if (window.innerWidth > 600 && window.innerWidth <= 768) {
            return "https://res.cloudinary.com/doigzeztt/image/upload/f_webp/v1706103161/blur_profile_portfolio/image-profile-tablet_blur_wxjxek.jpg";
        } else {
            return "https://res.cloudinary.com/doigzeztt/image/upload/f_webp/v1706103161/blur_profile_portfolio/image-profile-mobile_blur_vozhjs.jpg";
        }
    }, []);

    useEffect(() => {
        setHighSrc(updateHighImageSrc());
        setLowSrc(updateLowImageSrc());
        function handleResize() {
            setHighSrc(updateHighImageSrc());
            setLowSrc(updateLowImageSrc());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [updateHighImageSrc, updateLowImageSrc]);

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
                    <BlurUpImage lowResSrc={lowSrc} highResSrc={highSrc} />
                </div>
            )}
        </header>
    );
};

export default Navbar;
