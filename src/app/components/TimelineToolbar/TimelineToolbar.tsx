import { useState, MouseEventHandler } from "react";
import * as css from './timeline-toolbar.module.css';
import { Link } from "react-router-dom";
import { TOTAL_FRAMES } from "../../api";
import classnames from 'classnames';
import { usePlayTimeline } from "./hooks";

function PlayButton({ onClick, paused }:{ onClick: MouseEventHandler<HTMLButtonElement>; paused: boolean }) {
    return (
        <button className={classnames(css.button, paused && css.paused)} onClick={onClick}>
            {paused ? 'Play': 'Pause'}
        </button>
    )
}

function FrameButton({ frame, active }: { frame: number; active: boolean }): JSX.Element {
    return (
        <Link preventScrollReset={true} to={`?frame=${frame}`}>
            <div className={classnames(css.frame, active && css.activeFrame)} />
        </Link>
    );
}

function TimelineToolbar() {
    const [paused, setPaused] = useState(true);
    const frame = usePlayTimeline(!paused, () => { setPaused(true)});

    return <div className={css.timelineToolbar}>
        <PlayButton paused={paused} onClick={() => setPaused(!paused)} />
        <div className={css.framesContainer}>
            {[...Array(TOTAL_FRAMES)].map((item, i) => <FrameButton key={i} frame={i} active={i === frame} />)}
        </div>
    </div>
}

export default TimelineToolbar;
