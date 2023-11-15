import { EthAdapter, GnosisSafeContract, MetaTransactionData, SafeTransactionData, SafeTransactionDataPartial } from '@safe-global/safe-core-sdk-types';
export declare function standardizeMetaTransactionData(tx: SafeTransactionDataPartial): MetaTransactionData;
export declare function standardizeSafeTransactionData(safeContract: GnosisSafeContract, ethAdapter: EthAdapter, tx: SafeTransactionDataPartial): Promise<SafeTransactionData>;
export declare function encodeMultiSendData(txs: MetaTransactionData[]): string;
