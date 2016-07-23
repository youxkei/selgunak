import * as React from 'react';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';

import { Task, TaskProps } from './task';


export interface ProjectProps {
    title: string,
    tasks: TaskProps[],
}

export function Project({ title, tasks }: ProjectProps): React.ReactElement<any> {
    return (
        <Card>
            <CardHeader title={title} />
            <CardMedia>
                { tasks.map(taskProps => <Task {...taskProps} />) }
            </CardMedia>
        </Card>
    );
}

export default Project;
