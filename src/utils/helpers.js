/*
파일 역할: 범용적으로 사용되는 헬퍼(Helper) 함수들을 모아두는 곳입니다.
특정 컴포넌트나 페이지에 종속되지 않고, 여러 곳에서 재사용될 수 있는 순수 함수들을 여기에 작성합니다.
예를 들어, 날짜 포맷팅, 문자열 처리, 유효성 검사, 숫자 계산 함수 등이 될 수 있습니다.

작성 코드:
- 독립적인 함수들을 `export` 키워드를 사용하여 외부에서 임포트하여 사용할 수 있도록 합니다.
- 함수들은 가능한 한 순수 함수(side effect가 없는 함수)로 작성하는 것이 좋습니다.
*/

// 예시: 날짜를 'YYYY-MM-DD' 형식으로 포맷팅하는 함수
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 예시: 이메일 유효성을 검사하는 함수
export const isValidEmail = (email) => {
  // 간단한 이메일 정규식
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};
