import { LoginPayload, VerifyOptions } from "../core/schema";
export declare function verifyLogin(domain: string, payload: LoginPayload, options?: Omit<VerifyOptions, "domain">): Promise<{
    address: string;
    error: undefined;
} | {
    address: undefined;
    error: any;
}>;
export { PrivateKeyWallet } from "@thirdweb-dev/wallets/evm/wallets/private-key";
//# sourceMappingURL=index.d.ts.map