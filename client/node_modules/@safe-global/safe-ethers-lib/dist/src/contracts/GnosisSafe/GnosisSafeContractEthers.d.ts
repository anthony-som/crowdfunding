import { BigNumber } from '@ethersproject/bignumber';
import { GnosisSafeContract, SafeTransaction, SafeTransactionData, SafeVersion, SafeSetupConfig } from '@safe-global/safe-core-sdk-types';
import { Gnosis_safe as GnosisSafe_V1_0_0 } from '../../../typechain/src/ethers-v5/v1.0.0/Gnosis_safe';
import { Gnosis_safe as GnosisSafe_V1_1_1 } from '../../../typechain/src/ethers-v5/v1.1.1/Gnosis_safe';
import { Gnosis_safe as GnosisSafe_V1_2_0 } from '../../../typechain/src/ethers-v5/v1.2.0/Gnosis_safe';
import { Gnosis_safe as GnosisSafe_V1_3_0, Gnosis_safeInterface as GnosisSafeInterface } from '../../../typechain/src/ethers-v5/v1.3.0/Gnosis_safe';
import { EthersTransactionOptions, EthersTransactionResult } from '../../types';
declare abstract class GnosisSafeContractEthers implements GnosisSafeContract {
    contract: GnosisSafe_V1_3_0 | GnosisSafe_V1_2_0 | GnosisSafe_V1_1_1 | GnosisSafe_V1_0_0;
    constructor(contract: GnosisSafe_V1_3_0 | GnosisSafe_V1_2_0 | GnosisSafe_V1_1_1 | GnosisSafe_V1_0_0);
    abstract setup(setupConfig: SafeSetupConfig, options?: EthersTransactionOptions): Promise<EthersTransactionResult>;
    getVersion(): Promise<SafeVersion>;
    getAddress(): string;
    getNonce(): Promise<number>;
    getThreshold(): Promise<number>;
    getOwners(): Promise<string[]>;
    isOwner(address: string): Promise<boolean>;
    getTransactionHash(safeTransactionData: SafeTransactionData): Promise<string>;
    approvedHashes(ownerAddress: string, hash: string): Promise<BigNumber>;
    approveHash(hash: string, options?: EthersTransactionOptions): Promise<EthersTransactionResult>;
    abstract getModules(): Promise<string[]>;
    abstract isModuleEnabled(moduleAddress: string): Promise<boolean>;
    isValidTransaction(safeTransaction: SafeTransaction, options?: EthersTransactionOptions): Promise<boolean>;
    execTransaction(safeTransaction: SafeTransaction, options?: EthersTransactionOptions): Promise<EthersTransactionResult>;
    encode: GnosisSafeInterface['encodeFunctionData'];
    estimateGas(methodName: string, params: any[], options: EthersTransactionOptions): Promise<number>;
}
export default GnosisSafeContractEthers;
