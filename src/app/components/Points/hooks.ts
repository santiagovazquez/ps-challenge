import * as THREE from 'three';
import { useEffect } from "react";
import type { FrameData } from "../../types";
import type { ThreeElements } from "@react-three/fiber";

const LOWEST_POINT_COLOR = "#FF9D34";
const HIGHEST_POINT_COLOR = '#A734FF';

// guess based on observation, to improve this logic we could use a ref in some upper parent to extract
// the bounding box and get max(zValues) and min(zValues)
const zNormalization = (zValue) => Math.abs(zValue - 20)/25;

const getPositionsAndColors = (data:FrameData) => {
    const positions: number[] = [];
    const colors: number[] = [];

    for (const point of (data.points)) {
        positions.push(...point);
        const color = (new THREE.Color(HIGHEST_POINT_COLOR)).lerp(new THREE.Color(LOWEST_POINT_COLOR), zNormalization(point[2]));
        colors.push(...color.toArray());
    }
    return {
        positions: new Float32Array(positions),
        colors: new Float32Array(colors),
    }
}

/**
 * the hardest part of the challenge (by far) was to fix different exceptions like:
 *  1) THREE.WebGL Attributes: The size of the buffer attributes arraybuffer does not match the original size
 *  2) [.WebGL-0000704C00336700] GL_INVALID_OPERATION: Vertex buffer is not big enough for the draw call
 *
 * the following hook fixes the problem by updating the geometry attributes even if the buffer size change by
 * disposing the geometry and replacing it with a new one
 *
 * @link https://threejs.org/docs/index.html#manual/en/introduction/How-to-update-things
 * @link https://discourse.threejs.org/t/how-to-live-update-the-point-cloud-data-in-three-js/18282/2
 *
 */
export function useRecreateGeometryOnDataChange(pointsRef: ThreeElements['points'], data: FrameData) {
    useEffect(() => {
        const { colors, positions } = getPositionsAndColors(data);
        pointsRef.current.geometry.dispose();
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute( 'position', new THREE.BufferAttribute(positions, 3) );
        geometry.setAttribute( 'color', new THREE.BufferAttribute(colors, 3) );
        pointsRef.current.geometry = geometry;
        pointsRef.current.needUpdate = true;
    }, [data]);
}
