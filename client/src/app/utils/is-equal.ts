
export function isEqual(obj1, obj2): boolean {
  const keys1: Array<string> = Object.keys(obj1);
  const keys2: Array<string> = Object.keys(obj2);

  if (keys1.length !== keys2.length || keys1.sort().join(',') !== keys2.sort().join(',')) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key] && String(obj1[key]) !== String(obj2[key])) return false;
  }

  return true;
}
