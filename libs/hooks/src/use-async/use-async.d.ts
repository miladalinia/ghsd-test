import { Nullable, SubErrorType } from '@ghased-portal/types';
type AsyncFunction = () => Promise<any>;
type Error = {
    txt: string;
    type: 'success' | 'info' | 'warning' | 'error' | undefined;
    shouldTranslate: boolean;
    subErrors?: SubErrorType[];
};
type UseAsyncResult<T> = {
    asyncState: {
        data: T | null;
        loading: boolean;
        settled: boolean;
        error: Nullable<Error>;
    };
    execute: (asyncFunction?: AsyncFunction | undefined) => Promise<any>;
    cancel: () => void;
    reset: () => void;
};
declare const useAsync: <T = any>(asyncFunction?: Nullable<AsyncFunction>, manual?: boolean) => UseAsyncResult<T>;
export default useAsync;
//# sourceMappingURL=use-async.d.ts.map