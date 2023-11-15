"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCreateCallContract = exports.getSignMessageLibContract = exports.getMultiSendCallOnlyContract = exports.getMultiSendContract = exports.getCompatibilityFallbackHandlerContract = exports.getProxyFactoryContract = exports.getSafeContract = exports.getCreateCallContractDeployment = exports.getSignMessageLibContractDeployment = exports.getSafeProxyFactoryContractDeployment = exports.getMultiSendContractDeployment = exports.getMultiSendCallOnlyContractDeployment = exports.getCompatibilityFallbackHandlerContractDeployment = exports.getSafeContractDeployment = void 0;
const safe_deployments_1 = require("@safe-global/safe-deployments");
const config_1 = require("./config");
function getSafeContractDeployment(safeVersion, chainId, isL1SafeMasterCopy = false) {
    const version = config_1.safeDeploymentsVersions[safeVersion].safeMasterCopyVersion;
    const filters = { version, network: chainId.toString(), released: true };
    if (config_1.safeDeploymentsL1ChainIds.includes(chainId) || isL1SafeMasterCopy) {
        return (0, safe_deployments_1.getSafeSingletonDeployment)(filters);
    }
    return (0, safe_deployments_1.getSafeL2SingletonDeployment)(filters);
}
exports.getSafeContractDeployment = getSafeContractDeployment;
function getCompatibilityFallbackHandlerContractDeployment(safeVersion, chainId) {
    const version = config_1.safeDeploymentsVersions[safeVersion].compatibilityFallbackHandler;
    return (0, safe_deployments_1.getCompatibilityFallbackHandlerDeployment)({
        version,
        network: chainId.toString(),
        released: true
    });
}
exports.getCompatibilityFallbackHandlerContractDeployment = getCompatibilityFallbackHandlerContractDeployment;
function getMultiSendCallOnlyContractDeployment(safeVersion, chainId) {
    const version = config_1.safeDeploymentsVersions[safeVersion].multiSendCallOnlyVersion;
    return (0, safe_deployments_1.getMultiSendCallOnlyDeployment)({ version, network: chainId.toString(), released: true });
}
exports.getMultiSendCallOnlyContractDeployment = getMultiSendCallOnlyContractDeployment;
function getMultiSendContractDeployment(safeVersion, chainId) {
    const version = config_1.safeDeploymentsVersions[safeVersion].multiSendVersion;
    return (0, safe_deployments_1.getMultiSendDeployment)({ version, network: chainId.toString(), released: true });
}
exports.getMultiSendContractDeployment = getMultiSendContractDeployment;
function getSafeProxyFactoryContractDeployment(safeVersion, chainId) {
    const version = config_1.safeDeploymentsVersions[safeVersion].safeProxyFactoryVersion;
    return (0, safe_deployments_1.getProxyFactoryDeployment)({ version, network: chainId.toString(), released: true });
}
exports.getSafeProxyFactoryContractDeployment = getSafeProxyFactoryContractDeployment;
function getSignMessageLibContractDeployment(safeVersion, chainId) {
    const version = config_1.safeDeploymentsVersions[safeVersion].signMessageLibVersion;
    return (0, safe_deployments_1.getSignMessageLibDeployment)({ version, network: chainId.toString(), released: true });
}
exports.getSignMessageLibContractDeployment = getSignMessageLibContractDeployment;
function getCreateCallContractDeployment(safeVersion, chainId) {
    const version = config_1.safeDeploymentsVersions[safeVersion].createCallVersion;
    return (0, safe_deployments_1.getCreateCallDeployment)({ version, network: chainId.toString(), released: true });
}
exports.getCreateCallContractDeployment = getCreateCallContractDeployment;
async function getSafeContract({ ethAdapter, safeVersion, chainId, customSafeAddress, isL1SafeMasterCopy, customContracts }) {
    const singletonDeployment = getSafeContractDeployment(safeVersion, chainId, isL1SafeMasterCopy);
    const gnosisSafeContract = ethAdapter.getSafeContract({
        safeVersion,
        chainId,
        singletonDeployment,
        customContractAddress: customSafeAddress !== null && customSafeAddress !== void 0 ? customSafeAddress : customContracts === null || customContracts === void 0 ? void 0 : customContracts.safeMasterCopyAddress,
        customContractAbi: customContracts === null || customContracts === void 0 ? void 0 : customContracts.safeMasterCopyAbi
    });
    const isContractDeployed = await ethAdapter.isContractDeployed(gnosisSafeContract.getAddress());
    if (!isContractDeployed) {
        throw new Error('SafeProxy contract is not deployed on the current network');
    }
    return gnosisSafeContract;
}
exports.getSafeContract = getSafeContract;
async function getProxyFactoryContract({ ethAdapter, safeVersion, chainId, customContracts }) {
    const proxyFactoryDeployment = getSafeProxyFactoryContractDeployment(safeVersion, chainId);
    const safeProxyFactoryContract = await ethAdapter.getSafeProxyFactoryContract({
        safeVersion,
        chainId,
        singletonDeployment: proxyFactoryDeployment,
        customContractAddress: customContracts === null || customContracts === void 0 ? void 0 : customContracts.safeProxyFactoryAddress,
        customContractAbi: customContracts === null || customContracts === void 0 ? void 0 : customContracts.safeProxyFactoryAbi
    });
    const isContractDeployed = await ethAdapter.isContractDeployed(safeProxyFactoryContract.getAddress());
    if (!isContractDeployed) {
        throw new Error('SafeProxyFactory contract is not deployed on the current network');
    }
    return safeProxyFactoryContract;
}
exports.getProxyFactoryContract = getProxyFactoryContract;
async function getCompatibilityFallbackHandlerContract({ ethAdapter, safeVersion, chainId, customContracts }) {
    const fallbackHandlerDeployment = getCompatibilityFallbackHandlerContractDeployment(safeVersion, chainId);
    const fallbackHandlerContract = await ethAdapter.getCompatibilityFallbackHandlerContract({
        safeVersion,
        chainId,
        singletonDeployment: fallbackHandlerDeployment,
        customContractAddress: customContracts === null || customContracts === void 0 ? void 0 : customContracts.fallbackHandlerAddress,
        customContractAbi: customContracts === null || customContracts === void 0 ? void 0 : customContracts.fallbackHandlerAbi
    });
    const isContractDeployed = await ethAdapter.isContractDeployed(fallbackHandlerContract.getAddress());
    if (!isContractDeployed) {
        throw new Error('CompatibilityFallbackHandler contract is not deployed on the current network');
    }
    return fallbackHandlerContract;
}
exports.getCompatibilityFallbackHandlerContract = getCompatibilityFallbackHandlerContract;
async function getMultiSendContract({ ethAdapter, safeVersion, chainId, customContracts }) {
    const multiSendDeployment = getMultiSendContractDeployment(safeVersion, chainId);
    const multiSendContract = await ethAdapter.getMultiSendContract({
        safeVersion,
        chainId,
        singletonDeployment: multiSendDeployment,
        customContractAddress: customContracts === null || customContracts === void 0 ? void 0 : customContracts.multiSendAddress,
        customContractAbi: customContracts === null || customContracts === void 0 ? void 0 : customContracts.multiSendAbi
    });
    const isContractDeployed = await ethAdapter.isContractDeployed(multiSendContract.getAddress());
    if (!isContractDeployed) {
        throw new Error('MultiSend contract is not deployed on the current network');
    }
    return multiSendContract;
}
exports.getMultiSendContract = getMultiSendContract;
async function getMultiSendCallOnlyContract({ ethAdapter, safeVersion, chainId, customContracts }) {
    const multiSendCallOnlyDeployment = getMultiSendCallOnlyContractDeployment(safeVersion, chainId);
    const multiSendCallOnlyContract = await ethAdapter.getMultiSendCallOnlyContract({
        safeVersion,
        chainId,
        singletonDeployment: multiSendCallOnlyDeployment,
        customContractAddress: customContracts === null || customContracts === void 0 ? void 0 : customContracts.multiSendCallOnlyAddress,
        customContractAbi: customContracts === null || customContracts === void 0 ? void 0 : customContracts.multiSendCallOnlyAbi
    });
    const isContractDeployed = await ethAdapter.isContractDeployed(multiSendCallOnlyContract.getAddress());
    if (!isContractDeployed) {
        throw new Error('MultiSendCallOnly contract is not deployed on the current network');
    }
    return multiSendCallOnlyContract;
}
exports.getMultiSendCallOnlyContract = getMultiSendCallOnlyContract;
async function getSignMessageLibContract({ ethAdapter, safeVersion, chainId, customContracts }) {
    const signMessageLibDeployment = getSignMessageLibContractDeployment(safeVersion, chainId);
    const signMessageLibContract = await ethAdapter.getSignMessageLibContract({
        safeVersion,
        chainId,
        singletonDeployment: signMessageLibDeployment,
        customContractAddress: customContracts === null || customContracts === void 0 ? void 0 : customContracts.signMessageLibAddress,
        customContractAbi: customContracts === null || customContracts === void 0 ? void 0 : customContracts.signMessageLibAbi
    });
    const isContractDeployed = await ethAdapter.isContractDeployed(signMessageLibContract.getAddress());
    if (!isContractDeployed) {
        throw new Error('SignMessageLib contract is not deployed on the current network');
    }
    return signMessageLibContract;
}
exports.getSignMessageLibContract = getSignMessageLibContract;
async function getCreateCallContract({ ethAdapter, safeVersion, chainId, customContracts }) {
    const createCallDeployment = getCreateCallContractDeployment(safeVersion, chainId);
    const createCallContract = await ethAdapter.getCreateCallContract({
        safeVersion,
        chainId,
        singletonDeployment: createCallDeployment,
        customContractAddress: customContracts === null || customContracts === void 0 ? void 0 : customContracts.createCallAddress,
        customContractAbi: customContracts === null || customContracts === void 0 ? void 0 : customContracts.createCallAbi
    });
    const isContractDeployed = await ethAdapter.isContractDeployed(createCallContract.getAddress());
    if (!isContractDeployed) {
        throw new Error('CreateCall contract is not deployed on the current network');
    }
    return createCallContract;
}
exports.getCreateCallContract = getCreateCallContract;
//# sourceMappingURL=safeDeploymentContracts.js.map