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
var _GuardManager_ethAdapter, _GuardManager_safeContract, _GuardManager_slot;
Object.defineProperty(exports, "__esModule", { value: true });
const safe_core_sdk_utils_1 = require("@safe-global/safe-core-sdk-utils");
const utils_1 = require("../utils");
const constants_1 = require("../utils/constants");
class GuardManager {
    constructor(ethAdapter, safeContract) {
        _GuardManager_ethAdapter.set(this, void 0);
        _GuardManager_safeContract.set(this, void 0);
        // keccak256("guard_manager.guard.address")
        _GuardManager_slot.set(this, '0x4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c8');
        __classPrivateFieldSet(this, _GuardManager_ethAdapter, ethAdapter, "f");
        __classPrivateFieldSet(this, _GuardManager_safeContract, safeContract, "f");
    }
    validateGuardAddress(guardAddress) {
        const isValidAddress = __classPrivateFieldGet(this, _GuardManager_ethAdapter, "f").isAddress(guardAddress);
        if (!isValidAddress || (0, utils_1.isZeroAddress)(guardAddress)) {
            throw new Error('Invalid guard address provided');
        }
    }
    validateGuardIsNotEnabled(currentGuard, newGuardAddress) {
        if ((0, utils_1.sameString)(currentGuard, newGuardAddress)) {
            throw new Error('Guard provided is already enabled');
        }
    }
    validateGuardIsEnabled(guardAddress) {
        if ((0, utils_1.isZeroAddress)(guardAddress)) {
            throw new Error('There is no guard enabled yet');
        }
    }
    async getGuard() {
        const safeVersion = await __classPrivateFieldGet(this, _GuardManager_safeContract, "f").getVersion();
        if ((0, safe_core_sdk_utils_1.hasSafeFeature)(safe_core_sdk_utils_1.SAFE_FEATURES.SAFE_TX_GUARDS, safeVersion)) {
            return __classPrivateFieldGet(this, _GuardManager_ethAdapter, "f").getStorageAt(__classPrivateFieldGet(this, _GuardManager_safeContract, "f").getAddress(), __classPrivateFieldGet(this, _GuardManager_slot, "f"));
        }
        else {
            throw new Error('Current version of the Safe does not support Safe transaction guards functionality');
        }
    }
    async encodeEnableGuardData(guardAddress) {
        this.validateGuardAddress(guardAddress);
        const currentGuard = await this.getGuard();
        this.validateGuardIsNotEnabled(currentGuard, guardAddress);
        return __classPrivateFieldGet(this, _GuardManager_safeContract, "f").encode('setGuard', [guardAddress]);
    }
    async encodeDisableGuardData() {
        const currentGuard = await this.getGuard();
        this.validateGuardIsEnabled(currentGuard);
        return __classPrivateFieldGet(this, _GuardManager_safeContract, "f").encode('setGuard', [constants_1.ZERO_ADDRESS]);
    }
}
_GuardManager_ethAdapter = new WeakMap(), _GuardManager_safeContract = new WeakMap(), _GuardManager_slot = new WeakMap();
exports.default = GuardManager;
//# sourceMappingURL=guardManager.js.map