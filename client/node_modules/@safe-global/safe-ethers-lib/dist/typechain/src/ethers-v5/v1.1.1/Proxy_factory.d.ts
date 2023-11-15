import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface Proxy_factoryInterface extends utils.Interface {
    functions: {
        "createProxy(address,bytes)": FunctionFragment;
        "proxyRuntimeCode()": FunctionFragment;
        "proxyCreationCode()": FunctionFragment;
        "createProxyWithNonce(address,bytes,uint256)": FunctionFragment;
        "createProxyWithCallback(address,bytes,uint256,address)": FunctionFragment;
        "calculateCreateProxyWithNonceAddress(address,bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createProxy" | "proxyRuntimeCode" | "proxyCreationCode" | "createProxyWithNonce" | "createProxyWithCallback" | "calculateCreateProxyWithNonceAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "createProxy", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "proxyRuntimeCode", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxyCreationCode", values?: undefined): string;
    encodeFunctionData(functionFragment: "createProxyWithNonce", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createProxyWithCallback", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "calculateCreateProxyWithNonceAddress", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "createProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyRuntimeCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyCreationCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxyWithNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxyWithCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateCreateProxyWithNonceAddress", data: BytesLike): Result;
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
        createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proxyRuntimeCode(overrides?: CallOverrides): Promise<[string]>;
        proxyCreationCode(overrides?: CallOverrides): Promise<[string]>;
        createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createProxyWithCallback(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calculateCreateProxyWithNonceAddress(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;
    proxyCreationCode(overrides?: CallOverrides): Promise<string>;
    createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createProxyWithCallback(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calculateCreateProxyWithNonceAddress(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;
        proxyCreationCode(overrides?: CallOverrides): Promise<string>;
        createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        createProxyWithCallback(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        calculateCreateProxyWithNonceAddress(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ProxyCreation(address)"(proxy?: null): ProxyCreationEventFilter;
        ProxyCreation(proxy?: null): ProxyCreationEventFilter;
    };
    estimateGas: {
        createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proxyRuntimeCode(overrides?: CallOverrides): Promise<BigNumber>;
        proxyCreationCode(overrides?: CallOverrides): Promise<BigNumber>;
        createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createProxyWithCallback(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calculateCreateProxyWithNonceAddress(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createProxy(masterCopy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proxyRuntimeCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxyCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createProxyWithNonce(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createProxyWithCallback(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, callback: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calculateCreateProxyWithNonceAddress(_mastercopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
