import * as React from 'react';
import { Card, CardHeader } from 'material-ui/Card';


export interface TaskInSprintProps {
    title: string,
}

export function TaskInSprint({ title }: TaskInSprintProps): React.ReactElement<any> {
    return (
        <Card>
            <CardHeader title={title} />
        </Card>
    );
}

export default TaskInSprint;
