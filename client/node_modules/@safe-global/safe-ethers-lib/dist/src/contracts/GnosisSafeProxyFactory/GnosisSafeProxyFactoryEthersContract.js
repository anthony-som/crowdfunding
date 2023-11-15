"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
class GnosisSafeProxyFactoryEthersContract {
    constructor(contract) {
        this.contract = contract;
    }
    getAddress() {
        return this.contract.address;
    }
    async proxyCreationCode() {
        return this.contract.proxyCreationCode();
    }
    async createProxy({ safeMasterCopyAddress, initializer, saltNonce, options, callback }) {
        if (bignumber_1.BigNumber.from(saltNonce).lt(0))
            throw new Error('saltNonce must be greater than or equal to 0');
        if (options && !options.gasLimit) {
            options.gasLimit = await this.estimateGas('createProxyWithNonce', [safeMasterCopyAddress, initializer, saltNonce], {
                ...options
            });
        }
        const proxyAddress = this.contract
            .createProxyWithNonce(safeMasterCopyAddress, initializer, saltNonce, options)
            .then(async (txResponse) => {
            var _a;
            if (callback) {
                callback(txResponse.hash);
            }
            const txReceipt = await txResponse.wait();
            const proxyCreationEvent = (_a = txReceipt === null || txReceipt === void 0 ? void 0 : txReceipt.events) === null || _a === void 0 ? void 0 : _a.find(({ event }) => event === 'ProxyCreation');
            if (!proxyCreationEvent || !proxyCreationEvent.args) {
                throw new Error('SafeProxy was not deployed correctly');
            }
            const proxyAddress = proxyCreationEvent.args[0];
            return proxyAddress;
        });
        return proxyAddress;
    }
    encode(methodName, params) {
        return this.contract.interface.encodeFunctionData(methodName, params);
    }
    async estimateGas(methodName, params, options) {
        return (await this.contract.estimateGas[methodName](...params, options)).toNumber();
    }
}
exports.default = GnosisSafeProxyFactoryEthersContract;
//# sourceMappingURL=GnosisSafeProxyFactoryEthersContract.js.map