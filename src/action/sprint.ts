import Action from './Action.ts';
import { Sprint, Task } from '../State';


export interface CreateSprintAction {
    type: 'CreateSprint',
    title: string,
    begin: Date,
    end: Date,
}

export function createSprint(title: string, begin: Date, end: Date): CreateSprintAction {
    return { type: 'CreateSprint', title, begin, end };
}


export interface UpdateSprintAction {
    type: 'UpdateSprint',
    sprintId: number,
    title: string,
    begin: Date,
    end: Date,
}

export function updateSprint(sprintId: number, title: string, begin: Date, end: Date): UpdateSprintAction {
    return { type: 'UpdateSprint', sprintId, title, begin, end };
}


export interface DeleteSprintAction {
    type: 'DeleteSprint',
    sprintId: number,
}

export function deleteSprint(sprintId: number): DeleteSprintAction {
    return { type: 'DeleteSprint', sprintId };
}


export interface RegisterTaskToSprintAction {
    type: 'RegisterTaskToSprint',
    sprintId: number,
    taskId: number,
}

export function registerTaskToSprint(sprintId: number, taskId: number): RegisterTaskToSprintAction {
    return { type: 'RegisterTaskToSprint', sprintId, taskId };
}


export interface UnregisterTaskFromSprintAction {
    type: 'UnregisterTaskFromSprint',
    sprintId: number,
    taskId: number,
}

export function unregisterTaskFromSprint(sprintId: number, taskId: number): UnregisterTaskFromSprintAction {
    return { type: 'UnregisterTaskFromSprint', sprintId, taskId };
}
