"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEip3770Address = exports.validateEthereumAddress = exports.validateEip3770NetworkPrefix = exports.isValidEip3770NetworkPrefix = exports.getEip3770NetworkPrefixFromChainId = exports.parseEip3770Address = void 0;
const web3_utils_1 = require("web3-utils");
const config_1 = require("./config");
function parseEip3770Address(fullAddress) {
    const parts = fullAddress.split(':');
    const address = parts.length > 1 ? parts[1] : parts[0];
    const prefix = parts.length > 1 ? parts[0] : '';
    return { prefix, address };
}
exports.parseEip3770Address = parseEip3770Address;
function getEip3770NetworkPrefixFromChainId(chainId) {
    const network = config_1.networks.find((network) => chainId === network.chainId);
    if (!network) {
        throw new Error('No network prefix supported for the current chainId');
    }
    return network.shortName;
}
exports.getEip3770NetworkPrefixFromChainId = getEip3770NetworkPrefixFromChainId;
function isValidEip3770NetworkPrefix(prefix) {
    return config_1.networks.some(({ shortName }) => shortName === prefix);
}
exports.isValidEip3770NetworkPrefix = isValidEip3770NetworkPrefix;
function validateEip3770NetworkPrefix(prefix, currentChainId) {
    const isCurrentNetworkPrefix = prefix === getEip3770NetworkPrefixFromChainId(currentChainId);
    if (!isValidEip3770NetworkPrefix(prefix) || !isCurrentNetworkPrefix) {
        throw new Error('The network prefix must match the current network');
    }
}
exports.validateEip3770NetworkPrefix = validateEip3770NetworkPrefix;
function validateEthereumAddress(address) {
    const isValidAddress = (0, web3_utils_1.isHexStrict)(address) && (0, web3_utils_1.isAddress)(address);
    if (!isValidAddress) {
        throw new Error(`Invalid Ethereum address ${address}`);
    }
}
exports.validateEthereumAddress = validateEthereumAddress;
function validateEip3770Address(fullAddress, currentChainId) {
    const { address, prefix } = parseEip3770Address(fullAddress);
    validateEthereumAddress(address);
    if (prefix) {
        validateEip3770NetworkPrefix(prefix, currentChainId);
    }
    return { address, prefix };
}
exports.validateEip3770Address = validateEip3770Address;
//# sourceMappingURL=index.js.map