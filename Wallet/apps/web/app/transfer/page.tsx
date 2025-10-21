import { Sidebar } from "../../components/sidebar";
import { HomeSvg, TransactionSvg, TransferSvg } from "../../components/svg";

export default function() {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-1 border-slate-300 border-r w-full min-h-screen ">
                <Sidebar
                    svgs={[
                    <HomeSvg key="home" active={false} />,
                    <TransferSvg key="transfer" active={true} />,
                    <TransactionSvg key="transactions" active={false} />,
                    ]}
                />
            </div>
            <div className="col-span-4">
                <div className="text-4xl font-semibold text-purple-600 ml-4 mt-8">Transfer</div>

                <div className="flex gap-4 mt-8 mx-4">
                    <div className="flex flex-col gap-5 border-slate-300 border rounded w-full px-8 py-8">
                        <div className="text-xl">Add Money</div>

                        <div className="flex flex-col gap-1.5">
                            <div className="text-sm">Amount</div>
                            <input className="text-slate-400 text-sm rounded border py-2 px-3 focus:outline-none focus:text-black w-full" type="text" placeholder="Amount" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="text-sm">Bank</div>
                            <input className="text-slate-400 text-sm rounded border py-2 px-3 focus:outline-none focus:text-black w-full" type="text" placeholder="Bank" />
                        </div>

                        <div className="flex justify-center">
                            <button className=" text-white text-sm font-medium rounded-full bg-purple-600 p-2 w-fit">Add Money</button>
                        </div>

                    </div>
                    
                    <div className="w-full">
                        <div className="flex flex-col gap-1.5 border-slate-300 border rounded px-8 py-8">
                            <div className="text-xl">Balance</div>

                            <div className="flex justify-between text-sm">
                                <div>Unlocked Balance</div>
                                <div>0 INR</div>
                            </div>
                            <div className="flex justify-between text-sm">
                                <div>Total Locked Balance</div>
                                <div>0 INR</div>
                            </div>
                            <div className="flex justify-between text-sm">
                                <div>Total Balance</div>
                                <div>0 INR</div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}