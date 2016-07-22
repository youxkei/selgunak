import Action from '../action/action';
import { Sprint } from '../state';
import { calcId } from './reducer';


export function sprints(sprints: Sprint[], action: Action): Sprint[] {
    switch (action.type) {
        case 'CreateSprint': {
            const { title, begin, end } = action;
            const id = calcId(sprints);

            return [...sprints, { id, index: id, title, begin, end }];
        }

        case 'UpdateSprint': {
            const { sprintId, title, begin, end } = action;

            return sprints.map(sprint => {
                if (sprint.id === sprintId) {
                    return Object.assign({}, sprint, { title, begin, end });
                } else {
                    return sprint;
                }
            });
        }

        case 'DeleteSprint': {
            const { sprintId } = action;

            return sprints.filter(sprint => sprint.id !== sprintId);
        }

        default: {
            return sprints;
        }
    }
}
export default sprints;
