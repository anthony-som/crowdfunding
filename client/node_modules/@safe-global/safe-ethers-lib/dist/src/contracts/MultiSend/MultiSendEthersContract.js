"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultiSendEthersContract {
    constructor(contract) {
        this.contract = contract;
        this.encode = (methodName, params) => {
            return this.contract.interface.encodeFunctionData(methodName, params);
        };
    }
    getAddress() {
        return this.contract.address;
    }
}
exports.default = MultiSendEthersContract;
//# sourceMappingURL=MultiSendEthersContract.js.map