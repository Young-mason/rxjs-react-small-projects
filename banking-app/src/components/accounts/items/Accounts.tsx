import React, { useState, useEffect } from "react";
import Balance from "./Balance";
import { useSelector } from "react-redux";
import { RootState } from "stores/reducer";

function Accounts() {
  const [checking, setChecking] = useState(0);
  const [saving, setSaving] = useState(0);
  const { appState } = useSelector((state: RootState) => state);

  useEffect(() => {
    const { checking, savings } = appState.accounts;

    setChecking(checking);
    setSaving(savings);
  }, [appState]);

  return (
    <div>
      <Balance name="Checking" balance={checking} />
      <Balance name="Savings" balance={saving} />
    </div>
  );
}

export default Accounts;
