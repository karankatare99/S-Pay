import { p2pTransfer } from "../../app/lib/actions/p2pTransfer"

interface sendProps {
    toUser: string;
    amount: number
}

export const SendReq = ({toUser, amount} : sendProps ) => {
    return (
        <button onClick={async () => await p2pTransfer(toUser, amount)} className="text-white text-sm font-medium rounded-full bg-purple-600 p-2 max-w-14">Send</button>
    )
}