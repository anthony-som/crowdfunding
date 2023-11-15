"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTypedData = exports.getEip712MessageTypes = exports.EIP712_DOMAIN = exports.EIP712_DOMAIN_BEFORE_V130 = void 0;
const satisfies_1 = __importDefault(require("semver/functions/satisfies"));
const EQ_OR_GT_1_3_0 = '>=1.3.0';
exports.EIP712_DOMAIN_BEFORE_V130 = [
    {
        type: 'address',
        name: 'verifyingContract'
    }
];
exports.EIP712_DOMAIN = [
    {
        type: 'uint256',
        name: 'chainId'
    },
    {
        type: 'address',
        name: 'verifyingContract'
    }
];
// This function returns the types structure for signing off-chain messages according to EIP-712
function getEip712MessageTypes(safeVersion) {
    const eip712WithChainId = (0, satisfies_1.default)(safeVersion, EQ_OR_GT_1_3_0);
    return {
        EIP712Domain: eip712WithChainId ? exports.EIP712_DOMAIN : exports.EIP712_DOMAIN_BEFORE_V130,
        SafeTx: [
            { type: 'address', name: 'to' },
            { type: 'uint256', name: 'value' },
            { type: 'bytes', name: 'data' },
            { type: 'uint8', name: 'operation' },
            { type: 'uint256', name: 'safeTxGas' },
            { type: 'uint256', name: 'baseGas' },
            { type: 'uint256', name: 'gasPrice' },
            { type: 'address', name: 'gasToken' },
            { type: 'address', name: 'refundReceiver' },
            { type: 'uint256', name: 'nonce' }
        ]
    };
}
exports.getEip712MessageTypes = getEip712MessageTypes;
function generateTypedData({ safeAddress, safeVersion, chainId, safeTransactionData }) {
    const eip712WithChainId = (0, satisfies_1.default)(safeVersion, EQ_OR_GT_1_3_0);
    const typedData = {
        types: getEip712MessageTypes(safeVersion),
        domain: {
            verifyingContract: safeAddress
        },
        primaryType: 'SafeTx',
        message: {
            ...safeTransactionData,
            value: safeTransactionData.value,
            safeTxGas: safeTransactionData.safeTxGas,
            baseGas: safeTransactionData.baseGas,
            gasPrice: safeTransactionData.gasPrice,
            nonce: safeTransactionData.nonce
        }
    };
    if (eip712WithChainId) {
        typedData.domain.chainId = chainId;
    }
    return typedData;
}
exports.generateTypedData = generateTypedData;
//# sourceMappingURL=index.js.map