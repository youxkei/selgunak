import * as React from 'react';
import { connect } from 'react-redux';
import Card, { CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import State from '../state';
import { ActionType, Dispatch } from '../action';
import Task, { TaskProps } from './task';


export interface ProjectProps {
    id: number,
    title: string,
    taskPropsList: TaskProps[],
}

export function ProjectComponent({ id, title, taskPropsList, dispatch }: ProjectProps & { dispatch: Dispatch })  {
    let taskTitleField: TextField;
    let taskEstimationField: TextField;
    let projectTitleField: TextField;

    return (
        <Card>
            <CardHeader title={title} />
            <CardText style={{ padding: '0px 8px 8px', boxSizing: 'border-box' }}>
                { taskPropsList.map(taskProps => (
                    <Task
                        key={taskProps.id}
                        projectId={id}
                        {...taskProps}
                    />
                ))}
                <TextField
                    ref={(textField: TextField) => { taskTitleField = textField; }}
                    hintText="タイトル"
                />
                <TextField
                    ref={(textField: TextField) => { taskEstimationField = textField; }}
                    hintText="見積もり"
                />
                <FlatButton
                    label="作成"
                    onTouchTap={() => dispatch({
                        type: ActionType.CreateTask,
                        projectId: id,
                        parentId: null,
                        title: taskTitleField.getValue(),
                        estimation: new Date(0, 0, 0, 0, parseInt(taskEstimationField.getValue(), 10)),
                    })}
                />
            </CardText>
            <CardActions>
                <TextField
                    ref={(textField: TextField) => { projectTitleField = textField; }}
                />
                <FlatButton
                    label="更新"
                    onTouchTap={() => dispatch({
                        type: ActionType.UpdateProject,
                        projectId: id,
                        title: projectTitleField.getValue(),
                    })}
                />
                <FlatButton
                    label="削除"
                    onTouchTap={() => dispatch({
                        type: ActionType.DeleteProject,
                        projectId: id,
                    })}
                />
            </CardActions>
        </Card>
    );
}

function mapStateToProps(state: State, ownProps: ProjectProps) {
    return ownProps;
}

export default connect(mapStateToProps)(ProjectComponent);
