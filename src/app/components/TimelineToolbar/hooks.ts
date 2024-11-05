import { useEffect, useRef } from 'react'
import { useCurrentFrame } from "../../hooks";
import { useSearchParams } from "react-router-dom";
import { TOTAL_FRAMES } from "../../api";

export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback)

    // Remember the latest callback if it changes.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        // Note: 0 is a valid value for delay.
        if (delay === null) {
            return
        }

        const id = setInterval(() => {
            savedCallback.current()
        }, delay)

        return () => {
            clearInterval(id)
        }
    }, [delay])
}

/**
 * If play is true, is changes the frame every X millis.
 * @returns current frame
 */
export function usePlayTimeline(play: boolean, onEndCallback: () => void) {
    const [, setSearchParams] = useSearchParams();
    const frame = useCurrentFrame();

    useInterval(() => {
        if (frame < TOTAL_FRAMES - 1) {
            setSearchParams({ frame: `${frame + 1}` });
        } else {
            setSearchParams({ frame: '0' });
            onEndCallback();
        }
    }, play ? 1500 : null);

    return frame;
}
