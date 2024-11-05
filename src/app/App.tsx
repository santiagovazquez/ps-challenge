import React from 'react';
import { useSceneData } from "./hooks";
import Scene from './components/Scene';
import { useSearchParams } from 'react-router-dom';

function App() {
    const [query] = useSearchParams();
    const frame = query.get('frame');
    const { data, loaded, error } = useSceneData(frame ? parseInt(frame) : undefined);

    if (!loaded || !data) return <div>Loading...</div>;

    if (error) return <div>Something went wrong. Try again later</div>;

    return <Scene data={data} />;
}

export default App;
