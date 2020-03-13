import React from 'react';
import ButtonAppBar from '@/components/Header/NavBar';

const App = () => {
  return (
    <>
      <ButtonAppBar title="Home" />
      <div data-test="div1">テストアプリテキスト</div>
      <div>divテキスト</div>
      <h2>見出しテキスト</h2>
    </>
  );
};

export default App;
