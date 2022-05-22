export interface TransactionData {
    txHash: string;
    type: string;
    chainId: string;
    height: string;
    block: string;
    timeStamp: string;
    amount: string;
    denom: string;
    fee: string;
}

export interface TransactionResponse {
    limit: number;
    next: number;
    txs: {
        chainId: string;
        height: string;
        txhash: string;
        timestamp: string;
        tx: {
            type: string;
            value: {
                fee: {
                    gas: string;
                    amount: {
                        amount: string;
                        denom: string;
                    }[]
                };
                msg: {
                    type: string;
                }[];
            }
        }
    }[]
}