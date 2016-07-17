import Action, { ActionType } from './Action.ts';
import { Project } from '../State';


export interface CreateProjectAction {
    type: ActionType,
    title: string,
}

export function createProject(title: string): CreateProjectAction {
    return { type: ActionType.CREATE_PROJECT, title };
}

export function isCreateProjectAction(action: Action): action is CreateProjectAction {
    return action.type === ActionType.CREATE_PROJECT;
}


export interface UpdateProjectAction {
    type: ActionType,
    projectId: number,
    title: string,
}

export function updateProject(projectId: number, title: string): UpdateProjectAction {
    return { type: ActionType.CREATE_PROJECT, projectId, title };
}

export function isUpdateProjectAction(action: Action): action is UpdateProjectAction {
    return action.type === ActionType.UPDATE_PROJECT;
}


export interface DeleteProjectAction {
    type: ActionType,
    projectId: number,
}

export function deleteProject(projectId: number): DeleteProjectAction {
    return { type: ActionType.DELETE_PROJECT, projectId };
}

export function isDeleteProjectAction(action: Action): action is DeleteProjectAction {
    return action.type === ActionType.DELETE_PROJECT;
}
