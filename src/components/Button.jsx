/*
파일 역할: 재사용 가능한 UI 컴포넌트입니다.
이 컴포넌트는 앱의 여러 페이지나 다른 컴포넌트에서 활용될 수 있는 작은 UI 요소를 정의합니다.
예를 들어, 버튼, 입력 필드, 카드, 모달 등이 될 수 있습니다.

작성 코드:
- 컴포넌트의 props(속성)를 정의하고 구조 분해 할당으로 받습니다.
- HTML 요소와 JSX를 사용하여 컴포넌트의 UI를 구성합니다.
- `onClick`과 같은 이벤트 핸들러를 정의하여 사용자 상호작용에 응답합니다.
- 컴포넌트 관련 스타일은 `.module.css` 파일을 만들거나 Styled Components 등을 사용할 수 있습니다.
*/
import React from 'react';

const Button = ({ onClick, children, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} style={{
      padding: '10px 15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: '#f0f0f0',
      cursor: 'pointer',
    }}>
      {children}
    </button>
  );
};

export default Button;
