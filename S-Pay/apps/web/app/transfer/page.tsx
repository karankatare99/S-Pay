import TransferClient from "../../components/clients/transferClient";
import { getBalance, getOnRampTxns } from "../../components/helper/getUserDetails";
import { Sidebar } from "../../components/sidebar";
import { HomeSvg, P2Psvg, TransactionSvg, TransferSvg } from "../../components/svg";

export default async function TransferPage() {
  const { balAmount, locked } = await getBalance();
  const transactions = await getOnRampTxns();

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 border-slate-300 border-r w-full min-h-screen">
        <Sidebar
          svgs={[
            <HomeSvg key="home" active={false} />,
            <TransferSvg key="transfer" active={true} />,
            <TransactionSvg key="transactions" active={false} />,
            <P2Psvg key="p2p" active={false} />
          ]}
        />
      </div>
      <div className="col-span-4">
        <TransferClient
          balAmount={balAmount}
          locked={locked}
          transactions={transactions}
        />
      </div>
    </div>
  );
}
