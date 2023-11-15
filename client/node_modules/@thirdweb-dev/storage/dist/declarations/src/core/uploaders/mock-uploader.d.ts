import { FileOrBufferOrString } from "../../types/data";
import { MemoryStorage } from "../../types/download";
import { IpfsUploadBatchOptions, IStorageUploader } from "../../types/upload";
/**
 * @internal
 */
export declare class MockUploader implements IStorageUploader<IpfsUploadBatchOptions> {
    storage: MemoryStorage;
    constructor(storage: MemoryStorage);
    uploadBatch(data: FileOrBufferOrString[], options?: IpfsUploadBatchOptions | undefined): Promise<string[]>;
}
//# sourceMappingURL=mock-uploader.d.ts.map