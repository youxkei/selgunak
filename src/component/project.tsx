import * as React from 'react';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';

import Task, { TaskProps } from './task';


export interface ProjectProps {
    id: number,
    title: string,
    taskPropsList: TaskProps[],
}

export function Project({ title, taskPropsList }: ProjectProps)  {
    return (
        <Card>
            <CardHeader title={title} />
            {
                taskPropsList.length === 0 ? null : (
                    <CardMedia style={{ padding: '0px 10px 10px', boxSizing: 'border-box' }}>
                        { taskPropsList.map(taskProps => <Task key={taskProps.id} {...taskProps} />) }
                    </CardMedia>
                )
            }
        </Card>
    );
}

export default Project;
