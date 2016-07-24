import Action from './action';
import { Sprint, Task, TimeTracking } from '../state';


export interface StartTimeTrackingAction {
    type: 'StartTimeTracking',
    taskId: number,
    begin: Date,
}

export function startTimeTracking(taskId: number): StartTimeTrackingAction {
    return { type: 'StartTimeTracking', taskId, begin: new Date() };
}


export interface StopTimeTrackingAction {
    type: 'StopTimeTracking',
    timeTrackingId: number,
    end: Date,
}

export function stopTimeTracking(timeTrackingId: number): StopTimeTrackingAction {
    return { type: 'StopTimeTracking', timeTrackingId, end: new Date() };
}
