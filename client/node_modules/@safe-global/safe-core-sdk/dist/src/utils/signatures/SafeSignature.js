"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EthSignSignature {
    /**
     * Creates an instance of a Safe signature.
     *
     * @param signer - Ethers signer
     * @param signature - The Safe signature
     * @returns The Safe signature instance
     */
    constructor(signer, signature) {
        this.signer = signer;
        this.data = signature;
    }
    /**
     * Returns the static part of the Safe signature.
     *
     * @returns The static part of the Safe signature
     */
    staticPart( /* dynamicOffset: number */) {
        return this.data;
    }
    /**
     * Returns the dynamic part of the Safe signature.
     *
     * @returns The dynamic part of the Safe signature
     */
    dynamicPart() {
        return '';
    }
}
exports.default = EthSignSignature;
//# sourceMappingURL=SafeSignature.js.map