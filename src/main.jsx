/*
파일 역할: React 애플리케이션의 메인 진입점입니다.
이 파일은 `index.html`에서 로드되며, React 애플리케이션을 DOM에 마운트합니다.
여기서 최상위 `App` 컴포넌트를 렌더링하고 전역 스타일시트를 임포트합니다.

작성 코드:
- `ReactDOM.createRoot`를 사용하여 React 앱을 `<div id="root"></div>` 요소에 연결합니다.
- `App` 컴포넌트를 임포트하여 `<App />`으로 렌더링합니다.
- `index.css`와 같은 전역 스타일시트를 임포트합니다.
- `<React.StrictMode>`는 개발 모드에서 잠재적인 문제를 감지하기 위해 사용됩니다.
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
