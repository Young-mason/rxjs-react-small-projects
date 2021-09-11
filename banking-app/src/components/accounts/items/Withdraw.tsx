import React from "react";
import {
  FormGroup,
  InputGroup,
  FormControl,
  Col,
  Button,
  ButtonToolbar,
  FormCheck,
} from "react-bootstrap";

function Withdraw() {
  return (
    <div>
      <FormGroup>
        <Col xs={6}>
          <Col xs={3}>
            <InputGroup>
              <Button variant="outline-secondary">$</Button>
              <FormControl type="number" onChange={(e) => console.log(e)} />
            </InputGroup>
          </Col>
        </Col>

        <Col xs={6}>
          <ButtonToolbar>
            <Button onClick={() => null}>Withdraw</Button>
            <Button onClick={() => null}>Deposit</Button>
            <FormGroup>
              <FormCheck
                type="radio"
                name="account"
                label="Checking"
                onChange={() => null}
              />
              <FormCheck
                type="radio"
                name="account"
                label="Savings"
                onChange={() => null}
              />
            </FormGroup>
          </ButtonToolbar>
        </Col>
      </FormGroup>
    </div>
  );
}

export default Withdraw;
