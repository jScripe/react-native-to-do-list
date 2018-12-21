import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { actions } from "../actions";
import { connect } from 'react-redux';

interface DescriptionTaskContainerProps {
    tasks: object[],
    taskId: string
}

type DescriptionTaskContainerJoinedProps = DescriptionTaskContainerProps & {
    
};

class DescriptionTaskContainer extends Component<DescriptionTaskContainerJoinedProps> {
    public render() {
        return (
            <Text>{this.showTaskById()}</Text>
        )
    }

    showTaskById() {
        const task = this.props.tasks.filter((item) => {
            return item.id === this.props.taskId;
        });
        return task[0].title;
    }
}

function mapStateToProps(state: any) {
    return {
        tasks: state.toDoListReducers.tasks,
        taskId: state.toDoListReducers.taskId
    }
}

export default connect(mapStateToProps, actions)(DescriptionTaskContainer);