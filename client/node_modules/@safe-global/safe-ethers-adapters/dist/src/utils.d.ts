import { Interface } from '@ethersproject/abi';
import { TransactionReceipt } from '@ethersproject/abstract-provider';
import { SafeTransactionData } from '@safe-global/safe-core-sdk-types';
export declare const createLibDeployment: import("@safe-global/safe-deployments").SingletonDeployment | undefined;
export declare const createLibAddress: string;
export declare const createLibInterface: Interface;
export declare const mapReceipt: (receipt: TransactionReceipt, safeTx: SafeTransactionData) => TransactionReceipt;
