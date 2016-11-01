import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { Button, Form, FormControl, Panel } from 'react-bootstrap';

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
    let newTaskTitleField: HTMLInputElement;
    let newTaskEstimationField: HTMLInputElement;
    let newTitleField: HTMLInputElement;
    let newEstimationField: HTMLInputElement;

    return (
        <Panel header={title}>
            <div style={{ padding: '0px 8px', boxSizing: 'border-box' }}>
                { childrenTaskPropsList.map(taskProps => (
                    <Task
                        key={taskProps.id}
                        {...taskProps}
                    />
                ))}
                <Form inline>
                    <FormControl
                        ref={(formControl: FormControl) => { newTaskTitleField = findDOMNode(formControl) as HTMLInputElement; }}
                        placeholder="タイトル"
                    />
                    <FormControl
                        ref={(formControl: FormControl) => { newTaskEstimationField = findDOMNode(formControl) as HTMLInputElement; }}
                        placeholder="見積もり"
                    />
                    <Button onTouchTap={() => createTask(projectId, id, newTaskTitleField.value, new Date(0, 0, 0, 0, parseInt(newTaskEstimationField.value, 10)))}>
                        作る
                    </Button>
                </Form>
            </div>
            <Form inline>
                <FormControl
                    ref={(formControl: FormControl) => { newTitleField = findDOMNode(formControl) as HTMLInputElement; }}
                    placeholder="タイトル"
                />
                <FormControl
                    ref={(formControl: FormControl) => { newEstimationField = findDOMNode(formControl) as HTMLInputElement; }}
                    placeholder="見積もり"
                />
                <Button onTouchTap={() => updateTask(id, newTitleField.value, new Date(0, 0, 0, 0, parseInt(newEstimationField.value, 10)))}>
                    更新
                </Button>
                <Button onTouchTap={() => deleteTask(id)}>
                    削除
                </Button>
            </Form>
        </Panel>
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
