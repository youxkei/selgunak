import Action from '../action/action';
import { Task } from '../state';
import { calcId } from './reducer';


export function tasks(tasks: Task[] = [], action: Action): Task[] {
    switch (action.type) {
        case 'CreateTask': {
            const { projectId, parentId, title, estimation } = action;
            const id = calcId(tasks);

            return [...tasks, { id, index: id, projectId, parentId, title, estimation }];
        }

        case 'UpdateTask': {
            const { taskId, title, estimation } = action;

            return tasks.map(task => {
                if (task.id === taskId) {
                    return Object.assign({}, task, { title, estimation });
                } else {
                    return task;
                }
            });
        }

        case 'DeleteTask': {
            const { taskId } = action;

            let deletingIds = new Map<number, ''>();
            deletingIds.set(taskId, '');

            let isChanged = true;
            while (isChanged) {
                isChanged = false;

                for (const task of tasks) {
                    if (task.parentId !== null && deletingIds.has(task.parentId) && !deletingIds.has(task.id)) {
                        isChanged = true;
                        deletingIds.set(task.id, '');
                    }
                }
            }


            return tasks.filter(task => !deletingIds.has(task.id));
        }

        default: {
            return tasks;
        }
    }
}

export default tasks;
