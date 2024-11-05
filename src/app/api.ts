import { FrameData } from './types';

const API_ROOT = 'https://static.scale.com/uploads/pandaset-challenge';
// future improvement: get the frame total from the API
export const TOTAL_FRAMES = 49;

export function fetchFrame(frame = 0): Promise<FrameData> {
    const frameToStr = frame < 10 ? `0${frame}` : frame;
    return fetch(`${API_ROOT}/frame_${frameToStr}.json`)
        .then((res) => {
            if (!res.ok || res.status < 200 || res.status > 299) {
                throw new Error('Failed to fetch file from server');
            }
            return res.json();
        });
}
