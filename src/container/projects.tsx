import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { Button, Form, FormControl } from 'react-bootstrap';

import { Dispatch } from '../action/action';
import { createProject } from '../action/project';
import State, { Task } from '../state';
import Project, { ProjectProps } from './project';
import { TaskProps } from '../container/task';


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


interface ProjectsProps {
    projectPropsList: ProjectProps[],
    createProject: (title: string) => void,
}

function Projects({ projectPropsList, createProject }: ProjectsProps) {
    let titleField: HTMLInputElement;

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
            <Form inline>
                <FormControl
                    ref={(formControl: FormControl) => { titleField = findDOMNode(formControl) as HTMLInputElement; }}
                    placeholder="タイトル"
                />
                <Button onTouchTap={() => createProject(titleField.value)}>作る</Button>
            </Form>
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

function mapDispatchToProps(dispatch: Dispatch, ownProps: {}): { createProject: (title: string) => void } {
    return {
        createProject: title => dispatch(createProject(title)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
