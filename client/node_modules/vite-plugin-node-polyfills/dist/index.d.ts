import type { Plugin } from 'vite';
interface PolyfillOptions {
    protocolImports: boolean;
}
/**
 * Returns a Vite plugin to polyfill Node's Core Modules for browser environments. Supports `node:` protocol imports.
 *
 * @example Use it in `vite.config.ts`
 *
 * ```ts
 * // vite.config.ts
 * import { defineConfig } from 'vite'
 * import { nodePolyfills } from 'vite-plugin-node-polyfills'
 *
 * export default defineConfig({
 *   plugins: [
 *     nodePolyfills({
 *       // Whether to polyfill `node:` protocol imports.
 *       protocolImports: true,
 *     }),
 *   ],
 * })
 * ```
 */
export declare const nodePolyfills: (options?: Partial<PolyfillOptions>) => Plugin;
export {};
