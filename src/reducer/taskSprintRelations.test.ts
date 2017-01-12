import * as assert from 'power-assert';

import { ActionType } from '../action';
import taskSprintRelations from './taskSprintRelations';


describe('taskSprintRelations reducer', function() {
    it('should reduce RegisterTaskToSprint action', function() {
        assert.deepEqual(
            taskSprintRelations(
                [],
                { type: ActionType.RegisterTaskToSprint, sprintId: 0xB, taskId: 0xD }
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
                { type: ActionType.RegisterTaskToSprint, sprintId: 141, taskId: 173 }
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
                { type: ActionType.RegisterTaskToSprint, sprintId: 0xB, taskId: 0xD }
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
                { type: ActionType.UnregisterTaskFromSprint, sprintId: 0xB, taskId: 0xD }
            ),
            []
        );

        assert.deepEqual(
            taskSprintRelations(
                [
                    { id: 0, sprintId: 0xB, taskId: 0xD },
                ],
                { type: ActionType.UnregisterTaskFromSprint, sprintId: 141, taskId: 173 }
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
                { type: ActionType.UnregisterTaskFromSprint, sprintId: 141, taskId: 173 }
            ),
            [
                { id: 0, sprintId: 0xB, taskId: 0xD },
            ]
        );
    });
});
