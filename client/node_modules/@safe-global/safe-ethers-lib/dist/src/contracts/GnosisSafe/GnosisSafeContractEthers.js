"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class GnosisSafeContractEthers {
    constructor(contract) {
        this.contract = contract;
        this.encode = (methodName, params) => {
            return this.contract.interface.encodeFunctionData(methodName, params);
        };
    }
    async getVersion() {
        return (await this.contract.VERSION());
    }
    getAddress() {
        return this.contract.address;
    }
    async getNonce() {
        return (await this.contract.nonce()).toNumber();
    }
    async getThreshold() {
        return (await this.contract.getThreshold()).toNumber();
    }
    async getOwners() {
        return this.contract.getOwners();
    }
    async isOwner(address) {
        return this.contract.isOwner(address);
    }
    async getTransactionHash(safeTransactionData) {
        return this.contract.getTransactionHash(safeTransactionData.to, safeTransactionData.value, safeTransactionData.data, safeTransactionData.operation, safeTransactionData.safeTxGas, safeTransactionData.baseGas, safeTransactionData.gasPrice, safeTransactionData.gasToken, safeTransactionData.refundReceiver, safeTransactionData.nonce);
    }
    async approvedHashes(ownerAddress, hash) {
        return this.contract.approvedHashes(ownerAddress, hash);
    }
    async approveHash(hash, options) {
        if (options && !options.gasLimit) {
            options.gasLimit = await this.estimateGas('approveHash', [hash], { ...options });
        }
        const txResponse = await this.contract.approveHash(hash, options);
        return (0, utils_1.toTxResult)(txResponse, options);
    }
    async isValidTransaction(safeTransaction, options) {
        let isTxValid = false;
        try {
            if (options && !options.gasLimit) {
                options.gasLimit = await this.estimateGas('execTransaction', [
                    safeTransaction.data.to,
                    safeTransaction.data.value,
                    safeTransaction.data.data,
                    safeTransaction.data.operation,
                    safeTransaction.data.safeTxGas,
                    safeTransaction.data.baseGas,
                    safeTransaction.data.gasPrice,
                    safeTransaction.data.gasToken,
                    safeTransaction.data.refundReceiver,
                    safeTransaction.encodedSignatures()
                ], {
                    ...options
                });
            }
            isTxValid = await this.contract.callStatic.execTransaction(safeTransaction.data.to, safeTransaction.data.value, safeTransaction.data.data, safeTransaction.data.operation, safeTransaction.data.safeTxGas, safeTransaction.data.baseGas, safeTransaction.data.gasPrice, safeTransaction.data.gasToken, safeTransaction.data.refundReceiver, safeTransaction.encodedSignatures(), options);
        }
        catch { }
        return isTxValid;
    }
    async execTransaction(safeTransaction, options) {
        if (options && !options.gasLimit) {
            options.gasLimit = await this.estimateGas('execTransaction', [
                safeTransaction.data.to,
                safeTransaction.data.value,
                safeTransaction.data.data,
                safeTransaction.data.operation,
                safeTransaction.data.safeTxGas,
                safeTransaction.data.baseGas,
                safeTransaction.data.gasPrice,
                safeTransaction.data.gasToken,
                safeTransaction.data.refundReceiver,
                safeTransaction.encodedSignatures()
            ], {
                ...options
            });
        }
        const txResponse = await this.contract.execTransaction(safeTransaction.data.to, safeTransaction.data.value, safeTransaction.data.data, safeTransaction.data.operation, safeTransaction.data.safeTxGas, safeTransaction.data.baseGas, safeTransaction.data.gasPrice, safeTransaction.data.gasToken, safeTransaction.data.refundReceiver, safeTransaction.encodedSignatures(), options);
        return (0, utils_1.toTxResult)(txResponse, options);
    }
    async estimateGas(methodName, params, options) {
        return (await this.contract.estimateGas[methodName](...params, options)).toNumber();
    }
}
exports.default = GnosisSafeContractEthers;
//# sourceMappingURL=GnosisSafeContractEthers.js.map