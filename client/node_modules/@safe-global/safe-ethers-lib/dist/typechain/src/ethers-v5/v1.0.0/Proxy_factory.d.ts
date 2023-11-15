import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface Proxy_factoryInterface extends utils.Interface {
    functions: {
        "createProxyWithNonce(address,bytes,uint256)": FunctionFragment;
        "proxyCreationCode()": FunctionFragment;
        "createProxy(address,bytes)": FunctionFragment;
        "proxyRuntimeCode()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createProxyWithNonce" | "proxyCreationCode" | "createProxy" | "proxyRuntimeCode"): FunctionFragment;
    encodeFunctionData(functionFragment: "createProxyWithNonce", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "proxyCreationCode", values?: undefined): string;
    encodeFunctionData(functionFragment: "createProxy", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "proxyRuntimeCode", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createProxyWithNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyCreationCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyRuntimeCode", data: BytesLike): Result;
    events: {
        "ProxyCreation(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ProxyCreation"): EventFragment;
}
export interface ProxyCreationEventObject {
    proxy: string;
}
export type ProxyCreationEvent = TypedEvent<[string], ProxyCreationEventObject>;
export type ProxyCreationEventFilter = TypedEventFilter<ProxyCreationEvent>;
export interface Proxy_factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Proxy_factoryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proxyCreationCode(overrides?: CallOverrides): Promise<[string]>;
        createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proxyRuntimeCode(overrides?: CallOverrides): Promise<[string]>;
    };
    createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proxyCreationCode(overrides?: CallOverrides): Promise<string>;
    createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        proxyCreationCode(overrides?: CallOverrides): Promise<string>;
        createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ProxyCreation(address)"(proxy?: null): ProxyCreationEventFilter;
        ProxyCreation(proxy?: null): ProxyCreationEventFilter;
    };
    estimateGas: {
        createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proxyCreationCode(overrides?: CallOverrides): Promise<BigNumber>;
        createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proxyRuntimeCode(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proxyCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proxyRuntimeCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
