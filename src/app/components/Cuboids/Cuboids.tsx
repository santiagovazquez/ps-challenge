import React, {useState} from "react";
import Cuboid from "./Cuboid";
import { CuboidData } from '../../types';

function Cuboids({ data, onHover }: { data: CuboidData[], onHover(cuboid: CuboidData | null): void }) {
    const [hovered, setHover] = useState<string | null>(null);

    return (
        data.map(point => (
            <Cuboid
                key={point.uuid}
                hovered={point.uuid === hovered}
                data={point}
                onPointerOver={(event) => {
                    setHover(point.uuid);
                    onHover(point);
                }}
                onPointerOut={(event) => {
                    setHover(null);
                    onHover(null);
                }}
            />))
    );
}

export default Cuboids;
