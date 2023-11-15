import { SingletonDeployment } from '@safe-global/safe-deployments';
import { CompatibilityFallbackHandlerContract, CreateCallContract, EthAdapter, GnosisSafeContract, GnosisSafeProxyFactoryContract, MultiSendCallOnlyContract, MultiSendContract, SafeVersion, SignMessageLibContract } from '@safe-global/safe-core-sdk-types';
import { ContractNetworkConfig } from '../types';
interface GetContractInstanceProps {
    ethAdapter: EthAdapter;
    safeVersion: SafeVersion;
    chainId: number;
    customContracts?: ContractNetworkConfig;
}
interface GetSafeContractInstanceProps extends GetContractInstanceProps {
    isL1SafeMasterCopy?: boolean;
    customSafeAddress?: string;
}
export declare function getSafeContractDeployment(safeVersion: SafeVersion, chainId: number, isL1SafeMasterCopy?: boolean): SingletonDeployment | undefined;
export declare function getCompatibilityFallbackHandlerContractDeployment(safeVersion: SafeVersion, chainId: number): SingletonDeployment | undefined;
export declare function getMultiSendCallOnlyContractDeployment(safeVersion: SafeVersion, chainId: number): SingletonDeployment | undefined;
export declare function getMultiSendContractDeployment(safeVersion: SafeVersion, chainId: number): SingletonDeployment | undefined;
export declare function getSafeProxyFactoryContractDeployment(safeVersion: SafeVersion, chainId: number): SingletonDeployment | undefined;
export declare function getSignMessageLibContractDeployment(safeVersion: SafeVersion, chainId: number): SingletonDeployment | undefined;
export declare function getCreateCallContractDeployment(safeVersion: SafeVersion, chainId: number): SingletonDeployment | undefined;
export declare function getSafeContract({ ethAdapter, safeVersion, chainId, customSafeAddress, isL1SafeMasterCopy, customContracts }: GetSafeContractInstanceProps): Promise<GnosisSafeContract>;
export declare function getProxyFactoryContract({ ethAdapter, safeVersion, chainId, customContracts }: GetContractInstanceProps): Promise<GnosisSafeProxyFactoryContract>;
export declare function getCompatibilityFallbackHandlerContract({ ethAdapter, safeVersion, chainId, customContracts }: GetContractInstanceProps): Promise<CompatibilityFallbackHandlerContract>;
export declare function getMultiSendContract({ ethAdapter, safeVersion, chainId, customContracts }: GetContractInstanceProps): Promise<MultiSendContract>;
export declare function getMultiSendCallOnlyContract({ ethAdapter, safeVersion, chainId, customContracts }: GetContractInstanceProps): Promise<MultiSendCallOnlyContract>;
export declare function getSignMessageLibContract({ ethAdapter, safeVersion, chainId, customContracts }: GetContractInstanceProps): Promise<SignMessageLibContract>;
export declare function getCreateCallContract({ ethAdapter, safeVersion, chainId, customContracts }: GetContractInstanceProps): Promise<CreateCallContract>;
export {};
