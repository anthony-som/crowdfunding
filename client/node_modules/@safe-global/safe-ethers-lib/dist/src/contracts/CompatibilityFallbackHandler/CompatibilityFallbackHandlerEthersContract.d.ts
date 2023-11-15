import { CompatibilityFallbackHandlerContract } from '@safe-global/safe-core-sdk-types';
import { Compatibility_fallback_handler as CompatibilityFallbackHandler_V1_3_0, Compatibility_fallback_handlerInterface as CompatibilityFallbackHandlerInterface } from '../../../typechain/src/ethers-v5/v1.3.0/Compatibility_fallback_handler';
declare abstract class CompatibilityFallbackHandlerEthersContract implements CompatibilityFallbackHandlerContract {
    contract: CompatibilityFallbackHandler_V1_3_0;
    constructor(contract: CompatibilityFallbackHandler_V1_3_0);
    getAddress(): string;
    encode: CompatibilityFallbackHandlerInterface['encodeFunctionData'];
}
export default CompatibilityFallbackHandlerEthersContract;
