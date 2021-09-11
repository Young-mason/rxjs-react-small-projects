import React, { useState, useEffect } from "react";
import Balance from "./Balance";

function Accounts() {
  const [checking, setChecking] = useState(0);
  const [saving, setSaving] = useState(0);

  useEffect(() => {
    /* 
    this.props.appState$
    .distinctUntilKeyChanged('accounts')
    .pluck('accounts')
    .subscribe(({checking, savings}) =>
      this.setState({checking, savings})
    );
     */
  }, []);

  return (
    <div>
      <Balance name="Checking" balance={checking} />
      <Balance name="Savings" balance={saving} />
    </div>
  );
}

export default Accounts;
