import * as React from 'react';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';


export interface TaskProps {
    id: number,
    title: string,
    estimation: Date,
    childrenTaskPropsList: TaskProps[],
}

export function Task({ title, estimation, childrenTaskPropsList }: TaskProps): React.ReactElement<any> {
    return (
        <Card>
            <CardHeader title={title} />
            {
                childrenTaskPropsList.length === 0 ? null : (
                    <CardMedia style={{ padding: '0px 10px 10px', boxSizing: 'border-box' }}>
                        { childrenTaskPropsList.map(taskProps => <Task key={taskProps.id} {...taskProps} />) }
                    </CardMedia>
                )
            }
        </Card>
    );
}

export default Task;
