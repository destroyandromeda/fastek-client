import {combineReducers} from "redux";
import {albumReducer} from "./albumReduser";

export const rootReducer = combineReducers({
    album: albumReducer
})

export type RootState = ReturnType<typeof rootReducer>