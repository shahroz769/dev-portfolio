import "./nav.css";
import githubIcon from "../../assets/github.svg";
import linkedInIcon from "../../assets/LinkedIn.svg";
import twitterIcon from "../../assets/twitter.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import profilePicDesk from "../../assets/image-profile-desktop.webp";
import profilePicTab from "../../assets/image-profile-tablet.webp";
import profilePicMob from "../../assets/image-profile-mobile.webp";
import { useEffect, useState } from "react";

const Navbar = ({ profileImageBoolean, bottom }) => {
    const [src, setSrc] = useState();
    useEffect(() => {
        if (window.innerWidth > 768) {
            setSrc(profilePicDesk);
        } else if (window.innerWidth > 600 && window.innerWidth <= 768) {
            setSrc(profilePicTab);
        } else if (window.innerWidth <= 600) {
            setSrc(profilePicMob);
        }
    }, []);
    console.log("src", src);
    console.log("WIDTH", window.innerWidth);
    return (
        <header
            className="nav-header"
            style={{ paddingBottom: bottom || 0 + "px" }}
        >
            <div>
                <h3 className="logo">shahrozAhmed</h3>
            </div>
            <div className="icons">
                <a href="https://github.com/shahroz769" target="_blank">
                    <img src={githubIcon} alt="github" />
                </a>
                <a
                    href="www.linkedin.com/in/shahroz769"
                    target="_blank"
                >
                    <img src={linkedInIcon} alt="linkedIn" />
                </a>
                <a href="https://wa.me/923072800769" target="_blank">
                    <img src={whatsappIcon} alt="twitter" />
                </a>
                <a href="https://twitter.com/devShahroz" target="_blank">
                    <img src={twitterIcon} alt="twitter" />
                </a>
            </div>
            {profileImageBoolean && (
                <div className="nav-profile-image">
                    <img src={src} alt="Profile Picture" />
                </div>
            )}
        </header>
    );
};

export default Navbar;
