import * as css from './cuboid-tooltip.module.css';
import { ReactNode } from "react";

function TooltipItem({ label, value }: { label: string; value: ReactNode }) {
    return <div>
        <b>{label}:</b>
        <span>{value}</span>
    </div>;
}

function CuboidTooltip({ data }) {
    if (!data) return null;
    return <div className={css.tooltip}>
        <h3>Object properties</h3>
        <TooltipItem label="Label" value={data.label} />
        <TooltipItem label="Uuid" value={data.uuid} />
        <TooltipItem label="Dimensions" value={`${data['dimensions.x']} x ${data['dimensions.y']} x ${data['dimensions.z']}`} />
        <TooltipItem label="Position" value={`(${data['position.x']}, ${data['position.y']}, ${data['position.z']})`} />
        <TooltipItem label="Stationary" value={data.stationary} />
        <TooltipItem label="Camera Used" value={data.camera_used} />
        <TooltipItem label="Sensor ID" value={data.sensor_id} />
        <TooltipItem label="Sibling ID" value={data.sibling_id} />
        <TooltipItem label="Yaw" value={data.yaw} />
    </div>;
}

export default CuboidTooltip;
