import { createDeepEqualSelector } from "./base";

const getTasks = (state: any) => state.toDoListReducers.tasks;
const getCurrentId = (state: any, props: any) => props.navigation.state.params.currentId;

const getCurrentTask = createDeepEqualSelector(
    [getTasks, getCurrentId],
    (tasks, currentId) => {
        if(currentId === null) {
            return { id: "", title: "", checked: false, body: "" };
        }
        const task = tasks.filter((task: any) => {
            return task.id === currentId
        })
        return task[0];
    }
)
export { getCurrentTask };

