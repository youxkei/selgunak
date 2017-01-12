import Action, { ActionType } from '../action';
import { Project } from '../state';
import { calcId } from './reducer';


export function projects(projects: Project[] = [], action: Action): Project[] {
    switch (action.type) {
        case ActionType.CreateProject: {
            const { title } = action;
            const id = calcId(projects);

            return [...projects, { id, index: id, title }];
        }

        case ActionType.UpdateProject: {
            const { projectId, title } = action;

            return projects.map(project => {
                if (project.id === projectId) {
                    return Object.assign({}, project, { title });
                } else {
                    return project;
                }
            });
        }

        case ActionType.DeleteProject: {
            const { projectId } = action;

            return projects.filter(project => project.id !== projectId);
        }

        default: {
            return projects;
        }
    }
}

export default projects;
