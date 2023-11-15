"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSolcJSExecutableCode = exports.getVersionComponents = exports.pluralize = exports.getZksolcUrl = exports.saltFromUrl = exports.sha1 = exports.isURL = exports.getZksolcPath = exports.zeroxlify = exports.updateCompilerConf = exports.filterSupportedOutputSelections = void 0;
const global_dir_1 = require("hardhat/internal/util/global-dir");
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const crypto_1 = __importDefault(require("crypto"));
function filterSupportedOutputSelections(outputSelection, zkCompilerVersion) {
    const filteredOutputSelection = {};
    const versionComponents = getVersionComponents(zkCompilerVersion);
    let supportedOutputSelections;
    switch (true) {
        case versionComponents[0] <= 1 && versionComponents[1] <= 3 && versionComponents[2] <= 5:
            supportedOutputSelections = constants_1.ZKSOLC_COMPILERS_SELECTOR_MAP['1.3.5'];
            break;
        default:
            supportedOutputSelections = [...constants_1.ZKSOLC_COMPILERS_SELECTOR_MAP['1.3.5'], 'metadata', 'userdoc', 'devdoc'];
            break;
    }
    for (const [file, contractSelection] of Object.entries(outputSelection)) {
        filteredOutputSelection[file] = {};
        for (const [contract, outputs] of Object.entries(contractSelection)) {
            filteredOutputSelection[file][contract] = outputs.filter((output) => supportedOutputSelections.includes(output));
        }
    }
    return filteredOutputSelection;
}
exports.filterSupportedOutputSelections = filterSupportedOutputSelections;
function updateCompilerConf(compiler, zksolc) {
    const [major, minor] = getVersionComponents(compiler.version);
    if (major === 0 && minor < 8 && zksolc.settings.forceEvmla) {
        console.warn('zksolc solidity compiler versions < 0.8 work with forceEvmla enabled by default');
    }
    let settings = compiler.settings || {};
    // Override the default solc optimizer settings with zksolc optimizer settings.
    compiler.settings = Object.assign(Object.assign({}, settings), { optimizer: Object.assign({}, zksolc.settings.optimizer) });
    // Remove metadata settings from solidity settings.
    delete compiler.settings.metadata;
    // Override the solc metadata settings with zksolc metadata settings.
    if (zksolc.settings.metadata) {
        compiler.settings.metadata = Object.assign({}, zksolc.settings.metadata);
    }
    // zkSolc supports only a subset of solc output selections
    compiler.settings.outputSelection = filterSupportedOutputSelections(compiler.settings.outputSelection, zksolc.version);
}
exports.updateCompilerConf = updateCompilerConf;
function zeroxlify(hex) {
    hex = hex.toLowerCase();
    return hex.slice(0, 2) === '0x' ? hex : `0x${hex}`;
}
exports.zeroxlify = zeroxlify;
async function getZksolcPath(version, salt = '') {
    return path_1.default.join(await (0, global_dir_1.getCompilersDir)(), 'zksolc', `zksolc-v${version}${salt ? '-' : ''}${salt}`);
}
exports.getZksolcPath = getZksolcPath;
function isURL(url) {
    try {
        const locator = new URL(url);
        return locator.protocol === 'http:' || locator.protocol === 'https:';
    }
    catch (e) {
        return false;
    }
}
exports.isURL = isURL;
function sha1(str) {
    return crypto_1.default.createHash('sha1').update(str).digest('hex');
}
exports.sha1 = sha1;
function saltFromUrl(url) {
    return sha1(url);
}
exports.saltFromUrl = saltFromUrl;
function getZksolcUrl(repo, version) {
    // @ts-ignore
    const platform = { darwin: 'macosx', linux: 'linux', win32: 'windows' }[process.platform];
    // @ts-ignore
    const toolchain = { linux: '-musl', win32: '-gnu', darwin: '' }[process.platform];
    const arch = process.arch == 'x64' ? 'amd64' : process.arch;
    const ext = process.platform == 'win32' ? '.exe' : '';
    return `${repo}/raw/main/${platform}-${arch}/zksolc-${platform}-${arch}${toolchain}-v${version}${ext}`;
}
exports.getZksolcUrl = getZksolcUrl;
function pluralize(n, singular, plural) {
    if (n === 1) {
        return singular;
    }
    if (plural !== undefined) {
        return plural;
    }
    return `${singular}s`;
}
exports.pluralize = pluralize;
function getVersionComponents(version) {
    const versionComponents = version.split('.');
    return [
        parseInt(versionComponents[0]),
        parseInt(versionComponents[1]),
        parseInt(versionComponents[2])
    ];
}
exports.getVersionComponents = getVersionComponents;
// Generate SolcJS executable code
function generateSolcJSExecutableCode(solcJsPath, workingDir) {
    return constants_1.SOLCJS_EXECUTABLE_CODE
        .replace(/SOLCJS_PATH/g, solcJsPath)
        .replace(/WORKING_DIR/g, workingDir);
}
exports.generateSolcJSExecutableCode = generateSolcJSExecutableCode;
//# sourceMappingURL=utils.js.map