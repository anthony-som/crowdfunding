"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSafeMultisigTransactionResponse = exports.isMetaTransactionArray = exports.isRestrictedAddress = exports.isZeroAddress = exports.sameString = void 0;
const constants_1 = require("./constants");
function sameString(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
exports.sameString = sameString;
function isZeroAddress(address) {
    return sameString(address, constants_1.ZERO_ADDRESS);
}
exports.isZeroAddress = isZeroAddress;
function isSentinelAddress(address) {
    return sameString(address, constants_1.SENTINEL_ADDRESS);
}
function isRestrictedAddress(address) {
    return isZeroAddress(address) || isSentinelAddress(address);
}
exports.isRestrictedAddress = isRestrictedAddress;
function isMetaTransactionArray(safeTransactions) {
    return (safeTransactions === null || safeTransactions === void 0 ? void 0 : safeTransactions.length) !== undefined;
}
exports.isMetaTransactionArray = isMetaTransactionArray;
function isSafeMultisigTransactionResponse(safeTransaction) {
    return safeTransaction.isExecuted !== undefined;
}
exports.isSafeMultisigTransactionResponse = isSafeMultisigTransactionResponse;
//# sourceMappingURL=index.js.map