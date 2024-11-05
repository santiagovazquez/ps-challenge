export type PointData = [number, number, number];

export type CuboidData = {
    label: string;
    uuid: string;
    'dimensions.x': number;
    'dimensions.y': number;
    'dimensions.z': number;
    'position.x': number;
    'position.y': number;
    'position.z': number;
    yaw: number;
    camera_used: number;
    'cuboids.sensor_id': number;
    'cuboids.sibling_id': number;
    stationary: boolean;
}

export type FrameData = {
    frame_id: number;
    points: PointData[];
    cuboids: CuboidData[];
}
