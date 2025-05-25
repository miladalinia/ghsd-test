import { IConfig } from '@ghased-portal/types';
type ConfigState = {
    config: IConfig;
};
export declare const updateConfig: import("@reduxjs/toolkit").ActionCreatorWithPayload<Partial<IConfig>, "config/updateConfig">, resetConfig: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"config/resetConfig">;
declare const _default: import("redux").Reducer<ConfigState>;
export default _default;
//# sourceMappingURL=config-slice.d.ts.map