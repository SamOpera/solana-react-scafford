## Solana Scaffold ReactTs
#### LINK: 
https://solana-react-scaffold.vercel.app/   

#### Run

```
yarn start
```

or

```
npm run start
```

## How do I sign transactions??

Create your transaction as usual and use `wallet.signTransaction()`:

```typescript
const transaction = new web3.Transaction({ feePayer: wallet.publicKey });
transaction.add(instruction1);
transaction.add(instruction2);

await wallet.signTransaction(transaction);
const transactionHash = await web3.sendAndConfirmRawTransaction(
  connection,
  transaction.serialize()
);
```

## License

MIT
