import Action, { ActionType } from './Action';
import { Sprint, Task, TimeTracking } from '../State';

export interface StartTimeTrackingAction {
    type: ActionType,
    sprint: Sprint,
    task: Task,
}

export function startTimeTracking(sprint: Sprint, task: Task): StartTimeTrackingAction {
    return { type: ActionType.START_TIME_TRACKING, sprint, task };
}

export function isStartTimeTrackingAction(action: Action): action is StartTimeTrackingAction {
    return action.type === ActionType.START_TIME_TRACKING;
}


export interface StopTimeTrackingAction {
    type: ActionType,
    sprint: Sprint,
    task: Task,
}

export function stopTimeTracking(sprint: Sprint, task: Task): StopTimeTrackingAction {
    return { type: ActionType.STOP_TIME_TRACKING, sprint, task };
}

export function isStopTimeTrackingAction(action: Action): action is StopTimeTrackingAction {
    return action.type === ActionType.STOP_TIME_TRACKING;
}
