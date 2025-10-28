"use client";

import { useState } from "react";
import AddMoneyForm from "../AddMoneyForm";
import { createOnRampTxn } from "../../app/lib/actions/createOnRampTxn";
import BalanceCard from "./balanceCard";
import TransactionList from "./transactionList";


export default function TransferClient({ balAmount, locked, transactions } : any) {
  const [txnAmount, setTxnAmount] = useState(0);
  const [provider, setProvider] = useState("");

  return (
    <div>
      <div className="text-4xl font-semibold text-purple-600 ml-4 mt-8">Transfer</div>
      <div className="flex gap-4 mt-8 mx-4">
        <AddMoneyForm
          txnAmount={txnAmount}
          provider={provider}
          setTxnAmount={setTxnAmount}
          setProvider={setProvider}
          onAddMoney={async () => {
            await createOnRampTxn(txnAmount, provider)
          }}
        />
        <div className="flex flex-col gap-5 w-full">
          <BalanceCard balAmount={balAmount} locked={locked} />
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
