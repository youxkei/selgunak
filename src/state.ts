export interface Project {
    id: number,
    index: number,

    title: string,
}

export interface Task {
    id: number,
    index: number,

    projectId: number,
    parentId: number | null,

    title: string,
    estimation: Date,
}

export interface TimeTracking {
    id: number,

    taskId: number,

    begin: Date,
    end: Date | null,
}

export interface Sprint {
    id: number,
    index: number,

    title: string,
    begin: Date,
    end: Date,
}

export interface TaskSprintRelation {
    id: number,

    taskId: number,
    sprintId: number,
}

export interface State {
    projects: Project[],
    tasks: Task[],
    timeTrackings: TimeTracking[],
    sprints: Sprint[],
    taskSprintRelations: TaskSprintRelation[],
}

export default State;
