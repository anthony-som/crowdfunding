import { EthAdapter, GnosisSafeContract } from '@safe-global/safe-core-sdk-types';
declare class GuardManager {
    #private;
    constructor(ethAdapter: EthAdapter, safeContract: GnosisSafeContract);
    private validateGuardAddress;
    private validateGuardIsNotEnabled;
    private validateGuardIsEnabled;
    getGuard(): Promise<string>;
    encodeEnableGuardData(guardAddress: string): Promise<string>;
    encodeDisableGuardData(): Promise<string>;
}
export default GuardManager;
