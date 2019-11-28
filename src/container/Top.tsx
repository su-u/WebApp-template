import React from 'react';
import styled from 'styled-components';
import SideContent from "@/container/SideContent";

const Wrapper = styled.div`
    width: 100%;
    max-width: 850px;
    display: -webkit-flex;
    display: flex;
    margin: 20px auto 0;
`;

const Main = styled.div`
    display: block;
    width: 600px;
`;

const Img = styled.img`
    width: 100%;
`;

const Top = () => {
    return (
        <>
            <Wrapper>
                <Main>
                    <Img src={'./img/naritake.jpg'} />
                    津田沼駅周辺には、おいしいラーメン屋さんがいっぱいあります。このサイトではその中でも人気のお店を紹介します。ぜひ一度味わってみましょう。
                </Main>
                <SideContent/>
            </Wrapper>
        </>
    );
};

export default Top;
