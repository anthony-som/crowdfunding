import { Proxy_factory as ProxyFactory } from '../../../../typechain/src/ethers-v5/v1.3.0/Proxy_factory';
import GnosisSafeProxyFactoryEthersContract from '../GnosisSafeProxyFactoryEthersContract';
declare class GnosisSafeProxyFactoryContract_V1_3_0_Ethers extends GnosisSafeProxyFactoryEthersContract {
    contract: ProxyFactory;
    constructor(contract: ProxyFactory);
}
export default GnosisSafeProxyFactoryContract_V1_3_0_Ethers;
