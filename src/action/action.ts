import { Dispatch as ReduxDispatch } from 'redux';

import { CreateProjectAction, UpdateProjectAction, DeleteProjectAction } from './project';
import { CreateTaskAction, UpdateTaskAction, DeleteTaskAction } from './task';
import { CreateSprintAction, UpdateSprintAction, DeleteSprintAction, RegisterTaskToSprintAction, UnregisterTaskFromSprintAction } from './sprint';
import { StartTimeTrackingAction, StopTimeTrackingAction } from './timeTracking';


export type Action
    = CreateProjectAction | UpdateProjectAction | DeleteProjectAction
    | CreateTaskAction | UpdateTaskAction | DeleteTaskAction
    | CreateSprintAction | UpdateSprintAction | DeleteSprintAction | RegisterTaskToSprintAction | UnregisterTaskFromSprintAction
    | StartTimeTrackingAction | StopTimeTrackingAction
;

export interface Dispatch extends ReduxDispatch<any> {
    (action: Action): Action,
}

export default Action;
