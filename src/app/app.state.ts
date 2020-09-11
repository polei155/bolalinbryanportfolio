import { Tutorial } from "./store/model/todo.model";

export interface AppState {
  readonly tutorial: Tutorial[];
}
