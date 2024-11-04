import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cuboids from "./Cuboids/Cuboids";
import Points from "./Points/Points";
import CuboidTooltip from "./Cuboids/CuboidTooltip";

function Scene({ data }) {
    const [selectedCuboid, setSeletedCuboid] = useState(null);
    return (
        <>
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <OrbitControls />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <Cuboids data={data.cuboids} onHover={(selected) => setSeletedCuboid(selected)} />
                <Points data={data.points} />
            </Canvas>
            <CuboidTooltip data={selectedCuboid}></CuboidTooltip>
        </>
    )
}


export default Scene;
