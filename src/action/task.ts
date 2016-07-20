import Action from './Action.ts';
import { Task } from '../State';


export interface CreateTaskAction {
    type: 'CreateTask',
    projectId: number,
    parentId: number | null,
    title: string,
    estimation: Date,
}

export function createTask(projectId: number, parentId: number | null, title: string, estimation: Date): CreateTaskAction {
    return { type: 'CreateTask', projectId, parentId, title, estimation };
}


export interface UpdateTaskAction {
    type: 'UpdateTask',
    taskId: number,
    title: string,
    estimation: Date,
}

export function updateTask(taskId: number, title: string, estimation: Date): UpdateTaskAction {
    return { type: 'UpdateTask', taskId, title, estimation };
}


export interface DeleteTaskAction {
    type: 'DeleteTask',
    taskId: number,
}

export function deleteTask(taskId: number): DeleteTaskAction {
    return { type: 'DeleteTask', taskId };
}
