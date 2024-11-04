import React, {PropsWithoutRef, useRef, useState} from 'react'
import * as THREE from 'three'
import { Edges } from "@react-three/drei"

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
}>;

function Cuboid({ data }: Props) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <mesh
            position={[data['position.x'], data['position.y'], data['position.z']]}
            rotation={[0, 0, data.yaw]}
            ref={meshRef}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[data['dimensions.x'], data['dimensions.y'], data['dimensions.z']]}/>
            <meshBasicMaterial color={hovered ? 'hotpink' : '#2f74c0'} transparent={true} opacity={0.2} />
            <Edges linewidth={1} threshold={15} color={hovered ? "#c02040" : "black"} opacity={1} />
        </mesh>
    )
}

export default Cuboid;
