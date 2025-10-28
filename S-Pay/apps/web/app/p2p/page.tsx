import { Sidebar } from "../../components/sidebar";
import { HomeSvg, P2Psvg, TransactionSvg, TransferSvg } from "../../components/svg";
import { InputFields } from "../../components/p2ptransfer/inputFields";

export default function() {

    return (
        <div className="grid grid-cols-5">
            <div className="col-span-1 border-slate-300 border-r w-full min-h-screen ">
                <Sidebar
                    svgs={[
                    <HomeSvg key="home" active={false} />,
                    <TransferSvg key="transfer" active={false} />,
                    <TransactionSvg key="transactions" active={false} />,
                    <P2Psvg key="p2p" active={true} />
                    ]}
                />
            </div>
            <div className="col-span-4 w-full">
                <div className="text-4xl font-semibold text-purple-600 ml-4 mt-8">Peer 2 Peer</div>
                <div className="mx-8 my-8">
                    <InputFields />
                </div>
            </div>
        </div>
    )
}