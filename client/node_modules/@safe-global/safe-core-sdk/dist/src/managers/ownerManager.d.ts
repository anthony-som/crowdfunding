import { EthAdapter, GnosisSafeContract } from '@safe-global/safe-core-sdk-types';
declare class OwnerManager {
    #private;
    constructor(ethAdapter: EthAdapter, safeContract: GnosisSafeContract);
    private validateOwnerAddress;
    private validateThreshold;
    private validateAddressIsNotOwner;
    private validateAddressIsOwner;
    getOwners(): Promise<string[]>;
    getThreshold(): Promise<number>;
    isOwner(ownerAddress: string): Promise<boolean>;
    encodeAddOwnerWithThresholdData(ownerAddress: string, threshold?: number): Promise<string>;
    encodeRemoveOwnerData(ownerAddress: string, threshold?: number): Promise<string>;
    encodeSwapOwnerData(oldOwnerAddress: string, newOwnerAddress: string): Promise<string>;
    encodeChangeThresholdData(threshold: number): Promise<string>;
}
export default OwnerManager;
