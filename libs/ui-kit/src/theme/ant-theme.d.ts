import { ITheme } from '@ghased-portal/types';
declare const getAntTheme: (themeBase: ITheme, antTheme: any) => {
    token: {
        fontFamily: string;
        colorPrimary: string;
        colorBgContainer: string;
        colorBgLayout: string;
    };
    algorithm: any;
    components: {
        Tree: {
            nodeSelectedBg: string;
        };
        TreeSelect: {
            nodeSelectedBg: string;
        };
        Modal: {
            contentBg: string;
            headerBg: string;
            footerBg: string;
        };
    };
};
export declare const getOldAntTheme: (themeBase: ITheme) => {
    token: {
        colorPrimary: string;
    };
};
export default getAntTheme;
//# sourceMappingURL=ant-theme.d.ts.map