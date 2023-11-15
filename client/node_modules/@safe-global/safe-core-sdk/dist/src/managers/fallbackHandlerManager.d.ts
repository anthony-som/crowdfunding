import { EthAdapter, GnosisSafeContract } from '@safe-global/safe-core-sdk-types';
declare class FallbackHandlerManager {
    #private;
    constructor(ethAdapter: EthAdapter, safeContract: GnosisSafeContract);
    private validateFallbackHandlerAddress;
    private validateFallbackHandlerIsNotEnabled;
    private validateFallbackHandlerIsEnabled;
    getFallbackHandler(): Promise<string>;
    encodeEnableFallbackHandlerData(fallbackHandlerAddress: string): Promise<string>;
    encodeDisableFallbackHandlerData(): Promise<string>;
}
export default FallbackHandlerManager;
