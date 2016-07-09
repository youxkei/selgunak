import Action, { ActionType } from './Action.ts';
import { Task } from '../State';


export interface CreateTaskAction {
    type: ActionType,
    title: string,
    estimation: Date,
}

export function createTask(title: string, estimation: Date): CreateTaskAction {
    return { type: ActionType.CREATE_TASK, title, estimation };
}

export function isCreateTaskAction(action: Action): action is CreateTaskAction {
    return action.type === ActionType.CREATE_TASK;
}


export interface UpdateTaskAction {
    type: ActionType,
    task: Task,
    title: string,
    estimation: Date,
}

export function updateTask(task: Task, title: string, estimation: Date): UpdateTaskAction {
    return { type: ActionType.UPDATE_TASK, task, title, estimation };
}

export function isUpdateTaskAction(action: Action): action is UpdateTaskAction {
    return action.type === ActionType.UPDATE_TASK;
}


export interface DeleteTaskAction {
    type: ActionType,
    task: Task,
}

export function deleteTask(task: Task): DeleteTaskAction {
    return { type: ActionType.DELETE_TASK, task };
}

export function isDeleteTaskAction(action: Action): action is DeleteTaskAction {
    return action.type === ActionType.DELETE_TASK;
}
