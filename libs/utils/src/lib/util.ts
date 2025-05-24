import dayjs from 'dayjs';
import { storage } from './storage';
import { Locale } from '@ghased-portal/types';

export const RE_DIGIT = new RegExp(/^\d+$/);

export function addThousandSeparator(value: number | string, locale: Locale | '' = '') {
  let sign = false;

  if (+value < 0 && locale === 'fa-IR') {
    sign = true;
    value = removeMinusSign(value);
  }

  value = value
    ?.toString()
    ?.split(',')
    ?.join('')
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return sign ? `${value}-` : value;
}

export function removeMinusSign(value) {
  return value.toString().split('-');
}

export function removeLettersFromNumber(value: string) {
  return value?.replace(/\D/g, '');
}

export const removeSeprator = (value) => {
  if (value) {
    return value?.replace(/-/g, '');
  }
};

export function removeCommas(value: number): number {
  const stringValue = value.toString();
  const noCommaString = stringValue.replace(/,/g, '');
  return Number(noCommaString);
}

export function rialToToman(value: string | number) {
  try {
    const amount = +removeLettersFromNumber(value.toString());
    return Math.floor(amount / 10);
  } catch (e) {
    return 0;
  }
}

export function cardNumberSeprator(value: string) {
  return value?.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-');
}

export function isNumber(value: string): boolean {
  return /^\d+$/.test(value);
}

export function isNumberOrEmpty(value: string): boolean {
  return isNumber(value) || value?.trim() === '';
}

export function isNumberComma(value: string): boolean {
  return /^[0-9,,]*$/.test(value);
}

export function getValueOrDash(value: any, emptyValue?: string) {
  return value?.toString()?.trim()?.length > 0 ? value?.toString()?.trim() : emptyValue ?? ' - ';
}

export function isEmptyObject(obj: Record<string, unknown>) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
}

export function deepCopy(obj) {
  // console.log('deepCopy', obj);
  return JSON.parse(JSON.stringify(obj));
}
export const loadHTMLImageElement = (src: string, width = 20, height = 20) => {
  // if you get src form Image on next/image pass img.props.src.default.src
  const img = new Image(width, height);
  img.src = src;
  return img;
};
export const isObject = (obj: any) => obj && typeof obj === 'object';

export function deepMerge(target: any, source: any) {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = targetValue ?? sourceValue;
    }
  });

  return target;
}

export function uuid(key?: string | number) {
  const time = new Date().getTime();
  return `${key ?? 'xx'}-xxxxxxx-xxxx-xxx-yxxx-${time}`.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(20);
  });
}

export function mergeObjects(obj1: any, obj2: any) {
  const result: any = {};

  // Copy keys from obj1 to result
  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      result[key] = obj1[key];
    }
  }

  // Merge obj2 into result
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (typeof obj2[key] === 'object' && obj2[key] !== null) {
        result[key] = mergeObjects(result[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result;
}

export const getValueByKey = (targetEnum: object, key: string) => {
  let value = null;

  try {
    const indexOfS = Object.keys(targetEnum).indexOf(key as any);
    value = Object.values(targetEnum)[indexOfS];
  } catch (ex) {}
  return value;
};

export const clearLocalStorageExceptForKey = (keyToKeep: string): void => {
  try {
    // const keys = Object.keys(storage['_localStorageItems']);
    const keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (!key.endsWith(keyToKeep)) {
        localStorage.removeItem(key);
        // storage.clear();
      }
    }
  } catch (e) {}
};

export const clearAllCookies = (): void => {
  try {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      if (name !== 'XSRF-TOKEN') {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    }
  } catch (e) {}
};

export const readFromCookieByKey = (key: string) => {
  if (typeof window !== 'undefined') {
    return (
      document.cookie
        .split('; ')
        .find((row) => row.startsWith(key))
        ?.split('=')[1] || ''
    );
  } else {
    return null;
  }
};

export const debounceFn = (callback, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export function convertToEnglishNumbers(text) {
  const arabicPersianMap = {
    '٠': '0',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '۰': '0', // Add additional variants for Persian numerals
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  };

  return text.replace(/[٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹]/g, (match) => arabicPersianMap[match]);
}

export const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const form = event.currentTarget.closest('form');
    if (form) {
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.click();
      }
    }
  }
  if (
    event.key === 'Backspace' ||
    event.key === 'Delete' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight' ||
    // event.key === 'Enter' ||
    event.ctrlKey ||
    event.metaKey ||
    (event.ctrlKey && event.key === 'v') || // Allow paste using Ctrl+V
    (event.metaKey && event.key === 'v')
  ) {
    return;
  }
  const pattern = '[0-9۰-۹]';
  if (pattern && !new RegExp(pattern).test(event.key)) {
    event.preventDefault();
  }
};

export const educationalVideos = [
  {
    id: 1,
    imgSrc: '/media/slider/poster/svgs/general-introduction.svg',
    title: 'general_introduction',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/general-introduction.mp4',
  },
  // {
  //   id: 2,
  //   imgSrc: '/media/slider/poster/svgs/join-member.svg',
  //   title: 'join_member',
  //   pdfLink: '/#',
  //   pdfText: 'download_pdf_file_guide',
  //   videoSrc: '/media/slider/videos/join-member.mp4',
  // },
  {
    id: 3,
    imgSrc: '/media/slider/poster/svgs/basic-information.svg',
    title: 'basic_information',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/basic-information.mp4',
  },
  {
    id: 4,
    imgSrc: '/media/slider/poster/svgs/management-of-government-organizations.svg',
    title: 'management_organizations',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/management-of-government-organizations.mp4',
  },
  {
    id: 5,
    imgSrc: '/media/slider/poster/svgs/money-transfer.svg',
    title: 'money_transfer',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/money-transfer.mp4',
  },
  {
    id: 6,
    imgSrc: '/media/slider/poster/svgs/user-management.svg',
    title: 'user_management',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/user-management.mp4',
  },
  {
    id: 7,
    imgSrc: '/media/slider/poster/svgs/cheque-management.svg',
    title: 'cheque_management',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/cheque-management.mp4',
  },
  {
    id: 8,
    imgSrc: '/media/slider/poster/svgs/card-services.svg',
    title: 'card_services',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/card-services.mp4',
  },
  {
    id: 9,
    imgSrc: '/media/slider/poster/svgs/cartable.svg',
    title: 'cartable',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/cartable.mp4',
  },
  {
    id: 10,
    imgSrc: '/media/slider/poster/svgs/tafsili.svg',
    title: 'tafsili',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/detailed-report.mp4',
  },
  {
    id: 11,
    imgSrc: '/media/slider/poster/svgs/tahlily.svg',
    title: 'tahlili',
    pdfLink: '/#',
    pdfText: 'download_pdf_file_guide',
    videoSrc: '/media/slider/videos/analytical-report.mp4',
  },
];

export const tabs = educationalVideos.map((video) => {
  return {
    id: video.id,
    title: video.title,
  };
});

export const tabsData = [
  {
    id: 'all',
    title: 'all',
  },
  ...tabs,
  {
    id: 'other',
    title: 'other',
  },
];
