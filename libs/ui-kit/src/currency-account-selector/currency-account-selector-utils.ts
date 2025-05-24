export const mapToAutoCompleteOptions = (
  items: {
    id: string;
    accountNumber: number;
    branchName: string;
    accountTypeDescription: string;
    currencyCodeDescription: string;
    currency: string;
  }[]
) => {
  return items?.map((item) => {
    return {
      id: item.accountNumber,
      info: `${item.accountTypeDescription} - ${item.currencyCodeDescription}`,
      value: `${item.accountNumber} - ${item.accountTypeDescription} - ${item.currencyCodeDescription}`,
      label: `${item.accountNumber} - ${item.accountTypeDescription} - ${item.currencyCodeDescription}`,
      currencyName: item.currency,
    };
  });
};
