import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import type { ThreeElements } from "@react-three/fiber";
import circleImg from "../../../textures/circle.png";
import { useRecreateGeometryOnDataChange } from "./hooks";
import type { FrameData } from '../../types';

type Props = {
    data: FrameData;
}

function Points({ data }: Props) {
    const CircleImg = useTexture(circleImg);
    const pointsRef = useRef<ThreeElements['points']>(null);

    useRecreateGeometryOnDataChange(pointsRef, data);

    return <points ref={pointsRef}>
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
