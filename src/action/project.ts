import Action from './action.ts';
import { Project } from '../state';


export interface CreateProjectAction {
    type: 'CreateProject',
    title: string,
}

export function createProject(title: string): CreateProjectAction {
    return { type: 'CreateProject', title };
}


export interface UpdateProjectAction {
    type: 'UpdateProject',
    projectId: number,
    title: string,
}

export function updateProject(projectId: number, title: string): UpdateProjectAction {
    return { type: 'UpdateProject', projectId, title };
}


export interface DeleteProjectAction {
    type: 'DeleteProject',
    projectId: number,
}

export function deleteProject(projectId: number): DeleteProjectAction {
    return { type: 'DeleteProject', projectId };
}
