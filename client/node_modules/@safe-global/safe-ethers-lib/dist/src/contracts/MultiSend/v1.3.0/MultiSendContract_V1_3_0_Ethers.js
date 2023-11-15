"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MultiSendEthersContract_1 = __importDefault(require("../MultiSendEthersContract"));
class MultiSendContract_V1_3_0_Ethers extends MultiSendEthersContract_1.default {
    constructor(contract) {
        super(contract);
        this.contract = contract;
    }
}
exports.default = MultiSendContract_V1_3_0_Ethers;
//# sourceMappingURL=MultiSendContract_V1_3_0_Ethers.js.map