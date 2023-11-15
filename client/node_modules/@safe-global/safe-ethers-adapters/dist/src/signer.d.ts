import { Provider, TransactionRequest, TransactionResponse } from '@ethersproject/abstract-provider';
import { VoidSigner } from '@ethersproject/abstract-signer';
import { Deferrable } from '@ethersproject/properties';
import Safe from '@safe-global/safe-core-sdk';
import { OperationType, SafeTransactionData } from '@safe-global/safe-core-sdk-types';
import { SafeService } from './service';
export interface SafeTransactionResponse extends TransactionResponse {
    operation: OperationType;
}
export interface SafeEthersSignerOptions {
    pollingDelay?: number;
}
export interface SafeFactory extends Promise<Safe> {
    getAddress: () => string;
}
export declare class SafeEthersSigner extends VoidSigner {
    readonly service: SafeService;
    readonly safe: Safe | SafeFactory;
    readonly options?: SafeEthersSignerOptions;
    /**
     * Creates an instance of the SafeEthersSigner.
     * @param safe - Safe that should be used
     * @param service - Services to which the transactions should be proposed to
     * @param provider - (Optional) Provider that should be used for blockchain interactions. By default the provider from the signer is used.
     * @param options - (Optional) Additional options (e.g. polling delay when waiting for a transaction to be mined)
     * @returns The SafeEthersSigner instance
     */
    constructor(safe: Safe | SafeFactory, service: SafeService, provider?: Provider, options?: SafeEthersSignerOptions);
    buildTransactionResponse(safeTxHash: string, safeTx: SafeTransactionData): Promise<SafeTransactionResponse>;
    /**
     * Populates all fields in a transaction, signs it and sends it to the Safe transaction service
     *
     * @param transaction - The transaction what should be send
     * @returns A promise that resolves to a SafeTransactionReponse, that contains all the information of the transaction.
     */
    sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<SafeTransactionResponse>;
}
