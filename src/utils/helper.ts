/**
 * @param input ex: 1일, 3주, 3달, 2년
 * @returns
 */
export const validateDateRange = (input: string | undefined): boolean => {
  if (!input) return true;
  const regex = /^(\d+)(일|주|개월|년)$/;
  const match = input?.match(regex);

  if (!match) {
    return false; // 유효한 형식이 아님
  }

  const value = parseInt(match[1]);
  const unit = match[2];

  if (isNaN(value) || value <= 0) {
    return false; // 양수가 아닌 값
  }

  switch (unit) {
    case '일':
      return value >= 1 && value <= 6;
    case '주':
      return value >= 1 && value <= 3;
    case '개월':
      return value >= 1 && value <= 11;
    case '년':
      return true; // 년은 숫자 제한 없음
    default:
      return false; // 유효한 단위가 아님
  }
};
