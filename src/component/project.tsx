import * as React from 'react';
import Card, { CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import Task, { TaskProps } from './task';


export interface ProjectProps {
    id: number,
    title: string,
    taskPropsList: TaskProps[],

    createTask: (projectId: number, parentId: number | null, title: string, estimation: Date) => void;
}

export function Project({ id, title, taskPropsList, createTask }: ProjectProps)  {
    let titleField: TextField;
    let estimationField: TextField;

    return (
        <Card>
            <CardHeader title={title} />
            <CardText style={{ padding: '0px 8px 8px', boxSizing: 'border-box' }}>
                { taskPropsList.map(taskProps => (
                    <Task
                        key={taskProps.id}
                        createTask={(parentId: number | null, title: string, estimation: Date) => createTask(id, parentId, title, estimation)}
                        {...taskProps}
                    />
                ))}
                <TextField
                    ref={(textField: TextField) => { titleField = textField; }}
                    hintText="タイトル"
                />
                <TextField
                    ref={(textField: TextField) => { estimationField = textField; }}
                    hintText="見積もり"
                />
                <FlatButton
                    label="作る"
                    onTouchTap={() => createTask(id, null, titleField.getValue(), new Date(0, 0, 0, 0, parseInt(estimationField.getValue(), 10)))}
                />
            </CardText>
            <CardActions>
                <FlatButton label="action" />
            </CardActions>
        </Card>
    );
}

export default Project;
