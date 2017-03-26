// @flow

import type { Dispatch as ReduxDispatch } from 'redux';

export type Action
    = { type: 'CreateProject', title: string }
    | { type: 'UpdateProject', projectId: number, title: string }
    | { type: 'DeleteProject', projectId: number }
    | { type: 'CreateTask', projectId: number, parentId: number | null, title: string, estimation: Date }
    | { type: 'UpdateTask', taskId: number, title: string, estimation: Date }
    | { type: 'DeleteTask', taskId: number }
    | { type: 'CreateSprint', title: string, begin: Date, end: Date }
    | { type: 'UpdateSprint', sprintId: number, title: string, begin: Date, end: Date }
    | { type: 'DeleteSprint', sprintId: number }
    | { type: 'RegisterTaskToSprint', sprintId: number, taskId: number }
    | { type: 'UnregisterTaskFromSprint', sprintId: number, taskId: number }
    | { type: 'StartTimeTracking', taskId: number, begin: Date }
    | { type: 'StopTimeTracking', timeTrackingId: number, end: Date }
;

export type Dispatch = (action: Action) => void;
