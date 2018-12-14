import { AnyAction } from "redux";

export function handlerWrapper<S>(handler: any) {
    return (state: S, action: AnyAction): S => {
        return handler(state, action);
    };
}