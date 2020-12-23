export const serialize = (obj: any): string => {
  let str: any = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p) && obj[p]) {
      str = [...str, encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])];
    }
  }
  return str.join('&');
};
