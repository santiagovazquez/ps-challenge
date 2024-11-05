import { useState, MouseEventHandler } from "react";
import * as css from './timeline-toolbar.module.css';
import { Link } from "react-router-dom";
import { TOTAL_FRAMES } from "../../api";
import classnames from 'classnames';

function PlayButton({ onClick, paused }:{ onClick: MouseEventHandler<HTMLButtonElement>; paused: boolean }) {
    return (
        <button className={classnames(css.button, paused && css.paused)} onClick={onClick}>
            {paused ? 'Pause' : 'Play'}
        </button>
    )
}

function FrameButton({ frame }: { frame: number }): JSX.Element {
    return <Link preventScrollReset={true} to={`?frame=${frame}`}>
        <div className={css.frame}></div></Link>;
}

/**
 * TODO: timeline not finished
 */
function TimelineToolbar() {
    const [paused, setPaused] = useState(false);
    return <div className={css.timelineToolbar}>
        <PlayButton paused={paused} onClick={() => setPaused(!paused)} />
        <div className={css.framesContainer}>
            {[...Array(TOTAL_FRAMES)].map((item, i) => <FrameButton key={i} frame={i} />)}
        </div>
    </div>
}

export default TimelineToolbar;
