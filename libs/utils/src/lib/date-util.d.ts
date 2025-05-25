import { dayjs, Dayjs } from './dayjs-instance';
export declare function changeDayjsCalendar(locale?: string): void;
export declare function dateLocale(date?: string | number, locale?: string, defaultNow?: boolean): string | null;
export declare function timeLocale(date?: string | number, locale?: string, defaultNow?: boolean): string | null;
export declare function fullDateLocale(date?: string, locale?: string): string;
export declare function timeFromDate(date?: string, withSeconds?: boolean): string;
export declare function datetimeLocale(date?: string, locale?: string, withSeconds?: boolean, delimiter?: string): string;
export declare function toApiDate(date?: string, defaultNow?: boolean): string | null;
export declare function toApiFullDate(date?: string, time?: string, defaultNow?: boolean): string | null;
export declare function getTimeFromDayjs(date: Dayjs): string | null;
export declare const getTodayDate: (time?: string) => dayjs.Dayjs;
export declare const getLastMonth: (time?: string) => dayjs.Dayjs;
export declare const getLastWeek: (time?: string) => dayjs.Dayjs;
export declare const getYesterdayDate: (time?: string) => dayjs.Dayjs;
export declare const getLastMonthBeforeYesterday: (time?: string) => dayjs.Dayjs;
export declare const getLastWeekBeforeYesterday: (time?: string) => dayjs.Dayjs;
export declare const getLastDays: (days: number, time?: string) => dayjs.Dayjs;
export declare function toIsoStringWithoutTimezone(date: any): {
    date: string;
    time: string;
};
export declare const shouldDisableStartDate: (current: any, form: any, dateFieldName: string, disableAfterToday?: boolean) => any;
export declare const shouldDisableEndDate: (current: any, form: any, dateFieldName: string, disableAfterToday?: boolean) => any;
//# sourceMappingURL=date-util.d.ts.map