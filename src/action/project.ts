import Action, { ActionType } from './action.ts';
import { Project } from '../state';


export function createProject(title: string): Action {
    return { type: ActionType.CreateProject, title };
}

export function updateProject(projectId: number, title: string): Action {
    return { type: ActionType.UpdateProject, projectId, title };
}

export function deleteProject(projectId: number): Action {
    return { type: ActionType.DeleteProject, projectId };
}
