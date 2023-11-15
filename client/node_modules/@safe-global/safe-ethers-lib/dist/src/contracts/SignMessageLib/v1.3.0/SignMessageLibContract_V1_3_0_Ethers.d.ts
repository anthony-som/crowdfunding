import { Sign_message_lib as SignMessageLib } from '../../../../typechain/src/ethers-v5/v1.3.0/Sign_message_lib';
import SignMessageLibEthersContract from '../SignMessageLibEthersContract';
declare class SignMessageLibContract_V1_3_0_Ethers extends SignMessageLibEthersContract {
    contract: SignMessageLib;
    constructor(contract: SignMessageLib);
}
export default SignMessageLibContract_V1_3_0_Ethers;
