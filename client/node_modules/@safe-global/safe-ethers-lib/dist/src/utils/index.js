"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTypedDataSigner = exports.toTxResult = exports.sameString = void 0;
function sameString(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
exports.sameString = sameString;
function toTxResult(transactionResponse, options) {
    return {
        hash: transactionResponse.hash,
        options,
        transactionResponse
    };
}
exports.toTxResult = toTxResult;
function isTypedDataSigner(signer) {
    return signer._signTypedData !== undefined;
}
exports.isTypedDataSigner = isTypedDataSigner;
//# sourceMappingURL=index.js.map