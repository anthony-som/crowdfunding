import { MultiSendContract } from '@safe-global/safe-core-sdk-types';
import { Multi_send as MultiSend_V1_1_1 } from '../../../typechain/src/ethers-v5/v1.1.1/Multi_send';
import { Multi_send as MultiSend_V1_3_0, Multi_sendInterface as MultiSendInterface } from '../../../typechain/src/ethers-v5/v1.3.0/Multi_send';
declare abstract class MultiSendEthersContract implements MultiSendContract {
    contract: MultiSend_V1_3_0 | MultiSend_V1_1_1;
    constructor(contract: MultiSend_V1_3_0 | MultiSend_V1_1_1);
    getAddress(): string;
    encode: MultiSendInterface['encodeFunctionData'];
}
export default MultiSendEthersContract;
