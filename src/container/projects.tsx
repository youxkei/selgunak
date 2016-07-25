import * as React from 'react';
import { connect } from 'react-redux';

import { Dispatch } from '../action/action';
import State, { Task } from '../state';
import Project, { ProjectProps } from '../component/project';
import { TaskProps } from '../component/task';


function makeTaskProps(tasks: Task[], task: Task): TaskProps {
    return {
        id: task.id,
        title: task.title,
        estimation: task.estimation,
        children: tasks
            .filter(child => child.parentId === task.id)
            .map(child => makeTaskProps(tasks, child)),
    }
}


interface ProjectsProps {
    projectPropsList: ProjectProps[],
}

function Projects({ projectPropsList }: ProjectsProps) {
    return (
        <div>
            { projectPropsList.map(projectProps => (<Project key={projectProps.id} {...projectProps} />)) }
        </div>
    );
}

function mapStateToProps({ projects, tasks }: State, ownProps: {}) {
    return {
        projectPropsList: projects.map(project => ({
            id: project.id,
            title: project.title,
            tasks: tasks
                .filter(task => task.parentId === null && task.projectId === project.id)
                .map(task => makeTaskProps(tasks, task)),
        })),
    };
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: {}) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
