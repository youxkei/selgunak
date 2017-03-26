// @flow

import { combineReducers } from 'redux';

import projects from './projects';
import tasks from './tasks';
import timeTrackings from './timeTrackings';
import sprints from './sprints';
import taskSprintRelations from './taskSprintRelations';


export function calcId<T: { id: number }>(array: T[]): number {
    if (array.length > 0) {
        return array[array.length - 1].id + 1;
    } else {
        return 0;
    }
}

export const reducer = combineReducers({ projects, tasks, timeTrackings, sprints, taskSprintRelations });
export default reducer;
