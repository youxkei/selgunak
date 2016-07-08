interface Project {
    title: string,
    tasks: Task[],
}

interface Task {
    title: string,
    estimation: Date,
    logs: Log[],
    children: Task[],
}

interface Log {
    start: Date,
    end: Date,
}

interface Sprint {
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
