import React from "react";
import { Col } from "react-bootstrap";

interface BalanceProps {
  name: string;
  balance: number;
}

function Balance({ name, balance }: BalanceProps) {
  return (
    <Col xs={6}>
      <h3>{name}</h3>
      <h1>{balance}</h1>
    </Col>
  );
}

export default Balance;
