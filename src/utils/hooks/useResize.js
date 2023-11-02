import { useEffect, useState, useCallback } from "react";

export default function useResize() {
    const getWidth = useCallback(() => window.document.body.clientWidth, []);
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        let timeout;

        function handleResize() {
            setWidth(getWidth());
        }

        function handleSetTimeout() {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    handleResize();
                }, 800);
            }
        }

        window.addEventListener("resize", handleSetTimeout);
        return () => window.removeEventListener("resize", handleSetTimeout);
    }, [getWidth]);

    return width;
}
