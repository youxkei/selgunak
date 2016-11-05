import * as React from 'react';
import { connect } from 'react-redux';
import Card, {CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { Dispatch } from '../action/action';
import { createTask, updateTask, deleteTask } from '../action/task';
import State from '../state';


export interface TaskProps {
    id: number,
    projectId: number,
    title: string,
    estimation: Date,
    childrenTaskPropsList: TaskProps[],
}

export interface TaskComponentProps extends TaskProps {
    createTask: (projectId: number, parentId: number | null, title: string, estimation: Date) => void,
    updateTask: (taskId: number, title: string, estimation: Date) => void,
    deleteTask: (taskId: number) => void,
}

export function TaskComponent({ id, projectId, title, estimation, childrenTaskPropsList, createTask, updateTask, deleteTask }: TaskComponentProps): React.ReactElement<any> /* avoiding implicit any with recursion */ {
    let newTaskTitleField: TextField;
    let newTaskEstimationField: TextField;
    let newTitleField: TextField;
    let newEstimationField: TextField;

    return (
        <Card>
            <CardHeader title={title} />
            <CardText style={{ padding: '0px 8px', boxSizing: 'border-box' }}>
                { childrenTaskPropsList.map(taskProps => (
                    <Task
                        key={taskProps.id}
                        {...taskProps}
                    />
                ))}
                <TextField
                    ref={(textField: TextField) => { newTaskTitleField = textField; }}
                    hintText="タイトル"
                />
                <TextField
                    ref={(textField: TextField) => { newTaskEstimationField = textField; }}
                    hintText="見積もり"
                />
                <FlatButton
                    label="作る"
                    onTouchTap={() => createTask(projectId, id, newTaskTitleField.getValue(), new Date(0, 0, 0, 0, parseInt(newTaskEstimationField.getValue(), 10)))}
                />
            </CardText>
            <CardActions>
                <TextField
                    ref={(textField: TextField) => { newTitleField = textField; }}
                    hintText="タイトル"
                />
                <TextField
                    ref={(textField: TextField) => { newEstimationField = textField; }}
                    hintText="見積もり"
                />
                <FlatButton
                    label="更新"
                    onTouchTap={() => updateTask(id, newTitleField.getValue(), new Date(0, 0, 0, 0, parseInt(newEstimationField.getValue(), 10)))}
                />
                <FlatButton
                    label="削除"
                    onTouchTap={() => deleteTask(id)}
                />
            </CardActions>
        </Card>
    );
}

function mapStateToProps(state: State, ownProps: TaskProps) {
    return ownProps;
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: TaskProps): {
    createTask: (projectId: number, parentId: number | null, title: string, estimation: Date) => void,
    updateTask: (taskId: number, title: string, estimation: Date) => void,
    deleteTask: (taskId: number) => void,
} {
    return {
        createTask: (projectId, parentId, title, estimation) => dispatch(createTask(projectId, parentId, title, estimation)),
        updateTask: (taskId, title, estimation) => dispatch(updateTask(taskId, title, estimation)),
        deleteTask: taskId => dispatch(deleteTask(taskId)),
    };
}

export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent);

export default Task;
