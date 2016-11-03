import Action, { ActionType } from './action.ts';
import { Sprint, Task } from '../state';


export function createSprint(title: string, begin: Date, end: Date): Action {
    return { type: ActionType.CreateSprint, title, begin, end };
}

export function updateSprint(sprintId: number, title: string, begin: Date, end: Date): Action {
    return { type: ActionType.UpdateSprint, sprintId, title, begin, end };
}

export function deleteSprint(sprintId: number): Action {
    return { type: ActionType.DeleteSprint, sprintId };
}

export function registerTaskToSprint(sprintId: number, taskId: number): Action {
    return { type: ActionType.RegisterTaskToSprint, sprintId, taskId };
}

export function unregisterTaskFromSprint(sprintId: number, taskId: number): Action {
    return { type: ActionType.UnregisterTaskFromSprint, sprintId, taskId };
}
