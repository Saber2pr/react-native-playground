export const parseInt = (val: any) =>
  /^\d+$/.test(val) ? Number(val).toFixed(0) : ''
