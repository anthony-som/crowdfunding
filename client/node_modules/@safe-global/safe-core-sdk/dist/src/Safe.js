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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Safe_ethAdapter, _Safe_contractManager, _Safe_ownerManager, _Safe_moduleManager, _Safe_guardManager, _Safe_fallbackHandlerManager;
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const safe_core_sdk_types_1 = require("@safe-global/safe-core-sdk-types");
const safe_core_sdk_utils_1 = require("@safe-global/safe-core-sdk-utils");
const contractManager_1 = __importDefault(require("./managers/contractManager"));
const fallbackHandlerManager_1 = __importDefault(require("./managers/fallbackHandlerManager"));
const guardManager_1 = __importDefault(require("./managers/guardManager"));
const moduleManager_1 = __importDefault(require("./managers/moduleManager"));
const ownerManager_1 = __importDefault(require("./managers/ownerManager"));
const utils_1 = require("./utils");
const signatures_1 = require("./utils/signatures");
const SafeSignature_1 = __importDefault(require("./utils/signatures/SafeSignature"));
const SafeTransaction_1 = __importDefault(require("./utils/transactions/SafeTransaction"));
const utils_2 = require("./utils/transactions/utils");
class Safe {
    constructor() {
        _Safe_ethAdapter.set(this, void 0);
        _Safe_contractManager.set(this, void 0);
        _Safe_ownerManager.set(this, void 0);
        _Safe_moduleManager.set(this, void 0);
        _Safe_guardManager.set(this, void 0);
        _Safe_fallbackHandlerManager.set(this, void 0);
    }
    /**
     * Creates an instance of the Safe Core SDK.
     * @param config - Ethers Safe configuration
     * @returns The Safe Core SDK instance
     * @throws "SafeProxy contract is not deployed on the current network"
     * @throws "MultiSend contract is not deployed on the current network"
     * @throws "MultiSendCallOnly contract is not deployed on the current network"
     */
    static async create({ ethAdapter, safeAddress, isL1SafeMasterCopy, contractNetworks }) {
        const safeSdk = new Safe();
        await safeSdk.init({ ethAdapter, safeAddress, isL1SafeMasterCopy, contractNetworks });
        return safeSdk;
    }
    /**
     * Initializes the Safe Core SDK instance.
     * @param config - Safe configuration
     * @throws "Signer must be connected to a provider"
     * @throws "SafeProxy contract is not deployed on the current network"
     * @throws "MultiSend contract is not deployed on the current network"
     * @throws "MultiSendCallOnly contract is not deployed on the current network"
     */
    async init({ ethAdapter, safeAddress, isL1SafeMasterCopy, contractNetworks }) {
        __classPrivateFieldSet(this, _Safe_ethAdapter, ethAdapter, "f");
        __classPrivateFieldSet(this, _Safe_contractManager, await contractManager_1.default.create({
            ethAdapter: __classPrivateFieldGet(this, _Safe_ethAdapter, "f"),
            safeAddress,
            isL1SafeMasterCopy,
            contractNetworks
        }), "f");
        __classPrivateFieldSet(this, _Safe_ownerManager, new ownerManager_1.default(__classPrivateFieldGet(this, _Safe_ethAdapter, "f"), __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract), "f");
        __classPrivateFieldSet(this, _Safe_moduleManager, new moduleManager_1.default(__classPrivateFieldGet(this, _Safe_ethAdapter, "f"), __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract), "f");
        __classPrivateFieldSet(this, _Safe_guardManager, new guardManager_1.default(__classPrivateFieldGet(this, _Safe_ethAdapter, "f"), __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract), "f");
        __classPrivateFieldSet(this, _Safe_fallbackHandlerManager, new fallbackHandlerManager_1.default(__classPrivateFieldGet(this, _Safe_ethAdapter, "f"), __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract), "f");
    }
    /**
     * Returns a new instance of the Safe Core SDK.
     * @param config - Connect Safe configuration
     * @throws "SafeProxy contract is not deployed on the current network"
     * @throws "MultiSend contract is not deployed on the current network"
     * @throws "MultiSendCallOnly contract is not deployed on the current network"
     */
    async connect({ ethAdapter, safeAddress, isL1SafeMasterCopy, contractNetworks }) {
        return await Safe.create({
            ethAdapter: ethAdapter || __classPrivateFieldGet(this, _Safe_ethAdapter, "f"),
            safeAddress: safeAddress || this.getAddress(),
            isL1SafeMasterCopy: isL1SafeMasterCopy || __classPrivateFieldGet(this, _Safe_contractManager, "f").isL1SafeMasterCopy,
            contractNetworks: contractNetworks || __classPrivateFieldGet(this, _Safe_contractManager, "f").contractNetworks
        });
    }
    /**
     * Returns the address of the current SafeProxy contract.
     *
     * @returns The address of the SafeProxy contract
     */
    getAddress() {
        return __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract.getAddress();
    }
    /**
     * Returns the ContractManager
     *
     * @returns The current ContractManager
     * */
    getContractManager() {
        return __classPrivateFieldGet(this, _Safe_contractManager, "f");
    }
    /**
     * Returns the current EthAdapter.
     *
     * @returns The current EthAdapter
     */
    getEthAdapter() {
        return __classPrivateFieldGet(this, _Safe_ethAdapter, "f");
    }
    /**
     * Returns the address of the MultiSend contract.
     *
     * @returns The address of the MultiSend contract
     */
    getMultiSendAddress() {
        return __classPrivateFieldGet(this, _Safe_contractManager, "f").multiSendContract.getAddress();
    }
    /**
     * Returns the address of the MultiSendCallOnly contract.
     *
     * @returns The address of the MultiSendCallOnly contract
     */
    getMultiSendCallOnlyAddress() {
        return __classPrivateFieldGet(this, _Safe_contractManager, "f").multiSendCallOnlyContract.getAddress();
    }
    /**
     * Returns the Safe Master Copy contract version.
     *
     * @returns The Safe Master Copy contract version
     */
    async getContractVersion() {
        return __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract.getVersion();
    }
    /**
     * Returns the list of Safe owner accounts.
     *
     * @returns The list of owners
     */
    async getOwners() {
        return __classPrivateFieldGet(this, _Safe_ownerManager, "f").getOwners();
    }
    /**
     * Returns the Safe nonce.
     *
     * @returns The Safe nonce
     */
    async getNonce() {
        return __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract.getNonce();
    }
    /**
     * Returns the Safe threshold.
     *
     * @returns The Safe threshold
     */
    async getThreshold() {
        return __classPrivateFieldGet(this, _Safe_ownerManager, "f").getThreshold();
    }
    /**
     * Returns the chainId of the connected network.
     *
     * @returns The chainId of the connected network
     */
    async getChainId() {
        return __classPrivateFieldGet(this, _Safe_ethAdapter, "f").getChainId();
    }
    /**
     * Returns the ETH balance of the Safe.
     *
     * @returns The ETH balance of the Safe
     */
    async getBalance() {
        return __classPrivateFieldGet(this, _Safe_ethAdapter, "f").getBalance(this.getAddress());
    }
    /**
     * Returns the address of the FallbackHandler contract.
     *
     * @returns The address of the FallbackHandler contract
     */
    getFallbackHandler() {
        return __classPrivateFieldGet(this, _Safe_fallbackHandlerManager, "f").getFallbackHandler();
    }
    /**
     * Returns the enabled Safe guard or 0x address if no guards are enabled.
     *
     * @returns The address of the enabled Safe guard
     * @throws "Current version of the Safe does not support Safe transaction guards functionality"
     */
    async getGuard() {
        return __classPrivateFieldGet(this, _Safe_guardManager, "f").getGuard();
    }
    /**
     * Returns the list of addresses of all the enabled Safe modules.
     *
     * @returns The list of addresses of all the enabled Safe modules
     */
    async getModules() {
        return __classPrivateFieldGet(this, _Safe_moduleManager, "f").getModules();
    }
    /**
     * Checks if a specific Safe module is enabled for the current Safe.
     *
     * @param moduleAddress - The desired module address
     * @returns TRUE if the module is enabled
     */
    async isModuleEnabled(moduleAddress) {
        return __classPrivateFieldGet(this, _Safe_moduleManager, "f").isModuleEnabled(moduleAddress);
    }
    /**
     * Checks if a specific address is an owner of the current Safe.
     *
     * @param ownerAddress - The account address
     * @returns TRUE if the account is an owner
     */
    async isOwner(ownerAddress) {
        return __classPrivateFieldGet(this, _Safe_ownerManager, "f").isOwner(ownerAddress);
    }
    /**
     * Returns a Safe transaction ready to be signed by the owners.
     *
     * @param createTransactionProps - The createTransaction props
     * @returns The Safe transaction
     * @throws "Invalid empty array of transactions"
     */
    async createTransaction({ safeTransactionData, onlyCalls = false, options }) {
        if ((0, utils_1.isMetaTransactionArray)(safeTransactionData) && safeTransactionData.length === 0) {
            throw new Error('Invalid empty array of transactions');
        }
        let newTransaction;
        if ((0, utils_1.isMetaTransactionArray)(safeTransactionData) && safeTransactionData.length > 1) {
            const multiSendContract = onlyCalls
                ? __classPrivateFieldGet(this, _Safe_contractManager, "f").multiSendCallOnlyContract
                : __classPrivateFieldGet(this, _Safe_contractManager, "f").multiSendContract;
            const multiSendData = (0, utils_2.encodeMultiSendData)(safeTransactionData.map(utils_2.standardizeMetaTransactionData));
            const multiSendTransaction = {
                ...options,
                to: multiSendContract.getAddress(),
                value: '0',
                data: multiSendContract.encode('multiSend', [multiSendData]),
                operation: safe_core_sdk_types_1.OperationType.DelegateCall
            };
            newTransaction = multiSendTransaction;
        }
        else {
            newTransaction = (0, utils_1.isMetaTransactionArray)(safeTransactionData)
                ? { ...options, ...safeTransactionData[0] }
                : safeTransactionData;
        }
        const standardizedTransaction = await (0, utils_2.standardizeSafeTransactionData)(__classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract, __classPrivateFieldGet(this, _Safe_ethAdapter, "f"), newTransaction);
        return new SafeTransaction_1.default(standardizedTransaction);
    }
    /**
     * Returns a Safe transaction ready to be signed by the owners that invalidates the pending Safe transaction/s with a specific nonce.
     *
     * @param nonce - The nonce of the transaction/s that are going to be rejected
     * @returns The Safe transaction that invalidates the pending Safe transaction/s
     */
    async createRejectionTransaction(nonce) {
        const safeTransactionData = {
            to: this.getAddress(),
            nonce,
            value: '0',
            data: '0x',
            safeTxGas: 0
        };
        return this.createTransaction({ safeTransactionData });
    }
    /**
     * Copies a Safe transaction
     *
     * @param safeTransaction - The Safe transaction
     * @returns The new Safe transaction
     */
    async copyTransaction(safeTransaction) {
        const signedSafeTransaction = await this.createTransaction({
            safeTransactionData: safeTransaction.data
        });
        safeTransaction.signatures.forEach((signature) => {
            signedSafeTransaction.addSignature(signature);
        });
        return signedSafeTransaction;
    }
    /**
     * Returns the transaction hash of a Safe transaction.
     *
     * @param safeTransaction - The Safe transaction
     * @returns The transaction hash of the Safe transaction
     */
    async getTransactionHash(safeTransaction) {
        const safeTransactionData = safeTransaction.data;
        const txHash = await __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract.getTransactionHash(safeTransactionData);
        return txHash;
    }
    /**
     * Signs a hash using the current signer account.
     *
     * @param hash - The hash to sign
     * @returns The Safe signature
     */
    async signTransactionHash(hash) {
        return (0, signatures_1.generateSignature)(__classPrivateFieldGet(this, _Safe_ethAdapter, "f"), hash);
    }
    /**
     * Signs a transaction according to the EIP-712 using the current signer account.
     *
     * @param safeTransaction - The Safe transaction to be signed
     * @param methodVersion - EIP-712 version. Optional
     * @returns The Safe signature
     */
    async signTypedData(safeTransaction, methodVersion) {
        const safeTransactionEIP712Args = {
            safeAddress: this.getAddress(),
            safeVersion: await this.getContractVersion(),
            chainId: await this.getEthAdapter().getChainId(),
            safeTransactionData: safeTransaction.data
        };
        return (0, signatures_1.generateEIP712Signature)(__classPrivateFieldGet(this, _Safe_ethAdapter, "f"), safeTransactionEIP712Args, methodVersion);
    }
    /**
     * Adds the signature of the current signer to the Safe transaction object.
     *
     * @param safeTransaction - The Safe transaction to be signed
     * @param signingMethod - Method followed to sign a transaction. Optional. Default value is "eth_sign"
     * @returns The signed Safe transaction
     * @throws "Transactions can only be signed by Safe owners"
     */
    async signTransaction(safeTransaction, signingMethod = 'eth_signTypedData_v4') {
        let transaction = (0, utils_1.isSafeMultisigTransactionResponse)(safeTransaction)
            ? await this.toSafeTransactionType(safeTransaction)
            : safeTransaction;
        const owners = await this.getOwners();
        const signerAddress = await __classPrivateFieldGet(this, _Safe_ethAdapter, "f").getSignerAddress();
        if (!signerAddress) {
            throw new Error('EthAdapter must be initialized with a signer to use this method');
        }
        const addressIsOwner = owners.find((owner) => signerAddress && (0, utils_1.sameString)(owner, signerAddress));
        if (!addressIsOwner) {
            throw new Error('Transactions can only be signed by Safe owners');
        }
        let signature;
        if (signingMethod === 'eth_signTypedData_v4') {
            signature = await this.signTypedData(transaction, 'v4');
        }
        else if (signingMethod === 'eth_signTypedData_v3') {
            signature = await this.signTypedData(transaction, 'v3');
        }
        else if (signingMethod === 'eth_signTypedData') {
            signature = await this.signTypedData(transaction);
        }
        else {
            const safeVersion = await this.getContractVersion();
            if (!(0, safe_core_sdk_utils_1.hasSafeFeature)(safe_core_sdk_utils_1.SAFE_FEATURES.ETH_SIGN, safeVersion)) {
                throw new Error('eth_sign is only supported by Safes >= v1.1.0');
            }
            const txHash = await this.getTransactionHash(transaction);
            signature = await this.signTransactionHash(txHash);
        }
        const signedSafeTransaction = await this.createTransaction({
            safeTransactionData: transaction.data
        });
        transaction.signatures.forEach((signature) => {
            signedSafeTransaction.addSignature(signature);
        });
        signedSafeTransaction.addSignature(signature);
        return signedSafeTransaction;
    }
    /**
     * Approves on-chain a hash using the current signer account.
     *
     * @param hash - The hash to approve
     * @param options - The Safe transaction execution options. Optional
     * @returns The Safe transaction response
     * @throws "Transaction hashes can only be approved by Safe owners"
     * @throws "Cannot specify gas and gasLimit together in transaction options"
     */
    async approveTransactionHash(hash, options) {
        const owners = await this.getOwners();
        const signerAddress = await __classPrivateFieldGet(this, _Safe_ethAdapter, "f").getSignerAddress();
        if (!signerAddress) {
            throw new Error('EthAdapter must be initialized with a signer to use this method');
        }
        const addressIsOwner = owners.find((owner) => signerAddress && (0, utils_1.sameString)(owner, signerAddress));
        if (!addressIsOwner) {
            throw new Error('Transaction hashes can only be approved by Safe owners');
        }
        if ((options === null || options === void 0 ? void 0 : options.gas) && (options === null || options === void 0 ? void 0 : options.gasLimit)) {
            throw new Error('Cannot specify gas and gasLimit together in transaction options');
        }
        return __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract.approveHash(hash, {
            from: signerAddress,
            ...options
        });
    }
    /**
     * Returns a list of owners who have approved a specific Safe transaction.
     *
     * @param txHash - The Safe transaction hash
     * @returns The list of owners
     */
    async getOwnersWhoApprovedTx(txHash) {
        const owners = await this.getOwners();
        let ownersWhoApproved = [];
        for (const owner of owners) {
            const approved = await __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract.approvedHashes(owner, txHash);
            if (approved.gt(0)) {
                ownersWhoApproved.push(owner);
            }
        }
        return ownersWhoApproved;
    }
    /**
     * Returns the Safe transaction to enable the fallback handler.
     *
     * @param address - The new fallback handler address
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "Invalid fallback handler address provided"
     * @throws "Fallback handler provided is already enabled"
     * @throws "Current version of the Safe does not support the fallback handler functionality"
     */
    async createEnableFallbackHandlerTx(fallbackHandlerAddress, options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_fallbackHandlerManager, "f").encodeEnableFallbackHandlerData(fallbackHandlerAddress),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Returns the Safe transaction to disable the fallback handler.
     *
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "There is no fallback handler enabled yet"
     * @throws "Current version of the Safe does not support the fallback handler functionality"
     */
    async createDisableFallbackHandlerTx(options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_fallbackHandlerManager, "f").encodeDisableFallbackHandlerData(),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Returns the Safe transaction to enable a Safe guard.
     *
     * @param guardAddress - The desired guard address
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "Invalid guard address provided"
     * @throws "Guard provided is already enabled"
     * @throws "Current version of the Safe does not support Safe transaction guards functionality"
     */
    async createEnableGuardTx(guardAddress, options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_guardManager, "f").encodeEnableGuardData(guardAddress),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Returns the Safe transaction to disable a Safe guard.
     *
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "There is no guard enabled yet"
     * @throws "Current version of the Safe does not support Safe transaction guards functionality"
     */
    async createDisableGuardTx(options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_guardManager, "f").encodeDisableGuardData(),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Returns the Safe transaction to enable a Safe module.
     *
     * @param moduleAddress - The desired module address
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "Invalid module address provided"
     * @throws "Module provided is already enabled"
     */
    async createEnableModuleTx(moduleAddress, options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_moduleManager, "f").encodeEnableModuleData(moduleAddress),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Returns the Safe transaction to disable a Safe module.
     *
     * @param moduleAddress - The desired module address
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "Invalid module address provided"
     * @throws "Module provided is not enabled already"
     */
    async createDisableModuleTx(moduleAddress, options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_moduleManager, "f").encodeDisableModuleData(moduleAddress),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Returns the Safe transaction to add an owner and optionally change the threshold.
     *
     * @param params - The transaction params
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "Invalid owner address provided"
     * @throws "Address provided is already an owner"
     * @throws "Threshold needs to be greater than 0"
     * @throws "Threshold cannot exceed owner count"
     */
    async createAddOwnerTx({ ownerAddress, threshold }, options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_ownerManager, "f").encodeAddOwnerWithThresholdData(ownerAddress, threshold),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Returns the Safe transaction to remove an owner and optionally change the threshold.
     *
     * @param params - The transaction params
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "Invalid owner address provided"
     * @throws "Address provided is not an owner"
     * @throws "Threshold needs to be greater than 0"
     * @throws "Threshold cannot exceed owner count"
     */
    async createRemoveOwnerTx({ ownerAddress, threshold }, options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_ownerManager, "f").encodeRemoveOwnerData(ownerAddress, threshold),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Returns the Safe transaction to replace an owner of the Safe with a new one.
     *
     * @param params - The transaction params
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "Invalid new owner address provided"
     * @throws "Invalid old owner address provided"
     * @throws "New address provided is already an owner"
     * @throws "Old address provided is not an owner"
     */
    async createSwapOwnerTx({ oldOwnerAddress, newOwnerAddress }, options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_ownerManager, "f").encodeSwapOwnerData(oldOwnerAddress, newOwnerAddress),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Returns the Safe transaction to change the threshold.
     *
     * @param threshold - The new threshold
     * @param options - The transaction optional properties
     * @returns The Safe transaction ready to be signed
     * @throws "Threshold needs to be greater than 0"
     * @throws "Threshold cannot exceed owner count"
     */
    async createChangeThresholdTx(threshold, options) {
        const safeTransactionData = {
            to: this.getAddress(),
            value: '0',
            data: await __classPrivateFieldGet(this, _Safe_ownerManager, "f").encodeChangeThresholdData(threshold),
            ...options
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        return safeTransaction;
    }
    /**
     * Converts a transaction from type SafeMultisigTransactionResponse to type SafeTransaction
     *
     * @param serviceTransactionResponse - The transaction to convert
     * @returns The converted transaction with type SafeTransaction
     */
    async toSafeTransactionType(serviceTransactionResponse) {
        var _a;
        const safeTransactionData = {
            to: serviceTransactionResponse.to,
            value: serviceTransactionResponse.value,
            data: serviceTransactionResponse.data || '0x',
            operation: serviceTransactionResponse.operation,
            safeTxGas: serviceTransactionResponse.safeTxGas,
            baseGas: serviceTransactionResponse.baseGas,
            gasPrice: Number(serviceTransactionResponse.gasPrice),
            gasToken: serviceTransactionResponse.gasToken,
            refundReceiver: serviceTransactionResponse.refundReceiver,
            nonce: serviceTransactionResponse.nonce
        };
        const safeTransaction = await this.createTransaction({ safeTransactionData });
        (_a = serviceTransactionResponse.confirmations) === null || _a === void 0 ? void 0 : _a.map((confirmation) => {
            const signature = new SafeSignature_1.default(confirmation.owner, confirmation.signature);
            safeTransaction.addSignature(signature);
        });
        return safeTransaction;
    }
    /**
     * Checks if a Safe transaction can be executed successfully with no errors.
     *
     * @param safeTransaction - The Safe transaction to check
     * @param options - The Safe transaction execution options. Optional
     * @returns TRUE if the Safe transaction can be executed successfully with no errors
     */
    async isValidTransaction(safeTransaction, options) {
        let transaction = (0, utils_1.isSafeMultisigTransactionResponse)(safeTransaction)
            ? await this.toSafeTransactionType(safeTransaction)
            : safeTransaction;
        const signedSafeTransaction = await this.copyTransaction(transaction);
        const txHash = await this.getTransactionHash(signedSafeTransaction);
        const ownersWhoApprovedTx = await this.getOwnersWhoApprovedTx(txHash);
        for (const owner of ownersWhoApprovedTx) {
            signedSafeTransaction.addSignature((0, signatures_1.generatePreValidatedSignature)(owner));
        }
        const owners = await this.getOwners();
        const signerAddress = await __classPrivateFieldGet(this, _Safe_ethAdapter, "f").getSignerAddress();
        if (!signerAddress) {
            throw new Error('EthAdapter must be initialized with a signer to use this method');
        }
        if (owners.includes(signerAddress)) {
            signedSafeTransaction.addSignature((0, signatures_1.generatePreValidatedSignature)(signerAddress));
        }
        const isTxValid = await __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract.isValidTransaction(signedSafeTransaction, {
            from: signerAddress,
            ...options
        });
        return isTxValid;
    }
    /**
     * Executes a Safe transaction.
     *
     * @param safeTransaction - The Safe transaction to execute
     * @param options - The Safe transaction execution options. Optional
     * @returns The Safe transaction response
     * @throws "No signer provided"
     * @throws "There are X signatures missing"
     * @throws "Cannot specify gas and gasLimit together in transaction options"
     */
    async executeTransaction(safeTransaction, options) {
        let transaction = (0, utils_1.isSafeMultisigTransactionResponse)(safeTransaction)
            ? await this.toSafeTransactionType(safeTransaction)
            : safeTransaction;
        const signedSafeTransaction = await this.copyTransaction(transaction);
        const txHash = await this.getTransactionHash(signedSafeTransaction);
        const ownersWhoApprovedTx = await this.getOwnersWhoApprovedTx(txHash);
        for (const owner of ownersWhoApprovedTx) {
            signedSafeTransaction.addSignature((0, signatures_1.generatePreValidatedSignature)(owner));
        }
        const owners = await this.getOwners();
        const signerAddress = await __classPrivateFieldGet(this, _Safe_ethAdapter, "f").getSignerAddress();
        if (signerAddress && owners.includes(signerAddress)) {
            signedSafeTransaction.addSignature((0, signatures_1.generatePreValidatedSignature)(signerAddress));
        }
        const threshold = await this.getThreshold();
        if (threshold > signedSafeTransaction.signatures.size) {
            const signaturesMissing = threshold - signedSafeTransaction.signatures.size;
            throw new Error(`There ${signaturesMissing > 1 ? 'are' : 'is'} ${signaturesMissing} signature${signaturesMissing > 1 ? 's' : ''} missing`);
        }
        const value = bignumber_1.BigNumber.from(signedSafeTransaction.data.value);
        if (!value.isZero()) {
            const balance = await this.getBalance();
            if (value.gt(bignumber_1.BigNumber.from(balance))) {
                throw new Error('Not enough Ether funds');
            }
        }
        if ((options === null || options === void 0 ? void 0 : options.gas) && (options === null || options === void 0 ? void 0 : options.gasLimit)) {
            throw new Error('Cannot specify gas and gasLimit together in transaction options');
        }
        const txResponse = await __classPrivateFieldGet(this, _Safe_contractManager, "f").safeContract.execTransaction(signedSafeTransaction, {
            from: signerAddress,
            ...options
        });
        return txResponse;
    }
}
_Safe_ethAdapter = new WeakMap(), _Safe_contractManager = new WeakMap(), _Safe_ownerManager = new WeakMap(), _Safe_moduleManager = new WeakMap(), _Safe_guardManager = new WeakMap(), _Safe_fallbackHandlerManager = new WeakMap();
exports.default = Safe;
//# sourceMappingURL=Safe.js.map