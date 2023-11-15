import { CompilerOutputSelection, ZkSolcConfig } from './types';
import { SolcConfig } from 'hardhat/types';
export declare function filterSupportedOutputSelections(outputSelection: CompilerOutputSelection, zkCompilerVersion: string): CompilerOutputSelection;
export declare function updateCompilerConf(compiler: SolcConfig, zksolc: ZkSolcConfig): void;
export declare function zeroxlify(hex: string): string;
export declare function getZksolcPath(version: string, salt?: string): Promise<string>;
export declare function isURL(url: string): boolean;
export declare function sha1(str: string): string;
export declare function saltFromUrl(url: string): string;
export declare function getZksolcUrl(repo: string, version: string): string;
export declare function pluralize(n: number, singular: string, plural?: string): string;
export declare function getVersionComponents(version: string): number[];
export declare function generateSolcJSExecutableCode(solcJsPath: string, workingDir: string): string;
//# sourceMappingURL=utils.d.ts.map