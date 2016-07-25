import * as React from 'react';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';

import Task, { TaskProps } from './task';


export interface ProjectProps {
    id: number,
    title: string,
    tasks: TaskProps[],
}

export function Project({ title, tasks }: ProjectProps)  {
    return (
        <Card>
            <CardHeader title={title} />
            <CardMedia>
                { tasks.map(taskProps => <Task key={taskProps.id} {...taskProps} />) }
            </CardMedia>
        </Card>
    );
}

export default Project;
