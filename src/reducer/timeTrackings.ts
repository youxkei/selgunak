import Action, { ActionType } from '../action';
import { TimeTracking } from '../state';
import { calcId } from './reducer';


export function timeTrackings(timeTrackings: TimeTracking[] = [], action: Action): TimeTracking[] {
    switch (action.type) {
        case ActionType.StartTimeTracking: {
            const { taskId, begin } = action;
            const id = calcId(timeTrackings);

            return [...timeTrackings, { id, taskId, begin, end: null }];
        }

        case ActionType.StopTimeTracking: {
            const { timeTrackingId, end } = action;

            return timeTrackings.map(timeTracking => {
                if (timeTracking.id === timeTrackingId) {
                    return Object.assign({}, timeTracking, { end });
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
