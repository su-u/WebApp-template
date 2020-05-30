import React from 'react';
import { NavBar } from '@/components/header/NavBar';

export const App: React.FC = () => {
  return (
    <>
      <NavBar title="Home" />
      <div data-test="div1">テストアプリテキスト</div>
      <div>divテキスト</div>
      <h2>見出しテキスト</h2>
    </>
  );
};
