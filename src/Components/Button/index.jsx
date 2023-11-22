import "./Button.css";

const Button = ({ text }) => {
    return (
        <a href="#contact" className="u-button">
            <span>{text || "CONTACT ME"}</span>
        </a>
    );
};

export default Button;
