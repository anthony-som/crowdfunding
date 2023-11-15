import { EthAdapter, GnosisSafeContract, OperationType } from '@safe-global/safe-core-sdk-types';
export declare function estimateTxGas(safeContract: GnosisSafeContract, ethAdapter: EthAdapter, to: string, valueInWei: string, data: string, operation: OperationType): Promise<number>;
