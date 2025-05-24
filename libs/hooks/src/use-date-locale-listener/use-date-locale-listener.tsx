// libs/hooks/src/use-date-locale-listener/use-date-locale-listener.ts
import React, { useContext, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { dayjs } from '@ghased-portal/utils'; // Import from the utils library
import fa from 'dayjs/locale/fa';
import faMonthJson from './fa_month.json';

const useDateLocaleListener = () => {
  const { locale } = useContext(ConfigProvider.ConfigContext);

  // console.log('locale dayjs', locale?.locale, dayjs().calendar());

  useEffect(() => {
    if (locale?.locale === 'fa') {
      // dayjs['calendar']('jalali'); // Note the usage of dayjs() to create a new instance
      const faMonth = faMonthJson.monthNames.split('_');
      const months = {
        months: faMonth,
        monthsShort: faMonth,
      };
      dayjs.locale('fa', { ...fa, ...months });
    } else {
      // dayjs?.['calendar'](undefined); // Note the usage of dayjs() to create a new instance
      dayjs.locale('en');
    }
  }, [locale]);
};

export default useDateLocaleListener;
