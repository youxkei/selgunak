import Action from './Action';
import { Sprint, Task, TimeTracking } from '../State';

export interface StartTimeTrackingAction {
    type: 'StartTimeTracking',
    taskId: number,
    begin: Date,
}

export function startTimeTracking(taskId: number, begin: Date): StartTimeTrackingAction {
    return { type: 'StartTimeTracking', taskId, begin };
}


export interface StopTimeTrackingAction {
    type: 'StopTimeTracking',
    timeTrackingId: number,
    end: Date,
}

export function stopTimeTracking(timeTrackingId: number, end: Date): StopTimeTrackingAction {
    return { type: 'StopTimeTracking', timeTrackingId, end };
}
