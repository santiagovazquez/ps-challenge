import React from 'react';
import { useCurrentFrame, useSceneData } from "./hooks";
import Scene from './components/Scene';

function App() {
    const frame = useCurrentFrame();
    const { data, loaded, error } = useSceneData(frame);

    if (!loaded || !data) return <div>Loading...</div>;

    if (error) return <div>Something went wrong. Try again later</div>;

    return <Scene data={data} />;
}

export default App;
