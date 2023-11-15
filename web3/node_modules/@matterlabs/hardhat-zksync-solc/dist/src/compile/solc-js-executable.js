#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._loadCompilerSources = void 0;
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Returns true if the package exists, false otherwise
function packageExists(packagePath) {
    try {
        require.resolve(packagePath);
        return true;
    }
    catch (err) {
        return false;
    }
}
// Returns the path to the package, or undefined if it doesn't exist
function findPackagePath(packageName, workingDir) {
    let currentDir = workingDir;
    let packagePath = currentDir + '/node_modules/' + packageName;
    while (currentDir !== '/') {
        if (packageExists(packagePath)) {
            return packagePath;
        }
        currentDir = path_1.default.dirname(currentDir);
        packagePath = currentDir + '/node_modules/' + packageName;
    }
    return undefined;
}
// Returns a solc-js wrapper
async function getSolc(_pathToSolcJs, workingDir) {
    // 
    const packagePath = findPackagePath('solc/wrapper', workingDir);
    // @ts-ignore
    const { default: solcWrapper } = await Promise.resolve().then(() => __importStar(require(packagePath)));
    const _loadedSolc = solcWrapper(_loadCompilerSources(_pathToSolcJs));
    return _loadedSolc;
}
function _loadCompilerSources(compilerPath) {
    const Module = module.constructor;
    // if Hardhat is bundled (for example, in the vscode extension), then
    // Module._extenions might be undefined. In that case, we just use a plain
    // require.
    if (Module._extensions === undefined) {
        return require(compilerPath);
    }
    const previousHook = Module._extensions[".js"];
    Module._extensions[".js"] = function (module, filename) {
        const content = fs_1.default.readFileSync(filename, "utf8");
        Object.getPrototypeOf(module)._compile.call(module, content, filename);
    };
    const loadedSolc = require(compilerPath);
    Module._extensions[".js"] = previousHook;
    return loadedSolc;
}
exports._loadCompilerSources = _loadCompilerSources;
// Read stdin into a string
async function readStdin() {
    return new Promise(resolve => {
        let inputString = '';
        process.stdin.on('data', chunk => inputString += chunk);
        process.stdin.on('end', () => resolve(inputString));
    });
}
(async function () {
    // Strings that need to be replaced by the caller when generating the file
    const solcJsPath = 'SOLCJS_PATH';
    const workingDir = 'WORKING_DIR';
    // Wrapped solc-js compiler
    const solcJsCompiler = await getSolc(solcJsPath, workingDir);
    if (process.argv.includes("--version")) {
        const version = await solcJsCompiler.version();
        process.stdout.write("solc, the solidity compiler commandline interface" + os_1.default.EOL);
        process.stdout.write("Version: " + version + os_1.default.EOL);
    }
    else {
        const input = await readStdin();
        const jsonOutput = solcJsCompiler.compile(input);
        process.stdout.write(jsonOutput);
    }
})();
//# sourceMappingURL=solc-js-executable.js.map