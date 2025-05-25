import { Service, ThemeID } from '@ghased-portal/types';

export const getBadgeColor = (levelType: string) => {
  switch (levelType) {
    case 'INFO':
    case 'HINT':
      return 'primary';
    case 'WARNING':
      return 'warning';
    case 'SUCCESS':
      return 'success';
    case 'DANGER':
      return 'error';
    case 'OTHER':
    default:
      return 'textTerritory';
  }
};

export const getHoverColor = (isHover: boolean, theme) => {
  if (theme.id === ThemeID.DARK && isHover) {
    return theme.onPrimary;
  } else if (theme.id === ThemeID.LIGHT && isHover) {
    return theme.surface;
  }
};

export const staticServices: Service[] = [
  {
    order: 1,
    title: 'card_service',
    description: 'تامین وجه تنخواه کارت',
    serviceName: 'FUND-CARD-CHARGE',
    serviceDescription: 'paying_of_the_card',
    url: '/fund-card-charge',
  },
  {
    order: 2,
    title: 'money_transfer',
    description: 'ثبت درخواست انتقال پول',
    serviceName: 'MONEY-TRANSFER',
    serviceDescription: 'register_money_transfer_request',
    url: '/single-money-transfer',
  },
  {
    order: 3,
    title: 'invoice',
    description: 'گزارشات تحلیلی حساب ها',
    serviceName: 'PUBLIC-REPORTS',
    serviceDescription: 'inquiry_of_account_information',
    url: '/invoice-report',
  },
  {
    order: 4,
    title: 'analytical_report',
    description: 'گزارشات تحلیلی حساب ها',
    serviceName: 'BUSINESS-INTELLIGENCE-REPORT',
    serviceDescription: 'account_analytical_report',
    url: '/account-analysis-report',
  },
  {
    order: 5,
    title: 'sayaad_cheque',
    description: 'عملیات مربوط به چک',
    serviceName: 'CHEQUE-PICHAK',
    serviceDescription: 'operation_of_cheque',
    url: '/pichak-issuance-registration',
  },
  {
    order: 6,
    title: 'bill_payment',
    description: 'درخواست پرداخت قبض',
    serviceName: 'BILLING',
    serviceDescription: 'bill_payment_request',
    url: '/bill-payment-request',
  },
  {
    order: 7,
    title: 'Signed_cartable',
    description: 'درخواست‌های درانتظار تایید',
    serviceName: 'CARTABLE',
    serviceDescription: 'all_request_pending_approval',
    url: '/cartable',
  },
];

export function allowedServices(menu: any[]): Service[] {
  if (!menu || menu.length === 0) return [];

  const serviceMap = new Map(staticServices.map((s) => [s.url, s]));
  const servicesSet = new Set<string>();
  const services: Service[] = [];

  function searchMenu(items: any[]) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const { v3_href } = item;

      if (!servicesSet.has(v3_href) && serviceMap.has(v3_href)) {
        const matchingService = serviceMap.get(v3_href)!;
        services.push(matchingService);
        servicesSet.add(v3_href); // Avoid duplicate entries
      }

      if (Array.isArray(item.children)) {
        searchMenu(item.children);
      }
    }
  }

  searchMenu(menu);

  // Sort services by order before returning
  return services.sort((a, b) => a.order - b.order);
}
