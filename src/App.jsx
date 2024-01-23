import { useContext, useEffect, useState } from "react";
import { CursorContext } from "./context/CursorContext";
import { motion } from "framer-motion";
import Home from "@pages/Home";

function App() {
    const { cursorVariants, cursorBg, isVisible } = useContext(CursorContext);
    const [systemTheme, setSystemTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
    );
    const [hasPointingDevice, setHasPointingDevice] = useState(
        window.matchMedia("(pointer:fine)").matches,
    );
    useEffect(() => {
        const favicon = document.getElementById("favicon");
        if (favicon) {
            favicon.href =
                systemTheme === "dark"
                    ? "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp/v1705847763/Portfolio/oklvsql2vlkze7p3ggmq.svg"
                    : "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp/v1705847763/Portfolio/skiowwakseerwteqvulo.svg";
        }
    }, [systemTheme]);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            setSystemTheme(mediaQuery.matches ? "dark" : "light");
        };
        mediaQuery.addEventListener("change", handleChange);
        const pointingDeviceQuery = window.matchMedia("(pointer:fine)");
        const handlePointingDeviceChange = () => {
            setHasPointingDevice(pointingDeviceQuery.matches);
        };
        pointingDeviceQuery.addEventListener(
            "change",
            handlePointingDeviceChange,
        );
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
            pointingDeviceQuery.removeEventListener(
                "change",
                handlePointingDeviceChange,
            );
        };
    }, []);
    return (
        <>
            <Home />
            {hasPointingDevice && (
                <motion.div
                    style={{
                        visibility: isVisible ? "visible" : "hidden",
                    }}
                    variants={cursorVariants}
                    animate={cursorBg}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 0.3,
                    }}
                    className="custom-mouse"
                ></motion.div>
            )}
        </>
    );
}

export default App;
