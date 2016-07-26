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
            <CardMedia>
                { taskInSprintPropsList.map(taskInSprintProps => <TaskInSprint key={taskInSprintProps.id} {...taskInSprintProps} />) }
            </CardMedia>
        </Card>
    );
}

export default Sprint;
