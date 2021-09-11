import React from "react";
import Header from "components/header";
import { Accounts, Withdraw } from "components/accounts";

function Main() {
  return (
    <div>
      <Header />
      <Accounts />
      <Withdraw />
    </div>
  );
}

export default Main;
