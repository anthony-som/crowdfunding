import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface Gnosis_safeInterface extends utils.Interface {
    functions: {
        "addOwnerWithThreshold(address,uint256)": FunctionFragment;
        "DOMAIN_SEPARATOR_TYPEHASH()": FunctionFragment;
        "isOwner(address)": FunctionFragment;
        "execTransactionFromModule(address,uint256,bytes,uint8)": FunctionFragment;
        "signedMessages(bytes32)": FunctionFragment;
        "enableModule(address)": FunctionFragment;
        "changeThreshold(uint256)": FunctionFragment;
        "approvedHashes(address,bytes32)": FunctionFragment;
        "changeMasterCopy(address)": FunctionFragment;
        "SENTINEL_MODULES()": FunctionFragment;
        "SENTINEL_OWNERS()": FunctionFragment;
        "getOwners()": FunctionFragment;
        "NAME()": FunctionFragment;
        "nonce()": FunctionFragment;
        "getModules()": FunctionFragment;
        "SAFE_MSG_TYPEHASH()": FunctionFragment;
        "SAFE_TX_TYPEHASH()": FunctionFragment;
        "disableModule(address,address)": FunctionFragment;
        "swapOwner(address,address,address)": FunctionFragment;
        "getThreshold()": FunctionFragment;
        "domainSeparator()": FunctionFragment;
        "removeOwner(address,address,uint256)": FunctionFragment;
        "VERSION()": FunctionFragment;
        "setup(address[],uint256,address,bytes,address,uint256,address)": FunctionFragment;
        "execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)": FunctionFragment;
        "requiredTxGas(address,uint256,bytes,uint8)": FunctionFragment;
        "approveHash(bytes32)": FunctionFragment;
        "signMessage(bytes)": FunctionFragment;
        "isValidSignature(bytes,bytes)": FunctionFragment;
        "getMessageHash(bytes)": FunctionFragment;
        "encodeTransactionData(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": FunctionFragment;
        "getTransactionHash(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addOwnerWithThreshold" | "DOMAIN_SEPARATOR_TYPEHASH" | "isOwner" | "execTransactionFromModule" | "signedMessages" | "enableModule" | "changeThreshold" | "approvedHashes" | "changeMasterCopy" | "SENTINEL_MODULES" | "SENTINEL_OWNERS" | "getOwners" | "NAME" | "nonce" | "getModules" | "SAFE_MSG_TYPEHASH" | "SAFE_TX_TYPEHASH" | "disableModule" | "swapOwner" | "getThreshold" | "domainSeparator" | "removeOwner" | "VERSION" | "setup" | "execTransaction" | "requiredTxGas" | "approveHash" | "signMessage" | "isValidSignature" | "getMessageHash" | "encodeTransactionData" | "getTransactionHash"): FunctionFragment;
    encodeFunctionData(functionFragment: "addOwnerWithThreshold", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModule", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "signedMessages", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "enableModule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "changeThreshold", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "approvedHashes", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "changeMasterCopy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "SENTINEL_MODULES", values?: undefined): string;
    encodeFunctionData(functionFragment: "SENTINEL_OWNERS", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "getModules", values?: undefined): string;
    encodeFunctionData(functionFragment: "SAFE_MSG_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "SAFE_TX_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableModule", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swapOwner", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "domainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOwner", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "setup", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "execTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "requiredTxGas", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "approveHash", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "signMessage", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isValidSignature", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getMessageHash", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "encodeTransactionData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTransactionHash", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "addOwnerWithThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeMasterCopy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SENTINEL_MODULES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SENTINEL_OWNERS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SAFE_MSG_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SAFE_TX_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requiredTxGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMessageHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeTransactionData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionHash", data: BytesLike): Result;
    events: {
        "ExecutionFailed(bytes32)": EventFragment;
        "AddedOwner(address)": EventFragment;
        "RemovedOwner(address)": EventFragment;
        "ChangedThreshold(uint256)": EventFragment;
        "EnabledModule(address)": EventFragment;
        "DisabledModule(address)": EventFragment;
        "ContractCreation(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExecutionFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddedOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedThreshold"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractCreation"): EventFragment;
}
export interface ExecutionFailedEventObject {
    txHash: string;
}
export type ExecutionFailedEvent = TypedEvent<[
    string
], ExecutionFailedEventObject>;
export type ExecutionFailedEventFilter = TypedEventFilter<ExecutionFailedEvent>;
export interface AddedOwnerEventObject {
    owner: string;
}
export type AddedOwnerEvent = TypedEvent<[string], AddedOwnerEventObject>;
export type AddedOwnerEventFilter = TypedEventFilter<AddedOwnerEvent>;
export interface RemovedOwnerEventObject {
    owner: string;
}
export type RemovedOwnerEvent = TypedEvent<[string], RemovedOwnerEventObject>;
export type RemovedOwnerEventFilter = TypedEventFilter<RemovedOwnerEvent>;
export interface ChangedThresholdEventObject {
    threshold: BigNumber;
}
export type ChangedThresholdEvent = TypedEvent<[
    BigNumber
], ChangedThresholdEventObject>;
export type ChangedThresholdEventFilter = TypedEventFilter<ChangedThresholdEvent>;
export interface EnabledModuleEventObject {
    module: string;
}
export type EnabledModuleEvent = TypedEvent<[string], EnabledModuleEventObject>;
export type EnabledModuleEventFilter = TypedEventFilter<EnabledModuleEvent>;
export interface DisabledModuleEventObject {
    module: string;
}
export type DisabledModuleEvent = TypedEvent<[
    string
], DisabledModuleEventObject>;
export type DisabledModuleEventFilter = TypedEventFilter<DisabledModuleEvent>;
export interface ContractCreationEventObject {
    newContract: string;
}
export type ContractCreationEvent = TypedEvent<[
    string
], ContractCreationEventObject>;
export type ContractCreationEventFilter = TypedEventFilter<ContractCreationEvent>;
export interface Gnosis_safe extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Gnosis_safeInterface;
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
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        SENTINEL_MODULES(overrides?: CallOverrides): Promise<[string]>;
        SENTINEL_OWNERS(overrides?: CallOverrides): Promise<[string]>;
        getOwners(overrides?: CallOverrides): Promise<[string[]]>;
        NAME(overrides?: CallOverrides): Promise<[string]>;
        nonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        getModules(overrides?: CallOverrides): Promise<[string[]]>;
        SAFE_MSG_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        SAFE_TX_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        domainSeparator(overrides?: CallOverrides): Promise<[string]>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        VERSION(overrides?: CallOverrides): Promise<[string]>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        signMessage(_data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isValidSignature(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    SENTINEL_MODULES(overrides?: CallOverrides): Promise<string>;
    SENTINEL_OWNERS(overrides?: CallOverrides): Promise<string>;
    getOwners(overrides?: CallOverrides): Promise<string[]>;
    NAME(overrides?: CallOverrides): Promise<string>;
    nonce(overrides?: CallOverrides): Promise<BigNumber>;
    getModules(overrides?: CallOverrides): Promise<string[]>;
    SAFE_MSG_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    SAFE_TX_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    domainSeparator(overrides?: CallOverrides): Promise<string>;
    removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    VERSION(overrides?: CallOverrides): Promise<string>;
    setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    signMessage(_data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isValidSignature(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        enableModule(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        SENTINEL_MODULES(overrides?: CallOverrides): Promise<string>;
        SENTINEL_OWNERS(overrides?: CallOverrides): Promise<string>;
        getOwners(overrides?: CallOverrides): Promise<string[]>;
        NAME(overrides?: CallOverrides): Promise<string>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        getModules(overrides?: CallOverrides): Promise<string[]>;
        SAFE_MSG_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        SAFE_TX_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        domainSeparator(overrides?: CallOverrides): Promise<string>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        VERSION(overrides?: CallOverrides): Promise<string>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        signMessage(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        isValidSignature(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ExecutionFailed(bytes32)"(txHash?: null): ExecutionFailedEventFilter;
        ExecutionFailed(txHash?: null): ExecutionFailedEventFilter;
        "AddedOwner(address)"(owner?: null): AddedOwnerEventFilter;
        AddedOwner(owner?: null): AddedOwnerEventFilter;
        "RemovedOwner(address)"(owner?: null): RemovedOwnerEventFilter;
        RemovedOwner(owner?: null): RemovedOwnerEventFilter;
        "ChangedThreshold(uint256)"(threshold?: null): ChangedThresholdEventFilter;
        ChangedThreshold(threshold?: null): ChangedThresholdEventFilter;
        "EnabledModule(address)"(module?: null): EnabledModuleEventFilter;
        EnabledModule(module?: null): EnabledModuleEventFilter;
        "DisabledModule(address)"(module?: null): DisabledModuleEventFilter;
        DisabledModule(module?: null): DisabledModuleEventFilter;
        "ContractCreation(address)"(newContract?: null): ContractCreationEventFilter;
        ContractCreation(newContract?: null): ContractCreationEventFilter;
    };
    estimateGas: {
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        SENTINEL_MODULES(overrides?: CallOverrides): Promise<BigNumber>;
        SENTINEL_OWNERS(overrides?: CallOverrides): Promise<BigNumber>;
        getOwners(overrides?: CallOverrides): Promise<BigNumber>;
        NAME(overrides?: CallOverrides): Promise<BigNumber>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        getModules(overrides?: CallOverrides): Promise<BigNumber>;
        SAFE_MSG_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        SAFE_TX_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        signMessage(_data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isValidSignature(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        SENTINEL_MODULES(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SENTINEL_OWNERS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getModules(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SAFE_MSG_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SAFE_TX_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        signMessage(_data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isValidSignature(_data: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getMessageHash(message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
