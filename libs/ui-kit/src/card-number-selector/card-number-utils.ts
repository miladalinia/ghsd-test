export const mapToAutoCompleteOptions = (items: { pan: string; name: string }[]) => {
  const result: { label: string; value: string }[] = [];

  items.map((item) => {
    result.push({
      value: item.pan,
      label: item.name,
    });
  });

  return result;
};
