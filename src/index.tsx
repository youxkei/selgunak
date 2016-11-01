import * as React from 'react';
import { render } from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import State from './state';
import Action from './action/action';
import reducer from './reducer/reducer';

import Projects from './container/projects';
import Sprints from './container/sprints';


const store = createStore(reducer);
const rootElement = document.getElementById('root');

if (rootElement !== null) {
    injectTapEventPlugin();

    render((
        <Provider store={store}>
            <div>
                <Sprints />
                <Projects />
            </div>
        </Provider>
    ), rootElement);
}


store.dispatch({
    type: 'CreateProject',
    title: 'ぷろじぇくと',
});

store.dispatch({
    type: 'CreateSprint',
    title: 'すぷりんと',
    begin: new Date(),
    end: new Date(),
});
