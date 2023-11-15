export declare type EthNetworkName = 'mainnet' | 'goerli';
export declare enum EthChainType {
    Harmony = "HARMONY"
}
export interface CustomNodeConfiguration {
    rpcUrl: string;
    chainId?: number;
    chainType?: EthChainType;
}
export declare type EthNetworkConfiguration = EthNetworkName | CustomNodeConfiguration;
