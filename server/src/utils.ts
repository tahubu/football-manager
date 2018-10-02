
export function isNumeric(v) {
  return !isNaN(parseFloat(v)) && isFinite(v);
}
