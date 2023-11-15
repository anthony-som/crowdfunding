import { Multi_send_call_only as MultiSendCallOnly } from '../../../../typechain/src/ethers-v5/v1.3.0/Multi_send_call_only';
import MultiSendCallOnlyEthersContract from '../MultiSendCallOnlyEthersContract';
declare class MultiSendCallOnlyContract_V1_3_0_Ethers extends MultiSendCallOnlyEthersContract {
    contract: MultiSendCallOnly;
    constructor(contract: MultiSendCallOnly);
}
export default MultiSendCallOnlyContract_V1_3_0_Ethers;
