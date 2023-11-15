import { Multi_send as MultiSend } from '../../../../typechain/src/ethers-v5/v1.1.1/Multi_send';
import MultiSendEthersContract from '../MultiSendEthersContract';
declare class MultiSendContract_V1_1_1_Ethers extends MultiSendEthersContract {
    contract: MultiSend;
    constructor(contract: MultiSend);
}
export default MultiSendContract_V1_1_1_Ethers;
