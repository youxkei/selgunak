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

export default Action;
