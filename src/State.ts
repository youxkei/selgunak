export interface Project {
    title: string,
    tasks: Task[],
}

export interface Task {
    title: string,
    estimation: Date,
    timeTrackings: TimeTracking[],
}

export interface TimeTracking {
    start: Date,
    end: Date,
}

export interface Sprint {
    title: string,
    start: Date,
    End: Date,
    tasks: Task[],
    isActive: boolean,
}

export interface State {
    projects: Project[],
    sprints: Sprint[],
}

export default State;
