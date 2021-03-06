// @flow

import type { Action } from '../action';
import type { TaskSprintRelation } from '../state';
import { calcId } from './reducer';


export function taskSprintRelations(taskSprintRelations: TaskSprintRelation[] = [], action: Action): TaskSprintRelation[] {
    switch (action.type) {
        case 'RegisterTaskToSprint': {
            const { taskId, sprintId } = action;

            if (taskSprintRelations.some(rel => taskId === rel.taskId && sprintId === rel.sprintId)) {
                return taskSprintRelations;
            } else {
                const id = calcId(taskSprintRelations);

                return [...taskSprintRelations, { id, taskId, sprintId }];
            }
        }

        case 'UnregisterTaskFromSprint': {
            const { taskId, sprintId } = action;

            return taskSprintRelations.filter(taskSprintRelation => taskSprintRelation.taskId !== taskId || taskSprintRelation.sprintId !== sprintId);
        }

        default: {
            return taskSprintRelations;
        }
    }
}

export default taskSprintRelations;
