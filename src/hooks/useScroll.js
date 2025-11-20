import { useEffect, useRef, useState } from "react";

export default function useScroll() {
    const [scrollY, setScrollY] = useState(0);

    const ref = useRef();

    const onScroll = () => {
        setScrollY(window.scrollY);
    }


    useEffect(
        () => {
            window.addEventListener("scroll", onScroll);
        }, []);

    return [ref, scrollY];
}