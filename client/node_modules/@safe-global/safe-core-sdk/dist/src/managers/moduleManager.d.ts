import { EthAdapter, GnosisSafeContract } from '@safe-global/safe-core-sdk-types';
declare class ModuleManager {
    #private;
    constructor(ethAdapter: EthAdapter, safeContract: GnosisSafeContract);
    private validateModuleAddress;
    private validateModuleIsNotEnabled;
    private validateModuleIsEnabled;
    getModules(): Promise<string[]>;
    isModuleEnabled(moduleAddress: string): Promise<boolean>;
    encodeEnableModuleData(moduleAddress: string): Promise<string>;
    encodeDisableModuleData(moduleAddress: string): Promise<string>;
}
export default ModuleManager;
