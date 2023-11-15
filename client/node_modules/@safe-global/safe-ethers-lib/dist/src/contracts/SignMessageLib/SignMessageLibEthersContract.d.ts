import { SignMessageLibContract } from '@safe-global/safe-core-sdk-types';
import { Sign_message_lib as SignMessageLib_V1_3_0, Sign_message_libInterface as SignMessageLibContractInterface } from '../../../typechain/src/ethers-v5/v1.3.0/Sign_message_lib';
import { EthersTransactionOptions, EthersTransactionResult } from '../../types';
declare abstract class SignMessageLibEthersContract implements SignMessageLibContract {
    contract: SignMessageLib_V1_3_0;
    constructor(contract: SignMessageLib_V1_3_0);
    getAddress(): string;
    signMessage(data: string, options?: EthersTransactionOptions): Promise<EthersTransactionResult>;
    getMessageHash(message: string): Promise<string>;
    encode: SignMessageLibContractInterface['encodeFunctionData'];
    estimateGas(methodName: string, params: any[], options: EthersTransactionOptions): Promise<number>;
}
export default SignMessageLibEthersContract;
