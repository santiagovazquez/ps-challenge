import React, {PropsWithoutRef, useRef, useState} from 'react'
import * as THREE from 'three'

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
            <boxGeometry args={[data['dimensions.x'], data['dimensions.y'], data['dimensions.z']]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
        </mesh>
    )
}

export default Cuboid;
