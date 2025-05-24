import { useLocalStorage } from '@ghased-portal/hooks';
import { Direction, Locale, LocalStorageKey, ThemeID } from '@ghased-portal/types';

const defaultConfig = {
  themeId: ThemeID.LIGHT,
  direction: Direction.RTL,
  locale: Locale.FA_IR,
};

const ConfigLoader = () => {
  const [config] = useLocalStorage(LocalStorageKey.CONFIG, defaultConfig);

  // useEffect(() => {
  //   // const config = { /* Your configuration */ };
  //   // localStorage.setItem(LocalStorageKey.CONFIG, JSON.stringify(defaultConfig));
  // }, []);

  return null;
};

export default ConfigLoader;
