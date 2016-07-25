import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import State from './state';
import Action from './action/action';
import reducer from './reducer/reducer';

import Projects from './container/projects';
import Sprints from './container/sprints';


const store = createStore(reducer);
const rootElement = document.getElementById('root');

store.dispatch({
    type: 'CreateProject',
    title: 'ぷろじぇくと',
});

if (rootElement !== null) {
    render((
        <Provider store={store}>
            <MuiThemeProvider>
                <div>
                    <Sprints />
                    <Projects />
                </div>
            </MuiThemeProvider>
        </Provider>
    ), rootElement);
}


store.dispatch({
    type: 'CreateTask',
    projectId: 0,
    parentId: null,
    title: 'たすく1',
    estimation: new Date(),
});

store.dispatch({
    type: 'CreateTask',
    projectId: 0,
    parentId: 0,
    title: 'たすく2',
    estimation: new Date(),
});

store.dispatch({
    type: 'CreateSprint',
    title: 'すぷりんと',
    begin: new Date(2016, 7, 25),
    end: new Date(2016, 8, 31),
});

store.dispatch({
    type: 'RegisterTaskToSprint',
    sprintId: 0,
    taskId: 1,
});
