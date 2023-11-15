"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimateTxGas = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const safe_core_sdk_types_1 = require("@safe-global/safe-core-sdk-types");
function estimateDataGasCosts(data) {
    const reducer = (accumulator, currentValue) => {
        if (currentValue === '0x') {
            return accumulator + 0;
        }
        if (currentValue === '00') {
            return accumulator + 4;
        }
        return accumulator + 16;
    };
    return data.match(/.{2}/g).reduce(reducer, 0);
}
async function estimateTxGas(safeContract, ethAdapter, to, valueInWei, data, operation) {
    let txGasEstimation = 0;
    const safeAddress = safeContract.getAddress();
    const estimateData = safeContract.encode('requiredTxGas', [
        to,
        valueInWei,
        data,
        operation
    ]);
    try {
        const estimateResponse = (await ethAdapter.estimateGas({
            to: safeAddress,
            from: safeAddress,
            data: estimateData
        })).toString();
        txGasEstimation = bignumber_1.BigNumber.from('0x' + estimateResponse.substring(138)).toNumber() + 10000;
    }
    catch (error) { }
    if (txGasEstimation > 0) {
        const dataGasEstimation = estimateDataGasCosts(estimateData);
        let additionalGas = 10000;
        for (let i = 0; i < 10; i++) {
            try {
                const estimateResponse = await ethAdapter.call({
                    to: safeAddress,
                    from: safeAddress,
                    data: estimateData,
                    gasPrice: 0,
                    gasLimit: txGasEstimation + dataGasEstimation + additionalGas
                });
                if (estimateResponse !== '0x') {
                    break;
                }
            }
            catch (error) { }
            txGasEstimation += additionalGas;
            additionalGas *= 2;
        }
        return txGasEstimation + additionalGas;
    }
    try {
        const estimateGas = await ethAdapter.estimateGas({
            to,
            from: safeAddress,
            value: valueInWei,
            data
        });
        return estimateGas;
    }
    catch (error) {
        if (operation === safe_core_sdk_types_1.OperationType.DelegateCall) {
            return 0;
        }
        return Promise.reject(error);
    }
}
exports.estimateTxGas = estimateTxGas;
//# sourceMappingURL=gas.js.map