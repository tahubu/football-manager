
export function isNumeric(v) {
  return !isNaN(parseFloat(v)) && isFinite(v);
}

export function parseNumber(value) {
  if (typeof value !== 'string') return value;

  try {
    const parsedNumber = parseInt(value, 10);
    return parsedNumber;
  } catch (error) {
    return value;
  }
}
