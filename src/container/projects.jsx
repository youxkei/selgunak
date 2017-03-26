// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import type { Dispatch } from '../action';
import type { State, Task } from '../state';
import type { ProjectProps } from './project';
import type { TaskProps } from '../container/task';
import Project from './project';


function makeTaskProps(tasks: Task[], task: Task): TaskProps {
    return {
        id: task.id,
        projectId: task.projectId,
        title: task.title,
        estimation: task.estimation,
        childrenTaskPropsList: tasks
            .filter(child => child.parentId === task.id)
            .map(child => makeTaskProps(tasks, child)),
    }
}


export type ProjectsProps = {
    projectPropsList: ProjectProps[],
};

function Projects({ projectPropsList, dispatch }: ProjectsProps & { dispatch: Dispatch }) {
    let titleField: TextField;

    return (
        <div>
            <div style={{ paddingTop: 10 }}>
                { projectPropsList.map(projectProps => (
                    <Project
                        key={projectProps.id}
                        {...projectProps}
                    />
                ))}
            </div>
            <TextField
                ref={(textField: TextField) => { titleField = textField; }}
                hintText="タイトル"
            />
            <FlatButton
                label="作る"
                onTouchTap={() => dispatch({
                    type: 'CreateProject',
                    title: titleField.getValue(),
                })}
            />
        </div>
    );
}

function mapStateToProps({ projects, tasks }: State, ownProps: {}) {
    return {
        projectPropsList: projects.map(project => ({
            id: project.id,
            title: project.title,
            taskPropsList: tasks
                .filter(task => task.parentId === null && task.projectId === project.id)
                .map(task => makeTaskProps(tasks, task)),
        })),
    };
}

export default connect(mapStateToProps)(Projects);
