import { Eip3770Address } from '@safe-global/safe-core-sdk-types';
export declare function parseEip3770Address(fullAddress: string): Eip3770Address;
export declare function getEip3770NetworkPrefixFromChainId(chainId: number): string;
export declare function isValidEip3770NetworkPrefix(prefix: string): boolean;
export declare function validateEip3770NetworkPrefix(prefix: string, currentChainId: number): void;
export declare function validateEthereumAddress(address: string): void;
export declare function validateEip3770Address(fullAddress: string, currentChainId: number): Eip3770Address;
