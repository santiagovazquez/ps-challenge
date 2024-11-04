import { useState, useEffect } from 'react';

export function useSceneData() {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://static.scale.com/uploads/pandaset-challenge/frame_00.json")
            .then((res) => {
                if (!res.ok || res.status < 200 || res.status > 299) {
                    throw new Error('Failed to fetch file from server');
                }
                return res.json();
            })
            .then((json) => {
                setData(json);
                setError(false);
                setLoaded(true);
            })
            .catch((err) => {
                setError(true);
                setLoaded(true);
            });
    }, []);

    return {
        loaded,
        data,
        error,
    };
}
