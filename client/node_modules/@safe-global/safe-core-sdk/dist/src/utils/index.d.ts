import { MetaTransactionData, SafeMultisigTransactionResponse, SafeTransaction, SafeTransactionDataPartial } from '@safe-global/safe-core-sdk-types';
export declare function sameString(str1: string, str2: string): boolean;
export declare function isZeroAddress(address: string): boolean;
export declare function isRestrictedAddress(address: string): boolean;
export declare function isMetaTransactionArray(safeTransactions: SafeTransactionDataPartial | MetaTransactionData[]): safeTransactions is MetaTransactionData[];
export declare function isSafeMultisigTransactionResponse(safeTransaction: SafeTransaction | SafeMultisigTransactionResponse): safeTransaction is SafeMultisigTransactionResponse;
