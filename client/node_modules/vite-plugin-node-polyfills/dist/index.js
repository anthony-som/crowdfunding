import { createRequire as n } from "node:module";
import p from "@rollup/plugin-inject";
import c from "node-stdlib-browser";
import { handleCircularDependancyWarning as u } from "node-stdlib-browser/helpers/rollup/plugin";
import f from "node-stdlib-browser/helpers/esbuild/plugin";
const B = (t = {}) => {
  const o = n(import.meta.url).resolve("node-stdlib-browser/helpers/esbuild/shim"), i = {
    protocolImports: !0,
    ...t
  };
  return {
    name: "vite-plugin-node-polyfills",
    config: (m, g) => {
      const l = Object.entries(c).reduce((e, [r, s]) => (!i.protocolImports && /^node:/.test(r) || (e[r] = s), e), {});
      return {
        build: {
          rollupOptions: {
            onwarn: (e, r) => {
              u(e, r);
            },
            plugins: [
              {
                ...p({
                  global: [o, "global"],
                  process: [o, "process"],
                  Buffer: [o, "Buffer"]
                })
              }
            ]
          }
        },
        optimizeDeps: {
          esbuildOptions: {
            define: {
              Buffer: "Buffer",
              global: "global",
              process: "process"
            },
            inject: [
              o
            ],
            plugins: [
              f(l),
              {
                name: "vite-plugin-node-polyfills-shims-resolver",
                setup(e) {
                  const r = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), s = new RegExp(`^${r}$`);
                  e.onResolve({ filter: s }, () => ({
                    external: !1,
                    path: o
                  }));
                }
              }
            ]
          }
        },
        resolve: {
          alias: {
            ...l
          }
        }
      };
    }
  };
};
export {
  B as nodePolyfills
};
//# sourceMappingURL=index.js.map
