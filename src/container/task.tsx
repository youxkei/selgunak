import * as React from 'react';
import { connect } from 'react-redux';
import Card, {CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import Action, { ActionType, Dispatch } from '../action';
import State from '../state';


export interface TaskProps {
    id: number,
    projectId: number,
    title: string,
    estimation: Date,
    childrenTaskPropsList: TaskProps[],
}

export function TaskComponent({ id, projectId, title, estimation, childrenTaskPropsList, dispatch }: TaskProps & { dispatch: Dispatch }): React.ReactElement<any> /* avoiding implicit any with recursion */ {
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
                    onTouchTap={() => dispatch({
                        type: ActionType.CreateTask,
                        projectId, 
                        parentId: id,
                        title: newTaskTitleField.getValue(),
                        estimation: new Date(0, 0, 0, 0, parseInt(newTaskEstimationField.getValue(), 10))
                    })}
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
                    onTouchTap={() => dispatch({
                        type: ActionType.UpdateTask,
                        taskId: id,
                        title: newTitleField.getValue(),
                        estimation: new Date(0, 0, 0, 0, parseInt(newEstimationField.getValue(), 10))
                    })}
                />
                <FlatButton
                    label="削除"
                    onTouchTap={() => dispatch({
                        type: ActionType.DeleteTask,
                        taskId: id,
                    })}
                />
            </CardActions>
        </Card>
    );
}

function mapStateToProps(state: State, ownProps: TaskProps) {
    return ownProps;
}

export const Task = connect(mapStateToProps)(TaskComponent);

export default Task;
