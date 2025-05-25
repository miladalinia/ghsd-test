import { Locale } from '@ghased-portal/types';
export declare const RE_DIGIT: RegExp;
export declare function addThousandSeparator(value: number | string, locale?: Locale | ''): string;
export declare function removeMinusSign(value: any): any;
export declare function removeLettersFromNumber(value: string): string;
export declare const removeSeprator: (value: any) => any;
export declare function removeCommas(value: number): number;
export declare function rialToToman(value: string | number): number;
export declare function cardNumberSeprator(value: string): string;
export declare function isNumber(value: string): boolean;
export declare function isNumberOrEmpty(value: string): boolean;
export declare function isNumberComma(value: string): boolean;
export declare function getValueOrDash(value: any, emptyValue?: string): any;
export declare function isEmptyObject(obj: Record<string, unknown>): boolean;
export declare function deepCopy(obj: any): any;
export declare const loadHTMLImageElement: (src: string, width?: number, height?: number) => HTMLImageElement;
export declare const isObject: (obj: any) => any;
export declare function deepMerge(target: any, source: any): any;
export declare function uuid(key?: string | number): string;
export declare function mergeObjects(obj1: any, obj2: any): any;
export declare const getValueByKey: (targetEnum: object, key: string) => null;
export declare const clearLocalStorageExceptForKey: (keyToKeep: string) => void;
export declare const clearAllCookies: () => void;
export declare const readFromCookieByKey: (key: string) => string | null;
export declare const debounceFn: (callback: any, delay: any) => (...args: any[]) => void;
export declare function convertToEnglishNumbers(text: any): any;
export declare const handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
export declare const educationalVideos: {
    id: number;
    imgSrc: string;
    title: string;
    pdfLink: string;
    pdfText: string;
    videoSrc: string;
}[];
export declare const tabs: {
    id: number;
    title: string;
}[];
export declare const tabsData: ({
    id: number;
    title: string;
} | {
    id: string;
    title: string;
})[];
//# sourceMappingURL=util.d.ts.map