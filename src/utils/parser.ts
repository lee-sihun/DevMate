/**
 * @param str 는 PascalCase(ex: JavaScript)로 된 문자열을 전달 해 주세요
 * @returns
 */
export const pascalToKebab = (str: string) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // 소문자와 대문자 사이에 하이픈 추가
    .toLowerCase(); // 모든 문자를 소문자로 변환
};

/**
 * @param str 는 string이나 number타입인 숫자를 전달해주면 2자리 이상이 될 경우 '99+'로 반환
 * @returns
 */
export const CntMaxView = (str: string | number) => {
  return String(str).length > 2 ? '99+' : str;
};

/**
 * @param str 는 url에서 \문자를 /로 바꿔줌
 * @returns
 */
export const urlParser = (str: string) => {
  return str.replace(/\\/g, '/');
};

/**
 * @param str 는 url에서 첫 글자가 uploads일 경우 / 맨 앞에 추가
 * @returns
 */
export const uploadsUrlParser = (str?: string) => {
  if (!str) return str;
  if (str.startsWith('uploads')) {
    return '/' + str;
  }
  return str;
};

/**
 * @param date 를 YY-MM-DD형식으로 바꿔줌
 * @returns
 */
export const formatDateToYYMMDD = (date: Date) => {
  const year = date.getFullYear().toString().substr(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};
