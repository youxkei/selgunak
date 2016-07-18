import { combineReducers } from 'redux';

import Action from './action/Action';
import { Project, Task, TimeTracking, Sprint, TaskSprintRelation } from './State';

function calcId(array: { id: number }[]): number {
    if (array.length > 0) {
        return array[array.length - 1].id + 1;
    } else {
        return 0;
    }
}

function projects(projects: Project[] = [], action: Action): Project[] {
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

function tasks(tasks: Task[] = [], action: Action): Task[] {
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

            return tasks.filter(task => task.id !== taskId);
        }

        default: {
            return tasks;
        }
    }
}

function timeTrackings(timeTrackings: TimeTracking[], action: Action): TimeTracking[] {
    switch (action.type) {
        case 'StartTimeTracking': {
            const { taskId, begin } = action;
            const id = calcId(timeTrackings);

            return [...timeTrackings, { id, taskId, begin, end: null }];
        }

        case 'StopTimeTracking': {
            const { timeTrackingId, end } = action;

            return timeTrackings.map(timeTracking => {
                if (timeTracking.id === timeTrackingId) {
                    return Object.assign({}, timeTracking, { end });
                } else {
                    return timeTracking;
                }
            });
        }

        default: {
            return timeTrackings;
        }
    }
}

function sprints(sprints: Sprint[], action: Action): Sprint[] {
    switch (action.type) {
        case 'CreateSprint': {
            const { title, begin, end } = action;
            const id = calcId(sprints);

            return [...sprints, { id, index: id, title, begin, end }];
        }

        case 'UpdateSprint': {
            const { sprintId, title, begin, end } = action;

            return sprints.map(sprint => {
                if (sprint.id === sprintId) {
                    return Object.assign({}, sprint, { title, begin, end });
                } else {
                    return sprint;
                }
            });
        }

        case 'DeleteSprint': {
            const { sprintId } = action;

            return sprints.filter(sprint => sprint.id !== sprintId);
        }

        default: {
            return sprints;
        }
    }
}

function taskSprintRelations(taskSprintRelations: TaskSprintRelation[], action: Action): TaskSprintRelation[] {
    switch (action.type) {
        case 'RegisterTaskToSprint': {
            const { taskId, sprintId } = action;
            const id = calcId(taskSprintRelations);

            return [...taskSprintRelations, { id, taskId, sprintId }];
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

export const reducer = combineReducers({ projects, tasks, timeTrackings, sprints, taskSprintRelations });
export default reducer;
