import React, { useState } from 'react';
import ReceiptComponent from './ReceiptComponent';
import { faker } from '@faker-js/faker';
import { TextField, Button } from '@material-ui/core';

const Transfer = () => {
  const [amount, setAmount] = useState('');
  const [sourceAccount, setSourceAccount] = useState(faker.finance.ethereumAddress());
  const [destinationAccount, setDestinationAccount] = useState(faker.finance.ethereumAddress());

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted amount:', amount);
  };

  const styles = {
    root: {
      textAlign: 'center',
      padding: '20px',
    },
    input: {
      marginBottom: '20px',
    },
    button: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.root}>
      <h1>"Send Money" Created by 101462447</h1>
      <TextField
        label="Enter Amount"
        type="number"
        variant="outlined"
        style={styles.input}
        value={amount}
        onChange={handleAmountChange}
      />
      <div>
        <p> From:{sourceAccount}</p>
        <p>To:{destinationAccount}</p>
      </div>
      <Button variant="contained" color="primary" style={styles.button} onClick={handleSubmit}>
        Submit
      </Button>
      <ReceiptComponent
        transaction={{ date: '2023-10-13', amount, currency: 'CAD' }}
        sourceAccount={sourceAccount}
        destinationAccount={destinationAccount}
      />
    </div>
  );
};

export default Transfer;
