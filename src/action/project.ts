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
    project: Project,
    title: string,
}

export function updateProject(project: Project, title: string): UpdateProjectAction {
    return { type: ActionType.CREATE_PROJECT, project, title };
}

export function isUpdateProjectAction(action: Action): action is UpdateProjectAction {
    return action.type === ActionType.UPDATE_PROJECT;
}


export interface DeleteProjectAction {
    type: ActionType,
    project: Project,
}

export function deleteProject(project: Project): DeleteProjectAction {
    return { type: ActionType.DELETE_PROJECT, project };
}

export function isDeleteProjectAction(action: Action): action is DeleteProjectAction {
    return action.type === ActionType.DELETE_PROJECT;
}
