import { useMemo } from 'react';
import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";
import circleImg from "./textures/circle.png";

type PointData = [number, number, number];

type Props = {
    data: PointData[];
}

const LOWEST_POINT_COLOR = "#A734FF";
const HIGHEST_POINT_COLOR = '#FF9D34';





function Points({ data }: Props) {
    const CircleImg = useLoader(THREE.TextureLoader, circleImg);
    const { colors, positions } = useMemo(() => {
        const vertices = [];
        const rawColors = [];
        let minZ = data[0][2];
        let maxZ = data[0][2];

        for (const i of data) {
            vertices.push(...i);
            if (i[2] > maxZ) {
                maxZ = i[2];
            }
            if (i[2] < minZ) {
                minZ = i[2];
            }
            rawColors.push(0.3864294337766795,0.0343398068028541,1);
        }
        return { positions: new Float32Array(vertices), colors: new Float32Array(rawColors) };
    }, data);

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
            // color={0x00aaff}
            alphaTest={0.5}
        />
    </points>;
}

export default Points;
