import * as React from 'react';
import { Panel } from 'react-bootstrap';

import TaskInSprint, { TaskInSprintProps } from './taskInSprint';


export interface SprintProps {
    id: number,
    title: string,
    begin: Date,
    end: Date,
    taskInSprintPropsList: TaskInSprintProps[],
}

export interface SprintComponentProps extends SprintProps {
}

export function Sprint({ title, begin, end, taskInSprintPropsList }: SprintProps) {
    return (
        <Panel header={`${title} ${begin.toLocaleDateString()} 〜 ${end.toLocaleDateString()}`}>
            {
                taskInSprintPropsList.length === 0 ? null : (
                    <div style={{ padding: '0px 8px 8px', boxSizing: 'border-box' }}>
                        { taskInSprintPropsList.map(taskInSprintProps => <TaskInSprint key={taskInSprintProps.id} {...taskInSprintProps} />) }
                    </div>
                )
            }
        </Panel>
    );
}

export default Sprint;
