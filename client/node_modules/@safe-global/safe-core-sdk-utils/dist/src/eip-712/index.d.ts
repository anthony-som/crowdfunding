import { GenerateTypedData, SafeTransactionEIP712Args } from '@safe-global/safe-core-sdk-types';
export declare const EIP712_DOMAIN_BEFORE_V130: {
    type: string;
    name: string;
}[];
export declare const EIP712_DOMAIN: {
    type: string;
    name: string;
}[];
export declare function getEip712MessageTypes(safeVersion: string): {
    EIP712Domain: typeof EIP712_DOMAIN | typeof EIP712_DOMAIN_BEFORE_V130;
    SafeTx: Array<{
        type: string;
        name: string;
    }>;
};
export declare function generateTypedData({ safeAddress, safeVersion, chainId, safeTransactionData }: SafeTransactionEIP712Args): GenerateTypedData;
