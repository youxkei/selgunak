import * as assert from 'power-assert';

import { projects, tasks, timeTrackings, sprints, taskSprintRelations } from './reducer';

describe('projects reducer', function() {
    it('should reduce CreateProject action', function() {
        assert.deepEqual(
            projects([], { type: 'CreateProject', title: 'lo broda' }),
            [{ id: 0, index: 0, title: 'lo broda' }]
        );

        assert.deepEqual(
            projects(
                [ { id: 0, index: 0, title: 'lo brode' } ],
                { type: 'CreateProject', title: 'lo brodi' }
            ),
            [
                { id: 0, index: 0, title: 'lo brode' },
                { id: 1, index: 1, title: 'lo brodi' },
            ]
        );
    });

    it('should reduce UpdateProject action', function() {
        assert.deepEqual(
            projects([], { type: 'UpdateProject', projectId: 0, title: 'lo brodo' }),
            []
        );

        assert.deepEqual(
            projects(
                [{ id: 0, index: 0, title: 'lo brodu' }],
                { type: 'UpdateProject', projectId: 3141592, title: 'lo brodo' }
            ),
            [{ id: 0, index: 0, title: 'lo brodu' }]
        );

        assert.deepEqual(
            projects(
                [{ id: 0, index: 0, title: 'lo brodu' }],
                { type: 'UpdateProject', projectId: 0, title: 'lo broda' }
            ),
            [{ id: 0, index: 0, title: 'lo broda' }]
        );

        assert.deepEqual(
            projects(
                [
                    { id: 0, index: 1, title: 'lo brode' },
                    { id: 1, index: 0, title: 'lo brodi' },
                ],
                { type: 'UpdateProject', projectId: 0, title: 'lo brodo' }
            ),
            [
                { id: 0, index: 1, title: 'lo brodo' },
                { id: 1, index: 0, title: 'lo brodi' },
            ]
        );
    });

    it('should reduce DeleteProject action', function() {
        assert.deepEqual(
            projects([], { type: 'DeleteProject', projectId: 0 }),
            []
        );

        assert.deepEqual(
            projects(
                [{ id: 0, index: 0, title: 'lo brodu' }],
                { type: 'DeleteProject', projectId: 3141592 }
            ),
            [{ id: 0, index: 0, title: 'lo brodu' }]
        );

        assert.deepEqual(
            projects(
                [
                    { id: 0, index: 1, title: 'lo broda' },
                    { id: 1, index: 0, title: 'lo brode' },
                ],
                { type: 'DeleteProject', projectId: 0 }
            ),
            [{ id: 1, index: 0, title: 'lo brode' }]
        );
    });
});

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
