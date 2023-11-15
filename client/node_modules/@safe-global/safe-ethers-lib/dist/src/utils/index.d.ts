import { TypedDataSigner } from '@ethersproject/abstract-signer';
import { ContractTransaction } from '@ethersproject/contracts';
import { EthersTransactionOptions, EthersTransactionResult } from '../types';
export declare function sameString(str1: string, str2: string): boolean;
export declare function toTxResult(transactionResponse: ContractTransaction, options?: EthersTransactionOptions): EthersTransactionResult;
export declare function isTypedDataSigner(signer: any): signer is TypedDataSigner;
