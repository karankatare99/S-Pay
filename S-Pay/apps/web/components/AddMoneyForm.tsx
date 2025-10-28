"use client";

export default function AddMoneyForm({ txnAmount, provider, setTxnAmount, setProvider, onAddMoney } : any) {
  return (
    <div className="flex flex-col gap-5 border-slate-300 border rounded w-full px-8 py-8">
      <div className="text-xl font-medium">Add Money</div>

      <div className="flex flex-col gap-1.5">
        <div className="text-sm">Amount</div>
        <input
          value={txnAmount}
          onChange={(e) => setTxnAmount(Number(e.target.value))}
          className="text-slate-400 text-sm rounded border py-2 px-3 focus:outline-none focus:text-black focus:ring-2 focus:ring-purple-500 w-full"
          type="text"
          placeholder="Amount"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bank" className="text-sm">Bank</label>
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          id="bank"
          name="bank"
          className="text-sm border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select Bank</option>
          <option value="HDFC">HDFC</option>
          <option value="AXIS">AXIS</option>
          <option value="SBI">SBI</option>
        </select>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onAddMoney}
          className="text-white text-sm font-medium rounded-full bg-purple-600 p-2 w-fit"
        >
          Add Money
        </button>
      </div>
    </div>
  );
}
