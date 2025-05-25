export enum Services {
  BatchAchRequest = 'ثبت درخواست واریز دسته‌ای',
  BatchAchHistory = 'لیست درخواست های واریز دسته‌ای',
  Cartable = 'درخواست‌های جاری',
}

export const servicesData = [
  {
    title: Services.BatchAchRequest,
    href: '/batch-ach-request?step=submit',
  },
  {
    title: Services.BatchAchHistory,
    href: '/batch-ach-history',
  },
  {
    title: Services.Cartable,
    href: '/cartable',
  },
];
