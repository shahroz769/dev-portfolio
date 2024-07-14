import "@components/css/Contact.css";
import { useContext } from "react";
import { CursorContext } from "@context/CursorContext";
import Reveal from "@components/Reveal";

const Contact = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <div className="contact" id="contact">
            <div className="contact-body">
                <Reveal widthContact="100%" justifyContentContact="center">
                    <h1
                        onMouseEnter={() => mouseEnterHandler("large")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "default" }}
                    >
                        Contact
                        <span style={{ color: "var(--accent-)" }}>.</span>
                    </h1>
                </Reveal>
                <Reveal>
                    <p
                        onMouseEnter={() => mouseEnterHandler("medium")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "default" }}
                    >
                        I would love to hear about your project and how I could
                        help. Please fill in the form, and I’ll get back to you
                        as soon as possible.
                    </p>
                </Reveal>
            </div>
        </div>
    );
};

export default Contact;
