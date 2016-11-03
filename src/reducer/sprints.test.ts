import * as assert from 'power-assert';

import { ActionType } from '../action/action';
import sprints from './sprints';


describe('sprints reducer', function() {
    it('should reduce CreateSprint action', function() {
        assert.deepEqual(
            sprints(
                [],
                { type: ActionType.CreateSprint, title: 'lo broda', begin: new Date(141), end: new Date(173) }
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
                { type: ActionType.CreateSprint, title: 'lo brode', begin: new Date(271), end: new Date(314) }
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
                { type: ActionType.UpdateSprint, sprintId: 3141592, title: 'lo broda', begin: new Date(141), end: new Date(173) }
            ),
            []
        );

        assert.deepEqual(
            sprints(
                [
                    { id: 0, index: 0, title: 'lo broda', begin: new Date(141), end: new Date(173) },
                ],
                { type: ActionType.UpdateSprint, sprintId: 3141592, title: 'lo brode', begin: new Date(271), end: new Date(314) }
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
                { type: ActionType.UpdateSprint, sprintId: 1, title: 'lo brodi', begin: new Date(0xB), end: new Date(0xD) }
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
                { type: ActionType.DeleteSprint, sprintId: 0 }
            ),
            []
        );

        assert.deepEqual(
            sprints(
                [
                    { id: 0, index: 0, title: 'lo broda', begin: new Date(141), end: new Date(173) },
                ],
                { type: ActionType.DeleteSprint, sprintId: 3141592 }
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
                { type: ActionType.DeleteSprint, sprintId: 1 }
            ),
            [
                { id: 0, index: 1, title: 'lo broda', begin: new Date(141), end: new Date(173) },
            ]
        );
    });
});
