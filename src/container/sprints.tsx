import * as React from 'react';
import { connect } from 'react-redux';

import State from '../state';
import Sprint, { SprintProps } from './sprint';


interface SprintsProps {
    sprintPropsList: SprintProps[],
}

function Sprints({ sprintPropsList }: SprintsProps) {
    return (
        <div>
            { sprintPropsList.map(sprintProps => (<Sprint key={sprintProps.id} {...sprintProps} />)) }
        </div>
    );
}

function mapStateToProps({ sprints, tasks, taskSprintRelations }: State, ownProps: {}) {
    return {
        sprintPropsList: sprints.map(sprint => ({
            id: sprint.id,
            title: sprint.title,
            begin: sprint.begin,
            end: sprint.end,
            taskInSprintPropsList: taskSprintRelations
                .filter(taskSprintRelation => taskSprintRelation.sprintId === sprint.id)
                .map(taskSprintRelation => tasks.find(task => task.id === taskSprintRelation.taskId))
                .map(task => ({
                    id: task !== undefined ? task.id : 'error',
                    title: task !== undefined ? task.title : 'error',
                })),
        })),
    };
}

export default connect(mapStateToProps)(Sprints);
