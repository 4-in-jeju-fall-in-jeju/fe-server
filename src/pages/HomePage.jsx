/*
파일 역할: 웹 애플리케이션의 특정 페이지를 나타내는 컴포넌트입니다.
이 컴포넌트는 주로 라우팅(React Router 등)에 연결되어 특정 URL 경로에 따라 렌더링됩니다.
여러 `components` 폴더의 UI 컴포넌트들을 조합하여 하나의 완전한 페이지를 구성합니다.

작성 코드:
- 페이지에 필요한 UI 컴포넌트(예: Header, Button, Card)를 임포트하여 사용합니다.
- `useEffect` 등을 사용하여 페이지 로드 시 데이터를 가져오는(fetch) 등의 작업을 수행할 수 있습니다.
- 페이지의 레이아웃과 콘텐츠를 정의합니다.
*/
import React from 'react';
import Button from '../components/Button.jsx'; // 예시 컴포넌트 임포트

const HomePage = () => {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };

  return (
    <div>
      <h1>홈 페이지</h1>
      <p>환영합니다! 이 곳은 애플리케이션의 메인 페이지입니다.</p>
      <Button onClick={handleClick}>클릭하세요</Button>
    </div>
  );
};

export default HomePage;
