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
