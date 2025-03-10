import { useEffect, useRef } from "react";

export const useCustomHook = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    })

    return ref.current
}