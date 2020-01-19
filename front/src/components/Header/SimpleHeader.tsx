import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SimpleHeader = () => {
  const title = 'テストアプリ';
  return (
    <>
      <HeaderWrapper>
        <Title>
          <Link to={'/'} data-test={'head-title'}>
            {title}
          </Link>
        </Title>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  top: 0;
  width: 100%;
  background-color: #202124;
  border-bottom: #cf000d 5px solid;
  height: 60px;
  color: white;
  display: flex;
`;

const Title = styled.div`
  padding-left: 20px;
  padding-top: 10px;
  font-size: 30px;
  > a {
    display: inline-flex;
    text-decoration: none;
    color: white;
  }
`;

export default SimpleHeader;
