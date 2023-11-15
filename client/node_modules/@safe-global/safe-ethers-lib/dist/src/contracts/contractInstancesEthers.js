"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCreateCallContractInstance = exports.getSignMessageLibContractInstance = exports.getSafeProxyFactoryContractInstance = exports.getMultiSendCallOnlyContractInstance = exports.getMultiSendContractInstance = exports.getCompatibilityFallbackHandlerContractInstance = exports.getSafeContractInstance = void 0;
const Gnosis_safe__factory_1 = require("../../typechain/src/ethers-v5/v1.0.0/factories/Gnosis_safe__factory");
const Proxy_factory__factory_1 = require("../../typechain/src/ethers-v5/v1.0.0/factories/Proxy_factory__factory");
const Gnosis_safe__factory_2 = require("../../typechain/src/ethers-v5/v1.1.1/factories/Gnosis_safe__factory");
const Multi_send__factory_1 = require("../../typechain/src/ethers-v5/v1.1.1/factories/Multi_send__factory");
const Proxy_factory__factory_2 = require("../../typechain/src/ethers-v5/v1.1.1/factories/Proxy_factory__factory");
const Gnosis_safe__factory_3 = require("../../typechain/src/ethers-v5/v1.2.0/factories/Gnosis_safe__factory");
const Compatibility_fallback_handler__factory_1 = require("../../typechain/src/ethers-v5/v1.3.0/factories/Compatibility_fallback_handler__factory");
const Gnosis_safe__factory_4 = require("../../typechain/src/ethers-v5/v1.3.0/factories/Gnosis_safe__factory");
const Multi_send_call_only__factory_1 = require("../../typechain/src/ethers-v5/v1.3.0/factories/Multi_send_call_only__factory");
const Multi_send__factory_2 = require("../../typechain/src/ethers-v5/v1.3.0/factories/Multi_send__factory");
const Proxy_factory__factory_3 = require("../../typechain/src/ethers-v5/v1.3.0/factories/Proxy_factory__factory");
const Sign_message_lib__factory_1 = require("../../typechain/src/ethers-v5/v1.3.0/factories/Sign_message_lib__factory");
const Create_call__factory_1 = require("./../../typechain/src/ethers-v5/v1.3.0/factories/Create_call__factory");
const CompatibilityFallbackHandler_V1_3_0_Ethers_1 = __importDefault(require("./CompatibilityFallbackHandler/v1.3.0/CompatibilityFallbackHandler_V1_3_0_Ethers"));
const CreateCallEthersContract_V1_3_0_Ethers_1 = __importDefault(require("./CreateCall/v1.3.0/CreateCallEthersContract_V1_3_0_Ethers"));
const GnosisSafeContract_V1_0_0_Ethers_1 = __importDefault(require("./GnosisSafe/v1.0.0/GnosisSafeContract_V1_0_0_Ethers"));
const GnosisSafeContract_V1_1_1_Ethers_1 = __importDefault(require("./GnosisSafe/v1.1.1/GnosisSafeContract_V1_1_1_Ethers"));
const GnosisSafeContract_V1_2_0_Ethers_1 = __importDefault(require("./GnosisSafe/v1.2.0/GnosisSafeContract_V1_2_0_Ethers"));
const GnosisSafeContract_V1_3_0_Ethers_1 = __importDefault(require("./GnosisSafe/v1.3.0/GnosisSafeContract_V1_3_0_Ethers"));
const GnosisSafeProxyFactoryContract_V1_0_0_Ethers_1 = __importDefault(require("./GnosisSafeProxyFactory/v1.0.0/GnosisSafeProxyFactoryContract_V1_0_0_Ethers"));
const GnosisSafeProxyFactoryContract_V1_1_1_Ethers_1 = __importDefault(require("./GnosisSafeProxyFactory/v1.1.1/GnosisSafeProxyFactoryContract_V1_1_1_Ethers"));
const GnosisSafeProxyFactoryContract_V1_3_0_Ethers_1 = __importDefault(require("./GnosisSafeProxyFactory/v1.3.0/GnosisSafeProxyFactoryContract_V1_3_0_Ethers"));
const MultiSendContract_V1_1_1_Ethers_1 = __importDefault(require("./MultiSend/v1.1.1/MultiSendContract_V1_1_1_Ethers"));
const MultiSendContract_V1_3_0_Ethers_1 = __importDefault(require("./MultiSend/v1.3.0/MultiSendContract_V1_3_0_Ethers"));
const MultiSendCallOnlyContract_V1_3_0_Ethers_1 = __importDefault(require("./MultiSendCallOnly/v1.3.0/MultiSendCallOnlyContract_V1_3_0_Ethers"));
const SignMessageLibContract_V1_3_0_Ethers_1 = __importDefault(require("./SignMessageLib/v1.3.0/SignMessageLibContract_V1_3_0_Ethers"));
function getSafeContractInstance(safeVersion, contractAddress, signerOrProvider) {
    let safeContract;
    switch (safeVersion) {
        case '1.3.0':
            safeContract = Gnosis_safe__factory_4.Gnosis_safe__factory.connect(contractAddress, signerOrProvider);
            return new GnosisSafeContract_V1_3_0_Ethers_1.default(safeContract);
        case '1.2.0':
            safeContract = Gnosis_safe__factory_3.Gnosis_safe__factory.connect(contractAddress, signerOrProvider);
            return new GnosisSafeContract_V1_2_0_Ethers_1.default(safeContract);
        case '1.1.1':
            safeContract = Gnosis_safe__factory_2.Gnosis_safe__factory.connect(contractAddress, signerOrProvider);
            return new GnosisSafeContract_V1_1_1_Ethers_1.default(safeContract);
        case '1.0.0':
            safeContract = Gnosis_safe__factory_1.Gnosis_safe__factory.connect(contractAddress, signerOrProvider);
            return new GnosisSafeContract_V1_0_0_Ethers_1.default(safeContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getSafeContractInstance = getSafeContractInstance;
function getCompatibilityFallbackHandlerContractInstance(safeVersion, contractAddress, signerOrProvider) {
    let compatibilityFallbackHandlerContract;
    switch (safeVersion) {
        case '1.3.0':
        case '1.2.0':
        case '1.1.1':
            compatibilityFallbackHandlerContract = Compatibility_fallback_handler__factory_1.Compatibility_fallback_handler__factory.connect(contractAddress, signerOrProvider);
            return new CompatibilityFallbackHandler_V1_3_0_Ethers_1.default(compatibilityFallbackHandlerContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getCompatibilityFallbackHandlerContractInstance = getCompatibilityFallbackHandlerContractInstance;
function getMultiSendContractInstance(safeVersion, contractAddress, signerOrProvider) {
    let multiSendContract;
    switch (safeVersion) {
        case '1.3.0':
            multiSendContract = Multi_send__factory_2.Multi_send__factory.connect(contractAddress, signerOrProvider);
            return new MultiSendContract_V1_3_0_Ethers_1.default(multiSendContract);
        case '1.2.0':
        case '1.1.1':
        case '1.0.0':
            multiSendContract = Multi_send__factory_1.Multi_send__factory.connect(contractAddress, signerOrProvider);
            return new MultiSendContract_V1_1_1_Ethers_1.default(multiSendContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getMultiSendContractInstance = getMultiSendContractInstance;
function getMultiSendCallOnlyContractInstance(safeVersion, contractAddress, signerOrProvider) {
    let multiSendCallOnlyContract;
    switch (safeVersion) {
        case '1.3.0':
        case '1.2.0':
        case '1.1.1':
        case '1.0.0':
            multiSendCallOnlyContract = Multi_send_call_only__factory_1.Multi_send_call_only__factory.connect(contractAddress, signerOrProvider);
            return new MultiSendCallOnlyContract_V1_3_0_Ethers_1.default(multiSendCallOnlyContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getMultiSendCallOnlyContractInstance = getMultiSendCallOnlyContractInstance;
function getSafeProxyFactoryContractInstance(safeVersion, contractAddress, signerOrProvider) {
    let gnosisSafeProxyFactoryContract;
    switch (safeVersion) {
        case '1.3.0':
            gnosisSafeProxyFactoryContract = Proxy_factory__factory_3.Proxy_factory__factory.connect(contractAddress, signerOrProvider);
            return new GnosisSafeProxyFactoryContract_V1_3_0_Ethers_1.default(gnosisSafeProxyFactoryContract);
        case '1.2.0':
        case '1.1.1':
            gnosisSafeProxyFactoryContract = Proxy_factory__factory_2.Proxy_factory__factory.connect(contractAddress, signerOrProvider);
            return new GnosisSafeProxyFactoryContract_V1_1_1_Ethers_1.default(gnosisSafeProxyFactoryContract);
        case '1.0.0':
            gnosisSafeProxyFactoryContract = Proxy_factory__factory_1.Proxy_factory__factory.connect(contractAddress, signerOrProvider);
            return new GnosisSafeProxyFactoryContract_V1_0_0_Ethers_1.default(gnosisSafeProxyFactoryContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getSafeProxyFactoryContractInstance = getSafeProxyFactoryContractInstance;
function getSignMessageLibContractInstance(safeVersion, contractAddress, signerOrProvider) {
    let signMessageLibContract;
    switch (safeVersion) {
        case '1.3.0':
            signMessageLibContract = Sign_message_lib__factory_1.Sign_message_lib__factory.connect(contractAddress, signerOrProvider);
            return new SignMessageLibContract_V1_3_0_Ethers_1.default(signMessageLibContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getSignMessageLibContractInstance = getSignMessageLibContractInstance;
function getCreateCallContractInstance(safeVersion, contractAddress, signerOrProvider) {
    let createCallContract;
    switch (safeVersion) {
        case '1.3.0':
        case '1.2.0':
        case '1.1.1':
        case '1.0.0':
            createCallContract = Create_call__factory_1.Create_call__factory.connect(contractAddress, signerOrProvider);
            return new CreateCallEthersContract_V1_3_0_Ethers_1.default(createCallContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getCreateCallContractInstance = getCreateCallContractInstance;
//# sourceMappingURL=contractInstancesEthers.js.map