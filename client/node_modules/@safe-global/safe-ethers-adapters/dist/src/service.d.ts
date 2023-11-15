import { BigNumber } from '@ethersproject/bignumber';
import { SafeSignature, SafeTransaction, SafeTransactionDataPartial } from '@safe-global/safe-core-sdk-types';
import { AxiosInstance } from 'axios';
export interface SafeTxDetails {
    transactionHash?: string;
}
export declare class SafeService {
    serviceUrl: string;
    network: AxiosInstance;
    constructor(serviceUrl: string, network?: AxiosInstance);
    /**
     * Estimates a Safe transaction
     *
     * @param safe - Address of the Safe for which this transaction should be estimated
     * @param safeTx - Safe transaction that should be estimated for execution
     * @returns A big number representing the safeTxGas for the passed Safe transaction
     */
    estimateSafeTx(safe: string, safeTx: SafeTransactionDataPartial): Promise<BigNumber>;
    /**
     * Load details for a Safe transaction
     *
     * @param safeTxHash - Hash of the Safe transaction
     * @returns A `SafeTxDetails` object that contains the details of a Safe transaction
     */
    getSafeTxDetails(safeTxHash: string): Promise<SafeTxDetails>;
    /**
     * Propose a new Safe transaction to the service
     *
     * @param safeAddress - Address of the Safe for which this transaction should be proposed
     * @param safeTxHash - Hash of the Safe transaction
     * @param safeTx - Safe transaction that should be proposed
     * @param signature - Signature of an owner or a delegate of an owner of the specified Safe to authorize the proposal
     * @returns The hash of the Safe transaction that has been proposed
     */
    proposeTx(safeAddress: string, safeTxHash: string, safeTx: SafeTransaction, signature: SafeSignature): Promise<String>;
}
