import { Error } from '@ghased-portal/types';
export declare const ApiUtil: {
    downloadFile: (data: any, type: any, extension: any, preferredName?: any) => boolean;
    getFile: (serviceURL: string, params?: any, options?: any) => Promise<unknown>;
    encodeQueryData: (data: any) => string;
    getErrorMessage: (reason: any) => any;
};
export declare function handleError(reason: any): Error;
//# sourceMappingURL=api-util.d.ts.map