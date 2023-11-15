import { ThirdwebProviderConfig } from "./types";
import { Awaitable, Session } from "next-auth/core/types";
import { JWT } from "next-auth/jwt/types";
export declare function ThirdwebAuthProvider(cfg: ThirdwebProviderConfig): import("next-auth/providers/credentials").CredentialsConfig<{
    payload: {
        label: string;
        type: string;
        placeholder: string;
    };
}>;
export declare function authSession(params: {
    session: Session;
    token: JWT;
}): Awaitable<Session>;
//# sourceMappingURL=index.d.ts.map