import { SafeSetupConfig } from '@safe-global/safe-core-sdk-types';
import { EthersTransactionOptions, EthersTransactionResult } from '../../../types';
import { Gnosis_safe as GnosisSafe } from '../../../../typechain/src/ethers-v5/v1.1.1/Gnosis_safe';
import GnosisSafeContractEthers from '../GnosisSafeContractEthers';
declare class GnosisSafeContract_V1_1_1_Ethers extends GnosisSafeContractEthers {
    contract: GnosisSafe;
    constructor(contract: GnosisSafe);
    setup(setupConfig: SafeSetupConfig, options?: EthersTransactionOptions): Promise<EthersTransactionResult>;
    getModules(): Promise<string[]>;
    isModuleEnabled(moduleAddress: string): Promise<boolean>;
}
export default GnosisSafeContract_V1_1_1_Ethers;
