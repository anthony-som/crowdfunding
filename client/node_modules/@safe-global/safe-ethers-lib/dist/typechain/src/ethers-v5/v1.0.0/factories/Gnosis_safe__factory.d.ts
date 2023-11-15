import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Gnosis_safe, Gnosis_safeInterface } from "../Gnosis_safe";
export declare class Gnosis_safe__factory {
    static readonly abi: readonly [{
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "_threshold";
            readonly type: "uint256";
        }];
        readonly name: "addOwnerWithThreshold";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR_TYPEHASH";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "isOwner";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
        }];
        readonly name: "execTransactionFromModule";
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "signedMessages";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "module";
            readonly type: "address";
        }];
        readonly name: "enableModule";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_threshold";
            readonly type: "uint256";
        }];
        readonly name: "changeThreshold";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }, {
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "approvedHashes";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_masterCopy";
            readonly type: "address";
        }];
        readonly name: "changeMasterCopy";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "SENTINEL_MODULES";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "SENTINEL_OWNERS";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "getOwners";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "NAME";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "nonce";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "getModules";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "SAFE_MSG_TYPEHASH";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "SAFE_TX_TYPEHASH";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "prevModule";
            readonly type: "address";
        }, {
            readonly name: "module";
            readonly type: "address";
        }];
        readonly name: "disableModule";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "prevOwner";
            readonly type: "address";
        }, {
            readonly name: "oldOwner";
            readonly type: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "swapOwner";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "getThreshold";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "domainSeparator";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "prevOwner";
            readonly type: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "_threshold";
            readonly type: "uint256";
        }];
        readonly name: "removeOwner";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "VERSION";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "ExecutionFailed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "AddedOwner";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "RemovedOwner";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "threshold";
            readonly type: "uint256";
        }];
        readonly name: "ChangedThreshold";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "module";
            readonly type: "address";
        }];
        readonly name: "EnabledModule";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "module";
            readonly type: "address";
        }];
        readonly name: "DisabledModule";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly name: "ContractCreation";
        readonly type: "event";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_owners";
            readonly type: "address[]";
        }, {
            readonly name: "_threshold";
            readonly type: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly name: "paymentToken";
            readonly type: "address";
        }, {
            readonly name: "payment";
            readonly type: "uint256";
        }, {
            readonly name: "paymentReceiver";
            readonly type: "address";
        }];
        readonly name: "setup";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
        }, {
            readonly name: "safeTxGas";
            readonly type: "uint256";
        }, {
            readonly name: "baseGas";
            readonly type: "uint256";
        }, {
            readonly name: "gasPrice";
            readonly type: "uint256";
        }, {
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly name: "refundReceiver";
            readonly type: "address";
        }, {
            readonly name: "signatures";
            readonly type: "bytes";
        }];
        readonly name: "execTransaction";
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
        }];
        readonly name: "requiredTxGas";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "hashToApprove";
            readonly type: "bytes32";
        }];
        readonly name: "approveHash";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "signMessage";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
        }, {
            readonly name: "_signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "getMessageHash";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
        }, {
            readonly name: "safeTxGas";
            readonly type: "uint256";
        }, {
            readonly name: "baseGas";
            readonly type: "uint256";
        }, {
            readonly name: "gasPrice";
            readonly type: "uint256";
        }, {
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly name: "refundReceiver";
            readonly type: "address";
        }, {
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "encodeTransactionData";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
        }, {
            readonly name: "safeTxGas";
            readonly type: "uint256";
        }, {
            readonly name: "baseGas";
            readonly type: "uint256";
        }, {
            readonly name: "gasPrice";
            readonly type: "uint256";
        }, {
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly name: "refundReceiver";
            readonly type: "address";
        }, {
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "getTransactionHash";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Gnosis_safeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Gnosis_safe;
}
