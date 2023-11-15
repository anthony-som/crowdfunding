import { EthAdapter, SafeSignature, SafeTransactionEIP712Args } from '@safe-global/safe-core-sdk-types';
import EthSignSignature from './SafeSignature';
export declare function generatePreValidatedSignature(ownerAddress: string): SafeSignature;
export declare function isTxHashSignedWithPrefix(txHash: string, signature: string, ownerAddress: string): boolean;
type AdjustVOverload = {
    (signingMethod: 'eth_signTypedData', signature: string): string;
    (signingMethod: 'eth_sign', signature: string, safeTxHash: string, sender: string): string;
};
export declare const adjustVInSignature: AdjustVOverload;
export declare function generateSignature(ethAdapter: EthAdapter, hash: string): Promise<EthSignSignature>;
export declare function generateEIP712Signature(ethAdapter: EthAdapter, safeTransactionEIP712Args: SafeTransactionEIP712Args, methodVersion?: 'v3' | 'v4'): Promise<EthSignSignature>;
export {};
