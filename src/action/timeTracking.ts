import Action, { ActionType } from './action';
import { Sprint, Task, TimeTracking } from '../state';


export function startTimeTracking(taskId: number): Action {
    return { type: ActionType.StartTimeTracking, taskId, begin: new Date() };
}

export function stopTimeTracking(timeTrackingId: number): Action {
    return { type: ActionType.StopTimeTracking, timeTrackingId, end: new Date() };
}
