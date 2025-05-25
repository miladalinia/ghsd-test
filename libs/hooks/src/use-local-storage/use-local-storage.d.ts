import { Dispatch, SetStateAction } from 'react';
type ReturnType<T> = [T | null, Dispatch<SetStateAction<T | null>>, () => void];
declare const useLocalStorage: <T>(key: string, initialValue?: T) => ReturnType<T>;
export default useLocalStorage;
//# sourceMappingURL=use-local-storage.d.ts.map