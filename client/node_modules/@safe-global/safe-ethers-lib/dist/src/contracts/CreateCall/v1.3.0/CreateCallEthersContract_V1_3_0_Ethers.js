"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCallEthersContract_1 = __importDefault(require("../CreateCallEthersContract"));
class CreateCallContract_V1_3_0_Ethers extends CreateCallEthersContract_1.default {
    constructor(contract) {
        super(contract);
        this.contract = contract;
    }
}
exports.default = CreateCallContract_V1_3_0_Ethers;
//# sourceMappingURL=CreateCallEthersContract_V1_3_0_Ethers.js.map