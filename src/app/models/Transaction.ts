export interface TransactionData {
    txHash: string;
    type: number;
    block: string;
    timeStamp: string;
    fee: string;
}

export interface TransactionResponse {
    limit: number;
    next: number;
    txs: {
        chainId: string;
        height: string;
        txhash: string;
        tx: {
            fee: {
                denom: string;
                amount: string
            }[];
            msg: {
                type: string;
            }[];
        }
    }[]
}