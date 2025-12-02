import { useEffect, useState } from "react";

const useHeading = () => {
    const [heading, setHeading] = useState(0);

    useEffect(() => {
        function handleOrientation(event) {
            if (event.alpha !== null) {
                setHeading(event.alpha);
            }
        }

        // iPhone cần xin quyền
        if (typeof DeviceOrientationEvent?.requestPermission === "function") {
            DeviceOrientationEvent.requestPermission().then((res) => {
                if (res === "granted") {
                    window.addEventListener("deviceorientation", handleOrientation);
                }
            });
        } else {
            // Android
            window.addEventListener("deviceorientation", handleOrientation);
        }

        return () =>
            window.removeEventListener("deviceorientation", handleOrientation);
    }, []);

    return heading;
}

export default useHeading;