import { SafeVersion } from '@safe-global/safe-core-sdk-types';
export declare const SAFE_LAST_VERSION: SafeVersion;
export declare const SAFE_BASE_VERSION: SafeVersion;
type SafeDeploymentsVersions = {
    [version: string]: {
        safeMasterCopyVersion: string;
        safeMasterCopyL2Version?: string;
        safeProxyFactoryVersion: string;
        compatibilityFallbackHandler: string;
        multiSendVersion: string;
        multiSendCallOnlyVersion?: string;
        signMessageLibVersion?: string;
        createCallVersion?: string;
    };
};
export declare const safeDeploymentsVersions: SafeDeploymentsVersions;
export declare const safeDeploymentsL1ChainIds: number[];
export {};
