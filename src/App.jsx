/*
파일 역할: React 애플리케이션의 최상위 컴포넌트입니다.
대부분의 다른 컴포넌트들이 이 `App` 컴포넌트의 자식으로 위치하거나, `App` 컴포넌트 안에서 호출됩니다.
주로 라우팅(페이지 이동) 로직이 여기에 포함되기도 하며, 전역적인 레이아웃을 정의합니다.

작성 코드:
- 필요한 컴포넌트(예: Header, Footer, 라우터)를 임포트하여 조합합니다.
- `useState`, `useEffect` 등의 React Hooks를 사용하여 상태 관리 및 사이드 이펙트를 처리할 수 있습니다.
- `<Router>` 컴포넌트 내부에 `<Routes>`와 `<Route>`를 정의하여 페이지 라우팅을 설정할 수 있습니다.
*/
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
