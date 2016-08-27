import * as React from 'react';
import { connect } from 'react-redux';
import Card, { CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import State from '../state';
import { Dispatch } from '../action/action';
import { createTask } from '../action/task';
import { updateProject, deleteProject } from '../action/project';
import Task, { TaskProps } from './task';


export interface ProjectProps {
    id: number,
    title: string,
    taskPropsList: TaskProps[],
}

export interface ProjectComponentProps extends ProjectProps {
    createTask: (projectId: number, title: string, estimation: Date) => void;
    updateProject: (projectId: number, title: string) => void,
    deleteProject: (projectId: number) => void,
}

export function ProjectComponent({ id, title, taskPropsList, createTask, updateProject, deleteProject }: ProjectComponentProps)  {
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
                    onTouchTap={() => createTask(id, taskTitleField.getValue(), new Date(0, 0, 0, 0, parseInt(taskEstimationField.getValue(), 10)))}
                />
            </CardText>
            <CardActions>
                <TextField
                    ref={(textField: TextField) => { projectTitleField = textField; }}
                />
                <FlatButton
                    label="更新"
                    onTouchTap={() => updateProject(id, projectTitleField.getValue())}
                />
                <FlatButton
                    label="削除"
                    onTouchTap={() => deleteProject(id)}
                />
            </CardActions>
        </Card>
    );
}

function mapStateToProps(state: State, ownProps: ProjectProps) {
    return ownProps;
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: ProjectProps): {
    createTask: (projectId: number, title: string, estimation: Date) => void,
    updateProject: (projectId: number, title: string) => void,
    deleteProject: (projectId: number) => void,
} {
    return {
        createTask: (projectId, title, estimation) => dispatch(createTask(projectId, null, title, estimation)),
        updateProject: (projectId, title) => dispatch(updateProject(projectId, title)),
        deleteProject: projectId => dispatch(deleteProject(projectId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);
