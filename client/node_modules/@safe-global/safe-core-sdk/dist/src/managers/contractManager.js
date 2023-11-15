"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ContractManager_contractNetworks, _ContractManager_isL1SafeMasterCopy, _ContractManager_safeContract, _ContractManager_multiSendContract, _ContractManager_multiSendCallOnlyContract;
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../contracts/config");
const safeDeploymentContracts_1 = require("../contracts/safeDeploymentContracts");
class ContractManager {
    constructor() {
        _ContractManager_contractNetworks.set(this, void 0);
        _ContractManager_isL1SafeMasterCopy.set(this, void 0);
        _ContractManager_safeContract.set(this, void 0);
        _ContractManager_multiSendContract.set(this, void 0);
        _ContractManager_multiSendCallOnlyContract.set(this, void 0);
    }
    static async create({ ethAdapter, safeAddress, isL1SafeMasterCopy, contractNetworks }) {
        const contractManager = new ContractManager();
        await contractManager.init({ ethAdapter, safeAddress, isL1SafeMasterCopy, contractNetworks });
        return contractManager;
    }
    async init({ ethAdapter, safeAddress, isL1SafeMasterCopy, contractNetworks }) {
        const chainId = await ethAdapter.getChainId();
        const customContracts = contractNetworks === null || contractNetworks === void 0 ? void 0 : contractNetworks[chainId];
        __classPrivateFieldSet(this, _ContractManager_contractNetworks, contractNetworks, "f");
        __classPrivateFieldSet(this, _ContractManager_isL1SafeMasterCopy, isL1SafeMasterCopy, "f");
        const temporarySafeContract = await (0, safeDeploymentContracts_1.getSafeContract)({
            ethAdapter,
            safeVersion: config_1.SAFE_LAST_VERSION,
            chainId,
            isL1SafeMasterCopy,
            customSafeAddress: safeAddress,
            customContracts
        });
        const safeVersion = await temporarySafeContract.getVersion();
        __classPrivateFieldSet(this, _ContractManager_safeContract, await (0, safeDeploymentContracts_1.getSafeContract)({
            ethAdapter,
            safeVersion,
            chainId,
            isL1SafeMasterCopy,
            customSafeAddress: safeAddress,
            customContracts
        }), "f");
        __classPrivateFieldSet(this, _ContractManager_multiSendContract, await (0, safeDeploymentContracts_1.getMultiSendContract)({
            ethAdapter,
            safeVersion,
            chainId,
            customContracts
        }), "f");
        __classPrivateFieldSet(this, _ContractManager_multiSendCallOnlyContract, await (0, safeDeploymentContracts_1.getMultiSendCallOnlyContract)({
            ethAdapter,
            safeVersion,
            chainId,
            customContracts
        }), "f");
    }
    get contractNetworks() {
        return __classPrivateFieldGet(this, _ContractManager_contractNetworks, "f");
    }
    get isL1SafeMasterCopy() {
        return __classPrivateFieldGet(this, _ContractManager_isL1SafeMasterCopy, "f");
    }
    get safeContract() {
        return __classPrivateFieldGet(this, _ContractManager_safeContract, "f");
    }
    get multiSendContract() {
        return __classPrivateFieldGet(this, _ContractManager_multiSendContract, "f");
    }
    get multiSendCallOnlyContract() {
        return __classPrivateFieldGet(this, _ContractManager_multiSendCallOnlyContract, "f");
    }
}
_ContractManager_contractNetworks = new WeakMap(), _ContractManager_isL1SafeMasterCopy = new WeakMap(), _ContractManager_safeContract = new WeakMap(), _ContractManager_multiSendContract = new WeakMap(), _ContractManager_multiSendCallOnlyContract = new WeakMap();
exports.default = ContractManager;
//# sourceMappingURL=contractManager.js.map