import React from 'react'
import { Edges } from "@react-three/drei"
import { ThreeEvent } from "@react-three/fiber";
import { CuboidData } from '../../types';

const CUBOID_COLOR = "#3484FF";
const CUBOID_HOVER_COLOR = 'hotpink';

type Props = {
    data: CuboidData;
    onPointerOver?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (event: ThreeEvent<PointerEvent>) => void;
    hovered: boolean;
};

function Cuboid({ data, hovered, onPointerOver, onPointerOut}: Props) {
    return (
        <mesh
            position={[data['position.x'], data['position.y'], data['position.z']]}
            rotation={[0, 0, data.yaw]}
            onPointerOver={onPointerOver}
            onPointerOut={onPointerOut}
        >
            <boxGeometry args={[data['dimensions.x'], data['dimensions.y'], data['dimensions.z']]}/>
            <meshBasicMaterial color={hovered ? CUBOID_HOVER_COLOR : CUBOID_COLOR} transparent={true} opacity={0.2} />
            <Edges linewidth={1} threshold={15} color={hovered ? CUBOID_HOVER_COLOR : CUBOID_COLOR} opacity={1} />
        </mesh>
    )
}

export default Cuboid;
