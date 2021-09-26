const SET_BALANCE = "SET_BALANCE";
const TRANSACTION_START = "TRANSACTION_START";
const AMOUNT_CHANGED = "AMOUNT_CHANGED";
const ACCOUNT_CHANGED = "ACCOUNT_CHANGED";

export const setBalances = (balances: {
  checking: number;
  savings: number;
}) => ({
  type: SET_BALANCE,
  balances,
});

export const balanceActions = {
  withdraw: () => ({ type: TRANSACTION_START, value: "WITHDRAW" }),
  deposit: () => ({ type: TRANSACTION_START, value: "DEPOSIT" }),
  amount: (value: string) => ({ type: AMOUNT_CHANGED, value, field: "amount" }),
  account: (value: string) => {
    // console.log("account changed", value);
    return {
      type: ACCOUNT_CHANGED,
      value,
      field: "account",
    };
  },
};
