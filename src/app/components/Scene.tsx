import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cuboids from "./Cuboids/Cuboids";
import Points from "./Points/Points";
import CuboidTooltip from "./Cuboids/CuboidTooltip";
import {CuboidData, FrameData} from "../types";
// import TimelineToolbar from "./TimelineToolbar/TimelineToolbar";

function Scene({ data }: { data: FrameData }) {
    const [selectedCuboid, setSeletedCuboid] = useState<CuboidData | null>(null);

    return (
        <>
            <Canvas camera={{ position: [0, -30, 10], near: 1, fov: 75, far: 1000 }}>
                <ambientLight intensity={Math.PI / 2}/>
                <OrbitControls
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI}
                />
                <Points data={data} />
                <Cuboids data={data.cuboids} onHover={(selected) => setSeletedCuboid(selected)}/>
            </Canvas>
            { !!selectedCuboid && <CuboidTooltip data={selectedCuboid} /> }
            {/*<TimelineToolbar />*/}
        </>
    )
}


export default Scene;
