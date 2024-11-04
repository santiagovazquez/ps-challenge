import * as THREE from 'three';
import { useMemo } from "react";

const LOWEST_POINT_COLOR = "#FF9D34";
const HIGHEST_POINT_COLOR = '#A734FF';

// guess based on observation, to improve this logic we could use a ref in some upper parent to extract
// the bounding box and get max(zValues) and min(zValues)
const zNormalization = (zValue) => Math.abs(zValue - 20)/25;

export function usePointPositionAndColors(data) {
    return useMemo(() => {
        const positions: number[] = [];
        const colors: number[] = [];

        for (const point of data) {
            positions.push(...point);
            const color = (new THREE.Color(HIGHEST_POINT_COLOR)).lerp(new THREE.Color(LOWEST_POINT_COLOR), zNormalization(point[2]));
            colors.push(...color.toArray());
        }

        return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
    }, data)
}
