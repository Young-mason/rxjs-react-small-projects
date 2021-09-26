import React, { useState } from "react";
import {
  FormGroup,
  InputGroup,
  FormControl,
  Col,
  Button,
  ButtonToolbar,
  FormCheck,
} from "react-bootstrap";
import { balanceActions } from "stores/actions";
import { useDispatch } from "react-redux";

function Withdraw() {
  const { withdraw, deposit, account, amount } = balanceActions;
  const dispatch = useDispatch();

  return (
    <div>
      <FormGroup>
        <Col xs={6}>
          <Col xs={3}>
            <InputGroup>
              <Button variant="outline-secondary">$</Button>
              <FormControl
                type="number"
                onChange={(e) => dispatch(amount(e.target.value))}
              />
            </InputGroup>
          </Col>
        </Col>

        <Col xs={6}>
          <ButtonToolbar>
            <Button onClick={() => dispatch(withdraw())}>Withdraw</Button>
            <Button onClick={() => dispatch(deposit())}>Deposit</Button>
            <FormGroup>
              <FormCheck
                type="radio"
                name="account"
                label="Checking"
                onChange={() => dispatch(account("checking"))}
                inline
              />
              <FormCheck
                type="radio"
                name="account"
                label="Savings"
                onChange={() => dispatch(account("savings"))}
                inline
              />
            </FormGroup>
          </ButtonToolbar>
        </Col>
      </FormGroup>
    </div>
  );
}

export default Withdraw;
