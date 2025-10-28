export default function BalanceCard({ balAmount, locked } : any) {
  return (
    <div className="flex flex-col gap-1.5 border-slate-300 border rounded px-8 py-8">
      <div className="text-xl font-medium">Balance</div>
      <div className="flex justify-between text-sm">
        <div>Unlocked Balance</div>
        <div>{balAmount / 100} INR</div>
      </div>
      <div className="flex justify-between text-sm">
        <div>Total Locked Balance</div>
        <div>{locked / 100} INR</div>
      </div>
      <div className="flex justify-between text-sm">
        <div>Total Balance</div>
        <div>{(balAmount + locked) / 100} INR</div>
      </div>
    </div>
  );
}
