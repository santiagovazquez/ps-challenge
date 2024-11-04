import React from 'react';
import {useSceneData} from "./hooks";

function App() {
    const {
        data
    } = useSceneData();
    console.log(data);
    return (
        <div>
            <h1>Test</h1>
        </div>
    );
}

export default App;
