/// <reference types="node" />
/**
 * @internal
 */
export type FileOrBuffer = File | Buffer | BufferOrStringWithName;
/**
 * @internal
 */
export type BufferOrStringWithName = {
    data: Buffer | string;
    name: string;
};
/**
 * @internal
 */
export type FileOrBufferOrString = FileOrBuffer | string;
//# sourceMappingURL=data.d.ts.map