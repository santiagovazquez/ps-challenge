import { useState, useEffect } from 'react';
import { fetchFrame } from "./api";
import { FrameData } from './types';

export function useSceneData(frame?: number): { loaded: boolean; data?: FrameData; error: boolean } {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<FrameData | undefined>();

    useEffect(() => {
        fetchFrame(frame || 0)
            .then((json) => {
                setData(json);
                setError(false);
                setLoaded(true);
            })
            .catch((err) => {
                setError(true);
                setLoaded(true);
            });
    }, [frame]);

    return {
        loaded,
        data,
        error,
    };
}
