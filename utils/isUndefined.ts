const isUndefined = <T extends object | string | number>(
  value: T | undefined
): value is undefined => typeof value === "undefined";

export default isUndefined;
