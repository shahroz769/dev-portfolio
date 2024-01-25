import React, { useState } from "react";

function BlurUpImage({ lowResSrc, highResSrc }) {
    const [highResImageLoaded, setHighResImageLoaded] = useState(false);

    return (
        <div>
            <img
                src={lowResSrc}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 5,
                }}
                alt="Profile"
                fetchpriority="high"
            />
            <img
                src={highResSrc}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transition: "opacity ease-in 200ms",
                    opacity: highResImageLoaded ? 1 : 0,
                    zIndex: 10,
                }}
                alt="Profile"
                fetchpriority="high"
                onLoad={() => {
                    setHighResImageLoaded(true);
                }}
            />
        </div>
    );
}

export default BlurUpImage;
