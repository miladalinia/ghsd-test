export declare const breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
type BreakpointKey = keyof typeof breakpoints;
export declare const cssVar: {
    appBarHeight: string;
    drawerWidth: string;
    drawerSideGap: string;
    verticalGap: string;
    mainContentMargin: string;
    radius: string;
    appbarZIndex: string;
    marginBt: string;
};
export declare const respondTo: {
    mobile: string;
    tablet: string;
    desktop: string;
    up: (breakpoint: BreakpointKey) => string;
    down: (breakpoint: BreakpointKey) => string;
    between: (firstBreakpoint: BreakpointKey, secondBreakpoint: BreakpointKey) => string;
};
export declare const withOpacity: (hex: string, opacity: number) => string;
export declare const getRelatedColor: (themeId: string, lightColor: string, darkColor: string) => string;
export declare const hideScrollbar: () => string;
export declare const boxShadowColor = "rgba(0, 0, 0, 0.2)";
export declare const boxShadow = "inset 0 0 3px 0 rgba(0, 0, 0, 0.2);";
export declare const boxShadowThin = "inset 0 0 1.5px 0 rgba(0, 0, 0, 0.2);";
export {};
//# sourceMappingURL=css-util.d.ts.map