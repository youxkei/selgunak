import * as React from 'react';
import { connect } from 'react-redux';

import { Dispatch } from '../action/action';
import State from '../state';
import Sprint, { SprintProps } from '../component/sprint';


interface SprintsProps {
    sprintPropsList: SprintProps[],
}

function Sprints({ sprintPropsList }: SprintsProps) {
    return (
        <div>
            { sprintPropsList.map(sprintProps => (<Sprint {...sprintProps} />)) }
        </div>
    );
}

function mapStateToProps({ sprints, tasks, taskSprintRelations }: State, ownProps: {}) {
    return {
        sprintPropsList: sprints.map(sprint => ({
            title: sprint.title,
            begin: sprint.begin,
            end: sprint.end,
            tasks: taskSprintRelations
                .filter(taskSprintRelation => taskSprintRelation.sprintId === sprint.id)
                .map(taskSprintRelation => tasks.find(task => task.id === taskSprintRelation.taskId))
                .map(task => ({ title: task !== undefined ? task.title : 'error' })),
        })),
    };
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: {}) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprints);
