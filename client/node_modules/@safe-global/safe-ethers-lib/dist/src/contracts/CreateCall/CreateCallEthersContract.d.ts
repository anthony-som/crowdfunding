import { CreateCallContract } from '@safe-global/safe-core-sdk-types';
import { Create_call as CreateCall_V1_3_0, Create_callInterface as CreateCallContractInterface } from '../../../typechain/src/ethers-v5/v1.3.0/Create_call';
import { EthersTransactionOptions, EthersTransactionResult } from '../../types';
declare abstract class CreateCallEthersContract implements CreateCallContract {
    contract: CreateCall_V1_3_0;
    constructor(contract: CreateCall_V1_3_0);
    getAddress(): string;
    performCreate2(value: string, deploymentData: string, salt: string, options?: EthersTransactionOptions): Promise<EthersTransactionResult>;
    performCreate(value: string, deploymentData: string, options?: EthersTransactionOptions): Promise<EthersTransactionResult>;
    encode: CreateCallContractInterface['encodeFunctionData'];
    estimateGas(methodName: string, params: any[], options: EthersTransactionOptions): Promise<number>;
}
export default CreateCallEthersContract;
