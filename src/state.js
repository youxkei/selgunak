// @flow

export type Project = {
    id: number,
    index: number,

    title: string,
};

export type Task = {
    id: number,
    index: number,

    projectId: number,
    parentId: ?number,

    title: string,
    estimation: Date,
};

export type TimeTracking = {
    id: number,

    taskId: number,

    begin: Date,
    end: ?Date,
};

export type Sprint = {
    id: number,
    index: number,

    title: string,
    begin: Date,
    end: Date,
};

export type TaskSprintRelation = {
    id: number,

    taskId: number,
    sprintId: number,
};

export type State = {
    projects: Project[],
    tasks: Task[],
    timeTrackings: TimeTracking[],
    sprints: Sprint[],
    taskSprintRelations: TaskSprintRelation[],
};
