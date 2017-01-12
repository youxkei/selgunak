import { Dispatch as ReduxDispatch } from 'redux';


export const enum ActionType {
    CreateProject, UpdateProject, DeleteProject,
    CreateTask, UpdateTask, DeleteTask,
    CreateSprint, UpdateSprint, DeleteSprint, RegisterTaskToSprint, UnregisterTaskFromSprint,
    StartTimeTracking, StopTimeTracking,
}

export type Action
    = { type: ActionType.CreateProject, title: string }
    | { type: ActionType.UpdateProject, projectId: number, title: string }
    | { type: ActionType.DeleteProject, projectId: number }
    | { type: ActionType.CreateTask, projectId: number, parentId: number | null, title: string, estimation: Date }
    | { type: ActionType.UpdateTask, taskId: number, title: string, estimation: Date }
    | { type: ActionType.DeleteTask, taskId: number }
    | { type: ActionType.CreateSprint, title: string, begin: Date, end: Date }
    | { type: ActionType.UpdateSprint, sprintId: number, title: string, begin: Date, end: Date }
    | { type: ActionType.DeleteSprint, sprintId: number }
    | { type: ActionType.RegisterTaskToSprint, sprintId: number, taskId: number }
    | { type: ActionType.UnregisterTaskFromSprint, sprintId: number, taskId: number }
    | { type: ActionType.StartTimeTracking, taskId: number, begin: Date }
    | { type: ActionType.StopTimeTracking, timeTrackingId: number, end: Date }
;

export type Dispatch = (action: Action) => void;

export default Action;
