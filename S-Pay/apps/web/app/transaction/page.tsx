import { getp2pTxns } from "../../components/helper/getUserDetails";
import { Sidebar } from "../../components/sidebar";
import { HomeSvg, P2Psvg, TransactionSvg, TransferSvg } from "../../components/svg";

export default async function() {
    const { sentTxns } = await getp2pTxns()
    const transactions = sentTxns
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-1 border-slate-300 border-r w-full min-h-screen ">
                <Sidebar
                    svgs={[
                    <HomeSvg key="home" active={false} />,
                    <TransferSvg key="transfer" active={false} />,
                    <TransactionSvg key="transactions" active={true} />,
                    <P2Psvg key="p2p" active={false} />
                    ]}
                />
            </div>
            <div className="col-span-4 w-full">
                <div className="text-4xl font-semibold text-purple-600 ml-4 mt-8">Transactions</div>
                    <div className="flex flex-col gap-1.5 border-slate-300 border rounded px-8 py-8 mt-8 mx-8">
                        <div className="text-xl font-medium">Recent Transactions</div>
                        {sentTxns.length === 0 ? (
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
            </div>
        </div>
    )
}