import type localForage from 'localforage';
import type { ViewController } from './view-controller';
import type { SDKBase } from './sdk';
import type { WithExtensions } from '../modules/base-extension';
declare type ConstructorOf<C> = {
    new (...args: any[]): C;
};
/**
 * A structure containing details about the current environment.
 * This is guaranteed to be populated before the SDK is instantiated.
 */
export interface SDKEnvironment {
    sdkName: 'magic-sdk' | '@magic-sdk/react-native' | '@magic-sdk/react-native-bare' | '@magic-sdk/react-native-expo';
    version: string;
    platform: 'web' | 'react-native';
    defaultEndpoint: string;
    ViewController: ConstructorOf<ViewController>;
    configureStorage: () => Promise<typeof localForage>;
    bundleId?: string | null;
}
export declare const SDKEnvironment: SDKEnvironment;
export declare function createSDK<SDK extends SDKBase>(SDKBaseCtor: ConstructorOf<SDK>, environment: SDKEnvironment): WithExtensions<SDK>;
export declare const sdkNameToEnvName: {
    'magic-sdk': "magic-sdk";
    '@magic-sdk/react-native': "magic-sdk-rn";
    '@magic-sdk/react-native-bare': "magic-sdk-rn-bare";
    '@magic-sdk/react-native-expo': "magic-sdk-rn-expo";
};
export {};
