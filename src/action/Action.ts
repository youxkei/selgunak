import { CreateProjectAction, UpdateProjectAction, DeleteProjectAction } from './project';
import { CreateTaskAction, UpdateTaskAction, DeleteTaskAction } from './task';
import { CreateSprintAction, UpdateSprintAction, DeleteSprintAction, RegisterTaskToSprintAction, UnregisterTaskFromSprintAction } from './sprint';
import { StartTimeTrackingAction, StopTimeTrackingAction } from './time_tracking';


export const enum ActionType {
    CREATE_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,

    CREATE_TASK,
    UPDATE_TASK,
    DELETE_TASK,

    START_TIME_TRACKING,
    STOP_TIME_TRACKING,

    CREATE_SPRINT,
    UPDATE_SPRINT,
    DELETE_SPRINT,
    REGISTER_TASK_TO_SPRINT,
    UNREGISTER_TASK_FROM_SPRINT,
}

export type Action
    = CreateProjectAction | UpdateProjectAction | DeleteProjectAction
    | CreateTaskAction | UpdateTaskAction | DeleteTaskAction
    | CreateSprintAction | UpdateSprintAction | DeleteSprintAction | RegisterTaskToSprintAction | UnregisterTaskFromSprintAction
    | StartTimeTrackingAction | StopTimeTrackingAction
;

export default Action;
