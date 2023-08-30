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

/**
 * window.scrollTo() 메서드에 속도 적용
 * @param y Y위치 값으로 스크롤 이동
 * @param duration 해당 위치로 이동하는 총 시간
 */
export const durationScrollTo = (y: number, duration = 10) => {
  const stepY = (y - window.scrollY) / duration;
  const currentY = window.scrollY;
  const startTime = new Date().getTime();

  const scrollInterval = setInterval(() => {
    const now = new Date().getTime() - startTime;

    window.scrollTo({ top: currentY + stepY * now });

    if (duration <= now) {
      clearInterval(scrollInterval);
    }
  }, 1);
};
