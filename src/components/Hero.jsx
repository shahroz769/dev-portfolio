import "@components/css/Hero.css";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import Reveal from "@components/Reveal";

const Hero = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");

        if (contactSection) {
            const offsetTop = contactSection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };
    return (
        <section>
            <div className="hero">
                <div className="hero-title">
                    <Reveal>
                        <h1
                            style={{ cursor: "default" }}
                            onMouseEnter={() => mouseEnterHandler("large")}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            Nice to meet you! I’m{" "}
                            <span className="name">Shahroz</span>.
                        </h1>
                    </Reveal>
                </div>
                <div className="hero-body">
                    <Reveal>
                        <p
                            onMouseEnter={() => mouseEnterHandler("medium")}
                            onMouseLeave={mouseLeaveHandler}
                            style={{ cursor: "default" }}
                        >
                            Based in Pakistan, I’m a MERN stack developer
                            passionate about building accessible web apps that
                            users love.
                        </p>
                    </Reveal>
                    <div>
                        <Reveal>
                            <div className="btn">
                                <input
                                    className="submit-btn"
                                    onMouseEnter={() =>
                                        mouseEnterHandler("small")
                                    }
                                    onMouseLeave={mouseLeaveHandler}
                                    type="submit"
                                    onClick={scrollToContact}
                                    value={"CONTACT ME"}
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
