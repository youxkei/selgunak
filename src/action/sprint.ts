import { Action, ActionType } from './Action.ts';
import { Sprint, Task } from '../State';


export interface CreateSprintAction {
    type: ActionType,
    title: string,
    begin: Date,
    end: Date,
}

export function createSprint(title: string, begin: Date, end: Date): CreateSprintAction {
    return { type: ActionType.CREATE_SPRINT, title, begin, end };
}

export function isCreateSprintAction(action: Action): action is CreateSprintAction {
    return action.type === ActionType.CREATE_SPRINT;
}


export interface UpdateSprintAction {
    type: ActionType,
    sprintId: number,
    title: string,
    begin: Date,
    end: Date,
}

export function updateSprint(sprintId: number, title: string, begin: Date, end: Date): UpdateSprintAction {
    return { type: ActionType.UPDATE_SPRINT, sprintId, title, begin, end };
}

export function isUpdateSprintAction(action: Action): action is UpdateSprintAction {
    return action.type === ActionType.UPDATE_SPRINT;
}


export interface DeleteSprintAction {
    type: ActionType,
    sprintId: number,
}

export function deleteSprint(sprintId: number): DeleteSprintAction {
    return { type: ActionType.DELETE_SPRINT, sprintId };
}

export function isDeleteSprintAction(action: Action): action is DeleteSprintAction {
    return action.type === ActionType.DELETE_SPRINT;
}


export interface RegisterTaskToSprintAction {
    type: ActionType,
    sprintId: number,
    taskId: number,
}

export function registerTaskToSprint(sprintId: number, taskId: number): RegisterTaskToSprintAction {
    return { type: ActionType.REGISTER_TASK_TO_SPRINT, sprintId, taskId };
}

export function isRegisterTaskToSprintAction(action: Action): action is RegisterTaskToSprintAction {
    return action.type === ActionType.REGISTER_TASK_TO_SPRINT;
}


export interface UnregisterTaskFromSprintAction {
    type: ActionType,
    sprintId: number,
    taskId: number,
}

export function unregisterTaskFromSprint(sprintId: number, taskId: number): UnregisterTaskFromSprintAction {
    return { type: ActionType.UNREGISTER_TASK_FROM_SPRINT, sprintId, taskId };
}

export function isUnregisterTaskFromSprintAction(action: Action): action is UnregisterTaskFromSprintAction {
    return action.type === ActionType.UNREGISTER_TASK_FROM_SPRINT;
}
