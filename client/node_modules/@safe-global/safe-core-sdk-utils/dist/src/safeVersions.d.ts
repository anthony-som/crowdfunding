export declare enum SAFE_FEATURES {
    SAFE_TX_GAS_OPTIONAL = "SAFE_TX_GAS_OPTIONAL",
    SAFE_TX_GUARDS = "SAFE_TX_GUARDS",
    SAFE_FALLBACK_HANDLER = "SAFE_FALLBACK_HANDLER",
    ETH_SIGN = "ETH_SIGN"
}
export declare const hasSafeFeature: (feature: SAFE_FEATURES, version: string) => boolean;
