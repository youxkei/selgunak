import * as assert from 'power-assert';

import taskSprintRelations from './taskSprintRelations';


describe('taskSprintRelations reducer', function() {
    it('should reduce RegisterTaskToSprint action', function() {
        assert.deepEqual(
            taskSprintRelations(
                [],
                { type: 'RegisterTaskToSprint', sprintId: 0xB, taskId: 0xD }
            ),
            [
                { id: 0, sprintId: 0xB, taskId: 0xD },
            ]
        );

        assert.deepEqual(
            taskSprintRelations(
                [
                    { id: 0, sprintId: 0xB, taskId: 0xD },
                ],
                { type: 'RegisterTaskToSprint', sprintId: 141, taskId: 173 }
            ),
            [
                { id: 0, sprintId: 0xB, taskId: 0xD },
                { id: 1, sprintId: 141, taskId: 173 },
            ]
        );

        assert.deepEqual(
            taskSprintRelations(
                [
                    { id: 0, sprintId: 0xB, taskId: 0xD },
                ],
                { type: 'RegisterTaskToSprint', sprintId: 0xB, taskId: 0xD }
            ),
            [
                { id: 0, sprintId: 0xB, taskId: 0xD },
            ]
        );
    });

    it('should reduce UnregisterTaskFromSprint action', function() {
        assert.deepEqual(
            taskSprintRelations(
                [],
                { type: 'UnregisterTaskFromSprint', sprintId: 0xB, taskId: 0xD }
            ),
            []
        );

        assert.deepEqual(
            taskSprintRelations(
                [
                    { id: 0, sprintId: 0xB, taskId: 0xD },
                ],
                { type: 'UnregisterTaskFromSprint', sprintId: 141, taskId: 173 }
            ),
            [
                { id: 0, sprintId: 0xB, taskId: 0xD },
            ]
        );

        assert.deepEqual(
            taskSprintRelations(
                [
                    { id: 0, sprintId: 0xB, taskId: 0xD },
                    { id: 1, sprintId: 141, taskId: 173 },
                ],
                { type: 'UnregisterTaskFromSprint', sprintId: 141, taskId: 173 }
            ),
            [
                { id: 0, sprintId: 0xB, taskId: 0xD },
            ]
        );
    });
});
