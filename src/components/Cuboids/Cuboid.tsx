import React, { PropsWithoutRef, useRef } from 'react'
import * as THREE from 'three'
import { Edges } from "@react-three/drei"
import { ThreeEvent } from "@react-three/fiber";

const CUBOID_COLOR = "#3484FF";
const CUBOID_HOVER_COLOR = 'hotpink';

type CuboidData = {
    label: string;
    uuid: string;
    'dimensions.x': number;
    'dimensions.y': number;
    'dimensions.z': number;
    'position.x': number;
    'position.y': number;
    'position.z': number;
    yaw: number;
}

type Props = PropsWithoutRef<{
    data: CuboidData;
    onPointerOver?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (event: ThreeEvent<PointerEvent>) => void;
    hovered: boolean;
}>;

function Cuboid({ data, hovered, onPointerOver, onPointerOut}: Props) {
    const meshRef = useRef<THREE.Mesh>(null!);
    return (
        <mesh
            position={[data['position.x'], data['position.y'], data['position.z']]}
            rotation={[0, 0, data.yaw]}
            ref={meshRef}
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
