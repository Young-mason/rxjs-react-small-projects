import { from } from "rxjs";
import { map, tap, withLatestFrom, mapTo } from "rxjs/operators";
import { Action } from "redux";
import { Epic, ofType } from "redux-observable";
import { setBalances } from "stores/actions";

export const initializeEpic: Epic = (action, state) => {
  return action.pipe(ofType("TRANSACTION"));
};

export const userEpic: Epic = (action$) => {
  return action$.pipe(
    ofType("TRANSACTION_START"),
    tap(console.log),
    map(({ value }) => value),
    withLatestFrom(
      action$.pipe(
        ofType("AMOUNT_CHANGED"),
        tap(console.log),
        map(({ value }) => +value)
      ),
      action$.pipe(
        ofType("ACCOUNT_CHANGED"),
        tap(console.log),
        map(({ value }) => value)
      ),

      // TYPE 으로 변환시켜줌
      (type, amount, account) => {
        const computedAmount = amount * (type === "DEPOSIT" ? 1 : -1);
        console.log(computedAmount);
        return { type, account, amount: computedAmount };
      }
    )
  );
};

export const balanceEpic: Epic = (action$) => {
  return action$.pipe(ofType("DEPOSIT", "WITHDRAW"));
};

class Transaction {
  constructor(name, amount, balance, timestamp) {
    this.name = name;
    this.amount = amount;
    this.balance = balance;
    this.timestamp = timestamp;
  }
}
