// @flow

import type { Action } from '../action';
import type { Project } from '../state';
import { calcId } from './reducer';


export function projects(projects: Project[] = [], action: Action): Project[] {
    switch (action.type) {
        case 'CreateProject': {
            const { title } = action;
            const id = calcId(projects);

            return [...projects, { id, index: id, title }];
        }

        case 'UpdateProject': {
            const { projectId, title } = action;

            return projects.map(project => {
                if (project.id === projectId) {
                    return Object.assign({}, project, { title });
                } else {
                    return project;
                }
            });
        }

        case 'DeleteProject': {
            const { projectId } = action;

            return projects.filter(project => project.id !== projectId);
        }

        default: {
            return projects;
        }
    }
}

export default projects;
