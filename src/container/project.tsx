import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { Panel, Form, FormControl, Button } from 'react-bootstrap';

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
    let taskTitleField: HTMLInputElement;
    let taskEstimationField: HTMLInputElement;
    let projectTitleField: HTMLInputElement;

    return (
        <Panel header={title}>
            <div>
                { taskPropsList.map(taskProps => (
                    <Task
                        key={taskProps.id}
                        projectId={id}
                        {...taskProps}
                    />
                ))}
                <Form inline>
                    <FormControl
                        ref={(formControl: FormControl) => { taskTitleField = findDOMNode(formControl) as HTMLInputElement; }}
                        placeholder="タイトル"
                    />
                    <FormControl
                        ref={(formControl: FormControl) => { taskEstimationField = findDOMNode(formControl) as HTMLInputElement; }}
                        placeholder="見積もり"
                    />
                    <Button onTouchTap={() => createTask(id, taskTitleField.value, new Date(0, 0, 0, 0, parseInt(taskEstimationField.value, 10)))}>
                        作成
                    </Button>
                </Form>
            </div>
            <Form inline>
                <FormControl
                    ref={(formControl: FormControl) => { projectTitleField = findDOMNode(formControl) as HTMLInputElement; }}
                    placeholder="プロジェクト名"
                />
                <Button onTouchTap={() => updateProject(id, projectTitleField.value)}>更新</Button>
                <Button onTouchTap={() => deleteProject(id)}>削除</Button>
            </Form>
        </Panel>
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
