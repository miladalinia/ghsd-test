import React from 'react';
import { DatePickerProps as AntDatePickerProps } from 'antd';
import { dayjs } from '@ghased-portal/utils';
export type DatePickerProps = AntDatePickerProps & {
    defaultValueStr?: string;
    disabledPast?: boolean;
    disableFuture?: boolean;
};
export declare const DatePicker: {
    (props: DatePickerProps): import("react/jsx-runtime").JSX.Element;
    RangePicker: React.ForwardRefExoticComponent<Omit<import("rc-picker").RangePickerProps<dayjs.Dayjs>, "locale" | "classNames" | "styles" | "generateConfig" | "hideHeader"> & {
        locale?: import("antd/es/date-picker/generatePicker").PickerLocale;
        size?: import("antd/es/button").ButtonSize;
        placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
        bordered?: boolean;
        status?: import("antd/es/_util/statusUtils").InputStatus;
        variant?: import("antd/es/config-provider").Variant;
        dropdownClassName?: string;
        popupClassName?: string;
        rootClassName?: string;
        popupStyle?: React.CSSProperties;
        styles?: import("antd/es/date-picker/generatePicker/interface").PickerStyles;
        classNames?: import("antd/es/date-picker/generatePicker/interface").PickerClassNames;
    } & React.RefAttributes<import("rc-picker").PickerRef>>;
    TimePicker: (<ValueType = dayjs.Dayjs>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<dayjs.Dayjs, Omit<import("antd/es/date-picker/generatePicker/interface").GenericTimePickerProps<dayjs.Dayjs>, "picker">, ValueType>) => React.ReactElement) & {
        displayName?: string;
    };
    YearPicker: (<ValueType = dayjs.Dayjs>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<dayjs.Dayjs, Omit<import("antd/es/date-picker/generatePicker").PickerProps<dayjs.Dayjs>, "picker">, ValueType>) => React.ReactElement) & {
        displayName?: string;
    };
    WeekPicker: (<ValueType = dayjs.Dayjs>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<dayjs.Dayjs, Omit<import("antd/es/date-picker/generatePicker").PickerProps<dayjs.Dayjs>, "picker">, ValueType>) => React.ReactElement) & {
        displayName?: string;
    };
    MonthPicker: (<ValueType = dayjs.Dayjs>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<dayjs.Dayjs, Omit<import("antd/es/date-picker/generatePicker").PickerProps<dayjs.Dayjs>, "picker">, ValueType>) => React.ReactElement) & {
        displayName?: string;
    };
    QuarterPicker: (<ValueType = dayjs.Dayjs>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<dayjs.Dayjs, Omit<import("antd/es/date-picker/generatePicker").PickerProps<dayjs.Dayjs>, "picker">, ValueType>) => React.ReactElement) & {
        displayName?: string;
    };
};
//# sourceMappingURL=date-picker.d.ts.map