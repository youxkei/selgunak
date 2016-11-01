import * as React from 'react';
import { Panel } from 'react-bootstrap';


export interface TaskInSprintProps {
    id: number,
    title: string,
}

export function TaskInSprint({ title }: TaskInSprintProps) {
    return (
        <Panel header={title}>
        </Panel>
    );
}

export default TaskInSprint;
