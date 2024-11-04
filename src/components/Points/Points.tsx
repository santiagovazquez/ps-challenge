import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";
import circleImg from "../../textures/circle.png";
import {usePointPositionAndColors} from "./hooks";

type PointData = [number, number, number];

type Props = {
    data: PointData[];
}

function Points({ data }: Props) {
    const CircleImg = useLoader(THREE.TextureLoader, circleImg);
    const { colors, positions } = usePointPositionAndColors(data);

    return <points>
        <bufferGeometry attach="geometry">
            <bufferAttribute
                attach='attributes-position'
                array={positions}
                count={positions.length / 3}
                itemSize={3}
                usage={THREE.DynamicDrawUsage}
            />
            <bufferAttribute
                attach='attributes-color'
                count={colors.length / 3}
                array={colors}
                itemSize={3}
                usage={THREE.DynamicDrawUsage}
            />
        </bufferGeometry>
        <pointsMaterial
            attach="material"
            vertexColors
            size={2}
            sizeAttenuation={false}
            map={CircleImg}
            alphaTest={0.5}
        />
    </points>;
}

export default Points;
