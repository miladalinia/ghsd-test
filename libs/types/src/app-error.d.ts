export type Error = {
    txt: string;
    type: 'success' | 'info' | 'warning' | 'error' | undefined;
    shouldTranslate: boolean;
    subErrors?: SubErrorType[];
};
export type SubErrorType = {
    object: string | null;
    field: string | null;
    code: string;
    message: string | null;
    localizedMessage: string | null;
};
//# sourceMappingURL=app-error.d.ts.map