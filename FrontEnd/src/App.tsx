import { Route, Routes, useNavigate } from 'react-router-dom';

import { css } from '@emotion/react';
import tw from 'twin.macro';

import TitlePage from './pages/MainPage';

const gameScreenCss = css([
  tw`w-h-full flex-col-center bg-dark lgScreen:w-[600px] `,
]);

const App = () => {
  const navigate = useNavigate();
  return (
    <div css={tw`w-h-full flex-col-center text-white`}>
      <div css={gameScreenCss}>
        <Routes>
          <Route
            path="/"
            element={<TitlePage />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
