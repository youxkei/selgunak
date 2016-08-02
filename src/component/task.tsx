import * as React from 'react';
import Card, {CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export interface TaskProps {
    id: number,
    title: string,
    estimation: Date,
    childrenTaskPropsList: TaskProps[],
}

export function Task({ id, title, estimation, childrenTaskPropsList, createTask }: TaskProps & { createTask: (parentId: number | null, title: string, estimation: Date) => void, }): React.ReactElement<any> /* avoiding any with recursion */ {
    let titleField: TextField;
    let estimationField: TextField;

    return (
        <Card>
            <CardHeader title={title} />
            <CardText style={{ padding: '0px 8px', boxSizing: 'border-box' }}>
                { childrenTaskPropsList.map(taskProps => (
                    <Task
                        key={taskProps.id}
                        createTask={createTask}
                        {...taskProps}
                    />
                ))}
                <TextField
                    ref={(textField: TextField) => { titleField = textField; }}
                    hintText="タイトル"
                />
                <TextField
                    ref={(textField: TextField) => { estimationField = textField; }}
                    hintText="見積もり"
                />
                <FlatButton
                    label="作る"
                    onTouchTap={() => createTask(id, titleField.getValue(), new Date(0, 0, 0, 0, parseInt(estimationField.getValue(), 10)))}
                />
            </CardText>
            <CardActions>
                <FlatButton label="action1" />
            </CardActions>
        </Card>
    );
}

export default Task;
