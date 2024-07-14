import { useContext, useEffect, useState } from "react";
import { CursorContext } from "@context/CursorContext";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Home from "@pages/Home";

function App() {
    const { cursorVariants, cursorBg, isVisible } = useContext(CursorContext);
    const [hasPointingDevice, setHasPointingDevice] = useState(
        window.matchMedia("(pointer:fine)").matches
    );

    useEffect(() => {
        const pointingDeviceQuery = window.matchMedia("(pointer:fine)");
        const handlePointingDeviceChange = () => {
            setHasPointingDevice(pointingDeviceQuery.matches);
        };
        pointingDeviceQuery.addEventListener(
            "change",
            handlePointingDeviceChange
        );

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
            pointingDeviceQuery.removeEventListener(
                "change",
                handlePointingDeviceChange
            );
        };
    }, []);

    return (
        <>
            <Home />
            {hasPointingDevice && (
                <LazyMotion features={domAnimation}>
                    <m.div
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
                    ></m.div>
                </LazyMotion>
            )}
        </>
    );
}

export default App;
