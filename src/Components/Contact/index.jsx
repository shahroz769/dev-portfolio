import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";
import "./Contact.css";

const Contact = () => {
    const [qouteName, setQouteName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (result) => {
                    alert("Sent Successfully.");
                    console.log(result.text);
                    setQouteName("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    alert("There was an error while sending your qoute.");
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-body">
                <h1>Contact</h1>
                <p>
                    I would love to hear about your project and how I could
                    help. Please fill in the form, and I’ll get back to you as
                    soon as possible.
                </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="qoute">
                <input
                    onChange={(e) => setQouteName(e.target.value)}
                    value={qouteName}
                    name="user_name"
                    type="text"
                    placeholder="NAME"
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    name="user_email"
                    placeholder="EMAIL"
                />
                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    placeholder="MESSAGE"
                />
                <div className="btn">
                    <input
                        className="submit-btn"
                        type="submit"
                        value={"SEND MESSAGE"}
                    />
                </div>
            </form>
        </div>
    );
};

export default Contact;
