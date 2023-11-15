import { GatewayUrls, IStorageDownloader, MemoryStorage } from "../../types/download";
/**
 * @internal
 */
export declare class MockDownloader implements IStorageDownloader {
    gatewayUrls: GatewayUrls;
    storage: MemoryStorage;
    constructor(storage: MemoryStorage);
    download(url: string): Promise<Response>;
}
//# sourceMappingURL=mock-downloader.d.ts.map