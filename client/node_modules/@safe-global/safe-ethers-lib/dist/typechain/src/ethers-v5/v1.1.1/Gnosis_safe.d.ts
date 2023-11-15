import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface Gnosis_safeInterface extends utils.Interface {
    functions: {
        "NAME()": FunctionFragment;
        "VERSION()": FunctionFragment;
        "addOwnerWithThreshold(address,uint256)": FunctionFragment;
        "approvedHashes(address,bytes32)": FunctionFragment;
        "changeMasterCopy(address)": FunctionFragment;
        "changeThreshold(uint256)": FunctionFragment;
        "disableModule(address,address)": FunctionFragment;
        "domainSeparator()": FunctionFragment;
        "enableModule(address)": FunctionFragment;
        "execTransactionFromModule(address,uint256,bytes,uint8)": FunctionFragment;
        "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": FunctionFragment;
        "getModules()": FunctionFragment;
        "getModulesPaginated(address,uint256)": FunctionFragment;
        "getOwners()": FunctionFragment;
        "getThreshold()": FunctionFragment;
        "isOwner(address)": FunctionFragment;
        "nonce()": FunctionFragment;
        "removeOwner(address,address,uint256)": FunctionFragment;
        "setFallbackHandler(address)": FunctionFragment;
        "signedMessages(bytes32)": FunctionFragment;
        "swapOwner(address,address,address)": FunctionFragment;
        "setup(address[],uint256,address,bytes,address,address,uint256,address)": FunctionFragment;
        "execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)": FunctionFragment;
        "requiredTxGas(address,uint256,bytes,uint8)": FunctionFragment;
        "approveHash(bytes32)": FunctionFragment;
        "signMessage(bytes)": FunctionFragment;
        "isValidSignature(bytes,bytes)": FunctionFragment;
        "getMessageHash(bytes)": FunctionFragment;
        "encodeTransactionData(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": FunctionFragment;
        "getTransactionHash(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "NAME" | "VERSION" | "addOwnerWithThreshold" | "approvedHashes" | "changeMasterCopy" | "changeThreshold" | "disableModule" | "domainSeparator" | "enableModule" | "execTransactionFromModule" | "execTransactionFromModuleReturnData" | "getModules" | "getModulesPaginated" | "getOwners" | "getThreshold" | "isOwner" | "nonce" | "removeOwner" | "setFallbackHandler" | "signedMessages" | "swapOwner" | "setup" | "execTransaction" | "requiredTxGas" | "approveHash" | "signMessage" | "isValidSignature" | "getMessageHash" | "encodeTransactionData" | "getTransactionHash"): FunctionFragment;
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "addOwnerWithThreshold", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "approvedHashes", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "changeMasterCopy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "changeThreshold", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "disableModule", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "domainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "enableModule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModule", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModuleReturnData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getModules", values?: undefined): string;
    encodeFunctionData(functionFragment: "getModulesPaginated", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOwner", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setFallbackHandler", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "signedMessages", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "swapOwner", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setup", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
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
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addOwnerWithThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeMasterCopy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModuleReturnData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModulesPaginated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFallbackHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapOwner", data: BytesLike): Result;
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
        "AddedOwner(address)": EventFragment;
        "ApproveHash(bytes32,address)": EventFragment;
        "ChangedMasterCopy(address)": EventFragment;
        "ChangedThreshold(uint256)": EventFragment;
        "DisabledModule(address)": EventFragment;
        "EnabledModule(address)": EventFragment;
        "ExecutionFailure(bytes32,uint256)": EventFragment;
        "ExecutionFromModuleFailure(address)": EventFragment;
        "ExecutionFromModuleSuccess(address)": EventFragment;
        "ExecutionSuccess(bytes32,uint256)": EventFragment;
        "RemovedOwner(address)": EventFragment;
        "SignMsg(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApproveHash"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedMasterCopy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedThreshold"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionFailure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionFromModuleFailure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionFromModuleSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignMsg"): EventFragment;
}
export interface AddedOwnerEventObject {
    owner: string;
}
export type AddedOwnerEvent = TypedEvent<[string], AddedOwnerEventObject>;
export type AddedOwnerEventFilter = TypedEventFilter<AddedOwnerEvent>;
export interface ApproveHashEventObject {
    approvedHash: string;
    owner: string;
}
export type ApproveHashEvent = TypedEvent<[
    string,
    string
], ApproveHashEventObject>;
export type ApproveHashEventFilter = TypedEventFilter<ApproveHashEvent>;
export interface ChangedMasterCopyEventObject {
    masterCopy: string;
}
export type ChangedMasterCopyEvent = TypedEvent<[
    string
], ChangedMasterCopyEventObject>;
export type ChangedMasterCopyEventFilter = TypedEventFilter<ChangedMasterCopyEvent>;
export interface ChangedThresholdEventObject {
    threshold: BigNumber;
}
export type ChangedThresholdEvent = TypedEvent<[
    BigNumber
], ChangedThresholdEventObject>;
export type ChangedThresholdEventFilter = TypedEventFilter<ChangedThresholdEvent>;
export interface DisabledModuleEventObject {
    module: string;
}
export type DisabledModuleEvent = TypedEvent<[
    string
], DisabledModuleEventObject>;
export type DisabledModuleEventFilter = TypedEventFilter<DisabledModuleEvent>;
export interface EnabledModuleEventObject {
    module: string;
}
export type EnabledModuleEvent = TypedEvent<[string], EnabledModuleEventObject>;
export type EnabledModuleEventFilter = TypedEventFilter<EnabledModuleEvent>;
export interface ExecutionFailureEventObject {
    txHash: string;
    payment: BigNumber;
}
export type ExecutionFailureEvent = TypedEvent<[
    string,
    BigNumber
], ExecutionFailureEventObject>;
export type ExecutionFailureEventFilter = TypedEventFilter<ExecutionFailureEvent>;
export interface ExecutionFromModuleFailureEventObject {
    module: string;
}
export type ExecutionFromModuleFailureEvent = TypedEvent<[
    string
], ExecutionFromModuleFailureEventObject>;
export type ExecutionFromModuleFailureEventFilter = TypedEventFilter<ExecutionFromModuleFailureEvent>;
export interface ExecutionFromModuleSuccessEventObject {
    module: string;
}
export type ExecutionFromModuleSuccessEvent = TypedEvent<[
    string
], ExecutionFromModuleSuccessEventObject>;
export type ExecutionFromModuleSuccessEventFilter = TypedEventFilter<ExecutionFromModuleSuccessEvent>;
export interface ExecutionSuccessEventObject {
    txHash: string;
    payment: BigNumber;
}
export type ExecutionSuccessEvent = TypedEvent<[
    string,
    BigNumber
], ExecutionSuccessEventObject>;
export type ExecutionSuccessEventFilter = TypedEventFilter<ExecutionSuccessEvent>;
export interface RemovedOwnerEventObject {
    owner: string;
}
export type RemovedOwnerEvent = TypedEvent<[string], RemovedOwnerEventObject>;
export type RemovedOwnerEventFilter = TypedEventFilter<RemovedOwnerEvent>;
export interface SignMsgEventObject {
    msgHash: string;
}
export type SignMsgEvent = TypedEvent<[string], SignMsgEventObject>;
export type SignMsgEventFilter = TypedEventFilter<SignMsgEvent>;
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
        NAME(overrides?: CallOverrides): Promise<[string]>;
        VERSION(overrides?: CallOverrides): Promise<[string]>;
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        domainSeparator(overrides?: CallOverrides): Promise<[string]>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getModules(overrides?: CallOverrides): Promise<[string[]]>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        getOwners(overrides?: CallOverrides): Promise<[string[]]>;
        getThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        nonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFallbackHandler(handler: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
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
    NAME(overrides?: CallOverrides): Promise<string>;
    VERSION(overrides?: CallOverrides): Promise<string>;
    addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    domainSeparator(overrides?: CallOverrides): Promise<string>;
    enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getModules(overrides?: CallOverrides): Promise<string[]>;
    getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
        array: string[];
        next: string;
    }>;
    getOwners(overrides?: CallOverrides): Promise<string[]>;
    getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    nonce(overrides?: CallOverrides): Promise<BigNumber>;
    removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFallbackHandler(handler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
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
        NAME(overrides?: CallOverrides): Promise<string>;
        VERSION(overrides?: CallOverrides): Promise<string>;
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        domainSeparator(overrides?: CallOverrides): Promise<string>;
        enableModule(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        getModules(overrides?: CallOverrides): Promise<string[]>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        getOwners(overrides?: CallOverrides): Promise<string[]>;
        getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFallbackHandler(handler: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
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
        "AddedOwner(address)"(owner?: null): AddedOwnerEventFilter;
        AddedOwner(owner?: null): AddedOwnerEventFilter;
        "ApproveHash(bytes32,address)"(approvedHash?: PromiseOrValue<BytesLike> | null, owner?: PromiseOrValue<string> | null): ApproveHashEventFilter;
        ApproveHash(approvedHash?: PromiseOrValue<BytesLike> | null, owner?: PromiseOrValue<string> | null): ApproveHashEventFilter;
        "ChangedMasterCopy(address)"(masterCopy?: null): ChangedMasterCopyEventFilter;
        ChangedMasterCopy(masterCopy?: null): ChangedMasterCopyEventFilter;
        "ChangedThreshold(uint256)"(threshold?: null): ChangedThresholdEventFilter;
        ChangedThreshold(threshold?: null): ChangedThresholdEventFilter;
        "DisabledModule(address)"(module?: null): DisabledModuleEventFilter;
        DisabledModule(module?: null): DisabledModuleEventFilter;
        "EnabledModule(address)"(module?: null): EnabledModuleEventFilter;
        EnabledModule(module?: null): EnabledModuleEventFilter;
        "ExecutionFailure(bytes32,uint256)"(txHash?: null, payment?: null): ExecutionFailureEventFilter;
        ExecutionFailure(txHash?: null, payment?: null): ExecutionFailureEventFilter;
        "ExecutionFromModuleFailure(address)"(module?: PromiseOrValue<string> | null): ExecutionFromModuleFailureEventFilter;
        ExecutionFromModuleFailure(module?: PromiseOrValue<string> | null): ExecutionFromModuleFailureEventFilter;
        "ExecutionFromModuleSuccess(address)"(module?: PromiseOrValue<string> | null): ExecutionFromModuleSuccessEventFilter;
        ExecutionFromModuleSuccess(module?: PromiseOrValue<string> | null): ExecutionFromModuleSuccessEventFilter;
        "ExecutionSuccess(bytes32,uint256)"(txHash?: null, payment?: null): ExecutionSuccessEventFilter;
        ExecutionSuccess(txHash?: null, payment?: null): ExecutionSuccessEventFilter;
        "RemovedOwner(address)"(owner?: null): RemovedOwnerEventFilter;
        RemovedOwner(owner?: null): RemovedOwnerEventFilter;
        "SignMsg(bytes32)"(msgHash?: PromiseOrValue<BytesLike> | null): SignMsgEventFilter;
        SignMsg(msgHash?: PromiseOrValue<BytesLike> | null): SignMsgEventFilter;
    };
    estimateGas: {
        NAME(overrides?: CallOverrides): Promise<BigNumber>;
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getModules(overrides?: CallOverrides): Promise<BigNumber>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOwners(overrides?: CallOverrides): Promise<BigNumber>;
        getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFallbackHandler(handler: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
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
        NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeMasterCopy(_masterCopy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getModules(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFallbackHandler(handler: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
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
