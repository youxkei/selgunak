import Action, { ActionType } from './Action';
import { Sprint, Task, TimeTracking } from '../State';

export interface StartTimeTrackingAction {
    type: ActionType,
    taskId: number,
    begin: Date,
}

export function startTimeTracking(taskId: number, begin: Date): StartTimeTrackingAction {
    return { type: ActionType.START_TIME_TRACKING, taskId, begin };
}

export function isStartTimeTrackingAction(action: Action): action is StartTimeTrackingAction {
    return action.type === ActionType.START_TIME_TRACKING;
}


export interface StopTimeTrackingAction {
    type: ActionType,
    timeTrackingId: number,
    end: Date,
}

export function stopTimeTracking(timeTrackingId: number, end: Date): StopTimeTrackingAction {
    return { type: ActionType.STOP_TIME_TRACKING, timeTrackingId, end };
}

export function isStopTimeTrackingAction(action: Action): action is StopTimeTrackingAction {
    return action.type === ActionType.STOP_TIME_TRACKING;
}
