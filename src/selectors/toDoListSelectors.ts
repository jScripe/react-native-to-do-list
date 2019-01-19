import { createDeepEqualSelector } from "./base";

const getTasks = (state) => state.toDoListReducers.tasks;

