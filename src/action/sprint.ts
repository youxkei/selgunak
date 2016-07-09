import { Action, ActionType } from './Action.ts';
import { Sprint, Task } from '../State';


export interface CreateSprintAction {
    type: ActionType,
    title: string,
}

export function createSprint(title: string): CreateSprintAction {
    return { type: ActionType.CREATE_SPRINT, title };
}

export function isCreateSprintAction(action: Action): action is CreateSprintAction {
    return action.type === ActionType.CREATE_SPRINT;
}


export interface UpdateSprintAction {
    type: ActionType,
    sprint: Sprint,
    title: string,
}

export function updateSprint(sprint: Sprint, title: string): UpdateSprintAction {
    return { type: ActionType.UPDATE_SPRINT, sprint, title };
}

export function isUpdateSprintAction(action: Action): action is UpdateSprintAction {
    return action.type === ActionType.UPDATE_SPRINT;
}


export interface DeleteSprintAction {
    type: ActionType,
    sprint: Sprint,
}

export function deleteSprint(sprint: Sprint): DeleteSprintAction {
    return { type: ActionType.DELETE_SPRINT, sprint };
}

export function isDeleteSprintAction(action: Action): action is DeleteSprintAction {
    return action.type === ActionType.DELETE_SPRINT;
}


export interface RegisterTaskToSprintAction {
    type: ActionType,
    sprint: Sprint,
    task: Task,
}

export function registerTaskToSprint(sprint: Sprint, task: Task): RegisterTaskToSprintAction {
    return { type: ActionType.REGISTER_TASK_TO_SPRINT, sprint, task };
}

export function isRegisterTaskToSprintAction(action: Action): action is RegisterTaskToSprintAction {
    return action.type === ActionType.REGISTER_TASK_TO_SPRINT;
}


export interface UnregisterTaskFromSprintAction {
    type: ActionType,
    sprint: Sprint,
    task: Task,
}

export function unregisterTaskFromSprint(sprint: Sprint, task: Task): UnregisterTaskFromSprintAction {
    return { type: ActionType.UNREGISTER_TASK_FROM_SPRINT, sprint, task };
}

export function isUnregisterTaskFromSprintAction(action: Action): action is UnregisterTaskFromSprintAction {
    return action.type === ActionType.UNREGISTER_TASK_FROM_SPRINT;
}
