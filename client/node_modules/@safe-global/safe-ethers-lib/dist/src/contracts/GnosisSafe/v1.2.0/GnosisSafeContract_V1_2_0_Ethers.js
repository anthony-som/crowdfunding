"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
const constants_1 = require("../../../utils/constants");
const GnosisSafeContractEthers_1 = __importDefault(require("../GnosisSafeContractEthers"));
class GnosisSafeContract_V1_2_0_Ethers extends GnosisSafeContractEthers_1.default {
    constructor(contract) {
        super(contract);
        this.contract = contract;
    }
    async setup(setupConfig, options) {
        const { owners, threshold, to = constants_1.ZERO_ADDRESS, data = constants_1.EMPTY_DATA, fallbackHandler = constants_1.ZERO_ADDRESS, paymentToken = constants_1.ZERO_ADDRESS, payment = 0, paymentReceiver = constants_1.ZERO_ADDRESS } = setupConfig;
        if (options && !options.gasLimit) {
            options.gasLimit = await this.estimateGas('setup', [owners, threshold, to, data, fallbackHandler, paymentToken, payment, paymentReceiver], {
                ...options
            });
        }
        const txResponse = await this.contract.setup(owners, threshold, to, data, fallbackHandler, paymentToken, payment, paymentReceiver, options);
        return (0, utils_1.toTxResult)(txResponse, options);
    }
    async getModules() {
        return this.contract.getModules();
    }
    async isModuleEnabled(moduleAddress) {
        return this.contract.isModuleEnabled(moduleAddress);
    }
}
exports.default = GnosisSafeContract_V1_2_0_Ethers;
//# sourceMappingURL=GnosisSafeContract_V1_2_0_Ethers.js.map