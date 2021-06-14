export const str2number = (value: number | string): number => {
  return typeof value === 'number'
    ? value
    : !Number.isNaN(parseFloat(value))
      ? parseFloat(value)
      : 0;
};


export const suffix = (value: number, symbol: string, precision = 2): string => {
  return `${value.toFixed(precision)}${symbol}`;
};
