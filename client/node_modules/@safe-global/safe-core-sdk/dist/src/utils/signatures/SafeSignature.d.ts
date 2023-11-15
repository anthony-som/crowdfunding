import { SafeSignature } from '@safe-global/safe-core-sdk-types';
declare class EthSignSignature implements SafeSignature {
    signer: string;
    data: string;
    /**
     * Creates an instance of a Safe signature.
     *
     * @param signer - Ethers signer
     * @param signature - The Safe signature
     * @returns The Safe signature instance
     */
    constructor(signer: string, signature: string);
    /**
     * Returns the static part of the Safe signature.
     *
     * @returns The static part of the Safe signature
     */
    staticPart(): string;
    /**
     * Returns the dynamic part of the Safe signature.
     *
     * @returns The dynamic part of the Safe signature
     */
    dynamicPart(): string;
}
export default EthSignSignature;
