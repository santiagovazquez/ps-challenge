import React from 'react';
import { useSceneData } from "./hooks";
import { Canvas } from '@react-three/fiber';
import Cuboid from '../components/Cuboid';
import { OrbitControls } from '@react-three/drei';
import Points from '../components/Points/Points';

function App() {
    const { data, loaded } = useSceneData();
    console.log(data);

    if (!loaded) return <div>Loading...</div>;

    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <OrbitControls />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            {
                data.cuboids.map(point => <Cuboid key={point.uuid} data={point} />)
            }
            <Points data={data.points} />
        </Canvas>
    );
}

export default App;
