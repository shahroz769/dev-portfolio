import "@components/css/Contact.css";
import { useContext, useEffect } from "react";
import { CursorContext } from "@context/CursorContext";
import Reveal from "@components/Reveal";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    const contactSchema = yup.object().shape({
        name: yup.string().max(50).required("Required"),
        email: yup.string().email("Invalid email").max(50).required("Required"),
        message: yup.string().max(500).required("Required"),
    });

    const {
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        touched,
    } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: contactSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            sendMessage(values);
        },
    });
    const sendMessage = () => {
        const messagePromise = axios
            .post("https://devv-invoice-cmui.onrender.com/portfolio/message", {
                ...values,
                portfolio: "shahrozahmed",
            })
            .then((response) => {
                resetForm();
            })
            .catch((error) => {
                console.log(error);
                Promise.reject();
            });
        toast.promise(messagePromise, {
            success: "Message sent!",
            loading: "Sending...",
            error: "Failed. Try again.",
        });
    };

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
            <form onSubmit={handleSubmit} className="qoute">
                <Reveal width="100%" flexDirection="column">
                    <input
                        style={
                            errors.name &&
                            touched.name && {
                                borderBottom: "1px solid var(--error-)",
                            }
                        }
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="name"
                        name="name"
                        placeholder="NAME"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                    />
                    {
                        <p
                            className="error-message"
                            style={
                                errors.name &&
                                touched.name && { visibility: "inherit" }
                            }
                        >
                            {errors.name || "Required"}
                        </p>
                    }
                </Reveal>
                <Reveal width="100%" flexDirection="column">
                    <input
                        style={
                            errors.email &&
                            touched.email && {
                                borderBottom: "1px solid var(--error-)",
                            }
                        }
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="email"
                        name="email"
                        placeholder="EMAIL"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                    />
                    {
                        <p
                            className="error-message"
                            style={
                                errors.email &&
                                touched.email && { visibility: "inherit" }
                            }
                        >
                            {errors.email || "Required"}
                        </p>
                    }
                </Reveal>
                <Reveal width="100%" flexDirection="column">
                    <textarea
                        style={
                            errors.message &&
                            touched.message && {
                                borderBottom: "1px solid var(--error-)",
                            }
                        }
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="message"
                        name="message"
                        placeholder="MESSAGE"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                    />
                    {
                        <p
                            className="error-message"
                            style={
                                errors.message &&
                                touched.message && { visibility: "inherit" }
                            }
                        >
                            {errors.message || "Required"}
                        </p>
                    }
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
