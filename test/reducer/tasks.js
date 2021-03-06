// @flow

import * as assert from 'power-assert';

import tasks from '../../src/reducer/tasks';


describe('tasks reducer', function() {
    it('should reduce CreateTask action', function() {
        assert.deepEqual(
            tasks(
                [],
                { type: 'CreateTask', projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) }
            ),
            [
                { id: 0, index: 0, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
            ]
        );

        assert.deepEqual(
            tasks(
                [
                    { id: 0, index: 0, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
                ],
                { type: 'CreateTask', projectId: 1, parentId: 0, title: 'lo brode', estimation: new Date(141) }
            ),
            [
                { id: 0, index: 0, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
                { id: 1, index: 1, projectId: 1, parentId: 0, title: 'lo brode', estimation: new Date(141) },
            ]
        );
    });

    it('should reduce UpdateTask action', function() {
        assert.deepEqual(
            tasks(
                [],
                { type: 'UpdateTask', taskId: 0, title: 'lo broda', estimation: new Date(314) }
            ),
            []
        );

        assert.deepEqual(
            tasks(
                [
                    { id: 0, index: 0, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
                ],
                { type: 'UpdateTask', taskId: 3141592, title: 'lo broda', estimation: new Date(314) }
            ),
            [
                { id: 0, index: 0, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
            ]
        );

        assert.deepEqual(
            tasks(
                [
                    { id: 0, index: 1, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
                    { id: 1, index: 0, projectId: 1, parentId: 0, title: 'lo brode', estimation: new Date(271) },
                ],
                { type: 'UpdateTask', taskId: 1, title: 'lo brodi', estimation: new Date(141) }
            ),
            [
                { id: 0, index: 1, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
                { id: 1, index: 0, projectId: 1, parentId: 0, title: 'lo brodi', estimation: new Date(141) },
            ]
        );
    });

    it('should reduce DeleteTask action', function() {
        assert.deepEqual(
            tasks(
                [],
                { type: 'DeleteTask', taskId: 0 }
            ),
            []
        );

        assert.deepEqual(
            tasks(
                [
                    { id: 0, index: 0, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
                ],
                { type: 'DeleteTask', taskId: 3141592 }
            ),
            [
                { id: 0, index: 0, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
            ]
        );

        assert.deepEqual(
            tasks(
                [
                    { id: 0, index: 1, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
                    { id: 1, index: 0, projectId: 1, parentId: 0, title: 'lo brode', estimation: new Date(271) },
                ],
                { type: 'DeleteTask', taskId: 1 }
            ),
            [
                { id: 0, index: 1, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
            ]
        );

        assert.deepEqual(
            tasks(
                [
                    { id: 0, index: 1, projectId: 0, parentId: null, title: 'lo broda', estimation: new Date(314) },
                    { id: 1, index: 0, projectId: 1, parentId: 0, title: 'lo brode', estimation: new Date(271) },
                ],
                { type: 'DeleteTask', taskId: 0 }
            ),
            []
        );
    });
});
