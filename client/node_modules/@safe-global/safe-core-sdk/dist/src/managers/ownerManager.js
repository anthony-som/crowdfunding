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
var _OwnerManager_ethAdapter, _OwnerManager_safeContract;
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const constants_1 = require("../utils/constants");
class OwnerManager {
    constructor(ethAdapter, safeContract) {
        _OwnerManager_ethAdapter.set(this, void 0);
        _OwnerManager_safeContract.set(this, void 0);
        __classPrivateFieldSet(this, _OwnerManager_ethAdapter, ethAdapter, "f");
        __classPrivateFieldSet(this, _OwnerManager_safeContract, safeContract, "f");
    }
    validateOwnerAddress(ownerAddress, errorMessage) {
        const isValidAddress = __classPrivateFieldGet(this, _OwnerManager_ethAdapter, "f").isAddress(ownerAddress);
        if (!isValidAddress || (0, utils_1.isRestrictedAddress)(ownerAddress)) {
            throw new Error(errorMessage || 'Invalid owner address provided');
        }
    }
    validateThreshold(threshold, numOwners) {
        if (threshold <= 0) {
            throw new Error('Threshold needs to be greater than 0');
        }
        if (threshold > numOwners) {
            throw new Error('Threshold cannot exceed owner count');
        }
    }
    validateAddressIsNotOwner(ownerAddress, owners, errorMessage) {
        const ownerIndex = owners.findIndex((owner) => (0, utils_1.sameString)(owner, ownerAddress));
        const isOwner = ownerIndex >= 0;
        if (isOwner) {
            throw new Error(errorMessage || 'Address provided is already an owner');
        }
    }
    validateAddressIsOwner(ownerAddress, owners, errorMessage) {
        const ownerIndex = owners.findIndex((owner) => (0, utils_1.sameString)(owner, ownerAddress));
        const isOwner = ownerIndex >= 0;
        if (!isOwner) {
            throw new Error(errorMessage || 'Address provided is not an owner');
        }
        return ownerIndex;
    }
    async getOwners() {
        const owners = await __classPrivateFieldGet(this, _OwnerManager_safeContract, "f").getOwners();
        return [...owners];
    }
    async getThreshold() {
        return __classPrivateFieldGet(this, _OwnerManager_safeContract, "f").getThreshold();
    }
    async isOwner(ownerAddress) {
        return __classPrivateFieldGet(this, _OwnerManager_safeContract, "f").isOwner(ownerAddress);
    }
    async encodeAddOwnerWithThresholdData(ownerAddress, threshold) {
        this.validateOwnerAddress(ownerAddress);
        const owners = await this.getOwners();
        this.validateAddressIsNotOwner(ownerAddress, owners);
        const newThreshold = threshold !== null && threshold !== void 0 ? threshold : (await this.getThreshold());
        this.validateThreshold(newThreshold, owners.length + 1);
        return __classPrivateFieldGet(this, _OwnerManager_safeContract, "f").encode('addOwnerWithThreshold', [ownerAddress, newThreshold]);
    }
    async encodeRemoveOwnerData(ownerAddress, threshold) {
        this.validateOwnerAddress(ownerAddress);
        const owners = await this.getOwners();
        const ownerIndex = this.validateAddressIsOwner(ownerAddress, owners);
        const newThreshold = threshold !== null && threshold !== void 0 ? threshold : (await this.getThreshold()) - 1;
        this.validateThreshold(newThreshold, owners.length - 1);
        const prevOwnerAddress = ownerIndex === 0 ? constants_1.SENTINEL_ADDRESS : owners[ownerIndex - 1];
        return __classPrivateFieldGet(this, _OwnerManager_safeContract, "f").encode('removeOwner', [prevOwnerAddress, ownerAddress, newThreshold]);
    }
    async encodeSwapOwnerData(oldOwnerAddress, newOwnerAddress) {
        this.validateOwnerAddress(newOwnerAddress, 'Invalid new owner address provided');
        this.validateOwnerAddress(oldOwnerAddress, 'Invalid old owner address provided');
        const owners = await this.getOwners();
        this.validateAddressIsNotOwner(newOwnerAddress, owners, 'New address provided is already an owner');
        const oldOwnerIndex = this.validateAddressIsOwner(oldOwnerAddress, owners, 'Old address provided is not an owner');
        const prevOwnerAddress = oldOwnerIndex === 0 ? constants_1.SENTINEL_ADDRESS : owners[oldOwnerIndex - 1];
        return __classPrivateFieldGet(this, _OwnerManager_safeContract, "f").encode('swapOwner', [
            prevOwnerAddress,
            oldOwnerAddress,
            newOwnerAddress
        ]);
    }
    async encodeChangeThresholdData(threshold) {
        const owners = await this.getOwners();
        this.validateThreshold(threshold, owners.length);
        return __classPrivateFieldGet(this, _OwnerManager_safeContract, "f").encode('changeThreshold', [threshold]);
    }
}
_OwnerManager_ethAdapter = new WeakMap(), _OwnerManager_safeContract = new WeakMap();
exports.default = OwnerManager;
//# sourceMappingURL=ownerManager.js.map