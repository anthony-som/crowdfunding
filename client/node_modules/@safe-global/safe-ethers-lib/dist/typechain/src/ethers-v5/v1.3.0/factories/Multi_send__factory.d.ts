import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Multi_send, Multi_sendInterface } from "../Multi_send";
export declare class Multi_send__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "transactions";
            readonly type: "bytes";
        }];
        readonly name: "multiSend";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): Multi_sendInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Multi_send;
}
