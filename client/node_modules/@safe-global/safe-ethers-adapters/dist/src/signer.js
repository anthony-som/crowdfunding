"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeEthersSigner = void 0;
const abstract_signer_1 = require("@ethersproject/abstract-signer");
const bignumber_1 = require("@ethersproject/bignumber");
const safe_core_sdk_types_1 = require("@safe-global/safe-core-sdk-types");
const utils_1 = require("./utils");
const sleep = (duration) => new Promise((resolve) => setTimeout(resolve, duration));
class SafeEthersSigner extends abstract_signer_1.VoidSigner {
    /**
     * Creates an instance of the SafeEthersSigner.
     * @param safe - Safe that should be used
     * @param service - Services to which the transactions should be proposed to
     * @param provider - (Optional) Provider that should be used for blockchain interactions. By default the provider from the signer is used.
     * @param options - (Optional) Additional options (e.g. polling delay when waiting for a transaction to be mined)
     * @returns The SafeEthersSigner instance
     */
    constructor(safe, service, provider, options) {
        super(safe.getAddress(), provider);
        this.service = service;
        this.safe = safe;
        this.options = options;
    }
    async buildTransactionResponse(safeTxHash, safeTx) {
        const connectedSafe = await this.safe;
        const connectedService = this.service;
        return {
            to: safeTx.to,
            value: bignumber_1.BigNumber.from(safeTx.value),
            data: safeTx.data,
            operation: safeTx.operation,
            gasLimit: bignumber_1.BigNumber.from(safeTx.safeTxGas),
            gasPrice: bignumber_1.BigNumber.from(0),
            nonce: safeTx.nonce,
            chainId: await connectedSafe.getChainId(),
            hash: safeTxHash,
            from: this.address,
            confirmations: 0,
            wait: async (confirmations) => {
                var _a, _b;
                while (true) {
                    try {
                        const txDetails = await connectedService.getSafeTxDetails(safeTxHash);
                        if (txDetails.transactionHash) {
                            this._checkProvider('sendTransaction');
                            const receipt = await this.provider.waitForTransaction(txDetails.transactionHash, confirmations);
                            return (0, utils_1.mapReceipt)(receipt, safeTx);
                        }
                    }
                    catch (e) { }
                    await sleep((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.pollingDelay) !== null && _b !== void 0 ? _b : 5000);
                }
            }
        };
    }
    /**
     * Populates all fields in a transaction, signs it and sends it to the Safe transaction service
     *
     * @param transaction - The transaction what should be send
     * @returns A promise that resolves to a SafeTransactionReponse, that contains all the information of the transaction.
     */
    async sendTransaction(transaction) {
        var _a, _b, _c;
        const tx = await transaction;
        let operation = safe_core_sdk_types_1.OperationType.Call;
        let to = await tx.to;
        let data = (_b = (_a = (await tx.data)) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '0x';
        let value = bignumber_1.BigNumber.from((_c = (await tx.value)) !== null && _c !== void 0 ? _c : 0);
        if (!to) {
            to = utils_1.createLibAddress;
            data = utils_1.createLibInterface.encodeFunctionData('performCreate', [value, data]);
            value = bignumber_1.BigNumber.from(0);
            operation = safe_core_sdk_types_1.OperationType.DelegateCall;
        }
        const baseTx = {
            to: to,
            data,
            value: value.toString(),
            operation
        };
        const safeTxGas = await this.service.estimateSafeTx(this.address, baseTx);
        const connectedSafe = await this.safe;
        const safeTransactionData = {
            ...baseTx,
            safeTxGas: safeTxGas.toNumber()
        };
        const safeTx = await connectedSafe.createTransaction({ safeTransactionData });
        const safeTxHash = await connectedSafe.getTransactionHash(safeTx);
        const signature = await connectedSafe.signTransactionHash(safeTxHash);
        await this.service.proposeTx(this.address, safeTxHash, safeTx, signature);
        // TODO: maybe use original tx information
        return this.buildTransactionResponse(safeTxHash, safeTx.data);
    }
}
exports.SafeEthersSigner = SafeEthersSigner;
//# sourceMappingURL=signer.js.map