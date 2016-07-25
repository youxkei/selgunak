import * as React from 'react';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';

import TaskInSprint, { TaskInSprintProps } from './taskInSprint';


export interface SprintProps {
    id: number,
    title: string,
    begin: Date,
    end: Date,
    tasks: TaskInSprintProps[],
}

export function Sprint({ title, begin, end, tasks }: SprintProps) {
    return (
        <Card>
            <CardHeader
                title={title}
                subtitle={`${begin.toLocaleDateString()} 〜 ${end.toLocaleDateString()}`}
            />
            <CardMedia>
                { tasks.map(taskInSprintProps => <TaskInSprint key={taskInSprintProps.id} {...taskInSprintProps} />) }
            </CardMedia>
        </Card>
    );
}

export default Sprint;
