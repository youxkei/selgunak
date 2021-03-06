// @flow

import * as React from 'react';
import { Card, CardHeader } from 'material-ui/Card';


export type TaskInSprintProps = {
    id: number,
    title: string,
};

export function TaskInSprint({ title }: TaskInSprintProps) {
    return (
        <Card>
            <CardHeader title={title} />
        </Card>
    );
}

export default TaskInSprint;
