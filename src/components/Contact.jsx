import { useState } from "react";
import "@components/css/Contact.css";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import Reveal from "@components/Reveal";

const Contact = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [qouteName, setQouteName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="contact" id="contact">
            <div className="contact-body">
                <Reveal>
                    <h1
                        onMouseEnter={() => mouseEnterHandler("large")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "default" }}
                    >
                        Contact.
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
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="qoute"
            >
                <Reveal width="100%">
                    <input
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        onChange={(e) => setQouteName(e.target.value)}
                        value={qouteName}
                        name="user_name"
                        type="text"
                        placeholder="NAME"
                    />
                </Reveal>
                <Reveal width="100%">
                    <input
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="user_email"
                        placeholder="EMAIL"
                    />
                </Reveal>
                <Reveal width="100%">
                    <textarea
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        name="message"
                        placeholder="MESSAGE"
                    />
                </Reveal>
                <Reveal>
                    <div className="btn">
                        <input
                            className="submit-btn"
                            onMouseEnter={() => mouseEnterHandler("small")}
                            onMouseLeave={mouseLeaveHandler}
                            type="submit"
                            value={"SEND MESSAGE"}
                        />
                    </div>
                </Reveal>
            </form>
        </div>
    );
};

export default Contact;
