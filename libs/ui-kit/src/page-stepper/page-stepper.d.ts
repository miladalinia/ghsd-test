import { ReactNode } from 'react';
export type StepItemType = {
    id?: any;
    component?: ReactNode;
};
type PageStepperProps = {
    steps?: StepItemType[];
    active?: StepItemType['id'];
};
export declare const PageStepper: ({ steps, active }: PageStepperProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=page-stepper.d.ts.map