import { Action } from "@ngrx/store";
import { Tutorial } from "./../model/todo.model";
import * as TutorialActions from "./../action/todo.action";

const initialState: any = {
  name: "Try Bry",
  url: "http://google.com"
};

export function reducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}
