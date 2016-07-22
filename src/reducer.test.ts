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

describe('timeTrackings reducer', function() {
    it('should reduce StartTimeTracking action', function() {
        assert.deepEqual(
            timeTrackings(
                [],
                { type: 'StartTimeTracking', taskId: 0, begin: new Date(314) },
            ),
            [
                { id: 0, taskId: 0, begin: new Date(314), end: null },
            ]
        );

        assert.deepEqual(
            timeTrackings(
                [
                    { id: 0, taskId: 0, begin: new Date(314), end: null },
                ],
                { type: 'StartTimeTracking', taskId: 1, begin: new Date(141) },
            ),
            [
                { id: 0, taskId: 0, begin: new Date(314), end: null },
                { id: 1, taskId: 1, begin: new Date(141), end: null },
            ]
        );
    });

    it('should reduce StopTimeTracking action', function() {
        assert.deepEqual(
            timeTrackings(
                [],
                { type: 'StopTimeTracking', timeTrackingId: 3141592, end: new Date(314) }
            ),
            []
        );

        assert.deepEqual(
            timeTrackings(
                [
                    { id: 0, taskId: 0, begin: new Date(141), end: null },
                ],
                { type: 'StopTimeTracking', timeTrackingId: 3141592, end: new Date(314) }
            ),
            [
                { id: 0, taskId: 0, begin: new Date(141), end: null },
            ]
        );

        assert.deepEqual(
            timeTrackings(
                [
                    { id: 0, taskId: 1, begin: new Date(141), end: null },
                    { id: 1, taskId: 0, begin: new Date(173), end: null },
                ],
                { type: 'StopTimeTracking', timeTrackingId: 1, end: new Date(314) }
            ),
            [
                { id: 0, taskId: 1, begin: new Date(141), end: null },
                { id: 1, taskId: 0, begin: new Date(173), end: new Date(314) },
            ]
        );
    });
});

describe('sprints reducer', function() {
    it('should reduce CreateSprint action', function() {
        assert.deepEqual(
            sprints(
                [],
                { type: 'CreateSprint', title: 'lo broda', begin: new Date(141), end: new Date(173) }
            ),
            [
                { id: 0, index: 0, title: 'lo broda', begin: new Date(141), end: new Date(173) },
            ]
        );

        assert.deepEqual(
            sprints(
                [
                    { id: 0, index: 0, title: 'lo broda', begin: new Date(141), end: new Date(173) }
                ],
                { type: 'CreateSprint', title: 'lo brode', begin: new Date(271), end: new Date(314) }
            ),
            [
                { id: 0, index: 0, title: 'lo broda', begin: new Date(141), end: new Date(173) },
                { id: 1, index: 1, title: 'lo brode', begin: new Date(271), end: new Date(314) },
            ]
        );
    });

    it('should reduce UpdateSprint action', function() {
        assert.deepEqual(
            sprints(
                [],
                { type: 'UpdateSprint', sprintId: 3141592, title: 'lo broda', begin: new Date(141), end: new Date(173) }
            ),
            []
        );

        assert.deepEqual(
            sprints(
                [
                    { id: 0, index: 0, title: 'lo broda', begin: new Date(141), end: new Date(173) },
                ],
                { type: 'UpdateSprint', sprintId: 3141592, title: 'lo brode', begin: new Date(271), end: new Date(314) }
            ),
            [
                { id: 0, index: 0, title: 'lo broda', begin: new Date(141), end: new Date(173) },
            ]
        );

        assert.deepEqual(
            sprints(
                [
                    { id: 0, index: 1, title: 'lo broda', begin: new Date(141), end: new Date(173) },
                    { id: 1, index: 0, title: 'lo brode', begin: new Date(271), end: new Date(314) },
                ],
                { type: 'UpdateSprint', sprintId: 1, title: 'lo brodi', begin: new Date(0xB), end: new Date(0xD) }
            ),
            [
                { id: 0, index: 1, title: 'lo broda', begin: new Date(141), end: new Date(173) },
                { id: 1, index: 0, title: 'lo brodi', begin: new Date(0xB), end: new Date(0xD) },
            ]
        );
    });

    it('should reduce DeleteSprint action', function() {
        assert.deepEqual(
            sprints(
                [],
                { type: 'DeleteSprint', sprintId: 0 }
            ),
            []
        );

        assert.deepEqual(
            sprints(
                [
                    { id: 0, index: 0, title: 'lo broda', begin: new Date(141), end: new Date(173) },
                ],
                { type: 'DeleteSprint', sprintId: 3141592 }
            ),
            [
                { id: 0, index: 0, title: 'lo broda', begin: new Date(141), end: new Date(173) },
            ]
        );

        assert.deepEqual(
            sprints(
                [
                    { id: 0, index: 1, title: 'lo broda', begin: new Date(141), end: new Date(173) },
                    { id: 1, index: 0, title: 'lo brode', begin: new Date(271), end: new Date(314) },
                ],
                { type: 'DeleteSprint', sprintId: 1 }
            ),
            [
                { id: 0, index: 1, title: 'lo broda', begin: new Date(141), end: new Date(173) },
            ]
        );
    });
});
