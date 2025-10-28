export default function TransactionList({ transactions } : any) {
  return ( 
    <div className="flex flex-col gap-1.5 border-slate-300 border rounded px-8 py-8">
      <div className="text-xl font-medium">Recent Transactions</div>
      {transactions.length === 0 ? (
        <div className="text-sm text-slate-500">No recent transactions</div>
      ) : (
        transactions.map((txn : any) => (
          <div key={txn.id} className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-sm">{txn.status}</div>
              <div className="text-slate-500 text-[11px]">
                {new Date(txn.startTime).toDateString()}
              </div>
            </div>
            <div>
              {txn.amount > 0 ? `+ ₹${txn.amount / 100}` : `- ₹${Math.abs(txn.amount)}`}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
