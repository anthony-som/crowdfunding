/**
 * Creates OAuth 2.0-compatible `code_verifier`, `code_challenge`, and `state`
 * parameters.
 */
export declare function createCryptoChallenge(): Promise<{
    verifier: string;
    challenge: string;
    state: string;
}>;
