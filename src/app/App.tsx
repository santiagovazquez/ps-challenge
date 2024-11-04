import React from 'react';
import { useSceneData } from "./hooks";
import Scene from '../components/Scene';

function App() {
    const { data, loaded } = useSceneData();

    if (!loaded) return <div>Loading...</div>;

    return <Scene data={data} />;
}

export default App;
