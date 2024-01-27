import { useContext, useEffect, useState, useRef } from "react";
import { CursorContext } from "@context/CursorContext";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Home from "@pages/Home";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function App() {
    const lenisRef = useRef();
    const lenis = useLenis(() => {});
    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }
        window.requestAnimationFrame(update);
        return () => window.cancelAnimationFrame(update);
    }, []);

    const { cursorVariants, cursorBg, isVisible } = useContext(CursorContext);
    const [systemTheme, setSystemTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );
    const [hasPointingDevice, setHasPointingDevice] = useState(
        window.matchMedia("(pointer:fine)").matches
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
            handlePointingDeviceChange
        );
        document.addEventListener("mousedown", handleMouseDown);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
            pointingDeviceQuery.removeEventListener(
                "change",
                handlePointingDeviceChange
            );
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    const handleMouseDown = (e) => {
        if (e.button === 1) {
            e.preventDefault();
        }
    };

    return (
        <>
            <Toaster
                toastOptions={{
                    style: {
                        background: "var(--white-60-)",
                        color: "var(--black-30-)",
                    },
                    position: "bottom-center",
                }}
            />
            <ReactLenis ref={lenisRef} root autoRaf>
                <Home />
            </ReactLenis>
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
