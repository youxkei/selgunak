import * as assert from 'power-assert';

import { ActionType } from '../../src/action';
import timeTrackings from '../../src/reducer/timeTrackings';


describe('timeTrackings reducer', function() {
    it('should reduce StartTimeTracking action', function() {
        assert.deepEqual(
            timeTrackings(
                [],
                { type: ActionType.StartTimeTracking, taskId: 0, begin: new Date(314) },
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
                { type: ActionType.StartTimeTracking, taskId: 1, begin: new Date(141) },
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
                { type: ActionType.StopTimeTracking, timeTrackingId: 3141592, end: new Date(314) }
            ),
            []
        );

        assert.deepEqual(
            timeTrackings(
                [
                    { id: 0, taskId: 0, begin: new Date(141), end: null },
                ],
                { type: ActionType.StopTimeTracking, timeTrackingId: 3141592, end: new Date(314) }
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
                { type: ActionType.StopTimeTracking, timeTrackingId: 1, end: new Date(314) }
            ),
            [
                { id: 0, taskId: 1, begin: new Date(141), end: null },
                { id: 1, taskId: 0, begin: new Date(173), end: new Date(314) },
            ]
        );
    });
});
