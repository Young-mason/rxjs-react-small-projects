import { combineReducers } from "redux";

const initialState = {
  accounts: { checking: 100, savings: 100 },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_BALANCE":
      return { ...state, accounts: action.balances };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ appState: reducer });

export type RootState = ReturnType<typeof rootReducer>;
