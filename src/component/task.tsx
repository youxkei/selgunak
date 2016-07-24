import * as React from 'react';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';


export interface TaskProps {
    title: string,
    estimation: Date,
    children: TaskProps[],
}

export function Task({ title, estimation, children }: TaskProps): React.ReactElement<any> {
    return (
        <Card>
            <CardHeader title={title} />
            <CardMedia>
                { children.map(props => <Task {...props} />) }
            </CardMedia>
        </Card>
    );
}

export default Task;
