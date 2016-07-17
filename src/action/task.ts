import Action, { ActionType } from './Action.ts';
import { Task } from '../State';


export interface CreateTaskAction {
    type: ActionType,
    projectId: number,
    parentId: number,
    title: string,
    estimation: Date,
}

export function createTask(projectId: number, parentId: number, title: string, estimation: Date): CreateTaskAction {
    return { type: ActionType.CREATE_TASK, projectId, parentId, title, estimation };
}

export function isCreateTaskAction(action: Action): action is CreateTaskAction {
    return action.type === ActionType.CREATE_TASK;
}


export interface UpdateTaskAction {
    type: ActionType,
    taskId: number,
    title: string,
    estimation: Date,
}

export function updateTask(taskId: number, title: string, estimation: Date): UpdateTaskAction {
    return { type: ActionType.UPDATE_TASK, taskId, title, estimation };
}

export function isUpdateTaskAction(action: Action): action is UpdateTaskAction {
    return action.type === ActionType.UPDATE_TASK;
}


export interface DeleteTaskAction {
    type: ActionType,
    taskId: number,
}

export function deleteTask(taskId: number): DeleteTaskAction {
    return { type: ActionType.DELETE_TASK, taskId };
}

export function isDeleteTaskAction(action: Action): action is DeleteTaskAction {
    return action.type === ActionType.DELETE_TASK;
}
