import * as React from 'react';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';

import TaskInSprint, { TaskInSprintProps } from './taskInSprint';


export interface SprintProps {
    id: number,
    title: string,
    begin: Date,
    end: Date,
    taskInSprintPropsList: TaskInSprintProps[],
}

export function Sprint({ title, begin, end, taskInSprintPropsList }: SprintProps) {
    return (
        <Card>
            <CardHeader
                title={title}
                subtitle={`${begin.toLocaleDateString()} 〜 ${end.toLocaleDateString()}`}
            />
            {
                taskInSprintPropsList.length === 0 ? null : (
                    <CardMedia style={{ padding: '0px 8px 8px', boxSizing: 'border-box' }}>
                        { taskInSprintPropsList.map(taskInSprintProps => <TaskInSprint key={taskInSprintProps.id} {...taskInSprintProps} />) }
                    </CardMedia>
                )
            }
        </Card>
    );
}

export default Sprint;
