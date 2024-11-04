import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";
import circleImg from "./textures/circle.png";

type PointData = {

}

type Props = {
    data: PointData[];
}

function Points({ data }: Props) {
    // @ts-expect-error
    const CircleImg = useLoader(THREE.TextureLoader, circleImg);
    const vertices = [];

    for (const i of data) {
        vertices.push(...i);
    }

    const positions = new Float32Array(vertices);

    return <points>
        <bufferGeometry attach="geometry">
            <bufferAttribute
                attach='attributes-position'
                array={positions}
                count={positions.length / 3}
                itemSize={3}
            />
        </bufferGeometry>
        <pointsMaterial
            // @ts-expect-error
            map={CircleImg}
            color={0x00aaff}
            size={0.1}
            transparent={false}
            alphaTest={0.5}
            opacity={1.0}
        />
    </points>;
}

export default Points;
