import * as css from './cuboid-tooltip.module.css';
import { ReactNode } from "react";
import { CuboidData } from '../../types';

function TooltipItem({ label, value }: { label: string; value: ReactNode }) {
    return <div>
        <div className={css.tooltipLabel}>{label}:</div>
        <span className={css.tooltipValue}>{value}</span>
    </div>;
}

function CuboidTooltip({ data }: { data: CuboidData }) {
    return <div className={css.tooltip}>
        <h3 className={css.tooltipTitle}>Object properties</h3>
        <div className={css.itemsContainer}>
            <TooltipItem label="Label" value={data.label} />
            <TooltipItem label="Uuid" value={data.uuid} />
            <TooltipItem label="Dimensions" value={`${data['dimensions.x']} x ${data['dimensions.y']} x ${data['dimensions.z']}`} />
            <TooltipItem label="Position" value={`(${data['position.x']}, ${data['position.y']}, ${data['position.z']})`} />
            <TooltipItem label="Stationary" value={data.stationary} />
            <TooltipItem label="Camera Used" value={data.camera_used} />
            <TooltipItem label="Sensor ID" value={data['cuboids.sensor_id']} />
            <TooltipItem label="Sibling ID" value={data['cuboids.sibling_id']} />
            <TooltipItem label="Yaw" value={data.yaw} />
        </div>
    </div>;
}

export default CuboidTooltip;
