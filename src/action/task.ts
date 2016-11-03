import Action, { ActionType } from './action.ts';
import { Task } from '../state';


export function createTask(projectId: number, parentId: number | null, title: string, estimation: Date): Action {
    return { type: ActionType.CreateTask, projectId, parentId, title, estimation };
}

export function updateTask(taskId: number, title: string, estimation: Date): Action {
    return { type: ActionType.UpdateTask, taskId, title, estimation };
}

export function deleteTask(taskId: number): Action {
    return { type: ActionType.DeleteTask, taskId };
}
