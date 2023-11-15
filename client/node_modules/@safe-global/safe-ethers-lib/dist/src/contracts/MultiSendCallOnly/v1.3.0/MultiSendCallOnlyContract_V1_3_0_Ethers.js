"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MultiSendCallOnlyEthersContract_1 = __importDefault(require("../MultiSendCallOnlyEthersContract"));
class MultiSendCallOnlyContract_V1_3_0_Ethers extends MultiSendCallOnlyEthersContract_1.default {
    constructor(contract) {
        super(contract);
        this.contract = contract;
    }
}
exports.default = MultiSendCallOnlyContract_V1_3_0_Ethers;
//# sourceMappingURL=MultiSendCallOnlyContract_V1_3_0_Ethers.js.map