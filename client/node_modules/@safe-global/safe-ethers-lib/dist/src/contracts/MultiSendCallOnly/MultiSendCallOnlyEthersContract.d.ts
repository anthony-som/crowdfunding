import { MultiSendCallOnlyContract } from '@safe-global/safe-core-sdk-types';
import { Multi_send_call_only as MultiSendCallOnly_V1_3_0, Multi_send_call_onlyInterface as MultiSendCallOnlyInterface } from '../../../typechain/src/ethers-v5/v1.3.0/Multi_send_call_only';
declare abstract class MultiSendCallOnlyEthersContract implements MultiSendCallOnlyContract {
    contract: MultiSendCallOnly_V1_3_0;
    constructor(contract: MultiSendCallOnly_V1_3_0);
    getAddress(): string;
    encode: MultiSendCallOnlyInterface['encodeFunctionData'];
}
export default MultiSendCallOnlyEthersContract;
