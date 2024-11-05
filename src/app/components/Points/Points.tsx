import { useRef } from 'react';
import circleImg from "../../../textures/circle.png";
import { useRecreateGeometryOnDataChange } from "./hooks";
import { FrameData } from '../../types';
import { useTexture } from '@react-three/drei';
import { ThreeElements } from "@react-three/fiber";

type Props = {
    data: FrameData;
}

function PointsComponent({ data }: Props) {
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

export default PointsComponent;
