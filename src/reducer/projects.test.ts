import * as assert from 'power-assert';

import projects from './projects';


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
