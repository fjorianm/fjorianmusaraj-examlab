import React from 'react';
import CryptoJS from 'crypto-js';

const ReceiptComponent = ({ transaction, sourceAccount, destinationAccount }) => {
  const transactionHash = CryptoJS.SHA256(JSON.stringify(transaction)).toString();
  const blockNumber = Math.floor(Math.random() * 1000) + 1; // Generate a random block number
  const blockHash = CryptoJS.SHA256(blockNumber.toString()).toString(); // Hash the block number

  return (
    <div>
      <h2>Details</h2>
      <p>Date: {transaction.date}</p>
      <p>Amount: {transaction.amount} {transaction.currency}</p>

      <h3>Receipt</h3>
      <p>Transaction Hash: {transactionHash}</p>
      <p>Destination Account: {destinationAccount}</p>
      <p>Gas Used: {blockNumber}</p>
      <p>Block Hash: {blockHash}</p>
      <p>From: {sourceAccount}</p>
      <p>To: {destinationAccount}</p>
    </div>
  );
};

export default ReceiptComponent;
