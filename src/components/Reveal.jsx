import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width, flexDirection }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    const containerStyle = {
        position: "relative",
        width: width || "fit-content",
        overflow: "hidden",
        flexDirection: flexDirection || "inherit",
    };

    return (
        <div ref={ref} style={containerStyle}>
            <motion.div
                style={{ display: "flex", flexDirection: flexDirection }}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "var(--accent-)",
                    zIndex: 1000,
                }}
            ></motion.div>
        </div>
    );
};

export default Reveal;
