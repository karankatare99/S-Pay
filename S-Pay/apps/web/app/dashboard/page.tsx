import { Sidebar } from "../../components/sidebar";
import { HomeSvg, P2Psvg, TransactionSvg, TransferSvg } from "../../components/svg";

export default function() {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-1 border-slate-300 border-r w-full min-h-screen ">
                <Sidebar
                    svgs={[
                    <HomeSvg key="home" active={true} />,
                    <TransferSvg key="transfer" active={false} />,
                    <TransactionSvg key="transactions" active={false} />,
                    <P2Psvg key="p2p" active={false} />
                    ]}
                />
            </div>
        </div>
    )
}