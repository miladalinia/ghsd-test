import { addThousandSeparator } from '@ghased-portal/utils';

export const filterAccounts = (list, searchValue) =>
  list.filter((item) => {
    const { accountNumber, organizationUnitName } = item;
    return (
      accountNumber?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
      organizationUnitName?.toLowerCase()?.includes(searchValue.toLowerCase())
    );
  });

export const filterOption = (obj, searchValue) => {
  const filteredObj: any[] = [];
  obj.forEach((item) => {
    const options = item.options.filter((option) => option.value.toLowerCase().includes(searchValue.toLowerCase()));
    if (options.length > 0) {
      const filteredItem = {
        label: item.label,
        options: options,
      };
      filteredObj.push(filteredItem);
    }
  });
  return filteredObj;
};

export const mapAccount = (account) => {
  const {
    id,
    recent,
    favorite,
    accountNumber,
    accountCategoryName,
    accountCategoryId,
    organizationUnitFullName,
    organizationUnitId,
    organizationUnitName,
  } = account;

  const item = {
    id,
    recent,
    fav: !!favorite,
    accountNumber,
    organizationUnitFullName,
    accountCategoryName,
    accountCategoryId,
    balance: addThousandSeparator(account.balance ?? 0),
    organizationUnitId,
    organizationUnitName,
  };
  return item;
};
