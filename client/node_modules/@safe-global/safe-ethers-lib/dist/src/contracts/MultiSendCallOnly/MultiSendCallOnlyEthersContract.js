"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultiSendCallOnlyEthersContract {
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
exports.default = MultiSendCallOnlyEthersContract;
//# sourceMappingURL=MultiSendCallOnlyEthersContract.js.map