import { combineReducers } from 'redux';

import Action from './action/Action';
import { Project, Task, TimeTracking, Sprint, TaskSprintRelation } from './State';
import { isCreateProjectAction, isUpdateProjectAction, isDeleteProjectAction } from './action/project';
import { isCreateTaskAction, isUpdateTaskAction, isDeleteTaskAction } from './action/task';
import { isStartTimeTrackingAction, isStopTimeTrackingAction } from './action/time_tracking';
import { isCreateSprintAction, isUpdateSprintAction, isDeleteSprintAction, isRegisterTaskToSprintAction, isUnregisterTaskFromSprintAction } from './action/sprint';

function calcId(array: { id: number }[]): number {
    if (array.length > 0) {
        return array[array.length - 1].id + 1;
    } else {
        return 0;
    }
}

function projects(projects: Project[] = [], action: Action): Project[] {
    if (isCreateProjectAction(action)) {
        const id = calcId(projects);
        return [...projects, { id, index: id, title: action.title }];
    } else if (isUpdateProjectAction(action)) {
        return projects.map(project => {
            if (project.id === action.projectId) {
                return Object.assign({}, project, { title: action.title });
            } else {
                return project;
            }
        });
    } else if (isDeleteProjectAction(action)) {
        return projects.filter(project => project.id !== action.projectId);
    }
}

function tasks(tasks: Task[] = [], action: Action): Task[] {
    if (isCreateTaskAction(action)) {
        const id = calcId(tasks);
        return [...tasks, { id, index: id, projectId: action.projectId, parentId: action.parentId, title: action.title, estimation: null }];
    } else if (isUpdateTaskAction(action)) {
        return tasks.map(task => {
            if (task.id === action.taskId) {
                return Object.assign({}, task, { title: action.title });
            } else {
                return task;
            }
        });
    } else if (isDeleteTaskAction(action)) {
        return tasks.filter(task => task.id !== action.taskId);
    }
}

function timeTrackings(timeTrackings: TimeTracking[], action: Action): TimeTracking[] {
    if (isStartTimeTrackingAction(action)) {
        const id = calcId(timeTrackings);
        return [...timeTrackings, { id, taskId: action.taskId, begin: action.begin, end: null }];
    } else if (isStopTimeTrackingAction(action)) {
        return timeTrackings.map(timeTracking => {
            if (timeTracking.id === action.timeTrackingId) {
                return Object.assign({}, timeTracking, { end: action.end });
            } else {
                return timeTracking;
            }
        });
    }
}

function sprints(sprints: Sprint[], action: Action): Sprint[] {
    if (isCreateSprintAction(action)) {
        const id = calcId(sprints);
        return [...sprints, { id, index: id, title: action.title, begin: action.begin, end: action.end }];
    } else if (isUpdateSprintAction(action)) {
        return sprints.map(sprint => {
            if (sprint.id === action.sprintId) {
                return Object.assign({}, sprint, { title: action.title, begin: action.begin, end: action.end });
            } else {
                return sprint;
            }
        });
    } else if (isDeleteSprintAction(action)) {
        return sprints.filter(sprint => sprint.id !== action.sprintId);
    }
}

function taskSprintRelations(taskSprintRelations: TaskSprintRelation[], action: Action): TaskSprintRelation[] {
    if (isRegisterTaskToSprintAction(action)) {
        const id = calcId(taskSprintRelations);
        return [...taskSprintRelations, { id, taskId: action.taskId, sprintId: action.sprintId }];
    } else if (isUnregisterTaskFromSprintAction(action)) {
        return taskSprintRelations.filter(taskSprintRelation => taskSprintRelation.taskId !== action.taskId || taskSprintRelation.sprintId !== action.sprintId);
    }
}

export const reducer = combineReducers({ projects, tasks, timeTrackings, sprints, taskSprintRelations });
export default reducer;
