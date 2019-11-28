import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <>
            <Header>
                <Title>
                    <Link to={`/`}><img src={'./img/logo.svg'} /></Link>
                </Title>
            </Header>
        </>
    );
};

const Header = styled.div`
    top: 0;
    width: 100%;
    background-color: #202124;
    border-bottom: #CF000D 5px solid;
    height: 60px;
    color: white;
    display: flex;
`;

const Title = styled.div`
    padding-left: 30px;
    padding-top: 15px;
    font-size: 30px;
    > a {
      display: inline-flex;
    }
`;

export default HeaderComponent;
