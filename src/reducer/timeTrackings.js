// @flow

import type { Action } from '../action';
import type { TimeTracking } from '../state';
import { calcId } from './reducer';


export function timeTrackings(timeTrackings: TimeTracking[] = [], action: Action): TimeTracking[] {
    switch (action.type) {
        case 'StartTimeTracking': {
            const { taskId, begin } = action;
            const id = calcId(timeTrackings);

            return [...timeTrackings, { id, taskId, begin, end: null }];
        }

        case 'StopTimeTracking': {
            const { timeTrackingId, end } = action;

            return timeTrackings.map(timeTracking => {
                if (timeTracking.id === timeTrackingId) {
                    return { ...timeTracking, end };
                } else {
                    return timeTracking;
                }
            });
        }

        default: {
            return timeTrackings;
        }
    }
}

export default timeTrackings;
