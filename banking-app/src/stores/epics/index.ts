import { combineEpics } from "redux-observable";
import { initializeEpic, userEpic } from "./accounts.epic";

export const rootEpic = combineEpics(initializeEpic, userEpic);
