import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Proxy_factory, Proxy_factoryInterface } from "../Proxy_factory";
export declare class Proxy_factory__factory {
    static readonly abi: readonly [{
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_mastercopy";
            readonly type: "address";
        }, {
            readonly name: "initializer";
            readonly type: "bytes";
        }, {
            readonly name: "saltNonce";
            readonly type: "uint256";
        }];
        readonly name: "createProxyWithNonce";
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "proxyCreationCode";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly payable: false;
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "masterCopy";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "createProxy";
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "proxyRuntimeCode";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly payable: false;
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly name: "ProxyCreation";
        readonly type: "event";
    }];
    static createInterface(): Proxy_factoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Proxy_factory;
}
