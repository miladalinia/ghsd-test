import { getValueOrDash } from '@ghased-portal/utils';

export const getSpecifiedSignatories = (signatories: any = null, isMain) => {
  let names = '';
  signatories?.filter((sign) => sign.main === isMain).forEach((sign) => (names += sign.name + '- '));
  return getValueOrDash(names.substring(0, names.lastIndexOf('-')));
};

export const currencyConvertor = (t, item) => {
  switch (item) {
    case 'USD':
      return `${t('currency.us_dollar')} - ${item}`;
    case 'EUR':
      return `${t('currency.euro')} - ${item}`;

    case 'GBP':
      return `${t('currency.pound')} - ${item}`;

    case 'RIAL':
      return t('common.rial');

    default:
      return item;
  }
};
