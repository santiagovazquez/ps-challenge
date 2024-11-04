import * as THREE from 'three';
import {useMemo} from "react";

const LOWEST_POINT_COLOR = "#FF9D34";
const HIGHEST_POINT_COLOR = '#A734FF';

// wild guess based on observation, we could use a parent ref and extract the bounding box
// to get max(zValues) and min(zValues)
const normalize = (zValue) => Math.abs(zValue - 20)/25;

export function usePointPositionAndColors(data) {
    return useMemo(() => {
        const positions: number[] = [];
        const colors: number[] = [];

        for (const i of data) {
            positions.push(...i);
            const color = (new THREE.Color(HIGHEST_POINT_COLOR)).lerp(new THREE.Color(LOWEST_POINT_COLOR), normalize(i[2]));
            colors.push(...color.toArray());
        }

        // console.log(Math.min(...zValues));
        // console.log(Math.max(...zValues));

        return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
    }, data)
}
