"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeMultiSendData = exports.standardizeSafeTransactionData = exports.standardizeMetaTransactionData = void 0;
const bytes_1 = require("@ethersproject/bytes");
const solidity_1 = require("@ethersproject/solidity");
const safe_core_sdk_types_1 = require("@safe-global/safe-core-sdk-types");
const safe_core_sdk_utils_1 = require("@safe-global/safe-core-sdk-utils");
const constants_1 = require("../constants");
const gas_1 = require("./gas");
function standardizeMetaTransactionData(tx) {
    var _a;
    const standardizedTxs = {
        ...tx,
        operation: (_a = tx.operation) !== null && _a !== void 0 ? _a : safe_core_sdk_types_1.OperationType.Call
    };
    return standardizedTxs;
}
exports.standardizeMetaTransactionData = standardizeMetaTransactionData;
async function standardizeSafeTransactionData(safeContract, ethAdapter, tx) {
    var _a, _b, _c, _d;
    const standardizedTxs = {
        to: tx.to,
        value: tx.value,
        data: tx.data,
        operation: (_a = tx.operation) !== null && _a !== void 0 ? _a : safe_core_sdk_types_1.OperationType.Call,
        baseGas: (_b = tx.baseGas) !== null && _b !== void 0 ? _b : 0,
        gasPrice: (_c = tx.gasPrice) !== null && _c !== void 0 ? _c : 0,
        gasToken: tx.gasToken || constants_1.ZERO_ADDRESS,
        refundReceiver: tx.refundReceiver || constants_1.ZERO_ADDRESS,
        nonce: (_d = tx.nonce) !== null && _d !== void 0 ? _d : (await safeContract.getNonce())
    };
    let safeTxGas;
    if (typeof tx.safeTxGas !== 'undefined') {
        return {
            ...standardizedTxs,
            safeTxGas: tx.safeTxGas
        };
    }
    const safeVersion = await safeContract.getVersion();
    if ((0, safe_core_sdk_utils_1.hasSafeFeature)(safe_core_sdk_utils_1.SAFE_FEATURES.SAFE_TX_GAS_OPTIONAL, safeVersion) &&
        standardizedTxs.gasPrice === 0) {
        safeTxGas = 0;
    }
    else {
        safeTxGas = await (0, gas_1.estimateTxGas)(safeContract, ethAdapter, standardizedTxs.to, standardizedTxs.value, standardizedTxs.data, standardizedTxs.operation);
    }
    return {
        ...standardizedTxs,
        safeTxGas
    };
}
exports.standardizeSafeTransactionData = standardizeSafeTransactionData;
function encodeMetaTransaction(tx) {
    const data = (0, bytes_1.arrayify)(tx.data);
    const encoded = (0, solidity_1.pack)(['uint8', 'address', 'uint256', 'uint256', 'bytes'], [tx.operation, tx.to, tx.value, data.length, data]);
    return encoded.slice(2);
}
function encodeMultiSendData(txs) {
    return '0x' + txs.map((tx) => encodeMetaTransaction(tx)).join('');
}
exports.encodeMultiSendData = encodeMultiSendData;
//# sourceMappingURL=utils.js.map