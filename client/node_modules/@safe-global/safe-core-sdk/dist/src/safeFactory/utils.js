"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSafeDeploymentConfig = exports.validateSafeAccountConfig = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const validateSafeAccountConfig = ({ owners, threshold }) => {
    if (owners.length <= 0)
        throw new Error('Owner list must have at least one owner');
    if (threshold <= 0)
        throw new Error('Threshold must be greater than or equal to 1');
    if (threshold > owners.length)
        throw new Error('Threshold must be lower than or equal to owners length');
};
exports.validateSafeAccountConfig = validateSafeAccountConfig;
const validateSafeDeploymentConfig = ({ saltNonce }) => {
    if (bignumber_1.BigNumber.from(saltNonce).lt(0))
        throw new Error('saltNonce must be greater than or equal to 0');
};
exports.validateSafeDeploymentConfig = validateSafeDeploymentConfig;
//# sourceMappingURL=utils.js.map