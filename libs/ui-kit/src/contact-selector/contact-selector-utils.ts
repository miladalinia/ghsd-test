export const filterContacts = (list, searchValue) =>
  list.filter((item) => {
    const { destAccountName, destAccountNumber } = item;
    return (
      destAccountName.toLowerCase().includes(searchValue.toLowerCase()) ||
      destAccountNumber.toLowerCase().includes(searchValue.toLowerCase())
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
